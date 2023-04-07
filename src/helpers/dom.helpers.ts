function getId(id: string): HTMLElement | null {
  if (id !== null) {
    return document.getElementById(id);
  } else {
    return null;
  }
}

function getClasses(className: string): HTMLCollection | null {
  if (className) {
    return document.getElementsByClassName(className);
  } else {
    return null;
  }
}

function getElements(element: string): NodeListOf<HTMLElement> | null {
  if (element) {
    return document.getElementsByName(element);
  } else {
    return null;
  }
}

function getBtn(btnId: string = 'button'): HTMLCollectionOf<Element> | null {
  if (btnId !== 'button' && btnId) {
    return document.getElementsByTagName(btnId);
  } else {
    return null;
  }

}

module.exports = {
  getId,
  getClasses,
  getElements,
  getBtn
};
