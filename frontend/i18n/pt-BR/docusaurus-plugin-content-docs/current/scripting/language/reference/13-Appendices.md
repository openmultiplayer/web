# Apêndices

---

## Mensagens de erro

Quando o compilador encontra um erro em um arquivo, ele emite uma mensagem e, dependendo da classe do erro, ele define uma linha de retorno de erro correspondente. Existem três classes de erros:

| Erro                            | Significado                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Errors (Erros)**              | Erros de sintaxe ou semânticos impossíveis de compilar; o compilador pula linhas de código até poder continuar a compilação; então, nenhum código de saída é gerado.                                                                                                                                                                |
| **Fatal Errors (Erros fatais)** | Situações de erro que forçam o compilador a abortar imediatamente. Estes erros têm o risco de corromper dados no computador se não forem tratados. Estes erros também ocorrem por estouros de memória ou interrupção de E/S durante a compilação; Erros fatais não estão em todas as situações relacionados ao erro no código-fonte |
| **Warnings (Avisos)**           | Possíveis problemas semânticos ou não portabilidades na semântica. O código é provavelmente suspeito em termos de implementação. Avisos podem algumas vezes ser causados por extensões específicas do compilador que são habilitadas                                                                                                |

### Erros

| ID  | Texto / Descrição                                                                                                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 001 | expected token: "token", but found "token" - token esper "token", mas encontrado "token". Um símbolo necessário está faltando.                                                                                 |
| 002 | only a single statement (or expression) can follow each "case" - apenas uma única instrução pode seguir cada "case". Cada rótulo de case deve ser seguido por uma instrução; você pode usar {} bloco composto. |
| 003 | declaration of a local variable must appear in a compound block - uma declaração de variável local deve aparecer dentro de um bloco composto {}.                                                               |
| 004 | function "name" is not implemented - função "nome" não está implementada. Há uma declaração forward, mas a função não existe.                                                                                  |
| 005 | function may not have arguments - função não pode ter argumentos. Função main ou um callback de evento não pode ter argumentos.                                                                                |
| 006 | must be assigned to an array - o operando deve ser um array (ou seja, deve ser assinalado a um array).                                                                                                         |
| 007 | operator cannot be redefined - o operador não pode ser redefinido. Você não pode fornecer uma definição alternativa para alguns operadores.                                                                    |
| 008 | must be a constant expression; assumed zero - deve ser uma expressão constante; assumido zero. Um erro de sintaxe esperado para uma expressão constante.                                                       |
| 009 | invalid array size (negative, zero or out of bounds) - tamanho de array inválido (negativo, zero ou fora dos limites).                                                                                         |
| 010 | illegal function or declaration - função ou declaração ilegal. Uma sintaxe de função ou declaração de variável estava incorreta.                                                                               |
| 011 | invalid outside functions - inválido fora de funções. Uma instrução ou expressão deve estar dentro da definição de uma função.                                                                                 |
| 012 | invalid function call, not a valid address - chamada de função inválida, não um endereço válido. A função é apenas declarada, mas nunca definida.                                                              |
| 013 | no entry point (no public functions) - sem ponto de entrada (nenhuma função pública). O arquivo contém apenas código inativo ou apenas constantes.                                                             |
| 014 | invalid statement; not in switch - instrução inválida; não está em switch. Os rótulos "case" e "default" existem apenas nas instruções switch.                                                                 |
| 015 | "default" must be the last clause in switch statement - "default" deve ser a última cláusula em uma instrução switch.                                                                                          |
| 016 | multiple defaults in "switch" - vários defaults em "switch". Apenas uma cláusula default é permitida.                                                                                                          |
| 017 | undefined symbol string - símbolo indefinido. Uma string literal está mal formada.                                                                                                                             |
| 018 | initialization data exceeds declared size - dados de inicialização excedem o tamanho declarado. Mais dados foi fornecido na inicialização do que cabe na variável/array.                                       |
| 019 | not a label: "name" - não é um rótulo: "nome". goto só permite um rótulo de destino.                                                                                                                           |
| 020 | invalid symbol name "name" - nome de símbolo inválido "nome". O nome de variável contém caracteres inválidos.                                                                                                  |
| 021 | symbol already defined: "name" - símbolo já definido: "nome". O símbolo já foi definido anteriormente.                                                                                                         |
| 022 | must be lvalue (non-constant) - deve ser lvalue (não constante).A expressão deve ser uma variável que possa ser atribuída, não uma constante.                                                                  |
| 023 | array assignment must be simple assignment - a atribuição de array deve ser uma atribuição simples (sem +=, etc).                                                                                              |
| 024 | "break" or "continue" is out of context - "break" ou "continue" está fora de contexto. Essas instruções são válidas apenas dentro de um loop.                                                                  |
| 025 | function heading differs from prototype - cabeçalho de função difere do protótipo. A definição da função e sua declaração forward não combinam.                                                                |
| 026 | expected token: "number" - token esperado numérico. Um número literal era esperado na posição.                                                                                                                 |
| 027 | invalid character constant - constante de caractere inválida. A constante de caractere tem comprimento incorreto.                                                                                              |
| 028 | invalid subscript (not an array or too many subscripts): "name" - subscrição inválida (não é um array ou muitas subscrições): "nome".                                                                          |
| 029 | invalid expression, assumed zero - expressão inválida, assumido zero. Sintaxe errada na expressão.                                                                                                             |
| 030 | compound statement not closed at the end of file (started at line number) - instrução composta não fechada no final do arquivo (iniciada na linha número).                                                     |
| 031 | unknown directive - diretiva desconhecida. O comando #pragma não é reconhecido.                                                                                                                                |
| 032 | array index out of bounds (variable "name") - índice de array fora dos limites (variável "nome").                                                                                                              |
| 033 | array must be indexed (variable "name") - array deve ser indexado (variável "nome"). Você tentou usar um array sem um índice.                                                                                  |
| 034 | argument does not have a default value (argument index) - argumento não tem um valor padrão (índice do argumento).                                                                                             |
| 035 | argument type mismatch (argument index) - incompatibilidade de tipo de argumento (índice do argumento). A expressão não combina com o tipo esperado.                                                           |
| 036 | empty statement - instrução vazia. O programa contém instruções vazias inesperadas/desnecessárias.                                                                                                             |
| 037 | invalid string (possibly non-terminated string) - string inválida (possivelmente string não terminada).                                                                                                        |
| 038 | extra characters on line - caracteres extras na linha. Existem caracteres extras após uma instrução.                                                                                                           |
| 039 | constant symbol has no size - símbolo constante sem tamanho. O operador sizeof não funciona em constantes numéricas.                                                                                           |
| 040 | duplicate "case" label (value number) - rótulo "case" duplicado (valor número). O mesmo valor já está associado a outro label case.                                                                            |
| 041 | invalid ellipsis, array size is not known - reticências inválido, tamanho do array desconhecido.                                                                                                               |
| 042 | invalid combination of class specifiers - combinação inválida de especificadores de classe. Combinação de static e public não é permitida.                                                                     |
| 043 | character constant exceeds range for packed string - constante de caractere excede intervalo para string empacotada.                                                                                           |
| 044 | positional parameters must precede all named parameters - parâmetros posicionais devem preceder todos os parâmetros nomeados.                                                                                  |
| 045 | too many function arguments - muitos argumentos de função. Mais argumentos fornecidos do que a função declara.                                                                                                 |
| 046 | unknown array size (variable "name") - tamanho desconhecido de array. A dimensão do array não está definida.                                                                                                   |
| 047 | array sizes do not match, or destination array is too small - tamanhos de arrays não coincidem, ou array de destino é muito pequeno.                                                                           |
| 048 | array dimensions do not match - dimensões de arrays não coincidem. O número de dimensões difere.                                                                                                               |
| 049 | invalid line continuation - continuação de linha inválida. Código após \ no final de uma linha.                                                                                                                |
| 050 | invalid range - intervalo inválido. Ordem errada de valores (mínimo > máximo).                                                                                                                                 |
| 051 | invalid subscript, use "[]" operators on major dimensions - subscrição inválida, use operadores "[]" em dimensões maiores.                                                                                     |
| 052 | multi-dimensional arrays must be fully initialized - arrays multidimensionais devem ser totalmente inicializados.                                                                                              |
| 053 | exceeding maximum number of dimensions - excedendo número máximo de dimensões. Máximo de 3 dimensões (configurável).                                                                                           |
| 054 | unmatched closing brace (" }") - chave de fechamento não correspondente ("}"). Há mais chaves de fechamento que de abertura.                                                                                   |
| 055 | start of function body without function header - início do corpo da função sem cabeçalho de função.                                                                                                            |
| 056 | arrays, local variables and function arguments cannot be public (variable "name") - arrays, variáveis locais e argumentos de função não podem ser públicos.                                                    |
| 057 | unfinished expression before compiler directive - expressão inacabada antes da diretiva do compilador. Faltou ";" na instrução anterior.                                                                       |
| 058 | duplicate argument; same argument is passed twice - argumento duplicado; o mesmo argumento é passado duas vezes.                                                                                               |
| 059 | function argument may not have a default value (variable "name") - argumento de função não pode ter valor padrão quando argumento de referência é variável array.                                              |
| 060 | multiple "#else" directives between "#if ... #endif" - múltiplas diretivas "#else" entre "#if ... #endif".                                                                                                     |
| 061 | "#elseif" directive follows an "#else" directive - diretiva "#elseif" segue diretiva "#else".                                                                                                                  |
| 062 | number of operands does not fit the operator - número de operandos não se encaixa no operador.                                                                                                                 |
| 063 | function result tag of operator "name" must be "name" - tag de resultado de função do operador deve ser "nome".                                                                                                |
| 064 | cannot change predefined operators - não é possível alterar operadores predefinidos.                                                                                                                           |
| 065 | function argument may only have a single tag (argument number) - argumento de função só pode ter uma única tag (número do argumento).                                                                          |
| 066 | function argument may not be a reference argument or an array (argument "name") - argumento de função não pode ser referência nem array (argumento "nome").                                                    |
| 067 | variable cannot be both a reference and an array (variable "name") - variável não pode ser tanto referência quanto array (variável "nome").                                                                    |
| 068 | invalid rational number precision in #pragma - precisão de número racional inválida em #pragma.                                                                                                                |
| 069 | rational number format already defined - formato de número racional já definido.                                                                                                                               |
| 070 | rational number support was not enabled - suporte a números racionais não foi habilitado.                                                                                                                      |
| 071 | user-defined operator must be declared before use (function "name") - operador definido pelo usuário deve ser declarado antes do uso (função "nome").                                                          |
| 072 | "sizeof" operator is invalid on "function" symbols - operador "sizeof" é inválido em símbolos de "função".                                                                                                     |
| 073 | function argument must be an array (argument "name") - argumento de função deve ser um array (argumento "nome").                                                                                               |
| 074 | #define pattern must start with an alphabetic character - padrão #define deve começar com um caractere alfabético.                                                                                             |
| 075 | input line too long (after substitutions) - linha de entrada muito longa (após substituições).                                                                                                                 |
| 076 | syntax error in the expression, or invalid function call - erro de sintaxe na expressão, ou chamada de função inválida.                                                                                        |
| 077 | malformed UTF-8 encoding, or corrupted file: filename - codificação UTF-8 malformada, ou arquivo corrompido: nome do arquivo.                                                                                  |
| 078 | function uses both "return" and "return \<value\>" - função usa tanto "return" quanto "return \<valor\>".                                                                                                      |
| 079 | inconsistent return types (array & non-array) - tipos de retorno inconsistentes (array e não-array).                                                                                                           |
| 080 | unknown symbol, or not a constant symbol (symbol "name") - símbolo desconhecido, ou não é um símbolo constante (símbolo "nome").                                                                               |
| 081 | cannot take a tag as a default value for an indexed array parameter (symbol "name") - não é possível usar tag como valor padrão para parâmetro de array indexado (símbolo "nome").                             |
| 082 | user-defined operators and native functions may not have states - operadores definidos pelo usuário e funções nativas não podem ter estados.                                                                   |
| 083 | a function or variable may only belong to a single automaton (symbol "name") - uma função ou variável só pode pertencer a um único autômato (símbolo "nome").                                                  |
| 084 | state conflict: one of the states is already assigned to another implementation (symbol "name") - conflito de estado: um dos estados já está atribuído a outra implementação (símbolo "nome").                 |
| 085 | no states are defined for symbol "name" - nenhum estado está definido para o símbolo "nome".                                                                                                                   |
| 086 | unknown automaton "name" - autômato desconhecido "nome".                                                                                                                                                       |
| 087 | unknown state "name" for automaton "name" - estado desconhecido "nome" para autômato "nome".                                                                                                                   |
| 088 | public variables and local variables may not have states (symbol "name") - variáveis públicas e locais não podem ter estados (símbolo "nome").                                                                 |
| 089 | state variables may not be initialized (symbol "name") - variáveis de estado não podem ser inicializadas (símbolo "nome").                                                                                     |
| 090 | public functions may not return arrays (symbol "name") - funções públicas não podem retornar arrays (símbolo "nome").                                                                                          |
| 091 | ambiguous constant; tag override is required (symbol "name") - constante ambígua; substituição de tag é necessária (símbolo "nome").                                                                           |

### Erros Fatais

| ID  | Texto / Descrição                                                                                                                       |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 100 | cannot read from file: "filename" - não é possível ler do arquivo: "nome do arquivo".                                                   |
| 101 | cannot write to file: "filename" - não é possível escrever no arquivo: "nome do arquivo".                                               |
| 102 | table overflow: "table name" - estouro de tabela: "nome da tabela".                                                                     |
| 103 | insufficient memory - memória insuficiente.                                                                                             |
| 104 | invalid assembler instruction "instruction" - instrução de montador inválida.                                                           |
| 105 | numeric overflow, exceeding capacity - estouro numérico, excedendo capacidade.                                                          |
| 106 | compiled script exceeds the maximum memory size (number bytes) - script compilado excede o tamanho máximo de memória (número de bytes). |
| 107 | too many error/warning messages on one line - muitas mensagens de erro/aviso em uma linha.                                              |
| 108 | codepage mapping file not found - arquivo de mapeamento de página de código não encontrado.                                             |
| 109 | invalid path: "path" - caminho inválido: "caminho".                                                                                     |
| 110 | assertion failed: expression - asserção falhou: expressão.                                                                              |
| 111 | user error: message - erro do usuário: mensagem. Gerada por #error ou #assert.                                                          |

### Avisos

| ID  | Texto / Descrição                                                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 200 | symbol "name" is truncated to number characters - símbolo "nome" foi truncado para número de caracteres.                                       |
| 201 | redefinition of constant/macro (symbol "name") - redefinição de constante/macro (símbolo "nome").                                              |
| 202 | number of arguments does not match definition - número de argumentos não corresponde à definição.                                              |
| 203 | symbol is never used: "name" - símbolo nunca é usado: "nome".                                                                                  |
| 204 | symbol is assigned a value that is never used: "name" - símbolo tem um valor atribuído que nunca é usado: "nome".                              |
| 205 | redundant code: constant expression is zero - código redundante: expressão constante é zero.                                                   |
| 206 | redundant test: constant expression is non-zero - teste redundante: expressão constante é não-zero.                                            |
| 207 | unknown "#pragma" - "#pragma" desconhecido.                                                                                                    |
| 208 | function with tag result used before definition, forcing reparse - função com resultado com tag usada antes da definição., forçando reparsear. |
| 209 | function "name" should return a value - função "nome" deveria retornar um valor.                                                               |
| 210 | possible use of symbol before initialization: "name" - possível uso de símbolo antes da inicialização: "nome".                                 |
| 211 | possibly unintended assignment - possível atribuição não intencional. "=" vs "==".                                                             |
| 212 | possibly unintended bitwise operation - operação bitwise possivelmente não intencional. "&" vs "&&".                                           |
| 213 | tag mismatch - incompatibilidade de tag. Expressões têm tags diferentes.                                                                       |
| 214 | possibly a "const" array argument was intended: "name" - possivelmente um argumento de array "const" era pretendido: "nome".                   |
| 215 | expression has no effect - a expressão não tem efeito. O resultado é descartado.                                                               |
| 216 | nested comment - comentário aninhado. Comentários que abrem dentro de outros comentários.                                                      |
| 217 | loose indentation - indentação inconsistente. Código mal formatado detectado.                                                                  |
| 218 | old style prototypes used with optional semicolum - protótipos de estilo antigo utilizaram ponto e vírgula opcional.                           |
| 219 | local variable "name" shadows a variable at a preceding level - variável local "nome" obscureceu uma variável de um nível anterior.            |
| 220 | expression with tag override must appear between parentheses - expressão com substituição de tag deve aparecer entre parênteses.               |
| 221 | label name "name" shadows tag name - nome do rótulo "nome" obscurece nome de tag.                                                              |
| 222 | number of digits exceeds rational number precision - número de dígitos excede a precisão do número racional.                                   |
| 223 | redundant "sizeof": argument size is always 1 (symbol "name") - "sizeof" redundante: tamanho do argumento é sempre 1 (símbolo "nome").         |
| 224 | indeterminate array size in "sizeof" expression (symbol "name") - tamanho de array indeterminado em expressão "sizeof" (símbolo "nome").       |
| 225 | unreachable code - código inalcançável. O código após return, break, continue ou goto não será executado.                                      |
| 226 | a]variable is assigned to itself (symbol "name") - variável é atribuída a si mesma (símbolo "nome").                                           |
| 227 | more initializers than enum fields - mais inicializadores que campos do enum.                                                                  |
| 228 | length of initializer exceeds size of the enum field - comprimento do inicializador excede o tamanho do campo do enum.                         |
| 229 | index tag mismatch (symbol "name") - incompatibilidade de tag de índice (símbolo "nome").                                                      |
| 230 | no implementation for state "name" in function "name", no fall-back - sem implementação para estado "nome" na função "nome", sem fallback.     |
| 231 | state specification on forward declaration is ignored - especificação de estado na declaração forward é ignorada.                              |
| 232 | output file is written, but with compact encoding disabled - arquivo de saída é escrito, mas com codificação compacta desabilitada.            |
| 233 | state variable "name" shadows a global variable - variável de estado "nome" obscurece uma variável global.                                     |
| 234 | function is deprecated (symbol "name") - função está obsoleta (símbolo "nome"). Use a alternativa sugerida.                                    |
| 235 | public function lacks forward declaration (symbol "name") - função pública não tem declaração forward (símbolo "nome").                        |
| 236 | unknown parameter in substitution (incorrect #define pattern) - parâmetro desconhecido na substituição (padrão #define incorreto).             |
| 237 | recursive function (symbol "name") - função recursiva (símbolo "nome"). Detectada inadvertidamente.                                            |
| 238 | mixing of string formats in a concatenation - mistura de formatos de string em uma concatenação.                                               |
| 239 | literal array/string passed to a non-const parameter - array/string literal passado para um parâmetro não const.                               |
| 240 | reserved value for tag field (symbol "name") - valor reservado para campo de tag (símbolo "nome").                                             |
| 241 | A tag alters the value of a constant - uma tag altera o valor de uma constante.                                                                |

---

## O compilador

A linguagem PAWN requer que o código-fonte esteja em formato de texto ASCII. O compilador não suporta UNICODE de 16 bits, no entanto o analisador, reconhece arquivos codificados em UTF-8. Se o arquivo de entrada começa com uma Marca de Ordem de Bytes (BOM) para UTF-8, o compilador analisa o arquivo completo como UTF-8, caso contrário ele o interpreta como ASCII estendido.

Os escapes de caractere \xhhh e \ddd são inválidos para caracteres Unicode. Utilize as escapes de caractere \uhhhhh e \Uhhhhhhhh para especificar caracteres Unicode.

Para construção de caracteres em scripts, você pode usar a diretiva #pragma codepage (veja página 119) ou a opção de linha de comando do compilador "-c" (introduzida
na seção).

As opções de linha de comando do compilador podem ser substituídas em parte por declarações no código-fonte. Por exemplo, o tamanho do stack pode ser ajustado usando a diretiva #pragma (veja páginas 117 a 128 para detalhes sobre as diretivas).

As opções de linha de comando são:

| Opção               | Descrição                                                                                                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **-a**              | Apenas assemblador; gera um arquivo .asm que contém o pseudo-código gerado para a máquina abstrata do PAWN. Os "nomes de instrução" no arquivo gerado são realmente diretivas para a ferramenta _pawnasm_, que pode montar o arquivo pseudo-código de volta para binário. |
| **-C[+/-]**         | Codificação compacta do binário, gerado ou não; sobrescreve a diretiva #pragma pack. Por padrão, a codificação compacta está habilitada.                                                                                                                                  |
| **-cname**          | Nome da página de código ou nome do arquivo; por exemplo -ciso-8859-1. Se o nome não corresponder a uma página de código conhecida, ele é interpretado como um nome de arquivo.                                                                                           |
| **-Dpath**          | Diretório de trabalho do compilador, para a tabela de símbolos e quaisquer arquivos temporários.                                                                                                                                                                          |
| **-d0**             | Sem informação simbólica; desabilita a depuração. É impossível usar um depurador simbólico neste modo (mas depuração "printf-assembly" ainda é suportada).                                                                                                                |
| **-d1**             | Informação simbólica suficiente para rastrear números de linha e nomes de funções; este é o nível padrão de informação de depuração.                                                                                                                                      |
| **-d2**             | Informações simbólicas completas; mesma informação de depuração de d1, além de informações simbólicas locais e arrays de comprimento zero.                                                                                                                                |
| **-d3**             | Informações simbólicas completas (como d2) E verificações de tempo de execução habilitadas.                                                                                                                                                                               |
| **-e filename**     | Redirecionar mensagens de erro para o arquivo especificado.                                                                                                                                                                                                               |
| **-H value**        | "window-handle" (identificador de janela) do ambiente de desenvolvimento integrado (IDE), para propósitos de notificação. O compilador enviará uma mensagem do Windows para a janela especificada quando terminar a compilação.                                           |
| **-i path**         | Caminho para arquivos include; múltiplas opções -i são permitidas.                                                                                                                                                                                                        |
| **-l**              | Criar arquivo de listagem; este é um arquivo de texto com a fonte, o bytecode e a data de endereço.                                                                                                                                                                       |
| **-o filename**     | Especifica nome (e caminho) para o arquivo de saída.                                                                                                                                                                                                                      |
| **-O level**        | Nível de otimização: 0 = sem otimização; 1 = verificações de célula única, propagação de constantes e otimização peephole; mais altos = mais otimizações.                                                                                                                 |
| **-p filename**     | Prefixo do nome do arquivo para o arquivo de saída.                                                                                                                                                                                                                       |
| **-r[name]**        | Escrever relatório de referência cruzada no arquivo de teste (nome) ou em relação ao nome de entrada.                                                                                                                                                                     |
| **-S value**        | Tamanho do stack/heap em células.                                                                                                                                                                                                                                         |
| **-s value**        | Número de linhas antes de pular para primeira palavra (padrão = 0 = pular nenhuma linha).                                                                                                                                                                                 |
| **-t value**        | TAB: número de caracteres de espaço por tabulação (usado pelo aviso de indentação frouxa). Por padrão, tabulações têm comprimento 8.                                                                                                                                      |
| **-V value**        | nível de verbosidade: 0 = silencioso, 1 = avisos normais, 2 = avisos.                                                                                                                                                                                                     |
| **-v[+/-]**         | habilita/desabilita avisos adicionais de status.                                                                                                                                                                                                                          |
| **-w number [+/-]** | Habilita/desabilita um aviso específico pelo número. Veja também #pragma warning.                                                                                                                                                                                         |
| **-X value**        | Tamanho da máquina abstrata; se zero, haverá apenas verificações de tempo de execução.                                                                                                                                                                                    |
| **-XD value**       | Tamanho do segmento de dados abstrato.                                                                                                                                                                                                                                    |
| **-\\**             | Usa "\\" em caminhos ao invés de "/".                                                                                                                                                                                                                                     |
| **-^**              | Usa "^" ao invés de "\\" como caractere de escape para strings.                                                                                                                                                                                                           |
| **-;[+/-]**         | Exigir ou não ponto e vírgula para terminar cada instrução.                                                                                                                                                                                                               |
| **-([+/-]**         | Exigir ou não parênteses em torno dos argumentos de retorno e sizeof.                                                                                                                                                                                                     |
| **símbolo=valor**   | Define uma constante, equivalente à diretiva #define, como um parâmetro de linha de comando.                                                                                                                                                                              |

Veja a opção "-c" e a página 119 para páginas de código. O padrão do compilador é
pegar o nome de saída do nome do "arquivo de entrada" mas com uma extensão
diferente. O compilador também exibe estatísticas após uma compilação bem-sucedida.

Quando executada sem nenhum argumento, a ajuda do compilador será exibida.

### Opções de linguagem

A linguagem PAWN foi projetada para ser utilizada junto com outros sistemas
e permite algumas variações na sintaxe, que possuem um comportamento padrão, mas
que podem ser alterados por uma diretiva ou opção de linha de comando:

- O ponto e vírgula para encerrar instruções é opcional; a opção/diretiva pode tornar ponto e vírgula obrigatórios ou pode desabilitá-los completamente.

- As palavras-chaves "return" e "sizeof" também podem funcionar sem parênteses (os parênteses seriam apenas parte da expressão); uma opção/diretiva pode forçar parênteses obrigatórios.

### Variáveis de ambiente

O compilador PAWN pode usar várias variáveis de ambiente.

| Variável    | Significado                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------- |
| **PAWNCC**  | Mantém opções de linha de comando adicionais                                                       |
| **INCLUDE** | Mantém caminho(s) para diretórios de include adicionais (múltiplos caminhos são separados por ";") |

### Sintaxe alternativa para funções públicas

Em vez de `public`, você pode usar o prefixo "@" para indicar que uma função é pública:

Listagem: declaração de função pública alternativa

```c
@minhafunçãopública()
{
    // ...
}
```

Esta sintaxe é particularmente comum para callbacks de eventos, onde pode ser usada com parâmetros opcionais e valores padrão como em `@nomedoevento(arg1, args2=0)`.

### Definindo constantes na linha de comando

Para definir a constante `DEBUG` como 1, use:

```
pawncc meuscript.pwn DEBUG=1
```

Se o valor for omitido, a constante será definida como 1 automaticamente:

```
pawncc meuscript.pwn DEBUG
```

### Opção de sufixo do compilador

Use a opção -o para especificar um prefixo diferente para o arquivo de saída:

```
pawncc meuscript.pwn -o:meuscript_compilado
```

### Diretório include padrão

O compilador pesquisa diretórios include na seguinte ordem:

1. Diretório atual onde o arquivo de origem está
2. Diretórios especificados em -i na linha de comando
3. Diretórios especificados na variável de ambiente INCLUDE
4. Diretório "include" relativo ao diretório onde o compilador está instalado

---

## Instruções e diretivas para o montador

Instruções e diretivas completam o conjunto de "instruções de montagem" que o montador e desmontador usam. O conjunto de instruções da máquina abstrata do PAWN é de nível relativamente alto, mas ainda requer diretivas para ajustar a tradução.

Para mais informações sobre a máquina abstrata e as instruções, veja o documento Implementer's Guide.

---

## Sugestões de documentação

| Etiqueta     | Significado                                                 |
| ------------ | ----------------------------------------------------------- |
| **@author**  | Autor da função.                                            |
| **@date**    | Data de criação ou última modificação.                      |
| **@note**    | Uma nota ou aviso sobre o uso da função.                    |
| **@param**   | Descrição de um parâmetro da função.                        |
| **@return**  | Descrição do valor de retorno da função.                    |
| **@see**     | Referência cruzada para outra função ou tópico relacionado. |
| **@since**   | Versão em que a função foi introduzida.                     |
| **@version** | Versão atual da função.                                     |

---

## Licença

PAWN incorpora ideias de uma série de linguagens, mas o projeto original foi influenciado pelo Small-C de Ron Cain & James Hendrix, e o Compilador de C por SubC de Nils Holm.

---

[Voltar ao Índice](Contents)
