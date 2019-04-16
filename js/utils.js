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
  return '#' + Math.floor(Math.random()*16777215).toString(16);
  // return 'rgb(' + randomInteger (20, 255) + ',' + randomInteger (20, 255) + ',' + randomInteger (20, 255) + ')';
}

function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

