/* 9.Uma requisição a um servidor é feita, caso o valor enviado para o servidor seja uma
cadeia de caracteres, o mesmo devolve essa cadeia de caracteres em caixa-alta, caso
contrário um erro é devolvido informando “the request value is not supported”.
Implemente uma Promise que simule o caso descrito e implemente um teste para o
caso de sucesso e de erro. Além disso, a simulação deve conter um atraso aleatório
de 500 milissegundo a 2 segundos, simulando o atraso da comunicação com o
servidor. Dica: pesquisar sobre a função setTimeout.*/

function getRndMsInSeconds(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min) * 1000;
}
const atrasoAleatorio = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), getRndMsInSeconds(0.5, 2))
    })
}
const transfromaCaixaAlta = (valor) => {
    return new Promise((resolve, reject) => {
        atrasoAleatorio.then(
            () => {
                if (typeof valor === 'string') {
                    resolve(valor.toUpperCase())
                } else (
                    reject('the request value is not supported')
                )
            }
        )
    });
}