# Instruções

---

Uma instrução pode ocupar uma ou mais linhas, enquanto uma linha pode conter duas ou
mais instruções.

Instruções de controle de fluxo (if, if–else, for, while, do–while e switch) podem ser aninhadas.

**Rótulo de instrução**

    Um rótulo consiste em um identificador seguido por dois pontos (":").
    Um rótulo é um "alvo de salto" para a instrução goto.

    Cada instrução pode ser precedida por um rótulo.
    Deve haver uma instrução após o rótulo; uma instrução vazia é permitida.

    O escopo de um rótulo é a função na qual ele é declarado
    (uma instrução goto não pode, portanto, saltar para fora da função atual para outra função).

**Instrução composta**

    Uma instrução composta é uma série de zero ou mais instruções
    cercadas por chaves (`{` e `}`). A chave final (`}`) não deve ser seguida por um ponto e vírgula.
    Qualquer instrução pode ser substituída por uma instrução composta.
    Uma instrução composta também é chamada de bloco.
    Uma instrução composta com zero instruções é um caso especial,
    e é chamada de "instrução vazia".

**Instrução de expressão**

    Qualquer expressão se torna uma instrução quando um ponto e vírgula (";") é anexado a ela.
    Uma expressão também se torna uma instrução quando apenas espaço em branco
    a segue na linha e a expressão não pode ser estendida para a próxima linha.

**Instrução vazia**

    Uma instrução vazia não realiza nenhuma operação e consiste em um
    bloco composto com zero instruções; ou seja, consiste nos tokens "{ }".
    Instruções vazias são usadas em instruções de controle de fluxo
    se não houver ação (por exemplo, while (!iskey()) {}) ou ao definir um rótulo logo
    antes da chave de fechamento de uma instrução composta.
    Uma instrução vazia não termina com um ponto e vírgula.

**assert** _expressão_

    Aborta o programa com um erro em tempo de execução
    se a expressão resultar logicamente em "falso".

**break**

    Termina e sai da menor instrução do, for ou while
    que a contém de qualquer ponto dentro do loop
    que não seja o final lógico. A instrução break move o controle do programa
    para a próxima instrução fora do loop.

**continue**

    Termina a iteração atual da menor instrução do, for ou while
    que a contém e move o controle do programa para a parte de condição do loop.
    Se a instrução de loop for uma instrução for,
    o controle move para a terceira expressão na instrução for
    (e depois para a segunda expressão).

**do** _instrução_ **while** ( _expressão_ )

    Executa uma instrução antes da parte de condição (a cláusula while) ser avaliada.
    A instrução é repetida enquanto a condição for logicamente "verdadeira".
    A instrução é executada pelo menos uma vez.

**exit** _expressão_

    Aborta o programa. A expressão é opcional, mas deve começar
    na mesma linha que a instrução exit se estiver presente.
    A instrução exit retorna o valor da expressão (mais a tag da expressão)
    ao aplicativo host, ou zero se nenhuma expressão exit estiver presente.
    O significado e propósito dos códigos de saída é definido pela implementação.

**for** ( _expressão 1_ ; _expressão 2_ ; _expressão 3_ ) _instrução_

    Todas as três expressões são opcionais.

    *expressão 1*
        Avaliada apenas uma vez, e antes de entrar no loop.
        Esta expressão pode ser usada para inicializar uma variável.
        Esta expressão também pode conter uma declaração de variável, usando a sintaxe new.
        Uma variável declarada nesta expressão existe apenas no loop for.

    *expressão 2*
        Avaliada antes de cada iteração do loop e
        termina o loop se a expressão resultar logicamente em "falso".
        Se omitida, o resultado da expressão 2 é assumido como logicamente "verdadeiro".

    *expressão 3*
        Avaliada após cada execução da instrução.
        O controle do programa move da expressão 3 para a expressão 2
        para a próxima iteração (condicional) do loop.
        A instrução for( ; ; ) é equivalente a while (true).

**goto** _rótulo_

    Move o controle do programa (incondicionalmente) para a instrução que segue o rótulo especificado.
    O rótulo deve estar dentro da mesma função que a
    instrução goto (uma instrução goto não pode saltar para fora de uma função).

**if** ( _expressão_ ) _instrução 1_ **else** _instrução 2_

    Executa a instrução 1 se a expressão resultar logicamente em "verdadeiro".
    A cláusula else da instrução if é opcional.
    Se a expressão resultar logicamente em "falso" e uma cláusula else existir,
    a instrução associada à cláusula else (instrução 2) é executada.

    Quando instruções if são aninhadas e cláusulas else estão presentes,
    um dado else é associado à instrução if precedente mais próxima no mesmo bloco.

**return** _expressão_

    Termina a função atual e move o controle do programa
    para a instrução que segue a instrução de chamada.
    O valor da expressão é retornado como o resultado da função.
    A expressão pode ser uma variável de array ou um array literal.

    A expressão é opcional, mas deve começar na mesma linha
    que a instrução return se estiver presente.
    Se ausente, o valor da função é zero.

**sleep** _expressão_

    Aborta o programa, mas o deixa em um estado reiniciável.
    A expressão é opcional. Se incluída, a instrução sleep
    retorna o valor da expressão (mais a tag da expressão)
    ao aplicativo host. O significado e propósito
    dos códigos/tags de saída é definido pela implementação;
    tipicamente, um aplicativo usa a instrução sleep para permitir
    multitarefa leve de vários programas pawn concorrentes,
    ou para implementar funções "latentes".

**state** ( _expressão_ ) **automaton** :_nome_

    Muda o estado atual no autômato especificado.
    A expressão entre parênteses é opcional; se ausente,
    os parênteses devem ser omitidos também.
    O nome do autômato também é opcional,
    ao mudar o estado do autômato padrão, anônimo;
    se o nome do autômato estiver ausente, os dois pontos (":") devem ser omitidos também.

    Abaixo estão dois exemplos de mudanças de estado incondicionais. O primeiro é para o autômato padrão:

```

state handshake

```

    e o segundo para um autômato específico:

```

state gps:handshake

```

    Frequentemente, se um estado muda ou não depende dos parâmetros do evento ou da condição do autômato como um todo.
    Como mudanças de estado condicionais são tão frequentes,
    a condição pode estar na própria instrução state.
    ∗ A condição segue a palavra-chave state, entre parênteses.
    O estado só mudará se a condição for logicamente "verdadeira".

    A instrução state causa uma chamada implícita para a
    função entry para o estado indicado — se tal função entry existir.

**switch** ( _expressão_ ) \{ _lista de cases_ \}

    Transfere o controle para diferentes instruções dentro do corpo do switch dependendo
    do valor da expressão do switch.
    O corpo da instrução switch é uma instrução composta,
    que contém uma série de "cláusulas case".

    Cada "cláusula case" começa com a palavra-chave case seguida por uma lista de constantes e uma instrução.
    A lista de constantes é uma série de expressões, separadas por vírgulas,
    que cada uma resulta em um valor constante.
    A lista de constantes termina com dois pontos. Para especificar um "intervalo" na lista de constantes,
    separe os limites inferior e superior do intervalo com um período duplo ("..").
    Um exemplo de intervalo é: "case 1..9:".

    A instrução switch move o controle para uma "cláusula case" se o valor de uma das
    expressões na lista de constantes for igual ao resultado da expressão do switch.

    A "cláusula default" consiste na palavra-chave default e dois pontos.
    A cláusula default é opcional, mas se for incluída, deve ser a última cláusula no corpo do switch.
    A instrução switch move o controle para a "cláusula default" se
    nenhuma das cláusulas case corresponder ao resultado da expressão.

    Exemplo:

---

###### ∗ A alternativa é incluir mudanças de estado incondicionais na construção comum if–else.

---

```c

switch (weekday(12,31,1999))
{
    case 0, 1:              /* 0 == Sábado, 1 == Domingo */
        print("fim de semana")
    case 2:
        print("Segunda-feira")
    case 3:
        print("Terça-feira")
    case 4:
        print("Quarta-feira")
    case 5:
        print("Quinta-feira")
    case 6:
        print("Sexta-feira")
    default:
        print("dia da semana inválido")
}

```

**while** ( _expressão_ ) _instrução_

    Avalia a expressão e executa a instrução
    se o resultado da expressão for logicamente "verdadeiro".
    Após a instrução ter sido executada, o controle do programa retorna à expressão novamente.
    A instrução é assim executada enquanto a expressão for verdadeira.

---

`Identificadores: 97`

`Exemplo: 11 (assert)`

`Exemplo: 21 (break)`

`Exemplo: 27 (do while)`

`Exemplos: 9, 11, 21 (for)`

`Declarações de variáveis: 62 (for)`

`Exemplo: 7 (if else)`

`Exemplos: 11, 21 (return)`

`Veja página 40 para exemplos de mudanças de estado condicionais (state automaton)`

`funções "entry": 44 (state automaton)`

`Exemplos: 7, 21, 26 (while)`

---

[Voltar ao Índice](Contents)
