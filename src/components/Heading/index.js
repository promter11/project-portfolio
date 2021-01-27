import React from "react";
import { string, number, node } from "prop-types";

const Heading = ({ children, className, level = 1 }) => {
  const Tag = "h" + level;

  return <Tag className={className}>{children}</Tag>;
};

Heading.propTypes = {
  children: node,
  className: string,
  level: number,
};

export default Heading;
