/*      AUTHORIZATION CHANGE        */

let button = document.querySelector(".login-form__btn");
let form = document.querySelector('#login__form');
//let errors = [];

button.addEventListener('click', ()=>{
    window.location.href = 'https://new-pro.guap.ru/';
});

//Проверка для каждого поля (поля получаем по одному в функции ниже в цикле)
// function checkValidity(input) {
//     let validity = input.validity;
//     let inpName = input.name;

//     if (input.value == "") {
//         errors.push(`Поле ${inpName} не заполнено`); }

//     if (validity.patternMismatch) 
// 		{ errors.push(`Неверный формат заполнения ${inpName}`); }
    
// 		if (validity.tooLong) 
// 		{ let maxlength = input.maxLength;
// 			errors.push(`Слишком длинное значение ${inpName}! Максимальная длина:  ` + maxlength + `<br>`); }
    
// 		if (validity.tooShort) 
// 		{ let minlength = input.minLength;
// 			errors.push(`Слишком короткое значение ${inpName}! Минимальная длина: ` + minlength + `<br>`); }

//         if (validity = false) {
//             alert('Welcome!');
//         }
// }

// button.addEventListener('click', ()=>{
// //Проверка для всех полей
// 	//получаем все инпуты
//     let inputs = document.querySelectorAll("input");

//     regexp = /[A-Za-zА-Яа-яЁё]/gi; 
//     regexpEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi; 

// 	//перебираем их и на каждый вызываем функцию валидации
//     for (let input of inputs) {
//         //console.log(input);
//         checkValidity(input);
//     }

//     if (!document.getElementById("login__input").value.match(regexp)) {
//         errors.push(`${document.getElementById("login__input").name} некорректно`);
//     }

//     if (!document.getElementById("email__input").value.match(regexpEmail)) {
//         errors.push(`${document.getElementById("email__input").name} некорректно`);
//     }

// 	//выводим ошибки в div 
//     let errorDiv = document.querySelector('.errors__info');
//     errorDiv.innerHTML = errors.join('\n');

//     if (errors.length == 0) {
//         alert(`Welcome, ${document.getElementById("login__input").value}`);
//         location.reload();
//     }

//     errors = []; //чистим массив

// });