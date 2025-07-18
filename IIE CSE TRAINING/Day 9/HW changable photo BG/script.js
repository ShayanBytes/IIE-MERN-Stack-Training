function selectPerson(imgElement) {
  const mainImage = document.getElementById('main-image');
  mainImage.src = imgElement.src;
}

function changeBgColor(swatch) {
  const displayPanel = document.getElementById('display-panel');
  displayPanel.style.backgroundColor = swatch.style.backgroundColor;
}
