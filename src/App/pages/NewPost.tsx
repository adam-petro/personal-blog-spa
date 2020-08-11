import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import marked from "marked";

const Div = styled.div`
  display: flex;
  flexdirection: row;
  justifycontent: center;
  width: 100%;
`;

const Form = styled.form`
  margin: 0;
  display: block;
  flex-basis: 100%;
  flex: 1;
  width: 45%;
`;

const TextArea = styled.textarea`
  resize: none;
`;

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
      <Div>
        <Form>
          <TextArea
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
        </Form>
        <Card dangerouslySetInnerHTML={{ __html: marked(text) }} />
      </Div>
    </Layout>
  );
}
