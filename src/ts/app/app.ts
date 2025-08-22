import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Marketing from "../modelo/marketing";
import Financeiro from "../modelo/financeiro";
import Desenvolvedores from "../modelo/desenvolvedores";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ExclusaoCliente from "../negocio/excluirCliente";

console.log(`Bem-vindo ao cadastro de clientes da empresa`)

let empresa = new Empresa()
let marketing = new Marketing()
let financeiro = new Financeiro()
let desenvolvedores = new Desenvolvedores()
empresa.incluirAssinante(marketing)
empresa.incluirAssinante(financeiro)
empresa.incluirAssinante(desenvolvedores)
empresa.excluirAssinante(marketing)
empresa.excluirAssinante(financeiro)
empresa.excluirAssinante(desenvolvedores)

let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Excluir cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente()
            cadastro.cadastrar(empresa)
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.obterClientes)
            listagem.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        case 3:
            let exclusao = new ExclusaoCliente()
            exclusao.excluir(empresa)
        break;
        default:
            console.log(`Operação não entendida :(`)
    }
}