import enviarEmail from "./email.js";

function job(){

    const temporizador = 14000000;

    const jobEmail = setInterval( function() {
        const data = new Date();

        if(data.getDay() >= 0 && data.getDay() <= 4) {
            enviarEmail();
        };
    },temporizador);

};

export default job;