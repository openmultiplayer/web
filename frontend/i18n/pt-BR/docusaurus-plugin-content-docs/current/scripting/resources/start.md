---
title: Scripting Basics
sidebar_label: Scripting Basics
description: "Um breve tutorial guiando você pelos fundamentos da linguagem Pawn e SA-MP/open.mp APIs."
---


Abaixo está um exemplo do script mais básico que você pode escrever:

```c
#include <a_samp>

main()
{
    print("Hello World!");
    return 1;
}
```
Os vários aspectos serão abordados sucessivamente, mas começaremos examinando a primeira linha.

---

## Incluir

```c
#include <a_samp>
```
Isso basicamente carrega o código de pawno/includes/a_samp.inc em seu script, para que você possa usar tudo o que ele tiver. Uma das coisas que tem é:

```c
#include <core>
#include <float>
#include <string>
#include <file>
#include <time>
#include <datagram>
#include <a_players>
#include <a_vehicles>
#include <a_objects>
#include <a_sampdb>
```
Isso inclui todos os outros arquivos nesse diretório, portanto, ao adicionar essa linha, você terá acesso a todas as funções em SA:MP (mais sobre funções posteriormente).

---

## Chamadas

A próxima parte tem dois lados de uma chamada de função. main() é uma função para a qual você escreve o código e é chamada de outro lugar, print(string\[\]) é uma função com o código em outro lugar que você chama. Atualmente, tudo o que isso fará é carregar, imprimir uma string (ou seja, imprimir "Hello World!" (sem os "" s) (uma tradição em todas as linguagens de script)) no console do servidor e finalizar. O:

```c
return 1;
```
Passa um valor (1) de volta ao local que chamou main para informar o que aconteceu (o valor exato passado aqui não importa, mas em outros locais importa). Agora você tem seu primeiro script (muito básico). Se você selecionar file->new em pawno, você terá um ponto de partida muito maior para todos os retornos de chamada (veja abaixo), incluindo main (que não é tecnicamente um callback, mas age como um).

---

## Declarações

As linhas de impressão e retorno possuem ';' (um ponto e vírgula) neles, isso denota apenas o final de uma instrução (uma instrução é um grupo de uma ou mais funções e operadores que juntos fazem algo, semelhante a uma frase na linguagem comum). A maioria das pessoas coloca declarações separadas em linhas separadas, mas isso não é obrigatório, apenas torna as coisas mais claras. O seguinte é igualmente válido:

```c
main() { print("Hello World!"); return 1; }
```
Os {}s (colchetes (colchetes), não parênteses (colchetes)) incluem um grupo de instruções que devem ser executadas juntas (como um parágrafo na linguagem comum). Se você fez:

```c
main() print("Hello World!"); return 1;
```
Você receberia um erro porque agora o "return 1;" a instrução não está agrupada, portanto não faz parte do principal. Os colchetes agrupam um conjunto de instruções em uma única instrução (chamada de instrução composta) e as funções possuem uma única instrução com elas. Sem os colchetes print e return são instruções totalmente separadas, então há duas ou elas, como uma função só pode ter uma única instrução, a segunda não está em uma função, o que o código não pode ser.

Mas geralmente, você pode expandir instruções compostas com o uso do operador vírgula (,), mas isso não é sugerido porque não é a melhor prática de codificação. Segue um exemplo:

```c
main() print("Hello World!"), return 1;
```
# Funções

Uma função é basicamente um pedaço de código que faz algo e pode ser instruído a fazer isso de algum outro lugar. Ele também pode passar dados sobre o que fez para o local que o instruiu a executar (o local que o "chamou").

---

## Chamando

```c
print("Hello World!");
```
Conforme descrito no primeiro exemplo, isso chama a função chamada "print" (definida em a_samp.inc, e é por isso que você precisa incluí-la) e diz para exibir algo no console do servidor (a palavra hello).

Uma função consiste no nome da função (por exemplo, print), que informa ao sistema qual parte do código você deseja chamar, e uma lista de parâmetros, entre ()s após o nome da função, que passa dados adicionais para a função para ajudá-la a ser executada. Se você não tivesse parâmetros, precisaria de milhões de funções:

```c
printa();
printaa();
printab();
printac();
etc...
```
As funções podem ter quantos parâmetros você quiser, de 0 para cima (pode haver um limite superior, mas é pelo menos 128):

```c
printf("Hello World!", 1, 2, 3, 4, 5, 6);
```
Não se preocupe com o que essa função faz por enquanto, apenas que ela possui 7 parâmetros, cada um separado por vírgula.

---

## Definindo

Além de poder chamar funções existentes, você também pode escrever e chamar as suas próprias:

```c
#include <a_samp>

main()
{
    return MyFunction();
}

MyFunction()
{
    print("Hello World!");
    return 1;
}
```
Isso faz exatamente o mesmo que o código original, mas é organizado de maneira diferente. Quando main() é chamado quando o modo é iniciado (é chamado automaticamente), ele chama a nova função personalizada chamada MyFunction(). Esta função imprime a mensagem no console do servidor e retorna o número 1 para main(). main() pega o valor retornado (1) e então o retorna para o próprio servidor (ou seja, o local que chamou main em primeiro lugar). Como "retornar MyFunction();" é uma única declaração que você poderia fazer:

```c
#include <a_samp>

main() return MyFunction();

MyFunction()
{
    print("Hello World!");
    return 1;
}
```
Mas a maioria das pessoas não o faz para maior clareza. Você também não pode usar o valor de retorno MyFunction e fazer:

```c
#include <a_samp>

main()
{
    MyFunction();
    return 1;
}

MyFunction()
{
    print("Hello World!");
    return 1;
}
```
---

## Parâmetros

Os parâmetros são um tipo de [variável](start#variables) que você não precisa declarar, pois vêm do local que chamou a função:

```c
#include <a_samp>

main()
{
    return MyFunction("Hello World!");
}

MyFunction(string[])
{
    print(string);
    return 1;
}
```
Este código ainda faz a mesma coisa, mas agora estamos dizendo a MyFunction() o que exibir. A chamada passa a string "Hello World!" para a função onde está armazenado em uma variável chamada string (o \[\] significa que é um [array](start#arrays) conforme explicado posteriormente). A função print é chamada, passando o conteúdo da variável string, sabemos que é uma variável porque não possui mais o "".

# Variáveis

Uma variável é basicamente um pedaço de memória, é onde os dados são armazenados e podem ser alterados e lidos conforme necessário. As variáveis ​​​​são uma ou mais células, uma célula tem 32 bits (4 bytes) de tamanho e, por padrão, assinada para que possam armazenar de -2147483648 a 2147483647 (embora -2147483648 seja mal definido em PAWN e forneça resultados estranhos se exibido). Uma variável feita de mais de uma célula é chamada de array, strings são um tipo especial de array onde cada célula contém um caractere da string (ou 4 caracteres em strings compactadas, mas eles não são abordados aqui).

---

## Declaração

Para criar uma nova variável você deve declará-la:

```c
new
    myVariable;
```
Isto diz ao sistema para criar uma nova variável chamada myVariable, o valor inicial desta variável será 0.

---

## Configuração

```c
new
    myVariable = 7;
```
Isso declara uma nova variável e define seu valor inicial como 7, então imprimir a variável agora resultará em 7. Para exibir uma variável que não seja uma string, precisamos voltar à função printf() mencionada anteriormente e fazer:

```c
new
    myVariable = 7;
printf("%d", myVariable);
```
Novamente, por enquanto tudo que você precisa saber é que isso imprimirá o valor de myVariable (ou seja, 7 neste ponto) no servidor.

```c
new
    myVariable = 7;
printf("%d", myVariable);
myVariable = 8;
printf("%d", myVariable);
```
Esse código irá imprimir 7, alterar o valor da variável para 8 e exibir o novo valor também na janela do servidor. Há muitas outras coisas que você pode fazer com as variáveis, algumas estão listadas abaixo, a maioria está listada em outro lugar:

```c
myVariable = myVariable + 4;
```
Define o valor de myVariable para o valor antigo de myVariable mais 4, ou seja, aumenta seu valor em 4. Isso também pode ser escrito como:

```c
myVariable += 4;
```
O que significa apenas "aumentar myVariable em 4".

```c
myVariable -= 4;
```
Isso diminuirá o valor em 4.

```c
myVariable *= 4;
```
Isso multiplicará o valor por 4.

```c
myVariable /= 4;
```
Isso dividirá o valor por 4.

---

## Matrizes

### Declaração

---

Um array é uma variável na qual você pode armazenar vários dados de uma vez e acessá-los dinamicamente. Um array é declarado com um tamanho definido em tempo de compilação, então você precisa saber quantos dados você precisa armazenar com antecedência, um bom exemplo disso é o array MAX_PLAYERS muito comum, que terá um slot para cada jogador possivelmente conectado, então você sabe que os dados de um jogador não interferirão nos dados de outro jogador (mais sobre definições mais tarde).

```c
new
    myArray[5];
```
Esse código declarará um array com 5 slots grandes, para que você possa armazenar 5 dados normais de uma vez naquele único. O que você não pode fazer é algo como o seguinte:

```c
new
    myVariable = 5,
    myArray[myVariable];
```
Parece que esse código criaria uma matriz do tamanho de qualquer número armazenado em myVariable (aqui 5, mas pode ser qualquer coisa), mas você não pode fazer isso. Em PAWN a memória para variáveis ​​é atribuída quando você compila seu código, isso significa que os arrays são sempre do mesmo tamanho, você não pode definir o tamanho como quiser quando quiser.

---

### Acessando

Para definir um valor em um array você precisa dizer em qual parte do array deseja armazenar os dados, isso CAN pode ser feito com outra variável:

```c
new
    myArray[5];
myArray[2] = 7;
```
Isso declarará um array com 5 slots e dará ao slot THIRD o valor 7, visto que as variáveis ​​sempre começam como 0 isso fará com que os valores no array:

```
0, 0, 7, 0, 0
```
Por que não é:

```
0, 7, 0, 0, 0
```
você está se perguntando? É porque a contagem, na verdade, começa no número 0, não em 1. Considere o seguinte:

```
2, 4, 6, 8
```
Se você percorrer a lista depois do número 2 você já teve um número (o 2), isso significa que se você estiver contando os números quando chegar ao número 4 você já está em um, você não está em um quando chega em 2, você está em zero. Assim, o 2 está na posição zero e o 4 está na posição um, e assim segue-se que o 6 está na posição dois, que é onde está o 7 no primeiro exemplo acima. Se rotularmos os slots do primeiro exemplo, obteremos:

```
0 1 2 3 4
0 0 7 0 0
```
Existem cinco slots, mas como você pode ver, e isso é muito importante, THERE IS NO SLOT FIVE, fazer o seguinte pode travar seu servidor:

```c
new
    myArray[5];
myArray[5] = 7;
```
Como mencionado acima, o índice do array (o índice é o slot no qual você está escrevendo) pode ser qualquer coisa, um número, uma variável ou até mesmo uma função que retorne um valor.

```c
new
    myArray[5],
    myIndex = 2;
myArray[myIndex] = 7;
```
Depois de ter um array e um índice você pode usar esse bloco exatamente como se fosse qualquer outra variável:

```c
myArray[2] = myArray[2] + 1;
myArray[2] += 1;
myArray[2]++;
```
---

### Exemplo

Conforme mencionado acima, um tipo comum de array é o array MAX_PLAYERS. MAX_PLAYERS não é uma variável, é uma definição que será explicada mais tarde, mas por enquanto aceite que é um número constante igual ao número máximo de jogadores que um servidor pode conter (por padrão é 500, mesmo se você alterar o número em seu arquivo server.cfg). O código a seguir usa variáveis ​​normais para armazenar dados de 4 jogadores e fazer algo com esses jogadores em uma função (para simplificar, suponha que MAX_PLAYERS seja 4 por enquanto):

```c
new
    gPlayer0,
    gPlayer1,
    gPlayer2,
    gPlayer3;

SetPlayerValue(playerid, value)
{
    switch(playerid)
    {
        case 0: gPlayer0 = value; // é o mesmo que fazer se (playerid == 0)
        case 1: gPlayer1 = value; // é o mesmo que fazer se (playerid == 1)
        case 2: gPlayer2 = value; // é o mesmo que fazer se (playerid == 2)
        case 3: gPlayer3 = value; // é o mesmo que fazer se (playerid == 3)
    }
}
```
Consulte a seção sobre estruturas de controle para obter mais informações sobre o que está acontecendo lá. Observe também que isso pode ser feito como uma opção, mas é menos claro para o exemplo e, de qualquer maneira, é efetivamente o mesmo código.

Agora compare isso com o uso de um array com um slot por jogador, tendo em mente que um índice de array pode ter qualquer valor:

```c
new
    gPlayers[MAX_PLAYERS];

SetPlayerValue(playerid, value)
{
    gPlayers[playerid] = value;
}
```
Isso criará um array global (veja a seção sobre escopo) com um slot para cada jogador, então a função atribuirá o que estiver na variável "valor" ao slot do jogador especificado. O primeiro exemplo era grande com apenas quatro jogadores, usando 4 linhas por jogador, são 2.000 linhas para 500 jogadores (se pode ser menos, mas ainda é muito), a segunda versão é uma única linha, não importa quantos jogadores você tenha.

---

## Cordas

### Uso básico

---

Uma string é um tipo especial de array, usado para armazenar vários caracteres para criar uma palavra ou frase ou outro texto legível por humanos. Um caractere tem um byte de tamanho (embora existam conjuntos estendidos onde um caractere tem vários bytes, mas estes não são bem definidos em SA:MP) e por padrão um caractere ocupa uma célula (uma variável normal ou um slot de array). Os caracteres são codificados em um sistema chamado [ASCII](https://www.asciitable.com), o caractere "A" é representado pelo número 65, dizer ao sistema para exibir um número resultará em 65, dizer ao sistema para exibir um caractere resultará em a maiúsculo. Obviamente, se um único caractere ocupa uma única célula, vários caracteres (ou seja, texto) ocuparão várias células, coleções de células, como acabamos de explicar, são chamadas de arrays.

Strings em PAWN (e outras linguagens) são chamadas de "NULL finalizadas", isso significa que quando 0 é alcançado, a string termina. Este não é o mesmo que o caractere "0", representado pelo número 48, este é o caractere NULL, representado pelo número 0. Isso significa que você pode ter uma matriz de string com 20 células de tamanho, mas só ter uma string com 3 caracteres se o quarto caractere for o caractere NULL, sinalizando o fim da string. No entanto, você não pode ter uma sequência de 20 caracteres, pois o caractere NULL MUST está na sequência; portanto, em uma matriz de 20 células, você pode ter uma sequência de 19 caracteres e um caractere de terminação NULL.

```c
new
    myString[16] = "Hello World!";
```
Esse código declara uma nova string com espaço suficiente para uma string de 15 caracteres e a define inicialmente como a string de 5 caracteres "Hello World!", as aspas duplas ao redor do texto indicam que é uma string. Internamente o array ficará assim:

```
104 101 108 108 111 0 x x x x x x x x x x
```
Os "x" significam qualquer coisa, neste exemplo eles serão todos 0, mas como estão depois do caractere nulo, não importa o que sejam, eles não afetarão a string.

Strings podem ser manipuladas como arrays normais, por exemplo:

```c
new
    myString[16] = "Hello World!";
myString[1] = 97;
```
Irá alterar o caractere no slot 1 para o caractere representado pelo número 97 (um "a" minúsculo), resultando na leitura da string "alô". Isso pode ser escrito de forma muito mais legível e fácil de editar como:

```c
new
    myString[16] = "Hello World!";
myString[1] = 'a';
```
As aspas simples ao redor de "a" significam que é um caractere, não uma string, os caracteres não precisam ser terminados em NULL, pois têm apenas uma célula de comprimento, eles também podem ser usados ​​​​alternadamente com números se você souber o que eles representam.

```c
new
    myString[16] = "Hello World!";
myString[1] = '\0';
```
'\\0' tem dois caracteres, porém o \\ é um caractere especial que modifica o próximo caractere, \\0 significa NULL, esse código é o mesmo que fazer:

```c
new
    myString[16] = "Hello World!";
myString[1] = 0;
```
Mas isso não é o mesmo que fazer:

```c
new
    myString[16] = "Hello World!";
myString[1] = '0';
```
A primeira e a segunda versões resultarão na string sendo simplesmente:

```
h
```
A terceira versão resultará na string sendo:

```
h0llo
```
---

### Caractere de escape

Como mencionado brevemente, uma barra invertida é um caractere especial, fazendo:

```
'\'
```
ou:

```
"\"
```
Dará um erro de compilador porque o \ modifica o próximo caractere para que essas constantes não sejam finalizadas corretamente, isso pode ser usado para criar caracteres que normalmente não podem ser criados, por exemplo:

```c
new
    myString[4] = "\"";
```
Esse código criará uma string que consiste apenas em aspas duplas, normalmente uma aspas duplas sinaliza o final de uma string escrita, mas a barra invertida torna as aspas duplas imediatamente após uma parte da string, e as aspas duplas depois disso terminam a string. Outros caracteres especiais são:

| Code | Nome | Finalidade |
| ------ | --------------- | ------------------------------------------------------------------------------------------------------- |
| \0 | Caractere NULL | Termina uma string.                                                                                          |
| EOS | Caractere NULL | (igual ao acima) |
| \n | Alimentação de linha | use \n para uma nova linha no Linux (também funciona no Windows) |
| \r | Retorno de transporte | Use \r\n para uma nova linha no Windows |
| \\\\ | Barra invertida | Usado para colocar uma barra invertida real em uma string |
| \' | Citação única | Usado para usar aspas simples reais como um caractere entre aspas simples (use: '\'') |
| \" | Aspas duplas | Usado para colocar aspas duplas reais em uma string |
| \xNNN; | Número hexadecimal | Usado para definir o caractere representado pelo número hexadecimal especificado em NNN |
| \NNN; | Número | Usado para definir o caractere representado pelo número especificado no lugar de NNN (consulte \0) |

Usado para definir o caractere representado pelo número especificado no lugar de NNN (consulte \\0)

Existem outros, mas esses são os principais.

---

## Tags

Uma tag é uma informação adicional sobre uma variável que define onde ela pode ser utilizada, fornecendo informações sobre sua funcionalidade. As tags podem ser fortes (começando com letra maiúscula) ou fracas. Por exemplo:

```c
new
    Float:a = 6.0;
```
A parte "Float" é a tag, ela define esta variável como um float (número não inteiro/real) e determina onde ela pode ser usada.

```c
native SetGravity(Float:gravity);
```
Isso significa que a função SetGravity usa um único parâmetro que deve ser flutuante, por exemplo:

```c
SetGravity(6.0);
new
   Float:fGrav = 5.0;
SetGravity(fGrav);
```
Isso definirá a gravidade para 6 (6,0 como flutuador) e depois 5 (5,0 como flutuador). Usar a tag errada no lugar errado geralmente causará uma incompatibilidade de tags:

```c
SetGravity(MyTag:7);
```
Isso tentará definir a gravidade para 7 com a tag "MyTag", que claramente não é "Float", então está errado. Observe também que as tags diferenciam maiúsculas de minúsculas.

Tags personalizadas podem ser definidas pelos usuários:

```c
new myTag: variable = 0,

    AppleTag: another = 1;
```
Isso é perfeitamente válido, entretanto, ao adicionar essas duas variáveis ​​_diretamente_, você deve usar '\_:' para 'desetiquetá-las', caso contrário o compilador produzirá um aviso de 'tag incompatível'.

---

## Escopo

Escopo é onde uma variável pode ser usada. Existem quatro escopos principais: local, estático local, estático global e global. Todas as variáveis ​​só podem ser usadas depois de declaradas, então está certo:

```c
new
    var = 4;
printf("%d", var);
```
Isso está errado:

```c
printf("%d", var);
new
    var = 4;
```
---

###locais

Uma variável local é aquela declarada “nova” dentro de uma função ou parte de uma função:

```c
MyFunc()
{
    new
        var1 = 4;
    printf("%d", var1);
    {
        // var1 ainda existe porque este é um nível inferior
        new
            var2 = 8;
        printf("%d %d", var1, var2);
    }
    // var2 não existe mais porque este é um nível superior
}
// var1 não existe mais
```
Variáveis ​​locais são redefinidas sempre, por exemplo:

```c
for (new i = 0; i < 3; i++)
{
    new
        j = 1;
    printf("%d", j);
    j++;
}
```
Irá imprimir:

```
1
1
1
```
Como j é criado, impresso, incrementado e depois destruído, o código faz um loop.

---

### local estático

Um local estático pode ser usado no mesmo local que um local, mas não esqueça seu valor antigo, por exemplo:

```c
MyFunc()
{
    static
        var1 = 4;
    printf("%d", var1);
    {
        // var1 ainda existe porque este é um nível inferior
        static
            var2 = 8;
        printf("%d %d", var1, var2);
    }
    // var2 não existe mais porque este é um nível superior
}
// var1 não existe mais
```
Esse código se comportará exatamente da mesma forma que o novo exemplo, porém isto:

```c
for (new i = 0; i < 3; i++)
{
    static
        j = 1;
    printf("%d", j);
    j++;
}
```
Irá imprimir:

```
1
2
3
```
Como `j` é estático, lembra seu valor antigo.

---

### global

Variáveis globais são declaradas fora de uma função e podem ser usadas em qualquer função:

```c
new
    gMyVar = 4;

MyFunc()
{
    printf("%d", gMyVar);
}
```
Eles nunca são redefinidos ou perdidos.

---

### estática global

Variáveis estáticas globais são como globais normais, mas só podem ser usadas no arquivo em que são declaradas:

Arquivo1:

```c
static
    gsMyVar = 4;

MyFunc()
{
    printf("%d", gsMyVar);
}

#include "File2"
```
Arquivo2:

```c
MyFunc2()
{
    // Isso está errado porque gsMyVar não existe aqui
    printf("%d", gsMyVar);
}
```
static também pode ser aplicado a funções da mesma maneira.
