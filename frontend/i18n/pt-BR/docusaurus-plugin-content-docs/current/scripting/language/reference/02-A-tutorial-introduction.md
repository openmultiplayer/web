# Introdução guiada

---

Pawn é uma linguagem de programação simples cuja sintaxe lembra a da linguagem C. Um programa pawn é formado por um conjunto de funções e um conjunto de variáveis. As variáveis representam objetos de dados e as funções agrupam instruções (chamadas de _statements_) que operam sobre esses dados ou executam tarefas específicas.

O primeiro programa demonstrado em praticamente qualquer linguagem costuma imprimir uma mensagem simples; o clássico é “Hello world”. Em pawn o programa fica assim:

Listagem: hello.p

```c

main()
    printf  "Hello  world\n"

```

Este manual parte do princípio de que você já sabe executar um programa pawn; caso contrário, consulte o manual da aplicação (há mais dicas na página 168).

A execução de um programa pawn começa em uma função de “entrada”∗ —neste manual, quase todos os exemplos usam a função `main` para esse papel. No exemplo acima, `main` contém apenas uma instrução, logo abaixo do cabeçalho da função. Quebras de linha e indentação não são significativas; poderíamos invocar `printf` na mesma linha do cabeçalho de `main`.

A definição de uma função exige que o nome seja seguido por um par de parênteses. Se a função receber parâmetros, eles são declarados entre os parênteses. `main` não recebe nenhum parâmetro. Já as regras mudam quando chamamos uma função: os parênteses são opcionais na chamada de `printf`.

O único argumento passado a `printf` é uma string, delimitada por aspas duplas. Os caracteres `\n` perto do final formam uma sequência de escape —nesse caso, representam a quebra de linha. Ao encontrar a sequência `\n`, `printf` move o cursor para a primeira coluna da próxima linha.
the next line. One has to use the \n escape sequence to insert a “newline” into
the string, because a string may not wrap over multiple lines.

---

###### ∗ This should not be confused with the “state” entry functions, which are called entry, but serve a different purpose — see page 42.

`Compiling and running scripts: see page 168`

`String literals: 99 Escape sequence: 99`

---

pawn is a “case sensitive” language: upper and lower case letters are considered
to be different letters. It would be an error to spell the function printf in the
acima como “PrintF”. Palavras-chave e símbolos pré-definidos, como o nome
da função `main`, devem ser escritos em minúsculas.

Se você conhece C, talvez ache que o exemplo anterior não se parece muito
com o tradicional “Hello world” de C/C++. No entanto, pawn também pode
lembrar bastante C. O próximo exemplo é sintaxe válida em pawn (e tem a
mesma lógica do anterior):

Listing: hello.p — C style

```c

#include  <console>

main()
{
    printf("Hello  world\n");
}

```

Esses primeiros exemplos já revelam algumas diferenças entre pawn e C:

- normalmente não é necessário incluir arquivos de cabeçalho fornecidos pelo sistema;
- pontos e vírgulas são opcionais (exceto ao escrever várias instruções na mesma linha);
- quando o corpo de uma função tem apenas uma instrução, as chaves (que transformam em instrução composta) também são opcionais;
- se você não usa o resultado de uma função em uma expressão ou atribuição, os parênteses ao redor dos argumentos são opcionais.

Esses itens referem-se a sintaxes opcionais —use o estilo que preferir; nenhum deles é “desaconselhado” ou “nocivo”. Os exemplos deste manual posicionam as chaves e usam uma indentação conhecida como “estilo Whitesmith”, mas pawn é uma linguagem de formato livre e qualquer estilo de recuo funciona.

Como pawn foi projetado como linguagem de extensão de aplicações, o conjunto de funções disponível em um programa depende da aplicação hospedeira. Consequentemente, a linguagem não conhece nenhuma função intrinsecamente. A função `print`, usada nos primeiros exemplos, precisa ser fornecida pelo aplicativo host e “declarada” ao analisador de pawn.

---

###### ∗ In the language specification, the term “parser” refers to any implementation that processes and runs on conforming Pawn programs —either interpreters or compilers.

`More function descriptions at page 124`

---

Pressupõe-se, porém, que toda aplicação hospedeira disponibilize um conjunto mínimo de funções comuns, como `print` e `printf`.

Em alguns ambientes é necessário “habilitar” o display ou terminal antes de enviar texto. Se for o caso, chame a função `console` antes da primeira chamada a `print` ou `printf`. A função `console` também permite configurar características do dispositivo, como quantidade de linhas e colunas. Os programas deste manual não a utilizam porque muitas plataformas não exigem nem oferecem esse recurso.

### • Arithmetic

Os elementos fundamentais de grande parte dos programas são cálculos, decisões (execuções condicionais), iterações (loops) e variáveis para armazenar dados de entrada, saída e resultados intermediários. O próximo exemplo ilustra vários desses conceitos: ele calcula o máximo divisor comum de dois valores usando o algoritmo de Euclides.

Listing: gcd.p

```c

/*  the  greatest  common  divisor  of  two  values,  using  Euclides’
algorithm  */

main()
{
    print  "Input  two  values\n"
    new  a  =  getvalue()
    new  b  =  getvalue()
    while  (a  !=  b)
    if  (a  >  b)
        a  =  a  -  b
    else
        b  =  b  -  a
    printf  "The  greatest  common  divisor  is  %d\n",  a
}

```

Agora `main` contém mais do que uma única instrução `print`. Quando o corpo de uma função possui várias instruções, elas devem ficar dentro de chaves (`{` e `}`), formando uma instrução composta. O mesmo vale para os blocos de `if/else` e para os corpos de loops.

A palavra-chave `new` cria uma variável; seu nome vem logo em seguida. É comum (mas não obrigatório) atribuir um valor inicial ao declarar a variável.

`Compound statement: 112`

`Data declarations are covered in detail starting at page 62`

---

Variáveis devem ser declaradas antes de serem usadas em qualquer expressão. A função `getvalue` (também comum entre as funções pré-definidas) lê um valor do teclado e o retorna. Lembre-se de que pawn é uma linguagem sem tipos: toda variável é uma célula numérica capaz de armazenar um inteiro com sinal.

O nome `getvalue` é seguido por parênteses porque o valor retornado é armazenado em uma variável. Normalmente os argumentos da função apareceriam entre os parênteses, mas `getvalue` (neste programa) não recebe parâmetros explícitos. Se você não atribuir o resultado de uma função a uma variável nem o usar em outra expressão, os parênteses são opcionais —como acontece com `print` e `printf`. Você pode mantê-los se preferir, mas não é necessário.

Loop instructions, like “while”, repeat a single instruction as long as the loop
condition (the expression between parentheses) is “true”. One can  
execute multiple instructions in a loop by grouping them in a compound statement.
The if–else instruction has one instruction for the “true” clause and one for the “false”.

Observe that some statements, like while and if–else, contain (or  
“fold around”) another instruction —in the case of if–else even two other instructions.
The complete bundle is, again, a single instruction. That is:

- the assignment statements “a = a - b” below the if and “b = b - a” below the else are statements;

- the if–else statement folds around these two assignment statements and forms a single statement of itself;

- the while statement folds around the if–else statement and forms, again, a single statement.

It is common to make the nesting of the statements explicit by indenting any
sub-statements below a statement in the source text. In the “Greatest Com-
mon Divisor” example, the left margin indent increases by four space characters
after the while statement, and again after the if and else keywords. State-
ments that belong to the same level, such as both printf invocations and the
while loop, have the same indentation.

The loop condition for the while loop is “(a != b)”; the symbol != is the
“not equal to” operator. That is, the if–else instruction is repeated  
until “a” equals “b”. It is good practice to indent the instructions that run under
control of another statement, as is done in the preceding example.

---

The call to printf, near the bottom of the example, differs from the print call
right below the opening brace (“\{”). The “f” in printf stands for “formatted”,
which means that the function can format and print numeric values and other
data (in a user-specified format), as well as literal text. The %d symbol in the
string is a token that indicates the position and the format that the subsequent
argument to function printf should be printed. At run time, the token %d is
replaced by the value of variable “a” (the second argument of printf).

A função `print` imprime apenas texto e é mais rápida do que `printf`. Se quiser exibir um caractere “%” literal, use `print` ou duplique o símbolo ao usar `printf`. Ou seja:

`print "20% of the personnel accounts for 80% of the costs\n"`

e

`printf "20%% of the personnel accounts for 80%% of the costs\n"`

produzem a mesma string.

---

`"while" loop: 116`

`"if else": 114`

`Relational operators: 107`

---

### • Arrays e constantes

Além das variáveis simples de uma célula, pawn oferece “variáveis array” que armazenam diversos valores. O exemplo a seguir lista números primos usando o famoso “crivo de Eratóstenes”. Ele também apresenta outro conceito: constantes simbólicas, que se parecem com variáveis, mas não podem ser alteradas.

Listing: sieve.p

```c

/*  Print  all  primes  below  100,  using  the  "Sieve  of  Eratosthenes"  */

main()
{
    const  max_primes  =  100
    new  series[max_primes]  =  {  true,  ...  }
    for  (new  i  =  2;  i  <  max_primes;  ++i)
    if  (series[i])
    {
        printf  "%d  ",  i
        /*  filter  all  multiples  of  this  "prime"  from  the  list  */
        for  (new  j  =  2  *  i;  j  <  max_primes;  j  +=  i)
            series[j]  =  false
    }
}

```

---

Sempre que um programa (ou subprograma) tiver limites fixos, é boa prática criar constantes simbólicas para eles. No exemplo, `max_primes` vale 100 e é usada três vezes após a definição: na declaração do array `series` e nas duas estruturas `for`. Se quisermos adaptar o código para listar primos menores que 500, basta alterar uma linha.

Assim como variáveis simples, arrays podem ser inicializados na criação. Pawn fornece um atalho para inicializar todos os elementos com o mesmo valor: os cem elementos de `series` recebem `true` —sem que seja necessário digitar a palavra cem vezes. Os símbolos `true` e `false` são constantes pré-definidas.

Quando uma variável simples (como `i` e `j` na implementação do crivo) é declarada na primeira expressão de um laço `for`, ela existe apenas dentro do loop. Declaração de variável segue suas próprias regras; apesar da aparência, não é uma instrução comum. Uma dessas regras permite declarar uma variável na primeira expressão do `for`.

Os dois `for` também apresentam novos operadores na terceira expressão: `++` incrementa seu operando em um; ou seja, `++i` equivale a `i = i + 1`. Já `+=` soma a expressão da direita ao valor da esquerda; `j += i` equivale a `j = j + i`.

Trabalhando com arrays é preciso ficar atento ao problema clássico de “um a mais”: o primeiro elemento de `series` é `series[0]`, logo, se o array tem `max_primes` elementos, o último índice é `series[max_primes - 1]`. Se `max_primes` vale 100, o último elemento é `series[99]`; acessar `series[100]` é inválido.

`Constant declaration: 101`

`Progressive initiallers: 65`

`"for" loop: 113`

`An overview of all operators: 104`

### • Funções

Programas maiores costumam separar tarefas e operações em funções. Isso aumenta a modularidade e, quando bem escritas, elas podem ser reaproveitadas em outros projetos. O exemplo a seguir implementa uma função para calcular a sequência de Fibonacci.

Essa série foi descrita por Leonardo “Fibonacci”, de Pisa, matemático italiano do século XIII famoso por popularizar os algarismos indo-arábicos no Ocidente. A sequência tinha como objetivo modelar o crescimento de uma população de coelhos idealizados, e segue 1, 1, 2, 3, 5, 8, 13, 21... —cada termo é a soma dos dois anteriores.

Listing: fib.p

```c

/*  Calculation  of  Fibonacci  numbers  by  iteration  */

main()
{
    print  "Enter  a  value:  "
    new  v  =  getvalue()
    if  (v  >  0)
        printf  "The  value  of  Fibonacci  number  %d  is  %d\n", v,  fibonacci(v)
    else
        printf  "The  Fibonacci  number  %d  does  not  exist\n",  v
}
fibonacci(n)
{
    assert  n  >  0
    new  a  =  0,  b  =  1
    (new  i  =  2;  i  <  n;  i++)
    {
        new  c  =  a  +  b
        a  =  b
        b  =  c
    }
    return  a  +  b
}

```

A instrução `assert` no início de `fibonacci` merece destaque: ela protege contra condições “impossíveis” ou inválidas. Números de Fibonacci negativos são inválidos, e `assert` sinaliza isso como erro de programação caso ocorra. Use `assert` apenas para erros do programador, nunca para erros de entrada do usuário.

Implementar uma função definida pelo usuário se parece bastante com a função `main`. Em `fibonacci` vemos dois conceitos novos: ela recebe um valor por parâmetro e retorna um resultado.

Os parâmetros são declarados no cabeçalho da função; aqui, há apenas `n`. Dentro da função, o parâmetro se comporta como uma variável local cujo valor foi passado do lado externo no momento da chamada.

A instrução `return` encerra a função e estabelece o valor retornado. Ela não precisa aparecer apenas ao final; saídas antecipadas são permitidas.

`"assert" statement: 112`

`Funcitons: properties & features: 70`

---

The main function of the Fibonacci example calls predefined “native” functions,
like getvalue and printf, as well as the user-defined function fibonacci.
From the perspective of calling a function (as in function main), there is no
difference between user-defined and native functions.

The Fibonacci numbers sequence describes a surprising variety of natural phe-
nomena. For example, the two or three sets of spirals in pineapples, pine cones
and sunflowers usually have consecutive Fibonacci numbers between 5 and 89
as their number of spirals. The numbers that occur naturally in branching
patterns (e.g. that of plants) are indeed Fibonacci numbers. Finally, although
the Fibonacci sequence is not a geometric sequence, the further the sequence
is extended, the more closely the ratio between successive terms approaches
the Golden Ratio, of 1.618. . . ∗ that appears so often in art and architecture.

### • Call-by-reference & call-by-value

Dates are a particularly rich source of algorithms and conversion routines,
because the calenders that a date refers to have known such a diversity,
through time and around the world.

The “Julian Day Number” is attributed to Josephus Scaliger† and it counts
the number of days since November 24, 4714 BC (proleptic Gregorian cal-
endar‡). Scaliger chose that date because it marked the coincidence of three
well-established cycles: the 28-year Solar Cycle (of the old Julian calendar),
the 19-year Metonic Cycle and the 15-year Indiction Cycle (periodic taxes or gov-
ernmental requisitions in ancient Rome), and because no literature or recorded
history was known to predate that particular date in the remote past. Scaliger
used this concept to reconcile dates in historic documents, later astronomers
embraced it to calculate intervals between two events more easily.

---

###### ∗ The exact value for the Golden Ratio is 1/2(√5 + 1). The relation between Fibonacci numbers and the Golden Ratio also allows for a “direct” calculation of any sequence number, instead of the iterative method described here.

###### ∗ There is some debate on exactly what Josephus Scaliger invented and who or what he called it after.

###### ∗ The Gregorian calendar was decreed to start on 15 October 1582 by pope Gregory XIII, which means that earlier dates do not really exist in the Gregorian calendar. When extending the Gregorian calendar to days before 15 October 1582, we refer to it as the proleptic Gregorian calendar.

`Native function interface: 85`

---

Julian Day numbers (sometimes denoted with unit “jd”) should not be con-
Aqui estamos falando de “Julian Day Numbers” (JDN), que não devem ser confundidos com “Julian Dates” (número de dias desde o início do ano) nem com o calendário juliano criado por Júlio César.

O programa abaixo calcula o número de dias julianos a partir de uma data do calendário gregoriano (próleptico) e também faz o caminho inverso. Nesse calendário, o primeiro ano é 1 d.C. e o anterior é 1 a.C.; o ano zero **não** existe. Por isso, o programa considera anos negativos para datas a.C. e positivos (não zero) para anos d.C.

Listing: julian.p

```c

/*  calculate  Julian  Day  number  from  a  date,  and  vice  versa  */

main()
{
    new  d,  m,  y,  jdn
    print  "Give  a  date  (dd-mm-yyyy):  "

    d  =  getvalue(_,  ’-’,  ’/’)
    m  =  getvalue(_,  ’-’,  ’/’)
    y  =  getvalue()
    jdn  =  DateToJulian(d,  m,  y)

    printf("Date  %d/%d/%d  =  %d  JD\n",  d,  m,  y,  jdn)
    print  "Give  a  Julian  Day  Number:  "

    jdn  =  getvalue()
    JulianToDate  jdn,  d,  m,  y

    printf  "%d  JD  =  %d/%d/%d\n",  jdn,  d,  m,  y
}

DateToJulian(day,  month,  year)
{
    /*  The  first  year  is  1.  Year  0  does  not  exist:  it  is  1  BC  (or  -1)  */

    assert  year  !=  0
    if  (year  <  0)
    year++

    /*  move  January  and  February  to  the  end  of  the  previous  year  */

    if  (month  <=  2)
    year--,  month  +=  12
    new  jdn  =  365*year  +  year/4  -  year/100  +  year/400
    +  (153*month  -  457)  /  5
    +  day  +  1721119

    return  jdn
}

JulianToDate(jdn,  &day,  &month,  &year)
{
    jdn  -=  1721119

    /*  approximate  year,  then  adjust  in  a  loop  */

    year  =  (400  *  jdn)  /  146097
    while  (365*year  +  year/4  -  year/100  +  year/400  <  jdn)
        year++
    year--
    /*  determine  month  */

    jdn  -=  365*year  +  year/4  -  year/100  +  year/400
    month  =  (5*jdn  +  457)  /  153

    /*  determine  day  */

    day  =  jdn  -  (153*month  -  457)  /  5

    /*  move  January  and  February  to  start  of  the  year  */

    if  (month  >  12)
        month  -=  12,  year++

    /*  adjust  negative  years  (year  0  must  become  1  BC,  or  -1)  */

    if  (year  <=  0)
        year--
}

```

---

`main` começa criando variáveis para armazenar dia, mês, ano e o JDN calculado. Em seguida lê a data (três chamadas a `getvalue`) e chama `DateToJulian` para obter o número. Depois de calcular, imprime a data digitada e o JDN correspondente. Foquemos agora em `DateToJulian`.

Logo no início, a função incrementa o ano caso ele seja negativo —isso serve para lidar com a ausência do ano zero no calendário gregoriano próleptico. Em outras palavras, `DateToJulian` modifica os argumentos recebidos (mais tarde, altera também `month`). Dentro da função, o argumento se comporta como variável local e pode ser alterado; contudo, essas mudanças são locais a `DateToJulian`. A função `main` passa `d`, `m` e `y`, que são mapeados para `day`, `month` e `year`. Embora `DateToJulian` modifique `year` e `month`, ela não altera `y` e `m` em `main`, apenas suas cópias locais. Esse conceito é conhecido como “passagem por valor”.

O exemplo usa nomes diferentes para as variáveis locais de `main` e `DateToJulian` justamente para tornar a explicação mais clara. Se renomearmos `d`, `m` e `y` para `day`, `month` e `year`, a situação continua a mesma: haverá dois conjuntos de variáveis com esses nomes —algo perfeitamente válido em pawn.

`"Call by value" versus "Call by reference": 71`

---

O restante de `DateToJulian` é aritmética pura, sem novidades para a linguagem.

Voltando ao segundo trecho de `main`, vemos que agora ele solicita um número juliano e chama `JulianToDate` para encontrar a data correspondente. Essa função é interessante porque recebe um único argumento (o JDN) e precisa produzir três valores: dia, mês e ano. Mas uma função só pode retornar um valor —um `return` contém apenas uma expressão. Para resolver isso, `JulianToDate` pede explicitamente que as alterações feitas em alguns argumentos sejam copiadas de volta para as variáveis do chamador. Assim, em `main`, as variáveis que devem receber o resultado são passadas como argumentos.

`JulianToDate` marca os argumentos que devem ser “copiados de volta” com o prefixo `&`. Argumentos com `&` são tratados de forma especial: em vez de passar apenas o valor, a função recebe acesso direto à variável original. Isso se chama “passagem por referência”, e o argumento se torna uma “referência”.

Em outras palavras, se `main` passa `y` e `JulianToDate` o mapeia para `year`, qualquer alteração feita em `year` refletirá em `y`. Somente por meio de argumentos por referência uma função pode modificar diretamente uma variável declarada em outra função.

Resumindo: se uma função retorna apenas um valor, use o `return`; se precisa retornar vários, use argumentos por referência. Ambos podem coexistir na mesma função —por exemplo, retornar o resultado principal via referência e um código de erro no `return`.

Observação: muitas aplicações desktop usam conversões para e a partir de números julianos (ou variantes) para calcular intervalos entre datas ou descobrir a data exata daqui a 90 dias, por exemplo.

### • Números racionais

Até aqui lidamos apenas com números inteiros. Pawn também pode trabalhar com valores fracionários, chamados de “números racionais”, mas o suporte depende da aplicação hospedeira.

Os racionais podem ser implementados como números de ponto flutuante ou de ponto fixo. Ponto flutuante é comum em cálculos gerais e científicos; ponto fixo é indicado para aplicações financeiras ou quando os erros de arredondamento devem ser inexistentes (ou, ao menos, previsíveis). O kit de ferramentas do pawn inclui módulos para ambos, com detalhes e compromissos explicados na documentação específica. Entretanto, o aplicativo host pode oferecer apenas um dos formatos, os dois ou nenhum∗. O programa abaixo exige que haja suporte a pelo menos um tipo de racional; caso contrário, ele não executa.

Listing: c2f.p

```c

main()
{
    new  Rational:  Celsius
    new  Rational:  Fahrenheit
    print  "Celsius\t  Fahrenheit\n"
    for  (Celsius  =  5;  Celsius  <=  25;  Celsius++)
    {
        Fahrenheit  =  (Celsius  *  1.8)  +  32
        printf  "%r  \t  %r\n",  Celsius,  Fahrenheit
    }
}

```

O programa converte uma tabela de graus Celsius para Fahrenheit. A primeira diretiva importa as definições necessárias para trabalhar com racionais. O arquivo `rational` carrega suporte a ponto flutuante ou ponto fixo, conforme o disponível.

As variáveis `Celsius` e `Fahrenheit` são declaradas com a tag `Rational:` entre `new` e o nome da variável. Tags indicam a finalidade da variável, o uso permitido e, no caso específico de racionais, sua representação em memória.

---

###### ∗ Actually, this is already true of all native functions, including all native functions that the examples in this manual use.

`Tag names: 68`

---

The Rational: tag tells the pawn parser that the variables Celsius and Fahrenheit
contain fractional values, rather than whole numbers.

The equation for obtaining degrees Fahrenheit from degrees Celsius is

°F = ⁹⁄₅ + 32 °C

The program uses the value 1.8 for the quotient 9/₅. When rational number
support is enabled, pawn supports values with a fractional part behind  
the decimal point.

The only other non-trivial change from earlier programs is that the format
string for the printf function now has variable placeholders denoted with
“%r” instead of “%d”. The placeholder %r prints a rational number at
the position; %d is only for integers (“whole numbers”).

I used the include file “rational” rather than “float” or “fixed” in an
attempt to make the example program portable. If you know that the host
application supports floating point arithmetic, it may be more convenient to
“#include” the definitions from the file float and use the tag Float: instead
of Rational —when doing so, you should also replace %r by %f in the call to
printf. For details on fixed point and floating point support, please see the
application notes “Fixed Point Support Library” and “Floating Point Support
Library” that are available separately.

### • Strings

pawn has no intrinsic “string” type; character strings are stored in arrays, with
the convention that the array element behind the last valid character is zero.
Working with strings is therefore equivalent with working with arrays.

Among the simplest of encryption schemes is the one called “ROT13” —
actually the algorithm is quite “weak” from a cryptographical point of view. It
is most widely used in public electronic forums (BBSes, Usenet) to hide texts
from casual reading, such as the solution to puzzles or riddles. ROT13 simply
“rotates” the alphabet by half its length, i.e. 13 characters. It is a symmetric
operation: applying it twice on the same text reveals the original.

---

Listing: rot13.p

```c

/*  Simple  encryption,  using  ROT13  */

main()
{
    printf  "Please  type  the  string  to  mangle:  "

    new  str[100]
    getstring  str,  sizeof  str
    rot13  str

    printf  "After  mangling,  the  string  is:  \"%s\"\n",  str
}

rot13(string[])
{
    for  (new  index  =  0;  string[index];  index++)
    if  (’a’  <=  string[index]  <=  ’z’)
        string[index]  =  (string[index]  -  ’a’  +  13)  %  26  +  ’a’
    else  if  (’A’  <=  string[index]  <=  ’Z’)
        string[index]  =  (string[index]  -  ’A’  +  13)  %  26  +  ’A’
}

```

No cabeçalho de `rot13`, o parâmetro `string` é declarado como array, mas sem tamanho —não há valor entre colchetes. Quando um tamanho é especificado no cabeçalho, ele precisa coincidir com o tamanho do argumento passado na chamada. Ao omitir, removemos essa restrição e permitimos que a função opere sobre arrays de qualquer comprimento. É preciso, então, ter outra forma de descobrir o tamanho (máximo). Para strings, basta procurar pelo terminador zero.

O `for` que percorre a string é típico em rotinas de processamento de texto. Repare que a condição é `string[index]`. Em pawn, qualquer valor diferente de zero é considerado “true”; valores iguais a zero são “false”. Assim, quando `string[index]` chega a zero, o loop termina.

O algoritmo ROT13 rotaciona apenas letras; dígitos, pontuação e caracteres especiais permanecem intactos. Além disso, maiúsculas e minúsculas são tratados separadamente. Dentro do loop, dois `if` filtram os caracteres relevantes. O encadeamento do segundo `if` no `else` do primeiro é um padrão comum para testar várias condições mutuamente exclusivas.

No início deste capítulo falamos sobre passagem por valor e por referência. No caso de strings (ou arrays em geral), lembre-se de que pawn sempre passa arrays por referência. Isso economiza memória e melhora o desempenho, já que copiar uma estrutura grande apenas para passá-la por valor consumiria tempo e memória adicionais.

---

`A function that takes an array as an argument and that does not change it, may mark the argument as “const”; see page 72`

Por causa dessa regra, `rot13` pode modificar o parâmetro `string` sem precisar declará-lo explicitamente como argumento por referência.

Outro ponto interessante são as condições dos `if`. A primeira usa `’a’ <= string[index] <= ’z’`, expressão verdadeira se, e somente se, `’a’ <= string[index]` **e** `string[index] <= ’z’`. Esse encadeamento de operadores relacionais é comum para expressar múltiplas comparações em uma única condição.

Por fim, repare como o último `printf` em `main` usa `\"` para imprimir aspas duplas. Normalmente esse caractere encerraria a string literal; a sequência de escape insere a aspa no texto.

Ainda falando de strings e arrays, o próximo programa divide uma frase em palavras e contabiliza quantas são. É um exemplo simples que apresenta alguns recursos novos da linguagem.

Listing: wcount.p

```c

/*  word  count:  count  words  on  a  string  that  the  user  types  */

main()
{
    print  "Please  type  a  string:  "
    new  string[100]
    getstring  string,  sizeof  string

    new  count  =  0

    new  word[20]
    new  index
    for (  ;;  )
    {
        word  =  strtok(string,  index)
        if  (strlen(word)  ==  0)
            break
        count++
        printf  "Word  %d:  ’%s’\n",  count,  word
    }
    printf  "\nNumber  of  words:  %d\n",  count
}

strtok(const  string[],  &index)
{
    new  length  =  strlen(string)

    /*  skip  leading  white  space  */
    while  (index  <  length  &&  string[index]  <=  ’  ’)
        index++
    /*  store  the  word  letter  for  letter  */
    new  offset  =  index                            /*  save  start position  of  token  */
    new  result[20]                                  /*  string  to store  the  word  in  */
    while  (index  <  length
        &&  string[index]  >  ’  ’
        &&  index  -  offset  <  sizeof  result  -  1)
    {
        result[index  -  offset]  =  string[index]
        index++
    }
    result[index  -  offset]  =  EOS                 /*  zero-terminate  the string  */
    return  result
}

```

---

`Relational operators: 107`

`Escape sequence: 99`

`main` primeiro mostra uma mensagem e lê a string digitada. Depois entra em um loop: escrever `for (;;)` cria um laço sem inicialização, incremento ou teste —um loop infinito, equivalente a `while (true)`. A diferença é que o analisador de pawn gera um aviso para `while (true)` (“expressão redundante; sempre verdadeira”), mas `for (;;)` passa sem alertas.

Loops infinitos são úteis quando precisamos de um teste no meio —um híbrido entre `while` e `do...while`. Pawn não tem essa construção diretamente, mas podemos simulá-la com um loop infinito e um `break` condicional. No exemplo:

- a palavra é extraída da string (código antes do teste);
- verificamos se há uma nova palavra; se não houver, saímos do loop (teste no meio);
- imprimimos a palavra e sua posição (código depois do teste).

A linha `word = strtok(string, index)` (junto com a declaração de `word`) mostra que pawn permite atribuir arrays e retornar arrays de funções. O analisador verifica se o array retornado por `strtok` tem o mesmo tamanho/dimensão da variável que o recebe.

`strlen` é uma função nativa; `strtok` não e precisa ser implementada. Ela foi inspirada na homônima de C/C++, mas não modifica a string original: em vez disso, copia palavra por palavra para um array local, que é retornado no final.

---

### • Arrays e enumerações (dados estruturados)

Em uma linguagem sem tipos, podemos atribuir funções diferentes a elementos específicos de um mesmo array. Pawn suporta constantes enumeradas com uma extensão que simula parte da funcionalidade das “structs” ou “records” de outras linguagens.

O exemplo a seguir é maior do que os anteriores e demonstra outros recursos, como variáveis globais e parâmetros nomeados.

```c

/*  Priority  queue  (for  simple  text  strings)  */

enum  message
{
    text[40  char],
    priority
}

main()
{
    new  msg[message]

    /*  insert  a  few  items  (read  from  console  input)  */

    printf  "Please  insert  a  few  messages  and  their  priorities;  \
        end  with  an  empty  string\n"
    for  (  ;;  )
    {
        printf  "Message:    "
        getstring  .string  =  msg[text],  .maxlength  =  40,  .pack  =  true
        if  (strlen(msg[text])  ==  0)
            break
        printf  "Priority:  "
        msg[priority]  =  getvalue()
        if  (!insert(msg))
        {
            printf  "Queue  is  full,  cannot  insert  more  items\n"
            break
        }
    }
    /*  now  print  the  messages  extracted  from  the  queue  */
    printf  "\nContents  of  the  queue:\n"
    while  (extract(msg))
        printf  "[%d]  %s\n",  msg[priority],  msg[text]
}

const  queuesize  =  10
new  queue[queuesize][message]
new  queueitems  =  0
insert(const  item[message])
{
    /*  check  if  the  queue  can  hold  one  more  message  */
    if  (queueitems  ==  queuesize)
        return  false                         /*  queue  is  full  */

    /*  find  the  position  to  insert  it  to  */
    new  pos  =  queueitems                 /*  start  at  the  bottom  */
    while  (pos  >  0  &&  item[priority]  >  queue[pos-1][priority])
        --pos                                        /*  higher  priority:  move  one  position  up  */

    /*  make  place  for  the  item  at  the  insertion  spot  */
    for  (new  i  =  queueitems;  i  >  pos;  --i)
        queue[i]  =  queue[i-1]

    /*  add  the  message  to  the  correct  slot  */
        queue[pos]  =  item
    queueitems++

    return  true
}

extract(item[message])
{
    /*  check  whether  the  queue  has  one  more  message  */
    if  (queueitems  ==  0)
        return  false                         /*  queue  is  empty  */

    /*  copy  the  topmost  item  */
    item  =  queue[0]
    --queueitems

    /*  move  the  queue  one  position  up  */
    for  (new  i  =  0;  i  <  queueitems;  ++i)
        queue[i]  =  queue[i+1]

    return  true
}

```

---

`"for" loop: 113`

`"enum" statement: 101`

`"char" operator: 110`

Near the top of the program listing is the declaration of the enumeration mes-
sage. This enumeration defines two constants: text, which is zero, and pri-
ority, which is 11 (assuming a 32-bit cell). The idea behind an enumeration
is to quickly define a list of symbolic constants without duplicates. By
default, every constant in the list is 1 higher than its predecessor and the very  
first constant in the list is zero. However, you may give an extra increment for a
constant so that the successor has a value of 1 plus that extra increment. The

text constant specifies an extra increment of 40 char. In pawn, char is an
operator, it returns the number of cells needed to
hold a packed string of the

specified number of characters. Assuming a 32-bit cell and a 8-bit character,
10 cells can hold 40 packed characters.

Immediately at the top of function main, a new array variable is declared with
the size of message. The symbol message is the name of the enumeration. It
is also a constant with the value of the last constant in the enumeration list
plus the optional extra increment for that last element. So in this example,
message is 12. That is to say, array msg is declared to hold 12 cells.

Further in main are two loops. The for loop reads strings and priority values
from the console and inserts them in a queue. The while loop below  
that
extracts element by element from the queue and prints the information on the
screen. The point to note, is that the for loop stores both the string and the
priority number (an integer) in the same variable msg; indeed, function main
declares only a single variable. Function getstring stores the message text
that you type starting at array msg[text] while the priority value is stored
(by an assignment a few lines lower) in msg[priority]. The printf function
in the while loop reads the string and the value from those positions as well.

At the same time, the msg array is an entity on itself: it is passed in its
entirety
to function insert. That function, near the end, says “queue[queueitems]

= item”, where item is an array with size message and queue is a  
two-
dimensional array that holds queuesize elements of size message. The decla-
ration of queue and queuesize are just above function insert.

The example implements a “priority queue”. You can insert a number  
of
messages into the queue and when these messages all have the same priority,
they are extracted from the queue in the same order. However, when  
the
messages have different priorities, the one with the highest priority comes out
first. The “intelligence” for this operation is inside function insert: it
first
determines the position of the new message to add, then moves a few messages
one position upward to make space for the new message. Function extract
simply always retrieves the first element of the queue and shifts all remaining
elements down by one position.

Note that both functions insert and extract work on two shared variables,
queue and queueitems. A variable that is declared inside a function,  
like
variable msg in function main can only be accessed from within that function.
A “global variable” is accessible by all functions, and that variable is
declared
outside the scope of any function. Variables must still be declared before they
are used, so main cannot access variables queue and queueitems, but both
insert and extract can.

---

Function extract returns the messages with the highest priority via its func-
tion argument item. That is, it changes its function argument by copying the
first element of the queue array into item. Function insert copies in the other
direction and it does not change its function argument item. In such a case,
it is advised to mark the function argument as “const”. This helps the pawn
parser to both check for errors and to generate better (more compact, quicker) code.

A final remark on this latest sample is the call to getstring in function main:
note how the parameters are attributed with a description. The first param-
eter is labeled “.string”, the second “.maxlength” and the third “.pack”.
Function getstring receives “named parameters” rather than positional pa-
rameters. The order in which named parameters are listed is not important.
Named parameters are convenient in specifying —and deciphering— long pa-
rameter lists.

---

`Named parameters: 74`

### • Bit operations to manipulate ‘‘sets’’

A few algorithms are most easily solved with “set operations”, like
intersection,
union and inversion. In the figure below, for example, we want to design an
algorithm that returns us the points that can be reached from some other point
in a specified maximum number of steps. For example, if we ask it to
return the points that can be reached in two steps starting from B, the algorithm has
to return C, D, E and F, but not G because G takes three steps from B.

Our approach is to keep, for each point in the graph, the set of other points
that it can reach in one step —this is the “next_step” set. We  
also have a “result” set that keeps all points that we have found so far. We start by
setting the result set equal to the next_step set for the departure point. Now
we have in the result set all points that one can reach in one step. Then, for
every point in our result set, we create a union of the result set and the
next_step set for that point. This process is iterated for a specified number of loops.

---

An example may clarify the procedure outlined above. When the departure
point is B, we start by setting the result set to D and E —these are the
points that one can reach from B in one step. Then, we walk through
the result set. The first point that we encounter in the set is D, and we check
what points can be reached from D in one step: these are C and F. So we add
C and F to the result set. We knew that the points that can be reached from
D in one step are C and F, because C and F are in the next_step set for

D. So what we do is to merge the next_step set for point D into the result
set. The merge is called a “union” in set theory. That handles D. The original
result set also contained point E, but the next_step set for E is empty, so
no more point is added. The new result set therefore now contains C, D, E and F.

![img](https://i.ibb.co/m9Dq7x2/image.png)

A set is a general purpose container for elements. The only information that
a set holds of an element is whether it is present in the set or not. The order
of elements in a set is insignificant and a set cannot contain the same element

multiple times. The pawn language does not provide a “set” data type or
operators that work on sets. However, sets with up to 32 elements can be
simulated by bit operations. It takes just one bit to store a “present/absent”
status and a 32-bit cell can therefore maintain the status for 32 set elements
—provided that each element is assigned a unique bit position.

The relation between set operations and bitwise operations is summarized in
the following table. In the table, an upper case letter stands for a set and a
lower case letter for an element from that set.

| concept      | mathematical notation | pawn expression |
| ------------ | --------------------- | --------------- |
| intersection | A ∩ B                 | A & B           |
| union        | A ∪ B                 | A I B           |
| complement   | A                     | ~A              |
| empty set    | ε                     | 0               |
| membership   | x ∈ A                 | (1 \<< x ) & A  |

---

To test for membership —that is, to query whether a set holds a particular
element, create a set with just one element and take the intersection. If the
result is 0 (the empty set) the element is not in the set. Bit numbering starts
typically at zero; the lowest bit is bit 0 and the highest bit in a 32-bit cell
is bit 31. To make a cell with only bit 7 set, shift the value 1 left by seven
—or in a pawn expression: “1 \<< 7”.

Below is the program that implements the algorithm described earlier to find
all points that can be reached from a specific departure in a given number of
steps. The algorithm is completely in the findtargets function.

Listing: set.p

```c

/*  Set  operations,  using  bit  arithmetic  */

main()
{
    enum  (<<=  1)  {  A  =  1,  B,  C,  D,  E,  F,  G  }
    new  nextstep[]  =

        {  C  |  E,       /*  A  can  reach  C  and  E  */
           D  |  E,          /*  B    "        "      D  and  E  */
           G,                /*  C    "        "      G  */
           C  |  F,          /*  D    "        "      C  and  F  */
           0,                /*  E    "        "      none  */
           0,                /*  F    "        "      none  */
           E  |  F,          /*  G    "        "      E  and  F  */
        }
    #pragma  unused  A,  B

    print  "The  departure  point:  "
    new  source  =  clamp(  .value  =  toupper(getchar())  -  ’A’,
                .min  =  0,
                .max  =  sizeof  nextstep  -  1
                 )
    print  "\nThe  number  of  steps:  "
    new  steps  =  getvalue()

    /*  make  the  set  */
    new  result  =  findtargets(source,  steps,  nextstep)
    printf  "The  points  reachable  from  %c  in  %d  steps:  ",  source+’A’,
    steps
    for  (new  i  =  0;  i  <  sizeof  nextstep;  i++)
        if  (result  &  1  <<  i)
            printf  "%c  ",  i  +  ’A’
}

findtargets(source,  steps,  nextstep[],  numpoints  =  sizeof  nextstep)
{
    new  result  =  0
    new  addedpoints  =  nextstep[source]
    while  (steps--  >  0  &&  result  !=  addedpoints)
    {
        result  =  addedpoints
        for  (new  i  =  0;  i  <  numpoints;  i++)
            if  (result  &  1  <<  i)
                addedpoints  |=  nextstep[i]
    }
    return  result
}

```

---

The enum statement just below the header of the main function declares the
constants for the nodes A to G, but with a twist. Usually, the enum starts
counting from zero; here, the value of the first constant, A, is explicitly set to

1.  More noteworthy is the expression “(\<\<= 1)” between the enum keyword
    and the opening brace that starts the constant list: it specifies a “bit
    shifting” increment. By default, every constant in an enum list gets a value that is
    1 above its predecessor, but you can specify every successive constant
    in an enumeration to have a value that is:

_its predecessor incremented by any value (not just 1) —e.g., “(+= 5)”;_

_its predecessor multiplied by any value —e.g., “(_= 3)”;\_

_its predecessor bit-shifted to the left by any value —e.g., “(\<\<= 1)”;_

Note that, in binary arithmetic, shifting left by one bit amounts to the same
as multiplying by two, meaning that `(/*= 2)` and `(<<= 1)` do the same thing.

When working with sets, a typical task that pops up is to determine the number
of elements in the set. A straightforward function that does this is below:

Listing: simple bitcount function

```c

bitcount(set)
{
    new  count  =  0
    for  (new  i  =  0;  i  <  cellbits;  i++)
        if  (set  &  (1  <<  i))
            count++
    return  count
}

```

With a cell size of 32 bits, this function’s loop iterates 32 times to check for
a single bit at each iteration. With a bit of binary arithmetic magic, we can
reduce it to loop only for the number of bits that are “set”.  
That is, the following function iterates only once if the input value has only one bit set:

Listing: improved bitcount function

```c

bitcount(set)
{
    new  count  =  0
    if  (set)
        do
            count++
        while  ((set  =  set  &  (set  -  1)))
    return  count
}

```

---

`“enum” statement: 101`

`“cellbits” constant: 102`

---

### • A simple RPN calculator

The common mathematical notation, with expressions like “26 3 (5 + 2)”,
is known as the algebraic notation. It is a compact notation and  
we have
grown accustomed to it. pawn and by far most other programming languages
use the algebraic notation for their programming expressions. The algebraic

notation does have a few disadvantages, though. For instance, it occasionally
exige que deixemos explícita a ordem das operações com parênteses. A expressão no início desta seção poderia ser reescrita sem parênteses, mas à custa de quase dobrar o tamanho. Na prática, complementamos a notação algébrica com regras de precedência que dizem, por exemplo, que multiplicação vem antes de adição e subtração.∗ Essas regras reduzem muito a necessidade de parênteses, mas não a eliminam. Pior: quando o número de operadores cresce, lembrar a hierarquia de precedência e o nível de cada operador torna-se difícil —motivo pelo qual linguagens ricas em operadores, como APL, abandonam precedência e usam outra abordagem.

Por volta de 1920, o matemático polonês Jan Łukasiewicz demonstrou que, colocando os operadores antes dos operandos em vez de entre eles, a precedência se tornava redundante e parênteses deixavam de ser necessários. Essa notação ficou conhecida como “notação polonesa”.† Mais tarde, Charles Hamblin sugeriu posicionar os operadores **após** os operandos, resultando na “notação polonesa reversa” (RPN).

---

###### ∗ These rules are often summarized in a mnemonic like “Please Excuse My Dear Aunt Sally” (Parentheses, Exponentiation, Multiplication, Division, Addition, Subtraction)

###### \* Polish Notation is completely unrelated to “Hungarian Notation” —which is just the habit of adding “type” or “purpose” identification warts to names of variables or functions

---

`Algebraic notation is also called “infix” notation`

`Reverse Polish Notation is also called “postfix” notation`

---

O benefício dessa inversão é que os operadores aparecem na mesma ordem em que devem ser executados: ao lê-los da esquerda para a direita, realizamos as operações na mesma sequência. A expressão algébrica desta seção ficaria, em RPN:

`26 3 5 2 + × −`

Observando apenas os operadores, temos: primeiro uma soma, depois uma multiplicação e, por fim, uma subtração. Os operandos de cada operador são lidos da direita para a esquerda: os operandos de `+` são 5 e 2; os de `×` são o resultado da soma anterior e o valor 3; e assim por diante.

É útil imaginar os valores sendo empilhados, com os operadores removendo um ou mais elementos do topo, efetuando a operação e devolvendo o resultado no topo. Ao percorrer a expressão em RPN, empilhamos 26, 3, 5 e 2 nessa ordem. O operador `+` remove 5 e 2 e empilha a soma, resultando em “26 3 7”. O operador `×` remove 3 e 7 e empilha o produto, deixando “26 21”. Por fim, o operador `−` subtrai 21 de 26 e empilha o valor único 5 —resultado final da expressão.

RPN se popularizou porque é fácil de entender e de implementar (especialmente em calculadoras antigas). Ela também abre espaço para operadores com mais de dois operandos (como integrações) ou com mais de um resultado (como conversões entre coordenadas polares e cartesianas).

Segue o programa principal de uma calculadora em notação polonesa reversa:

Listing: rpn.p

```c

/*  a  simple  RPN  calculator  */
#include  strtok
#include  stack
#include  rpnparse

main()
{
    print  "Type  an  expression  in  Reverse  Polish  Notation:  "
    new  string[100]
    getstring  string,  sizeof  string
    rpncalc  string
}

```

---

O programa principal em si é bem curto; ele apenas inclui o código de três arquivos auxiliares, cada um responsável por algumas funções que, combinadas, implementam a calculadora. Em programas maiores é comum distribuir a lógica em vários arquivos para facilitar a manutenção.

`main` mostra um prompt e chama a nativa `getstring` para ler a expressão. Em seguida, invoca `rpncalc`, que faz o trabalho pesado. A implementação de `rpncalc` está em `rpnparse.inc`, reproduzida abaixo:

Listing: rpnparse.inc

````c

/*  main  rpn  parser  and  lexical  analysis,  part  of  the  RPN  calculator  */
#include  <rational>
#include  <string>

enum  token
{
    t_type,                       /*  operator  or  token  type  */
    Rational:  t_value,           /*  value,  if  t_type  is  "Number"  */
    t_word[20],                   /*  raw  string  */

}

const  Number     =  ’0’
const  EndOfExpr  =  ’#’

rpncalc(const  string[])
{
    new  index
    new  field[token]
    for  (  ;;  )
    {
        field  =  gettoken(string,  index)
        switch  (field[t_type])
        {
            case  Number:
                push  field[t_value]
            case  ’+’:
                push  pop()  +  pop()
            case  ’-’:
                push  -  pop()  +  pop()
            case  ’*’:
                push  pop()  *  pop()
            case  ’/’,  ’:’:
                push  1.0  /  pop()  *  pop()
            case  EndOfExpr:
                break      /*  exit  "for"  loop  */
            default:
                printf  "Unknown  operator  ’%s’\n",  field[t_word]
        }
    }
    printf  "Result  =  %r\n",  pop()
    if  (clearstack())
        print  "Stack  not  empty\n",  red
}

gettoken(const  string[],  &index)
{
    /*  first  get  the  next  "word"  from  the  string  */
    new  word[20]
    word  =  strtok(string,  index)

    /*  then  parse  it  */
    new  field[token]
    field[t_word]  =  word
    if  (strlen(word)  ==  0)
    {
        field[t_type]  =  EndOfExpr  /*  special  "stop"  symbol  */
        field[t_value]  =  0
    }
    else  if  (’0’  <=  word[0]  <=  ’9’)
    {
        field[t_type]  =  Number
        field[t_value]  =  rationalstr(word)
    }
    else
    {
        field[t_type]  =  word[0]
        field[t_value]  =  0
    }
    return  field

}

```***

Essa calculadora usa suporte a números racionais, por isso `rpnparse.inc` inclui o arquivo `rational`. Quase todas as operações envolvendo racionais ficam escondidas na aritmética; as únicas referências diretas são o especificador de formato `%r` no `printf` ao final de `rpncalc` e a chamada `rationalstr` dentro de `gettoken`.

O primeiro ponto curioso em `rpnparse.inc` é a declaração `enum`, na qual um elemento recebe uma tag (`t_value`) e outro define um tamanho (`t_word`). A função `rpncalc` declara a variável `field` como um array cujo tamanho é o símbolo dessa enumeração. Na prática, isso faz mais do que criar um array de 22 células:

- O “índice” do array passa a ter a tag `token:`. Isso permite indexá-lo usando qualquer elemento da enumeração, mas impede o uso de valores com outras tags. Em outras palavras, `field[t_type]` é válido, enquanto `field[1]` gera diagnóstico.
- A tag da enumeração prevalece sobre a eventual tag do array. `field` em si não tem tag, mas `field[t_value]` recebe `Rational:`, já que o elemento `t_value` foi declarado assim. Isso permite criar arrays cujos elementos têm tags diferentes entre si.
- Quando um elemento da enumeração define um tamanho, a posição correspondente no array passa a ser tratada como um subarray. Em `rpncalc`, `field[t_type]` é uma célula, `field[t_value]` é outra, mas `field[t_word]` é um array unidimensional com 20 células. É por isso que a linha

    printf  "Unknown  operator  ’%s’\n",  field[t_word]

where the format code %s expects a string —a zero-terminated array.





`Rational numbers, see also the “Celsius to Fahrenheit” example on page page 16`

`“enum” statement: 101`

`Another example of an index tag: page 68`



// came to here




***

If you know C/C⁺⁺  or Java, you may want to look at the switch statement.
The switch statement differs in a number of ways from the other languages
that provide it. The cases are not fall-through, for example, which in
turn means that the break statement for the case EndOfExpr breaks out of the
enclosing loop, instead of out of the switch.

On the top of the for loop in function rpncalc, you will find the
instruction “field = gettoken(string, index)”. As already exemplified in the
wcount.p (“word count”) program on page 19, functions may return arrays.
It gets more interesting for a similar line in function gettoken:

field[t_word] = word

where word is an array of 20 cells and field is an array of 22 cells.
However, as the t_word enumeration field is declared as having a size of 20 cells,
“field[t_word]” is considered a sub-array of 20 cells, precisely matching the
array size of word.

Listing: strtok.inc

```c

/* extract words from a string (words must be separated by white space) */
#include <string>

strtok(const string[], &index)
{
    new length = strlen(string)

    /* skip leading white space */
    while (index < length && string[index] <= ’ ’)
        index++

    /* store the word letter for letter */
    new offset = index     /* save start position of token */
    new result[20]         /* string to store the word in */
    while (index < length
        && string[index] > ’ ’
        && index - offset < sizeof result - 1)
        {
            result[index - offset] = string[index]
            index++
        }
    result[index - offset] = EOS /* zero-terminate the string */

    return result
}

````

---

`“switch” statement: page 115`

---

Function strtok is the same as the one used in the wcount.p example. It is
implemented in a separate file for the rpn calculator program. Note that the
strtok function as it is implemented here can only handle words with up to 19

characters —the 20th character is the zero terminator. A truly general purpose
re-usable implementation of an strtok function would pass the destination
array as a parameter, so that it could handle words of any size. Supporting
both packed and unpack strings would also be a useful feature of a  
general purpose function.

When discussing the merits of Reverse Polish Notation, I mentioned that a
stack is both an aid in “visualizing” the algorithm as well as a  
convenient method to implement an rpn parser. This example rpn calculator, uses
a stack with the ubiquitous functions push and pop. For error checking  
and resetting the stack, there is a third function that clears the stack.

Listing: stack.inc

```c

/* stack functions, part of the RPN calculator */
#include <rational>

static Rational: stack[50]
static stackidx = 0

push(Rational: value)
{
    assert stackidx < sizeof stack
    stack[stackidx++] = value
}

Rational: pop()
{
    assert stackidx > 0
    return stack[--stackidx]
}

clearstack()
{
    assert stackidx >= 0
    if (stackidx == 0)
        return false
    stackidx = 0
    return true
}

```

---

`wcount.p: page 19`

---

The file stack.inc includes the file rational again. This is technically not
necessary (rpnparse.inc already included the definitions for rational number
support), but it does not do any harm either and, for the sake of code re-use,
it is better to make any file include the definitions of the libraries that it
depends on.

Notice how the two global variables stack and stackidx are declared  
as “static” variables; using the keyword static instead of new. Doing this makes
the global variables “visible” in that file only. For all other files in a  
larger project, the symbols stack and stackidx are invisible and they cannot (ac-
cidentally) modify the variables. It also allows the other modules to declare
their own private variables with these names, so it avoids name clashing.

Embora a calculadora RPN continue sendo um programa pequeno, estruturamos o código como se fosse maior para demonstrar vários elementos da linguagem. Em um cenário real, poderíamos implementá-la de maneira mais compacta.

### • Event-driven programming

Todos os exemplos deste capítulo até aqui seguiram um modelo “linear”: começam em `main` e o código decide o que fazer e quando pedir entrada. Esse modelo é fácil de entender e se encaixa bem na maioria das linguagens, mas não atende a muitas situações do mundo real. Frequentemente, o programa não pode simplesmente processar dados e solicitar entrada apenas quando for conveniente; é o usuário quem escolhe quando interagir, e o aplicativo deve estar pronto para responder rapidamente, independentemente do que estiver fazendo.

Isso sugere que o programa deveria ser capaz de interromper o trabalho atual, realizar outra atividade e depois retomar a tarefa original. Nas primeiras implementações, isso era feito com sistemas multitarefa: uma thread cuidava das tarefas em segundo plano e outra ficava em loop aguardando entrada do usuário. Porém, essa solução é pesada. Um modelo mais leve para obter responsividade é o chamado “programação dirigida a eventos”.

---

Nesse modelo, o programa divide tarefas longas em blocos curtos e, entre eles, fica disponível para processar eventos. Em vez de ficar “pollando” entradas, a aplicação hospedeira (ou outro subsistema) chama uma função associada ao evento —mas apenas quando ele ocorre.

O evento mais comum é “entrada”. Porém, entradas não vêm apenas de usuários: podem chegar pacotes por cabos seriais, redes, temporizadores internos e outros dispositivos conectados. Muitos desses dispositivos simplesmente enviam dados; o recebimento é um evento, como uma tecla pressionada. Se você não tratar o evento, talvez alguns fiquem em uma fila interna, mas, quando ela enche, os demais são descartados.

Pawn oferece suporte direto a esse modelo porque permite vários pontos de entrada. Em um programa linear, apenas `main` é o ponto inicial; em um programa dirigido a eventos, há uma função de entrada para cada evento capturado. Comparado ao modelo linear, esse estilo parece “de baixo para cima”: em vez de o programa chamar a aplicação hospedeira para decidir o próximo passo, é o host que invoca o script quando necessário, exigindo respostas rápidas.

Como pawn não especifica uma biblioteca padrão, não há garantia de que determinada implementação forneça funções como `printf` ou `getvalue`. Embora se recomende que todas ofereçam ao menos uma interface mínima de console/terminal com essas funções, a disponibilidade depende da implementação.

dependent. The same holds for the public functions —the entry points for a
script. It is implementation-dependent which public functions a host applica-
tion supports. The script in this section may therefore not run on your platform
(even if all previous scripts ran fine). The tools in the standard
distribution of
the pawn system support all scripts developed in this manual, provided that

your operating system or environment supports standard terminal functions

such as setting the cursor position.

An early programming language that was developed solely for teaching the
concepts of programming to children was “Logo”. This dialect of LISP made
programming visual by having a small robot, the “turtle”, drive over the floor
under control of a simple program. This concept was then copied to moving
a (usually triangular) cursor of the computer display, again under control of a
program. A novelty was that the turtle now left a trail behind it, allowing you
to create drawings by properly programming the turtle —it became known as turtle graphics.

---

`Public functions: 83`

---

The term “turtle graphics” was also used for drawing inter-
actively with the arrow keys on the keyboard and a “turtle” for the current
position. This method of drawing pictures on the computer was briefly popular
before the advent of the mouse.

Listing: turtle.p

```c

@keypressed(key)
{
    /_ get current position */
    new x, y
    wherexy x, y

    /_ determine how the update the current position */
    switch (key)
    {
        case ’u’: y-- /_ up */
        case ’d’: y++ /_ down */
        case ’l’: x-- /_ left */
        case ’r’: x++ /_ right */
        case ’\e’: exit /_ Escape = exit */
    }

    /_ adjust the cursor position and draw something */
    moveturtle x, y
}

moveturtle(x, y)
{
    gotoxy x, y
    print ’/*’
    gotoxy x, y
}

```

The entry point of the above program is @keypressed —it is called on a
key press. If you run the program and do not type any key, the  
function @keypressed never runs; if you type ten keys, @keypressed runs ten times.
Contrast this behaviour with main: function main runs immediately after you
start the script and it runs only once.

It is still allowed to add a main function to an event-driven program: the main
function will then serve for one-time initialization. A simple addition to this
example program is to add a main function, in order to clear the  
console/
terminal window on entry and perhaps set the initial position of the “turtle”
to the centre.

Support for function keys and other special keys (e.g. the arrow keys) is highly
system-dependent. On ANSI terminals, these keys produce different codes
than in a Windows “DOS box”.

---

In the spirit of keeping the example program
portable, I have used common letters (“u” for up, “l” for left, etc.). This
does not mean, however, that special keys are beyond pawn’s capabilities.

In the “turtle” script, the “Escape” key terminates the host application through
the instruction exit. For a simple pawn run-time host, this will indeed work.
With host applications where the script is an add-on, or  
host-applications

that are embedded in a device, the script usually cannot terminate the host application.

### • Múltiplos eventos

As vantagens do modelo dirigido a eventos para construir programas reativos ficam claras quando há diversos eventos. Na prática, ele só faz sentido se houver mais de um ponto de entrada; se seu script lida com apenas um evento, um loop de polling seria suficiente. Quanto mais eventos precisamos tratar, mais difícil fica usar o modelo linear. O script a seguir implementa um chat bem simples com dois eventos: envio e recebimento. Ele permite que usuários em rede (ou outro meio) troquem mensagens de uma linha.

O script depende de a aplicação hospedeira fornecer funções nativas/públicas para enviar e receber datagramas e reagir a teclas digitadas. O método de envio (serial, TCP/IP etc.) fica a cargo do host. As ferramentas da distribuição padrão do pawn usam TCP/IP e permitem um modo de “broadcast” para que mais de duas pessoas conversem.

---

Listing: chat.p

```c

#include <datagram>

@receivestring(const message[], const source[])
printf "[%s] says: %s\n", source, message

@keypressed(key)
{
    static string[100 char]
    static index

    if (key == ’\e’)
        exit /* quit on ’Esc’ key */

    echo key

    if (key == ’\r’ || key == ’\n’ || index char == sizeof string)
    {
        string{index} = ’\0’ /* terminate string */
        sendstring string

        index = 0
        string[index] = ’\0’
    }
    else
        string{index++} = key
}

echo(key)
{
    new string[2 char] = { 0 }
    string{0} = key == ’\r’ ? ’\n’ : key
    printf string
}

```

Grande parte do script se ocupa de juntar os caracteres digitados em uma string e enviá-la quando o usuário pressiona Enter. A tecla Escape encerra o programa. A função `echo` gera um feedback visual do que é digitado: monta uma string com terminador zero a partir da tecla e a imprime.

Apesar da simplicidade, o script demonstra uma característica interessante: não há ordem rígida para enviar ou receber mensagens —não existe o esquema pergunta–resposta em que cada host “espera a vez”. Uma mensagem pode chegar enquanto o usuário ainda está digitando.∗

### • Programação com estados

Em um programa dirigido a eventos, cada evento chega isoladamente e recebe uma resposta isolada. Às vezes, porém, um evento faz parte de um fluxo sequencial que deve ser tratado na ordem correta. Protocolos de transferência de dados em linhas seriais são um exemplo: cada evento pode carregar um comando, um pedaço de arquivo, um reconhecimento ou outro sinal do protocolo.

---

###### ∗ As this script makes no attempt to separate received messages from typed messages (for example, in two different scrollable regions), the terminal/console will look confusing when this happens. With an improved user-interface, this simple script could indeed be a nice message-base chat program

---

Para que esse fluxo faça sentido, o programa precisa seguir um protocolo rigoroso de “handshake”. Isso significa que ele deve reagir a cada evento considerando o histórico recente de eventos anteriores e as respostas enviadas. Ou seja, o tratamento de um evento pode definir a “condição” ou “contexto” em que os próximos serão processados.

Uma abstração simples e eficaz para construir sistemas reativos que seguem protocolos parcialmente sequenciais é o autômato ou máquina de estados. Como o número de estados costuma ser finito, falamos em Máquinas de Estados Finitos (MEF). No autômato, o contexto do evento é o estado atual. Um mesmo evento pode ser tratado de maneiras diferentes dependendo desse estado e, em resposta, o autômato pode mudar para outro estado —essa mudança é chamada transição.

Autômatos são comuns tanto em software quanto em dispositivos mecânicos (o tear de Jacquard é um exemplo clássico). Com um número finito de estados, são determinísticos (comportamento previsível) e fáceis de implementar a partir de um diagrama de estados.

![State diagram](https://i.ibb.co/k3kWVvy/image.png)

In a state diagram, the states are usually represented as circles or  
rounded rectangles and the arrows represent the transitions. As transitions are
the response of the automaton to events, an arrow may also be seen as an event “that does something”.

---

An event/transition that is not defined in a particular
state is assumed to have no effect —it is silently ignored. A filled dot
represents the entry state, which your program (or the host application) must set in start-
up. It is common to omit in a state diagram all event arrows that drop back
into the same state, but here I have chosen to make the response to all events explicit.

O diagrama acima corresponde à análise de comentários iniciados por `/*` e terminados em `*/`. Há estados para texto normal, para texto dentro do comentário e dois estados intermediários para entrada e saída. O autômato foi pensado para processar caracteres digitados pelo usuário, então reage apenas a eventos de tecla. Na prática há um único evento (“tecla pressionada”); as transições dependem do parâmetro (a própria tecla).

Pawn oferece suporte nativo a autômatos e estados. Cada função∗ pode ter um ou mais estados associados. A linguagem também permite múltiplos autômatos, e cada estado pertence a um autômato específico.

O script abaixo implementa o diagrama descrito (usando um autômato anônimo). Para destacar o texto normal dos comentários, cada tipo recebe uma cor diferente.

Listing: comment.p

```c

/* parse C comments interactively, using events and a state machine */

main()
    state plain

@keypressed(key) <plain>
{
    state (key == ’/’) slash
    if (key != ’/’)
        echo key
}

@keypressed(key) <slash>
{
    state (key != ’/’) plain
    state (key == ’/*’) comment
    echo ’/’    /* print ’/’ held back from previous state */
    if (key != ’/’)
        echo key
}

@keypressed(key) <comment>
{
    echo key
    state (key == ’/*’) star
}

@keypressed(key) <star>
{
    echo key
    state (key != ’/*’) comment
    state (key == ’/’) plain
}

echo(key) <plain, slash>
    printchar key, yellow

echo(key) <comment, star>
    printchar key, green

printchar(ch, colour)
{
    setattr .foreground = colour
    printf "%c", ch
}

```

---

###### ∗ With the exception of “native functions” and user-defined operators.

---

`main` define o estado inicial como `plain` e termina; toda a lógica é dirigida a eventos. Quando uma tecla chega no estado `plain`, verificamos se é uma barra e, dependendo disso, imprimimos ou não o caractere. A interação entre os estados `plain` e `slash` mostra uma característica típica dos autômatos: é preciso decidir como reagir no momento em que o evento acontece, sem “olhar à frente” nem desfazer respostas anteriores. Em sistemas dirigidos a eventos, geralmente não sabemos qual será o próximo evento nem quando virá, e o que fizermos agora dificilmente poderá ser anulado depois.

Neste caso, quando uma barra chega, ela **pode** indicar o início de um comentário (`/*`), mas não necessariamente. Não dá para decidir de imediato em que cor imprimir o caractere, então o mantemos “em espera”. Note que não declaramos nenhuma variável global para isso; na verdade, além dos parâmetros, não há variáveis declaradas. A informação de que há um caractere pendente está implícita no estado do autômato.

Como mostra o script, mudanças de estado podem ser condicionais. A condição é opcional, e também podemos usar `if/else` tradicionais para alterá-los.

A dependência de estado não se restringe às funções de evento. Outras funções podem declarar estados, como `echo` faz. Quando várias situações compartilham a mesma implementação, basta escrever uma função e listar todos os estados aplicáveis. Em `echo` existem duas versões para cobrir os quatro estados.†

Um autômato deve estar preparado para tratar todos os eventos em qualquer estado. Normalmente ele não controla quais eventos chegam nem quando, portanto ignorá-los em certo estado pode levar a falhas. Muitas vezes alguns eventos fazem sentido somente em poucos estados e, nos demais, deveriam disparar erros ou uma rotina de “reset”. Para evitar listar manualmente todos os estados inválidos, podemos omitir o conteúdo entre os colchetes angulares: assim, a função atende a todos os estados que não têm implementação específica. Por exemplo, poderíamos declarar `echo(key) <>` em vez de listar explicitamente cada estado (mas apenas em uma das implementações).

Existe um autômato anônimo predefinido. Se o programa contiver mais de um, precisamos mencionar seu nome tanto no qualificador quanto no comando `state`. Basta colocar o nome do autômato antes do estado, separados por `:` —por exemplo, `parser:slash` refere-se ao estado `slash` do autômato `parser`. Uma função só pode pertencer a um autômato; podemos reutilizar a mesma implementação em vários estados desse autômato, mas não em estados de autômatos diferentes.

### • Funções `entry` e teoria de autômatos

As máquinas de estados e a própria teoria dos autômatos têm origem no design mecânico e em circuitos elétricos/pneumáticos de comutação (com relés, não transistores). Exemplos típicos são aceitadores de moedas, semáforos e centrais de comunicação. Nesses sistemas, robustez e previsibilidade são fundamentais, e descobriu-se que esses objetivos são alcançados com mais facilidade quando as ações (saídas) estão ligadas aos estados em vez dos eventos (entradas).

---

###### \* A function that has the same implementation for all states, does not need a state classifierat all —see printchar.

---

![pcl](https://i.ibb.co/PYnBGS9/image.png)

###### Figure 1: Pedestrian crossing lights

---

Ao entrar em um estado, opcionalmente realizamos alguma ação; os eventos apenas provocam a mudança de estado, mas não executam operações por conta própria.

Em um semáforo para pedestres, as luzes dos veículos e dos pedestres precisam ficar sincronizadas. Certamente, exibir verde para os carros e “andar” para os pedestres seria desastroso —o mesmo vale para amarelo/andar. Restam quatro combinações possíveis. O diagrama a seguir descreve o processo: tudo começa com um botão e é controlado por temporizadores.

![pcl](https://i.ibb.co/9wNR3ry/image.png)

When the state red/walk times out, the state cannot immediately go back to
green/wait, because the pedestrians that are busy crossing the road at  
that moment need some time to clear the road —the state red/wait
allows for this.

---

Para fins de demonstração, este semáforo tem um extra: se o pedestre aperta o botão enquanto a luz já está vermelha para os carros, o tempo de travessia é prolongado. Ou seja, se estamos em `red/wait` e alguém pressiona o botão, voltamos para `red/walk`. A caixa que envolve esses estados no diagrama é apenas uma convenção visual; poderíamos ter desenhado duas setas voltando a `red/walk`. O código abaixo segue a mesma convenção.

Na implementação em pawn, as funções de evento sempre têm uma única instrução: ou mudam de estado ou não fazem nada. Os eventos que não provocam mudanças não aparecem no diagrama, mas precisam ser tratados no script —daí as funções “fallback” vazias.

A saída (neste caso, apenas mensagens no console) é feita nas funções especiais `entry`. Podemos vê-las como “main” de cada estado: são chamadas automaticamente quando o estado correspondente é ativado. Note que elas também são executadas em reentradas, ou seja, quando mudamos para o mesmo estado em que já estávamos.

Listing: traffic.p

```c

/* traffic light synchronizer, using states in an event-driven model */
#include <time>

main()                     state green_wait

@keypressed(key) <green_wait>         state yellow_wait
@keypressed(key) <red_walk, red_wait>     state red_walk
@keypressed(key) <>             {} /* fallback */

@timer() <yellow_wait>            state red_walk
@timer() <red_walk>             state red_wait
@timer() <red_wait>             state green_wait
@timer() <>                 {} /* fallback */

entry() <green_wait>
    print "Green / Don’t walk\n"

entry() <yellow_wait>
{
    print "Yellow / Don’t walk\n"
    settimer 2000
}

entry() <red_walk>
{
    print "Red / Walk\n"
    settimer 5000
}

entry() <red_wait>
{
    print "Red / Don’t walk\n"
    settimer 2000
}

```

---

Este exemplo depende de mais um recurso da aplicação hospedeira: além de `@keypressed`, precisamos de um evento `@timer` configurável. Por isso o script inclui o arquivo `time.inc`.

As funções de evento com mudanças de estado estão no topo do arquivo, uma por linha, lembrando uma tabela. Neste caso são todas incondicionais, mas poderíamos adicionar condições. As funções `entry` vêm depois.

Existem duas transições para `red_walk` (ou três, se considerarmos que uma função atende mais de um estado): provenientes de `yellow_wait` e da combinação `red_walk/red_wait`. Todas passam pela mesma função `entry`, reduzindo código.

Na teoria, um autômato que associa saídas às entradas nos estados (como este semáforo) é um autômato de Moore; quando a saída está ligada aos eventos/transições dependentes de estado, falamos em autômato de Mealy. O analisador de comentários mostrado antes é típico Mealy. Os dois modelos são equivalentes: podemos converter um Mealy em Moore e vice-versa, embora o Moore, às vezes, precise de mais estados para o mesmo comportamento. Na prática, costuma-se misturar: um design geral no estilo Moore com alguns estados Mealy quando isso economiza estados.

• State variables

The previous example was crafted to demonstrate a few properties of  
state programming with pawn, but its model of a pedestrian crossing light is not

very realistic. The first thing that is lacking is a degree of fairness : pedestrians
should not be able to block car traffic indefinitly. The car traffic should
see a green light for a period of some minimum duration after pedestrians have had
their time slot for crossing the road. Secondly, many traffic lights have a kind
of remote control ability, so that emergency traffic (ambulance, firetruck, . . . )
can force green lights on their path. A well-known example of such remote

control is the mirt system (Mobile Infra-Red Transmitter) but not de facto
standard exists —the Netherlands use a radiographic system called vetag for
instance.

---

The new state diagram for the pedestrian crossing light has two more states,
but more importantly: it needs to save data across events and share it between
states. When the pedestrian presses the button while the state is red_wait, we
neither want to react on the button immediately (this was our “fairness rule”),
nor the button to be ignored or “forgotten”. In other words, we move to the
state green_wait_interim regardless of the button press, but memorize the
press for a decision made at the point of leaving state green_wait_interim.

Automatons excel in modelling control flow in reactive/interactive
systems, but data flow has traditionally been a weak point. To see why, consider that
each event is handled individually by a function and that the local variables in
that function disappear when the function returns. Local variables can, hence,
not be used to pass data from one event to the next. Global variables, while
providing a work-around, have drawbacks: global scope and and  
“eternal” lifespan. If a variable is used only in the event handlers of a single state,
it is desirable to hide it from the other states, in order to protect it from
accidental modification. Likewise, shortening the lifespan to the state(s) that the
variable is active in, reduces the memory footprint. “State variables” provide
this mix of variable scope and variable lifespan that are tied to a series of states,
rather than to functions or modules.

pawn enriches the standard finite state machine (or automaton) with variables
that are declared with a state classifier. These variables are only
accessible from the listed states and the memory these variable hold may be  
reused by other purposes while the automaton is in a different state (different than
the ones listed). Apart from the state classifier, the declaration of a state

variable is similar to that of a global variable. The declaration of the
variable button_memo in the next listing illustrates the concept.

---

Listing: traffic2.p

```c

/* a more realistic traffic light synchronizer, including an
 * "override" for emergency vehicles
 */

#include <time>

main()
    state green_wait_interim

new bool: button_memo <red_wait, green_wait_interim, yellow_wait>

@keypressed(key)
{
    switch (key)
    {
        case ’ ’: button_press
        case ’/*’: mirt_detect
    }
}

button_press() <green_wait>
    state yellow_wait

button_press() <red_wait, green_wait_interim>
    button_memo = true

button_press() <>         /* fallback */
    {}

mirt_detect()
    state mirt_override

@timer() <yellow_wait>
    state red_walk

@timer() <red_walk>
    state red_wait

@timer() <red_wait>
    state green_wait_interim

@timer() <green_wait_interim>
{
    state (!button_memo) green_wait
    state (button_memo) yellow_wait
}

@timer() <mirt_override>
    state green_wait

@timer() <>             /* fallback */
    {}

entry() <green_wait_interim>
{
    print "Green / Don’t walk\n"
    settimer 5000
}

entry() <yellow_wait>
{
    print "Yellow / Don’t walk\n"
    button_memo = false
    settimer 2000
}

entry() <red_walk>
{
    print "Red / Walk\n"
    settimer 5000
}

entry() <red_wait>
{
    print "Red / Don’t walk\n"
    settimer 2000
}

entry() <mirt_override>
{
    print "Green / Don’t walk\n"
    settimer 5000
}

```

---

If a pedestrian pushes the button during mirt activity, that button press
is
forgotten. Unless emergencies are a frequent occurence, this is  
probably a
minor nuisance; and it is easy to fix, too.

• State programming wrap-up

States are ubiquitous, even if we do not always recognize them as such. The
concept of finite state machines has traditionally been applied mostly to pro-

grams mimicking mechanical apparatus and software that implements commu-
nication protocols. With the appearance of event-driven windowing systems,
state machines now also appear in the GUI design of desktop programs. States
Esses casos abundam em aplicações web, porque o navegador e o host de scripts têm pouca integração; ainda assim, a máquina de estados nesses contextos costuma ser implementada “no improviso”.

Também é possível enxergar estados em problemas e charadas conhecidas. No enigma do homem que precisa atravessar um rio levando um repolho, uma ovelha e um lobo∗, os estados são óbvios —o desafio é evitar os proibidos. Mas, agora que estamos identificando estados em todo lugar, o cuidado é não exagerar.

---

No segundo exemplo do semáforo para pedestres (página 47), usei uma variável (`button_memo`) para guardar um critério que seria usado mais tarde. Seria possível eliminar essa variável criando dois estados extras, como “red-wait & botão pressionado” e “green-wait-interim & botão pressionado”. Porém, isso deixaria o diagrama e a implementação mais complexos. Em geral, o número de estados deve ser mantido pequeno.

Embora autômatos sejam uma boa abstração para sistemas reativos, construir o diagrama correto não é trivial. Com frequência desenhamos primeiro o “cenário perfeito” e vamos adicionando exceções conforme aparecem, o que aumenta o risco de esquecer combinações de estado + evento. Já vi dois diagramas de analisador de comentários (como o da página 40) em livros diferentes que falhavam exatamente por isso. Minha sugestão é focar nos eventos e nas respostas individuais: para cada estado, avalie todos os eventos. Não empurre casos demais para um “fallback” genérico.

Infelizmente, virou prática apresentar a teoria de autômatos com exemplos em que há soluções melhores. O clássico é o autômato que soma o valor de moedas ou calcula o resto da divisão por 3 de um número binário. Esses casos até faziam sentido em designs mecânicos/pneumáticos, onde o “estado” era a única memória. Em software, variáveis e operações aritméticas resolvem melhor. Outro exemplo é usar uma máquina de estados para casar palavras ou padrões, mudando de estado a cada letra. Scanners léxicos de compiladores até podem usar a técnica, mas para um conjunto razoável de palavras reservadas o autômato fica impraticável —ninguém o desenharia à mão. Além disso, nada impede que um analisador léxico olhe adiante no texto ou retorne a um marcador, um dos motivos de usar autômatos. Sem contar que estruturas como `tries` costumam ser mais simples e tão rápidas quanto.

Não entrei nos detalhes formais da notação dos diagramas, até porque ela segue o padrão usual: o retângulo arredondado traz o nome do estado e, se necessário, um resumo do que a `entry` faz; cada transição é uma seta com o nome do evento, uma condição opcional entre colchetes e uma ação opcional após uma barra.

### • Verificação de programas

“O compilador não deveria pegar todos os bugs?” Essa pergunta retórica tem lados técnicos e filosóficos. Deixando a filosofia de lado, existe um equilíbrio entre a expressividade de uma linguagem e o nível de correção “forçada” (ou provável) dos programas escritos nela. Restringir demais o idioma não é solução quando o trabalho extrapola o tamanho de um exercício simples: o programador passa a lutar contra a linguagem, quando o foco deveria ser o problema.

O objetivo do pawn é oferecer um mecanismo informal e prático para testar se o programa se comporta como o esperado. Esse mecanismo são as “assertions”. Embora anteriores ao “design by contract”, elas são mais fáceis de explicar com base nessa ideia.

No paradigma de design por contrato, cada função declara as condições que devem ser verdadeiras antes de ser executada (pré-condições), e aquelas que devem ser verdadeirase ao terminar (pós-condições). Isso forma o “contrato” da função. Parte-se do princípio de que o programador conhece o problema, o ambiente e os requisitos.

---

Bertrand Meyer cunhou o termo “design by contract”, inspirado na lógica de predicados e na análise de algoritmos. Em resumo:

- **Pré-condições** definem valores válidos para parâmetros de entrada e atributos do ambiente;
- **Pós-condições** descrevem a saída (e o ambiente) após a execução;
- **Invariantes** são condições que devem ser verdadeiras em pontos-chave da função, independentemente do caminho percorrido.

Por exemplo, uma função que calcula raízes quadradas pode exigir que o parâmetro seja não negativo —pré-condição. Pode ainda afirmar que o resultado, ao ser elevado ao quadrado, difere da entrada em no máximo 0,01% —pós-condição. Se calculada via “bisseção”, cada iteração garante ao menos um bit adicional de precisão, o que seria um invariante (embora difícil de verificar).

Pré-condições, pós-condições e invariantes são testes cujo fracasso indica erro na implementação. Em pawn, todos podem ser expressos com `assert`. Coloque as pré-condições no início da função; invariantes nos pontos relevantes; pós-condições antes de cada `return` ou no final.

A instrução `assert` avalia uma expressão: se o resultado for verdadeiro, nada acontece; se for falso, o programa termina exibindo detalhes sobre a asserção que falhou.

Asserções são verificações que não deveriam falhar. Erros genuínos (como entrada inválida do usuário) merecem testes explícitos, não `assert`. Em geral, mantenha as expressões em `assert` sem efeitos colaterais —não escreva ali código essencial ao funcionamento.

---

`Example square root funczion (usin bisection): 79`

---

Claro que, em um programa sem bugs, as asserções nunca serão disparadas —o que aumenta o código sem um benefício direto. Para contornar, o compilador permite desativar as `assert`s via flag. A recomendação é deixá-las ativadas durante o desenvolvimento e gerar a versão final sem elas. Assim, basta recompilar para recuperá-las em futuros ajustes.

Durante manutenção (ou até no desenvolvimento inicial), se encontrar um defeito não detectado por uma `assert`, primeiro pense em qual asserção teria flagrado o erro. Adicione-a e verifique se realmente acusa o problema antes de corrigi-lo. Aos poucos, o código fica mais robusto.

### • Comentários de documentação

À medida que o programa cresce, documentar funções e módulos fica essencial, especialmente em equipes. As ferramentas do pawn ajudam a gerar documentação a partir dos comentários do código. Isso mantém o texto sincronizado com o programa, reaproveita os comentários como documentação e permite que o parser gere descrições e referências cruzadas.

Comentários que começam com três barras (`///`) seguidas de espaço, ou com `/**` seguidos de espaço, são tratados como documentação. O compilador pode extrair esses comentários e gravá-los em um arquivo de relatório (veja o apêndice B para habilitar).

Observação: comentários iniciados por `/*` continuam precisando de `*/`. Comentários de linha (`///`) terminam no fim da linha.

O relatório é um arquivo XML que pode ser transformado em HTML via XSL/XSLT ou processado por outras ferramentas. O formato é compatível com o dos produtos .NET, mas o compilador pawn armazena informações adicionais. O arquivo já referencia a folha de estilos `smalldoc.xsl`.

---

`Comment syntax: 97`

---

The example below illustrates documentation comments in a simple script that
has a few functions. You may write documentation comments for a function
above its declaration or in its body. All documentation comments that appear
before the end of the function are attributed to the function. You can  
also
add documentation comments to global variables and global constants —these
comments must appear above the declaration of the variable or constant. Fig-
ure 2 shows part of the output for this (rather long) example. The style
of the
output is adjustable in the cascading style sheet (CSS-file) associated with the
XSLT transformation file.

Listing: weekday.p

```c

/**

- This program illustrates Zeller’s congruence algorithm to calculate

- the day of the week given a date.

*/

/**

- <summary>

-        The  main  program:  asks  the  user  to  input  a  date  and  prints

  on

-        what  day  of  the  week  that  date  falls.

- </summary>

*/
main()
{
    new day, month, year
    if (readdate(day, month, year))
    {
        new wkday = weekday(day, month, year)
        printf "The date %d-%d-%d falls on a ", day, month, year
        switch (wkday)
        {
            case 0:
            print "Saturday"
            case 1:
            print "Sunday"
            case 2:
            print "Monday"
            case 3:
            print "Tuesday"
            case 4:
            print "Wednesday"
            case 5:
            print "Thursday"
            case 6:
            print "Friday"
        }
    }
    else
        print "Invalid date"
    print "\n"
}

/**

- <summary>

-      The  core  function  of  Zeller’s  congruence  algorithm.  The  function

-      works  for  the  Gregorian  calender.

- </summary>

-

- <param  name="day">

-      The  day  in  the  month,  a  value  between  1  and  31.

- </param>

- <param  name="month">

-      The  month:  a  value  between  1  and  12.

- </param>

- <param  name="year">

-      The  year  in  four  digits.

- </param>

-

- <returns>

-      The  day  of  the  week,  where  0  is  Saturday  and  6  is  Friday.

- </returns>

-

- <remarks>

-      This  function  does  not  check  the  validity  of  the  date;  when

  the

-      date  in  the  parameters  is  invalid,  the  returned  "day  of  the

  week"

-      will  hold  an  incorrect  value.

-      <p/>

-      This  equation  fails  in  many  programming  languages,  notably  most

-      implementations  of  C,  C++  and  Pascal,  because  these  languages

  have

-      a  loosely  defined  "remainder"  operator.  Pawn,  on  the  other

  hand,

-      provides  the  true  modulus  operator,  as  defined  in  mathematical

-      theory  and  as  was  intended  by  Zeller.

- </remarks>

*/

weekday(day, month, year)
{
/**

- <remarks>

-      For  Zeller’s  congruence  algorithm,  the  months  January  and

-      February  are  the  13th  and  14th  month  of  the  <em>preceding</em>

-      year.  The  idea  is  that  the  "difficult  month"  February  (which

-      has  either  28  or  29  days)  is  moved  to  the  end  of  the  year.

- </remarks>

*/

    if (month <= 2)
        month += 12, --year

    new j = year % 100
    new e = year / 100
    return (day + (month+1)*26/10 + j + j/4 + e/4 - 2*e) % 7
}

/**

- <summary>

-      Reads  a  date  and  stores  it  in  three  separate  fields.  tata

- </summary>

-

- <param  name="day">

-      Will  hold  the  day  number  upon  return.

- </param>

- <param  name="month">

-      Will  hold  the  month  number  upon  return.

- </param>

- <param  name="year">

-      Will  hold  the  year  number  upon  return.

- </param>

-

- <returns>

-      <em>true</em>  if  the  date  is  valid,  <em>false</em>  otherwise;

-      if  the  function  returns  <em>false</em>,  the  values  of

-      <paramref  name="day"/>,  <paramref  name="month"/>  and

-      <paramref  name="year"/>  cannot  be  relied  upon.

- </returns>

*/

bool: readdate(&day, &month, &year)
{
    print "Give a date (dd-mm-yyyy): "
    day = getvalue(\_,’-’,’/’)
    month = getvalue(\_,’-’,’/’)
    year = getvalue()
    return 1 <= month <= 12 && 1 <= day <= daysinmonth(month,year)
}

/**

- <summary>

-      Returns  whether  a  year  is  a  leap  year.

- </summary>

-

- <param  name="year">

-      The  year  in  4  digits.

- </param>

-

- <remarks>

-      A  year  is  a  leap  year:

-      <ul>

-          <li>  if  it  is  divisable  by  4,  </li>

-          <li>  but  <strong>not</strong>  if  it  is  divisable  by  100,

</li>

-          <li>  but  it  <strong>is</strong>  it  is  divisable  by  400.

</li>

-      </ul>

- </remarks>

*/

bool: isleapyear(year)

return year % 400 == 0 || year % 100 != 0 && year % 4 == 0

/**

- <summary>

-      Returns  the  number  of  days  in  a  month  (the  month  is  an

  integer

-      in  the  range  1  ..  12).  One  needs  to  pass  in  the  year  as

  well,

-      because  the  function  takes  leap  years  into  account.

- </summary>

-

- <param  name="month">

-      The  month  number,  a  value  between  1  and  12.

- </param>

- <param  name="year">

-      The  year  in  4  digits.

- </param>

*/

daysinmonth(month, year)
{
    static daylist[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 }
    assert 1 <= month <= 12
    return daylist[month-1] + \_:(month == 2 && isleapyear(year))
}

```

The format of the XML file created by “.Net” developer products is  
documented in the Microsoft documentation. The pawn parser creates a mini-
mal description of each function or global variable or constant that is used  
in a project, regardless of whether you used documentation comments on that
function/variable/constant. The parser also generates few tags of its own:

| name       | info                                                                                                                                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attribute  | Attributes for a function, such as “native” or “stock”.                                                                                                                                                                            |
| automaton  | The automaton that the function belongs to (if any).                                                                                                                                                                               |
| dependency | The names of the symbols (other functions, global variables and/global constants) that the function requires. If desired, a call tree can be constructed from the dependencies.                                                    |
| param      | Function parameters. When you add a parameter description in a documentation comment, this description is combined with the auto-generated content for the parameter.                                                              |
| paraminfo  | Tags and array or reference information on a parameter.                                                                                                                                                                            |
| referrer   | All functions that refer to this symbol; i.e., all functions that use or call this variable/function. This information is sufficient to serve as a “cross-reference” —the “referrer” tree is the inverse of the “dependency” tree. |

---

![fig2](https://i.ibb.co/VmQS0fL/image.png)

###### Figure 2: Documentation generated from the source code

| name       | info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stacksize  | The estimated number of cells that the function will allocate on the stack and heap. This stack usage estimate excludes the stack requirements of any functions that are “called” from the function to which the documentation applies. For example, function readdate is documented as taking 6 cells on the stack, but it also calls daysinmonth which takes 4 additional cells —and in turn calls isleapyear. To calculate the total stack requirements for function readdate, the call tree should be considered. In addition to the local variables and function parameters, the compiler also uses the stack for storing intermediate results in complex expressions. The stack space needed for these intermediate results are also excluded from this report. In general, the required overhead for the intermediate results is not cumulative (over all functions), which is why it would be inaccurate to add a “safety margin” to every function. For the program as a whole, a safety margin would be highly advised. See appendix B (page 168. for the -v option which can tell you the maximum estimate stack usage, based on the call tree. |
| tagname    | The tag of the constant, variable, function result or function parameter(s).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| transition | The transitions that the function provokes and their conditions —see the section of automatons on page 38.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

---

All text in the documentation comment(s) is also copied to each  
function,
variable or constant to which it is attached. The text in the documentation
comment is copied without further processing —with one exception, see below.
Como o restante do relatório está em XML (e a forma mais comum de gerar documentação online é via XSLT), você pode formatar o texto usando tags HTML nos comentários. Apenas lembre-se de fechar as tags explicitamente; embora HTML seja permissivo, os processadores XML/XSLT não são. O toolkit do pawn inclui um exemplo de XSLT (com sua folha de estilos) que suporta as tags abaixo:

| name                          | info                                                                                                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<code> </code>`              | Preformatted source code in a monospaced font; although the “&”, “\<” and “>” must be typed as “&amp;”, “&lt;” and “&rt;” respectively.             |
| `<example> </example>`        | Text set under the sub-header “Example”.                                                                                                           |
| `<param name="..."> </param>` | A parameter description, with the parameter name appearing inside the opening tag (the “name=” option) and the parameter description following it. |
| `<paramref name="..." />`     | A reference to a parameter, with the parameter name appearing inside the opening tag (the “name=” option).                                         |
| `<remarks> </remarks>`        | Text set under the sub-header "Remarks”.                                                                                                           |
| `<returns> </returns>`        | Text set under the sub-header “Returns”.                                                                                                           |
| `<seealso> </seealso>`        | Text set under the sub-header “See also”.                                                                                                          |
| `<summary> </summary>`        | Text set immediately below the header of the symbol.                                                                                               |
| `<section> </section>`        | Sets the text in a header. This should only be used in documentation that is not attached to a function or a variable.                             |
| `<subsection> </subsection>`  | Sets the text in a sub-header. This should only be used in documentation that is not attached to a function or a variable.                         |

---

The following additional HTML tags are supported for general purpose formatting text inside any of the above sections:

| name             | info                                                                                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<c> </c>`       | Text set in a monospaced font.                                                                                                                                       |
| `<em> </em>`     | Text set emphasized, usually in italics.                                                                                                                             |
| `<p> </p>`       | Text set in a new paragraph. Instead of wrapping <p> and </p> around every paragraph, inserting <p/> as a separator between two paragraphs produces the same effect. |
| `<para> </para>` | An alternative for <p> </p>.                                                                                                                                         |
| `<ul> </ul>`     | An unordered (bulleted) list.                                                                                                                                        |
| `<ol> </ol>`     | An ordered (numbered) list.                                                                                                                                          |
| `<li> </li>`     | An item in an ordered or unordered list.                                                                                                                             |

---

Há uma exceção: se o comentário contiver `<param ...>` e `</param>`, o parser combina a descrição que você escreveu com a informação que ele próprio gera para o parâmetro.

### • Avisos e erros

Não descrevi como compilar os exemplos porque o procedimento varia conforme o ambiente: alguns têm botão/menu “Compile script” ou “Make”, outros exigem rodar `sc script.p` no terminal. Se estiver usando o conjunto padrão de ferramentas, consulte o livreto “The pawn booklet — Implementor’s Guide”.

Independentemente da forma de compilar, os resultados costumam ser:

- a compilação funciona e gera um executável (que pode ou não ser executado automaticamente); ou
- a compilação acusa avisos/erros.

Naturalmente erros acontecem, e o parser tenta detectá-los. Às vezes é difícil entender por que ele reclamou de determinado trecho; alguns lembretes podem ajudar:

- Cada erro/aviso tem um número. Procure-o no apêndice A para ver a descrição detalhada.
- Se houver vários erros, o primeiro realmente indica o problema original; os seguintes podem ser apenas reflexos. Após detectar um erro, o parser tenta continuar, mas pode “se perder” e marcar trechos válidos como inválidos. Quando em dúvida, corrija o primeiro e recompile.
- O parser verifica apenas sintaxe (gramática), não semântica. Um mesmo trecho errado pode ser “corrigido” de várias maneiras, mesmo que o resultado não faça sentido. Por isso o compilador às vezes não consegue apontar exatamente onde está o erro e fornece um intervalo de linhas.
- Um programa sem erros sintáticos ainda pode conter falhas lógicas —para essas, use `assert` (página 112).

---

### • Concluindo

Se você já conhece C, viu muitos conceitos familiares e alguns novos. Se não conhece, o ritmo talvez tenha sido acelerado. Em ambos os casos, leia as próximas páginas com atenção; e, para quem já domina C ou linguagens similares, o capítulo “Armadilhas” (página 134) pode ser um bom próximo passo.

Este livreto tenta ser ao mesmo tempo uma introdução informal e uma especificação formal —talvez não cumpra perfeitamente nenhum dos dois papéis. Como é o livro de referência padrão do pawn∗, privilegia a precisão e a completude, mesmo que isso o torne mais denso.

Essa dualidade aparece na ordem dos assuntos: começamos com os blocos conceituais (variáveis e funções) e só depois tratamos de operadores, instruções e regras gerais de sintaxe —não porque sejam menos importantes, mas porque são mais fáceis de aprender ou consultar.

---

###### ∗ Hoje existem outras publicações sobre Pawn.

---

[Voltar ao sumário](00-Contents)
