/*      AUTHORIZATION CHANGE        */

let button = document.querySelector(".login-form__btn");
let form = document.querySelector('#login__form');

button.addEventListener('click', ()=>{
    window.location.href = 'https://sso.guap.ru:8443/realms/master/protocol/openid-connect/auth?state=e661261fb721c57ace51147174a21940&scope=profile%20email&response_type=code&approval_prompt=auto&redirect_uri=https%3A%2F%2Fpro.guap.ru%2Foauth%2Fcallback&client_id=prosuai';
});