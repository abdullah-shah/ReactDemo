import React from 'react'

export function parseHTML(htmlString) {
    const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  const reactComponents = Array.from(tempElement.childNodes).map((node, index) =>
    convertNodeToReact(node, index)
  );
  return reactComponents;
}

function convertNodeToReact(node, index) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const tagName = node.tagName.toLowerCase();
    const attributes = getAttributes(node.attributes);
    const children = Array.from(node.childNodes).map((childNode, childIndex) =>
      convertNodeToReact(childNode, childIndex)
    );
    return React.createElement(tagName, { key: index, ...attributes }, ...children);
  } else {
    return null;
  }
}

function getAttributes(attributes) {
  const attrs = {};
  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    attrs[attribute.name] = attribute.value;
  }
  return attrs;
}