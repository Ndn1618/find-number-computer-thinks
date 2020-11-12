// Choosing elements
var elUserNumberForm = document.querySelector('.user-number-form');
var elUserNumberInput = elUserNumberForm.querySelector('.user-number-input');
var elUserNumberButton = elUserNumberForm.querySelector('.user-number-button');

var elResultsDiv = document.querySelector('.results-div');
var elAttempts = document.querySelector('.attempts-span');
var elComputerChoiceWrapper = elResultsDiv.querySelector('.computer-choice-wrapper');
var elComputerChoice = elResultsDiv.querySelector('.computer-choice');
var elUserChoice = elResultsDiv.querySelector('.user-choice');
var elResultParagraph = elResultsDiv.querySelector('.result');

var elResetButton = document.querySelector('.reset-button');

// Variables
var attempt = 6;

// Taking the number which computer thought
var compNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
elComputerChoice.textContent = compNumber;

// Focus number input
elUserNumberInput.focus();

// Focus input and equal its value to nothing
var focusAndClearInput = function (inputName) {
  inputName.value = '';
  inputName.focus();
}

// Listen to sumbit event of form
elUserNumberForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Taking value of user choice
  var elUserNumberInputValue = elUserNumberInput.value.trim();

  // If input has no anything, return
  if (elUserNumberInputValue === '') {
    alert('Son kiriting!');
    focusAndClearInput(elUserNumberInput);
    return;
  }

  // If value of input isn't a number, return
  if (isNaN(elUserNumberInputValue)) {
    alert('Sonni raqamda kiriting!');
    focusAndClearInput(elUserNumberInput);
    return;
  }

  elUserNumberInputValue = parseFloat(elUserNumberInputValue, 10);

  if (elUserNumberInputValue >= 1 && elUserNumberInputValue <= 100) {
    elUserChoice.textContent = elUserNumberInputValue;

    if (attempt !== 1) {
      if (elUserNumberInputValue > compNumber) {
        elResultParagraph.textContent = 'Siz o\'ylagan son kompyuter o\'ylagan sondan katta 🙃';
      } else if (elUserNumberInputValue < compNumber) {
        elResultParagraph.textContent = 'Siz o\'ylagan son kompyuter o\'ylagan sondan kichik 🙃';
      } else {
        elResultParagraph.textContent = 'Topdingiz! Barakalla!!! 🥳🥳🥳';
        elComputerChoiceWrapper.classList.remove('d-none');
        elUserNumberInput.setAttribute('disabled', true);
        elUserNumberButton.setAttribute('disabled', true);
      }
    } else {
      if (elUserNumberInputValue === compNumber) {
        elResultParagraph.textContent = 'Topdingiz! Barakalla!!! 🥳🥳🥳';
      } else {
        elResultParagraph.textContent = 'Qaytadan urunib ko\'ring 😉';
      }
      elComputerChoiceWrapper.classList.remove('d-none');
      elUserNumberInput.setAttribute('disabled', true);
      elUserNumberButton.setAttribute('disabled', true);
    }
    attempt--;
    elAttempts.textContent = attempt;
  } else {
    alert('1 hamda 100 orasidagi son kiriting!');
    focusAndClearInput(elUserNumberInput);
  }

  elUserNumberInput.focus();
});

elResetButton.addEventListener('click', function () {
  window.location.reload();
});
