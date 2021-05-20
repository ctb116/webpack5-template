import printMe from './print/print.js';


async function getComponent() {
  const {default: _ } = await import('lodash');
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.appendChild(printMe());

  return element;
  
}

getComponent().then((component) => {
  document.body.appendChild(component);
})