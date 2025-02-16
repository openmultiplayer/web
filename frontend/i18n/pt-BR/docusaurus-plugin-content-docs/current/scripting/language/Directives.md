---
title: "Diretivas"
---

As diretivas são instruções passadas ao compilador para controlar como ele interpreta seu código fonte.
## `#assert`

Isto verifica se a expressão constante é verdadeira e se não aborta a compilação.
```c
#define MOO 10
#assert MOO > 5
```

Isso irá compilar corretamente.
```c
#define MOO 1
#assert MOO > 5
```

Isso não vai dar e dará um erro fatal. Isto é semelhante a:
```c
#define MOO 1
#if MOO <= 5
    #error MOO check failed
#endif
```

No entanto, a afirmação dará um erro:
```
Assertation failed: 1 > 5
```

Onde o segundo dará um erro:
```
User error: Moo check failed
```

O que pode ou não ser útil.
## `#define`

`#define` é uma diretiva de substituição de texto, onde quer que o primeiro símbolo da definição seja encontrado, o resto será colocado.

```c
#define MOO 7
printf("%d", MOO);
```

Será mudado para:

```c
printf("%d", 7);
```

É por isso que todas as definições se perdem na descompilação, pois não existem quando o código é compilado (todas as diretivas são pré-processadas). As definições não têm que conter números:
```c
#define PL new i = 0; i < MAX_PLAYERS; i++) if (IsPlayerConnected(i)

for(PL) printf("%d connected", i);
```

Compilará para o loop de 1000, mais conhecido como Player Loop que todos nós conhecemos e amamos(e desprezamos). Observe como os parênteses são usados aqui, alguns do loop 'for' e outros do macro definido (o substituto).

Outro fato pouco conhecido sobre as definições é que elas podem ser multi-linhas se você pular da nova linha. Geralmente uma nova linha termina a definição, no entanto, o seguinte é válido:
```c
#define PL \
        new i = 0; i < MAX_PLAYERS; i++) \
                if (IsPlayerConnected(i)

printf("%d", MOO(6));
```

Isso resultará em 42 (não, não é escolhido aleatoriamente). Notou os parênteses excessivos na definição? Isto porque as definições são substituições de texto reto, de modo que serão compiladas como:
```c
printf("%d", ((6) * 7));
```

Está bem assim, mas olhe este exemplo:
```c
printf("%d", MOO(5 + 6));
```

Você esperaria que compilasse para produzir 77 ((5 + 6) \* 7) e com os parênteses, porém sem os parênteses que você tem:

```c
#define MOO(%0) \
        %0 * 7

printf("%d", MOO(5 + 6));
```

O que converte para:

```c
printf("%d", MOO(5 + 6 * 7));
```

Que, devido à ordem de operações, compila como (5 + (6 \* 7)), o que se for 47 e é muito errado. 

Um fato interessante sobre os parâmetros é que, se você tem muitos, o último será todos os parâmetros extras. Assim formando:
```c
#define PP(%0,%1) \
        printf(%0, %1)

PP(%s %s %s, "hi", "hello", "hi");
```

Irá imprimir de fato:

```
hi hello hi
```

Como `%1` contém "hi", "hello", "hi". Você também deve ter notado o uso de `#` para converter um literal em uma string. Esta é uma característica apenas do SA-MP e pode ser útil. Foi apenas adicionado aqui para dar uma distinta distinção entre os parâmetros.

## `#else`

`#else` É igual ao `else` comum, só que na diretiva #else.

## `#elseif`

`#elseif` É igual elseif comum, só que na diretiva #if.

```c
#define MOO 10

#if MOO == 9
        printf("if");
#elseif MOO == 8
        printf("else if");
#else
        printf("else");
#endif
```

## `#emit`
Esta diretiva não está listada na tabela pawn-lang.pdf, entretanto, ela existe. Ela é basicamente um compilador em linha. Se você conhece AMX, você pode usar isto para colocar os opcodes AMX diretamente em seu código. A única limitação é que isso permite apenas um argumento. Sintaxe: `#emita <opcódigo>>argumento>`. `<argumento>` pode ser um número racional, inteiro ou símbolo (local ou global) (variáveis, funções e rótulos). A lista de opcodes e seu significado pode ser encontrada em Pawn Toolkit ver. 3664.
## `#endif`

`#endif` É como se um aparelho para-se. #if não usar aparelho, tudo é somado condicionalmente até o correspondente #endif.

## `#endinput, #endscript`

Isto impede a inclusão de um único arquivo.

## `#error`

Isto serve para o compilador instantaneamente imprimir mensagem de erro personalizada. Veja #assert para um exemplo.

## `#if`

`#if` Indica para o pré-processador e se é para compilar aquele trecho de código. Pode escolher exatamente o que compilar e o que não compilar a partir daqui. Por exemplo, considere o seguinte código:

```c
#define LIMITE 10

if (LIMITE < 10)
{
    printf("Limite muito baixo");
}
```

That will compile as:

```c
if (10 < 10)
{
    printf("Limite muito baixo");
}
```

O que claramente nunca retornará verdadeiro e o compilador sabe disso - portanto retornará um aviso de "expressão constante". A questão é, se nunca será verdade, de que vale a pena incluí-lo de todo? Poderá simplesmente remover o código, mas depois não haverá verificações se alguém alterar o macro LIMITE e recompilar. É para isto que serve a diretiva #if. Ao contrário do normal, que dá um aviso se a expressão for constante, as expressões #if devem ser constantes. Portanto:
```c
#define LIMITE 10

#if LIMITE < 10
    #error Limite muito baixo
#endif
```

Isso irá verificar que o limite não é demasiado pequeno quando se compila e se é, dará um erro de tempo de compilação, em vez de se ter de testar o modo para ver se há algo de errado. Isto também significa que não é gerado um excesso de código. Note também a falta de parênteses, pode utilizá-los, e pode precisar deles em expressões mais complexas, mas não são necessários.

Aqui está outro exemplo:

```c
#define LIMITE 10

if (LIMITE < 10)
{
    printf("Limite menor que 10");
}
else
{
    printf("Limite igual ou menor do que 10");
}
```

Mais uma vez, esta é uma verificação constante, que dará um aviso, mas ambas as impressões serão compiladas quando sabermos que apenas uma será executada. Usando #if isto se tornar:
```c
#define LIMITE 10

#if LIMITE < 10
    printf("Limite menor que 10");
#else
    printf("Limite igual ou menor que 10");
#endif
```

Dessa forma, apenas a impressão que é necessária será compilada e a outra ainda estará no seu código-fonte, caso alterem o valor do macro LIMITE e recompilem, mas não será incluída no código, uma vez que não é necessária. Esta forma também significa o inútil se não for executado sempre que o seu código for executado, o que é sempre bom.

## `#include`

Isto retira todo o código de um arquivo especificado e insere-o no seu código no ponto em que a linha include se encontra. Há dois tipos de include: relativo e sistema (termos inventados pelo autor para simplificar o que está sendo feito). Relativo inclui usar aspas duplas em torno do nome do arquivo e estão localizados em relação ao arquivo atual, portanto:

```c
#include "include.pwn"
```

incluiria o arquivo "include.pwn" do mesmo diretório que o arquivo incluindo esse arquivo. O outro tipo, sistema, inclui o arquivo do diretório "include" que está localizado ou no mesmo diretório que o compilador Pawn ou diretório pai (caminhos: "include",".../include"):
```c
#include "<include>"
```

Incluiria o arquivo "include.inc" (note a falta de extensão, pode especificar se um arquivo não for .p (não .pwn ou .inc) do diretório pawno/include (supondo que você esteja utilizando Pawno).

Ambos os tipos podem conter diretórios:

```#include <diretorio/include.pwn"
```

```c
#include <diretorio/include>
```

Ambos incluirão um arquivo de um diretório abaixo dos respectivos directórios por defeito. Se o arquivo não existir, a compilação falhará.

## `#pragma`

Esta é uma das diretivas mais complexas. Ela tem uma série de opções para controlar como seu roteiro funciona. Um exemplo de configuração pareceria:
```c
#pragma ctrlchar '$'
```

Mais uma vez, esta é uma verificação constante, que dará um aviso, mas ambas as impressões serão compiladas quando sabermos que apenas uma será executada. Usando #if isto se tornar:
| Nome | Valores | Descrição |
| ---------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| codepage | nome/valor | Define a página de codificação Unicode a utilizar para cordas.                                                                                                                                                                                                                                                                                                                           |
| comprimir | 1/0 | Sem suporte no SA-MP - não tente usá-lo.                                                                                                                                                                                                                                                                                                                             |
| depreciado | símbolo | gerou um aviso se o símbolo dado for utilizado para dizer às pessoas que há uma versão melhor disponível.                                                                                                                                                                                                                                                                      |
| dinâmico | valor (geralmente uma potência de 2) | Define o tamanho da memória (em células) atribuída à pilha e à pilha. Necessário se receber um aviso de utilização de memória em excesso após a compilação. (Uma tabela estranha após a linha de copyright do compilador) |
| biblioteca | nome dll | Widley incorrectamente utilizado no SA-MP. Isto especifica a dll para obter as funções nativas definidas no ficheiro de onde é proveniente. Não define um ficheiro **como** uma biblioteca.                                                                                                                                                                                                        |
| pack | 1/0 | Troque os significados de !"" e """. Ver penhor-lang.pdf para mais informações sobre cordas embaladas.                                                                                                                                                                                                                                                                              |
| tamanho do separador | valor | Outra configuração largamente mal utilizada. Isto deve ser utilizado para definir o tamanho de um separador para evitar avisos de compilação que estejam errados devido a espaços e separadores serem utilizados alternadamente. Isto é definido para 4 em SA:MP, pois é o tamanho de uma tabulação em pawno. Definindo este valor como 0 irá suprimir todos os seus avisos de indentação, mas é altamente desaconselhável uma vez que permite um código totalmente ilegível. |
| não utilizado | símbolo | como depreciado isto aparece após o símbolo para o qual se deseja suprimir o aviso "símbolo nunca é utilizado". Geralmente, o método preferido para o fazer é a utilização de stock, no entanto, isto nem sempre é aplicável (por exemplo, os parâmetros da função não podem ser compilados).                                                                                                      

### Descontinuado

```c
new
    gOldVariable = 5;

#pragma deprecated gOldVariable

main() {printf("%d", gOldVariable);}
```

Isso dará um aviso de que a gOldVariable não deve mais ser usada. Isto é útil principalmente para funções que preservam a compatibilidade com o passado enquanto atualizam o API.
### `#tryinclude`

Isso é semelhante a #include, mas se o arquivo não existir, a compilação não falhará. Isso é útil apenas para incluir recursos em seu script se uma pessoa tiver o plugin correto instalado(Ou pelo menos o plugin incluído)

**myinc.inc**

```c
#if defined _MY_INC_INC
    #endinput
#endif
#define _MY_INC_INC

stock MinhaIncludeFunc() {printf("Olá!");}
```

**Gamemode:**

```c
#tryinclude <minhainc>

main()
{
    #if defined _MINHA_INC_INC
        MinhaIncludeFunc();
    #endif
}
```

Isso só chamará a função MinhaIncludeFunc se o arquivo com ele for encontrado na pasta includes e compilado com sucesso. Isso, como afirmado anteriormente, é bom para plugins padrões (Por exemplo a_samp.inc ou a_actors.inc) para verificar se o desenvolvedor realmente tem o plugin instalado.
### `#undef`

Remove um macro ou simbolo constante anteriormente definido.

```c
#define MOO 10
printf("%d", MOO);
#undef MOO
printf("%d", MOO);
```

Irá falhar ao compilar, pois o macro MOO não existe.
```c
enum {
    e_example = 300
};

printf("%d", e_example);
#undef e_example
printf("%d", e_example); // fatal error
```
