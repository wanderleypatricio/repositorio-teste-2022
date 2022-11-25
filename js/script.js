
    var visor = ''; //recebe o que está sendo digitado

    /* a função calcular é usada para calcular as operações 
    e exibir o resultado no visor. Recebe o valor que está sendo digitado como 
    parâmentro e verifica se o valor digitado é algum tipo de operador caso seja 
    conta que foi passado um operador na variável cont_op e atribui o operador passado a variável op.
    Caso seja passado mais um tipo de operador calcula primeira operação, retorna o resultado 
    exibindo no visor e concatena o resultado com a próxima operação que foi passada.
    */
    function calcular(valor){
        
        visor += valor; //captura os valores passados concatenando em uma string
    
        document.getElementById("vizualizador").value = visor; // exibe o conteúdo da variável visor na tela.
    }

    /*a função apagar será usada para zerar a aplicação*/
    function apagar(){
        document.getElementById("vizualizador").value = ''; //atribui vazio ao campo input
        visor = '';
    }

    /*a função resposta é usanda para calcular o resultado de uma operação quando clicar no botão igual (=)*/
    function resposta(){
        var resultado = operacao(); // calcula o resultado da operação e retorna o valor gravando na variável visor
        console.log(resultado);
        document.getElementById("vizualizador").value = resultado; //exibe o resultado na tela
        visor = resultado;
    }

    /*a função operação pega todos os dados gravados na variável visor e quebra seu conteudo
    com o auxílio da função split que recebe como parâmetro o tipo de operador que está 
    gravado na variável op dividindo em um array que é gravado na variável valores. Para verificar
    o tipo de operação usamos a estrutura condiciona switch() que recebe como parâmetro a variável op
    e caso op seja igual a uma das operações retorna o resultado da operação selecionada.*/
    function operacao(){
        return eval(visor);
    }
