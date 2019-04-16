/////// [/][   Helper functions   ][/] ///////
function createElement (tagName) {
  return document.createElement(tagName);
}

function insertOneElToAnother (parent, child, isBefore) {
  if (isBefore) {
    parent.insertBefore(child);
  } else {
    parent.appendChild(child);
  }
}

function insertArrayElementsToTarget (parent, childsArray) {
  for (let i = 0; i < childsArray.length; i++) {
    insertOneElToAnother(parent, childsArray[i]);
  }
}

function removeAllChildsFromElem (nodeElement) {
  while (nodeElement.firstChild) {
    nodeElement.removeChild(nodeElement.firstChild);
  }
}

function setStyles (elem, styles) {
  const keys = Object.keys(styles);
  for (let i = 0; i < keys.length; i++) {
    elem.style[keys[i]] = styles[keys[i]];
  }
}

function setData (elem, dataName, dataValue) {
  elem.dataset[dataName] = dataValue;
}

function addClass (elem, className) {
  elem.classList.add(className);
}

function generateColor () {
  return 'rgb(' + random (20, 255) + ',' + random (20, 255) + ',' + random (20, 255) + ')';
}

function random (min, max){
  if (!min && min !== 0) {
    return Math.random();
  } else if (!max) {
    return Math.random() * min;
  }

  return Math.random() * (max - min) + min;
}

