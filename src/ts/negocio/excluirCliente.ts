import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cliente from "../modelo/cliente";

export default class ExclusaoCliente {
    private entrada: Entrada = new Entrada()
    public excluir(empresa: Empresa): void {
        console.log(`\nInício da exclusão de cliente`);

        let clientes = empresa.obterClientes
        if (clientes.length === 0) {
            console.log("Nenhum cliente cadastrado para excluir.")
            return
        }

        clientes.forEach((cliente: Cliente, index: number) => {
            console.log(`${index + 1} - ${cliente.nome}`)
        })

        let indice = this.entrada.receberNumero(
            `Por favor informe o número do cliente que deseja excluir: `
        ) - 1

        if (indice >= 0 && indice < clientes.length) {
            let clienteExcluido = clientes[indice]
            empresa.removerCliente(clienteExcluido)
            console.log(`Cliente ${clienteExcluido.nome} excluído com sucesso!`)
        } else {
            console.log(`Opção inválida, nenhum cliente foi excluído.`)
        }
    }
}
