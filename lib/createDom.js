import { TEXT_ELEMENT } from '../constants'

export default function createDom (fiber) {
  // store off a fiber instance
  // create textNode or other element
  const dom =
    fiber.type === TEXT_ELEMENT
      ? document.createTextNode(fiber.props.nodeValue)
      : document.createElement(fiber.type)
  // loop over props, adding them to the dom elem
  const isProperty = key => key !== 'children'
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(prop => (dom[prop] = fiber.props[prop]))
  // return dom
  return dom
}
