
/* call variable */
var submit = document.querySelector('.submit');
var error = document.querySelectorAll('span[class="error"');
const modal = document.getElementById("contact_modal");
const main = document.getElementById('main');
const body = document.querySelector('body');
var valid = '';

/* function open modal */
function displayModal() {
    main.setAttribute('aria-hidden', 'true');
	modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    body.setAttribute("overflow", "hidden");
    firstname.focus();
}
/* function close to ESC */
document.addEventListener('keydown', e => {
    const keyCode = e.keyCode ? e.keyCode : e.which;
  
    if (modal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
        closeModal()
    }
 })

/* function close modal */
function closeModal() {
    main.setAttribute('aria-hidden', 'false');
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    body.setAttribute("overflow", "");
}
/* function verification email valid */
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
/* function submit data form */
submit.onclick = () => {
    valid = true
    
    if (firstname.value.trim().length <2 ) {
        
        error[0].innerHTML =  "<span style='color: red;'>"+ "Veuillez entrer un prénom valide.</span>";
        valid = false;
    }
    if (lastname.value.trim().length <2 ) {
        
        error[1].innerHTML =  "<span style='color: red;'>"+ "Veuillez entrer un nom valide. </span>";
        valid = false;
    }
    if (checkEmail(email.value) == false ) {
        error[2].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer une adresse mail valide.</span>";
        valid =  false;
      }
    if (message.value.length < 2 || message.value.length > 150 ) {
        
        error[3].innerHTML =  "<span style='color: red;'>"+ "Veuillez entrer un message comprenant entre 2 et 150 caractères.</span>";
        valid = false;
    }
    

    if(valid == false) {
        return false;
    }
    else {
        console.log(firstname.value, lastname.value,  email.value, message.value);
        closeModal();
    }
        
    
}