import { deletions } from ".";

export default function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wip.alternate && wipFiber.alternate.child;
  let previousSibling = null;

  while (index < elements.length || oldFiber != null) {
    const element = elements[index];
    let newFiber = null;

    const sameType = oldFiber && element && element.type === oldFiber.type;
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE"
      };
    }
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT"
      };
    }
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION";
      deletions.push(oldFiber);
    }
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      previousSibling.sibling = newFiber;
    }
    previousSibling = newFiber;
    index++;
  }
}
