document.addEventListener("DOMContentLoaded", () => {
  addSubmitFormListener()
  
  function addSubmitFormListener() {
    let form = document.getElementById('create-task-form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      addToDo(`${e.target["new-task-description"].value} `)
      form.reset()
    })
  }


  // This callback function handles adding list items to the to-do list
  function addToDo(toDoItem) {
    let taskList = document.getElementById('tasks')
    let newLi = document.createElement('li')
    let btn = document.createElement('button')
    let dropDown = document.createElement('select')

    newLi.textContent = toDoItem
    btn.textContent = 'x'
    btn.title = 'delete'
    handleToDoDelete(btn)
    populateNewDropdown(dropDown)
    handleDropdownChange(dropDown, newLi)

    
    taskList.append(newLi)
    newLi.append(dropDown, btn)
  }


  // add an event listener that registers when a button is clicked.
  function handleToDoDelete(deleteBtn) {
    deleteBtn.addEventListener('click', e => e.target.parentElement.remove())
  }


  function populateNewDropdown(dropDown) {
    let optionNone = document.createElement('option')
    let optionHigh = document.createElement('option')
    let optionMed = document.createElement('option')
    let optionLow = document.createElement('option')

    optionNone.textContent = 'none selected'
    optionHigh.textContent = "high"
    optionMed.textContent = "medium"
    optionLow.textContent = "low"

    dropDown.append(optionNone, optionHigh, optionMed, optionLow)
  }


  function handleDropdownChange(dropDown, newLi) {
    dropDown.addEventListener('change', e => {
      if (e.target.value === 'high') {
        newLi.style.color = 'red'
      }
      if (e.target.value === 'medium') {
        newLi.style.color = "orange"
      }
      if (e.target.value === 'low') {
        newLi.style.color = "blue"
      }
    })
  }

});

