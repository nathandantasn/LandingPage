const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {name,email,}
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)
    let content = document.getElementById('content')
    let loading = `<p>Carregando...</p>`
    content.innerHTML = loading;
    setTimeout(()=>{
        content.innerHTML = `<p>E-mail cadastrado com sucesso!</p>`
    },1000)
})