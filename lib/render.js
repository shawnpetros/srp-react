import { TEXT_ELEMENT } from "../constants";

export default function render(element, container) {
  // store off domTree to add to dom
  // create textNode or other element
  const dom =
    element.type === TEXT_ELEMENT
      ? document.createTextNode(element.props.nodeValue)
      : document.createElement(element.type);
  // recurse over children appending to domTree
  element.props.children.forEach(child => render(child, dom));
  // loop over props, adding them to the element
  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(prop => (dom[prop] = element.props[prop]));
  // append to container
  container.appendChild(dom);
}
