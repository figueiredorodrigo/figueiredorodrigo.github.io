const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuList = document.querySelectorAll('.menu-list li');

menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

function closeMenu() {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

menuList.forEach((item) => {
    item.addEventListener('click', closeMenu)
});

// Scroll smooth // 

function scroolSmooth() {
        const internalLinks = document.querySelectorAll('.internal-link a[href^="#"]');

    function scroolToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
    }

    internalLinks.forEach((link) => {
        link.addEventListener('click', scroolToSection)
    });
};

scroolSmooth();


// Scroll op // 
const buttonTop = document.querySelector('.smoothscroll-top')

if(buttonTop) {

    function scroolTop() {
        document.addEventListener('scroll', function() {
            if (window.pageYOffset > 90) {
                buttonTop.classList.add('show')
            } else {
                buttonTop.classList.remove('show')
            }
        })
    buttonTop.addEventListener('click', function() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    
    })
};

scroolTop()
}   

// EmailJS // 
function sendMail() {
    let btnContact = document.querySelector('.buttonContact');
    btnContact.setAttribute('disable', '')
    setTimeout(() => {
        btnContact.removeAttribute('disabled') 
    },3000);
    let email = document.querySelector('.email');
    if(email.value != '' && email.value.includes('@')) {
        let params = {
            name: document.querySelector('.nome').value,
            email: document.querySelector('.email').value,
            cel: document.querySelector('.cel').value,
            message: document.querySelector('.message').value
        };

        const serviceID = "gmailmessage";
        const templateID = "template_8p9cxvd";
        
        emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.querySelector('.nome').value = "";
                document.querySelector('.email').value = "";
                document.querySelector('.cel').value = "";
                document.querySelector('.message').value = "";
                alert("Sua mensagem foi enviada com sucesso");
            })
            .catch((err) => alert("Ocorreu um erro no envio, estamos trabalhando para corrigir o mais breve possível."));
    } else {
        let warning = document.querySelector('.email');
        warning.placeholder = 'Digite um e-mail válido';
        warning.style.border = "solid 4px red"; 
        setTimeout(() => {
            warning.placeholder = "E-mail"; 
            warning.style.border = "";   
        },3000);
    }
};
