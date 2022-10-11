const name = document.querySelector('#name')
const email = document.querySelector('#email')
const issue = document.querySelector('#issue')
const message = document.querySelector('#message')
const btnSend = document.querySelector('#send')

const regTel = /^[0-9]/
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const validateForm = () => {
    if(name.value != '' && regEmail.test(email.value) && issue.value != '' && message.value != ''){
        let subject = `${ issue.value }`
        let body = `Hola mi nombre es ${ name.value } quisiera ${ message.value } mi correo es ${ email.value } `
        window.open(`mailto:juancho311992@gmail.com?subject=${ subject }&body=${ body }`);
        swal("Good job!", "Your data has been send!", "success");
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }else{
        swal("Ups!", "All fields are required", "error");
    }
}

btnSend.addEventListener('click', (e) => {
    e.preventDefault()
    validateForm()
})