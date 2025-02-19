import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import components from "../components/templates";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ...components,
};
