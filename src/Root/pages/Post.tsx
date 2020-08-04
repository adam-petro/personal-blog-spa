import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Loader from "../components/Loader";

interface Post {
  title: string;
  subtitle: string;
  body: string;
  imageUrl?: string;
  date: Date;
  slug: string;
  status?: number;
}

export default function Post(routeParams: any) {
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
        `http://localhost:3000/posts/${routeParams.match.params.slug}`
      ).then((response) => conditionalChain(response));
    };
    getData();
  }, []);

  return (
    <>
      {!isLoading && postRetrieved && post === undefined && (
        <Route component={ErrorPage} />
      )}
      {isLoading && <Loader />}
      {!isLoading && postRetrieved && post !== undefined && (
        <>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
}
