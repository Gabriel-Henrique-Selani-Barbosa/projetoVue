const vm = new Vue({//vm = viewModel
    el: '#app',
    data: {//variaveis/atributos reativos
        text: 'Primeiro template controlado pelo Vue',
        valor: 150.47, //numero
        logado: false, //boolean
        hobbies: [
            'Dormir',
            'Correr'
        ],
        perfil: {
            nome: 'Gabriel',
            site: 'youtube.com.br',
            idade: 32,
            cursos: [
                {
                    nome: 'Vue',
                    horas: '50 horas'
                }
            ]
        },
        site: 'youtube.com.br',
        cor: 'vermelho',
        instrucaoDePreenchimento: 'Placeholder - Diretiva v-bind',
        batata: 'text',
        valor: "vue é daora",
        check: true,
        estilo: 'azul',
        teste: false,
        xyz: true,
    },
    methods: {
        somar: function somar() { //syntax convencional
            return 4 + 2;
        },
        subtrair: function() { //função anonima
            return 4 - 2;
        },
        multiplicar: () => { //arrow function, arrows functions nao sao recomendadas para criação de metodos de objeto pois nao fazem referencia ao escopo do objeto
            return 4 * 2;
        },
        dividir() { //form enxuta de definir os pares de chave/valor
            return 4 / 2;
        },
        numeroAleatorio: function numeroAleatorio() { //objeto literal interpretado pelo JS entendq que é uma função de mesmo valor que seu metodo
            return Math.random();
        },
        getDataItens: function() { //Nome de metodos nao podem ser iguais a nome de datas
            let f = () => {
                console.log('*******', this)
                return 'Teste'
            }
            console.log(f())
            console.log(this)
            return this.valor + this.perfil.idade
        },
        imprimirTexto(t, n, s) {
            console.log(t)
            console.log(n)
            console.log(s)
        },
        mensagemAlerta() {
            alert('ACORDA PEDRINGO QUE HOJE TEM CAMPEONATO')
        }
    }
})