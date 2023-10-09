import ler from 'readline-sync';

const calculanivel = (vitoria, derrota) => {
    let saldoVitoria = vitoria - derrota;
    let nivel = "";
    do {
        switch (true) {
            case vitoria < 10:
                nivel = "Ferro";
                break;
            case vitoria >= 10 && vitoria <= 20:
                nivel = "Bronze";
                break;
            case vitoria > 20 && vitoria <= 50:
                nivel = "Prata";
                break;
            case vitoria > 50 && vitoria <= 80:
                nivel = "Ouro";
                break;
            case vitoria > 80 && vitoria <= 90:
                nivel = "Diamante";
                break;
            case vitoria > 90 && vitoria <= 100:
                nivel = "Lendario";
                break;
            default:
                nivel = "Imortal";
        }
        console.log("Deseja continuar? Digite s/n");
        let continuar = ler.question();

        if (continuar !== 's' && continuar !== 'S') {
            break;
        }
        vitoria = parseInt(ler.question("Digite a quantidade de vitorias do Heroi"));
        derrota = parseInt(ler.question("Digite a quantidade de derrotas do Heroi"));
    } while (true);

    let mensagem = `O Heroi tem um saldo de ${saldoVitoria} e está no nivel de ${nivel}`;
    return mensagem;
}

let vitoria = parseInt(ler.question("Digite a quantidade de vitorias do Heroi"));
let derrota = parseInt(ler.question("Digite a quantidade de derrotas do Heroi"));
let resultado = calculanivel(vitoria, derrota);
console.log(resultado);
