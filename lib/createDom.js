import { TEXT_ELEMENT } from '../constants'
import { updateDom } from '.'

export default function createDom (fiber) {
  // store off a fiber instance
  // create textNode or other element
  const dom =
    fiber.type === TEXT_ELEMENT
      ? document.createTextNode(fiber.props.nodeValue)
      : document.createElement(fiber.type)

  updateDom(dom, {}, fiber.props)
  // return dom
  return dom
}
