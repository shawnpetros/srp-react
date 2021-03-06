import performUnitOfWork from './performUnitOfWork'

// shim for requestIdleCallback and cancelIdleCallback
// in case it's needed
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (cb) {
    var start = Date.now()
    return setTimeout(function () {
      /* istanbul ignore next */
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start))
        }
      })
    }, 1)
  }

window.cancelIdleCallback =
  window.cancelIdleCallback ||
  function (id) {
    /* istanbul ignore next */
    clearTimeout(id)
  }

export let nextUnitOfWork = null
export let wipRoot = null
let currentRoot = null
let deletions = null

export function workloop (deadline) {
  let shouldYield = false

  console.log(
    'this is nextUnit',
    nextUnitOfWork,
    'and shouldYield',
    shouldYield
  )

  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    console.log('while loop in workloop, nextUnit', nextUnitOfWork)
    console.log('deadline is,', deadline)
    shouldYield = deadline.timeRemaining() < 1
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
  requestIdleCallback(workloop)
}

function commitRoot () {
  deletions.forEach(commitWork)
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

function commitWork (fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  if (fiber.effectTag === 'PLACEMENT' && fiber.dom != null) {
    domParent.appendChild(fiber.dom)
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props)
  } else if (fiber.effectTag === 'DELETION') {
    domParent.removeChild(fiber.dom)
  }
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

function render (element, container) {
  console.log('we rendering yo...')
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    },
    alternate: currentRoot
  }
  deletions = []
  nextUnitOfWork = wipRoot
}
;(() => {
  requestIdleCallback(workloop)
})()

export default render
