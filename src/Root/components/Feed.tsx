import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

  const PostsList = styled.ul`
    margin: auto;
    width: 35%;
    liststyletype: "none";
  `;

  return (
    <React.Fragment>
      <PostsList>
        {isLoading ? (
          <h1>Loading u fuck</h1>
        ) : (
          posts.map((post) => (
            <PostPreview
              url={`/${post.slug}`}
              title={post.title}
              description={post.subtitle}
            />
          ))
        )}
      </PostsList>
    </React.Fragment>
  );
}
