//step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2: get the email address  inside the email input field
    //always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step 3: get password
    //step 3.a: get id on the html element
    //step 3.b: get the elelment
    //step 3.c: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //DANGER: Do not verify email password on the client side
    //step 4: verify email and password and check wheter valid user or not

    if(email === 'pulakbala@gmail.com' && password === 'pulak'){
        window.location.href = 'bank.html'
    } else{
        alert('write a correct information')
    }

})