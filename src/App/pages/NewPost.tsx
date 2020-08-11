import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import marked from "marked";

const Card = styled.div`
  display: block;
  text-decoration: inherit;
  color: inherit;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.75);
    border: none;
    transform: scale(1.005);
    transition-duration: 0.2s;
    transform: translateY(-2px);
  }
`;
export default function NewPost() {
  const [text, setText] = React.useState<string>("");

  return (
    <Layout padding={55}>
      <div
        style={{
          height: "600px",
          display: "flex",
          flexDirection: "row",
          justifyContent: " center",
        }}
      >
        <form style={{ flexGrow: 1, flexBasis: 0 }}>
          <textarea
            style={{
              padding: "3px",
              display: "block",
              width: "100%",
              height: "100%",
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <Card
          style={{ flexGrow: 1, flexBasis: 0 }}
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />
      </div>
    </Layout>
  );
}
