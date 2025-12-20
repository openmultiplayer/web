---
title: "Binário"
sidebar_label: "Binário"
description: Uma análise aprofundada sobre binário e operadores bit a bit.
---

## Créditos

Isto é de um tópico de Tutorial nos Fóruns SA-MP. O autor é **Kyosaur**.

## O que é binário?

Binário é um sistema numeral que usa dois símbolos únicos para representar números. Enquanto o sistema decimal mais comum usa dez numerais (**base 10**), o binário usa apenas 0 e 1. Isso pode parecer inútil no dia a dia, mas o binário é essencial quando se trata de computadores. Os computadores em seu nível mais baixo realizam todos os seus cálculos manipulando o fluxo de eletricidade para indicar estados ligado e desligado. Isto é exatamente o que o binário é, apenas um monte de interruptores ligados e desligados. Este é um conceito meio alienígena para a maioria das pessoas, então vamos dar uma olhada nos sistemas decimal e binário lado a lado.

Decimal (base 10)

```c
0
1
2
3
4
5
6
7
8
9
10
11
12
13
```

Binário (Base 2)

```c
0 //0
1 //1
10 //2
11 //3
100 //4
101 //5
110 //6
111 //7
1000 //8
1001 //9
1010 //10
1011 //11
1100 //12
1101 //13
```

Olhando ambos os sistemas lado a lado, você notará que eles se comportam exatamente da mesma maneira. Uma vez que você atinge o último número disponível, você tem que passar para outro lugar. Esses lugares no binário são chamados de bits (**b**inary dig**its** - **dígitos binários**) e são simplesmente potências de dois; assim como os lugares no sistema decimal são potências de 10. Para provar isso, vamos dar uma olhada no número 13 em notação padrão.

**NOTA:** '^' é potência nestes próximos exemplos, não exclusivo bit a bit (que cobriremos mais tarde.)

Decimal (base 10)

```c
13

//que é igual a

1 * (10^1) + 3 * (10^0)

//que é igual a

10+3

//que é igual a

13
```

Binário (base 2)

```c
1101

//que é igual a

1 * (2^3) + 1 * (2^2) + 0 * (2^1) + 1 * (2^0)

//que é igual a

8+4+0+1

//que é igual a

13
```

Podemos ver pelo exemplo anterior que se um bit está definido como 0, podemos ignorá-lo e seguir em frente; afinal, qualquer coisa multiplicada por 0 será 0. O exemplo anterior foi um pouco complicado demais e foi apenas eu tentando ser absolutamente claro. Quando você está convertendo de binário, tudo o que você realmente precisa se preocupar é somar as potências de todos os bits que estão ligados.

Aqui estão 12 potências de 2 do topo da minha cabeça:

```c
4096,2048,1024,512,256,128,64,32,16,8,4,2,1
```

Se você não sabe nada sobre trabalhar com potências, isso provavelmente não faz sentido algum para você. Uma potência é um número multiplicado por si mesmo x vezes. Com essa informação em mente, a lista anterior de potências provavelmente faz mais sentido; bem, com exceção do 1. Você pode estar curioso sobre por que 2 elevado à potência de 0 dá um resultado de 1, tudo o que posso dizer sobre isso é que simplesmente é assim.

```c
2^1 = 2, 2^3 = 4, 2^4 = 8
```

Podemos ver que quando nos movemos para a direita, nosso valor anterior é multiplicado por 2; então é seguro assumir que quando nos movemos para a esquerda, nosso novo valor é apenas o número anterior dividido por 2. Com isso em mente, você pode ver como podemos acabar com 2 elevado à potência zero igual a 1. Se isso não for satisfatório o suficiente, tenho certeza de que você pode encontrar mais provas em **\*\***. Dito tudo isso, vamos dar uma olhada em um exemplo final, e vamos torná-lo um pouco complicado!

```c
111011001011111000 //242424

//Lembre-se, ignore os bits que não estão ligados.

1 * (2^17) = 131072

1 * (2^16) = 65536

1 * (2^15) = 32768

1 * (2^13) = 8192

1 * (2^12) = 4096

1 * (2^9) = 512

1 * (2^7) = 128

1 * (2^6) = 64

1 * (2^5) = 32

1 * (2^4) = 16

1 * (2^3) = 8


131072+65536+32768+8192+4096+512+128+64+32+16+8
=
242424
```

Lembre-se ao converter: A primeira potência é 0, então não cometa o erro de ver o 18º lugar como 2^18. Existem de fato 18 potências, mas isso inclui a potência de 0, então 17 é na verdade nossa maior potência.

### Um olhar mais profundo nos bits

A maioria das linguagens de programação permite diferentes tipos de dados que variam na quantidade de bits que podem ser usados para armazenar informações; no entanto, pawn é uma linguagem de 32 bits sem tipo. Isso significa que pawn sempre terá 32 bits disponíveis para armazenar informações. Então, o que acontece quando você tem muita informação? A resposta para essa pergunta está nos inteiros com e sem sinal.

#### Inteiros com sinal

Você já notou que quando um inteiro em pawn fica muito alto ele se transforma em um negativo? Este "wrap" (volta) é devido a você ultrapassar o valor máximo em pawn que é:

```c
2^31 - 1 //Potência, não exclusivo bit a bit. Além disso, o -1 é porque contamos o 0 (há 2.147.483.648 valores, mas isso é com 0, então tecnicamente 2.147.483.647 é o máximo).

//que é igual a

2,147,483,647

//que em binário é

1111111111111111111111111111111 //31 bits - todos ligados
```

Você pode estar se perguntando por que ESSE é o valor máximo, e não 2^32-1 (4.294.967.295). É aqui que os inteiros com e sem sinal entram em jogo. Inteiros com sinal têm a capacidade de armazenar valores negativos, onde inteiros sem sinal não têm. Isso pode parecer que estou me desviando da pergunta, mas garanto que não estou. A razão pela qual o inteiro máximo não é 2^32-1 é porque o 32º bit é usado como uma espécie de alternador para valores negativos e positivos. Isso é chamado de MSB (Most significant bit - Bit mais significativo), se o MSB estiver ligado, o número será negativo; se estiver desligado, o número é positivo. Bem simples, certo?

Antes de mostrar alguns valores negativos, preciso explicar como os valores negativos são representados em pawn. Pawn usa um sistema chamado complemento de 2 para representar valores negativos, o que basicamente significa que você inverte cada bit no seu número e adiciona 1 ao novo número para torná-lo negativo.

Vamos dar uma olhada em alguns valores negativos enquanto esta ideia ainda está na sua cabeça:

```c
11111111111111111111111111111111 //todos os 32 bits ligados

//é igual a

-1

//e

11111111111111111111111111111110

//é igual a

-2

//e finalmente

10000000000000000000000000000000

//é igual a

-2147483648
```

Veja, todos os números negativos são simplesmente o número positivo original com todos os seus bits invertidos e aumentados em um. Isso é super claro com nosso último exemplo, pois o maior inteiro POSITIVO é 2147483647.

A partir disso, podemos ver que o intervalo de números em pawn é na verdade:

```c
−2^31 até +2^31 − 1
```

#### Inteiros sem sinal

Não existem inteiros sem sinal em pawn, mas estou adicionando isso apenas para manter o equilíbrio. A única diferença entre um inteiro com sinal e um inteiro sem sinal é que inteiros sem sinal não podem armazenar valores negativos; Os inteiros ainda voltam ao início, mas eles voltam para 0, em vez de um valor negativo.

## Operadores Binários

Operadores binários permitem que você manipule bits individuais de um padrão de bits. Vamos dar uma olhada em uma lista de operadores bit a bit disponíveis.

- Deslocamento aritmético bit a bit: >>, e \<\<
- Deslocamento lógico bit a bit: >>>
- NOT bit a bit (também conhecido como complemento): ~
- AND bit a bit: &
- OR bit a bit: |
- XOR bit a bit (também conhecido como ou-exclusivo): ^

### AND bit a bit

**NOTA:** Não deve ser confundido com o operador lógico AND '&&'

Um AND binário simplesmente pega o AND lógico dos bits em cada posição de um número em forma binária. Isso soa um pouco confuso, então vamos dar uma olhada em ação!

```c
1100 //12
&
0100 //4
=
0100 //4 pois ambos têm "100" neles (que é 4)
```

Isso foi um pouco fácil, vamos dar uma olhada em um mais difícil:

```c
10111000 //184
&
01001000 //72
=
00001000 //8
```

Olhando os exemplos deve te dar uma boa ideia do que este operador faz. Ele compara dois conjuntos de bits juntos, se ambos compartilham um bit de 1, o resultado terá o mesmo bit ligado. Se eles não compartilham nenhum bit, então o resultado é 0.

### OR bit a bit

**NOTA:** Não deve ser confundido com o operador lógico OR '||'

OR bit a bit funciona quase exatamente da mesma forma que AND bit a bit. A única diferença entre os dois é que OR bit a bit precisa apenas que um dos dois padrões de bits tenha um bit ligado para que o resultado tenha o mesmo bit ligado. Vamos dar uma olhada em alguns exemplos!

```c
1100 //12
|
0100 //4
=
1100 //12.
```

Vamos dar uma olhada em mais um exemplo.

```c
10111000 //184
|
01001000 //72
=
11111000 //248
```

Acho que isso é bastante auto-explicativo, se qualquer um dos números tem um bit ligado, o número resultante também terá esse bit ligado.

### XOR bit a bit

Este operador é um pouco semelhante ao operador OR bit a bit, mas há uma pequena diferença. Vamos olhar o mesmo exemplo usado na seção OR bit a bit, e ver se você consegue identificar a diferença.

```c
1100 //12
^
0100 //4
=
1000 //8.
```

e finalmente:

```c
10111000 //184
^
01001000 //72
=
11110000 //240
```

### NOT bit a bit

Este operador inverte cada bit no padrão de bits, transformando todos os 1's em 0's e vice-versa.

```c
~0
=
11111111111111111111111111111111 //-1

//e

~100 //4
=
11111111111111111111111111111011 //-5

//e

~1111111111111111111111111111111 //2147483647 (não confundir com -1, que tem 32 bits, não 31)
=
10000000000000000000000000000000 //-2147483648 (32º bit ligado)
```

Se você não entende por que os valores negativos são meio "ao contrário", por favor leia a seção sobre inteiros com sinal.

### Deslocamento de Bits

O deslocamento de bits faz exatamente o que você imaginaria que faz; ele desloca os bits em um número em uma determinada direção. Se você se lembra anteriormente no artigo, mencionei que PAWN tem um intervalo de memória específico (32 bits que podem ser usados para armazenamento). O que acontece quando você desloca um número além desse intervalo? A resposta para esta pergunta está em qual operador de deslocamento você está usando e em qual direção você está deslocando.

**NOTA:** Nos exemplos seguintes, todos os números binários serão escritos por completo (todos os 32 bits) para evitar confusões.

#### Deslocamentos aritméticos

#### Deslocamento à direita

Todos os bits em um número são deslocados x vezes para a direita ao usar este operador. Vamos dar uma olhada rápida em um exemplo simples.

```c
00000000000000000000000000001000  //8
>>
2

=

00000000000000000000000000000010 //2
```

Você pode ver pelo exemplo anterior que cada bit se moveu para a direita em dois lugares, e dois zeros foram adicionados no lado esquerdo como preenchimento. Esses dois zeros são na verdade o valor do MSB (Most significant bit - Bit mais significativo) e são muito importantes quando se trata de deslocamento de inteiros com sinal. A razão pela qual o MSB é usado como preenchimento é para mantermos o sinal do número que está sendo deslocado. Vamos dar uma olhada no mesmo exemplo, exceto que vamos torná-lo negativo.

```c
11111111111111111111111111111000 //-8
>>
2

=

11111111111111111111111111111110 //-2
```

Claramente isso se comporta exatamente da mesma forma que o exemplo anterior, exceto que os bits à esquerda usados para preenchimento são uns; o que prova que o preenchimento do deslocamento aritmético à direita é o valor do MSB.

#### Deslocamento à esquerda

Este é o oposto exato do operador de deslocamento aritmético à direita. Ele desloca todos os bits em um número para a esquerda x vezes. Vamos olhar um exemplo.

```c
00000000000000000000000000001000  //8
<<
2

=

00000000000000000000000000100000 //32
```

A única diferença entre o deslocamento aritmético à esquerda e à direita (além da direção do deslocamento) seria a maneira como ele lida com o preenchimento. Com o deslocamento aritmético à direita, o preenchimento é o valor do MSB (Bit mais significativo), mas com o deslocamento aritmético à esquerda o valor é apenas 0. Isso ocorre porque não há informações relevantes como o sinal de um número para rastrear.

```c
11111111111111111111111111111000 //-8
<<
2

=

11111111111111111111111111100000 //-32
```

Viu? Mesmo que o preenchimento seja sempre 0, o sinal do número ainda é mantido. A única coisa com que você realmente precisa se preocupar é deslocar demais. Se você deslocar um número positivo além do número mais alto possível, ele se tornará negativo e vice-versa com valores negativos (você eventualmente chegará a 0).

#### Deslocamentos Lógicos

##### Deslocamento à Direita

Este é o inverso do deslocamento aritmético à esquerda. A melhor maneira de descrevê-lo seria um híbrido entre os dois deslocamentos aritméticos. Vamos dar uma olhada em ação!

```c
00000000000000000000000000001000  //8
>>>
2

=

00000000000000000000000000000010 //2
```

Os bits no número 8 foram deslocados 2 vezes para a direita. Então, como isso é diferente do deslocamento aritmético à direita? A resposta é o preenchimento. Com o deslocamento aritmético à direita, o preenchimento é o valor do MSB, mas com o deslocamento lógico à direita o preenchimento é apenas 0 (assim como é com o deslocamento aritmético à esquerda). Isso significa que ele não manterá o sinal do número, e nosso resultado será sempre positivo. Para provar isso, vamos deslocar um número negativo!

```c
11111111111111111111111111111000 //-8
>>>
2

=

00111111111111111111111111111110 //1073741822
```

Isso prova que não obteremos valores negativos ao usar o deslocamento lógico à direita!

##### Deslocamento à esquerda

Não existe deslocamento lógico à esquerda, pois faria exatamente o mesmo que o deslocamento aritmético à esquerda. Apenas adicionei isso para evitar confusão de qualquer tipo e também para manter a seção equilibrada.
