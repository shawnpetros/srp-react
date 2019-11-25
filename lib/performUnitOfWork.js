import createDom from './createDom'
import reconcileChildren from './reconcileChildren'

export default function performUnitOfWork (fiber) {
  console.log("here's the fiber in performUnitOfWork", fiber)
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  const elements = fiber.props.children
  reconcileChildren(fiber, elements)

  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}
