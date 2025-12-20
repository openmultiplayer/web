# Funções

---

A declaração de função define o nome e, entre parênteses, os parâmetros formais. Funções podem retornar valores. Essas declarações devem ficar em nível global (fora de outras funções) e ficam acessíveis a todo o código.

Se um ponto e vírgula surgir logo após a declaração (no lugar de um bloco), trata-se de uma declaração antecipada (forward).

O `return` define o resultado da função. Em `sum`, por exemplo, o retorno é a soma dos dois argumentos. O retorno é opcional, mas não é possível usar o valor de uma função que não retorna nada.

Listing: sum function

```c

sum(a, b)
return a + b

```

Os parâmetros são variáveis locais implícitas; a chamada define seus valores.

Another example of a complete definition of the function leapyear
(which returns true for a leap year and false for a non-leap year):

Listing: leapyear function

```c

leapyear(y)
return y % 4 == 0 && y % 100 != 0 || y % 400 == 0

```

Os operadores lógicos e aritméticos do exemplo `leapyear` estão detalhados nas páginas 108 e 104.

Em geral, funções incluem declarações locais e formam um bloco composto. No exemplo a seguir, repare na instrução `assert` para impedir expoentes negativos.

Listing: power function (raise to a power)

```c

power(x, y)
{
    /* returns x raised to the power of y */
    assert y >= 0
    new r = 1
    for (new i = 0; i < y; i++)
        r *= x
    return r
}

```

Uma função pode ter vários `return` —usamos isso para sair rapidamente ao detectar erros de parâmetros ou situações em que não há trabalho a fazer. Se a função retorna um array, todos os `return` devem fornecer arrays do mesmo tamanho e dimensões.

---

`The preferred way to declare forward functions is at page 82`

`“assert” statement: 112`

---

### • Argumentos (valor vs. referência)

No programa a seguir, `faculty` usa seu parâmetro em um loop para calcular o fatorial desse número. Observe que a função modifica o argumento.

Listing: faculty.p

```c

/* Calculation of the faculty of a value */

main()
{
    print "Enter a value: "
    new v = getvalue()
    new f = faculty(v)
    printf "The faculty of %d is %d\n", v, f
}

faculty(n)
{
    assert n >= 0

    new result = 1
    while (n > 0)
        result *= n--

    return result
}

```

Não importa qual valor positivo “n” tinha ao entrar no `while`, ele termina valendo zero. Como `faculty` recebe o parâmetro por valor, a alteração fica restrita à função. `main` passa `v`, mas, ao retornar, `v` continua igual.

Argumentos que ocupam uma única célula podem ser passados por valor ou referência (padrão é por valor). Para passá-los por referência, prefixe o nome com `&`.

Example:

Listing: swap function

```c

swap(&a, &b)
{
    new temp = b
    b = a
    a = temp
}

```

To pass an array to a function, append a pair of brackets to the  
argument name. You may optionally indicate the size of the array; doing so improves
error checking of the parser.

Example:

Listing: addvector function

```c

addvector(a[], const b[], size)
{
    for (new i = 0; i < size; i++)
        a[i] += b[i]
}

```

Arrays are always passed by reference. As a side note, array b in the above
example does not change in the body of the function. The function argument
has been declared as const to make this explicit. In addition to improving
error checking, it also allows the pawn parser to generate more efficient code.

To pass an array of literals to a function, use the same syntax as for  
array initiallers: a literal string or the series of array indices enclosed in braces
(see page 99; the ellipsis for progressive initiallers cannot be used). Literal
arrays can only have a single dimension.

The following snippet calls addvector to add five to every element of the array “vect”:

Listing: addvector usage

```c

new vect[3] = { 1, 2, 3 }

addvector(vect, {5, 5, 5}, 3)

/* vect[] now holds the values 6, 7 and 8 */

```

The invocation of function printf with the string "Hello world\n" in the first
ubiquitous program is another example of passing a literal array to a function.

---

`Another example is function JulianToDate at page 13`

`Constant variables: 64`

`“Hello world” program: 5`

---

### • Calling functions

When inserting a function name with its parameters in a statement or  
expression, the function will get executed in that statement/expression.  
The statement that refers to the function is the “caller” and the function itself,
at that point, is the “callee”: the one being called.

The standard syntax for calling a function is to write the

### • Chamando funções

Para chamar uma função, escreva o nome seguido da lista de parâmetros entre parênteses. Mesmo que não haja argumentos, os parênteses permanecem. O exemplo below mostra como chamar `power`:

Listing: example program for the power function

```c

main()
{
    print "Please give the base value and the power to raise it to:"
    new base = getvalue()
    new power = getvalue()

    new result = power(base, power)
    printf "%d raised to the power %d is %d", base, power, result
}

```

Funções podem retornar valores (como `sum`, `leapyear`, `power`). `swap` é um exemplo que não retorna. Mesmo quando há retorno, o chamador pode ignorá-lo.

Quando o retorno não é utilizado, há uma sintaxe alternativa: os parênteses ficam opcionais. No trecho anterior, por exemplo, poderíamos escrever:

`printf "%d raised to the power %d is %d", base, power, result`

em vez de `printf(...)`.

Essa forma “procedural” só é válida quando:

- o resultado não é usado em expressões;
- o primeiro parâmetro não começa com `(`;
- o primeiro parâmetro está na mesma linha do nome (a menos que use parâmetros nomeados).

Ela deixa chamadas como `print`/`printf` mais legíveis, mas é opcional. Note que, no exemplo, as chamadas a `getvalue` exigem parênteses vazios, já que o valor retornado é armazenado.

---

`Function power: 70`

`Functions sum & leapyear: 70`

`Function swap: 71`

---

### • Parâmetros posicionais x nomeados

Nos exemplos anteriores, a ordem dos argumentos era relevante porque cada posição correspondia a um parâmetro. Considere `weekday` (que usa a congruência de Zeller):

Listing: weekday function

```c

weekday(month, day, year)
{
    /* returns the day of the week: 0=Saturday, 1=Sunday, etc. */
    if (month <= 2)
        month += 12, --year
    new j = year % 100
    new e = year / 100
    return (day + (month+1)*26/10 + j + j/4 + e/4 - 2*e) % 7
}

```

Como formatos de data variam (mês/dia/ano nos EUA, dia/mês/ano na Europa, ano/mês/dia em publicações ISO etc.), nenhuma ordem é “natural”. Nesses casos, use parâmetros nomeados:

Listing: weekday usage —positional parameters

```c

new wkday1 = weekday( .month = 12, .day = 31, .year = 1999)

new wkday2 = weekday( .day = 31, .month = 12, .year = 1999)

new wkday3 = weekday( .year = 1999, .month = 12, .day = 31)

```

Em parâmetros nomeados, um ponto (`.`) antecede o nome do argumento. A expressão à direita de `=` é associada a esse parâmetro (não é uma atribuição de fato).

É possível misturar parâmetros posicionais e nomeados, desde que os posicionais venham primeiro.

### • Valores padrão

Argumentos podem receber valores padrão (que devem ser constantes). Basta usar `=` após o nome.

Ao chamar a função, se quiser “pular” um argumento com valor padrão, use o caractere `_`. Placeholders à direita podem ser omitidos. Por exemplo:

Listing: increment function —default values

```c

increment(&value, incr=1) value += incr

```

the following function calls are all equivalent:

Listing: increment usage

```c

increment(a)
increment(a, \_)
increment(a, 1)

```

Valores padrão para argumentos por referência podem tornar entradas opcionais. Se `divmod` retorna quociente e resto pelos parâmetros, podemos fazer:

Listing: divmod function —default values for reference parameters

```c

divmod(a, b, &quotient=0, &remainder=0)
{
    quotient = a / b
    remainder = a % b
}

```

With the preceding definition of function divmod, the following function calls
are now all valid:

Listing: divmod usage

```c

new p, q

divmod(10, 3, p, q)
divmod(10, 3, p, \_)
divmod(10, 3, \_, q)
divmod(10, 3, p)
divmod 10, 3, p, q

```

Também podemos definir uma string padrão para parâmetros de array:

Listing: print error function

```c

print_error(const message[], const title[] = "Error: ")
{
    print title
    print message
    print "\n"
}

```

No exemplo a seguir, somamos um array ao outro e, por padrão, incrementamos os três primeiros elementos em 1:

Listing: addvector function, revised

```c

addvector(a[], const b[] = {1, 1, 1}, size = 3)
{
    for (new i = 0; i < size; i++)
    a[i] += b[i]
}

```

---

`Public functions do not support default argument values; see page 83`

---

### • `sizeof` em argumentos padrão

O valor padrão de um argumento precisa ser uma constante e é determinado na declaração. A única exceção é quando usamos `sizeof`, pois nesse caso a avaliação ocorre na chamada e considera o tamanho do argumento real (não o formal). Assim, o “valor padrão” pode mudar a cada invocação.

Exemplo: sortear dez números aleatórios entre 0 e 51 sem repetição —útil em jogos de cartas. O algoritmo, de Robert W. Floyd, é eficiente e sem vieses (assumindo que o gerador aleatório também seja).

Listing: randlist.p

```c

main()
{
    new HandOfCards[10]
    FillRandom(HandOfCards, 52)

    print "A draw of 10 numbers from a range of 0 to 51 \
        (inclusive) without duplicates:\n"
    for (new i = 0; i < sizeof HandOfCards; i++)
        printf "%d ", HandOfCards[i]
}

FillRandom(Series[], Range, Number = sizeof Series)
{
    assert Range >= Number          /* cannot select 50 values
                                     * without duplicates in the
                                     * range 0..40, for example */
    new Index = 0
    for (new Seq = Range - Number; Seq < Range; Seq++)
    {
        new Val = random(Seq + 1)
        new Pos = InSeries(Series, Val, Index)
        if (Pos >= 0)
        {
            Series[Index] = Series[Pos]
            Series[Pos] = Seq
        }
        else
            Series[Index] = Val
        Index++
    }
}

InSeries(Series[], Value, Top = sizeof Series)
{
    for (new i = 0; i < Top; i++)
        if (Series[i] == Value)
            return i
    return -1
}

```

`main` declara `HandOfCards` com 10 células e chama `FillRandom` para preencher com números < 52. Repare que apenas dois parâmetros são passados: o array e o limite “52”. A quantidade (10) é passada implicitamente.

Isso acontece porque `FillRandom` define o terceiro parâmetro como `Number = sizeof Series`. Graças ao caso especial do `sizeof`, o valor padrão usa o tamanho do argumento real (`HandOfCards`), e não o do parâmetro formal.

Dentro de `FillRandom`, contudo, `sizeof Series` ainda retorna zero, pois `Series` foi declarado sem tamanho. Se tivéssemos definido `Series[10]`, seria desnecessário incluir o parâmetro `Number`: o compilador já exigiria que o argumento real tivesse o mesmo tamanho.

---

`“sizeof ” operator 109`

`“random” is a proposed core function, see page 124`

`Array declarations: 64`

`Tag names: 68`

---

### • Argumentos com tags

Uma tag pode preceder o parâmetro formal, melhorando a checagem em tempo de compilação e servindo como documentação implícita. Por exemplo, uma função que calcula raízes usando ponto fixo pode exigir que o parâmetro e o retorno sejam `Fixed:`.

No código abaixo, usamos o módulo de ponto fixo e o algoritmo de bisseção. Repare no uso de “override” de tags em literais e resultados.

Listing: sqroot function —strong tags

```c

Fixed: sqroot(Fixed: value)
{
    new Fixed: low = 0.0
    new Fixed: high = value
    while (high - low > Fixed: 1)
    {
        new Fixed: mid = (low + high) >> 1
        if (fmul(mid, mid) < value)
            low = mid
        else
            high = mid
    }
    return low
}

```

With the above definition, the pawn parser issues a diagnostic if one calls the
sqroot function with a parameter with a tag different from “Fixed:”, or when
it tries to store the function result in a variable with a “non-Fixed:” tag.

O algoritmo de bisseção é parecido com busca binária: reduz pela metade o intervalo possível a cada passo. Métodos como Newton-Raphson (substituição sucessiva) convergem mais rápido, mas definir o critério de parada é mais complicado. Implementações modernas combinam bisseção e Newton-Raphson.

Para arrays, os índices também podem ter tags. Veja a função que calcula a interseção entre dois retângulos:

Listing: intersection function

```c

intersection(dest[rectangle], const src1[rectangle], const src2[rectangle])
{
    if (src1[right] > src2[left] && src1[left] < src2[right]
    && src1[bottom] > src2[top] && src1[top] < src2[bottom])
    {
        \* there is an intersection, calculate it using the "min" and
         *"max" functions from the "core" library, see page 124. */

        dest[left] = max(src1[left], src2[left])
        dest[right] = min(src1[right], src2[right])
        dest[top] = max(src1[top], src2[top])
        dest[bottom] = min(src1[bottom], src2[bottom])
        return true
    }
    else
    {
        /* "src1" and "src2" do not intersect */
        dest = { 0, 0, 0, 0 }
        return false
    }
}

```

---

`Fixed point arithmetic: 90; see also the application note “Fixed Point Support Library”`

`For the “rectangle” tag, see page 68`

---

### • Argumentos variáveis

Funções com número variável de argumentos usam `...` para indicar o início da lista variável. Os argumentos são acessados pelas funções `numargs`, `getarg`, `setarg` (página 124).

O exemplo a seguir calcula a soma de todos os parâmetros:

```c

sum(...)
{
    new result = 0
    for (new i = 0; i < numargs(); ++i)
        result += getarg(i)
    return result
}

```

This function could be used in:

Listing: sum function usage

```c

new v = sum(1, 2, 3, 4, 5)

```

Podemos usar uma tag antes das reticências para obrigar que todos os argumentos seguintes tenham a mesma tag. Fora isso, não há checagem nessa lista —use com cuidado.

`getarg` e `setarg` assumem que o argumento foi passado por referência. Ao usá-las em parâmetros “normais” (fora da lista variável), tenha cautela, pois nem o compilador nem a VM verificam isso. Os parâmetros reais passados como parte da lista variável são sempre por referência.

---

`Tag names: 68`

---

### • Regras de coerção

Quando um parâmetro é declarado como valor, o chamador pode passar:

- um valor (passado por valor);
- uma referência (o conteúdo referenciado é passado);
- um elemento de array indexado (tratado como valor).

Quando o parâmetro é referência, o chamador pode fornecer:

- um valor (o endereço é passado);
- uma referência (passada por valor, pois já é o tipo esperado);
- um elemento de array.

Para parâmetros array, o chamador pode passar:

- um array com mesmas dimensões (passa-se o endereço inicial);
- um elemento indexado (passa-se o endereço daquele elemento).

### • Recursão

Os exemplos de fatorial e Fibonacci vieram na forma de laços, talvez sugerindo que pawn não suporta recursão. Mas suporta —a questão é que esses casos são ruins para ilustrá-la (fatorial é mais claro com loop; Fibonacci recursivo recalcula muitas vezes o mesmo valor).

Um exemplo clássico de recursão é o problema das Torres de Hanói:

Listing: hanoi.p

```c

/* The Towers of Hanoi, a game solved through recursion */

main()
{
    print "How many disks: "
    new disks = getvalue()
    move 1, 3, 2, disks
}

move(from, to, spare, numdisks)
{
    if (numdisks > 1)
        move from, spare, to, numdisks-1
    printf "Move disk from pillar %d to pillar %d\n", from, to
    if (numdisks > 1)
        move spare, to, from, numdisks-1
}

```

---

`“faculty”: 71`

`“fibonacci”: 11`

`There exists an intriguing iterative solution to the Towers of Hanoi.`

---

### • Declarações antecipadas

Na implementação de referência, funções comuns não precisam ser declaradas antes do uso∗. Operadores definidos pelo usuário, por outro lado, devem ser declarados previamente.

O uso típico é colocá-los em arquivos `.inc`, mas às vezes é necessário (ou conveniente) declarar primeiro e implementar depois —especialmente para operadores “proibidos”.

Para criar uma declaração antecipada, coloque `forward` antes do cabeçalho. Por compatibilidade (e semelhança com C/C++), também é aceitável escrever o cabeçalho seguido de `;`. A implementação completa vem posteriormente. Classificadores de estado são ignorados em declarações antecipadas.

---

###### ∗ Other implementations of the Pawn language (if they exist) may use “single pass” parsers, requiring functions to be defined before use.

---

`Forbidden userdefined operators: 92`

---

### • Classificadores de estado

Todas as funções (exceto nativas) podem ter um atributo de estado: uma lista entre `< >` após o cabeçalho. Quando o estado pertence a um autômato não padrão, prefixe com `automato:estado` (ex.: `parser:slash`).

Se houver estados diferentes, precisamos fornecer implementações separadas para cada conjunto, todas com o mesmo cabeçalho (sem contar o classificador).

Uma sintaxe especial permite usar `<>` vazio para definir a função “fallback”, que atende a todos os estados não cobertos nas demais variações.

### • Funções `public` e `main`

Programas standalone precisam ter `main` (sem parâmetros), ponto de partida da execução.

Bibliotecas não exigem `main`, mas devem possuir pelo menos uma função pública. `main` é o entry point primário; funções `public` fornecem pontos alternativos. A VM pode iniciar por uma função pública e, em bibliotecas, `main` pode servir para inicializações.

Para declarar uma função pública, prefixe o nome com `public`. Exemplo: um editor de texto poderia chamar `onkey` a cada tecla digitada para que o script modifique/rejeite caracteres. A função
onkey abaixo substituiria cada caractere “~” (código 126 no conjunto
de caracteres ISO Latin‑1) pelo código de “espaço duro” na tabela ANSI:

Listing: onkey function

```c

public onkey(keycode)
{
    if (key==’~’)
        return 160 /* replace ~ by hard space (code 160 in Latin-1) */
    else
        return key /* leave other keys unaltered */
}

```

---

`Example: 40`

---

Functions whose name starts with the “@” symbol are also public. So
an alternative way to write the public function onkey function is:

Listing: @onkey function

```c

@onkey(keycode)
    return key==’~’ ? 160 : key

```

The “@” character, when used, becomes part of the function name; that is, in
the last example, the function is called “@onkey”. The host application decides
on the names of the public functions that a script may implement.

Arguments of a public function may not have default values. A public func-
tion interfaces the host application to the pawn script. Hence, the arguments
passed to the public function originate from the host application, and the host
application cannot know what “default values” the script writer plugged for
function arguments —which is why the pawn parser flags the use of default
values for arguments of public functions as an error. The issue of default
values in public function arguments only pops up in the case that you wish to call public functions from the script itself.

### • Static functions

When the function name is prefixed with the keyword static, the scope of the
function is restricted to the file that the function resides in.

The static attribute can be combined with the “stock” attribute.

### • Stock functions

A “stock” function is a function that the pawn parser must “plug into” the
program when it is used, and that it may simply “remove” from the program
(without warning) when it is not used. Stock functions allow a compiler or
interpreter to optimize the memory footprint and the file size of a (compiled)
pawn program: any stock function that is not referred to, is completely skipped
—as if it were lacking from the source file.

A typical use of stock functions, hence, is in the creation of a set of
“library” functions. A collection of general purpose functions, all marked as “stock” may
be put in a separate include file, which is then included in any pawn  
script. Only the library functions that are actually used get “linked” in.

To declare a stock function, prefix the function name with the keyword stock.
Public functions and native functions cannot be declared “stock”.

When a stock function calls other functions, it is usually a good practice to
declare those other functions as “stock” too —with the exception of  
native functions. Similarly, any global variables that are used by a stock
function should in most cases also be defined “stock”. The removal of unused (stock)
functions can cause a chain reaction in which other functions and global vari-
ables are not longer accessed either. Those functions are then removed as well,
thereby continuing the chain reaction until only the functions that are used,
directly or indirectly, remain.

---

`Default values of function arguments: 75`

`Public variables can be declared “stock”`

`Stock variables: 63`

---

### • Native functions

A pawn program can call application-specific functions through a “native function”.
The native function must be declared in the pawn program by means
of a function prototype. The function name must be preceded by the keyword native.

Examples:

```c

native getparam(a[], b[], size)

native multiply_matrix(a[], b[], size)

native openfile(const name[])

```

The names “getparam”, “multiply_matrix” and “openfile” are the internal
names of the native functions; these are the names by which the  
functions are known in the pawn program. Optionally, you may also set an external
name for the native function, which is the name of the function as the “host application” knows it.
To do so, affix an equal sign to the function prototype followed by the external name. For example:

```c

native getparam(a[], b[], size) = host_getparam

native multiply_matrix(a[], b[], size) = mtx_mul

```

When a native function returns an array, the dimensions and size of the ar-
ray must be explicitly declared. The array specification occurs between  
the function name and the parameter list. For example:

```c

enum rect { left, top, right, bottom }
native intersect[rect](src1[rect], src2[rect])

```

Unless specified explicitly, the external name is equal to the internal name of
a native function. One typical use for explicit external names is to set a
symbolic name for a user-defined operator that is implemented as a native function.

See the “Implementor’s Guide” for implementing native functions in C/C++(on the “host application” side).

Native functions may not have state specifiers.

---

`An example of a native user-defined operator is on page 89`

---

### • User-defined operators

The only data type of pawn is a “cell”, typically a 32-bit number or bit
pattern.

Tags: 68 The meaning of a value in a cell depends on the particular application —it need
not always be a signed integer value. pawn allows to attach a “meaning” to a cell with its “tag” mechanism.

Based on tags, pawn also allows you to redefine operators for cells  
with a specific purpose. The example below defines a tag “ones” and an  
operator to add two “ones” values together (the example also implements  
operators for subtraction and negation). The example was inspired by the checksum
algorithm of several protocols in the TCP/IP protocol suite: it simulates one’s
complement arithmetic by adding the carry bit of an arithmetic overflow back
to the least significant bit of the value.

Listing: ones.p

```c

forward ones: operator+(ones: a, ones: b)
forward ones: operator-(ones: a, ones: b)
forward ones: operator-(ones: a)

main()
{
    new ones: chksum = ones: 0xffffffff
    print "Input values in hexadecimal, zero to exit\n"

    new ones: value
    do
    {
        print ">> "
        value = ones: getvalue(.base=16)
        chksum = chksum + value
        printf "Checksum = %x\n", chksum
    }
    while (value)
}

stock ones: operator+(ones: a, ones: b)
{
    const ones: mask = ones: 0xffff                 /* word mask */
    const ones: shift = ones: 16                    /* word shift */

    /* add low words and high words separately */
    new ones: r1 = (a & mask) + (b & mask)
    new ones: r2 = (a >>> shift) + (b >>> shift)

    new ones: carry
    restart:                                        /* code label (goto target) */

    \* add carry of the new low word to the high word, then
    * strip it from the low word */

    carry = (r1 >>> shift)
    r2 += carry
    r1 &= mask

    \* add the carry from the new high word back to the low
    * word, then strip it from the high word */

    carry = (r2 >>> shift)
    r1 += carry
    r2 &= mask

    \* a carry from the high word injected back into the low
    * word may cause the new low to overflow, so restart in that case */

    if (carry)
        goto restart
    return (r2 << shift) | r1
}

stock ones: operator-(ones: a)
    return (a == ones: 0xffffffff) ? a : ~a

stock ones: operator-(ones: a, ones: b)
    return a + -b

```

The notable line in the example is the line “chksum = chksum + value” in
the loop in function main. Since both the variables chksum and value have
the tag ones, the “+” operator refers to the user-defined operator  
(instead of the default “+” operator). User-defined operators are merely a notational
convenience. The same effect is achieved by calling functions explicitly.

The definition of an operator is similar to the definition of a function, with
the difference that the name of the operator is composed by the keyword “opera-
tor” and the character of the operator itself. In the above example, both the
unary “-” and the binary “-” operators are redefined. An operator function
for a binary operator must have two arguments, one for an unary  
operator must have one argument. Note that the binary “-” operator adds the two val-
ues together after inverting the sign of the second operand. The subtraction

operator thereby refers to both the user-defined “negation” (unary “-”) and addition operators.

A redefined operator must adhere to the following restrictions:

- A user-defined operator must be declared before use (this is in contrast to “normal” functions): either put the implementation of the user-defined operator above the functions that use it, or add a forward declaration near the top of the file.

- Only the following operators may be redefined: +, -, \*, /, %, ++, --, ==, !=, \<, > , \<=, >=, ! and =. That is, the sets of arithmetic and relational operators can be overloaded, but the bitwise operators and the logical operators cannot. The = and ! operators are a special case.

- You cannot invent new operators; you cannot define operator “#” for example.

- The precedence level and associativity of the operators, as well as their “arity” remain as defined. You cannot make an unary “+” operator, for example.

- The return tag of the relational operators and of the “!” operator must be “bool:”.

- The return tag of the arithmetic operators is at your choosing, but you cannot redefine an operator that is identical to another operator except for its return tag. For example, you cannot make both `alpha: operator+(alpha: a, alpha: b)` and `beta: operator+(alpha: a, alpha: b)` (The assignment operator is an exception to this rule.)

- PAWN already defines operators to work on untagged cells, you cannot redefine the operators with only arguments without tags.

- The arguments of the operator function must be non-arrays passed by value. You cannot make an operator work on arrays.

In the example given above, both arguments of the binary operators have the
same tag. This is not required; you may, for example, define a  
binary “+” operator that adds an integer value to a “ones:” number.

Au fond, the operation of the pawn parser is to look up the tag(s)
of the operand(s) that the operator works on and to look up whether a user-defined
operator exists for the combination of the operator and the tag(s). However,
the parser recognizes special situations and provides the following features:

The parser recognizes operators like “+=” as a sequence of “+” and  
“=” and it will call a user-defined operator “+” if available and/or a user-defined
operator “=”. In the example program, the line “chksum = chksum + value”
might have been abbreviated to “chksum += value”.

The parser recognizes commutative operators (“+”, “\*”, “==”, and “!=”)
and it will swap the operands of a commutative operator if that produces
a fit with a user-defined operator. For example, there is usually no need to implement both

`ones:operator+(ones:a, b)`

and

`ones:operator+(a, ones:b)`

(implementing both functions is valid, and it is useful in case the user-defined
operator should not be commutative).

- Prefix and postfix operators are handled automatically. You only need to define one user operator for the “++” and “--” operators for a tag.

- The parser calls the “!” operator implicitly in case of a test without explicit comparison. For example, in the statement “if (var) ...” when “var” has tag “ones:”, the user-defined operator “!” will be called for var. The “!” operator thus doubles as a “test for zero” operator. (In one’s complement arithmetic, both the “all-ones” and the “all-zeros” bit patterns represent zero.)

- The user-defined assignment operator is implicitly called for a function argument that is passed “by value” when the tag names of the formal and the actual arguments match the tag names of the left and right hand sides of the operator. In other words, the pawn parser simulates that “pass by value” happens through assignment. The user-defined operator is not called for function arguments that are passed “by reference”.

- If you wish to forbid an operation, you can “forward declare” the operator without ever defining it (see page 82). This will flag an error when the user-defined operator is invoked. For example, to forbid the “%” operator (remainder after division) on floating point values, you can add the line: `forward Float: operator%(Float: a, Float: b)`

User-defined operators can optionally be declared “stock” or “native”. In the case of a native operator function, the definition should include an external name. For example (when, on the host’s side, the native function is called float_add):

Listing: native operator+ function

```c

native Float: operator+(Float: val, Float: val) = float_add

```

The user-defined assignment operator is a special case, because it is an
operator that has a side effect. Although the operator has the appearance of a binary
operator, its “expression result” is the value at the right hand —the assignment
operator would be a “null”-operator if it weren’t for its side-effect. In pawn
a user-defined assignment operator is declared as:

Listing: operator= function

```c

ones: operator=(a)

return ones: ( (a >= 0) ? a : ~(-a) )

```

The user-defined “=” operator looks like a unary operator in this
definition, but it is a special case nevertheless. In contrast to the other
operators, the tag of the return value for the user-defined operator is important: the pawn
parser uses the tags of the argument and the return value to find a matching user-defined operator.

The example function above is a typical application for a user-defined assign-
ment operator: to automatically coerce/convert an untagged value to a tagged
value, and to optionally change the memory representation of the value in the
process. Specifically, the statement “new ones:A = -5” causes the user-defined
operator to run, and for the constant -5 the operator will return “~(- -5)”, or ~5, or −6.∗

---

`Tags: 68`

`Forward declaration: 82`

`“Call by value” versus “call by reference”: 71`

`Native functions: 85`

`Rational literals: 98`

`#pragma rational: 121`

---

### • Floating point and fixed point arithmetic

pawn only has intrinsic support for integer arithmetic (the -domain: “whole
numbers”, both positive and negative). Support for floating point arithmetic
or fixed point arithmetic must be implemented through (native) functions.
User operators, then, allow a more natural notation of expressions with fixed or floating point numbers.

The pawn parser has support for literal values with a fractional part, which it
calls “rational numbers”. Support for rational literals must be enabled explic-
itly with a #pragma. The #pragma indicates how the rational numbers must
be stored —floating point or fixed point. For fixed point rational values, the
#pragma also specifies the precision in decimals. Two examples for the #pragma are:

```c

#pragma rational Float /* floating point format */
#pragma rational Fixed(3) /* fixed point, with 3 decimals */

```

---

###### ∗ Modern CPUs use two’s complement integer arithmetic. For positive values, the bitwise representation of a value is the same in one’s complement and two’s complement, but the representations differ for negative values. For instance, the same bit pattern that means -5 in one’s complement stands for -6 in two’s complement.

---

Since a fixed point value must still fit in a cell, the number of decimals
has a direct influence of the range of a fixed point value. For a fixed point value
with 3 decimals, the range would be −2, 147, 482 . . . + 2, 147, 482.

The format for a rational number may only be specified once for the entire
pawn program. In an implementation one typically chooses either  
floating point support or fixed point support. As stated above, for the actual imple-
mentation of the floating point or fixed point arithmetic, pawn requires the
help of (native) functions and user-defined operators. A good place to put
the #pragma for rational number support would be in the include file that  
also defines the functions and operators.

The include file † for fixed point arithmetic contains definitions like:

```c

native Fixed: operator\*(Fixed: val1, Fixed: val2) = fmul
native Fixed: operator/(Fixed: val1, Fixed: val2) = fdiv

```

The user-defined operators for multiplication and division of two fixed
point numbers are aliased directly to the native functions fmul and fdiv. The host
application must, then, provide these native functions.

Another native user-defined operator is convenient to transform an integer to
fixed point automatically, if it is assigned to a variable tagged as “Fixed:”:

```c

native Fixed: operator=(oper) = fixed

```

With this definition, you can say “new Fixed: fract = 3” and the value
will be transformed to 3.000 when it is stored in variable fract. As explained
in the section on user-defined operators, the assignment operator also runs for
function arguments that are passed by value. In the expression “new Fixed:
root = sqroot(16)” (see the implementation of function sqroot on page 79),
the user-defined assignment operator is called on the argument 16.

For adding two fixed point values together, the default “+” operator is suffi-
cient, and the same goes for subtraction. Adding a normal (integer) number
to a fixed point number is different: the normal value must be scaled before
adding it. Hence, the include file implements operators for that purpose too:

###### † See the application note “Fixed Point Support Library” for where to obtain the include file.

Listing: additive operators, commutative and non-commutative

```c

stock Fixed: operator+(Fixed: val1, val2)
    return val1 + fixed(val2)

stock Fixed: operator-(Fixed: val1, val2)
    return val1 - fixed(val2)

stock Fixed: operator-(val1, Fixed: val2)
    return fixed(val1) - val2

```

The “+” operator is commutative, so one implementation handles both cases.
For the “-” operator, both cases must be implemented separately.

Finally, the include file forbids the use of the modulus operator (“%”) on fixed
point values: the modulus is only applicable to integer values:

Listing: forbidden operators on fixed point values

```c

forward Fixed: operator%(Fixed: val1, Fixed: val2)
forward Fixed: operator%(Fixed: val1, val2)
forward Fixed: operator%(val1, Fixed: val2)

```

Because of the presence of the (forward) declaration of the operator, the pawn
parser will attempt to use the user-defined operator rather than the default
“%” operator. By not implementing the operator, the parser will subsequently issue an error message.
`User-defined operators: 86`

---

### • Call by Value and Call by Reference

In Pawn, function arguments can be passed in two ways: by value and by reference.

#### Call by value

In this method, the value of the variable is passed to the function. A copy of the variable is created and the function operates on the copy, not the original variable. Any changes made to the variable inside the function do not affect the original variable.

```c
swap(a, b){
	new c = a;
	a = b;
	b = c;
}

main(){
	new x = 10, y = 20;
	printf("The value of x is %d and value of y is %d, before calling 'swap'.", x, y);
	swap(x, y);
	printf("The value of x is %d and value of y is %d, after calling 'swap'.", x, y);
}
```

Output

```
The value of x is 10 and value of y is 20, before calling 'swap'.
The value of x is 10 and value of y is 20, after calling 'swap'.
```

#### Call by reference

In this method, the address of the variable is passed to the function. The function operates on the original variable and any changes made to the variable inside the function are reflected in the original variable.

```c
swap(&a, &b){
	new c = a;
	a = b;
	b = c;
}

main(){
	new x = 10, y = 20;
	printf("The value of x is %d and value of y is %d, before calling 'swap'.", x, y);
	swap(x, y);
	printf("The value of x is %d and value of y is %d, after calling 'swap'.", x, y);
}
```

Output

```
The value of x is 10 and value of y is 20, before calling 'swap'.
The value of x is 20 and value of y is 10, after calling 'swap'.
```

### • Recursion / Function Recursion

Recursion in programming refers to the process of a function calling itself in order to solve a problem. It's a fundamental concept used to solve problems that can be broken down into smaller instances of the same problem. Recursion consists of two main components: base cases and recursive cases.

##### Base Case:

Every recursive function should have one or more base cases. A base case is a condition under which the function stops calling itself and returns a result directly. Without base cases, the recursion would continue indefinitely, causing a stack overflow. Read Stack/Heap section to know more about it.

##### Recursive Case:

The recursive case is where the function calls itself to solve a smaller instance of the problem. Each recursive call should bring the problem closer to a base case.

#### Example

```c
stock factorial(n) {
    // Base case: factorial of 0 is 1
    if (n == 0) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    else {
        return n * factorial(n - 1);
    }
}
main() {
    new num = 3;
    new result = factorial(num);
    printf("Factorial of %d is %d", num, result); // Output: Factorial of 3 is 6
}
```

#### Demonstrate the Output

```
main() \\ main function from where execution of program starts
new num = 3; \\ creates a num variable
new result = factorial(num); \\ create a result variable and calls the factorial() with passing value of num, factorial(5)
factorial(3) \\ factorial initiate
   if(3 == 0) \\ checks the condition which is false
   else{ 3 * factorial(3-1) } \\ 3 * and calls the factorial(2)
      factorial(2) \\ factorial initiate again
         if(2 == 0) \\ checks the condition which is false
         else{ 2 * factorial(2-1) } \\ 3 * 2 * and calls the factorial(1)
            factorial(1) \\ factorial initiate again
            if(1 == 0) \\ checks the condition which is false
            else{ 1 * factorial(1-1) } \\ 3 * 2 * 1 and calls the factorial(0)
 	       factorial(0) \\ factorial initiate again
               if(0 == 0) return 1 \\ checks the conition which is true and return 1
		\\ at the final call 3 * 2 * 1 * 1
```

### Stack Memory

The stack is a region of memory used for storing local variables, function call information, and control flow data. It operates in a Last-In-First-Out (LIFO) manner, which means that the last item pushed onto the stack is the first one to be popped off.

#### Example (Stack Overflow)

```c
#pragma dynamic 35 // (35 * 4 bytes, a cell size) #pragma dynamic [cells] helps to modify the size of stack, read docs/scripting/language/Directives to know more about #pragma
main(){
	grow_stack(1);
}
grow_stacK(n){ // recursive function
	printf("N: %d", n);
	grow_stacK(n+1);
}
```

#### Output

```
N: 1
N: 2
N: 3
.. .
Stack/heap collision (insufficient stack size)
```

![Stack](https://i.imgur.com/ZaIVUkJ.png)

[Go Back to Contents](00-Contents)
