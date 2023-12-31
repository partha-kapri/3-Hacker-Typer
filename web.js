let input = document.getElementById("input")
let speed = 10

input.addEventListener("input", () => {
  let num = input.value.length + speed;
  input.value = code.slice(0,num)
})
