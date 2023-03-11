const name_input = document.querySelector('#name');
const company_input = document.querySelector('#company');
const email_input = document.querySelector('#E-mail');
const phone_input = document.querySelector('#phone');
const subject_input = document.querySelector('#subject');
const message_input = document.querySelector('#message');
const checkbox_input = document.querySelector('#check');
const form = document.querySelector('.form_window');
const error_txt = 'Отметье, что вы прочитали условия и согласны с политикой приватности'

function validateEmail(email){
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return (EMAIL_REGEXP.test(email))
}
function validateName(name){
    const name_regExp =  /^[a-zA-Zа-яА-Я]+$/ui;
    return (name_regExp.test(name));
}
function validateCheckbox(value){
    
}
function validateMessage(value){
    
}
const sub_btn = document.querySelector('.btn')
sub_btn.addEventListener('click', function(event){
    let flag = 0;
    if (!validateEmail(email_input.value)){
        console.log('email');
        event.preventDefault();
        alert('Email должен быть вида mymail@mali(list).ru')
        flag = 1;
    };
    if (!validateName(name_input.value)){
        console.log('name!')
        event.preventDefault();
        alert('Имя должно содержать только буквы!')
        flag = 1;
    };
    if (!checkbox_input.checked){
        alert(error_txt);
        event.preventDefault();
        console.log('checkbox')
        flag = 1;
    }
    if (flag == 0){
        form.submit();
    }else{
        event.preventDefault();
    }
})
