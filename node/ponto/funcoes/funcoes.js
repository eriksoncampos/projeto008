import mysqlFuncoes from "../servicos/mysql.js";

const funcoes = {
    emailRegistros : () => {

        const data = new Date();
        const dia = data.getDate().toString();
        const mes = data.getMonth().toString();

        return `Verificar se os registros do dia ${dia.padStart(2,"0")}/${mes.padStart(2,"0")}/${data.getFullYear()} foram registrados.`;

    /*    const retorno = () => {
        console.log("funcoes.js");
        mysqlFuncoes.selecionarTodosRegistros()
            .then((resultados) => {
                const data = new Date();
                const item = resultados.filter( item => item.datahora <= data);
                console.log("funcoes.js");
            })
            .catch( (err) => {
                console.error("Erro ao consultar a base de dados.".err);
            });
    };

    return retorno;*/
    },
};

export default funcoes;