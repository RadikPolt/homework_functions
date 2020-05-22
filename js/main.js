'use strict';

function compareNmber(firstNum = 0, secondNum = 0) {
	if (firstNum > secondNum) {
		return '1';
	} else if (firstNum < secondNum) {
		return '-1';
	} else {
		return '0';
	}
}

console.log(compareNmber());

function showСomparisonNmber() {
	let firstNum = +document.querySelector('#number_1').value;
	let secondNum = +document.querySelector('#number_2').value;
	let result = document.querySelector('.ba-result__text');
	result.textContent = compareNmber(firstNum, secondNum);
}


document.querySelector('[data-btn1]').addEventListener('click', showСomparisonNmber);

function calculateFactorial(number = 0) {
	let result = 1;
	if (number !== '') {
		if (number >= 0) {
			for (let index = 1; index <= number; index++) {
				result *= index;
			}
			return result;
		} else {
			return 'Введите положительное число!'
		}
	} else {
		return 'Введите число!'
	}
}
console.log(calculateFactorial());

function showFactorial() {
	let num = document.querySelector('#number_3').value;
	let result = document.querySelector('.ba-result2__text');
	result.textContent = calculateFactorial(num);
}
document.querySelector('[data-btn2]').addEventListener('click', showFactorial);

function createNumber(first = 0, second = 0, third = 0) {
	let num_1 = String(first);
	let num_2 = String(second);
	let num_3 = String(third);
	let result = num_1 + num_2 + num_3;
	result = +result;
	return result;
}
console.log(createNumber(1, 2, 3));

function showCreateNumber() {
	let firstNum = document.querySelector('#number_4').value;
	let secondNum = document.querySelector('#number_5').value;
	let thirdNum = document.querySelector('#number_6').value;
	let result = document.querySelector('.ba-result3__text');
	result.textContent = createNumber(firstNum, secondNum, thirdNum);
}


document.querySelector('[data-btn3]').addEventListener('click', showCreateNumber);

function calculateArea(height = 0, width = 0) {

	let area = 0;

	if (height > 0 && width > 0) {
		area = height * width;
	} else if (height > 0) {
		area = height ** 2;
	} else if (width > 0) {
		area = width ** 2;
	}
	return area;
}

console.log(calculateArea());


function showCalculateArea() {
	let height = document.querySelector('#number_7').value;
	let width = document.querySelector('#number_8').value;
	let result = document.querySelector('.ba-result4__text');
	result.textContent = calculateArea(height, width);
}

document.querySelector('[data-btn4]').addEventListener('click', showCalculateArea);

function checkNumber(num = 6) {
	let number = +num;
	let divider = 0;
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (number % i === 0) {
			divider = i;
			sum += divider;
		}
	}
	if (sum === number && divider > 0) {
		return number + ' - совершенное число';

	} else {
		return number + ' - несовершенное число';
	}
}
console.log(checkNumber());

function showCheckNumber() {
	let num = document.querySelector('#number_9').value;
	let result = document.querySelector('.ba-result5__text');
	result.textContent = checkNumber(num);

}

document.querySelector('[data-btn5]').addEventListener('click', showCheckNumber);


function checkNumber2(num = 0) {
	let number = +num;
	let divider = 0;
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (number % i === 0) {
			divider = i;
			sum += divider;
		}
	}
	if (sum === number) {
		return sum === number;

	} else {
		return sum === number;
	}
}

function CheckNumberFromRange(num_1 = 0, num_2 = 0) {
	let min, max;
	if (num_1 < num_2 && num_1 !== num_2) {
		min = num_1;
		max = num_2;
	} else {
		min = num_2;
		max = num_1;
	}
	let numbers = '';
	let sum = 0;
	for (let i = min; i <= max; i++) {
		let iter = checkNumber2(i);
		// console.log(iter);
		if (iter === true && i > 0) {
			numbers += `${i},  `;
			sum += i
			// console.log(numbers);
		}
	}
	if (sum > 0) {
		return numbers;
	} else {
		return 'В заданом диапазоне нет совершенных чисел!'
	}
}
console.log(CheckNumberFromRange());

function showCheckNumberFromRange() {
	let num_1 = document.querySelector('#number_10').value;
	let num_2 = document.querySelector('#number_11').value;
	let result = document.querySelector('.ba-result6__text');
	result.textContent = CheckNumberFromRange(num_1, num_2);

}

document.querySelector('[data-btn6]').addEventListener('click', showCheckNumberFromRange);

function setTime(hours = 0, minutes = 0, seconds = 0) {
	let times;
	let h = +hours;
	let m = +minutes;
	let s = +seconds;
	let hTime, mTime, sTime;
	if (h >= 0 && h <= 24 && h != '') {
		hTime = `${h}`;
	} else {
		hTime = `00`;
	}
	if (m >= 0 && m <= 60 && m != '') {
		mTime = `${m}`;
	} else {
		mTime = `00`;
	}
	if (s >= 0 && s <= 60 && s != '') {
		sTime = `${s}`;
	} else {
		sTime = `00`;
	}
	times = `"${hTime}:${mTime}:${sTime}"`;
	return times;
}
console.log(setTime());

function showTime() {
	let num_1 = document.querySelector('#number_12').value;
	let num_2 = document.querySelector('#number_13').value;
	let num_3 = document.querySelector('#number_14').value;
	let result = document.querySelector('.ba-result7__text');
	result.textContent = setTime(num_1, num_2, num_3);
}

document.querySelector('[data-btn7]').addEventListener('click', showTime);

function convertTime(hours = 0, minutes = 0, seconds = 0) {
	let times;
	let h = +hours;
	let m = +minutes;
	let s = +seconds;
	let hTime, mTime, sTime;
	if (h >= 0 /* && h <= 24 */ && h != '') {
		hTime = h * 3600;
	} else {
		hTime = 0;
	}
	if (m >= 0 /* &&  m <= 60 */ && m != '') {
		mTime = m * 60;
	} else {
		mTime = 0;
	}
	if (s >= 0 /* &&  s <= 60 */ && s != '') {
		sTime = s;
	} else {
		sTime = 0;
	}
	times = hTime + mTime + sTime;
	return times;
}
console.log(convertTime());

function showConvertTime() {
	let num_1 = document.querySelector('#number_15').value;
	let num_2 = document.querySelector('#number_16').value;
	let num_3 = document.querySelector('#number_17').value;
	let result = document.querySelector('.ba-result8__text');
	result.textContent = `${convertTime(num_1, num_2, num_3)}c`;
}

document.querySelector('[data-btn8]').addEventListener('click', showConvertTime);

function convertTimeFromSeconds(seconds = 0) {
	let times;
	let s = +seconds;
	let hTime, mTime, sTime;
	if (s >= 0) {
		hTime = Math.floor(s / 3600);
		if (hTime > 9) {
			hTime = hTime;
		} else if (hTime > 0) {
			hTime = `0${hTime}`;
		} else {
			hTime = `00`;
		}
		mTime = Math.floor((s - hTime * 3600) / 60);
		if (mTime > 9) {
			mTime = mTime;
		} else if (mTime > 0) {
			mTime = `0${mTime}`;
		} else {
			mTime = `00`;
		}
		sTime = s - hTime * 3600 - mTime * 60;
		if (sTime > 9) {
			sTime = sTime;
		} else if (sTime > 0) {
			sTime = `0${sTime}`;
		} else {
			sTime = `00`;
		}
	}
	times = `"${hTime}:${mTime}:${sTime}"`;
	return times;
}
console.log(convertTimeFromSeconds());

function showConvertTimeFromSeconds() {
	let num = document.querySelector('#number_18').value;
	let result = document.querySelector('.ba-result9__text');
	result.textContent = convertTimeFromSeconds(num);
}

document.querySelector('[data-btn9]').addEventListener('click', showConvertTimeFromSeconds);

function compareTime(hours_1 = 0, minutes_1 = 0, seconds_1 = 0, hours_2 = 0, minutes_2 = 0, seconds_2 = 0) {
	let time1 = convertTime(hours_1 , minutes_1 , seconds_1);
	let time2 = convertTime(hours_2 , minutes_2, seconds_2 );
	let difference = 0;
	if (time1 > time2) {
		difference = time1 - time2;
	} else if( time1 < time2){
		difference = time2 - time1;
	} else {
		difference = 0;
	}
	let convertDifference = convertTimeFromSeconds(difference);
	return convertDifference;
}
console.log(compareTime(1, 30, 15, 2, 30, 15));

function showCompareTime() {
	let num_1 = document.querySelector('#number_19').value;
	let num_2 = document.querySelector('#number_20').value;
	let num_3 = document.querySelector('#number_21').value;
	let num_4 = document.querySelector('#number_22').value;
	let num_5 = document.querySelector('#number_23').value;
	let num_6 = document.querySelector('#number_24').value;
	let result = document.querySelector('.ba-result10__text');
	result.textContent = compareTime(num_1, num_2, num_3, num_4, num_5, num_6);
}

document.querySelector('[data-btn10]').addEventListener('click', showCompareTime);