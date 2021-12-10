let tasks = ['Я хочу сделать список задач'];
let input = document.querySelector('input')
let ul = document.querySelector('ul')

function render() {
    ul.innerHTML = ''
    tasks.forEach((el, i) => document.querySelector('ul').insertAdjacentHTML('afterbegin', `<li>${el} <button data-i=${i}>-</button></li>`))
    ul.querySelectorAll('button').forEach(el => el.onclick = removeTask)
}


function removeTask(e) {
    let i = +e.target.getAttribute('data-i')
    tasks = tasks.filter((el, index) => index !== i )
    render()
}

document.querySelector('button').onclick = () => {
    if (input.value.trim()) {
        tasks.push(input.value)
        input.value = ''
        render()
    } else {
        input.value = ''
    }
}

render()