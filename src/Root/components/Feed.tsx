import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import PostPreview from "./PostPreview";
import Loader from "./Loader";
const PostsList = styled.ul`
  margin: auto;
  width: 35%;
  liststyletype: "none";
`;

interface Post {
  title: string;
  subtitle: string;
  imageUrl?: string;
  date: Date;
  slug: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = () => {
      fetch(`http://localhost:3000/posts/feed`)
        .then((response) => response.json())
        .then((response) => setPosts(response))
        .then(() => setIsLoading(false));
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      <PostsList>
        {isLoading ? (
          <Loader />
        ) : (
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              url={`/posts/${post.slug}`}
              title={post.title}
              description={post.subtitle}
            />
          ))
        )}
      </PostsList>
    </React.Fragment>
  );
}

export function Post(props: any) {
  return <h1>{props.title}</h1>;
}
