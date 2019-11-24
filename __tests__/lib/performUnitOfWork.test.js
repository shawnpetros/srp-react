import performUnitOfWork from '../../lib/performUnitOfWork'

jest.mock('../../lib/createDom', () => {
  console.log("hey! i'm in a mock!")
  return jest.fn()
})
jest.mock('../../lib/reconcileChildren', () => {
  console.log("hey! i'm in a mock!")
  return jest.fn()
})
describe('performUnitOfWork', () => {
  it('should return a child fiber', () => {
    const fiber = { props: { children: [] }, child: {}, sibling: 1, parent: 2 }
    const expected = {}
    const actual = performUnitOfWork(fiber)
    expect(actual).toEqual(expected)
  })
  it('should return a sibling fiber', () => {
    const fiber = { props: { children: [] }, sibling: 1, parent: 2 }
    const expected = 1
    const actual = performUnitOfWork(fiber)
    expect(actual).toEqual(expected)
  })
  it('should return a parent fiber', () => {
    const fiber = {
      props: { children: [] },
      parent: { props: { children: [] }, sibling: 'nested sib' }
    }
    const expected = 'nested sib'
    const actual = performUnitOfWork(fiber)
    expect(actual).toEqual(expected)
  })
})
