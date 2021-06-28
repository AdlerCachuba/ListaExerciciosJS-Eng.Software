
# Lista de Exercícios JavaScript

Adler Mateus Cachuba

## 1. O que é o ES6?

ES6 significa ECMASCRIPT 6, ele é a versão mais nova do JavaScript, lançado no ano de
2015, trouxe diversos recursos e funcionalidades, como por exemplo: facilidade no
desenvolvimento de bibliotecas, a modularização de classes, declarar variáveis com “let” e
“const”.

## 2. Exemplifique algumas features introduzidas no ES6

Arrow functions : Permite você escrever funções sem perder o escopo atual do “this” dentro
do código, sendo possível criar funções através do comando =>
Operadores Rest e Spread : São formas de recuperar o que está dentro de vetores, objetos,
de uma forma rápida. O operador Rest significa você colocar “...” dentro de um vetor, para
retornar o resto dos números dentro desse vetor.
Exemplo: let [a,b, ...x] = numeros;
E o operador Spread tem o mesmo comando do Rest, mas é usado para copiar o conteúdo
de um objeto ou vetor para outra estrutura de dados.
Importação/exportação : É possível que uma classe importe ou exporte o uso de funções,
variáveis, e classes de um arquivo em outro, usando comandos como: “export” na função
para exportar, e a importação “import”.


## 3. Qual a diferença entre var, let e const?

A variável declarada com var possui o escopo de função, o que ela recebe pode ser
identificado e modificado em qualquer parte dessa função, ela pode receber tanto um nome,
como um número.
A variável let pode ser alterado o valor dela dentro da função, e quando sair dela voltará ao
normal, por exemplo :
let nome = ‘adler’
if(true) {
let nome = ‘willian’
print(nome) // Aqui sairá willian
}
print(nome) // Aqui sairá adler
E a variável com const, significa que ela é uma constante, o valor dela não pode ser
alterado por atribuição.

## 4. O que é destructuring e para quais propósitos pode ser utilizado?
O destructuring facilita o acesso de dados dentro de um array, objeto, e a criação de
variáveis que contenham esses dados. O seu propósito pode ser para várias coisas que
estejam relacionadas a um array ou objeto, como por exemplo, recuperar um item
armazenado em um array e colocar ele dentro de uma variavel.
const numeros = [1,2,3]
const [valorA,valorB,valorC ] = numeros
console.log(valorA) // 1
console.log(valorB) // 2
console.log(valorC) //3
## 5. O que é o DOM?
DOM(Document Object Model) significa modelo de objeto de documento,ele é utilizado pelo
navegador para representar a sua página Web, quando a página é carregada o navegador
cria um DOM da página, representado por um modelo semelhante a este:
https://drive.google.com/file/d/1Wpb7u0GC2M4ldUd_zH0JWT7J7VbESRIW/view?usp=sharing

Com esse modelo é possível visualizar uma representação do documento como um grupo
estruturado de nós e folhas de uma árvore.
## 6. Quais problemas o JavaScript assíncrono soluciona?
Uma função assíncrona pode ser executada sem o término de outra função, e soluciona
problemas quando o código acontece em sequência , e por exemplo, uma informação que

vem do banco de dados, ou uma requisição realizada em uma API como frete dos correios,
que pode demorar para retornar um resultado, caso fosse de uma forma sequencial, daria
erro porque o resultado pode variar um tempo.

## 7. Para que servem os comandos async e await?
Async determina quando um método será assíncrono.
Await é usado para avisar que deve esperar uma resposta de uma função antes de
continuar a execução, como o exemplo acima.
## 8. Quais as vantagens de se usar Promises ao invés de callbacks?
Callback são utilizados quando você possui uma operação assíncrona que deveria notificar
o que chamou sobre a realização, já a Promises é um substituto para o Callback, que auxilia
a lidar com a composição de várias operações assíncronas.



