//1
// let input = document.getElementById("myInput");
// let paragraph = document.getElementById("myParagraph");

// input.addEventListener("blur", function () {
// paragraph.textContent += input.value;
// });


//2
// function calculate() {
//     let input1 = parseInt(document.getElementById("input1").value);
//     let input2 = parseInt(document.getElementById("input2").value);
//     let input3 = parseInt(document.getElementById("input3").value);
//    	let sum = input1 + input2 + input3;
//     let paragraph = document.getElementById("myParagraph");
//     paragraph.textContent = `Сумма чисел: ${sum}`;
//   }

// 3
// let input = document.getElementById("myInput");
// let paragraph = document.getElementById("myParagraph");

// input.addEventListener("blur",function () {
//   let sum = 0;
//   let value = input.value;
//   for (let i = 0; i < value.length; i++) {
// 	sum += parseInt(value[i]);
//   }
//   paragraph.textContent = `Сумма цифр числа ${value} равна ${sum}`;
// });

//4
// let input = document.getElementById("myInput");
// let paragraph = document.getElementById("myParagraph");

// input.addEventListener("blur", function (){
//   let values = input.value.split(",");
//   let sum = 0;
//   for (let i = 0; i < values.length; i++) {
// 	 sum += parseInt(values[i]);
//   }
//   let average = sum / values.length;
//   paragraph.textContent = `Среднее арифметическое чисел ${values} равно ${average}`;
// })

//5
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let input4 = document.getElementById("input4");

// input1.addEventListener("blur",  function () {
// 	let fullName = input1.value.trim().split(" ");
//   input2.value = fullName[0];
//   input3.value = fullName[1];
//   input4.value = fullName[2];
// });

//6
// let input1 = document.getElementById("input1");

// input1.addEventListener("blur", function() {
//   let fullName = input1.value.trim().split(" ");
//   let lastName = fullName[0].toUpperCase();
//   let firstName = fullName[1].charAt(0).toUpperCase() + fullName[1].slice(1);
//   let middleName = fullName[2].charAt(0).toUpperCase() + fullName[2].slice(1);
//   input1.value = `${lastName} ${firstName} ${middleName}`;
// });

//7
// let input = document.getElementById('input');
// let count = document.getElementById('count');

// input.addEventListener('blur', () => {
// 	let text = input.value;
// 	let words = text.split(/\b/).filter(word => word.match(/\w+/));
// 	let wordCount = words.length;
//   count.textContent = `Количество слов: ${wordCount}`;
// })

//8
// let input = document.getElementById('input');

// input.addEventListener('blur', () => {
// 	let date = input.value;
//   let regex = /^\d{2}\.\d{2}\.\d{4}$/;
//   if (regex.test(date)) {
// 	let parts = date.split('.');
// 	let year = parts[2];
// 	let month = parts[1];
// 	let day = parts[0];
// 	let formattedDate = `${year}-${month}-${day}`;
// 	input.value = formattedDate;
//   }
// })

//9
// let input = document.getElementById('input');
// let check = document.getElementById('check');

// check.addEventListener('click', () => {
//   let word = input.value;
//   let reversedWord = word.split('').reverse().join('');
//   if (word === reversedWord) {
// 	alert('Слово читается с начала и с конца одинаково');
//   } else {
// 	alert('Слово не читается с начала и с конца одинаково');
//   }
// });


//10
// let input = document.getElementById('input');

// input.addEventListener('blur', function() {
//   let number = input.value;
//   if (number.includes('3')) {
// 	alert('Число содержит цифру 3');
//   } else {
// 	alert('Число не содержит цифру 3');
//   }
// });

//11
// function writeNumbers() {
//     let paragraphs = document.getElementsByTagName("p");
//     for (let i = 0; i < paragraphs.length; i++) {
//         let number = i + 1;
//         paragraphs[i].innerHTML += " " + number;
//     }
// }

//12
// let links = document.getElementsByTagName("a");
// for (let i = 0; i < links.length; i++) {
//     let link = links[i];
//     link.innerHTML += " (" + link.href + ")";
// }

//13
// let links = document.getElementsByTagName("a");
// 		for (let i = 0; i < links.length; i++) {
// 			let link = links[i];
// 			if (link.href.startsWith("http://")) {
// 				link.innerHTML += " &rarr;";
// 			}
// 		}

//14
// function writeSquare(paragraph) {
//     let number = parseInt(paragraph.innerHTML =2);
//     let square = number * number;
//     paragraph.innerHTML = "Квадрат числа " + number + " = " + square;
// }
// function writeSquare2(paragraph) {
//     let number = parseInt(paragraph.innerHTML =3);
//     let square = number * number;
//     paragraph.innerHTML = "Квадрат числа " + number + " = " + square;
// }
// function writeSquare3(paragraph) {
//     let number = parseInt(paragraph.innerHTML =4);
//     let square = number * number;
//     paragraph.innerHTML = "Квадрат числа " + number + " = " + square;
// }

//15
// let dateInput = document.getElementById('date-input');
// dateInput.addEventListener('blur', function() {
//   let date = new Date(dateInput.value);
//   let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//   let dayOfWeek = daysOfWeek[date.getDay() - 2];
//  alert(`День недели, который приходится на дату ${dateInput.value}: ${dayOfWeek}`);
// });

//16
// let numberInput = document.getElementById('number-input');
// let plusButton = document.getElementById('plus-button');
// let minusButton = document.getElementById('minus-button');

// plusButton.addEventListener('click', function() {
//  let currentValue = parseInt(numberInput.value);
//   if (currentValue > 0) {
//     numberInput.value = currentValue + 1;
//   }
// });

// minusButton.addEventListener('click', function() {
//  let currentValue = parseInt(numberInput.value);
//   if (currentValue > 0) {
//     numberInput.value = currentValue - 1;
//   }
// });

//17
// document.getElementById('input');
//   let button = document.getElementById('button');
//   let count = 0;

//   button.addEventListener('click', () => {
//     count++;
//     input.value = `Количество нажатий: ${count}`;
//   });

//18
// let divs = document.querySelectorAll('div');
// divs.forEach(div => {
//   let text = div.textContent;
//   if (text.length > 10) {
//     div.textContent = text.slice(0, 10) + '...';
//   }
// });

//19
// let input = document.getElementById('input');
// let button = document.getElementById('button');

// button.addEventListener('click', function() {
//   let randomString = Math.random().toString(36).slice(-8);
//   input.value = randomString;
// });

//20
// let input = document.getElementById('input');
// let button = document.getElementById('button');

// button.addEventListener('click', function() {
//   let text = input.value;
//   let shuffledText = shuffle(text);
//   input.value = shuffledText;
// });

// function shuffle(text) {
//   let shuffledArray = text.split('').sort(() => Math.random() - 0.5);
//   return shuffledArray.join('');
// }

//21
// function convertToCelsius() {
//     let fahrenheit = document.getElementById("fahrenheit").value;
//     let celsius = (fahrenheit - 32) * 5 / 9;
//     document.getElementById("celsius").textContent = celsius.toFixed(2) + "°C";
//   }

//22
// function calculateFactorial() {
//     let number = document.getElementById("number").value;
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//       factorial *= i;
//     }
//     document.getElementById("result").textContent = factorial;
//   }

//23
// function calculateRoots() {
//    let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
//     let c = document.getElementById("c").value;
//     let discriminant = b * b - 4 * a * c;
//     if (discriminant < 0) {
//       document.getElementById("result").textContent = "Корней нет";
//     } else {
//       let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//       let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//       document.getElementById("result").textContent = `Корни уравнения: x1 = ${x1}, x2 = ${x2}`;
//     }
//   }
  
  
  