import { createDom, createElement, textElement } from '../../lib'

describe('createDom', () => {
  it('should be a function', () => {
    expect(typeof createDom).toBe('function')
  })
  it('should take in a fiber and return created dom', () => {
    const fiber = createElement('h1', { title: 'foo' }, '')
    const returnedDom = createDom(fiber)
    const h1 = document.createElement('h1')
    h1.title = 'foo'
    expect(returnedDom).toEqual(h1)
  })
  it('should take in a fiber and return created dom for textElement', () => {
    const fiber = textElement('foo')
    const returnedDom = createDom(fiber)
    const textNode = document.createTextNode('foo')
    expect(returnedDom).toEqual(textNode)
  })
})
