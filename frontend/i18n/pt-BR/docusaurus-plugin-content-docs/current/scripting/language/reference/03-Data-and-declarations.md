# Dados e declarações

---

Pawn é uma linguagem sem tipos. Todo elemento de dado é um “cell”, capaz de armazenar um número inteiro. O tamanho dessa célula (em bytes) depende do sistema —geralmente são 32 bits.

A palavra-chave `new` declara uma nova variável. Em declarações especiais, `new` pode ser substituída por `static`, `public` ou `stock` (veja adiante). Uma variável simples ocupa uma célula de memória; salvo inicialização explícita, ela começa valendo zero.

Uma declaração de variável pode aparecer:

- em qualquer posição onde uma instrução seria válida —variáveis locais;
- onde uma declaração/implementação de função seria válida —variáveis globais;
- na primeira expressão de um laço `for` —também locais.

**Local declarations**

Uma declaração local aparece dentro de um bloco composto. A variável só é acessível nesse bloco (e nos blocos aninhados). Declarações na primeira expressão de um `for` também são locais.

**Global declarations**

Declarações globais aparecem fora das funções e podem ser acessadas por todas elas. Objetos globais só podem ser inicializados com expressões constantes.

---

`“for” loop: 113`

`Compound statement: 112`

---

### • Declarações de variáveis de estado

Uma variável de estado é global, porém com um classificador de estado anexado ao final. O escopo e a vida útil dessa variável ficam restritos aos estados listados no classificador.

Variáveis de estado não podem ser inicializadas. Diferentemente das variáveis normais (que começam em zero), elas mantêm um valor indeterminado tanto após a declaração quanto ao entrar em um estado pela primeira vez. Normalmente usamos as funções `entry` para inicializá-las.

### • Declarações locais estáticas

Variáveis locais são destruídas quando a execução sai do bloco onde foram criadas. A cada chamada da função, um novo conjunto de variáveis locais é instanciado e inicializado.

Ao declarar a variável local com `static` (em vez de `new`), ela passa a sobreviver ao término da função. Isso oferece um armazenamento privado e permanente acessível apenas por aquele bloco/função. Assim como globais, variáveis locais estáticas só podem ser inicializadas com constantes.

### • Declarações globais estáticas

Uma variável global `static` se comporta como uma global comum, mas com escopo restrito ao arquivo onde foi declarada. Basta substituir `new` por `static`.

### • Declarações `stock`

Uma variável global pode ser marcada como `stock`. Isso indica ao compilador que ela pode ser removida se não for usada.

Variáveis `stock` são úteis em conjunto com funções `stock`. Uma variável pública também pode ser declarada `stock`; assim, arquivos `.inc` podem expor várias variáveis esperadas pelo host e apenas as efetivamente usadas entram no P-code.

### • Declarações `public`

Variáveis globais simples (sem arrays) podem ser públicas de duas formas:

- usando `public` no lugar de `new`;
- iniciando o nome com `@`.

Variáveis públicas se comportam como globais, porém o programa hospedeiro também pode lê-las e alterá-las. Já as globais normais só existem dentro do script. Alguns hosts exigem variáveis públicas com nomes específicos (por exemplo, para erros recentes ou estado geral).

---

`Symbolic constants: 101`

`Stock functions: 84`

---

### • Variáveis constantes

Às vezes é útil criar uma variável inicializada apenas uma vez e que não possa ser modificada. Ela se comporta como uma constante simbólica, mas continua sendo uma variável.

Para declará-la, insira `const` entre a palavra-chave da declaração (`new`, `static`, `public` ou `stock`) e o nome.

Exemplos:

```c

new const address[4] = { 192, 0, 168, 66 }

public const status           /* initialized to zero */

```

Situações típicas de uso:

- Criar constantes baseadas em arrays (constantes simbólicas não podem ser indexadas).
- Declarar uma variável pública que deve ser definida apenas pela aplicação hospedeira.
- Marcar argumentos de funções do tipo array como `const`. Como arrays sempre são passados por referência, isso previne modificações acidentais (veja página 72).

---

`See also “multidimensional arrays”, page 66`

---

### • Arrays (uma dimensão)

A sintaxe `nome[constante]` declara `nome` como array com o número indicado de elementos, cada qual ocupando uma célula. `constante` deve ser positiva; se omitida, o tamanho é deduzido a partir dos inicializadores.

Arrays são indexados a partir de zero: o primeiro elemento é `nome[0]` e o último é `nome[constante-1]`.

### • Inicialização

Objetos podem ser inicializados na declaração. Para globais e arrays (locais ou globais), os inicializadores devem ser constantes.

Dados não inicializados assumem zero.

Listing: good declaration

```c

new i = 1
new j                                   /* j is zero */
new k = ’a’                             /* k has character code for letter ’a’ */

new a[] = {1,4,9,16,25}                 /* a has 5 elements */
new s1[20] = {’a’,’b’}                  /* the other 18 elements are 0 */

new s2[] = "Hello world..."             /* a unpacked string */

```

Exemplos inválidos:

Listing: bad declarations

```c

new c[3] = 4                            /* an array cannot be set to a value */
new i = "Good-bye"                      /* only an array can hold a string */
new q[]                                 /* unknown size of array */
new p[2] = { i + j, k - 3 }             /* array initiallers must be constants */

```

---

`Constants: 98`

---

### • Inicializadores progressivos

O operador reticências (`...`) continua a progressão dos valores com base nos dois últimos inicializados. Ele preenche o array até o tamanho declarado.

Exemplos:

Listing: array initializers

```c

new a[10] = { 1, ... }                  /* sets all ten elements to 1 */
new b[10] = { 1, 2, ... }               /* sets: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 */
new c[8] = { 1, 2, 40, 50, ... }        /* sets: 1, 2, 40, 50, 60, 70, 80, 90 */
new d[10] = { 10, 9, ... }              /* sets: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */

```

### • Inicialização via enum

O tamanho de um array pode ser definido com uma constante de enumeração (como no exemplo da fila com prioridades, página 21). Se algum campo da enum tiver tamanho próprio, o elemento correspondente do array é tratado como subarray (veja o exemplo da calculadora RPN, página 30).

A mesma lógica vale para a inicialização. Reaproveitando a enum `message` do exemplo mencionado:

Listing: array initializers

```c

enum message /* declaration copied from "QUEUE.P" */
    {
        text[40 char],
        priority
    }

new msg[message] = { !"new message", 1 }

```

The initialler consists of a string (a literal array) and a value; these go
into the fields “text” and “priority” respectively.

### • Arrays multidimensionais

Arrays multidimensionais armazenam referências aos subarrays∗ —um array bidimensional é, na prática, um array de arrays. Exemplos:

Listing: Two-dimensional arrays

```c

new a[4][3]
new b[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
new c[3][3] = { { 1 }, { 2, ...}, { 3, 4, ... } }
new d[2][5] = { !"agreement", !"dispute" }
new e[2][] = { "OK", "Cancel" }
new f[][] = { "OK", "Cancel" }

```

---

###### ∗ The current implementation of the Pawn compiler supports only arrays with up to two dimensions.

---

Nas últimas duas declarações (variáveis `e` e `f`), a dimensão final não tem tamanho definido, então cada subarray usa o comprimento deduzido dos inicializadores. Eles podem ter tamanhos diferentes; no exemplo, `e[1][5]` contém o caractere `l` de “Cancel”, mas `e[0][5]` é inválido porque `e[0]` tem apenas três células (“O”, “K” e o terminador).

A diferença entre `e` e `f` é que, em `f`, deixamos o compilador contar os elementos da dimensão principal (`sizeof f` vale 2, assim como `sizeof e`; veja próxima seção).

### • Arrays e o operador `sizeof`

O operador `sizeof` retorna o tamanho de uma variável em “elementos”. Para variáveis simples, o resultado é sempre 1 (uma célula).

Em arrays de uma dimensão, `sizeof` dá a quantidade total de células. O trecho abaixo imprime `5`, pois `msg` armazena quatro caracteres e o terminador:

Listing: sizeof operator

```c

new msg[] = "Help"
printf("%d", sizeof msg);

```

Para arrays multidimensionais, podemos obter o tamanho de cada dimensão. Na última (menor), o elemento continua sendo uma célula; nas demais, o elemento é o subarray.

No exemplo abaixo, `sizeof matrix` retorna 3 (dimensão principal) e `sizeof matrix[]` retorna 2 (menor):

Listing: sizeof operator and multidimensional arrays

```c

new matrix[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
printf("%d %d", sizeof matrix, sizeof matrix[]);

```

Usar `sizeof` como valor padrão de parâmetros facilita lidar com arrays multidimensionais (veja página 77).

---

`Default function arguments and sizeof: 77`

---

### • Tags

Tags são rótulos que indicam a finalidade/semântica de uma variável, constante ou valor retornado. São opcionais e existem para fortalecer a checagem em tempo de compilação (operandos, parâmetros, índices etc.).

Sintaticamente, consistem em um nome seguido de `:` e precedem o identificador. Em atribuições, apenas o lado direito pode ser “tagueado”.

Exemplos:

Listing: tag names

```c

new bool:flag = true            /* "flag" can only hold "true" or "false" */

const error:success = 0
const error:fatal= 1
const error:nonfatal = 2

error:errno = fatal

```

The sequence of the constants success, fatal and nonfatal could more con-
veniently be declared using an enum instruction, as illustrated below.  
The enumeration instruction below creates four constants, success, fatal, non-
fatal and error, all with the tag error.

Listing: enumerations

```c

enum error {
    success,
    fatal,
    nonfatal,
}

```

Um uso comum de enums tagueadas é com arrays em que cada posição tem um propósito distinto. Assim, declaramos o tamanho e ativamos a checagem de tags de uma só vez:

Listing: enumerations and arrays

```c

enum rectangle
{
    left,
    top,
    right,
    bottom
}

new my_rect[rectangle] /* array is declared as having 4 cells */

my_rect[left] = 10
my_rect[top] = 5
my_rect[right] = 30
my_rect[bottom] = 12

for (new i = 0; rectangle:i < rectangle; ++i)
    my_rect[rectangle:i] *= 2

```

Depois de declarar `my_rect`, podemos acessar o segundo campo com `my_rect[top]`. Se tentarmos `my_rect[1]`, o parser emitirá aviso/erro. Para forçar uma tag, fazemos um “cast” (override), como no `for` acima: `i` é um inteiro sem tag, então precisamos convertê-lo para `rectangle` antes de usá-lo como índice. Note que a enum criou tanto as constantes quanto a tag `rectangle`.

Tag names introduced so far started with a lower case letter; these are “weak”
tags. Tag names that start with an upper case letter are “strong” tags. The
difference between weak and strong tags is that weak tags may, in a few circum-
stances, be dropped implicitly by the pawn parser —so that a weakly tagged
expression becomes an untagged expression. The tag checking mechanism verifies the following situations:

- When the expressions on both sides of a binary operator have a different tag, or when one of the expressions is tagged and the other is not, the compiler issues a “tag mismatch” diagnostic. There is no difference between weak and strong tags in this situation.

- There is a special case for the assignment operator: the compiler issues diagnostic if the variable on the left side of an assignment operator has a tag, and the expression on the right side either has a different tag or is untagged. However, if the variable on the left of the assignment operator is untagged, it accepts an expression (on the right side) with a weak tag. In other words, a weak tag is dropped in an assignment when the lvalue is untagged.

- Passing arguments to functions follows the rule for assignments. The compiler issues a diagnostic when the formal parameter (in a function definition) has a tag and the actual parameter (in the function call) either is untagged or has a different tag. However, if the formal parameter is untagged, it also accepts a parameter with any weak tag.

- An array may specify a tag for every dimension, see the “my_rect” example above. Tag checking array indices follows the rule of binary operator tag checking: there is no difference between weak and strong tags.

---

`Label syntax: 112`

`“enum” statement: 101`

`“lvalue”: the variable on the left side in an assignment, see page 104`

---

[Go Back to Contents](00-Contents)
