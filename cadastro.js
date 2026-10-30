function funcaoCadastrarCliente() {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    //verifica se os campos estão vazios
    if (!nome || !email || !telefone){
        alert('preencha todos os campos.')
        return
    }
    

//cia uma variavel com os dados do cliente
const novoCliente = {nome, email, telefone}

//pega a lista de clientes já existente ou cria uma vazia
let listaClientes = JSON.parse(localStorage.getItem('clientes')) || []

//adiciona um novo cliente na lista
listaClientes.push(novoCliente)

//salva no localStorage (armazenamento local no navegador)
localStorage.setItem('clientes', JSON.stringify(listaClientes))

//mensagem do navegador confirmando salvamento.
alert('cliente cadastrado com sucesso')

//limpa o formulario
document.getElementById('formulario cadastrado').requestFullscreen() 
}
