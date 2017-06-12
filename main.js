var calculator = document.querySelector('.calculator');
var screenValue = calculator.querySelector('.screen');
var selectedInputs = "";
var allItems = document.querySelectorAll('.item');

for (i = 0; i < allItems.length; i ++) {
  allItems[i].addEventListener('click', function(event){
    var selectedButton = event.currentTarget.value;
    if (selectedButton === "sqrt") {
      selectedInputs = Math.sqrt(selectedInputs);
    }

    if (selectedButton === "=") {
      selectedInputs = eval(selectedInputs);
      screenValue.value = selectedInputs;
    } else if (selectedButton === "C") {
      selectedInputs = "";
      screenValue.value = selectedInputs;
    } else {
      selectedInputs += selectedButton;
      screenValue.value = selectedInputs;
    }
});
}
