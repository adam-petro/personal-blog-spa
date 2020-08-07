import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostPreview from "./PostPreview";
import Loader from "./Loader";

const PostsList = styled.div`
  display: grid;
  margin: 30px 20px;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
      fetch(`http://localhost:3001/posts/feed`)
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
          <Loader timeoutPeriod={3000} />
        ) : (
          posts.map((post) => (
            <>
              <PostPreview
                key={post.slug}
                url={`/posts/${post.slug}`}
                title={post.title}
                description={post.subtitle}
              />
              <PostPreview
                key={post.slug}
                url={`/posts/${post.slug}`}
                title={post.title}
                description={post.subtitle}
              />
              <PostPreview
                key={post.slug}
                url={`/posts/${post.slug}`}
                title={post.title}
                description={post.subtitle}
              />
            </>
          ))
        )}
      </PostsList>
    </React.Fragment>
  );
}
