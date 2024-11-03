import { rejects } from "assert";
import pkg from "mysql";
import { resolve } from "path";
const mysql = pkg;

//Parâmetros de conexão
const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "projeto002"
});

//Conexão ao banco de dados
conexao.getConnection( (err) => {
    if(err){
        console.error("Erro ao conectar ao banco de dados.",err);
        return;
    };

    const data = new Date();
    console.log(data + " - Conectado ao banco de dados MYSQL com sucesso.");

});

//SQL

const mysqlFuncoes = {
    inserirDados: (datahora) => {
        const query = "INSERT INTO ponto (datahora) VALUES (?)";
        return new Promise((resolve,reject) => {
            conexao.query(query, [datahora], (err, resultados) => {
                if(err){
                    reject(err);
                } else {
                    resolve(resultados);
                };
            });
        });
    },

    selecionarTodosRegistros: () => {
        const query = "SELECT * FROM ponto ORDER BY datahora DESC";
        return new Promise( (resolve,reject) => {
            conexao.query(query, (err,resultados) => {
                if(err){
                    reject(err);
                } else {
                    resolve(resultados);
                };
            });
        });

    },

    selecionarUmRegistro: (id) => {
        const query = "SELECT * FROM ponto WHERE id = ?";
        return new Promise( (resolve,reject) => {
            conexao.query(query,[id], (err,resultados) => {
                if(err){
                    reject(err);
                } else {
                    resolve(resultados);
                };
            });
        });
    },

    atualizarDados: (datahora,id) => {
        const query = "UPDATE ponto SET datahora = ? WHERE id = ?";
        return new Promise( (resolve,reject) => {
            conexao.query(query,[datahora,id], (err,resultados) => {
                if(err){
                    reject(err);
                } else {
                    resolve(resultados);
                };
            });
        });
    },

    excluirDados: (id) => {
        const query = "DELETE FROM ponto WHERE id = ?";
        return new Promise( (resolve,reject) => {
            conexao.query(query,[id], (err,resultados) => {
                if(err){
                    reject(err);
                } else {
                    resolve(resultados);
                }
            })
        })
    }
}

export default mysqlFuncoes;