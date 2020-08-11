import React from "react";

export default function Layout(props: any) {
  return (
    <div style={{ paddingTop: props.padding ? `${props.padding}px` : "47px" }}>
      {props.children}
    </div>
  );
}
