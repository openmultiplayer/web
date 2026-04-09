---
title: "Palavras-chave: Declarações"
sidebar_label: "Palavras-chave: Declarações"
---

## `assert`

Aborta a execução com um erro em tempo de execução se a expressão for avaliada como logicamente falsa. Parece funcionar apenas no bloco main(). A declaração assert deve ser usada para indicar um erro lógico (do programador), nunca um erro em tempo de execução (do usuário).

```c
main()
{
    assert (MAX_PLAYERS == GetMaxPlayers()); // garante que a definição de MAX_PLAYERS é igual ao número real de slots do servidor em uso
}
```

## `break`

Sai de um loop instantaneamente, saindo apenas do loop de nível superior, não de todos os loops atuais.

```c
for (new i = 0; i < 10; i++)
{
    printf("%d", i);
    if (i == 5)
    {
        break;
    }
}
```

Produzirá:

```c
0
1
2
3
4
5
```

Enquanto:

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;
    }
    printf("%d", i);
}
```

Produzirá:

```c
0
1
2
3
4
```

Como o loop é instantaneamente encerrado, nenhum dos loops chega a 10 e o segundo termina antes do número 5 ser impresso.

## `case`

Trata um resultado específico em uma declaração switch. O resultado pode ser um único número, uma seleção de números ou um intervalo de números:

```c
new
    switchVar = 10;
switch (switchVar)
{
    case 1:
    {
        printf("switchVar é 1");
    }
    case 4:
    {
        printf("switchVar é 4");
    }
    case 2, 3, 5:
    {
        printf("switchVar é 2, 3 ou 5");
    }
    case 7 .. 11:
    {
        printf("switchVar está entre 7 e 11 inclusive (7, 8, 9, 10 ou 11)");
    }
    default:
    {
        printf("switchVar não é 1, 2, 3, 4, 5, 7, 8, 9, 10 ou 11");
    }
}
```

## `continue`

Similar ao break, mas apenas avança para a próxima iteração do loop. É importante notar que o ponto para o qual ele pula varia dependendo do tipo de loop que você usa.

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
}
```

Produzirá:

```c
0
1
2
3
4
6
7
8
9
```

Um continue após o print basicamente não fará nada. Em um loop for, continue pula para a terceira declaração na instrução for (neste exemplo, a parte "i++;"), isso é diferente de como se comporta em um loop while:

```c
new
    i = 0;
while (i < 10)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
    i++;
}
```

Isso produzirá um loop infinito, pois continue pulará para DEPOIS do "i++;" e voltará para a parte "while (i < 10)". Nesse momento, "i" ainda será 5, pois "i++;" nunca foi chamado, e então continue será chamado novamente e "i" ficará preso em 5 para sempre.

## `default`

default trata resultados de declarações switch que não são tratados explicitamente por declarações case. Veja o exemplo do case para um exemplo.

## `do`

do é um tipo de loop que pode ser usado com while para produzir um loop que sempre será executado pelo menos uma vez. Note o ponto e vírgula após o while () no exemplo a seguir:

```c
new
    i = 10;
do
{
    printf("%d", i);
    i++;
}
while (i < 10);
```

"i" claramente não é menor que 10, mas este loop produzirá:

```c
10
```

de qualquer forma. O loop while similar:

```c
new
    i = 10;
while (i < 10)
{
    printf("%d", i);
    i++;
}
```

Não dará nenhuma saída, pois a condição falha instantaneamente.

Estes também são úteis para evitar verificações duplas:

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    while (checkVar == 10)
    {
        checkVar = someFunction(i);
        i++;
    }
}
```

Isso não é obviamente um grande problema, mas você está verificando checkVar duas vezes em rápida sucessão no início do loop, o que é bastante inútil, porém o if é necessário pois você precisa executar código se a condição for verdadeira, mas fora do loop (esta é uma situação bastante comum). Isso pode ser melhorado fazendo:

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    do
    {
        checkVar = someFunction(i);
        i++;
    }
    while (checkVar == 10);
}
```

Neste caso, o resultado será exatamente o mesmo, mas crucialmente com uma verificação inútil a menos.

## `else`

else é chamado quando uma declaração if falha (assumindo que está presente):

```c
new
    checkVar = 5;
if (checkVar == 10)
{
    printf("Isso nunca será chamado");
}
else
{
    printf("A declaração if falhou, então isso será exibido");
}
```

else também pode ser combinado com if:

```c
new
    checkVar = 2;
if (checkVar == 1)
{
    printf("Isso não será chamado"):
}
else if (checkVar == 2)
{
    printf("O primeiro if falhou, então o segundo foi verificado e é verdadeiro");
}
else
{
    printf("Isso não será chamado, pois um dos ifs era verdadeiro");
}
```

## `exit`

Isso encerra o programa atual instantaneamente.

```c
main()
{
    exit;
    return 0;
}
```

## `for`

Um loop for é um tipo de loop que envolve três estágios: inicialização, comparação e atualização. Cada um é separado por ponto e vírgula e cada um pode ser excluído simplesmente deixando um espaço em branco. O loop for mais básico é:

```c
for ( ; ; ) {}
```

Este não tem inicialização, nem comparação e nem atualização e, como resultado, continuará para sempre (a comparação, sendo ausente, assume o valor verdadeiro por padrão).

Um dos loops mais comuns é:

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
```

A inicialização neste loop é:

```c
new i = 0;
```

O ponto e vírgula marca o fim da inicialização. Isso declara uma nova variável, chamada i, que só pode ser usada dentro deste loop. Em seguida, a comparação é feita. Ela compara i com MAX_PLAYERS (padrão 500 - veja #define) e se for menor, continua. Então, o conteúdo do loop é executado. Inicialmente, isso imprimirá "0". Finalmente, a atualização é feita "i++", isso aumenta o valor de i. Agora, uma iteração completa está concluída, o loop volta, como o nome indica, e retorna ao estágio de comparação (a inicialização é feita apenas uma vez por chamada).

O resultado deste loop é todos os números de 0 a 499 inclusive sendo impressos. O loop while equivalente (ignorando os efeitos do continue) seria:

```c
new
    i = 0;
while (i < MAX_PLAYERS)
{
    printf("%d", i);
    i++;
}
```

Os três estágios podem ser tornados muito mais complexos se necessário, usando vírgulas para a primeira e última seções e comparações padrão para a seção do meio:

```c
for (new i = 0, j = 200; i < MAX_PLAYERS && j > 10; i++, j -= 2)
{
    printf("%d %d", i, j);
}
```

Isso criará duas novas variáveis e as definirá como 0 e 200, então fará um loop enquanto uma for menor que 200 e a outra for maior que 10, aumentando uma a cada vez e diminuindo a outra em dois a cada vez.

Como dito antes, o escopo das variáveis é geralmente limitado ao loop:

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

Isso produzirá um erro, pois "i" não existe após o loop terminar. No entanto:

```c
new
    i = 0;
for ( ; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

Está correto, pois "i" não é declarado no loop. Você também poderia inicializar "i" no loop, mas não declará-lo lá:

```c
new
    i;
for (i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

## `goto`

goto e rótulos são geralmente desencorajados na comunidade de programação, pois o que eles fazem geralmente pode ser feito melhor reestruturando seu código adequadamente. No entanto, basicamente um goto é um salto:

```c
goto my_label;
printf("Isso nunca será impresso");
my_label:
printf("Isso será impresso");
```

O compilador, no entanto, não lida muito bem com goto, então isso não será otimizado de forma alguma e coisas como:

```c
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    else
    {
        my_label:
        return 0;
    }
}
```

Darão um aviso sobre tipos de retorno inconsistentes, pois ele pensa que o ramo verdadeiro não retorna nada quando na verdade retorna, apenas de uma forma muito indireta. Além disso:

```c
MyFunction()
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    return 0;
    my_label:
    return 1;
}
```

Dará um aviso de código inalcançável, apesar de que ele é de fato alcançável.

A sintaxe básica é:

```c
label:

goto label;
```

O rótulo deve estar em uma linha sozinha e terminar com dois pontos, NÃO com ponto e vírgula. Rótulos seguem as mesmas restrições de nomenclatura que variáveis e funções etc.

## `if`

If é um dos operadores mais importantes. Ele determina se algo deve ser feito ou não e age de acordo, ele, junto com goto, é a base de quase todas as outras estruturas de controle:

```c
for (new i = 0; i < 10; i++)
{
}
```

É equivalente a:

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

As condições que if pode aceitar são muitas demais para este post, porém algumas estão listadas abaixo:

Operador Explicação Exemplo Resultado quando a=1, b=0 Resultado quando a=1, b=1 Resultado quando a=0, b=1 Resultado quando a=0, b=0 == Verifica se uma coisa é igual a outra if (a == b) falso verdadeiro falso verdadeiro != Verifica se uma coisa não é igual a outra if (a != b) verdadeiro falso verdadeiro falso < Verifica se uma coisa é menor que outra if (a < b) falso falso verdadeiro falso > Verifica se uma coisa é maior que outra if (a > b) verdadeiro falso falso falso \<= Verifica se uma coisa é menor ou igual a outra if (a \<= b) falso verdadeiro verdadeiro verdadeiro >= Verifica se uma coisa é maior ou igual a outra if (a >= b) verdadeiro verdadeiro falso verdadeiro && Verifica se duas coisas são verdadeiras (não 0) if (a && b) falso verdadeiro falso falso || Verifica se pelo menos uma de duas coisas é verdadeira (não 0) if (a || b) verdadeiro verdadeiro verdadeiro falso ! Verifica se algo é falso if (!(a == b)) verdadeiro falso verdadeiro falso

Obviamente, com estes você pode construir condicionais complexas:

```c
if (a == b && (c != d || f < g))
```

Isso será verdadeiro se a for igual a b e f for menor que g ou c não for igual a d (ou ambos).

## `return`

Isso sai de uma função e pode retornar dados para a função que a chamou:

```c
MyFunction()
{
    new
        someVar = OtherFunction();
}

OtherFunction()
{
    return 5;
}
```

someVar agora será 5.

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Retornou 1");
    }
}

SomeFunction()
{
    return random(2);
}
```

Isso retornará 1 ou 0 para a declaração if da função que chamou. 1 é verdadeiro e 0 é falso, então o texto só será impresso se 1 for retornado. No entanto:

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Retornou algo entre 1 e 10");
    }
}

SomeFunction()
{
    return random(11);
}
```

Isso retornará 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ou 10. Qualquer coisa que não seja 0 é verdadeiro, então o texto será exibido se qualquer coisa entre 1 e 10 for retornada.

Você também pode usar return com strings:

```c
MyFunction()
{
    printf("%s", SomeFunction());
}

SomeFunction()
{
    new
        str[10] = "Hello";
    return str;
}
```

Imprimirá "Hello" (sem as aspas).

Você também não precisa retornar nada:

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    return;
}
```

No entanto, se você fizer isso, deve garantir que o retorno da função nunca seja usado:

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Problema");
    }
}

SomeFunction()
{
    return;
}
```

Aqui SomeFunction não está retornando nada, porém MyFunction está verificando se o valor retornado de SomeFunction é verdadeiro ou não - não é nenhum dos dois, pois simplesmente não existe, então você receberá um erro do compilador. Nenhum retorno é o padrão, então:

```c
SomeFunction()
{
    return;
}
```

E:

```c
SomeFunction()
{
}
```

São a mesma coisa.

Por fim, você não pode misturar valores de retorno:

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
    else
    {
        return;
    }
}
```

Isso dará um erro porque não sabe o que fazer.

```c
SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
}
```

Também não é permitido, pois o retorno padrão é nada.

## `sleep`

sleep é uma pseudo-função que faz a execução pausar por um determinado número de milissegundos:

```c
printf("Tempo 0s");
sleep(1000);
printf("Tempo 1s");
```

Isso só funciona em main(), não em callbacks, pois é executado na thread PAWN.

## `state`

state faz parte do sistema de máquina de estados e autômatos do PAWN, veja [este tópico](https://sampforum.blast.hk/showthread.php?tid=570939) para mais informações.

## `switch`

switch é basicamente um sistema estruturado de if/else if/else:

```c
switch (someVar)
{
    case 1:
    {
        printf("um");
    }
    case 2:
    {
        printf("dois");
    }
    case 3:
    {
        printf("três");
    }
    default:
    {
        printf("outro");
    }
}
```

É apenas uma forma um pouco mais eficiente (e muito mais limpa) de fazer:

```c
if (someVar == 1)
{
    printf("um");
}
else if (someVar == 2)
{
    printf("dois");
}
else if (someVar == 3)
{
    printf("três");
}
else
{
    printf("outro");
}
```

## `while`

while é um tipo de loop similar ao for e do..while. A operação básica é uma declaração if que, se verdadeira, executa algum código e volta para o if. Se for falsa, vai para depois do código do loop - não há else. Voltando ao exemplo do goto:

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

Isso também pode ser escrito como:

```c
new
    i = 0;
while (i < 10)
{
    i++;
}
```

Veja do e for para mais informações.
