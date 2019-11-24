import { TEXT_ELEMENT } from '../../constants'
import { textElement } from '../../lib'

describe('textElement', () => {
  it('should take in text and return a node object', () => {
    const expected = {
      type: TEXT_ELEMENT,
      props: {
        nodeValue: 'foo',
        children: []
      }
    }
    const actual = textElement('foo')

    expect(actual).toEqual(expected)
  })
})
