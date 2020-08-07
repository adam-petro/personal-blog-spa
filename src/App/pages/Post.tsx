import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Loader from "../components/Loader";
import Layout from "../components/Layout";

interface Post {
  title: string;
  subtitle: string;
  body: string;
  imageUrl?: string;
  date: Date;
  slug: string;
  status?: number;
}

export default function Post({ match, history, location }: any) {
  const [post, setPost] = useState<Post | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [postRetrieved, setPostRetrieved] = useState<boolean>(false);

  async function conditionalChain(response: any) {
    let data: Post | undefined;
    response.ok ? (data = await response.json()) : (data = undefined);
    setPost(data);
    setIsLoading(false);
    setPostRetrieved(true);
  }
  useEffect(() => {
    const getData = () => {
      fetch(
        `http://localhost:3001/posts/${match.params.slug}`
      ).then((response) => conditionalChain(response));
    };
    getData();
  }, [match.params.slug]);

  return (
    <Layout>
      {!isLoading && postRetrieved && post === undefined && (
        <Route component={ErrorPage} />
      )}
      {isLoading && <Loader timeoutPeriod={3000} />}
      {!isLoading && postRetrieved && post !== undefined && (
        <>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          <p>{post.body}</p>
        </>
      )}
    </Layout>
  );
}
