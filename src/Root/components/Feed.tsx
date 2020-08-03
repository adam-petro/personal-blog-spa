import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import PostPreview from "./PostPreview";

interface Post {
  title: string;
  subtitle: string;
  body: string;
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

  function renderPost(routerProps: any) {
    const postSlug = routerProps.match.params.slug;
    const foundPost = posts.find((post) => post.slug === postSlug);
    return foundPost ? (
      <Post title={foundPost.title} />
    ) : (
      <h1>Not found, srry</h1>
    );
  }

  const PostsList = styled.ul`
    margin: auto;
    width: 35%;
    liststyletype: "none";
  `;

  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/posts/:slug"
          render={(routerProps: any) => renderPost(routerProps)}
        />
        <PostsList>
          {isLoading ? (
            <h1>Loading u fuck</h1>
          ) : (
            posts.map((post) => (
              <PostPreview
                url={`/posts/${post.slug}`}
                title={post.title}
                description={post.subtitle}
              />
            ))
          )}
        </PostsList>
      </Switch>
    </React.Fragment>
  );
}

export function Post(props: any) {
  return <h1>{props.title}</h1>;
}
