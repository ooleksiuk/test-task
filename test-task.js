function addInput() {
  const newId = document.querySelectorAll('input').length;
  const oldValue = document.getElementById('firstInput').value;
  
   
  if (oldValue === '555') {
    return createNewInput('---', newId);
  }

  const newValue = newId % 2 === 0 ? oldValue.toUpperCase() : oldValue.toLowerCase();

  createNewInput(newValue, newId);
}

function createNewInput(value, id) {
  const form = document.forms.taskForm;
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.value = value;
  newInput.id = id;
  form.appendChild(document.createElement('br'));
  form.appendChild(newInput);
}
