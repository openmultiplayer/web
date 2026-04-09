# Operadores e expressões

---

### • Convenções de notação

A operação de alguns operadores depende dos tipos específicos de operandos.
Portanto, os operandos são notados assim:

| Operadores | Uso                                                                          |
| ---------- | ---------------------------------------------------------------------------- |
| e          | qualquer expressão;                                                          |
| v          | qualquer expressão à qual um valor pode ser atribuído (expressões "lvalue"); |
| a          | um array;                                                                    |
| f          | uma função;                                                                  |
| s          | um símbolo — que é uma variável, uma constante ou uma função.                |

### • Expressões

Uma expressão consiste em um ou mais operandos com um operador. O operando
pode ser uma variável, uma constante ou outra expressão. Uma expressão seguida
por um ponto e vírgula é uma instrução.

Listagem: exemplos de expressões

```c

v++
f(a1, a2)
v = (ia1 * ia2) / ia3

```

### • Aritmética

| Sinal  | Descrição                                                                                                                                                                                                                     |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +      | e1 + e2                                                                                                                                                                                                                       |
|        | Resulta na adição de e1 e e2                                                                                                                                                                                                  |
| -      | e1 - e2                                                                                                                                                                                                                       |
|        | Resulta na subtração de e1 e e2                                                                                                                                                                                               |
|        | -e                                                                                                                                                                                                                            |
|        | Resulta na negação aritmética de a (complemento de dois).                                                                                                                                                                     |
| \*     | e1 \* e2                                                                                                                                                                                                                      |
|        | Resulta na multiplicação de e1 e e2.                                                                                                                                                                                          |
| /      | e1 / e2                                                                                                                                                                                                                       |
|        | Resulta na divisão de e1 por e2. O resultado é truncado para o valor integral mais próximo que é menor ou igual ao quociente. Tanto valores negativos quanto positivos são arredondados para baixo, ou seja, em direção a −∞. |
| %      | e1 % e2                                                                                                                                                                                                                       |
|        | Resulta no módulo (resto da divisão) de e1 por e2. O módulo é sempre um valor positivo.                                                                                                                                       |
| ++     | v++                                                                                                                                                                                                                           |
|        | incrementa v em 1; o resultado da expressão é o valor de v antes de ser incrementado.                                                                                                                                         |
|        | ++v                                                                                                                                                                                                                           |
|        | incrementa v em 1; o resultado da expressão é o valor de v depois de ser incrementado.                                                                                                                                        |
| --     | v--                                                                                                                                                                                                                           |
|        | decrementa v em 1; o resultado da expressão é o valor de v antes de ser decrementado.                                                                                                                                         |
|        | --v                                                                                                                                                                                                                           |
|        | decrementa v em 1; o resultado da expressão é o valor de v depois de ser decrementado.                                                                                                                                        |
| Notas: | O + unário não é definido em pawn                                                                                                                                                                                             |
|        | Os operadores ++ e -- modificam o operando. O operando deve ser um lvalue.                                                                                                                                                    |

### • Manipulação de bits

| Sinal | Descrição                                                                                                                                                                               |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~     | ~e                                                                                                                                                                                      |
|       | resulta no complemento de um de e.                                                                                                                                                      |
| >>    | e1 >> e2                                                                                                                                                                                |
|       | resulta no deslocamento aritmético para a direita de e1 por e2 bits. A operação de deslocamento é com sinal: o bit mais à esquerda de e1 é copiado para os bits vagos no resultado.     |
| >>>   | e1 >>> e2                                                                                                                                                                               |
|       | resulta no deslocamento lógico para a direita de e1 por e2 bits. A operação de deslocamento é sem sinal: os bits vagos do resultado são preenchidos com zeros.                          |
| `<<`  | `e1 << e2`                                                                                                                                                                              |
|       | resulta no valor de e1 deslocado para a esquerda por e2 bits; os bits mais à direita são definidos como zero. Não há distinção entre um deslocamento à esquerda aritmético e um lógico. |
| &     | e1 & e2                                                                                                                                                                                 |
|       | resulta no "e" lógico bit a bit de e1 e e2.                                                                                                                                             |
| \|    | e1 \| e2                                                                                                                                                                                |
|       | resulta no "ou" lógico bit a bit de e1 e e2.                                                                                                                                            |
| ^     | e1 ^ e2                                                                                                                                                                                 |
|       | resulta no "ou exclusivo" bit a bit de e1 e e2.                                                                                                                                         |

### • Atribuição

O resultado de uma expressão de atribuição é o valor do operando esquerdo após a atribuição. O operando esquerdo não pode ter tag.

| Sinal | Descrição                                                                                                                                                                                  |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| =     | v = e                                                                                                                                                                                      |
|       | atribui o valor de e à variável v.                                                                                                                                                         |
|       | Se "v" é um array, ele deve ter um tamanho explícito e "e" deve ser um array do mesmo tamanho; "e" pode ser uma string ou um array literal.                                                |
| Nota  | os seguintes operadores combinam uma atribuição com uma operação aritmética ou bit a bit; o resultado da expressão é o valor do operando esquerdo após a operação aritmética ou bit a bit. |
| +=    | v += e                                                                                                                                                                                     |
|       | incrementa v com e.                                                                                                                                                                        |
| -=    | v -= e                                                                                                                                                                                     |
|       | decrementa v com e                                                                                                                                                                         |
| \*=   | v \*= e                                                                                                                                                                                    |
|       | multiplica v por e                                                                                                                                                                         |
| /=    | v /= e                                                                                                                                                                                     |
|       | divide v por e.                                                                                                                                                                            |
| %=    | v %= e                                                                                                                                                                                     |
|       | atribui o resto da divisão de v por e a v.                                                                                                                                                 |
| >>=   | v >>= e                                                                                                                                                                                    |
|       | desloca v aritmeticamente para a direita por e bits.                                                                                                                                       |
| >>>=  | v >>>= e                                                                                                                                                                                   |
|       | desloca v logicamente para a direita por e bits.                                                                                                                                           |
| `<<=` | `v <<= e`                                                                                                                                                                                  |
|       | desloca v para a esquerda por e bits.                                                                                                                                                      |
| &=    | v &= e                                                                                                                                                                                     |
|       | aplica um "e" bit a bit a v e e e atribui o resultado a v.                                                                                                                                 |
| \|=   | v \|= e                                                                                                                                                                                    |
|       | aplica um "ou" bit a bit a v e e e atribui o resultado a v.                                                                                                                                |
| ^=    | v ^= e                                                                                                                                                                                     |
|       | aplica um "ou exclusivo" bit a bit a v e e e atribui o resultado a v.                                                                                                                      |

### • Relacionais

Um "falso" lógico é representado por um valor inteiro de 0; um "verdadeiro" lógico é representado por qualquer valor diferente de 0. Os resultados de valor das expressões relacionais são 0 ou 1, e sua tag é definida como "bool:".

| Sinal | Descrição                                                                                                                                                                                            |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ==    | e1 == e2                                                                                                                                                                                             |
|       | resulta em "verdadeiro" lógico se e1 é igual a e2.                                                                                                                                                   |
| !=    | e1 != e2                                                                                                                                                                                             |
|       | resulta em "verdadeiro" lógico se e1 é diferente de e2.                                                                                                                                              |
| Nota: | os seguintes operadores podem ser "encadeados", como na expressão `e1 <= e2 <= e3`, com a semântica de que o resultado é "1" se todas as comparações individuais forem válidas e "0" caso contrário. |
| `<`   | `e1 < e2`                                                                                                                                                                                            |
|       | resulta em "verdadeiro" lógico se e1 é menor que e2.                                                                                                                                                 |
| `<=`  | `e1 <= e2`                                                                                                                                                                                           |
|       | resulta em "verdadeiro" lógico se e1 é menor ou igual a e2.                                                                                                                                          |
| >     | e1 > e2                                                                                                                                                                                              |
|       | resulta em "verdadeiro" lógico se e1 é maior que e2.                                                                                                                                                 |
| >=    | e1 >= e2                                                                                                                                                                                             |
|       | resulta em "verdadeiro" lógico se e1 é maior ou igual a e2.                                                                                                                                          |

### • Booleanos

Um "falso" lógico é representado por um valor inteiro de 0; um "verdadeiro" lógico é representado por qualquer valor diferente de 0. Os resultados de valor das expressões booleanas são 0 ou 1, e sua tag é definida como "bool".

| Sinal | Descrição                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| !     | !e                                                                                                                                            |
|       | resulta em "verdadeiro" lógico se e era logicamente "falso".                                                                                  |
| \|\|  | e1 \|\| e2                                                                                                                                    |
|       | resulta em "verdadeiro" lógico se e1 ou e2 (ou ambos) são logicamente "verdadeiro". A expressão e2 só é avaliada se e1 é logicamente "falso". |
| &&    | e1 && e2                                                                                                                                      |
|       | resulta em "verdadeiro" lógico se tanto e1 quanto e2 são logicamente "verdadeiro".                                                            |
|       | A expressão e2 só é avaliada se e1 é logicamente "verdadeiro".                                                                                |

### • Diversos

| Sinal   | Descrição                                                                                                                                                                                                                                          |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []      | a[e]                                                                                                                                                                                                                                               |
|         | índice de array: resulta na célula e do array a.                                                                                                                                                                                                   |
| {}      | `a{e}`                                                                                                                                                                                                                                             |
|         | índice de array: resulta no caractere e do array "empacotado" a.                                                                                                                                                                                   |
| ()      | f(e1,e2,...eN)                                                                                                                                                                                                                                     |
|         | resulta no valor retornado pela função f. A função é chamada com os argumentos e1, e2, . . . eN. A ordem de avaliação dos argumentos é indefinida.                                                                                                 |
| ? :     | e1 ? e2 : e3                                                                                                                                                                                                                                       |
|         | resulta em e2 ou e3, dependendo do valor de e1. A expressão condicional é uma expressão composta com um operador de duas partes, "?" e ":". A expressão e2 é avaliada se e1 é logicamente "verdadeiro", e3 é avaliada se e1 é logicamente "falso". |
| :       | tagname: e                                                                                                                                                                                                                                         |
|         | sobrescrita de tag; o valor da expressão e não muda, mas sua tag muda. Veja página 68 para mais informações.                                                                                                                                       |
| ,       | e1, e2                                                                                                                                                                                                                                             |
|         | resulta em e2, e1 é avaliado antes de e2. Se usado em listas de argumentos de função ou uma expressão condicional, a expressão vírgula deve ser cercada por parênteses.                                                                            |
| defined | defined s                                                                                                                                                                                                                                          |
|         | resulta no valor 1 se o símbolo está definido. O símbolo pode ser uma constante (página 98), ou uma variável global ou local.                                                                                                                      |
|         | A tag desta expressão é bool:.                                                                                                                                                                                                                     |
| sizeof  | sizeof s                                                                                                                                                                                                                                           |
|         | resulta no tamanho em "elementos" da variável especificada. Para variáveis simples e para arrays com uma única dimensão, um elemento é uma célula.                                                                                                 |
|         | Quando usado em um valor padrão para um argumento de função, a expressão é avaliada no ponto da chamada da função, em vez de na definição da função.                                                                                               |
| state   | state s                                                                                                                                                                                                                                            |
|         | onde "s" é o nome de um estado que é opcionalmente prefixado com o nome do autômato, este operador resulta no valor 1 se o autômato está no estado indicado e em 0 caso contrário.                                                                 |
|         | A tag desta expressão é bool:.                                                                                                                                                                                                                     |
| tagof   | tagof s                                                                                                                                                                                                                                            |
|         | resulta em um número único que representa a tag da variável, a constante, o resultado da função ou a etiqueta de tag.                                                                                                                              |
|         | Quando usado em um valor padrão para um argumento de função, a expressão é avaliada no ponto da chamada da função, em vez de na definição da função.                                                                                               |
| char    | e char                                                                                                                                                                                                                                             |
|         | resulta no número de células necessárias para conter um array empacotado de e caracteres.                                                                                                                                                          |

### • Precedência de operadores

A tabela abaixo agrupa operadores com igual precedência, começando com o
grupo de operadores com a maior precedência no topo da tabela.

Se a ordem de avaliação da expressão não é explicitamente estabelecida por parênteses,
ela é determinada pelas regras de associação. Por exemplo: a*b/c é
equivalente a (a*b)/c por causa da associação da esquerda para a direita, e a=b=c é equivalente a a=(b=c).

| Sinal                                    | Descrição                                               | Associatividade       |
| ---------------------------------------- | ------------------------------------------------------- | --------------------- |
| ()                                       | chamada de função                                       | esquerda-para-direita |
| []                                       | índice de array (célula)                                | esquerda-para-direita |
| {}                                       | índice de array (caractere)                             | esquerda-para-direita |
| !                                        | não lógico                                              | direita-para-esquerda |
| ~                                        | complemento de um                                       | direita-para-esquerda |
| -                                        | complemento de dois                                     | direita-para-esquerda |
| ++                                       | incremento                                              | direita-para-esquerda |
| --                                       | decremento                                              | direita-para-esquerda |
| :                                        | sobrescrita de tag                                      | direita-para-esquerda |
| char                                     | converter número de caracteres empacotados para células | direita-para-esquerda |
| defined                                  | status de definição do símbolo                          | direita-para-esquerda |
| sizeof                                   | tamanho do símbolo em "elementos"                       | direita-para-esquerda |
| state                                    | condição de autômato/estado                             | direita-para-esquerda |
| tagof                                    | número único para a tag                                 | direita-para-esquerda |
| \*                                       | multiplicação                                           | esquerda-para-direita |
| /                                        | divisão                                                 | esquerda-para-direita |
| %                                        | módulo                                                  | esquerda-para-direita |
| +                                        | adição                                                  | esquerda-para-direita |
| -                                        | subtração                                               | esquerda-para-direita |
| >>                                       | deslocamento à direita                                  | esquerda-para-direita |
| >>>                                      | deslocamento lógico à direita                           | esquerda-para-direita |
| `<<`                                     | deslocamento à esquerda                                 | esquerda-para-direita |
| &                                        | e bit a bit                                             | esquerda-para-direita |
| ^                                        | ou exclusivo bit a bit                                  | esquerda-para-direita |
| \|                                       | ou bit a bit                                            | esquerda-para-direita |
| `<`                                      | menor que                                               | esquerda-para-direita |
| `<=`                                     | menor ou igual a                                        | esquerda-para-direita |
| >                                        | maior que                                               | esquerda-para-direita |
| >=                                       | maior ou igual a                                        | esquerda-para-direita |
| ==                                       | igualdade                                               | esquerda-para-direita |
| !=                                       | desigualdade                                            | esquerda-para-direita |
| &&                                       | e lógico                                                | esquerda-para-direita |
| \|\|                                     | ou lógico                                               | esquerda-para-direita |
| ? :                                      | condicional                                             | direita-para-esquerda |
| =                                        | atribuição                                              | direita-para-esquerda |
| `\*= /= %= += -= >>= >>>= <<= &= ^= \|=` | operadores combinados                                   | direita-para-esquerda |
| ,                                        | vírgula                                                 | esquerda-para-direita |

---

`Nomes de tag: 68`

`Exemplo: 77`

`Veja também página 114 para especificadores de estado`

---

[Voltar ao Índice](Contents)
