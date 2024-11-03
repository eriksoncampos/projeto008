import cors from "cors";
import express, { response } from "express";
import mysqlFuncoes from "./servicos/mysql.js";
import job from "./servicos/job.js";

const app = express();
const corsNavegador = cors;

/**
 * Executar o job que envia o e-mail.
 */

job();

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(corsNavegador());
    next();
});

app.get("/ponto", (requisicao, resposta) => {
    mysqlFuncoes.selecionarTodosRegistros()
        .then((resultados) => {
            console.log("Dados selecionados com sucesso.");
            resposta.json(resultados);
        })
        .catch( (err) => {
            console.error("Erro ao selecionar os dados.",err);
        })
});

app.get("/ponto/:id", (requisicao,resposta) => {
    const id = parseInt(requisicao.params.id);
    mysqlFuncoes.selecionarUmRegistro(id)
        .then((resultados) => {
            console.log("Um registro foi selecionado.");
            resposta.json(resultados);
        })
        .catch((err) => {
            console.error("Erro ao selecioanr um registro.",err);
        });
});

app.post("/ponto", (requisicao,resposta) => {
    const datahora = requisicao.query.datahora;
    mysqlFuncoes.inserirDados(datahora)
        .then( (resultados) => {
            console.log("Registro inserido com sucesso.");
            resposta.json(resultados);
        })
        .catch((err) => {
            console.error("Erro ao inserir o registro.",err);
        });
});

app.delete("/ponto/:id", (requisicao,resposta) => {
    const id = parseInt(requisicao.params.id);
    mysqlFuncoes.excluirDados(id)
        .then((resultados) => {
            console.log("Registro excluído com sucesso.");
            resposta.json(resultados);
        })
        .catch((err) => {
            console.error("Erro ao excluir o registro.",err);
        });
});

app.put("/ponto/:id", (requisicao,resposta) => {
    const id = parseInt(requisicao.params.id);
    const datahora = requisicao.query.datahora;
    mysqlFuncoes.atualizarDados(datahora,id)
        .then((resultados) => {
            console.log("Registro atualizado com sucesso.");
            resposta.json(resultados);
        })
        .catch((err) => {
            console.error("Erro ao atualizar o registro.",err);
        })
})

app.listen(4000, () => {
    const data = new Date();
    console.log(data + " - Servidor Node iniciado.");
});