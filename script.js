// const toggleShowHidePassword = document.querySelectorAll('.bi');
// const passwordInput = document.querySelectorAll('.password');


// toggleShowHidePassword.forEach(element => element.addEventListener('click', function () {
    
    // passwordInput.forEach(function (input) {
    //     console.log(input)
    //     const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    //     input.setAttribute('type', type)

    // });

    // const siblingInput = this.previousElementSibling
    // const type = siblingInput.getAttribute('type') === 'password' ? 'text' : 'password';
    // siblingInput.setAttribute('type', type)

    // this.classList.toggle('bi-eye-slash-fill');
// }));



$('.bi').click(function() {
    
    const siblingInput = $(this).prev()
    siblingInput.attr('type') === 'password' ? 
    siblingInput.attr('type', 'text') :
    siblingInput.attr('type', 'password')
    $(this).toggleClass('bi-eye-slash-fill')
   
})


