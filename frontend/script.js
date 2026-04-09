const form = document.getElementById('formCadastro');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);

    try {
        const resposta = await fetch('http://localhost:3000/usuarios/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados) 
        });

        const resultado = await resposta.json();
        
        if (resposta.ok) {
            alert('Sucesso: ' + resultado.message);
        } else {
            alert('Erro: ' + resultado.error);
        }
    } catch (erro) {
        console.error('Falha na requisição:', erro);
    }
});
