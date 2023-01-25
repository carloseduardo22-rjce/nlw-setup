const form = document.querySelector('#form-habits')
// está criando um novo objeto NLWSetup
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
button.addEventListener('click', add);
form.addEventListener('change', save);

const botao = document.querySelector('#botão');
botao.addEventListener("mouseout", mouseFora);
botao.addEventListener('mouseover', mouseEncima);


function add() {
     const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
     // vai pegar o nlw setup e vai verificar se o today existe, se existir retorna true senão retorna false
     const dayExists = nlwSetup.dayExists(today)

     // se for false não entra no if
     // ele precisa de um valor true para executar esta condição.
     if (dayExists) {
          alert('Dia já incluso, precisa adicionar outro!!❌')
          return
     }


     alert('Adicionado com sucesso✅')
     nlwSetup.addDay(today)
}


function save() {
     localStorage.setItem('NLWSetup@habits', JSON.stringify
     (nlwSetup.data))
}


function mouseFora() {
     botao.style.background = '#09090A';
     botao.style.color = 'white'
}


function mouseEncima() {
     botao.style.background = 'white'
     botao.style.color = 'black'
}


//const data = {
     //run: ['01-01', '01-02', '01-06', '01-07', '01-08'],
    //takePills: ['01-03', '01-01', '01-07'],
   // water: ['01-01', '01-06'],
  //   journal: ['01-02']
 //}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()