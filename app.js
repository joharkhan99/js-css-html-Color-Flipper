function changeBG() {
  const redColor =parseInt(Math.random() * 255);
  const greenColor = parseInt(Math.random() * 255);
  const blueColor = parseInt(Math.random() * 255);

  const combine = redColor.toString(16) + greenColor.toString(16) + blueColor.toString(16);

  document.body.style.background = "#" + combine;
  document.getElementById("value").textContent = combine.toUpperCase();
}

