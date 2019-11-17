import textElement from "../lib/textElement";

export default function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : textElement(child)
      )
    }
  };
}
