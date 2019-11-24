import { TEXT_ELEMENT } from '../constants'

export default function textElement (text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: []
    }
  }
}
