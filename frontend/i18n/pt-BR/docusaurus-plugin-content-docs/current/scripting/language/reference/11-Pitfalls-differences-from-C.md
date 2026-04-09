# Armadilhas: diferenças do C

---

- PAWN não possui o mecanismo de tipagem do C. PAWN é uma variedade "apenas inteiros" do C; não há estruturas ou uniões, e o suporte a ponto flutuante deve ser implementado com operadores definidos pelo usuário e a ajuda de funções nativas.

- A sintaxe aceita para números racionais é mais estrita do que a de valores de ponto flutuante em C. Valores como ".5" e "6." são aceitáveis em C, mas em PAWN deve-se escrever "0.5" e "6.0" respectivamente. Em C, o ponto decimal é opcional se um expoente for incluído, então pode-se escrever "2E8"; PAWN não aceita o "E" maiúsculo (use um "e" minúsculo) e requer o ponto decimal: por exemplo, "2.0e8". Veja página 98 para mais informações.

- PAWN não fornece "ponteiros". Para o propósito de passar argumentos de função por referência, PAWN fornece um argumento "referência" (página 71). O argumento "placeholder" substitui alguns usos do ponteiro NULL (página 75).

- Números podem ter base hexadecimal, decimal ou binária. Base octal não é suportada. Veja "Constants" na página 98. Números hexadecimais devem começar com "0x" (um "x" minúsculo), o prefixo "0X" é inválido.

- Sequências de escape ("\n", "\t", etc.) são as mesmas, exceto por "\ddd" onde "ddd" representa três dígitos decimais, em vez dos dígitos octais que C/C++ usa. A barra invertida ("\") pode ser substituída por outro símbolo; veja #pragma ctrlchar na página 120 — notavelmente, versões anteriores de PAWN usavam o circunflexo ("^") como o caractere de escape.

- Cases em uma instrução switch não são "fall through". Apenas uma única instrução pode (e deve) seguir cada rótulo de case. Para executar múltiplas instruções, você deve usar uma instrução composta. A cláusula default de uma instrução switch deve ser a última cláusula da instrução switch. Mais na página 115. Em C/C++, switch é um "goto condicional", semelhante aos rótulos calculados do Fortran. Em PAWN, switch é um "if" estruturado.

- Uma instrução break sai apenas de loops. Em C/C++, a instrução break também termina um case em uma instrução switch. Instruções switch são implementadas de forma diferente em PAWN (veja página 115).

- PAWN suporta "atribuição de array", com a restrição de que ambos os arrays devem ter o mesmo tamanho. Por exemplo, se "a" e "b" são ambos arrays com 6 células, a expressão "a = b" é válida. Além de strings literais, PAWN também suporta arrays literais, permitindo a expressão "a = {0,1,2,3,4,5}" (onde "a" é uma variável de array com 6 elementos).

- _char_ é um operador, não um tipo. Veja página 110 e as dicas na página 137.

- _defined_ é um operador, não uma diretiva de pré-processador. O operador defined em PAWN opera em constantes (com const e enum), variáveis globais, variáveis locais e funções.

- O operador _sizeof_ retorna o tamanho de uma variável em "elementos", não em "bytes". Um elemento pode ser uma célula ou um sub-array. Veja página 109 para detalhes.

- A instrução vazia é um bloco composto vazio, não um ponto e vírgula (página 112). Esta modificação evita um erro frequente.

- As diretivas do compilador diferem dos comandos do pré-processador do C. Notavelmente, a diretiva #define é incompatível com a de C/C++, e #ifdef e #ifndef são substituídas pela diretiva #if mais geral (veja "Directives" na página 117). Para criar constantes numéricas, veja também página 101; para criar constantes de string, veja também página 93.

- Substituições de texto (macros de pré-processador; veja a diretiva #define) não são correspondidas entre linhas. Ou seja, o texto que você quer corresponder e substituir com uma macro #define deve aparecer em uma única linha. A definição de uma macro #define também deve aparecer em uma única linha.

- A direção de truncamento para o operador "/" é sempre em direção ao menor valor, onde -2 é menor que -1. O operador "%" sempre dá um resultado positivo, independentemente dos sinais dos operandos. Veja página 104.

- Não há operador "+" unário, que é um operador "sem operação" de qualquer forma.

- Três dos operadores bit a bit têm precedência diferente do C. Os níveis de precedência dos operadores "&", "^" e | são mais altos que os operadores relacionais (Dennis Ritchie explicou que esses operadores obtiveram seus níveis de precedência baixos em C porque os compiladores C antigos ainda não tinham os operadores lógicos "&&" e ||, então os operadores bit a bit "&" e | eram usados em seu lugar).

- A palavra-chave "extern" não existe em PAWN; a implementação atual do compilador não tem "fase de linkagem". Para criar um programa de vários arquivos fonte, adicione todos os arquivos fonte à linha de comando do compilador, ou crie um arquivo de script de projeto principal que "#include's" todos os outros arquivos fonte. O compilador PAWN pode otimizar funções e variáveis globais que você não usa. Veja páginas 63 e 84 para detalhes.

- Na maioria das situações, declarações forward de funções (ou seja, protótipos) não são necessárias. PAWN é um compilador de duas passagens, ele verá todas as funções na primeira passagem e as usará na segunda passagem. Operadores definidos pelo usuário devem ser declarados antes do uso, no entanto.

Se fornecidas, declarações forward devem corresponder exatamente à definição da função,
nomes de parâmetros não podem ser omitidos do protótipo ou diferir
da definição da função. PAWN se importa com nomes de parâmetros em protótipos
por causa do recurso de "parâmetros nomeados". Usa-se protótipos
para chamar funções declaradas antecipadamente. Ao fazer isso com parâmetros
nomeados, o compilador deve já conhecer os nomes dos parâmetros (e
sua posição na lista de parâmetros). Como resultado, os nomes dos parâmetros em um
protótipo devem ser iguais aos da definição.

---

[Voltar ao Índice](Contents)
