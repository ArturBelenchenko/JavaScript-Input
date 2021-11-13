const toggleShowHidePassword = document.querySelectorAll('.bi');
const passwordInput = document.querySelectorAll('.password');
// console.log(toggleShowHidePassword)
toggleShowHidePassword.forEach(element => element.addEventListener('click', function (event) {
    console.log('click')

    passwordInput.forEach(function (input) {
        console.log(input)
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type)

    });

    this.classList.toggle('bi-eye-slash-fill');

}));

$(document).ready(function() {
    console.log('jquery is work')
})