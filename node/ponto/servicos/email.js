import { text } from "express";
import nodemailer from "nodemailer";
import funcoes from "../funcoes/funcoes.js";

function enviarEmail() {

    const tansporter = nodemailer.createTransport({
        host: "127.0.0.1",
        service: "127.0.0.1",
        port: 25,
        secure: false,
        auth: {
            user: "root@localhost.com ",
            pass: ""
        }/*,
        tls: {
            ciphers:'SSLv3'
        }*/
    });

    const mailOptions = {
        from: "postmaster@localhost",
        to: "root@localhost.com",
        subject: "E-mail Node",
        text: funcoes.emailRegistros()
    };

    tansporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        } else {
            console.log("Email enviado: " + info.response);
        }
    });
}

export default enviarEmail;