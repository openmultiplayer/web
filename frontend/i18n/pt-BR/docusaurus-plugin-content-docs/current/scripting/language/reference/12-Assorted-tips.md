# Dicas variadas

---

## Trabalhando com caracteres e strings

Uma string "empacotada" é uma série de caracteres empacotados em células, e uma célula contém tipicamente quatro caracteres empacotados. Um caractere é então tipicamente de 8 bits. Uma string "não empacotada" tem um caractere por célula. Por padrão, um caractere em uma string não empacotada também tem 8 bits; o relatório "Implementer's Guide" descreve como criar implementações com caracteres de 16 bits.

A diferença essencial entre strings empacotadas e não empacotadas é que strings empacotadas são mais econômicas — os exemplos discutidos neste manual são para 32 bits, e células de 32 bits ajustam quatro caracteres de 8 bits. Para manipulação pesada de strings, strings não empacotadas podem ser mais fáceis de usar.

A maioria das funções de biblioteca padrão de strings pode trabalhar tanto com strings empacotadas quanto não empacotadas. O tipo de string que uma variável pode conter é determinado na sua declaração. Para uma variável que contém a string "Hello world!", você poderia declarar:

Listagem: string empacotada

```c
new msg[] = !"Hello world!"
```

ou:

Listagem: string não empacotada

```c
new msg[] = "Hello world!"
```

A diferença entre as duas declarações são o caractere "!" que precede a string, e o tamanho do array "msg" — que é invisível na declaração, pois a dimensão é implicitamente definida pelo comprimento da constante string inicializadora. Na primeira declaração, o string está empacotado e o array msg tem 4 células; na segunda declaração, o array tem 13 células, um por cada caractere mais um terminador.

Em praticamente todos os aspectos, a sintaxe e semântica de strings empacotadas foram comparadas a strings não empacotadas ignorando-se a diferença no requisito de memória.

Observação: Você pode escolher definir a cadeia de caracteres empacotada como padrão, a diretiva #pragma pack ajuda com isso; veja página 121.

A maioria das funções para operar em strings podem funcionar tanto com strings empacotadas quanto não empacotadas. Veja página 140 para a biblioteca de funções de string
.

## Loops for, declarações opcionais

Todas as três expressões de uma declaração for são opcionais. Nos exemplos abaixo, vale notar que o valor da expressão de índice é testado antes de cada iteração, incluindo o primeiro, então se o índice é inicializado com o valor final antes de entrar no loop for, o loop não itera mesmo uma única vez.

Especificar a declaração for sem uma expressão de condição (a declaração de controle do loop ou o "índice" do loop) cria um loop infinito. Você pode usar goto ou return para encerrar esse loop. Você também pode usar uma declaração break para abortar um loop, seja um loop infinito ou outro loop.

Omitir o segundo campo (a especificação de condição de loop) de uma declaração for resulta em um loop que nunca termina. Você deve, portanto, ter código para sair do loop na declaração que a declaração for controla.

Listagem: "Forever" loop

```c
for ( ;; )
{
    // ...código para loop indefinidamente
}
```

Loops while e do-while são equivalentes a loops for, e também podem fazer loops infinitos.

Uma forma mais interessante de "loop infinito" é aquela que tem uma condição de saída no meio do corpo do loop. Você pode codificar uma condição de saída no meio do corpo do loop de qualquer loop, mas um loop infinito torna essa condição de saída no meio do corpo mais evidente.

Listagem: loop infinito com condição de saída no meio do corpo

```c
for ( ;; )
{
    // ...instruções para executar antes da condição de saída
    if (condição)
        break;
    // ...instruções para executar somente quando a condição for falsa
}
```

Você (aparentemente) também pode criar um loop infinito omitindo toda a parte entre parênteses. No entanto, um ponto e vírgula é o "placeholder" para uma declaração vazia; portanto, uma declaração for sem parênteses é na verdade uma declaração for com todas as três campos em branco.

Listagem: loop infinito; sintaxe alternativa

```c
for (;;)
{
    // ...
}
```

Os parênteses são obrigatórios, porque for (;;;) não é uma declaração válida. Alguns leitores podem não notar a diferença entre os parênteses "(;;)" e aqueles "( ;; )", portanto esta sintaxe alternativa é um idioma que não melhora a clareza do código.

## Usando macros com array

Macros para PAWN são escritas com a diretiva #define; macros para PAWN não têm a flexibilidade de macros orientadas a texto como as do pré-processador C. Para o propósito deste exemplo, suponha que exista uma string a que você queira atribuir outra string. Se existe a função strcpy, você pode assumir o código:

Listagem: strcpy — fragmento

```c
strcpy(a, "foo")
```

onde "a" é a string que você deseja atribuir e "foo" é a nova string. Você pode também assumir que para converter um array "não empacotado" a "empacotado" tudo que você precisa fazer é adicionar um ponto de exclamação. O código abaixo, no entanto, é errado:

Listagem: strcpy — fragmento com erro

```c
#define foo "bar"
strcpy(a, foo)
strcpy(a, !foo)   // esta linha está errada
```

A terceira linha no fragmento acima irá dar um erro. A construção "!foo" não faz sentido: o é o operador "não" (ou "complemento") e foo não é um valor válido para aplicar o operador. A solução é criar a macro com o ponto de exclamação incluído:

Listagem: strcpy — fragmento com macro

```c
#define foo !"bar"
strcpy(a, foo)
```

## Operador char

O operador char foi concebido para o propósito de declarar arrays de caracteres que têm um número suficiente de células para conter um certo número de caracteres empacotados. O operador foi projetado para que você pudesse calcular o tamanho de um buffer contendo uma string "empacotada". Por exemplo, se você quiser 40 caracteres empacotados, a declaração:

Listagem: declaração de variável char

```c
new a[40 char]
```

cria uma variável de array que tem espaço para 40 caracteres empacotados e o número mínimo de células para encaixar. Isso contrasta com

Listagem: declaração de variável char

```c
new a[40]
```

que, é claro, declara 40 células, cada uma sendo capaz de armazenar 1 caractere não empacotado. Pegar um caractere empacotado do array também exigiria um pouco de código: você precisa saber em qual célula o caractere está, e em qual byte da célula específica. O operador de chaves, {}, encapsula esse cálculo. Para obter o n-ésimo caractere do array a, diga `a{n}`.

Como corolário para usar char no tamanho do array, você também pode usar char no índice do array. Digamos que você queira declarar uma variável que contenha qualquer número não negativo até 100.000 e que você deseja armazenar essa variável em um arquivo. É mais fácil escrever a variável como uma string "empacotada" do que como um número binário (32 bits), porque ler de volta exige cuidado, já que o analisador de arquivo pode não usar os mesmos padrões de ordenação de bytes e tamanho de palavras. Então você pode querer analisar a variável em uma string, calcular o número de bytes que ela precisa e armazenar os bytes em um arquivo.

Listagem: calcular tamanho de caracteres

```c
#include <console>

main()
{
    new count = 12345
    new a[20 char]
    strformat a, _, true, "%d", count   // armazena o número como string
    new len = strlen(a)                  // obtém o comprimento em caracteres
    printf "Comprimento do número é %d caracteres.\n", len
    printf "...o que ocupa %d células.\n", len char
}
```

Nas listagens anteriores, o snippet de código requer uma função de string "strlen" que retorna o comprimento da string em caracteres. Embora uma implementação possa fornecer uma função strlen, não é uma função do núcleo.

Observe como, em um caso, aplicamos char no tamanho do array é após o tamanho, enquanto na
outra aplicação de char para obter um comprimento que expressa o número de células
necessárias para armazenar um número de caracteres empacotados, o operador char é aplicado após o comprimento
da string (que é em bytes ou caracteres empacotados).

## Evitando recursão

Pawn oferece suporte completo à recursão, mas para implementá-la, ela precisa usar sua pilha para passagem de parâmetros e variáveis locais — veja página 64. Em sistemas embarcados, onde a memória é escassa, funções recursivas frequentemente não são a melhor solução. A pilha da máquina abstrata também pode não permitir grandes profundidades de recursão.

Por exemplo, suponha que você queira calcular a série de Fibonacci. Para calcular um item, você precisa conhecer seus dois itens anteriores. Isso é recorrência, não recursão, portanto você não precisa usar uma função recursiva.

Listagem: fibonacci — função recursiva

```c
/* Calcular um número de Fibonacci pelo método tradicional */
fibonacci(n)
{
    assert n > 0
    if (n < 3)
        return 1
    return fibonacci(n - 2) + fibonacci(n - 1)
}

```

Listagem: fibonacci — função iterativa
```c
/* Calcular um número de Fibonacci pela iteração */
fibonacci(n)
{
    assert n > 0
    new a = 0, b = 1  /* valores sementes para os dois primeiros termos */
    for (new i = 1; i < n; i++)
    {
        new tmp = a
        a = b
        b = tmp + a
    }
    return b
}
```

A função iterativa é mais rápida, usa menos recursos e permite valores maiores de n. Para
sistemas embarcados, especialmente quando a memória é escassa, a solução iterativa é a opção
preferível.

## Usando constantes simbólicas

Existem vários tipos de constantes simbólicas em PAWN. Uma constante simbólica literal
funciona como uma mudança de caractere; a constante é descartada junto com seu valor, e qualquer
aparição da constante "pesquisada" no texto é substituída pelo seu substituto
texto. Constantes simbólicas literais são criadas com a diretiva #define. A
sintaxe da diretiva #define cria substituições baseadas em padrões.

A diretiva enum cria constantes com valores inteiros consecutivos. Por
padrão, a primeira constante enum tem o valor zero. Você pode usar valores enum
para criar matrizes "nomeados", como a sugestão do exemplo abaixo.

Listagem: definições de constantes de cor
```c
enum color
{
    red,
    green,
    blue
}

new palette[][color] = {
    { 0, 0, 0 },        /* preto */
    { 255, 0, 0 },      /* vermelho */
    { 255, 128, 0 },    /* laranja */
    { 255, 255, 0 },    /* amarelo */
    { 0, 255, 0 },      /* verde */
    { 0, 255, 255 },    /* ciano */
    { 0, 0, 255 },      /* azul */
    { 255, 0, 255 },    /* violeta */
    { 255, 255, 255 }   /* branco */
}
main()
{
    print("A cor laranja contém estes valores:", red, green, blue);
    print(palette[2][red], palette[2][green], palette[2][blue]);
}
```

Finalmente, a diretiva const cria uma constante com um valor inteiro; a
sintaxe permite declarar múltiplas constantes em uma linha.

Ao declarar constantes, você deve considerar qual o melhor tipo de constante
se adequa ao problema: as constantes simbólicas literais da diretiva #define
suportam strings, padrões e inteiros (decimais, hexadecimais e
binários). Os "enums" criados com a diretiva enum são apenas inteiros, mas
têm a vantagem de ajustar automaticamente os valores das constantes quando
você adiciona ou remove constantes do meio da lista.
As constantes de const são sempre inteiros, e você deve especificar um valor explícito
para cada constante.

## Acesso a células nas strings empacotadas

Para indexar o n-ésimo caractere em uma string não empacotada armazenada na variável
msg, você usa a expressão "msg[n]". Para strings empacotadas, você usa
`msg{n}`. Portanto, operações em strings empacotadas diferem de operações em
strings não empacotadas apenas no uso de chaves, em vez de colchetes; veja a página 110
para informações adicionais.

As linhas abaixo são um exemplo simples de como fazer o loop por todos os caracteres
em uma string empacotada.

Listagem: comentário acima da função packedstring
```c
/* Função que conta os caracteres 'e' em uma string empacotada */
packedstring(string{})
{
    for (new i; string{i}; i++)
        if (string{i} == 'e')
            count++
    return count
}
```

## Formatadores genéricos de saída

Os formatadores de saída printf e strformat foram baseados na função printf da linguagem de programação C.
PAWN suporta os seguintes formatadores:

| Formatador | Significado                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| **%b**     | número na base binária                                                                                                     |
| **%c**     | caractere                                                                                                                  |
| **%d**     | número na base decimal (e sinalizado)                                                                                      |
| **%f**     | número de ponto flutuante                                                                                                  |
| **%q**     | número de ponto fixo                                                                                                        |
| **%r**     | número racional em notação de fração ("1/4" em vez de "0.25")                                                               |
| **%s**     | string                                                                                                                     |
| **%x**     | número na base hexadecimal                                                                                                 |
| **%%**     | literal `%`                                                                                                                |

O formatador %f está disponível apenas se a implementação incluir suporte a
ponto flutuante. Observe que %f apenas formata o número; não converte
uma representação numérica inteiro-para-ponto-flutuante.
O mesmo vale para %q.

Os formatadores %d e %x também podem conter uma largura de campo opcional (inserida
entre o % e a letra) para gerar o número em uma quantidade fixa de
dígitos(ignorando o sinal).

Os formatadores %f e %q podem conter precisão opcional (inserida entre
o % e a letra) para especificar o número de dígitos decimais. A precisão padrão para o formatador %f é 6.

Você pode usar o formatador %r para saída proporcional, onde a largura de campo
especifica a precisão (padrão de 3) e o número é impresso como uma fração
inteira mais uma fração. Observe porém, que enquanto o formatador %r exibe um número (racional) como uma fração, você não pode usar a representação
de fração para entrada de constantes de ponto fixo ou ponto flutuante em PAWN.

## O operador "query" do formatador

O ponto de interrogação (?) em uma string de formato dispara uma invocação automática de um prompt na saída. Por exemplo:

Listagem: formatador de consulta
```c
new value
getvalue(value, "?Valor da chave = ")
```



O caractere "?" na instrução também exibe
um caractere de prompt "?", após o texto "Valor da chave = ".

## Tags fortes e fracos

Um tag "fraco" é normalmente apenas um nome simbólico para fins de
documentação. Uma variável com um tag fraco pode ser usada em código sem
o tag. Por exemplo, para ver a diferença entre horas e minutos, você pode definir
as tags como:

Listagem: tag fraco
```c
new hours:h = 3
new minutes:m = 58
```

onde tanto horas como minutos são tags sem declaração. Em seguida, você pode usar
as variáveis h e m sem restricções de tipo, porque o compilador
ignora um tag que não tem declaração.

Um tag forte é aquele que começa com uma letra maiúscula e que possui uma
declaração. Para tags fortes, você também pode declarar os operadores que são
válidos (mais adiante). Você pode usar uma variável com uma tag forte apenas onde uma expressão
com a mesma tag é esperada. Veja as páginas 68 e 78 para mais informações sobre tags.

Listagem: tag forte
```c
enum Boolean: /* o nome de enum da diretiva enum é uma tag "forte" */
{
    false,
    true
}

stock Boolean:IsPositive(value)
    return (value >= 0) ? true : false
```

Se você usasse IsPositive na instrução condicional como abaixo
(onde variável "n" é um inteiro normal)

Listagem: usando uma função com tag forte como condição (com bug)
```c
if (IsPositive(n))
    // ...
```

o compilador emitiria uma mensagem de "tag mismatch" (incompatibilidade de tag) porque IsPositive
retorna Boolean e a instrução if espera uma expressão sem tag. O código
tem outro "bug": se Boolean:false já tiver o valor zero, então retornar o valor false seria suficiente, e não seria necessário chamar a função
IsPositive("se false é zero" como a expressão condicional avaliada)

## Comparando "maçãs" e "laranjas"

Quando dois argumentos têm tipos diferentes (ou seja, tags diferentes), pode-se falar em comparar maçãs e laranjas. Tags fortes podem ter operadores especiais
que são criados para eles, e operadores que trabalham em expressões com um tipo
específico de tag forte são preferidos a operadores genéricos (sem tag).
Mas com tags fracos (ou sem tags) existe apenas o operador genérico único.

O operador genérico deve escolher um ou outro tipo de comparação
para este caso. Veja a equação abaixo:

$n == a[i] * b$

Se n, a[i] e b forem todos números de ponto flutuante, o operador aritmético e a
comparação devem usar aritmética de ponto flutuante. Se forem todos inteiros,
você usa aritmética de inteiros. Dependendo do que você deseja, você pode então assumir
que, em uma equação "mista" de inteiros e números de ponto flutuante, os operadores
irão tratar os inteiros como números de ponto flutuante ou tratar os números de ponto
flutuante como inteiros (arredondando-os para inteiros), dependendo da implementação do operador.

## Evitando sair de um script em execução

Se sua aplicação permitir que scripts sejam baixados por qualquer usuário, e não apenas administradores confiáveis, você pode querer adicionar proteção contra
runaway scripts — um script que vai além do seu ciclo de vida aceitável. Dentro de uma função callback, você pode verificar o número de iterações que passou e da vez a execução de volta para o programa hospedeiro se um número pré-determinado de iterações não resultou em cessação natural do script.

A função callback, abaixo, verifica o nível de recursão. Se o nível de recursão for zero, é uma "função de nível superior" que foi chamada diretamente ou indiretamente pela função callback anterior executada. A função então lembra a hora em que foi chamada. Funções de nível não superior são aquelas que são funções de callback aninhadas. Para elas, a função apenas verifica se o script atingiu outro "marco" de chamada e verifica a diferença de tempo com o momento em que a primeira função de callback foi ativada.

Listagem: abort.p
```c
@receita(time, const heession_id[], count)
    check_recursion_level(time)

@abortscipt()
{
    printf("Script abortado!\n")
    return true;
}

static check_recursion_level(time)
{
    static base_time
    static count

    new level = calldepth() /* obtém o nível de recursão */
    if (level == 0)
    {
        base_time = time
        count = 0
    }
    else if (++count > 10)
    {
        count = 0
        if (time - base_time > 300)
            abort()
    }
}
```

Observe que funções callback são geralmente nativas, e seus nomes dependem do programa hospedeiro.

## Entrada de arquivo em PAWN

A linguagem PAWN não tem nenhuma funcionalidade E/S embutida. Isso significa que só é possível ler arquivos por meios específicos que a implementação fornece (se houver). A aplicação iniesta pode, por exemplo, suportar funções como fopen() e fread().

Em outros sistemas embarcados, os dados necessários para a execução do script podem ser armazenados como dados na RAM ou ROM em vez de armazenados no disco como um arquivo

## Fixando um endereço ou de um array local global

Uma função nativa pode desejar armazenar um ponteiro (um endereço efetivo) para uma variável, para que essa variável possa ser lida ou escrita de modo assíncrono em
relação à execução do programa.

Considere uma comunicação serial com hardware de relógio de tempo real via I2C (ou um
protocolo similar): para definir a hora, você transmite o endereço do dispositivo do hardware RTC, e
o endereço do valor a ser definido, e os bytes a serem definidos. Ler a hora é
semelhante, mas os dados recebidos de volta vão para um array no programa em PAWN. Tipicamente
você não deseja ler individual bytes, mas ler toda a estrutura RTC de forma síncrona
(para minimizar a chance de obter dados trocados). Portanto, a
função para obter a hora pode receber um array de saída na chamada de função, mas
não preencher o array até que a leitura esteja completa — o que pode ser em um ponto
posterior ou imprevisível no tempo.

A implementação desta funcionalidade em uma função nativa não é trivial. O
ponto chave a observar é que a única maneira de uma função nativa dar acesso direto
a dados, é a passagem de parâmetros por referência. PAWN não tem ponteiros
e, portanto, uma string ou array em PAWN será passado para a função nativa
como um endereço — isso ocorre de forma transparente para a função nativa, mas o host
tem acesso não apenas aos dados, mas também ao endereço dos dados. Armado com
um endereço (direto), a função nativa pode então acessar os dados "de forma assíncrona".

Há uma consideração adicional para variáveis locais: estas "vivem" na pilha e seu
endereço é apenas válido enquanto a função que as declara está ativa.
Se você passar o endereço de uma variável local para uma função nativa sair em
seguida, o endereço que você entregou para a função nativa se torna
muito provavelmente lixo.

Para aquelas situações em que um endereço fixo de uma variável local é obrigatório, a
diretiva #pragma dynamic ajuda a obter esse endereço. Considere o fragmento de código abaixo, onde a
função GetTime é chamada (função hipotética) para iniciar a aquisição de dados de
tempo de forma assíncrona, e a função IsTimeReady verifica a conclusão da aquisição de dados.
Quem quer que seja que esteja definindo a hora, alguém estará trabalhando com um
array de dados definido. A função nativa GetTime manipula o
array diretamente, sem interação com a linguagem PAWN — na verdade, manipula a
memória de forma assíncrona e independente do script PAWN. Quando a aquisição do tempo for
concluída, a função IsTimeReady retorna true e os dados no array estarão válidos.

Listagem: obter tempo de maneira assíncrona
```c
#pragma dynamic 16

main()
{
    new time[8]
    GetTime(time)
    while (!IsTimeReady)
    {
        /* espera */
    }
    printf("%d:%d:%d)", time[0], time[1], time[2])
}

```

Com a diretiva #pragma dynamic, o tamanho heap/stack combinado
é ajustado para 16 células. Com uma pilha pequena, você pode ter certeza de que o
endereço da variável time local estará perto do topo da memória de dados. Com
os padrões apropriados para endereços de registradores e IRQ,
a variável time adquire um endereço fixo.

Frequentemente não é problema que o endereço de uma variável local mude de acordo com
a hora e o local em que é declarada (posição de pilha do ponto de entrada
da chamada de função). Em outros termos, quando a aquisição de dados assíncrona não for
relaciona a uma rotina de tratamento de interrupção mas a uma função de polling, onde
os dados são consultados em uma chamada de função explícita, retornar os dados via parâmetro
de referência é tão válido quanto via variável global.

Listagem: obter tempo com poll
```c
GetTimePoll(time[])
{
    /* Obtém hora de um RTC ou similar de forma síncrona ou consultando o estado */
}

main()
{
    new time[8]
    GetTimePoll(time)
    printf("%d:%d:%d)", time[0], time[1], time[2])
}
```

## Alternativas para printf

A função printf é uma função de propósito geral com uma lista de parâmetros aberta. Devido a sua inerente flexibilidade, também é relativamente grande e frequentemente não pode ser otimizada. Devido à lista de parâmetros de tamanho variável, ela também força um modelo de passagem de argumentos que seja independente de qualquer conhecimento da função.

Se a implementação precisar economizar memória — em outras palavras, se você precisar de um executável menor na ROM — você pode definir sua própria funções nativas para casos especiais. Por exemplo, em vez de usar printf para exibir uma mensagem de depuração como a linha acima, você pode usar:

Listagem: funções alternativas para printf
```c
#define dbgstring(%1) printf("%s", %1)
#define dbgvalue(%1)  printf("%d", %1)
```

## PAWN contra a escassez de memória

Comparado a soluções puramente baseadas em hardware, a memória de código de um sistema em 
PAWN normalmente será maior. Por um lado, você executa muitas implementações
de código usando PAWN que executam a funcionalidade, mas não estariam lá em um
solução por hardware (hardware sozinho implementa diretamente a funcionalidade).
Por outro lado, você tem o overhead do próprio sistema de execução de
bytecode — a "Máquina Abstrata".
 
Os requisitos de memória da máquina abstrata são:

- O código (ROM) da própria máquina abstrata. A máquina abstrata mais simples, incluindo uma interface de impressão para depuração, uma interface para gerenciamento de
  temporizadores/eventos e código de inicialização adicional, é menor que 8 KiB, em um microcontrolador ARM de 32 bits.

- Os dados (RAM) exigidos pela máquina abstrata para gerenciamento interno e ponteiros para código de uso único. Tipicamente, 256 bytes são suficientes para este propósito.

- Uma pilha (RAM) compartilhada entre a máquina abstrata e o script PAWN. Dimensionar esta pilha depende da complexidade do script a ser executado.

- Segmento de dados (geralmente em RAM) e o segmento de código (preferencialmente em ROM) para o próprio script compilado. O link para o arquivo ".amx" para os exemplos de código no manual lhe dará estes valores para esse script específico.

## Armadilhas adicionais

Estas "armadilhas" são comportamentos corretos pela definição da sintaxe da
linguagem, mas podem não ser o que você quis dizer ou pode parecer
contra-intuitivo:

Ao definir uma macro LIMIT, certifique-se de não adicionar um ponto e vírgula.
Uma definição como:

Listagem: armadilha potencial — ponto e vírgula após uma substitução de macro #define
```c
#define LIMIT 10;
```

levaria o fragmento de código abaixo a ser analisado com um erro de sintaxe, porque após a expansão da macro resultaria na expressão "i < 10;":

```c
for (new i = 0; i < LIMIT; ++i)
```

Além disso, note que as regras de coincidência de padrões do processsor de macros PAWN
não se estendem através de linhas e não atravessam strings. Portanto, se você tiver
a macro abaixo:

Listagem: armadilha potencial — correspondência de padrão em uma macro #define
```c
#define a(%1) abc(%1, 2)
```

o conteúdo do programa a seguir:

```c
a("foo bar") /* 1 */
a("baz)
  ") /* 2 */
a /* 3 */
(1)
"a(xyz)" /* 4 */
```

seria substituído como:

```c
abc("foo bar", 2)
a("baz)
  ")
a
(1)
"a(xyz)"
```

Em outras palavras, apenas o uso da macro a na linha 1 é substituído pela
substituição da macro. As linhas 2 e 3 não são correspondidas. A linha 4, que está
em uma string, também não é substituída.

---

[Voltar ao Índice](00-Contents)
