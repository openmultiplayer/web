# Sintaxe Geral

---

**Formato**

    Identificadores, números e tokens são separados por espaços, tabulações,
    retornos de carro e "feeds de formulário". Séries de um ou mais desses
    separadores são chamadas de espaço em branco.

**Ponto e vírgula opcional**

    Ponto e vírgula (para terminar uma instrução) são opcionais se ocorrerem
    no final de uma linha. Ponto e vírgula são necessários para separar
    múltiplas instruções em uma única linha. Uma expressão ainda pode se
    estender por várias linhas, mas operadores pós-fixados (++, -- e char)
    devem aparecer na mesma linha que seu operando.

**Comentários**

    Texto entre os tokens /* e */ (ambos os tokens podem estar na mesma
    linha ou em linhas diferentes) e texto após // (até o final da linha)
    é um comentário de programação. O parser trata um comentário como
    espaço em branco. Comentários não podem ser aninhados.

    Um comentário que começa com "/** */ " (duas estrelas e espaço em branco
    após a segunda estrela) e termina com "*/" é um comentário de documentação.
    Um comentário que começa com "/// " (três barras e espaço em branco
    após a terceira barra) também é um comentário de documentação. O parser
    pode tratar comentários de documentação de forma especial; por exemplo,
    pode construir ajuda online a partir deles.

**Identificadores**

    Nomes de variáveis, funções e constantes. Identificadores consistem nos
    caracteres a. . . z, A. . . Z, 0. . . 9, _ ou @; o primeiro caractere não
    pode ser um dígito. Os caracteres @ e _ por si só não são identificadores válidos,

    ou seja, "_Up" é um identificador válido, mas "_" não é.

    pawn diferencia maiúsculas de minúsculas.

    Um parser pode truncar um identificador após um comprimento máximo.
    O número de caracteres significativos é definido pela implementação,
    mas deve ser pelo menos 16 caracteres.

**Palavras reservadas (keywords)**

| Instruções | Operadores | Diretivas   | Outros   |
| ---------- | ---------- | ----------- | -------- |
| assert     | char       | #assert     | const    |
| break      | defined    | #define     | enum     |
| case       | sizeof     | #else       | forward  |
| continue   | state      | #elseif     | native   |
| default    | tagof      | #emit       | new      |
| do         |            | #endif      | operator |
| else       |            | #endinput   | public   |
| exit       |            | #endscript  | static   |
| for        |            | #error      | stock    |
| goto       |            | #file       |          |
| if         |            | #if         |          |
| return     |            | #include    |          |
| sleep      |            | #line       |          |
| state      |            | #pragma     |          |
| switch     |            | #section    |          |
| while      |            | #tryinclude |          |
|            |            | #undef      |          |

Além das palavras reservadas, pawn também possui várias constantes
predefinidas; você não pode usar os nomes dos símbolos das constantes
predefinidas para nomes de variáveis ou funções.

**Constantes (literais)**

**Constantes numéricas inteiras**
. **binário**
0b seguido por uma série dos dígitos 0 e 1.
. **decimal**
uma série de dígitos entre 0 e 9.
. **hexadecimal**
0x seguido por uma série de dígitos entre 0 e 9 e as letras a a f.

    Em todas as bases numéricas, um underline pode ser usado para
    separar grupos de dígitos (hexa-)decimais. Caracteres de underline
    entre os dígitos são ignorados.

**Constantes de números racionais**

Um número racional é um número com uma parte fracionária. Um
número racional começa com um ou mais dígitos, contém um ponto
decimal e tem pelo menos um dígito após o ponto decimal.
Por exemplo, "12.0" e "0.75" são números racionais válidos.
Opcionalmente, um expoente pode ser anexado ao número racional;
a notação de expoente é a letra "e" (minúscula) seguida por uma
constante numérica inteira com sinal. Por exemplo, "3.12e4" é
um número racional válido com um expoente.

O suporte para números racionais deve ser habilitado com a diretiva
#pragma rational. Dependendo das opções definidas com esta
diretiva, o número racional representa um número de ponto flutuante
ou um número de ponto fixo.

**Constantes de caractere**

Um único caractere ASCII cercado por aspas simples é uma constante
de caractere (por exemplo: 'a', '7', '\$'). Constantes de caractere
são assumidas como constantes numéricas.

| Sequências de escape |     |                                                  |
| -------------------- | --- | ------------------------------------------------ |
| '\a'                 |     | Alarme audível (beep)                            |
| '\b'                 |     | Retrocesso (Backspace)                           |
| '\e'                 |     | Escape                                           |
| '\f'                 |     | Alimentação de formulário (Formfeed)             |
| '\n'                 |     | Nova linha (Newline)                             |
| '\r'                 |     | Retorno de carro (Carriage Return)               |
| '\t'                 |     | Tabulação horizontal                             |
| '\v'                 |     | Tabulação vertical                               |
| '\\'                 | \   | o caractere de escape                            |
| '\''                 | '   | aspas simples                                    |
| '\"'                 | "   | aspas duplas                                     |
| '\%                  | %   | sinal de porcentagem                             |
| '\ddd;'              |     | código do caractere com código decimal "ddd"     |
| '\xhhh;'             |     | código do caractere com código hexadecimal "hhh" |

O ponto e vírgula após os códigos ddd; e xhhh; é opcional.
Seu propósito é dar à sequência de escape um símbolo de
terminação explícito quando ela é usada em uma constante de string.

A barra invertida ("\") é o caractere de "escape" padrão. Você pode
definir um caractere de escape diferente com a diretiva #pragma ctrlchar
(página 120).

**Constantes de string**

Constantes de string são assumidas como arrays com um tamanho
suficiente para conter todos os caracteres mais um '\0' de terminação.
Cada string é armazenada em uma posição única na memória; não há
eliminação de strings duplicadas.

Uma string desempacotada é uma série de zero ou mais caracteres ASCII
cercados por aspas duplas. Cada elemento do array contém um único
caractere. Uma string desempacotada pode conter caracteres em um
conjunto de caracteres multi-byte, como Unicode ou UCS-4.

**constante de string desempacotada:**

    "the quick brown fox..."

Um literal de string empacotada segue a sintaxe para uma string
desempacotada, mas um "!" precede a primeira aspa dupla.

**constante de string empacotada:**

    !"...packed and sacked the lazy dog"

No caso de uma string empacotada, o parser empacota tantos caracteres
em uma célula quanto couberem. Um caractere não é endereçável como
uma unidade única, em vez disso, cada elemento do array contém
múltiplos caracteres. O primeiro caractere em um "pacote" ocupa os
bits mais altos do elemento do array. Em ambientes que armazenam
palavras de memória com o byte alto no endereço mais baixo (Big Endian,
ou formato Motorola), os caracteres individuais são armazenados nas
células de memória na mesma ordem em que estão na string.
Uma string empacotada termina com um caractere zero e a string é
preenchida (com bytes zero) para um múltiplo de células.

Uma string empacotada só pode conter caracteres de um conjunto de
caracteres de byte único, como ascii ou um dos conjuntos ascii
estendidos da norma ISO 8859.

Sequências de escape podem ser usadas dentro de strings. Veja a seção
sobre constantes de caractere (página 99) para uma lista de sequências de escape.

Há uma sintaxe alternativa para "strings simples". Em uma string simples,
cada caractere é tomado como está e sequências de escape não são
reconhecidas. Strings simples são convenientes para armazenar nomes de
arquivos/recursos, especialmente no caso em que o caractere de escape
também é usado como um caractere especial pelo sistema operacional
ou aplicativo host.

A sintaxe para uma string simples é o caractere de escape seguido pela
string entre aspas duplas. A barra invertida ("\") é o caractere de
"escape" padrão. Você não pode inserir sequências de escape em uma
string simples: todos os caracteres serão tomados literalmente.

**constante de string simples:**

    \"C:\all my work\novel.rtf"

No exemplo acima, as ocorrências de "\a" e "\n" não indicam
sequências de escape, mas sim os pares literais de caracteres
"\" e "a", e "\" e "n".

Uma string simples empacotada tem tanto o "!" quanto o caractere de
escape precedendo a aspa dupla de abertura. Ambas as strings abaixo são

**strings simples empacotadas:**

    !\"C:\all my work\novel.rtf"

    \!"C:\all my work\novel.rtf"

**Constantes de array**

Uma série de constantes numéricas entre chaves é uma constante de
array. Constantes de array podem ser usadas para inicializar variáveis
de array (veja página 65) e podem ser passadas como argumentos de
função (veja página 71).

**Constantes simbólicas**

Um arquivo fonte declara constantes simbólicas com as instruções const
e enum. A palavra-chave const declara uma única constante e enum define
uma lista de constantes — geralmente — sequenciais compartilhando o
mesmo nome de tag.

**const** _identificador = expressão constante_

Cria uma constante simbólica com o valor da expressão constante
à direita do operador de atribuição. A constante pode ser usada
em qualquer lugar onde um número literal é válido (por exemplo:
em expressões, em declarações de array e em diretivas como "#if" e "#assert").

**enum** _nome (incremento) \{ lista de constantes \}_

A instrução enum cria uma série de constantes com valores
incrementais. A lista de constantes é uma série de identificadores
separados por vírgulas. A menos que seja sobrescrito, a primeira
constante de uma lista enum tem o valor 0 e cada constante
subsequente tem o valor de seu predecessor mais 1.

Tanto o valor de uma constante quanto o valor do incremento podem
ser definidos anexando o valor ao identificador da constante.
Para definir um valor, use

name = valor

na lista de constantes. Para definir o incremento, use:

name [ incremento ]

O valor do incremento é redefinido para 1 após cada declaração de
símbolo de constante na lista de constantes.

Se tanto um incremento quanto um valor devem ser definidos para uma
constante, o incremento (notação "[. . . ]") deve preceder o valor
(notação "=").

Os símbolos na lista de constantes podem ter uma tag explícita,
que deve preceder o nome do símbolo.

O token name que segue a palavra-chave enum é opcional. Se for
incluído, e se os nomes dos símbolos não tiverem uma tag explícita,
este nome é usado como o nome da tag para cada símbolo na lista
de constantes. Além disso, o comando enum cria uma constante extra
com name para o nome da constante e o nome da tag. O valor da
última constante é o valor do último símbolo na lista de constantes
mais o valor do incremento dessa última constante.

O token de incremento que segue o token de nome opcional também é
opcional. Se incluído, especifica uma regra de pós-incremento diferente.
Por padrão, um enum incrementa o valor de cada constante sucessiva
em 1, mas você pode especificar uma regra diferente com a sintaxe
"(operador constante)", onde operador deve ser +=, \*= ou \<\<=.
O operador += cria um incremento aditivo, os operadores \*= e \<\<=
criam um incremento multiplicativo. A constante pode ser um valor
literal ou uma constante simbólica. A regra de incremento deve ser
colocada entre parênteses. Se nenhuma regra de incremento for
especificada, os parênteses podem ser omitidos também.

Uma constante simbólica que é definida localmente é válida em todo
o bloco. Uma constante simbólica local não pode ter o mesmo nome
que uma variável (local ou global), uma função ou outra constante
(local ou global).

**Constantes predefinidas**

| Nome     | Descrição                                                                                                                                                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cellbits | O tamanho de uma célula em bits; geralmente 32.                                                                                                                                                                                                                                         |
| cellmax  | O maior valor positivo válido que uma célula pode conter; geralmente 2147483647.                                                                                                                                                                                                        |
| cellmin  | O maior valor negativo válido que uma célula pode conter; geralmente -2147483648.                                                                                                                                                                                                       |
| charbits | O tamanho de um caractere empacotado em bits; geralmente 8.                                                                                                                                                                                                                             |
| charmax  | O maior valor válido de caractere empacotado; geralmente um caractere empacotado é de 8 bits e o valor máximo válido é 255.                                                                                                                                                             |
| charmin  | O menor valor válido de caractere, tanto para valores empacotados quanto desempacotados; atualmente definido como zero (0).                                                                                                                                                             |
| debug    | O nível de debug: 2 se o parser cria informações simbólicas completas mais verificação de limites em tempo de execução, 1 se o parser gera apenas verificação em tempo de execução (assertions e verificações de limites de array), e 0 (zero) se todo suporte de debug foi desativado. |
| false    | 0 (esta constante é marcada como bool:)                                                                                                                                                                                                                                                 |
| \_\_Pawn | O número da versão do compilador pawn em Decimais Codificados em Binário (BCD) — ou seja, para a versão 2.8.1 a constante é "0x281".                                                                                                                                                    |
| true     | 1 (esta constante é marcada como bool:)                                                                                                                                                                                                                                                 |
| ucharmax | O maior valor de caractere desempacotado, seu valor depende do tamanho de uma célula. Um uso típico para esta constante é verificar se uma string é empacotada ou desempacotada, veja página 137.                                                                                       |

**Nomes de tag**

Uma tag consiste em um identificador seguido por dois pontos. Não pode haver espaço em branco entre o identificador e os dois pontos.

**Nomes de tag predefinidos**

| Nome   | Descrição                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------------- |
| bool:  | Para flags "verdadeiro/falso". As constantes predefinidas true e false têm esta tag.                        |
| Fixed: | Números racionais tipicamente têm esta tag quando o suporte a ponto fixo está habilitado (página 121).      |
| Float: | Números racionais tipicamente têm esta tag quando o suporte a ponto flutuante está habilitado (página 121). |

---

`Ponto e vírgula opcional: 122`

`Constantes predefinidas: 102`

`Números racionais também são chamados de "números reais" ou "números de ponto flutuante"`

`#pragma rational: 121`

`As sintaxes para strings literais empacotadas e desempacotadas podem ser trocadas com a diretiva "#pragma pack", veja página 121`

`Exemplos: 21, 26`

`Exemplos: 9, 21`

`Identificadores: 97`

`Veja página 68 para exemplos das declarações de constantes "enum"`

`Veja página 26 para um exemplo de uma regra de incremento personalizada`

`Identificadores: 97`

---

[Voltar ao Índice](Contents)
