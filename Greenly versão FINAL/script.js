const botoesComprar = document.querySelectorAll('.card button');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', function() {
        const card = this.closest('.card');
        const tituloProdutoElemento = card.querySelector('h3:first-of-type');
        const tituloProduto = tituloProdutoElemento ? tituloProdutoElemento.textContent : 'Produto Desconhecido';

        alert(`O produto "${tituloProduto}" foi adicionado ao seu carrinho (Simulação JS).`);
      
        this.textContent = 'Adicionado!';
        setTimeout(() => {
            this.textContent = 'Comprar';
        }, 1500); 
    });
});

const campoBusca = document.getElementById('campoBusca'); 

if (campoBusca) {
    campoBusca.addEventListener('keypress', function(evento) {
        if (evento.key === 'Enter') {
            evento.preventDefault(); 
            
            if (campoBusca.value.trim() === '') {
                alert('Por favor, digite o nome de um produto para pesquisar!');
                campoBusca.focus(); 
            } else {
                alert(`Buscando por: "${campoBusca.value.trim()}"...`);
            }
        }
    });
}

const btnQuemSomos = document.getElementById('btnQuemSomos'); 
const secaoDestino = document.getElementById('quem-somos'); 

if (btnQuemSomos && secaoDestino) {
    btnQuemSomos.addEventListener('click', function(e) {
        e.preventDefault(); 
    
        const offsetTop = secaoDestino.getBoundingClientRect().top + window.pageYOffset;        
        window.scrollTo({
            top: offsetTop - 90, 
            behavior: 'smooth' 
        });
    });
}

const navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', function() {
        
    if (window.scrollY > 80) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});
const modal = document.getElementById('modalLoginCadastro');
const closeModal = document.querySelector('.close-button');
const btnCadastrar = document.querySelector('.navigator button:nth-child(3)'); 
const btnEntrar = document.querySelector('.navigator button:nth-child(4)'); 
const linkCadastrar = document.getElementById('linkCadastrar');
const modalTitle = document.getElementById('modalTitle');
const submitButton = document.getElementById('submitButton');
const loginForm = document.getElementById('loginForm');

function openModal(mode = 'login') {
    if (mode === 'login') {
        modalTitle.textContent = 'Entrar';
        submitButton.textContent = 'Entrar';
        linkCadastrar.textContent = 'Cadastre-se';
    } else { 
        modalTitle.textContent = 'Cadastrar-se';
        submitButton.textContent = 'Criar Conta';
        linkCadastrar.textContent = 'Fazer Login';
    }
    modal.classList.add('show');
}

if (btnCadastrar) {
    btnCadastrar.addEventListener('click', function(e) {
        e.preventDefault();
        openModal('register'); 
    });
}

if (btnEntrar) {
    btnEntrar.addEventListener('click', function(e) {
        e.preventDefault();
        openModal('login'); 
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

if (linkCadastrar) {
    linkCadastrar.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (modalTitle.textContent === 'Entrar') {
            openModal('register');
        } else {
            openModal('login');
        }
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const mode = modalTitle.textContent;

        if (mode === 'Entrar') {
            alert(`Tentativa de Login com Email: ${email} e Senha: ${senha}. (Somente simulação!)`);
        } else { 
            alert(`Tentativa de Cadastro com Email: ${email} e Senha: ${senha}. (Somente simulação!)`);
        }

        
        modal.classList.remove('show');
        loginForm.reset(); 
    });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(name, price) {
cart.push({ name, price });
renderCart(); saveCart(); saveCart();
}


function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }


function removeItem(index) {
cart.splice(index, 1);
renderCart(); saveCart();
}


function renderCart() {
const container = document.getElementById('cart-items');
container.innerHTML = '';
let total = 0;


cart.forEach((item, i) => {
total += item.price;
container.innerHTML += `
<div class="cart-item">
<span>${item.name}</span>
<span>R$ ${item.price}</span>
<button class="remove" onclick="removeItem(${i})">X</button>
</div>`;
});


document.getElementById('total').innerText = 'Total: R$ ' + total.toFixed(2);
}


document.getElementById('btnCart').onclick = () => {
document.getElementById('cartModal').style.display = 'flex';
}


function closeCart() {
document.getElementById('cartModal').style.display = 'none';
}

function alertBuy(){
    alert('Obrigado por comprar em nosso site! Acompanhe seu pedido pelo link que enviaremos por e-mail.');
}
