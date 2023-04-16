let display = document.querySelector('.calculator__display')
let numberKeys = document.querySelectorAll('.numbers__num, .operators__plus, .operators__minus, .operators__mul, .operators__div')

let clear = document.querySelector('.operators__clear')
let backspace = document.querySelector('.operators__backspace')
let equals = document.querySelector('.operators__equals')


numberKeys.forEach(element => {
	element.addEventListener('click', function () {
		console.log(isNaN(+display.value[display.value.length - 1]));

		// if (element.innerHTML === '+' && display.value[display.value.length - 1] === '+') {
		// 	console.log('true');
		// } else {
		// 	display.value += element.innerHTML;
		// }
		// if (display.value === '' || Number.isFinite(+display.value[display.value.length - 1]) === Number.isFinite(+element.innerHTML)) {
		// 	display.value += element.innerHTML;
		// }
		// else 



		if (isNaN(+element.innerHTML) && isNaN(+display.value[display.value.length - 1])) {
			if (element.innerHTML === '(' && (display.value === '' || display.value[display.value.length - 1] === '(' || isNaN(display.value[display.value.length - 1]))) {
				if (!isNaN(+display.value[display.value.length - 1]) && element.innerHTML === '(') {
					display.value += '*' + element.innerHTML;
				} else {
					display.value += element.innerHTML;

				}
			}
			if ((!isNaN(element.innerHTML) && display.value[display.value.length - 1] === ')') || display.value[display.value.length - 1] === ')' && isNaN(element.innerHTML)) {
				display.value += element.innerHTML;
			}

			if (element.innerHTML === ')' && display.value[display.value.length - 1] === ')') {
				display.value += element.innerHTML;
			}
			if (element.innerHTML === '-' && display.value[display.value.length - 1] === '-') {

			}
			if (element.innerHTML === '-' && display.value === '') {
				display.value += element.innerHTML;
			}
		}
		else {
			display.value += element.innerHTML;
		}







		// if () {

		// }
		// else {
		// 	display.value += element.innerHTML;
		// }
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
		if (isNaN(eval(display.value))) {
			display.value = '';
			display.placeholder = 'Помилка'
		} else {
			display.value = eval(display.value);
		}
	}
	catch {
		display.value = '';
		display.placeholder = 'Помилка'
	}
})
