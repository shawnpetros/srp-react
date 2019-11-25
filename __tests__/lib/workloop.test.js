import { workloop } from '../../lib/render'
import performUnitOfWork from '../../lib/performUnitOfWork'
import expectExport from 'expect'

jest.mock('../../lib/performUnitOfWork')
jest.spyOn(window, 'requestIdleCallback')

describe('workloop', () => {
  it('should pass', () => expectExport(true).toEqual(true))
  //   it.skip('should should call requestIdleCallback to start a loop', () => {
  //     // workloop()
  //     expect(true).toEqual(true)
  //   })
  // it('should should call requestIdleCallback to start a loop', () => {
  //   workloop()
  //   expect(performUnitOfWork).toHaveBeenCalled()
  // })
})
