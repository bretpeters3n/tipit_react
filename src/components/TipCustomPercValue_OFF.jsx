function TipCustomPercValue_OFF() {
  console.log('test-toggle-OFF');
  var element = document.getElementById("placeholder-custom-perc-field");
  element.style.opacity = "0";
  element.style.pointerEvents = "none";
}

export default TipCustomPercValue_OFF;