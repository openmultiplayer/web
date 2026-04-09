# Diretivas

---

Todas as diretivas devem aparecer primeiro em uma linha (podem ser precedidas por espaço em branco,
mas não por quaisquer outros caracteres). Todas as diretivas começam com o caractere # e
a instrução completa não pode se estender por mais de uma linha.

**#assert** _expressão constante_

    Emite um erro em tempo de compilação se a expressão constante fornecida
    for avaliada como zero. A diretiva #assert é mais útil para proteger contra
    construções definidas pela implementação das quais um programa pode depender,
    como o tamanho da célula em bits, ou o número de caracteres empacotados por célula.

**#define** _padrão substituição_

    Define uma macro de substituição de texto. O padrão é comparado com todas as linhas
    lidas dos arquivos fonte; as seções que correspondem são substituídas pelos
    textos de substituição. O padrão e os textos de substituição podem
    conter parâmetros, denotados por "%0" a "%9". Veja página 93 para detalhes
    e exemplos sobre substituição de texto.

**#emit** _opcode, parâmetros_

    A diretiva #emit serve como um assembler inline. Atualmente é usada
    apenas para testar a máquina abstrata.

**#endinput & #endscript**

    Fecha o arquivo atual e assim ignora
    todo o texto abaixo da diretiva #endinput.
    A diretiva #endscript é um sinônimo para #endinput.

**#error**

    message: Sinaliza um "erro do usuário" com a mensagem especificada. Erros do
    usuário são erros fatais e servem a um propósito similar à diretiva #assert.

**#file** _nome_

    Ajusta o nome para o arquivo atual. Esta diretiva é usada implicitamente
    pelo pré-processador de texto; normalmente não há necessidade de definir um nome de arquivo
    explicitamente.

**#if** _expressão constante_, #elseif, #else, #endif

    Partes de um programa podem ser analisadas ou ignoradas dependendo de certas
    condições. O parser pawn (compilador ou interpretador) gera
    código apenas para aquelas partes para as quais a condição é verdadeira.

    A diretiva #if deve ser seguida por uma expressão constante. Para verificar
    se uma variável ou constante está definida, use o operador defined.

    Zero ou mais diretivas #elseif podem seguir a diretiva #if inicial.
    Esses blocos são pulados se algum dos blocos #if ou #elseif precedentes
    foi analisado (ou seja, não foi pulado). Assim como a diretiva #if, uma expressão
    constante deve seguir a expressão #elseif.

    O #else faz com que o parser pule todas as linhas até #endif se a
    diretiva #if precedente ou qualquer uma das diretivas #elseif precedentes
    foi "verdadeira", e o parser analisa essas linhas se todos os blocos precedentes
    foram pulados. A diretiva #else pode ser omitida; se presente, pode haver
    apenas um #else associado a cada #if.

    A diretiva #endif termina uma parte do programa que é analisada condicionalmente.
    Diretivas condicionais podem ser aninhadas e cada diretiva #if
    deve ser terminada por uma diretiva #endif.

**#include** _nome do arquivo_ ou _< nome do arquivo >_

    Insere o conteúdo do arquivo especificado na posição atual dentro
    do arquivo atual. Um nome de arquivo entre colchetes angulares ("\<" e ">")
    se refere a um arquivo de sistema; o parser pawn (compilador ou interpretador)
    procurará tais arquivos apenas em uma lista predefinida de diretórios e não no
    diretório "atual". Nomes de arquivo sem aspas ou que aparecem entre
    aspas duplas são arquivos de inclusão normais, para os quais um parser pawn
    procurará primeiro no diretório atual.

    O parser pawn primeiro tenta abrir o arquivo com o nome especificado.
    Se isso falhar, ele tenta anexar as extensões ".inc", ".p"
    e ".pawn" ao nome do arquivo (nessa ordem). A extensão padrão proposta
    de arquivos de inclusão é ".inc".

    Quando o arquivo pode ser aberto com sucesso, a diretiva #include define
    uma constante com o nome "_inc_" mais o nome base do
    arquivo (o nome do arquivo sem caminho e extensão) e o valor 1. Se
    a constante já existir, a diretiva #include pula a abertura e
    inclusão do arquivo, prevenindo assim uma inclusão dupla. Para forçar uma
    inclusão dupla, remova a definição da constante com a diretiva #undef
    antes da segunda inclusão do arquivo.

**#line** _número_

    O número da linha atual (no arquivo atual). Esta diretiva é usada
    implicitamente pelo pré-processador de texto; normalmente não há necessidade de definir o
    número da linha explicitamente.

**#pragma** _informações extras_

    Um "pragma" é um gancho para um parser especificar configurações adicionais, como
    níveis de aviso ou capacidades extras. #pragmas comuns são:

    **#pragma** align

        Alinha a próxima declaração ao offset definido com a opção de alinhamento
        do compilador. Algumas funções (nativas) podem ter melhor desempenho
        com parâmetros que são passados por referência quando estes estão em
        limites de 8, 16 ou até 32 bytes. Requisitos de alinhamento
        são dependentes dos aplicativos host.

        Colocar a linha #pragma align na frente de uma declaração de uma
        variável global ou estática alinha esta variável ao limite
        definido com a opção do compilador. Note que este #pragma
        alinha apenas a variável que imediatamente segue o #pragma.
        O alinhamento das variáveis subsequentes depende do tamanho e
        alinhamento das variáveis que as precedem. Por exemplo, se uma
        variável de array global de 2 células é alinhada em um limite de 16 bytes
        e uma célula é de 4 bytes, a próxima variável global está localizada 8 bytes
        mais adiante.

        Colocar a linha #pragma align na frente de uma declaração de
        uma função alinhará o frame de pilha dessa função ao
        limite especificado anteriormente, com o resultado de que a primeira
        variável local, não-"static", é alinhada a esse limite. O alinhamento
        das variáveis subsequentes depende do tamanho e alinhamento
        das variáveis que as precedem. Na prática, para alinhar uma
        variável local não estática, você deve alinhar o frame de pilha da função
        e declarar essa variável antes de quaisquer outras variáveis.

    **#pragma** amxlimit *valor*

        Define o tamanho máximo, em bytes, que o script compilado pode
        crescer. Este pragma é útil para ambientes (embarcados)
        onde o tamanho máximo de um script está limitado a um limite superior rígido.

        Se não houver configuração para a quantidade de RAM para os dados e
        pilha (veja o pragma amxram), isso se refere aos requisitos totais de memória;
        se a quantidade de RAM é explicitamente definida, este valor

        apenas indica a quantidade de memória necessária para o código e os
        dados estáticos.

    **#pragma** amxram *valor*

        Define os requisitos máximos de memória, em bytes, para dados
        e pilha que um script compilado pode ter. Este valor é
        útil para ambientes (embarcados) onde o tamanho máximo de dados
        de um script está limitado a um limite superior rígido. Especialmente no

        caso em que o script pawn é executado a partir da ROM, os tamanhos para
        as seções de código e dados precisam ambos ser definidos.

    **#pragma** codepage *nome/valor*

        O parser pawn pode traduzir caracteres em strings desempacotadas
        e constantes de caractere para caracteres "largos" Unicode/UCS-4.
        Este #pragma indica a codepage que deve ser usada para
        a tradução. Veja a seção "Internacionalização" na página

        139 para detalhes e recursos extras necessários para a tradução
        de codepage.

    **#pragma** compress *valor*

        O parser pawn pode escrever o P-code gerado em codificação
        compacta ou simples ("não compacta"). O padrão depende da
        configuração do parser (e, talvez, configurações do usuário). Este
        #pragma permite que o escritor do script sobrescreva o padrão e

        force a codificação compacta (quando o valor é diferente de zero) ou force
        a codificação simples (quando o valor é zero). Especialmente desativar a codificação
        compacta (forçando a codificação simples) é útil, porque

        o parser pawn pode ser incapaz de compilar um script particular
        no modo de "codificação compacta".

    **#pragma** ctrlchar *caractere*

        Define o caractere a usar para indicar o início de uma "sequência de escape".
        Por padrão, o caractere de controle é "\".

        Por exemplo

        `#pragma ctrlchar '\$'**`

        Você pode dar o novo valor para o caractere de controle como uma constante
        de caractere (entre aspas simples) ou como um valor decimal ou hexadecimal.
        Quando você omite o valor do novo caractere de controle, o parser
        reverte para o caractere de controle padrão.

    **#pragma dynamic** *valor*

        Define o tamanho, em células, do bloco de memória para dados
        dinâmicos (a pilha e o heap) para o valor especificado pela expressão.
        O tamanho padrão do bloco de dados dinâmicos é definido pela
        implementação. Uma implementação também pode escolher crescer
        o bloco conforme necessário (veja a documentação do programa host).

    **#pragma library** *nome*

        Define o nome do módulo de extensão (vinculado dinamicamente)
        que contém as funções nativas necessárias. Este #pragma deve
        aparecer acima das declarações de funções nativas que fazem parte do
        módulo de extensão.

        O parâmetro do nome da biblioteca pode estar ausente, caso em que
        quaisquer declarações de funções nativas subsequentes não são associadas
        a nenhum módulo de extensão.

        O escopo deste #pragma vai desde a linha em que ele aparece
        até o final do arquivo em que aparece. Em uso típico,
        uma linha #pragma library aparecerá no topo de um arquivo de inclusão
        que declara funções nativas para um módulo de extensão, e o escopo
        do "vínculo" da biblioteca termina no final desse arquivo de inclusão.

    **#pragma pack** *valor*

        Se o valor for zero, strings literais empacotadas começam com "!"" (ponto de
        exclamação + aspas duplas) e strings literais desempacotadas com
        apenas aspas duplas ("""), como descrito neste manual na página 99.
        Se o valor for diferente de zero, a sintaxe para strings literais empacotadas
        e desempacotadas é trocada: strings literais que começam com aspas
        duplas são empacotadas e strings literais que começam com "!""
        são desempacotadas.

    **#pragma rational** *tagname(valor)*

        Habilita o suporte para números racionais. O tagname é o
        nome da tag que os números racionais terão; tipicamente escolhe-se
        os nomes "Float:" ou "Fixed:". A presença do
        valor entre parênteses após o tagname é opcional: se omitido,
        um número racional é armazenado como um valor de "ponto flutuante"
        de acordo com a norma IEEE 754; se presente, um número racional
        é um número de precisão fixa ("inteiro escalado") com o
        número especificado de decimais.

    **#pragma semicolon** *valor*

        Se o valor for zero, nenhum ponto e vírgula é necessário para terminar uma instrução se
        essa instrução for a última em uma linha. Pontos e vírgulas ainda são necessários para
        separar múltiplas instruções na mesma linha.

        Quando pontos e vírgulas são opcionais (o padrão), um operador pós-fixado
        (um de "++", "--" e "char") não pode ser o primeiro token em
        uma linha, pois será interpretado como operadores prefixados.

    **#pragma tabsize** *valor*

        O número de caracteres entre duas posições de tabulação consecutivas.
        O valor padrão é 8. Você pode precisar definir o tamanho da tabulação
        para evitar o aviso 217 (indentação solta) se o código fonte
        for indentado alternadamente com espaços e caracteres de tabulação.
        Alternativamente, definindo o #pragma "tabsize" como zero, o
        parser não emitirá mais o aviso 217.

    **#pragma unused** *símbolo,...*

        Marca o símbolo nomeado como "usado". Normalmente, o parser pawn
        avisa sobre variáveis não usadas e constantes locais não usadas.
        Na maioria das situações, essas variáveis e constantes são
        redundantes, e é melhor removê-las por questões de clareza
        do código. Especialmente no caso de constantes locais, pode,
        no entanto, ser melhor (ou necessário) manter as definições de constantes.
        Este #pragma permite marcar o símbolo (variável ou
        constante) como "usado", e evitar um aviso do parser.

        O #pragma deve aparecer após a declaração do símbolo — mas
        não precisa aparecer imediatamente após a declaração.

        Múltiplos nomes de símbolos podem aparecer em um único #pragma;
        os símbolos devem ser separados por vírgulas.

**#section** _nome_

    Inicia uma nova seção para o código gerado. Quaisquer variáveis e funções
    que são declaradas como "static" são visíveis apenas para a seção à
    qual pertencem. Por padrão, cada arquivo fonte é uma seção separada
    e há apenas uma seção por arquivo.

    Com a diretiva #section, você pode criar múltiplas seções em um

    arquivo fonte. O nome de uma seção é opcional, se não for definido, um
    identificador único para o arquivo fonte é usado para o nome da seção.

    Qualquer seção declarada termina automaticamente no final do arquivo.

**#tryinclude** _nome do arquivo_ ou _< nome do arquivo >_

    Esta diretiva se comporta de forma similar à diretiva #include, mas não
    dá um erro quando o arquivo a incluir não existe — ou seja, tenta
    incluir mas falha silenciosamente em caso de erro.

**#undef** _nome_

    Remove uma macro de substituição de texto ou uma constante numérica declarada
    com const. O parâmetro "nome" deve ser o "prefixo" da macro — a
    parte alfanumérica da macro. Veja página 93 para detalhes e exemplos
    sobre substituição de texto.

---

`Veja também "Constantes predefinidas" na página 102`

`Caractere de escape: 99`

`Suporte a números racionais: 98`

`Mensagens de aviso: 161`

---

[Voltar ao Índice](Contents)
