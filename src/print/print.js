export default function printMe() {
  const btn = document.createElement('button');
  
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  console.log('I get called from the print.js!');

  return btn;
}
