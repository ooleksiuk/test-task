// * Functions
function addInput() {
  const newId = document.querySelectorAll('input[type="text"]').length;
  // input text value
  const textValue = document.getElementById('firstInput').value;

  // special case
  if (textValue === '555') {
    return createNewInput('---', newId);
  }
  const newValue = isEvenInput(newId, textValue);
  createNewInput(newValue, newId);
}

// create new text-input
function createNewInput(value, id) {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.value = value;
  newInput.id = id;
  // append (br + input) couple
  const form = document.forms.taskForm;
  form.appendChild(document.createElement('br'));
  form.appendChild(newInput);
}

function isEvenInput(id, textValue) {
  return id % 2 === 0 ? textValue.toUpperCase() : textValue.toLowerCase();
}
