const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let i = 0
  document.body.addEventListener("keydown",(event) =>  {
debugger
let key = event.key
  if (key === codes[i]) {
    i++
    if (i === codes.length) {
      alert('Hurray!')
      i = 0
    }
  } else {
    i = 0
  }
})
}
