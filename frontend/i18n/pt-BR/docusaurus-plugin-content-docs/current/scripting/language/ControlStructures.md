---
title: "Estruturas de Controle"
sidebar_label: "Estruturas de Controle"
---

## Condicionais

### if

O uso de "if" (se) verifica se algo é verdadeiro e caso seja, realiza alguma coisa.

```c
new
    a = 5;
if (a == 5)
{
    print("a é 5");
}
```

O código entre os parênteses após o "if" é chamado de condição, há inúmeras formas diferentes que você pode usar e testar este condicional (veja os operadores).

No exemplo acima, ambos "a" e "5" são símbolos, funções também podem ser símbolos:

```c
if (AlgumaFunção() == 5)
{
    print("AlgumaFunção() é 5");
}
```

Isso retornará o valor de AlgumaFunção (veja abaixo) e irá comparar com "5".

Você também podem combinar verificações, para checar múltiplas coisas:

```c
new
    a = 5,
    b = 3;
if (a == 5 && b != 3)
{
    print("Não será impresso no log");
}
```

Esse exemplo verifica se "a" é igual a "5" E se "b" não é igual a "3", porém, "b" é igual a "3", então a verificação falha.

```c
new
    a = 5,
    b = 3;
if (a == 5 || b != 3)
{
    print("Será impresso no log");
}
```

Esse exemplo verifica se "a" é igual a "5" OU se "b" não é igual a "3", "b" é igual a "3" então a segunda parte falha, entretanto "a" é "5", então essa parte é verdadeira, nós estamos usando || (OU) então apenas uma das partes precisa ser verdadeira (se ambas as partes são verdadeiras, a condição continua sendo verdadeira, isso é levemente diferente do significado linguístico de "ou", significando apenas um, ou outro), então a condição é verdadeira.

Do mesmo modo, também é possível encadear duas comparações sem a necessidade, explicitamente falando, de usar AND de duas comparações diferentes.

```c
new
    idx = 3;

if (0 < idx < 5)
{
    print("idx é maior que 0 e menor que 5!");
}
```

### Operadores

Os símbolos a seguir são os que você pode utilizar em comparações, ao lado suas explicações. Alguns já foram utilizados em exemplos. Atente-se pois utilizamos "Esquerda" para indicar o valor que está ao lado esquerdo do operador, e "Direita" para indicar o valor que está ao lado direito do operador.

| Operador     | Significado                                                               | Uso                                                                      |
| ------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ==           | Esquerda é igual a Direita                                                | if (Esquerda == Direita)                                                 |
| !=           | Esquerda não é igual a Direita                                            | if (Esquerda != Direita)                                                 |
| >            | Esquerda é maior que a Direita                                            | if (Esquerda > Direita)                                                  |
| >=           | Esquerda é maior que ou igual a Direita                                   | if (Esquerda >= Direita)                                                 |
| \<           | Esquerda é menor que a Direita                                            | if (Esquerda \< Direita)                                                 |
| \<=          | Esquerda é menor ou igual a Direita                                       | if (Esquerda \<= Direita)                                                |
| &&           | e                                                                         | if (Esquerda && Direita)                                                 |
| &#124;&#124; | ou                                                                        | if (Esquerda &#124;&#124; Direita)                                       |
| !            | não                                                                       | if (!Variável)                                                           |
|              | nem                                                                       | if (!(Esquerda &#124;&#124; Direita))                                    |
|              | e não                                                                     | if (!(Esquerda && Direita))                                              |
|              | exclusivamente ou (xor, eor) - apenas um ou outro é verdadeiro, ambos não | if (!(Esquerda && Direita) && (Esquerda &#124;&#124;Direita))            |
|              | não exclusivamente ou (nxor, neor) - ambos ou nenhum são verdadeiros      | if ((Esquerda && Direita) &#124;&#124; !(Esquerda &#124;&#124; Direita)) |

### Parênteses

Outro aspecto principal sobre condições de "if" é os parênteses, esses controlam a ordem de como tudo é feito em:

```c
new
    a = 3,
    b = 3,
    c = 1;
if (a == 5 && b == 3 || c == 1)
{
    print("Isso será chamado?");
}
```

Há duas maneiras de olhar para a condição acima:

```c
if ((a == 5 && b == 3) || c == 1)
```

E:

```c
if (a == 5 && (b == 3 || c == 1))
```

A primeira versão irá verificar se "a" é igual a "5" e se "b" é igual a "3", se isso for falso (ou seja, um ou ambos não são seus respectivos valores) irá verificar se "c" é igual a "1". (a == 5 && b == 3) é falso como você pôde ver acima, então você "substitui" esse grupo por FALSE:

```c
if (FALSE || c == 1)
```

Sabemos que FALSE não pode ser verdadeiro (assim sendo por definição), todavia "c" é igual a "1", então esta parte é verdadeira e como estamos utilizando "OR" toda condição torna-se verdadeira.

A segunda versão verifica se "a" é igual a "5", caso seja o código verificará se "b" é igual a "3" ou se "c" é igual a "1". O jogo irá fazer a parte 'a == 5' primeiro, mas para deixar claro iremos fazer de trás para frente. (b == 3 || c == 1) é verdadeiro pois ambas as metades são verdadeiras, apesar de que apenas uma delas precisa ser, então indo para nossa condição temos:

```c
if (a == 5 && TRUE)
```

(a == 5) é falso, pois "a" é igual a 3, então teremos:

```c
if (FALSE && TRUE)
```

Claramente FALSE é falso, consequentemente a condição não pode ser verdadeira, então a verificação irá falhar.

Estes pequenos exemplos mostram como o uso de parênteses pode mudar a forma como a verificação funciona, sem parênteses o compilador será o primeiro das duas versões demonstradas mas isso não é sempre garantido, então deve sempre usar parênteses, até mesmo para esclarecer o que está acontecendo para outras pessoas.

- (b != 3) no exemplo de "OR" não falha realmente sendo que nunca é chamado, o compilador orgraniza o código usando um método chamado "short-circuiting" (curto-circuito), como a primeira parte já é verdadeira, não há necessidade de verificar a segunda parte, sendo que isso não afetará no resultado, mas se fizesse, a verificação iria falhar.

### else

"else" (senão) basicamente faz alguma coisa, caso um "if" falhe:

```c
new
    a = 5;
if (a == 3) // Falso
{
    print("Não será chamado");
}
else
{
    print("Como a verificação falhou, será chamado.");
}
```

### else if

Um "else if" (senão se) é uma verificação que ocorre caso a primeira falhe para checar algo:

```c
new
    a = 5;
if (a == 1)
{
    print("Será chamado caso a seja 1");
}
else if (a == 5)
{
    print("Será chamado caso a seja 5");
}
else
{
    print("Todos os outros números");
}
```

Você pode ter quantos desses quiser (você apenas pode ter um "if" e um "else" em um grupo de verificação):

```c
new
    a = 4;
if (a == 1)
{
    // Falso
}
else if (a == 2)
{
    // Falso
}
else if (a == 3)
{
    // Falso
}
else if (a == 4)
{
    // Verdadeiro
}
else
{
    // Falso
}
```

Os "else if" irão verificar o valor como era quando a sequência começou, então você não pode fazer:

```c
new
    a = 5;
if (a == 5)
{
    // Será chamado
    a = 4;
}
else if (a == 4)
{
    // Não será chamado, pois a primeira verificação não falhou, mesmo "a" sendo "4" agora
}
```

Para contornar isso, você apenas faria um "else" caso um "if".

### ?:

'?' e ':' juntos são chamados de um operador triádico, eles basicamente agem como um "if" dentro de outra declaração:

```c
new
    a,
    b = 3;
if (b == 3)
{
    a = 5;
}
else
{
    a = 7;
}
```

Esse foi um exemplos simples para atribuir a uma variável um valor baseado em outra variável, porém pode ser simplificado:

```c
new
    a,
    b = 3;
a = (b == 3) ? (5) : (7);
```

A parte antes do '?' é a condição, é exatamente o mesmo que uma condição normal. A parte entre o '?' e o ':' é o valor que irá retornar se a condição for verdadeira, a outro parte é o valor que irá retornar se a condição for falsa.

```c
new
    a,
    b = 3;
if (b == 1)
{
    a = 2;
}
else if (b == 2)
{
    a = 3;
}
else if (b == 3)
{
    a = 4;
}
else
{
    a = 5;
}
```

Pode ser escrito como:

```c
new
    a,
    b = 3;
a = (b == 1) ? (2) : ((b == 2) ? (3) : ((b == 3) ? (4) : (5)));
```

Isso é próximo com fazer:

```c
new
    a,
    b = 3;
if (b == 1)
{
    a = 2;
}
else
{
    if (b == 2)
    {
        a = 3;
    }
    else
    {
        if (b == 3)
        {
            a = 4;
        }
        else
        {
            a = 5;
        }
    }
}
```

Mas eles são equivalentes (neste exemplo tanto faz)

## Loops

### While

"while" (enquanto) loops fazem algo enquanto uma condição específica for verdadeira. A condição é exatamente no mesmo formato do que uma condição em uma declaração de "if", ela é apenas verificada repetidamente e o código é feito todo vez que for verdadeiro quando verificado:

```c
new
    a = 9;
while (a < 10)
{
    // Código no loop
    a++;
}
// Código após o loop
```

O código irá verificar se "a" é menor que "10". Caso seja, o código dentro das chaves (a++;) será executado, portanto incrementando "a". Quando as chaves são alcaçadas o código pula de volta para a verificação e faz a mesmo coisa novamente, dessa vez a verificação irá falhar, pois "a" é igual a "10" e a execução irá pular para depois do loop. Se "a" fosse igual a "8" o código seria executado duas vezes, assim por diante.

### for()

Um "for" (para) loop é essencialmente um "while" comprimido. Um "for" contém três seções: "Inicialização, Condição e Finalização". Para escrever o exemplo de "while" acima como um loop "for":

```c
for (new a = 9; a < 10; a++)
{
    // Código no loop
}
// Código após o loop
```

Este é um simples código para realizar um loop através de todos os players:

```c
for(new i,a = GetMaxPlayers(); i < a; i++)
{
        if(IsPlayerConnected(i))
        {
                 //Faça algo
        }
}
```

Ambas as condições podem ser omitidas simplesmente não colocando código nelas:

```c
new
    a = 9;
for ( ; a < 10; )
{
    // Código no loop
    a++;
}
// Código após o loop
```

Esse exemplo torna fácil demonstrar como que um "for" encaixa-se com um "while". Há duas simples diferenças entre os dois "for" loops dados. O primeiro é que o segundo exemplo declara "a" fora do loop "for", isso significa que também pode ser usado fora do loop, no primeiro exemplo o escopo de "a" (seção do código para qual a variável existe) está apenas dentro do loop. A segunda diferença é que o "a++" no segundo exemplo é na verdade feito após o "a++" do primeiro exemplo, 99% dos casos isso não faz diferença alguma, isso importa apenas quando você estiver usando "continue" (veja abaixo), "continue" irá chamar o "a++" no primeiro exemplo, mas irá pular no segundo exemplo.

### do-while

Um "do-while" (faça enquanto) loop é um loop onde a condição vem após o código dentre do loop, ao invés de antes. Isso significa que o código dentro sempre será executado ao menos uma vez, pois a verificação ocorre após o código dentro do loop.

```c
new
    a = 10;
do
{
    // Código no loop
    a++;
}
while (a < 10); // Note o ponto e vírgula
// Código após o loop
```

Se esse fosse um "while" básico "a" não seria incrementado, pois (a < 10) é falso, mas aqui é incrementado antes da verificação. Caso fosse "9" o loop seria executado apenas uma vez, "8" duas vezses, assim em diante.

### if-goto

Esse é essencialmente o que os loops acima fazem, o seu uso não é geralmente aconselhado, entretanto é interessante ver como exatamente o loop funciona:

```c
new
    a = 9;

loop_start:
if (a < 10)
{
    // Código no loop
    a++;
    goto loop_start;
}
// Código após o loop
```

### OBOE

OBOE significa "Off By One Error" (Desligado por um erro). Esse é um erro muito comum onde o loop é executado muitas vezes ou poucas vezes, por exemplo:

```c
new
    a = 0,
    b[10];
while (a <= sizeof (b))
{
    b[a] = 0;
}
```

Este exemplo simples demonstra um dos mais comuns OBOE's, de primeiro relance as possoes podem pensar que isso irá realizar um loop através de todo conteúdo de "b" e coloca-los como "0", entretanto, este loop irá rodar 11 vezes e tentará acessar "b[10], que não existe (pois seria o 11º slot em "b" começando em 0), entretando pode causar todos os tipos de problemas. Esse é conhecido como um erro "Out Of Bounds" (Fora dos Limites).

Você deve ser muito cuidadose com OBOEs quando estiver usando um "do-while" loop, pois eles SEMPRE rodam pelo menos uma vez.

## Switch

### switch

Um "switch" (troca) é basicamente uma forma estruturada de if/else (assim como "for" é uma forma estruturada de "while"). A forma mais fácil de explicar é com um exemplo:

```c
new
    a = 5;
switch (a)
{
    case 1:
    {
        // Não será chamado
    }
    case 2:
    {
        // Não será chamado
    }
    case 5:
    {
        // Será chamado
    }
    default:
    {
        // Não será chamado
    }
}
```

Isso é, funcionalmente falando, equivalente a:

```c
new
    a = 5;
if (a == 1)
{
    // Não será chamado
}
else if (a == 2)
{
    // Não será chamado
}
else if (a == 5)
{
    // Será chamado
}
else
{
    // Não será chamado
}
```

Entretanto, é levemente mais claro de ver o que está acontecendo.

Um ponto importante para notar aqui, é as diferentes formas em que um "if" e um "switch" são processados.

```c
switch (AlgumaFunção())
{
    case 1: {}
    case 2: {}
    case 3: {}
}
```

Isso irá chamar AlgumaFunção() UMA VEZ e irá comparar seu resultado 3 vezes.

```c
if (AlgumaFunção() == 1) {}
else if (AlgumaFunção() == 2) {}
else if (AlgumaFunção() == 3) {}
```

Isso irá chamar AlgumaFunção() 3 vezes, que é muito ineficiente, um "switch" é como fazer:

```c
new
    result = AlgumaFunção();
if (result == 1) {}
else if (result == 2) {}
else if (result == 3) {}
```

Para aqueles que conhecem C, o "switch" do PAWN é levemente diferente, as condições individuais NÃO SÃO "fall-through" e são limitadas por chaves, então não há necessidade de colocar um "break".

### case

Um "case" (caso) (as partes individuais do "switch") pode conter outras opções além de um único número. Você pode comparar um valor a uma lista de números (substituindo "fall-through" em C) ou até mesmo um alcance de determinados valores.

```c
case 1, 2, 3, 4:
```

Esse caso irá ativar se o símbolo sendo testado for "1","2","3" ou "4", é o mesmo que fazer:

```c
if (bla == 1 || bla == 2 || bla == 3 || bla == 4)
```

mas para ser mais conciso. Números em listas não necessitam ser consecutivos, de fato se eles forem é melhor fazer:

```c
case 1 .. 4:
```

Esse caso irá fazer exatamente o mesmo que o acima, porém checando em um determinado alcance da lista, é o mesmo que fazer:

```c
if (bla >= 1 && bla <= 4)
```

```c
new
    a = 4;
switch (a)
{
    case 1 .. 3:
    {
    }
    case 5, 8, 11:
    {
    }
    case 4:
    {
    }
    default:
    {
    }
}
```

### default

Um "default" (padrão) é equivalente a um "else", ele realiza algo caso todos os outros falharem.

## Declarações de linhas únicas

### goto

Um `goto` é essencialmente um salto: ele leva a execução diretamente para um rótulo, sem verificar condições (como no exemplo do loop `if-goto` mostrado acima).

```c
goto my_label;

// Esta seção será pulada

my_label: // "Labels" terminam com dois pontos em sua própria linha

// Esta seção será processada como normal
```

O uso de "gotos" é severamente desaconselhado devido aos seus efeitos no seguimento (flow) do programa.

### break

Um "break" (quebra) para e coloca o fim em um loop prematuramente (antes de seu fim padrão):

```c
for (new a = 0; a < 10; a++)
{
    if (a == 5) break;
}
```

Esse loop irá executar 6 vezes, até que atinja o break, colocando fim ao loop antes mesmo de acabar.

### continue

Um "continue" (continue) pula parte do loop em uma determinada iteração:

```c
for (new a = 0; a < 3; a++)
{
    if (a == 1) continue;
    printf("a = %d", a);
}
```

Isso irá resultar em um 'output' de:

```c
a = 0 a = 2
```

O "continue" basicamente pula uma parte fechada de chaves dentro do loop, como dito acima, você precisa ser cuidadoso ao utilizar "continue" em determinados loops:

```c
new
    a = 0;
while (a < 3)
{
    if (a == 1) continue;
    printf("a = %d", a);
    a++;
}
```

Esse é muito similar ao outro exemplo, entretanto desta vez o "continue" irá pular a linha do "a++", então o loop ficará preso e repetirá infinitamente, pois sempre será "1".

### return

Um "return" (retorno) irá parar uma função e voltar ao ponto em que a mesma foi chamada:

```c
main()
{
    print("1");
    MinhaFunção(1);
    print("3");
}

MinhaFunção(num)
{
    if (num == 1)
    {
        return;
    }
    print("2");
}
```

Esse código irá gerar um resultado de:

1 3

Pois a linha de "print("2");" nunca será alcançada.

Você também pode usar um "return" para retornar um valor:

```c
main()
{
    print("1");
    if (MinhaFunção(1) == 27)
    {
        print("3");
    }
}

MinhaFunção(num)
{
    if (num == 1)
    {
        return 27;
    }
    print("2");
    return 0;
}
```

Esse código irá gerar o mesmo resultado que o visto acima, entretanto, note que um "return" adicional foi adicionado ao fim da função. O fim de uma função tem um "return" implícito nela, porém este retorno não tem valor, você não pode retornar um valor e não retornar um valor na mesma função, então precisamos explicitamente retornar um valor.

O símbolo que você retorna pode ser um número, uma variável ou até mesmo outra função, no caso de outra função ser chamada, irá retornar um valor (ela PRECISA retornar um valor se você usa-la como um valor de retorno) e esse valor será retornado para a primeira função.

Você também pode guardar o valor de um "return" para usar depois:

```c
main()
{
    print("1");
    new
        ret = MinhaFunção(1);
    if (ret == 27)
    {
        print("3");
    }
}

MinhaFunção(num)
{
    if (num == 1)
    {
        return 27;
    }
    print("2");
    return 0;
}
```
