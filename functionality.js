const addTodo = () => {
    let newTask = textIn.value
    let date = setDate.value

    if (newTask != '') {
        todosArray.push({
            title: newTask,
            checked: false,
            date,
        })
        localStorage.setItem('todos', JSON.stringify(todosArray))

        renderTodoItem()
        textIn.value = ''
        setDate.value = ''
    }
}
const deleteTodo = (e) => {
    // e.currentTarget.parentNode.remove(e.parentNode)
    // console.log('delete')

    let index = parseInt(e.target.parentNode.getAttribute('key'))
    todosArray.splice(index, 1)
    console.log(todosArray)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderTodoItem()
}

const completeTodo = (e) => {
    let todosNew = [...todosArray]

    let index = parseInt(e.target.parentNode.getAttribute('key'))
    // console.log(typeof parseInt(e.target.parentNode.id))
    // console.log(typeof e.target.parentNode.id)
    // console.log(index)
    // console.log(todosArray[index])

    let objElement = todosNew[index].checked
    todosNew[index].checked = !objElement

    localStorage.setItem('todos', JSON.stringify(todosNew))
    // console.log(todosTemperory)
    let isDone = e.currentTarget.parentNode.classList.contains('done')
    isDone
        ?
        e.currentTarget.parentNode.classList.remove('done') :
        e.currentTarget.parentNode.classList.add('done')
}