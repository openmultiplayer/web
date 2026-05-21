---
title: String Manipulation
sidebar_label: String Manipulation
description: "Tutorial amigável para iniciantes sobre tudo sobre manipulação de strings."
---


## Introdução

### Descrição do tutorial

Olá a todos, com certeza está uma noite tranquila e agradável, ou pelo menos está na composição deste tutorial. Então, ei, que tal acompanhar para enriquecer e/ou interagir com o foco principal deste artigo, este é e como o título sugere, vamos nos concentrar em “_Manipulação de strings_” no Pawn, passaremos pelas coisas intermediárias absolutas que todos deveriam estar cientes para algum tipo de dicas avançadas, inteligentes e eficazes.

### O que é formatação de string?

Em geral, formatar um texto é o ato de manipulá-lo para melhorar visualmente sua legibilidade, seja alterando a família da fonte, cor, peso e assim por diante.

Strings sendo uma matriz de caracteres (_alfabetos, números, símbolos_), que não chamaríamos especificamente de texto em si, mas são referidos como tal quando exibidos, podem ser processados ​​com a mesma abordagem, mas infelizmente, a interpretação de Pawn de SA-MP não permite muito (_ainda? Talvez nunca_), de modo geral, mudar a cor é o máximo que podemos chegar, sim, você ainda pode alterar/personalizar o fonte, mas isso é apenas do lado do cliente, e sim, [GTA San Andreas](https://www.rockstargames.com/sanandreas/) (_o jogo pai_) fornece algumas fontes extras, mas isso só funciona em [textdraws](../scripting/resources/textdraws) e [gametext](../scripting/functions/GameTextForPlayer), isso causa limitações em relação à apresentação de texto, mas ei, já faz mais de uma década agora, e sobrevivemos muito bem.

### Declaração de string

Como eu disse antes, strings são basicamente arrays de caracteres, então elas são usadas da mesma forma que arrays, e assim como criaríamos um array, faríamos para strings seguindo este formato; `string_name[string_size]`.

:::info

**string_name**: o nome da matriz de caracteres (_por exemplo, string, str, mensagem, texto...etc., desde que seja um nome de variável válido (comece com um caractere ou sublinhado)_).

**string_size**: o máximo de caracteres que esta string teria.

:::

```pawn
// declarando uma string de 5 caracteres
new str_1[5];

// declarando uma string de 100 caracteres
new str_2[100];
```
Você também pode predefinir valores constantes para poder usá-los várias vezes como tamanhos de string.

```pawn
// declarando uma constante
#define STRING_SIZE 20

// declarando uma string com o tamanho do valor de STRING_SIZE
new str_3[STRING_SIZE];
```
:::note

No tempo de compilação, o compilador substituirá todas as ocorrências de `STRING_SIZE` pelo valor `20`, este método economiza tempo e é mais legível na maioria dos casos, lembre-se de que o valor atribuído à constante `STRING_SIZE` deve ser um número inteiro, caso contrário, ocorrerá um erro de compilação.

:::

Além das constantes predefinidas, você pode realizar operações básicas, o operador de módulo (`%`), entretanto, causará erros de compilação se usado, você ainda pode fazer cálculos de divisão (`/`), mas lembre-se, dividir por `0` irá desencadear erros, o bônus aqui é que todos os resultados flutuantes serão arredondados automaticamente para você.

```pawn
// declarando uma constante
#define STRING_SIZE 26

// declarando strins com o uso da constante STRING_SIZE e alguns cálculos
new
  str_4[STRING_SIZE + 4],
  str_5[STRING_SIZE - 6],
  str_6[STRING_SIZE * 2],
  str_7[9 / 3];
```
Teoricamente, você pode criar matrizes ridiculamente grandes, mas SA-MP coloca poucas restrições no comprimento das strings com as quais você pode trabalhar, dependendo do que você está trabalhando, limita o número de caracteres que você normalmente pode gerar.

#### Limites de comprimento

SA-MP limita os caracteres que podem ser armazenados em uma única string e evita que os criadores de scripts exagerem no trabalho com texto. Felizmente, não é tão ruim quanto pode parecer, a lista abaixo detalha alguns desses limites;

|                     |                                                                                                                        |      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---- |
| **Text input** | O texto que você insere no chat.                                                                                        | 128 |
| **Text output** | Envie essa saída na tela do cliente.                                                                               | 144 |
| **Name** | Apelido/nome de usuário do jogador.                                                                                            | 24 |
| **Textdraw string** | Bastante autoexplicativo.                                                                                               | 1024 |
| **Dialog info** | O texto exibido em todas as caixas de diálogo do tipo `DIALOG_STYLE_MSGBOX`, `DIALOG_STYLE_INPUT` e `DIALOG_STYLE_PASSWORD`. | 4096 |
| **Dialog caption** | A legenda/título na parte superior da caixa de diálogo.                                                                                | 64 |
| **Dialog input** | A caixa de entrada em `DIALOG_STYLE_INPUT` e `DIALOG_STYLE_PASSWORD`.                                                     | 128 |
| **Dialog column** | Os caracteres em cada coluna de `DIALOG_STYLE_TABLIST_HEADER` e `DIALOG_STYLE_TABLIST`.                             | 128 |
| **Dialog row** | Os caracteres em cada coluna de `DIALOG_STYLE_TABLIST_HEADER`, `DIALOG_STYLE_TABLIST` e `DIALOG_STYLE_LIST`.        | 256 |
| **Chat bubble** | O balão de bate-papo exibido acima da etiqueta com o nome do jogador.                                                             | 144 |
| **Menu title** | O cabeçalho do menu nativo GTA San Andreas (_usado principalmente para lojas_).                                                      | 31 |
| **Menu item** | O item/linha do menu nativo GTA San Andreas (_usado principalmente para lojas_).                                                    | 31 |

Se de alguma forma esses limites forem excedidos, poucos inconvenientes podem ocorrer, pode até travar/congelar o servidor em alguns casos (_por exemplo, strings longas de textdraw_), em alguns outros casos, o texto seria apenas truncado como o título do menu (_se atingir 32 caracteres, ele truncará de volta para 30_) e itens.

Além dos limites rígidos impostos às strings, existem muitos outros sobre assuntos diversos, você pode ver a lista completa [aqui](../scripting/resources/limits).

#### Atribuindo valores

A atribuição de valores às strings pode ser feita através de vários métodos, alguns atribuem no momento da sua criação, outros depois, tem gente que usa loops, outros usam funções, e sim, tem quem faz esse processo manualmente, slot por slot, não existe uma maneira exata, certa ou errada de fazer isso, alguns métodos costumam ser mais eficazes em alguns casos do que outros, outros não, no final das contas tudo o que importa é desempenho, otimização e legibilidade.

Na maioria dos casos, você deseja fornecer um valor padrão à string após sua criação. Você pode fazer isso da seguinte maneira;

```pawn
new
  message_1[6] = "Hello",
  message_2[] = "This is another message";
```
Certifique-se de que o tamanho da string seja maior que o número de caracteres para os quais você os atribuiu, ter um tamanho de string menor ou igual a isso irá desencadear erros de compilação, deixando o slot de tamanho entre os dois colchetes vazio (como no exemplo `message_2`), dará automaticamente ao array o tamanho do texto ao qual você atribuiu mais `1`, neste caso, `23 + 1 = 24`, por quê? Ele reserva um slot para o caractere nulo (_também conhecido como terminador nulo_), mais sobre isso depois, a palavra “_Hello_” possui 5 caracteres, portanto, para armazená-la em uma string, ela deve ter 6 células, 5 células para a contagem de caracteres da palavra e uma para o **caractere nulo**.

Vamos dar uma olhada em como fazer o mesmo processo slot por slot manualmente, primeiro definimos um novo array, você pode determinar seu tamanho ou deixar vazio para o compilador preencher, ambos funcionariam bem, vamos preencher o array com caracteres para criar a string “_Hello_”.

```pawn
// Inclua o tamanho da string na declaração, ou ela não funcionará de outra forma
new message_3[6];

message_3[0] = 'H';
message_3[1] = 'e';
message_3[2] = 'l';
message_3[3] = 'l';
message_3[4] = 'o';
message_3[5] = '\0';
```
Lá, atribuímos para cada slot do array `message_3` um caractere, isso não funcionará se você declarar uma string sem tamanho definitivo, observe que para representar um único caractere, ele deve ser escrito entre duas aspas simples (`'`), também, observe como começamos com o slot 0, e é natural, considerando como enfatizei como uma string é um array de caracteres, ou seja, que o primeiro slot é sempre 0, e o o último é o seu tamanho menos 1 (_o caractere nulo não conta_), que neste caso é 4, contando de 0 a 4, o que dá 5 caracteres, sendo o sexto o terminador nulo, falaremos mais sobre isso depois.

Você também pode atribuir números de strings que serão vistos como **ASCII** (_um sistema que representa caracteres numericamente, abrange 128 caracteres variando de 0 a 127, mais sobre isso [aqui](https://en.wikipedia.org/wiki/ASCII)_) código para um caractere, a mesma mensagem “_Hello_” pode ser atribuída usando código _ASCII_ como este;

```pawn
new message_4[6];

message_4[0] = 72; // Representação ASCII do “H” maiúsculo
message_4[1] = 101; // Representação ASCII de “e”
message_4[2] = 108; // Representação ASCII de “l”
message_4[3] = 108; // Representação ASCII de “l”
message_4[4] = 111; // Representação ASCII de “o”
message_4[5] = 0; // Representação ASCII do terminador nulo
```
E sim, você pode realizar operações numéricas com esses códigos da mesma forma que faz com números normais, afinal, a máquina vê os caracteres apenas como meros números.

```pawn
new message_5[1];
message_5[0] = 65 + 1;
```
Se você produzisse `message_5[0]`, obteria **B**, estranho, certo? Bem, não, na verdade não, você pode realizar outras operações básicas (_subtração, multiplicação, divisão e até mesmo o módulo_), os números flutuantes serão arredondados automaticamente para você, vamos ver como isso funciona.

Você tem `65 + 1`, que retorna `66`, verificando a tabela _ASCII_, você descobrirá que `66` é a representação numérica do caracter “_B_” (_maiúsculo_). Portanto, o trecho acima é basicamente o mesmo que fazer: `message_5[0] = 'B'`;

Para referência, use [esta tabela ASCII](https://www.asciitable.com).

Você também pode realizar a mesma operação entre vários caracteres ou uma mistura de ambos, eles e números, aqui estão alguns exemplos;

```pawn
new message_6[3];

message_6[0] = 'B' - 1; // Que é 66 - 1, retorna 65, a representação numérica de “A”
message_6[1] = 'z' - '&'; // Que é 122 - 38, retorna 84, a representação numérica de “T”
message_6[2] = '0' + '1'; // Que é 48 + 49, retorna a representação numérica de “a”, observe que '0' e '1' não são os números 0 e 1, mas sim caracteres
```
Às vezes pode ficar confuso se você nunca conheceu o sistema _ASCII_, basta um pouco de prática, porque entender como ele funciona é muito útil.  
O código _ASCII_ não é exclusivo apenas para números decimais, você também pode usar números hexadecimais ou binários da mesma maneira.

```pawn
new numString[4];

numString[0] = 0x50; // O número decimal 80 em hexadecimal, p maiúsculo, “P”
numString[1] = 0b1000001; // O número decimal 65 em binário, maiúsculo a, “A”
numString[2] = 0b1010111; // O número decimal 87 em binário, w maiúsculo, “W”
numString[3] = 0x4E; // O número decimal 78 em hexadecimal, maiúsculo n, “N”
```
Agora vamos ver outra coisa, atribuir valores através de loops, é literalmente o mesmo que preencher um array através de loops, você também pode usar todos os tipos de métodos de loop, como segue;

```pawn
// Vamos preencher esta string com letras maiúsculas
new message_7[26];

// O loop for
for (new i = 0; i < 26; i++)
  message_7[i] = 'A' + i;

// O loop enquanto
while (i++ < 'Z')
  message_7[i - 'A'] = i;

// O loop faça-enquanto
new j = 'A';

do {
  message_7[j - 'A'] = j;
}
while (j++ < 'Z');

 // Você pode até usar goto para simular um loop, mas não é recomendado.
```
Todos os três produzirão exatamente a mesma string, _ABCDEFGHIJKLMNOPQRSTUVWXYZ_.

Se você achou os loops acima confusos, você pode querer dar uma olhada mais profunda em como os loops funcionam, mais sobre isso pode ser encontrado [aqui](../scripting/language/ControlStructures#loops) e [aqui](https://wiki.alliedmods.net/Pawn_Tutorial#Looping). Observe como usei caracteres em algumas condições lógicas, como `j++ < 'Z'` que se traduz facilmente em `j++ < 90`, novamente, os caracteres são tratados como números, não se sinta estranho, você pode verificar a tabela _ASCII_ sempre que desejar.

Digamos que você queira preencher uma string com um número de um caractere específico, (por exemplo, “_AAAAAA_”, “_TTTTTT_”, “_vvvvvv_”, “_666_” (_não, não é uma coincidência_)), a ideia típica que pode cruzar a maioria dos criadores de scripts é codificá-la, mas e quanto a strings longas, bem, que tal usar um loop, tudo bem também, mas e se eu lhe dissesse que existe uma maneira ainda mais eficiente Dessa forma, assim como você preencheria um array com o mesmo valor, faria o mesmo com strings.

```pawn
new message_8[100] = {'J', ...};
```
O código acima declara uma nova string chamada `message_8` com 100 células (_variando de 0 a 99_) e dá a cada slot o valor `'J'`, que obviamente pode ser usado tanto como caractere **J**, quanto como número **74** de acordo com o sistema _ASCII_.

Outra coisa que você pode fazer com isso é preencher a string com caracteres cujos valores são baseados em intervalos, veja o exemplo dos alfabetos maiúsculos de _A_ a _Z_ acima? Vamos criar a mesma string usando este método.

```pawn
new message_9[26] = {'A', 'B', ...};
```
Quão fácil é isso?! isso é mais otimizado e fácil de ler e fornece os mesmos resultados que os 3 exemplos feitos usando métodos de loop acima, então como funciona exatamente? Bom, demos os valores iniciais da string, `'A'` e `'B'`, que são respectivamente _65_ e _66_, o compilador calcula o intervalo entre os dois valores, que neste caso é _1_, e completa o preenchimento das células vazias com valores baseados nesse intervalo até preencher todo o array, você pode colocar quantos valores iniciais quiser, mas ele só vai considerar o intervalo entre os dois últimos valores, e funciona com base nisso, lembre-se de que os valores iniciais são tratados como código _ASCII_, portanto, tentar gerar intervalos numéricos usando esse método em uma string resultará em algo inconveniente, digamos que você declarou alguma string aleatória como esta;

```pawn
new rand_str[5] = {'1', '5', ...};
```
Idealmente, isso deveria ter a saída **151520** (_mais especificamente “1 5 15 20”_), mas em vez disso, a saída; **159=A**, que na verdade é a saída correta, por quê? Porque lembre-se, este é o código _ASCII_, '_1_' é _49_ e '_5_' é _53_, o intervalo entre os dois é _4 (53 - 49)_, a string aceita 5 caracteres, já ocupamos duas células quando incluímos o catálogo inicial, então ficam 3 células vazias que devem ser preenchidas respeitando o intervalo de 4, então é assim que funciona **[ 49 | 53 | 57 | 61 | 65 ]**, vamos substituir cada valor numérico por sua correspondência de código _ASCII_. **[ '1' | '5' | '9' | '=' | 'A']**, faz mais sentido né?!

## O terminador nulo

Mencionei isso nas primeiras seções deste tutorial, espero que não tenha sido tão confuso no início, mas mesmo que tenha sido, vamos desfazer a confusão já, não se preocupe, não é nada difícil ou mesmo que avance, apenas um fato básico que você deve estar ciente, vou mantê-lo o mais breve possível, mas se quiser uma visão mais aprofundada sobre isso, você pode visitar [este artigo](https://en.wikipedia.org/wiki/Null_character).

Então, o terminador nulo (_também conhecido como caractere nulo_), é um caractere presente em todas as strings, sua função é indicar que uma string terminou, você pode pensar nele como um ponto final (.) qualquer coisa que venha depois desse caractere não é contabilizado e completamente ignorado. Você não pode digitá-lo usando o teclado, mas pode consultar seu valor durante a codificação; porém, ele está presente na tabela _ASCII_, conhecido como _NUL_, representado pelo número 0.

Em _pawn_, você pode digitá-lo como valor numérico ou como caractere '_\0_'. A barra invertida atua como um caractere de escape, serve para informar à máquina que esse caractere é o caractere nulo com o valor 0 e **não** o caractere `'0'` que tem o valor `48`.

Há um símbolo usado em _pawn_, **EOS**, abreviação de **E**nd **O**f **S**tring, é uma macro predefinida para o terminador nulo, você pode definir o terminador nulo de várias maneiras diferentes;

```pawn
message_9[0] = 0;
message_9[0] = '\0';
message_9[0] = 0b; // O número decimal 0 em binário
message_9[0] = 0x00; // O número decimal 0 em hexadecimal
message_9[0] = _:0.0; // O número flutuante 0.0, temos que prefixá-lo com os erros de compilação de detag '_' para avoid
message_9[0] = false;
message_9[0] = EOS;
```
Como eu disse anteriormente no tutorial, você pode ignorar a atribuição do caractere nulo, mas ele está sempre presente nas células vazias, quando você declara uma nova string, todas as suas células são automaticamente ocupadas pelo terminador nulo, então, por exemplo, se eu prosseguir e declarar esta string `text[3]`, todas as suas células recebem o valor `0` por padrão, aqui está uma representação visual simples do conteúdo da string;

|            |      |      |      |
| ---------- | ---- | ---- | ---- |
| Cells | 0 | 1 | 2 |
| ASCII code | 0 | 0 | 0 |
| Characters | '\0' | '\0' | '\0' |

Aqui está outro exemplo de uma string pré-preenchida.

```pawn
new text_1[8] = "Hello";
```
Aqui está o conteúdo da string por célula;

|            |     |     |     |     |     |      |      |      |
| ---------- | --- | --- | --- | --- | --- | ---- | ---- | ---- |
| Cells | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| ASCII code | 72 | 101 | 108 | 108 | 111 | 0 | 0 | 0 |
| Characters | 'H' | 'e' | 'eu' | 'eu' | 'o' | '\0' | '\0' | '\0' |

Se você, por exemplo, quiser excluir o conteúdo desta string, basta fazer isso usando um dos três exemplos abaixo;

```pawn
text_1[0] = 0;
text_1[0] = EOS;
text_1[0] = '\0';
```
Passar a string por uma varredura de raio-X imprimirá o seguinte;

|            |      |     |     |     |     |      |      |      |
| ---------- | ---- | --- | --- | --- | --- | ---- | ---- | ---- |
| Cells | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| ASCII code | 0 | 101 | 108 | 108 | 111 | 0 | 0 | 0 |
| Characters | '\0' | 'e' | 'eu' | 'eu' | 'o' | '\0' | '\0' | '\0' |

Se você tentar gerar esta string, tudo além do número do slot 0 será ignorado e, portanto, rotulado como uma string vazia, até mesmo a função `strlen` retornará 0, pois depende do posicionamento do caractere nulo para recuperar o comprimento da string.

## Funções de manipulação de strings

Quando se trata de trabalhar com vários pedaços de texto, _pawn_ ajuda você, fornece algumas funções muito básicas que fazem o trabalho com eficiência, sem necessidade de criar as suas próprias quando você tem suporte nativo que garante velocidade e otimização.

Estas são algumas funções suportadas nativamente (_tiradas de string.inc_);

```pawn
native strlen(const string[]);
native strpack(dest[], const source[], maxlength=sizeof dest);
native strunpack(dest[], const source[], maxlength=sizeof dest);
native strcat(dest[], const source[], maxlength=sizeof dest);
native strmid(dest[], const source[], start, end, maxlength=sizeof dest);
native bool: strins(string[], const substr[], pos, maxlength=sizeof string);
native bool: strdel(string[], start, end);
native strcmp(const string1[], const string2[], bool:ignorecase=false, length=cellmax);
native strfind(const string[], const sub[], bool:ignorecase=false, pos=0);
native strval(const string[]);
native valstr(dest[], value, bool:pack=false);
native bool: ispacked(const string[]);
native uudecode(dest[], const source[], maxlength=sizeof dest);
native uuencode(dest[], const source[], numbytes, maxlength=sizeof dest);
native memcpy(dest[], const source[], index=0, numbytes, maxlength=sizeof dest);
```
Examinaremos mais de perto alguns deles, aqueles que são usados ​​com mais frequência.

- A função `strlen` (este e `sizeof` são coisas completamente diferentes), que pega uma string como parâmetro, retorna o comprimento dessa string (o número de caracteres que ela possui), mas preste atenção pois isso é um pouco complicado de como funciona, já disse isso anteriormente no tutorial, esta função depende da posição do caracter nulo para determinar o comprimento da string, portanto qualquer outro caractere não nulo válido que vier depois não será contado, pois assim que o primeiro caractere nulo for alcançado, a função retornará o número de células desde o início até esse caractere nulo.

- O `strcat` concatena strings entre si, leva 3 parâmetros.

  ```pawn
  new str_dest[12] = "Hello", str_source[7] = " World";
  strcat(str_dest,str_source);
  ```
  Se produzíssemos `str_dest`, ele mostraria **Hello World**, as duas strings foram adicionadas uma à outra e o resultado foi armazenado em `str_dest`, _“Hello” + “World” = “Hello World”_, observe como incluímos esse espaço na segunda string, sim, os próprios espaços são caracteres, de acordo com a tabela _ASCII_, seu valor é `32`, se não tivéssemos adicionado o espaço, a string resultante teria sido **HelloWorld**.

- A função `strval` irá converter uma string em um número, por exemplo, a seguinte string, `"2017"` será convertida para o número `2017`, isso funciona em números com e sem sinal, se a string não tiver caracteres numéricos, a função retornará `0`, o mesmo acontece se a string tiver um caractere numérico mas começar com caracteres não numéricos, se uma string começar com caracteres numéricos, mas também incluindo caracteres não numéricos, os caracteres numéricos ainda serão recuperados e convertidos. Aqui estão alguns casos de uso;

  ```pawn
  strval("2018"); // Retorna “2018”.
  strval("-56"); // Retorna “-56”.
  strval("17.39"); // Retorna “17”, o número flutuante 17.39 foi definido automaticamente para nós.
  strval("no number here"); // Retorna “0”.
  strval("6 starts"); // Retorna “6”.
  strval("here we go, 2018"); // Retorna “0”.
  strval("2017 ended, welcome 2018"); // Retorna “2017”.
  ```
:::tip

Existem muitas bibliotecas feitas pela comunidade que você pode baixar e que têm a ver com manipulação de strings. Não consigo pensar em uma inclusão melhor do que [strlib](https://github.com/oscar-broman/strlib).

:::

### A função de formato

Esta é provavelmente a função relacionada a strings mais usada na comunidade, muito simples e amigável, tudo o que faz é formatar pedaços de texto e juntá-los, pode ser implementada em diversas situações, como vincular variáveis ​​e strings, incorporar cores, adicionar quebras de linha... etc.

```pawn
format(output[], len, const format[], \{Float, _\}:...)
```
A função de formatação toma como parâmetros o array de saída, seu tamanho (_número de suas células_), a string de formatação (_isso pode ser pré-armazenado em outro array, ou atribuído diretamente de dentro da função_) e, finalmente, alguns parâmetros opcionais, que podem ser variáveis ​​de diferentes tipos. Vamos usar esta função para atribuir um valor a uma string vazia.

```pawn
new formatMsg[6];
format(formatMsg, 6, "Hello");
```
A saída de `formatMsg` é **Hello**, lembre-se que esta é uma maneira ruim de atribuir valores a strings, principalmente por causa de sua velocidade, existem métodos melhores para fazer isso, já discutimos alguns deles nos estágios iniciais deste tutorial.

Lembre-se de sempre colocar o tamanho correto do array, caso contrário, ele ainda funcionará, mas apresenta algum comportamento indesejado, a função de formato irá transbordar o tamanho do seu array, e acredite em mim, você não quer que isso aconteça, se você não quer se preocupar em colocar o tamanho correto da string toda vez que quiser trabalhar com esta função, você pode simplesmente usar a função `sizeof` (_não é uma função em si, mas sim uma diretiva do compilador_), vimos anteriormente uma função chamado `strlen` que retorna o número de caracteres que uma string possui (_excluindo e parando no caractere nulo_), mas este retorna o tamanho do array, ou seja, o número de células que este array possui, sejam elas preenchidas com caracteres válidos ou não, neste caso, 6.

```pawn
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), "Hello");
```
O texto deve sempre ser colocado entre aspas duplas, porém, existe uma forma incomum de inserir texto, que raramente é utilizada, utiliza o símbolo numérico `#` e funciona da seguinte forma:

```pawn
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), #Hello);
```
Suporta espaços, caracteres de escape e você pode até usar a combinação de aspas duplas e sinal numérico;

```pawn
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), "Hello "#World);
```
O código acima irá inserir **Hello World**, este método de inserção de strings é mais conhecido por ser usado com constantes predefinidas. Vamos dar uma olhada neste exemplo de uso de duas constantes predefinidas diferentes, uma sendo um número inteiro `2017` e a outra sendo uma string `"2018"`.

```pawn
#define THIS_YEAR 2018 // Esta constante tem um número inteiro como valor
#define NEW_YEAR "2019" // Esta constante tem uma string como valor

new formatMsg[23];
format(formatMsg, sizeof(formatMsg), "This is "#THIS_YEAR", not"NEW_YEAR);
```
Isso gerará **Este é 2018, não 2019**, a razão pela qual enfatizei que as duas constantes são de tipos diferentes é o uso do sinal numérico `#`, se o valor **não** for uma string, então você deve prefixá-lo com o sinal numérico `#THIS_YEAR` para que seja tratado como `"2018"`, ou então você receberá alguns erros de compilação, pois para um valor de string, você pode optar por incluir ou omitir o sinal numérico, porque funcionará de qualquer maneira (`NEW_YEAR` é o mesmo que `#NEW_YEAR`). Você só pode usar isso para recuperar valores de constantes predefinidas, não funcionará com variáveis ​​regulares, ou arrays/strings, pois o tratamento deles pode ser feito usando espaços reservados, mais sobre isso mais tarde.

Você também pode alinhar quantas aspas duplas quiser, uma ao lado da outra, embora não faça sentido, pois é mais natural apenas escrever uma frase em um único par de aspas duplas, aqui está um exemplo da mesma frase escrita em ambos os conceitos;

```pawn
new formatMsg[29];

// Um único par de aspas duplas
format(formatMsg, sizeof(formatMsg), "This is reality...or is it?!");

// Vários pares de aspas duplas
format(formatMsg, sizeof(formatMsg), "This is reality""...""or is it?!");
```
Ambos produzirão a mesma frase, **Isso é realidade... ou é?!**.

## Dicas de otimização

Agora que vimos algumas coisas básicas sobre declaração de string, manipulação...etc. alguns de nós simplesmente começaríamos a praticar sem levar em conta algumas diretrizes gerais seguidas pela comunidade, se mais pessoas se preocupassem com a legibilidade, a otimização e o desempenho, o mundo teria sido um lugar melhor. um código que compila bem não significa que funcione bem, a maioria dos bugs vem daquelas pequenas coisas que negligenciamos ou criamos de tal forma que não interagiriam de maneira amigável com outros sistemas. um código bem escrito sobreviverá à provação do tempo, como? Você sempre pode voltar a ele e depurar, consertar, revisar com facilidade, a otimização também refletirá o resultado no desempenho, sempre tente obter o melhor de sua máquina, e o código otimizado é o caminho a seguir.

A primeira coisa que deve ser mencionada, e que pessoalmente me desencadeia, é ver como strings grandes estão sendo criadas quando nem quase metade das células declaradas são usadas, apenas declare strings do tamanho que você usará, células extras apenas ocuparão mais memória, vamos dar uma olhada em uma maneira supostamente não otimizada de declarar uma string.

```pawn
new badString[100];
badString ="Hello :)";
```
Declaramos uma string com _100 células_, _1 célula_ ocupa _4 bytes_, vamos fazer algumas contas básicas, _100 \* 4 = 400_ bytes, isso é aproximadamente _0,0004 Megabyte_, nada para os padrões de hoje, eu sei, mas supostamente, em um script enorme, obviamente você terá que usar mais de uma string, _60_, _70_, caramba _100_ mais strings? (_possivelmente mais_), esses números minúsculos vão se acumular, resultando em um número muito maior, e causar sérios problemas mais tarde, e acredite em mim quando digo, a string que declaramos não chega tão perto de parecer estúpida quando comparada com aquelas com tamanho cinco vezes maior ou mais.

O que mais encontro, algo que é estereotipadamente vago, é o uso do misterioso tamanho de string -256-, por que gente? Por que?

Tenha em mente os limites que SA-MP coloca ao lidar com strings, onde a string _256 de comprimento_ entra em jogo? O que você fará com uma string tão longa (_exceto para formatar uma string de diálogo/textdraw_)? A entrada máxima da string tem _128è caracteres, isso é metade do tamanho, \_512 bytes_ foram desperdiçados, diga o quê? Você pretendia usá-lo para saída, não para entrada? Isso ainda é muito grande, as strings de saída não devem passar _144_ caracteres, vê para onde estou indo? Vamos tentar ver como corrigiríamos nossa falha, temos esta frase, “Boa string”, ela contém _11_ caracteres (_o espaço também é contado como um caractere_) + _1_ para o terminador nulo (_tenho que sempre ter esse cara em mente_), o que perfaz _12_ caracteres no total.

```pawn
new goodString[12];
goodString="Good string";
```
Viu como preservamos a memória? Apenas **48** bytes e nenhum peso extra que possa causar problemas mais tarde são muito melhores.

Mas ei, e se eu te dissesse, você pode obter um código ainda mais otimizado, isso mesmo, você já ouviu falar em **strings compactadas**? Uma string normalmente é formada por várias células e, como dissemos anteriormente, cada célula representa 4 bytes, portanto, as strings são compostas de vários conjuntos de _4 bytes_. Um único caractere ocupa 1 byte, e cada célula permite que apenas um único caractere seja armazenado, ou seja, em cada célula 3 bytes são desperdiçados,

```pawn
new upkString[5];
upkString = "pawn";
```
A string acima ocupa 5 células (_que tem aproximadamente 20 bytes_) e pode ser reduzida a apenas 8 bytes, apenas 2 células.

```pawn
new pkString_1[5 char];

pkString_1 = !"pawn";
// ou
pkString_1 = !#pawn;
```
É simplesmente assim que funciona, você declara uma string com o tamanho que normalmente teria (_contando o terminador nulo, é claro_) e, em seguida, sufixa-a com a palavra-chave with `char`, cada caractere será armazenado em bytes em vez de células, o que significa que cada célula terá 4 caracteres armazenados, lembre-se que ao atribuir valores a strings compactadas, prefixe-os com um ponto de exclamação `!`, isso, no entanto, não se aplica a um único personagem.

Esta é uma representação visual aproximada do conteúdo de `upkString`;

|            |                      |                      |                      |                      |                   |
| ---------- | -------------------- | -------------------- | -------------------- | -------------------- | ----------------- |
| Cell | 0 | 1 | 2 | 3 | 4 |
| Bytes | 0. 1. 2. 3 | 0. 1. 2. 3 | 0. 1. 2. 3 | 0. 1. 2. 3 | 0. 1. 2. 3 |
| Characters | \0 . \0 . \0 . **p** | \0 . \0 . \0 . **a** | \0 . \0 . \0 . **o** | \0 . \0 . \0 . **n** | \0 . \0 . \0 . \0 |

E é assim que `pkString_1` seria no segundo exemplo;

|            |                               |                   |
| ---------- | ----------------------------- | ----------------- |
| Cell | 0 | 1 |
| Bytes | 0. 1. 2. 3 | 0. 1. 2. 3 |
| Characters | **p** . **a** . **c** . **n** | \0 . \0 . \0 . \0 |

Você também pode acessar os indexadores de uma string compactada, como segue;

```pawn
new pkString_2[5 char];

pkString_2{0} = 'p';
pkString_2{1} = 97; // Código ASCII para o caractere “a”.
pkString_2{2} = 0b1110111; // O número decimal 199 em binário se traduz no caractere “w”.
pkString_2{3} = 0x6E; // O número decimal 110 em hexadecimal se traduz no caractere “n”.
pkString_2{4} = EOS; // EOS (fim da string) possui o valor 0, que é o código ASCII para \0 (NUL), o caractere nulo.
```
O resultado será o mesmo que `pkString_1` neste caso, como você pode ver, o código _ASCII_ ainda está sendo levado em consideração, observe que ao acessar indexadores em strings compactadas, usamos **colchetes** em vez de **colchetes**. Isso significa que estamos indexando os próprios bytes, e não as células.

:::info

Apesar de sua eficácia na preservação da memória, a implementação de Pawn de SA-MP não suporta 100% strings compactadas, mas você ainda pode usá-las em strings/matrizes usadas com pouca frequência.

:::

## Saída de string

####Console

##### `print`

A função a seguir é provavelmente a função mais básica não apenas no Pawn, mas também em muitas outras linguagens de programação; ela simplesmente aceita um parâmetro e o envia no console.

```pawn
print("Hello world");
```
```
Hello world
```
Você também pode passar strings pré-declaradas ou constantes predefinidas, bem como mesclar várias delas, ou usar o sinal numérico `#` também, assim como costumávamos fazer com a função de formato, mas lembre-se de que isso não inclui vários parâmetros, só podemos passar um único parâmetro.

```pawn
#define HAPPY_STRING "I'm happy today" // Constante de string.
#define NEW_YEAR 2019 // Constante inteira.
new stylishMsg[12] = "I'm stylish";

print(HAPPY_STRING);
print(stylishMsg);
print(#2019 is beyond the horizon);
print("I'm excited for "#NEW_YEAR);
print("What ""about"" you""?");
```
```
I'm happy today
I'm stylish
2019 is beyond the horizon
I'm excited for 2019
What about you?
```
Observe como usamos o símbolo numérico aqui da mesma forma que fizemos com a função de formato, se o valor for um número inteiro, você o prefixa com `#` para que seja tratado como uma string.

Lembre-se também de que a função `print` suporta strings compactadas, porém aceita apenas variáveis ​​​​do tipo string (_array de caracteres_), passando qualquer coisa que não seja um array, uma string (_seja entre aspas duplas ou prefixada pelo símbolo numérico_) causará erros de compilação, portanto, fazer qualquer um dos seguintes não funcionará;

```pawn
// Caso 1
new _charA = 'A';
print(_charA);

// Caso 2
new _charB = 66;
print(_charB);

// Caso 3
print('A');

// Caso 4
print(66);
```
Vamos ver como podemos consertar isso;

```pawn
// Caso 1
new _charA[2] = "A";
print(_charA);
```
Mudamos as aspas simples para aspas duplas e damos ao array duas células, uma com o caractere A e a segunda para o terminador nulo, porque qualquer coisa entre aspas duplas é uma string, a saída é **A**.

```pawn
// Caso 2
new _charB[2] = 66;
print(_charB);
```
Alteramos `_charB` para um array com uma célula e definimos a célula rotulada como 0 para o valor de `66`, que se traduz em **B** de acordo com a tabela _ASCII_, a saída é **B**, preservamos uma célula adicional para o terminador nulo (_quanto há para que não seja mais engraçado?_).

```pawn
// Caso 3
print("A");
```
Não há muito a dizer, basta mudar das aspas simples para um par de aspas duplas.

Quanto ao quarto caso, não há muito que possamos fazer enquanto trabalhamos com a função `print`, mas pode simplesmente ser resolvido usando outra função semelhante, chamada...

##### `printf`

Abreviação de “_print formatted_”, posso simplesmente dizer, esta é uma versão mais diversificada da função `print` anterior, mais especificamente, é como uma combinação entre a função `format` e a função `print`, o que significa que também imprime caracteres no console do servidor, mas com o benefício de formatar o texto de saída.

Ao contrário de `print`, `printf` aceita vários parâmetros, e com diferentes tipos também, porém não suporta strings compactadas, para expandir sua funcionalidade, usamos essas sequências chamadas “_especificadores de formato_”, mais sobre elas posteriormente, gerando qualquer coisa além de **1024** caracteres <u>crash o servidor</u>, então tome notas sobre isso.

```pawn
#define RANDOM_STRING "Vsauce"
#define RANDOM_NUMBER 2018

printf("Hey "RANDOM_STRING", Micheal here! #"#RANDOM_NUMBER);
```
Observe como, de forma semelhante às funções `print` e `format`, aninhamos essas strings em uma, o que gera o seguinte;

```
Hey Vsauce, Micheal here! #2018
```
A função `printf`, como eu disse antes, realmente brilha quando **especificadores de formato** são usados, é o que a distingue e a diferencia, você pode anexar quantas variáveis ​​quiser e produzir strings simples e complexas com facilidade, teremos uma visão muito mais profunda sobre isso quando formos apresentados a esses especificadores mais tarde.

#### Mensagens do cliente

Além dos outros textos de bonecos que você pode imprimir no console do servidor, que são usados principalmente para depuração, há mensagens que são impressas na tela do cliente, na seção de chat, essas também podem ser formatadas da mesma forma, mas também suportam incorporação de cores, o que torna uma apresentação maravilhosa para textos (_se usados ​​corretamente, é claro_).

Tenha em mente que as restrições de SA-MP na exibição de strings também se aplicam a este tipo de mensagens, sendo como as anteriores, limitadas a menos de _144 caracteres_, caso contrário a mensagem não será enviada, às vezes até travarão alguns comandos.

São duas funções que imprimem nativamente o texto na tela do cliente, a única diferença entre elas é o furo, a primeira leva três parâmetros, o id do jogador que deseja imprimir o texto em sua tela, a cor do texto e o texto em si.

```pawn
SendClientMessage(playerid, color, const message[])
```
Digamos que você queira enviar uma mensagem de texto para o jogador cujo id é 1, dizendo “Olá!”;

```pawn
SendClientMessage(1, -1, "Hello there!");
```
Simples assim, o jogador com ID de 1 receberá uma mensagem dizendo **Olá!**, o `-1` é o parâmetro de cor, neste caso é a cor **branco**, mais sobre cores depois.

Obviamente, você também pode passar um array de caracteres, strings formatadas...etc. E como vimos com outras funções, você pode usar o sinal numérico `#`.

```pawn
#define STRING_MSG "today"
new mornMsg[] = "Hello!";

SendClientMessage(0, -1, mornMsg);
SendClientMessage(0, -1, "How are you ",STRING_MSG#?);
```
Como você pode ver no exemplo acima, isso enviará ao jogador com o id _0_ duas mensagens coloridas em branco, a primeira mensagem dirá “_Olá!_”, e a segunda dirá, “_Como você está hoje?_”, bem semelhante ao funcionamento de outras funções. Lembre-se de que números inteiros constantes predefinidos devem ser prefixados com o símbolo `#`.

```pawn
#define NMB_MSG 3
SendClientMessage(3, -1, "It's "#NMB_MSG" PM");
```
Bastante autoexplicativo, o texto será enviado ao jogador com o id _3_, colorido em branco, dizendo “_São 3 PM_”.

Agora que você sabe como enviar uma mensagem para alguém, você pode usar a mesma abordagem para enviar a mesma mensagem para todos, brincadeira de criança, você pode simplesmente colocar a função em um loop que passa por todos os jogadores conectados, e correr o risco de mostrar seu código em público e encerrar o dia, mas ei, já existe uma função nativa que faz exatamente a mesma coisa, as mesmas regras se aplicam, a única coisa que difere entre os dois é uma ligeira mudança em sua sintaxe.

```pawn
SendClientMessageToAll(color, const message[]);
```
bastante autoexplicativo também, exposto por seu nome, agora vamos enviar a todos no servidor uma mensagem de saudação.

```pawn
SendClientMessageToAll(-1, "Hello everyone!");
```
Assim mesmo, você pode brincar com ele da mesma forma que faz com o outro irmão, dois brinquedos da mesma marca mesmo, só tente não ultrapassar o limite de 144 caracteres.

#### Desenhos de texto

Uma das funcionalidades mais poderosas do SA-MP, basta soltar sua imaginação, textdraws são basicamente formas gráficas/textos/sprites/modelos de visualização...etc. que podem ser exibidos nas telas dos clientes, eles tornam o UI especialmente muito mais animado e interativo (_até certo ponto_). Mas ei, aqui também há limitações, por exemplo, você não pode exibir uma string com mais de 1.024 caracteres, para ser honesto, isso é mais que suficiente. Nada de especial pode ser dito aqui, mesmo com sua ampla funcionalidade, strings que podem ser exibidas são pobres em formatação, você não pode fazer tanto quanto poderia com outras funções de saída, parece um pouco limitado quando se trata disso, mas certamente compensa a falta de formatação com outras coisas interessantes, mais sobre textdraws [aqui](../scripting/resources/textdraws).

#### Diálogos

Os diálogos podem ser considerados “_caixas de mensagem_”, eles, é claro, vêm em tipos diferentes, aceitam poucas entradas diferentes e, mais importante, aceitam todos os tipos de formatação que uma string normal faz, o que os torna muito mais fáceis de usar do que o textdraw. Existem limitações em relação a eles também, como tamanhos de string e a capacidade de exibi-los apenas de forma síncrona na tela do cliente, SA-MP fornece apenas uma função nativa para lidar com diálogos e, honestamente, essa seria uma de suas últimas preocupações, já que a função solitária faz seu trabalho, e o faz de forma eficiente, mais em diálogos [aqui](../scripting/functions/ShowPlayerDialog).

### Interpretação de cores

#### Mensagens e diálogos do cliente

##### RGBA

**RGBA** (_abreviação de vermelho verde azul alfa_), é um uso simples do modelo **RGB** com um canal extra, o canal alfa, basicamente, uma forma de representar cores digitalmente, misturando variações de vermelho, verde, azul e alfa (_opacidade_), mais sobre isso [aqui](https://en.wikipedia.org/wiki/RGBA_color_space).

Na implementação de Pawn de SA-MP, usamos números hexadecimais para representar esses espaços de cores, vermelho, verde, azul e alfa são anotados por 2 bits cada, resultando em um número hexadecimal de 8 bits, por exemplo; (_FF0000FF = vermelho_), (_00FF00FF = verde_), (_0000FFFF = azul_), (_000000FF = preto_), (_FFFFFFFF = branco_), aqui está uma visualização mais clara desta notação:

> <span style={{ color: 'red' }}>FF</span><span style={{ color: 'green' }}>FF</span><span style={{ color: 'blue' }}>FF</span><span style={{ color: 'grey' }}>FF</span>

Muitas linguagens de programação/script prefixam números hexadecimais com o sinal numérico `#`. No Pawn, entretanto, nós os prefixamos com `0x`, então o seguinte número hexadecimal _8060C1FF_ se torna _0x8060C1FF_.

Podemos, claro, usar números decimais para representar cores, mas é muito mais claro usar a notação hexadecimal, por ser a mais legível entre as duas, vejamos o exemplo a seguir;

```pawn
// Representando a cor branca com números decimais
SendClientMessageToAll(-1, "Hello everyone!");

// Representando a cor branca com números hexadecimais
SendClientMessageToAll(0xFFFFFFFF, "Hello everyone!");

// Uma mensagem do cliente colorida em branco será enviada a todos
```
Tenha em mente que atribuir todos os bits ao mesmo valor resultará em variações de tons de cinza (_sem trocadilhos_), atribuir o canal alfa a 0 tornará o texto invisível.

:::tip

É possível formatar textos com multicolor simultaneamente, mas para isso incorporamos a notação mais simples **RGB**.

:::

##### RGB

Isso é exatamente como os espaços de cores **RGBA**, mas sem canal alfa, apenas uma mistura de vermelho, verde e azul, anotado como um número hexadecimal de 6 bits, em Pawn, essa notação é usada principalmente para incorporar cores em textos, basta colocar seu número hexadecimal de 6 bits entre um par de colchetes e você está pronto para começar, por exemplo; (**\{FF0000\} = vermelho**), (**\{00FF00\} = verde**), (**\{0000FF\} = azul**), (**\{000000\} = preto**), (**\{FFFFFF\} = branco**), aqui está uma visualização mais clara desta notação: `{FFFFFF}`. Vejamos este exemplo rápido aqui;

```pawn
SendClientMessageToAll(0x00FF00FF, "I'm green{000000}, and {FF0000}I'm red");
```
Isso enviará a seguinte mensagem para todos (_e não sou Italian_):

<span style={{color: '#00ff00ff'}}>I sou verde</span><span style={{color: '#ffffff'}}> e </span><span style={{color: '#ff0000'}}>I sou vermelho</span>

Tenha em mente que a notação hexadecimal não diferencia maiúsculas de minúsculas, então digitar `0xFFC0E1FF` é o mesmo que digitar `0xfFC0e1Ff`, o mesmo vale para cores incorporadas, `{401C15}` é o mesmo que `{401c15}`.

Às vezes, trabalhar com cores pode ser bastante trabalhoso. Não é tão fácil sair por aí lembrando de todos aqueles números hexadecimais longos como se não fosse grande coisa. Você deve sempre ter uma referência para voltar, há muitos seletores de cores on-line que você pode usar, você pode simplesmente pesquisar no Google “_color picker_” e escolher entre milhares deles, deixe-me fazer isso com você, se não se importar, [aqui está uma ferramenta simples](https://www.webfx.com/web-design/color-picker/) que eu recomendo usar ao trabalhar com cores.

Um dos problemas que as pessoas encontram é gerenciar seu fluxo de trabalho, que se bem feito, facilita o ritmo de trabalho e torna menos penoso trabalhar em torno de seus projetos, embora as ferramentas de seleção de cores sejam de grande ajuda, você ainda pode perder muito tempo entrando e saindo toda vez que precisar escolher uma cor, a frustração disso pode ser tão chata quanto uma pizza com abacaxi, felizmente, você pode aproveitar as constantes predefinidas e definir suas cores mais usadas para uso posterior, aqui está um exemplo simples;

```pawn
#define COLOR_RED 0xFF0000FF
#define COLOR_GREEN 0xFF0000FF
#define COLOR_BLUE 0xFF0000FF

SendClientMessageToAll(COLOR_RED, "I'm a red text");
SendClientMessageToAll(COLOR_GREEN, "I'm a green text");
SendClientMessageToAll(COLOR_BLUE, "I'm a blue text");
```
Este último também pode ser feito em cores incorporadas;

```pawn
#define COL_RED "{FF0000}"
#define COL_GREEN {FF0000}
#define COL_BLUE "{FF0000}"

SendClientMessageToAll(-1, ""COL_RED"I'm a red text");
SendClientMessageToAll(-1, "{"COL_GREEN}"I'm a green "COL_BLUE"and blue");
ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Notice", "{"COL_GREEN"}Hello! "COL_RED"what's up?", "Close", "");
```
No momento da compilação, todas as constantes predefinidas serão substituídas por seus valores, e assim, este `"COL_RED"I’m a red text` se torna este `”{FF0000}”I’m a red text`, observe como usamos dois métodos para predizer essas cores, `RRGGBB` e `{RRGGBB}`, vai para a preferência pessoal qual método seguir, pessoalmente, acho que defini-los como `RRGGBB` muito desmarcado, pois o uso de chaves está presente e, portanto, torna perceptível que estamos incorporando uma cor.

Essa foi a abordagem geral na incorporação de cores com strings de diálogo e mensagens do cliente, é possível usar cores dentro do texto em mensagens do cliente, diálogos, rótulos de texto 3D, textos de materiais de objetos e placas de veículos, mas ei, SA-MP também possui funcionalidades de texdraws e gametexts, porém eles não suportam a notação RGB e, portanto, a adição de cores é feita diferentemente.

#### Textdraws e Gametexts

como mencionado acima, a notação **RGB** não é suportada, mas felizmente, temos outras maneiras de contornar esse problema, para textdraws, você pode usar a função nativa [TextDrawColor](../scripting/functions/TextDrawColor) para alterar a cor do textdraw, mas é o mesmo para textdraw como **RGBA** espaços de cores são para mensagens e diálogos do cliente, eles não pode ser incorporado, para isso utilizamos combinações especiais de caracteres para se referir a cores e alguns outros símbolos, você pode vê-los [aqui](../scripting/resources/gametextstyles).

|                |        |
| -------------- | ------ |
| \~r\~ | Vermelho |
| \~g\~ | Verde |
| \~b\~ | Azul |
| \~w\~ or \~s\~ | Branco |
| \~p\~ | Roxo |
| \~l\~ | Preto |
| \~y\~ | Amarelo |

Portanto, a incorporação de cores pode ser assim: **\~w\~Olá, aqui é \~b\~azul \~w\~e este é \~r\~vermelho**

Você pode usar outra combinação de personagens para brincar com misturas de cores, **\~h\~**, isso deixa uma determinada cor mais clara, aqui estão alguns exemplos:

|                                |                |
| ------------------------------ | -------------- |
| \~r\~\~h\~ | Vermelho mais claro |
| \~r\~\~h\~\~h\~ | Rosa vermelho |
| \~r\~\~h\~\~h~\~h\~ | Vermelho escuro |
| \~r\~\~h\~~h~~h~~h\~ | Rosa vermelho claro |
| \~r\~\~h\~\~h\~\~h\~\~h\~\~h\~ | Rosa |
| \~g\~\~h\~ | Verde claro |

Você pode encontrar mais informações sobre isso [aqui](../scripting/resources/colorslist).

### O caractere de escape

#### Descrição

O caractere de escape é um caractere no qual quando prefixado a algum caractere ou número, ele cria seu próprio caractere constante, na maioria das linguagens de programação/script como Pawn, a barra invertida é usada como caractere de escape (`\`), uma combinação deste e algum outro caractere/número resultará em uma [sequência de escape](https://en.wikipedia.org/wiki/Escape_sequence) que tem um certo significado, você pode encontrar mais sobre caractere de escape [aqui](https://en.wikipedia.org/wiki/Escape_character).

#### Sequências de escape

As sequências de escape facilitam a expressão de determinados caracteres no código fonte do seu script, aqui está uma tabela contendo as sequências de escape usadas no Pawn:

|                                              |              |
| -------------------------------------------- | ------------ |
| Audible beep (on server machines) | `\a` ou `\7` |
| Backspace | `\b` |
| Escape | `\e` |
| Form feed | `\f` |
| New line | `\n` |
| Carriage return | `\r` |
| Horizontal tab | `\t` |
| Vertical tab | `\v` |
| Backslash | `\\` |
| Single quote | `\'` |
| Double quote | `\"` |
| Character code with decimal values "ddd" | `\ddd;` |
| Character code with hexadecimal values "hhh" | `\xhhh;` |

Vejamos cada um deles, afinal, a melhor maneira de aprender esse tipo de coisa é praticá-los.

- **A sequência de escape do “bipe audível” - `\a`**

Bipe audível ou código de campainha (_às vezes caractere de campainha_) é um código de controle de dispositivo originalmente enviado para tocar uma pequena campainha eletromecânica em tickers e outros teleimpressores e teletipos para alertar os operadores do outro lado da linha, geralmente sobre uma mensagem recebida.

Usar isso em um computador resultará no envio de um som de campainha/notificação em segundo plano, pode ser usado de algumas maneiras criativas, para notificar e/ou alertar os usuários sobre determinadas atividades, a sequência de escape que o representa é `\a` (ou `\7` anotado como código decimal), acione seu editor de texto de Pawn e escreva o seguinte código;

```pawn
print("\a");
```
Ao executar o samp-server.exe, você ouvirá um sinal sonoro de notificação, você também pode usar o código decimal;

```pawn
print("This is a beep \7");
```
- **A sequência de escape “Backspace” - `\b`**

Esta sequência de escape é anotada como `\b`, ela simplesmente move o cursor para trás, a maioria das pessoas esperaria que ela funcionasse como o botão backspace em um teclado típico, mas não inteiramente, ela apenas move o carro uma posição para trás sem apagar o que está escrito lá.

Este não tem muita usabilidade em Pawn, a menos que você seja inteligente o suficiente para extrair algo útil dele, é assim que funciona.

```pawn
print("Hello 2018");
```
Isso irá imprimir **Hello 2018** no console, o cursor permanece na posição do caracter nulo, de forma mais clara, assim:

```
Hello 2018
          ^
```
Como você pode ver, o cursor para após o último caractere visível da string, o que é normal, agora vamos adicionar uma sequência de escape backspace;

```pawn
print("Hello 2018\b");
```
Isso resultará em;

```
Hello 2018
         ^
```
Como você pode ver, o cursor está exatamente na posição do último caractere visível da string, que é _8_, é o mesmo que ativar o modo de inserção do teclado, agora vamos adicionar um pouco de feitiçaria a isso.

```pawn
print("Hello 2018\b9");
```
Se você acertou, sim, isso irá imprimir **Hello 2019**, então, vamos ver como isso funciona, a máquina irá processar a string caractere por caractere, até atingir a sequência de escape backspace, então ela move o carro uma posição para trás, que seleciona qualquer caractere ali, neste caso 8, então, ele insere 9 em seu lugar.

```
Hello 2019
         ^
```
A carruagem se moverá para trás enquanto houver uma sequência de escape de backspace em sua string.

```pawn
print("Hello 2018\b9\b\b\b");
```
```
Hello 2019
       ^
```
O cursor irá parar na posição do primeiro caractere se a quantidade de sequência de escape de backspace exceder o número de caracteres entre a posição do primeiro caractere (sim, as matrizes começam em 0, vá para [r/programmerhumor](https://www.reddit.com/r/ProgrammerHumor/) para alguns bons memes) e a posição inicial do cursor.

```pawn
print("Hi\b\b\b\b\b\b\b\b\b\b\b\b\b\b");
```
Sempre resultará nisso;

```
Hi
^
```
- **A sequência de escape “Escape” - `\e`**

Com o valor hexadecimal de 1B em _ASCII_, é usado para código não padrão comum, vamos procurar algumas linguagens de programação como C como exemplo; uma sequência como `\z` não é uma sequência de escape válida de acordo com o padrão C. O padrão C exige que essas sequências de escape inválidas sejam diagnosticadas (o compilador deve imprimir uma mensagem de erro). Não obstante este facto, alguns compiladores podem definir sequências de escape adicionais, com semântica definida pela implementação. Um exemplo é a sequência de escape `\e`, que representa o caractere de escape. No entanto, não foi adicionado ao repertório padrão C porque não possui equivalente significativo em alguns conjuntos de caracteres.

- **A sequência de escape “Form feed” - `\f`**

O feed de formulário é um código _ASCII_ de quebra de página. Força a impressora a ejetar a página atual e continuar imprimindo na parte superior da outra. Freqüentemente, isso também causará um retorno de carro, o que não causa nenhuma alteração perceptível no console de depuração do _SA-MP_.

- **A sequência de escape “Nova linha” - `\n`**

A sequência de escape da nova linha (também conhecida como final de linha, fim de linha (_EOL_), alimentação de linha ou quebra de linha) é um código _ASCII_ anotado como `/n` com o valor decimal de 10, é algo comumente usado, os editores de texto inserem esse caractere toda vez que pressionamos o botão Enter em nossos teclados. Aqui está uma mensagem simples com uma quebra de linha:

```pawn
print("Hello, this is line 1\nAnd this is line 2");
```
Isso simplesmente produzirá:

```
Hello, this is line 1
And this is line 2
```
É claro que freios de múltiplas linhas são possíveis;

```pawn
print("H\n\n\ne\n\n\nl\nl\n\no");
```
```
H


e


l
l

o
```
Isso funciona de maneira diferente ao lidar com arquivos, no entanto, dependendo do seu sistema operacional, como por exemplo, no Windows, uma quebra de linha normalmente é **CR** (_retorno de carro_) + **LF** (_alimentação de linha_), você pode aprender mais sobre as diferenças [aqui](https://en.wikipedia.org/wiki/Newline).

- **A sequência de escape “Retorno de carro” - `\r`**

O retorno de carro é um código _ASCII_ que é frequentemente associado ao avanço de linha, mas pode servir como algo próprio por si só, ele simplesmente move o carro para o início da linha atual, equivalente a um caso específico que discutimos usando vários retrocessos (`\b`) sequência de escape, vejamos o exemplo a seguir, sem usar essa sequência de escape, esta é a saída normal que obteríamos:

```pawn
print("Hello");
```
```
Hello
     ^
```
A seta representa a posição do cursor, que é colocado após o último caractere visível da string, novamente, esse é o comportamento normal esperado, agora vamos adicionar o retorno de carro na mistura:

```pawn
print("Hello\r");
```
```
Hello
^
```
O cursor é deslocado para o início da linha, selecionando o primeiro caractere **“H”**, agora inserir qualquer coisa mudará **“H”** para qualquer coisa que inserirmos, e então passará para o próximo caractere enquanto permanece no modo de inserção:

```pawn
print("Hello\rBo");
```
```
Hello
^
```
Como vimos na seção de alimentação de linha, as quebras de linha funcionam de maneira diferente em diferentes sistemas operacionais; o Windows, por exemplo, usa um retorno de carro seguido por um avanço de linha para realizar uma quebra de linha, assim como as máquinas de escrever clássicas.

- **A sequência de escape da “guia horizontal” - `\t`**

Tabulação é algo que usamos todos os dias, desde o recuo de texto / código até a exibição da tabela, aquela tecla de tabulação que fica bem ao lado do teclado realmente economiza tempo, era muito chato e demorado usar excessivamente muitos espaços, mas este corta o bolo facilmente, além de ser útil na prática, está fortemente presente no campo da programação, é conhecido como `\t`, as pessoas argumentariam sobre quantos espaços vale uma tabulação, a maioria diria que vale 4 espaços, mas há quem diga que vale 8 espaços, alguém criatura demoníaca até preferiria espaços a tabulações, mas isso é outra conversa sobre si mesmo, vejamos este exemplo simples:

```pawn
print("Hello\tWorld");
```
```
Hello    World
```
Aqui está outro com múltiplas tabulações:

```pawn
print("Hello\t\t\t\t\tWorld");
```
```
Hello                    World
```
- **A sequência de escape da “guia vertical” - `\v`**

Na era da máquina de escrever antiga, ela tinha um uso mais popular, era usada para passar para a próxima linha verticalmente, mas agora não é mais o caso, não tem nenhum uso perceptível hoje em dia, e isso inclui impressoras modernas e até linguagens de programação, e o Pawn não é exceção.

- **\_A sequência de escape “Barra invertida” - `\*`**

Como vimos, a barra invertida é considerada como o caractere de escape, então sempre que o programa a identifica, ele pensa nela como um ponto de partida de alguma sequência de escape, não a vê como um caractere independente e, portanto, dará um erro de compilação (_se não for seguido por um caractere válido_), ou não irá imprimi-la, no caso do Pawn, o compilador irá gerar um erro (_erro 027: constante de caractere inválido_). Felizmente, podemos resolver esse problema escapando da barra invertida, e isso é feito prefixando outra barra invertida:

```pawn
print("Hello \\ World");
```
```
Hello \ World
```
:::caution ­Warning

A saída irá desconsiderar a primeira barra invertida e imprimir a segunda, já que a primeira está escapando da segunda e enganando o programa para vê-la como um caractere bruto. Uma barra invertida só pode escapar de um caractere por vez, portanto, fazer o seguinte gerará um erro de compilação.

:::

```pawn
print("Hello \\\ World");
```
Pense nisso como pares de barras invertidas, todos estão escapando do seguinte e, portanto, deve sempre resultar em um número par de barras invertidas;

```pawn
print("Hello \\\\\\ \\ World");
```
```
Hello \\\ \ World
```
Como você certamente notou, as sequências de escape nunca são impressas, elas servem apenas como instruções que expressam determinados eventos, se quisermos forçá-las a serem impressas, podemos escapar do seu caractere de escape (`\`), então o programa não irá considerá-las como sequência de escape:

```pawn
print("This is the escape sequence responsible for tabulation: \\t");
```
A primeira barra invertida escapa da segunda e depois é impressa, então o caractere **t** é deixado sozinho e, portanto, considerado um caractere independente:

```
This is the escape sequence responsible for tabulation: \t
```
- **A sequência de escape “Aspas simples” - `\'`**

Isso dificilmente está presente ao escrever código de Pawn, eu mesmo não usei isso em nenhuma situação de codificação, em outras linguagens que tratam o texto entre aspas simples como uma string, faça grande uso disso para limitar a confusão que acontece ao aninhar aspas simples umas nas outras, realmente não faz diferença no Pawn, aqui está um exemplo simples;

```pawn
print("Single quote '");
// ou
print("Single quote \'");
```
De qualquer forma, a saída será a mesma:

```
Single quote: '
```
O único uso que consigo pensar em relação a isso é definir uma variável com o caractere “**'**”, então obviamente fazer o seguinte causará um erro de compilação;

```pawn
new chr = ''';
```
Simplesmente porque o compilador considerará o primeiro par de aspas simples como uma entidade e o segundo como uma sequência de cotações não fechadas, então, para corrigir isso, teremos que escapar da do meio;

```pawn
new chr = ''\';
```
- **A sequência de escape “Aspas duplas” - `\"`**

Ao contrário das aspas simples, esta pode causar problemas na hora de aninhá-las, o Pawn trata qualquer coisa entre aspas duplas como uma string, então e se você quiser inserir aspas duplas na sua string, isso vai confundir o programa, ele não saberia para que serve cada aspa, vamos tomar isso como exemplo:

```pawn
print("Hello "world");
```
Assim que o compilador identificar as primeiras aspas, ele tratará tudo o que vem depois como parte de uma string, e encerrará o processo assim que atingir outra aspa, e assim, o compilador pegará **“Hello “** como uma string e verá **World”** como alguma bobagem preenchendo os buracos do seu código. Para resolver isso, precisamos escapar das aspas duplas que queremos imprimir:

```pawn
print("Hello \"world");
```
Agora, o compilador tratará a segunda aspa como uma sequência de escape, pois é prefixada por um caractere de escape (**\\**):

```
Hello "world
```
Vamos adicionar outra aspa só por diversão:

```pawn
print("Hello \"world\"");
```
```
Hello "world"
```
Não poderia ser mais simples.

Ao longo desta seção, vimos como podemos representar sequências de escape prefixando o caractere de escape (`\\`) para um determinado caractere, mas essa é apenas uma maneira de anotar esses valores, entre outras maneiras, daremos uma olhada em outras duas;

- **Sequências de escape com código de caracteres (código decimal) - `\ddd;`**

Isso não muda nada nas sequências de escape, é apenas uma maneira diferente de expressá-las, usando códigos _ASCII_ decimais, por exemplo, se você deseja imprimir A, mas anote-o decimalmente, você pode digitar seu código _ASCII_ decimal como o seguinte:

```pawn
print("\65;");
```
Isto não se refere apenas aos caracteres alfanuméricos, mas também outros, como o sinal sonoro (`\a`), com seu valor decimal `7`, podem ser representados segundo esta notação como `\7`;

O ponto e vírgula é opcional e pode ser eliminado, mas é sempre melhor seguir a abordagem original, seu objetivo é fornecer à sequência de escape um símbolo de terminação explícito quando usada em uma constante de string.

- **Sequências de escape com código de caracteres (código decimal) - `\xhhh;`**

Semelhante à notação decimal _ASCII_, também podemos usar o formato hexadecimal, o caractere **A**, pode ser escrito como `\65`;** ou `\x41`;**, O _ponto e vírgula_ pode ser omitido se desejar, isso se aplica tanto aqui quanto na notação decimal.

```pawn
print("\x41;");
```
```
A
```
Você pode encontrar todos esses valores simplesmente pesquisando “**tabela ASCII**” no Google, e o que é legal nisso é que é gratuito.

#### Caractere de escape personalizado

Se você percebeu, continuei chamando repetindo o “**caractere de escape**” várias vezes ao longo da última seção, onde eu poderia ter me referido a ele simplesmente como “**a barra invertida**”, ou mesmo abreviado, (`\`), a razão para isso é porque o caractere de escape não é um caractere constante absoluta, mas sim, ele pode ser alterado de preferência, você pode tê-lo como _@, ^, \$_ e assim por diante, por padrão é uma barra invertida, mas como ele permanece é determinado apenas por você.

Para alterá-lo, utilizamos a diretiva de pré-processador `pragma`, esta diretiva em particular aceita parâmetros diferentes, para cada uma de suas tarefas específicas, e há um que é responsável por definir o caractere de escape no qual iremos nos concentrar, é `ctrlchar`.

```pawn
#pragma ctrlchar '$'

main()
{
	print("Hello $n World");
	print("This is a backslash: \\");
	print("The his a dollar sign: $$");
}
```
```
Hello
 World
This is a backslash: \
This is a dollar sign: $
```
Como você pode ver, o feed de linha é anotado como `$n` em vez de `\n` agora, e a barra invertida não é mais considerada como o caractere de escape e, conseqüentemente, o cifrão requer ser escapado por outro cifrão.

Você não pode, no entanto, mudar isso para (`-`), mas qualquer outra coisa é uma prática aceitável, mas nunca é aceita eticamente, quão bobo é esse `#pragma ctrlchar '6'`, hein? Rapaz absolutamente louco.

Esta parte aqui não tem absolutamente nada a ver com sequências de escape, mas é usada na formatação de textdraws e gametext, é melhor colocá-la aqui do que em qualquer outro lugar;

|       |                                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------------------- |
| `~u~` | Seta para cima (cinza) |
| `~d~` | Seta para baixo (cinza) |
| `~<~` | Seta para esquerda (cinza) |
| `~>~` | Seta para a direita (cinza) |
| `]` | Exibe um símbolo `*` (somente nos estilos de texto 3, 4 e 5) |
| `~k~` | mapeamento de teclas do teclado (por exemplo, `~k~~VEHICLE_TURRETLEFT~` e `~k~~PED_FIREWEAPON~`). Procure aqui uma lista de chaves |

mapeamento de teclas do teclado (por exemplo, `~k~~VEHICLE_TURRETLEFT~` e `~k~~PED_FIREWEAPON~`). Procure aqui uma lista de chaves

### Especificador de formato

#### Descrição

Placeholders ou especificadores são caracteres escapados por um sinal de porcentagem (`%`), indicam a posição relativa e o tipo de saída de determinados parâmetros, servem como seu nome sugere “_Placeholders”_, guardam um lugar para os dados que posteriormente os substituirão dentro da string, existem diferentes tipos de especificadores, e ainda seguem uma fórmula específica;

```
%[flags][width][.precision]type
```
Os atributos entre colchetes são todos opcionais e cabe a você usuário mantê-los ou não, o que realmente define um especificador do formato amplamente conhecido de **%type**, a parte do tipo é substituída por um caractere para representar um determinado tipo de saída; (_inteiro, flutuante... etc_).

Placeholders são usados ​​apenas em funções que aceitam parâmetros, portanto funções como print não terão efeito, uma alternativa é o `printf` mais avançado.

Vejamos os diferentes tipos de saída que podem ser usados:

|               |                                                 |
| ------------- | ----------------------------------------------- |
| **Specifier** | **Significado** |
| `%i` | Inteiro (_número inteiro_) |
| `%d` | Inteiro (_número inteiro_) |
| `%s` | Corda |
| `%f` | Número de ponto flutuante (`Float: tag`) |
| `%c` | Caractere ASCII |
| `%x` | Número hexadecimal |
| `%b` | Número binário |
| `%%` | Literal `'%'` |
| `%q` | Escape de um texto para SQLite. (_Adicionado em 0.3.7 R2_) |

- **Os especificadores de número inteiro - `%i` e `%d`**

Vamos agrupar os dois, em Pawn, esses dois especificadores fazem exatamente a mesma coisa, ambos geram números inteiros, embora `%i` signifique inteiro e `%d` signifique decimal, eles são sinônimos da mesma coisa.

Em outras linguagens, no entanto, a diferença não está na saída, mas sim na entrada com funções como `scanf`, onde `%d` verifica um número inteiro como um decimal assinado e %i padroniza como decimal, mas também permite hexadecimal (_se precedido por `0x`_) e octal (_if precedido por `0`_).

Os usos desses dois especificadores são os seguintes:

```pawn
printf("%d is here", 2018);
printf("%d + %i = %i", 5, 6, 5 + 6);
```
```
printf("%d is here", 2018);
printf("%d + %i = %i", 5, 6, 5 + 6);
```
A saída também suporta constantes, variáveis ​​e funções predefinidas.

```pawn
#define CURRENT_YEAR 2018
new age = 19;

printf("It’s %d", CURRENT_YEAR);
printf("He is %d years old", age);
printf("Seconds since midnight 1st January 1970: %d", gettime());
```
```
It's 2018
He is 19 years old
Seconds since midnight 1st January 1970: 1518628594
```
Como você pode ver, qualquer valor que passamos nos parâmetros da função `printf` está sendo substituído por seu respectivo espaço reservado, e lembre-se, **a ordem é importante**, seus espaços reservados devem seguir a mesma ordem que seus parâmetros na chamada, e sempre usar o tipo de especificador correto, não fazer isso, não resultará em erro, mas pode gerar alguns resultados indesejados, mas em alguns casos, esses resultados indesejados são o que queremos.

O que você acha que aconteceria se tentássemos imprimir um float ou uma string usando um especificador de número inteiro? Vamos descobrir;

```pawn
printf("%d", 1.12);
printf("%d", "Hello");
printf("%d", 'H');
printf("%d", true);
```
```
1066359849
72
72
1
```
Quão estranho, totalmente inesperado, mas não necessariamente inútil, é que esse comportamento exato é aproveitado em tantas situações.

Primeiro de tudo, vamos ver por que `1.12` gerou _1066359849_, bem, isso é algo chamado comportamento indefinido, você pode aprender mais sobre isso [aqui](https://en.wikipedia.org/wiki/Undefined_behavior).

Tentar gerar uma string usando um especificador de número inteiro fornecerá o código _ASCII_ do primeiro caractere, neste caso, o código do caracter H, 72, o mesmo acontece com a saída de um único caractere. E, finalmente, a saída de um booleano resultará em 1 se for true e 0 se for false.

Strings são arrays em si, então a saída de um array aqui fornecerá o valor do primeiro slot desse array, como será a saída depende de qual tipo é (_inteiro, flutuante, caractere, booleano_).

- **Os especificadores de string - `%s`**

Este especificador, como significa string, é responsável pela saída de strings (_obviamente_):

```pawn
printf("Hello, %s!", "World");
```
```
Hello, world!
```
Também vamos gerar valores não-string usando isto:

```pawn
printf("%s", 103);
printf("%s", true);
printf("%s", 'H');
printf("%s", 1.12);
```
```
g

H
)
```
O número `103` foi tratado como o código _ASCII_ para _g_, e assim _g_ foi impresso, o mesmo vale para o símbolo estranho abaixo dele, o caractere com o valor true, também conhecido como _1_ foi impresso, mais simplesmente, o caractere `'H'` foi impresso como está, mas ei, o que aconteceu com o número flutuante `1.12`? lembra do **comportamento indefinido**? Pois é, `1.12` resultou em um número inteiro enorme, que continuou transbordando (seu valor dividido por _255_) vezes, até resultar em um número entre _0_ e _254_, no caso, _40_, que é o código _ASCII_ do caractere _(_.

Novamente, assim como o especificador de número inteiro, aceita constantes, variáveis e funções predefinidas:

```pawn
#define NAME "Max"
new message[] = “Hello there!”;

printf("His name is %s", NAME);
printf("Hey, %s", message);
printf("%s work", #Great);
```
```
His name is Max
Hey, Hello there!
Great work
```
- **Os especificadores float - `%f`**

Este especificador -abreviação de float-, como o próprio nome sugere, ele gera números flutuantes, nas seções anteriores, tentamos gerar números flutuantes usando o especificador de número inteiro, e então obtivemos aquele comportamento indefinido, mas agora que sabemos sobre esse especificador, podemos gerar floats com segurança e sem problemas;

```pawn
printf("%f", 1.235);
printf("%f", 5);
printf("%f", 'h');
```
O número flutuante _1.235_ obteve uma saída perfeita, com a adição de algum preenchimento, porém, o resto de toda a saída _0.000000_, basicamente _0_, isso porque o especificador `%f` produzirá apenas números flutuantes, ou seja, números que não possuem número fixo de dígitos antes e depois da vírgula decimal; isto é, o ponto decimal pode flutuar.

Para corrigir esse problema, simplesmente adicionamos a parte fracionária:

```pawn
printf("%f", 5.0);
printf("%f", 'h' + 0.0);
```
```
5.000000
104.000000
```
Embora `%f` seja o espaço reservado flutuante mais comumente usado, o especificador `%h` faz praticamente o mesmo:

```pawn
printf("%h", 5.0);
```
```
5.000000
```
- **Os especificadores de caracteres - `%c`**

Este especificador, abreviação de caractere, funciona como o placeholder de string, mas gera apenas um único caractere, vamos observar o seguinte exemplo:

```pawn
printf("%c", 'A');
printf("%c", "A");
printf("%c", "Hello");
printf("%c", 105);
printf("%c", 1.2);
printf("%c", true);
```
```
A
A
H
i
s
```
Como você pode ver, passar uma string produzirá apenas o primeiro caractere e passar um número produzirá o caracter cujo código _ASCII_ corresponde a esse número (_Booleanos são convertidos em 0 e 1 respectivamente_).

- **Os especificadores hexadecimais - `%x`**

O especificador a seguir gera o valor que passamos como um número hexadecimal, simplesmente, uma conversão de números de uma determinada base para a base 16.

```pawn
printf("%x", 6);
printf("%x", 10);
printf("%x", 255);
```
```
6
A
FF
```
Assim como nos casos que vimos nas seções anteriores, passar valores diferentes de números inteiros irá convertê-los em seus respectivos valores inteiros e produzi-los como números hexadecimais;

```pawn
printf("%x", 1.5);
printf("%x", 'Z');
printf("%x", "Hello");
printf("%x", true);
```
```
3FC00000
5A
48
1
```
O primeiro valor `1.5` resultará em um comportamento indefinido ao ser convertido para um número inteiro (_1069547520_), então o número inteiro resultante será gerado como hexadecimal (_3FC00000_). O caractere `'Z'` terá seu valor _ASCII_ (90) convertido para hexadecimal (5A). A string `"Hello"` terá apenas seu primeiro caractere (H) com o valor _ASCII_ de (72) convertido para hexadecimal (48). E `true` gera (1) como hexadecimal, que é convertido em (1), (false produzirá 0).

- **Os especificadores binários - `%b`**

O especificador a seguir, abreviação de “_binary_” é usado para imprimir valores passados ​​como números binários, a passagem de caracteres converterá seu código _ASCII_ em binário, e o mesmo acontece com strings onde apenas o primeiro caractere é considerado, os booleanos são considerados true e false respectivamente, os números flutuantes se enquadram no caso de comportamento indefinido, já para inteiros e hexadecimais, eles são convertidos em binários e de saída.

```pawn
printf("%b", 0b0011);
printf("%b", 2);
printf("%b", 2.0);
printf("%b", 0xE2);
printf("%b", 'T');
printf("%b", "Hello");
printf("%b", true);
```
```
11
10
1000000000000000000000000000000
11100010
1010100
1001000
1
```
- **O `%` literal**

Assim como o caractere de escape padrão (`\`), o compilador vê (`%`) como um caractere especial e, portanto, trata a sequência como um espaço reservado, desde que haja um caractere após o (`%`) ele é considerado um especificador mesmo que não seja válido, vamos observar esses dois casos;

```pawn
printf("%");
printf("Hello %");
printf("% World");
printf("Hello % World");
```
```
%
Hello %
 World
Hello  World
```
Como você pode ver, ter (`%`) sozinho como uma sequência individual terá sua saída, mas não é o mesmo que acontece quando é seguido por espaço ou qualquer outro caractere, resultando na saída de um caractere de espaço. Para contornar esse problema, escapamos dele usando outro sinal de porcentagem, como segue;

```pawn
printf("This is a percent sign %%, we just had to escape it!");
```
```
This is a percent sign %, we just had to escape it!
```
Claro, isso se aplica apenas a funções que suportam formatação, como `printf` e `format`, por exemplo, tentar gerar um sinal de porcentagem usando a função `print` não exigirá que você escape dela.

- **O especificador `%q`**

Este não tem grande importância em nosso tópico principal, é amplamente utilizado para escapar de strings sensíveis ao trabalhar com _SQLite_, e acredite em mim, ninguém quer cair no caso [tabela Bobby](https://bobby-tables.com/about).

Quando introduzimos os espaços reservados, fazemos referência a uma fórmula específica relativa a eles, como lembrete, aqui está;

```
%[flags][width][.precision]type
```
Até agora falamos apenas do sinal `%` e do tipo arquivado, os demais são opcionais, mas cada um tem efeito em casos diferentes, você pode incluí-los para controlar melhor como seus valores são tratados na saída.

- **A largura arquivada**

Este é responsável por especificar a saída mínima de caracteres, pode ser omitido se necessário, basta digitar seu valor como um número inteiro, vejamos alguns exemplos;

```pawn
printf("%3d", 5555);
printf("%3d", 555);
printf("%3d", 55);
printf("%3d", 5);
```
```
5555
555
 55
  5
```
Instruímos o especificador a bloquear a saída para 3 caracteres ou mais, a princípio, a saída de 4 e 3 caracteres funcionou bem, mas os caracteres menores que 3 caracteres foram deixados preenchidos com espaços para uniformizar a largura da saída. Existe também a possibilidade de ter valores de largura dinâmicos, para isso utilizamos o sinal de asterisco (`*`).

```pawn
printf("%*d", 5, 55);
```
```
     55
```
Primeiro, passamos o valor da largura que era `5`, depois o valor que queremos gerar como `55`, de modo que o espaço reservado produza um mínimo de 5 caracteres, ou seja, 5 menos 2, o que nos dá 3 espaços de preenchimento.

- **O campo de bandeiras**

Este funciona muito bem com o campo de largura, já que a largura especifica os caracteres mínimos para saída, este preenche o vazio deixado para trás com tudo o que você solicitar. Caso haja espaços deixados para trás, não haverá nenhum bloco.

```pawn
printf("%3d", 55);
printf("%5x", 15);
printf("%2f", 1.5)
```
```
055
0000F
01.500000
```
O primeiro número 55 tem um caractere curto por causa da largura do parâmetro decimal, portanto é preenchido com um 0. Já 15 é convertido em seu respectivo valor hexadecimal _F_ e preenchido com 4 0 para validar a largura de seu espaço reservado. Observe como apenas o número antes da vírgula decimal foi preenchido. O uso de valores de largura dinâmica permanece aqui também, basta incluir o asterisco, passar um valor e ver a mágica acontecer;

```pawn
printf("%0*d", 5, 55);
```
```
00055
```
- **O campo de precisão**

O campo Precisão geralmente especifica um limite máximo de saída, dependendo do tipo de formatação específico. Para tipos numéricos de ponto flutuante, especifica o número de dígitos à direita do ponto decimal que a saída deve ser arredondada. Para o tipo string, limita o número de caracteres que devem ser gerados, após os quais a string é truncada.

```pawn
printf("%.2f", 1.5);
printf("%.*f", 10, 1.5);
printf("%.5s", "Hello world!");
printf("%.*s", 7, "Hello world!");
```
```
1.50
1.5000000000
Hello
Hello w
```
Como você pode ver, os valores de precisão dinâmica podem ser usados ​​tanto com os espaços reservados float quanto com os strings.

Um truque muito legal que podemos fazer graças ao campo de precisão é obter substrings, agora, agora, existem muitos métodos que podemos usar para fazer isso, e isso sem considerar a função nativa [strfind](../scripting/functions/strfind), e não vamos esquecer as funções incríveis que temos no [strlib](https://github.com/oscar-broman/strlib) do **Slice**.

Vamos ver como podemos obter o mesmo resultado usando apenas o campo de precisão.

```pawn
substring(const source[], start = 0, length = -1)
{
	new output[256];

	format(output, sizeof(output), "%.*s", length, source[start]);
	return output;
}
```
Vamos tentar decifrar esse pedaço de código, simplesmente passamos a string de origem (a string da qual vamos extrair), uma posição inicial (o slot em que vamos começar a extrair) e o comprimento dos caracteres que queremos extrair.

Nosso valor de retorno será formatado de acordo com o seguinte espaço reservado `%.*s`, estamos incluindo o campo de precisão e usando-o para determinar um valor dinâmico que será o comprimento dos caracteres extraídos, então fornecemos um ponto de partida para a extração adicionando `source[start]` que salta do primeiro slot para o número do slot `start` que passamos nos parâmetros da função.

Vamos chamar a função e ver como funciona a partir daqui:

```pawn
new message1[] = "Hello!", message2[] = "I want an apple!";

print(substring(.source = message1, .start = 1, .length = 3));
print(substring(.source = message2, .start = 7, .length = 8));
```
```
ell
an apple
```
Simples, certo? Bônus de curiosidades, passar um _valor negativo_ como o comprimento de extração resultará na saída de todos os caracteres em sua string de origem começando no slot **start**. Por outro lado, passar 0 como comprimento de extração retorna um valor nulo.

Vamos dar uma olhada nesses casos:

```pawn
new message3[] = "Arrays start at 1, says the Lua developer!";

print(substring(message3)); // start = 0 por padrão, length = -1 por padrão
print(substring(message3, .length = 6)); // start = 0 por padrão, length = 6
print(substring(message3, 7, 10)); // start = 7, length = 10
print(substring(message3, strlen(message3) - 14)); // start = 28, length = -1 por padrão
print(substring(message3, strlen(message3) - 14, 3)); // start = 28, length = 3
```
```
Arrays start at 1, says the Lua developer!
Arrays
start at 1
Lua developer!
Lua
```
#### Uso

Colocando em ação tudo o que vimos até agora, podemos formatar nossas strings de maneira bastante semelhante, até agora trabalhamos principalmente no console, utilizando as funções `print` e `printf` para gerar nossos dados, bem, principalmente `printf`, isto é, graças ao seu suporte nativo para formatação de strings em movimento, daí o f no nome da função.

Mas no mundo real, a maioria das pessoas não gosta de olhar para terminais, eles são muito assustadores e complicados para o usuário médio, e como todos vocês sabem, _mensagens do cliente_ aparecem na tela do jogo, e não no console, no entanto, elas não podem ser formatadas em movimento, são mais como uma função de impressão, por assim dizer, para contornar essa limitação, utilizamos outra função muito eficaz, chamada `format`, não vamos nos aprofundar em sua definição, como já abordamos explicando-o nas partes anteriores (consulte [isto](../scripting/functions/format)), mas aqui está um lembrete de sua sintaxe;

```pawn
format(output[], len, const format[], \{Float, _\}: ...}
```
Vamos dar uma olhada nestes exemplos;

**Exemplo 1**: _Nome do jogador – Supondo que haja algum jogo no servidor com o id 9 chamado Player1_:

```pawn
// MAX_PLAYER_NAME é uma constante predefinida com o valor de 24, adicionamos 1 para levar em conta o terminador nulo, obrigado ao Pottus por apontar isso.
new playerName[MAX_PLAYER_NAME + 1], output[128], playerid = 9;

GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
format(output, sizeof(output), "[Info]: the player with the id of %d is called {EE11CC}%s.", playerid, playerName);SendClientMessageToAll(0, output);
```
> [Info]: o jogador com id 9 se chama <span style={{color: '#ee11cc'}}>Player1</span>.

Simplesmente, basta obter o nome do jogador e começar a formatar a string, o espaço reservado `%d` é responsável por exibir as variáveis ​​​​`playerid`, que contém o valor `9`, o espaço reservado `%s` exibe a string `playerName` que contém o nome do jogador graças à função `GetPlayerName`.

Em seguida, mostramos a string formatada para todos no servidor usando a função `SendClientMessageToAll`, observe que o valor `0` em seu primeiro parâmetro indicando a cor preta, que será a cor da mensagem, o valor hexadecimal embutido `{FFFF00}` é o que resultou no nome do jogador ser amarelo.

**Exemplo 2**: _Relógio do jogo – Exibindo a hora atual do jogo_:

```pawn
new output[128], hours, minutes, seconds;

gettime(hours, minutes, seconds);
format(output, sizeof(output), "It's %02d:%02d %s", hours > 12 ? hours - 12 : hours, minutes, hours < 12 ? ("AM") : ("PM"));
SendClientMessageToAll(0, output);
```
Novamente, apenas utilizamos a função `gettime` para armazenar as horas, minutos e segundos em suas variáveis, respectivamente, e depois colocá-los todos juntos em uma string bem formatada. Aproveitamos o campo de largura `%02d` para preencher os valores entre 0 e 9 com outro zero para evitar saídas como (“_É 5:9 PM_”), como você pode ver.

> São 06:17 PM

**Exemplo 3**: _Mensagem de morte - Enviando uma mensagem quando um jogador morre, tendo os nomes dos jogadores coloridos em suas respectivas cores_:

```pawn
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // MAX_PLAYER_NAME é uma constante predefinida com o valor de 24, adicionamos 1 para levar em conta o terminador nulo, obrigado ao Pottus por apontar isso.
    new message[144], playerName[MAX_PLAYER_NAME + 1], killerName[MAX_PLAYER_NAME + 1];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    GetPlayerName(killerid, killerName, MAX_PLAYER_NAME);

    format(message, sizeof(message), "{%06x}%s {000000}killed {%06x}%s", GetPlayerColor(killerid) >>> 8, killerName, GetPlayerColor(playerid) >>> 8, playerName);
    SendClientMessageToAll(0, message);

    return 1;
}
```
Dada a seguinte lista de jogadores conectados:

|        |                                                 |
| ------ | ----------------------------------------------- |
| **ID** | **Jogador** |
| 0 | <span style={{color: 'red'}}>Compton</span> |
| 1 | <span style={{color: 'grey'}}>Dark</span> |
| 5 | <span style={{color: 'red'}}>Player1</span> |
| 6 | <span style={{color: 'blue'}}>Bartolomew</span> |
| 11 | <span style={{color: 'grey'}}>unban_pls</span> |

Digamos, `playerid` `0` matou `playerid` `6`, as mensagens formatadas devem soletrar “**\{FF0000\}Compton \{000000\}killed > \{0000FF\}Bartolomew**”, que enviará a seguinte mensagem do cliente para todos no servidor:

> <span style={{color: 'red'}}>Compton</span> <span style={{color: '#000000'}}>killed</span> <span style={{color: 'blue'}}>Bartolomew</span>

Peço desculpas se você confundiu o uso de [mudança lógica bit a bit](https://en.wikipedia.org/wiki/Logical_shift), ela foi usada simplesmente aqui para transformar o número decimal retornado pela função `GetPlayerColor` em um número hexadecimal representando uma cor, a mudança em si é utilizada para omitir o espaço -alfa-, para saber mais sobre isso, recomendo fortemente verificar [este tutorial](Binary) por **Quiosauro**.

#### Especificadores personalizados

Trabalhar com os especificadores de formatação que examinamos até agora é suficiente, você pode literalmente fazer todo tipo de coisa com essas ferramentas magníficas, mas nada nos impede de perguntar por mim, quão gananciosos da nossa parte. Tudo graças a **Slice** depois de ser influenciado por [sscanf](https://github.com/Y-Less/sscanf), ele criou um include incrível, [formatex](https://github.com/Southclaws/formatex), que adicionou vários novos especificadores para usar, o que realmente facilitou muito o trabalho diário de peões. Mas não foi só isso, você também pode criar seus próprios especificadores para atender às suas necessidades e, por mais legal que pareça, o processo é muito fácil.

Apenas para fins de teste, vamos fazer algo bobo, algo tão básico quanto fornecer uma string como entrada e retorná-la na forma de um link (_https://www.string.com_);

```pawn
FormatSpecifier<'n'>(output[], const param[]) {
	format(output, sizeof(output), "https://www.%s.com", param);
}
```
Tão simples quanto isso, e assim, nasceu o poderoso especificador `%n` (abreviação de Newton porque é muito legal e complicado como ciência de foguetes 😉, vamos testar este camPawn:

```pawn
printf("%n", "samp");
```
> https://www.samp.com

:::note

Não deixe este exemplo controlar ou limitar suas expectativas sobre o que é possível alcançar com especificadores personalizados. Há exemplos melhores na página principal de lançamento, [por favor, dê uma olhada](https://github.com/Southclaws/formatex/blob/master/README.md).

:::

### Links externos

#### Tutoriais semelhantes

- [Formatação de string](https://sampforum.blast.hk/showthread.php?tid=265433) por [krogsgaard20](https://sampforum.blast.hk/member.php?action=profile&uid=126724)
- [Compreendendo Strings](https://sampforum.blast.hk/showthread.php?tid=284112) por [\[HiC\]TheKiller](https://sampforum.blast.hk/member.php?action=profile&uid=23565)
- [Como usar strcmp](https://sampforum.blast.hk/showthread.php?tid=199796) por [Ash.](https://sampforum.blast.hk/member.php?action=profile&uid=78597)
- [Guia para iniciantes: matrizes simples/duas/multidimensionais](https://sampforum.blast.hk/showthread.php?tid=318212) por [iPLEAOMAX](https://sampforum.blast.hk/member.php?action=profile&uid=122705)
- [Dicas e truques](https://sampforum.blast.hk/showthread.php?tid=216730) por [Fatia](https://github.com/oscar-broman)
- [Otimização de código](https://sampforum.blast.hk/showthread.php?tid=571550) por [Misiur](https://sampforum.blast.hk/member.php?action=profile&uid=55934)
- [Sequências compactadas](https://sampforum.blast.hk/showthread.php?tid=480529) por [Emmet\_](https://github.com/emmet-jones)
- [Formatação de string IRC](https://github.com/myano/jenni/wiki/IRC-String-Formatting) por [myano](https://github.com/myano)
- [Manipulação de string](https://github.com/compuphase/pawn/blob/main/doc/String_Manipulation.pdf) por [CompuPhase](https://www.compuphase.com)
- [Pawn-lang](https://github.com/pawn-lang/compiler/blob/master/doc/pawn-lang.pdf)
- [Uma análise aprofundada dos operadores binários e binários](https://sampforum.blast.hk/showthread.php?tid=177523) por [Kyosaur](https://sampforum.blast.hk/member.php?action=profile&uid=23990)

#### Inclusões/plugins/contribuidores relacionados

- [Strlib](https://sampforum.blast.hk/showthread.php?tid=85697) de [Westie](https://sampforum.blast.hk/member.php?action=profile&uid=56481)
- [Fatia](https://github.com/oscar-broman) [strlib](https://github.com/oscar-broman/strlib)
- [Fatia](https://github.com/oscar-broman) do [formatex](https://github.com/Southclaws/formatex)
- [corne](https://sampforum.blast.hk/member.php?action=profile&uid=98345) [y_stringhash](https://sampforum.blast.hk/showthread.php?tid=571305)
- [Y-Menos](https://github.com/Y-Less) [sscanf](https://github.com/Y-Less/sscanf)

#### Referências

- [GTA San Andreas](https://www.rockstargames.com/sanandreas/)
- [Desenhar texto](../scripting/resources/textdraws#what-is-a-textdraw)
- [Texto do jogo](../scripting/functions/GameTextForPlayer)
- [Limitações](../scripting/resources/limits)
- [ASCII](https://en.wikipedia.org/wiki/ASCII)
- [Tabela ASCII](https://www.asciitable.com)
- [Tutorial de Pawn](https://wiki.alliedmods.net/Pawn_Tutorial)
- [Estruturas de Controle](../scripting/language/ControlStructures)
- [Caractere nulo](https://en.wikipedia.org/wiki/Null_character)
- [Espaço de cores RGBA](https://en.wikipedia.org/wiki/RGBA_color_space)
- [Seletor de cores](https://www.webfx.com/web-design/color-picker/)
- [TextDrawColor](../scripting/functions/TextDrawColor)
- [Estilos de texto de jogo](../scripting/resources/gametextstyles)
- [Lista de cores](../scripting/resources/colorslist)
- [Sequência de escape](https://en.wikipedia.org/wiki/Escape_sequence)
- [r/humor do programador](https://www.reddit.com/r/ProgrammerHumor/)
- [Nova linha](https://en.wikipedia.org/wiki/Newline)
- [Comportamento indefinido](https://en.wikipedia.org/wiki/Undefined_behavior)
- [Mesa Bobby](https://bobby-tables.com/about)
- [strfind](../scripting/functions/strfind)
- [formato](../scripting/functions/format)
- [Mudança lógica bit a bit](https://en.wikipedia.org/wiki/Logical_shift)
