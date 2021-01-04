import React from "react";

const Flex = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? "flex" : "block",
      justifyContent: props.justifyContent || "flex-start",
      flexDirection: props.flexDirection || "row",
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || "auto",
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || "nowrap",
      flex: props.flex || "0 1 auto",
      alignItems: props.alignItems || "stretch",
    }}
  >
    {props.children}
  </div>
);

export default Flex;
