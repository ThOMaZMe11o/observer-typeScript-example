import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";

export default class CadastroCliente {
    private entrada: Entrada = new Entrada()
    public cadastrar(empresa: Empresa): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let cliente = new Cliente();
        cliente.nome = nome
        empresa.adicionarCliente = cliente
        console.log(`\nCadastro concluído :)\n`);
    }
}