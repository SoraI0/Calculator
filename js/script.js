let display = document.querySelector('.calculator__display')
let numberKeys = document.querySelectorAll('.numbers__num, .operators__plus, .operators__minus, .operators__mul, .operators__div')

let clear = document.querySelector('.operators__clear')
let backspace = document.querySelector('.operators__backspace')
let equals = document.querySelector('.operators__equals')

console.log(eval('10 * 0'));

numberKeys.forEach(element => {
	element.addEventListener('click', function () {
		display.value += element.innerHTML;
	})
})

clear.addEventListener('click', function () {
	display.value = '';
	display.placeholder = 'Уведіть вираз'
})

backspace.addEventListener('click', function () {
	display.value = display.value.slice(0, -1);
	display.placeholder = 'Уведіть вираз'
})

equals.addEventListener('click', function () {
	try {
		display.value = eval(display.value);
	}
	catch {
		display.value = '';
		display.placeholder = 'Помилка'
	}
})



