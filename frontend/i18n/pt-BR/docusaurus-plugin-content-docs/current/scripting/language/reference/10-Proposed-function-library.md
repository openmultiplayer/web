# Biblioteca de funções propostas

---

Como PAWN é direcionado como uma linguagem de extensão de aplicativos, a maioria das
funções acessíveis a programas PAWN será específica do
aplicativo host. No entanto, um pequeno conjunto de funções pode ser útil
para muitos ambientes.

### • Funções principais

O módulo "core" consiste em um conjunto de funções que suportam a
linguagem em si. Várias das funções são necessárias para extrair argumentos de uma
lista de argumentos variáveis (veja página 80).

| clamp       |                                                                                                            | Força um valor dentro de um intervalo |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------: |
| Sintaxe     | clamp(valor, min=cellmin, max=cellmax)                                                                     |                                       |
|             | valor                                                                                                      |      O valor a forçar em um intervalo |
|             | min                                                                                                        |       O limite inferior do intervalo. |
|             | max                                                                                                        |       O limite superior do intervalo. |
| Retorna     | valor se estiver no intervalo min – max; min se valor for menor que min; e max se valor for maior que max. |                                       |
| Veja também | max, min                                                                                                   |                                       |

| funcidx |                                                                                                                                                                                                                                                    | Retorna um índice de função pública |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------: |
| Sintaxe | funcidx(const nome[])                                                                                                                                                                                                                              |                                     |
| Retorna | O índice da função pública nomeada. Se nenhuma função pública com o nome dado existir, funcidx retorna −1.                                                                                                                                         |                                     |
| Notas:  | Um aplicativo host executa uma função pública do script passando o índice da função pública para amx_Exec. Com esta função, o script pode consultar o índice de uma função pública e assim retornar a "próxima função a chamar" para o aplicativo. |                                     |

| getarg      |                                                                                                                                                                                                     |                                         Obtém um argumento |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------: |
| Sintaxe     | getarg(arg, index=0)                                                                                                                                                                                |                                                            |
|             | arg                                                                                                                                                                                                 | O número de sequência do argumento, use 0 para o primeiro. |
|             | index                                                                                                                                                                                               |                   O índice, caso arg se refira a um array. |
| Retorna     | O valor do argumento                                                                                                                                                                                |                                                            |
| Notas:      | Esta função recupera um argumento de uma lista de argumentos variáveis. Quando o argumento é um array, o parâmetro index especifica o índice no array. O valor de retorno é o argumento recuperado. |                                                            |
| Veja também | numargs, setarg                                                                                                                                                                                     |                                                            |

| heapspace |                                                                                                                                                                               | Retorna espaço livre no heap |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------: |
| Sintaxe   | heapspace()                                                                                                                                                                   |                              |
| Retorna   | O espaço livre no heap. A pilha e o heap ocupam uma área de memória compartilhada, então este valor indica o número de bytes restantes tanto para a pilha quanto para o heap. |                              |
| Notas:    | Na ausência de recursão, o parser pawn também pode dar uma estimativa do espaço de pilha/heap necessário.                                                                     |                              |

| max         |                                  |                  Retorna o maior de dois números |
| ----------- | -------------------------------- | -----------------------------------------------: |
| Sintaxe     | max(valor1, valor2)              |                                                  |
|             | valor1                           |                                                  |
|             | valor2                           | Os dois valores para os quais encontrar o maior. |
| Retorna     | O maior valor de valor1 e valor2 |                                                  |
| Veja também | clamp, min                       |                                                  |

| min         |                                  |                  Retorna o menor de dois números |
| ----------- | -------------------------------- | -----------------------------------------------: |
| Sintaxe     | min(valor1, valor2)              |                                                  |
|             | valor1                           |                                                  |
|             | valor2                           | Os dois valores para os quais encontrar o menor. |
| Retorna     | O menor valor de valor1 e valor2 |                                                  |
| Veja também | clamp, max                       |                                                  |

| numargs     |                                                                                                                         | Retorna o número de argumentos |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | -----------------------------: |
| Sintaxe     | numargs()                                                                                                               |                                |
| Retorna     | O número de argumentos passados para uma função; numargs é útil dentro de funções com uma lista de argumentos variáveis |                                |
| Veja também | getarg, setarg                                                                                                          |                                |

| random  |                                                                                                                                                                                                                                                                                                                                                                          | Retorna um número pseudo-aleatório |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------: |
| Sintaxe | random(max)                                                                                                                                                                                                                                                                                                                                                              |                                    |
|         | max                                                                                                                                                                                                                                                                                                                                                                      |   O limite para o número aleatório |
| Retorna | Um número pseudo-aleatório no intervalo 0 - max-1                                                                                                                                                                                                                                                                                                                        |                                    |
| Notas:  | O gerador de números aleatórios padrão do pawn é provavelmente um gerador de números pseudo-aleatórios congruente linear com um intervalo e um período de 2³¹. Geradores de números pseudo-aleatórios congruentes lineares sofrem de correlação serial (especialmente nos bits baixos) e é inadequado para aplicações que requerem números aleatórios de alta qualidade. |                                    |

| setarg      |                                                                                                                                                                 |                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------: |
| Sintaxe     | setarg(arg, index=0, valor)                                                                                                                                     |                                                           |
|             | arg                                                                                                                                                             | O número de sequência do argumento, use 0 para o primeiro |
|             | index                                                                                                                                                           |                   O índice, caso arg se refira a um array |
|             | valor                                                                                                                                                           |                          O valor para definir o argumento |
| Retorna     | true em caso de sucesso e false se o argumento ou o índice forem inválidos                                                                                      |                                                           |
| Notas:      | Esta função define o valor de um argumento de uma lista de argumentos variáveis. Quando o argumento é um array, o parâmetro index especifica o índice no array. |                                                           |
| Veja também | getarg, numargs                                                                                                                                                 |                                                           |

| swapchars |                                                                                                    |           Troca bytes em uma célula |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------------: |
| Sintaxe   | swapchars(c)                                                                                       |                                     |
|           | c                                                                                                  | O valor para o qual trocar os bytes |
| Retorna   | Um valor onde os bytes no parâmetro "c" são trocados (o byte mais baixo se torna o byte mais alto) |                                     |

| tolower     |                                                                                                                                                      |    Converte um caractere para minúscula |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------: |
| Sintaxe     | tolower(c)                                                                                                                                           |                                         |
|             | c                                                                                                                                                    | O caractere a converter para minúscula. |
| Retorna     | A variante maiúscula do caractere de entrada, se existir, ou o código de caractere inalterado de "c" se a letra "c" não tiver equivalente minúsculo. |                                         |
| Notas:      | O suporte para caracteres acentuados é dependente da plataforma                                                                                      |                                         |
| Veja também | toupper                                                                                                                                              |                                         |

| toupper     |                                                                                                                                                      |    Converte um caractere para maiúscula |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------: |
| Sintaxe     | toupper(c)                                                                                                                                           |                                         |
|             | c                                                                                                                                                    | O caractere a converter para maiúscula. |
| Retorna     | A variante minúscula do caractere de entrada, se existir, ou o código de caractere inalterado de "c" se a letra "c" não tiver equivalente maiúsculo. |                                         |
| Notas:      | O suporte para caracteres acentuados é dependente da plataforma                                                                                      |                                         |
| Veja também | tolower                                                                                                                                              |                                         |

---

Propriedades são nomes ou valores de propósito geral. As rotinas de lista de propriedades
mantêm uma lista desses pares nome/valor que é compartilhada entre todas as máquinas abstratas.
A lista de propriedades é, portanto, uma forma para máquinas abstratas concorrentes
trocarem informações.

Todas as funções de "manutenção de propriedades" têm um parâmetro "id" opcional.
Você pode usar este parâmetro para indicar a qual máquina abstrata a propriedade pertence.
(Um aplicativo host que suporta máquinas abstratas concorrentes normalmente
fornecerá a cada máquina abstrata um id único.) Ao consultar (ou excluir)
uma propriedade, o valor id que você passa é comparado com os valores id da
lista.

Uma propriedade é identificada com seu "id de máquina abstrata" mais um nome ou
um valor. A interface baseada em nome permite anexar um valor (por exemplo, o handle
de um objeto) a um nome de sua escolha. A interface baseada em valor permite
anexar uma string a um número. A diferença entre as duas é basicamente a
chave de busca versus o parâmetro de saída.

Todas as funções de manutenção de propriedades têm um parâmetro "nome" e um "valor".
Apenas um deste par deve ser preenchido. Quando você fornece o valor, a função getproperty
armazena o resultado no argumento string e a função setproperty
lê a string a armazenar do argumento string.

O número de propriedades que você pode adicionar é limitado apenas pela memória disponível.

**getproperty(id=0, const nome[]="", valor=cellmin, string[]="")**

    Retorna o valor de uma propriedade quando o nome é passado; preenche o
    argumento string quando o valor é passado. A string nome pode
    ser uma string empacotada ou desempacotada. Se a propriedade não
    existir, esta função retorna zero.

**setproperty(id=0, const nome[]="", valor=cellmin, const string[]="")**

    Adiciona uma nova propriedade ou altera uma propriedade existente.

**deleteproperty(id=0, const nome[]="", valor=cellmin)**

    Retorna o valor da propriedade e subsequentemente a remove. Se a
    propriedade não existir, a função retorna zero.

**existproperty(id=0, const nome[]="", valor=cellmin)**

    Retorna true se a propriedade existir e false caso contrário.

### • Funções de console

Para fins de teste, as funções de console que leem entrada do usuário e que
exibem strings em uma janela rolável ou em um terminal padrão são frequentemente
convenientes. Nem todos os tipos de terminal e implementações podem implementar todas as
funções — especialmente as funções que limpam a tela, definem cores de primeiro plano e
fundo e controlam a posição do cursor, requerem um controle de terminal estendido.

**getchar(echo=true)**

    Lê um caractere do teclado e o retorna. A função pode
    opcionalmente ecoar o caractere na janela do console.

**getstring(string[], size=sizeof string, bool**

    pack=false): Lê uma string do teclado. A função getstring
    para de ler quando a tecla enter é digitada ou o comprimento
    máximo é alcançado. O comprimento máximo é em células (não caracteres)
    e inclui um caractere nul de terminação. A função pode ler
    strings empacotadas e desempacotadas; ao ler uma string empacotada,
    a função pode ler mais caracteres do que o parâmetro size especifica,
    porque cada célula contém múltiplos caracteres. O valor de retorno é o
    número de caracteres lidos, excluindo o caractere nul de terminação.

**getvalue(base=10, end=' r', ...)**

    Lê um valor (um número com sinal) do teclado. A função getvalue
    permite que você leia em uma base numérica de 2 a 36 (o parâmetro
    base) com base decimal por padrão.

    Por padrão, a entrada termina quando o usuário digita a tecla enter, mas
    uma ou mais teclas diferentes podem ser selecionadas (o parâmetro end e
    subsequentes). Na lista de teclas de terminação, um número positivo (como
    '\r') exibe a tecla e termina a entrada, e um número negativo
    termina a entrada sem exibir a tecla de terminação.

**print(const string[], foreground=-1, background=-1)**

    Imprime uma string simples no console. As cores de primeiro plano e fundo
    podem ser opcionalmente definidas (mas note que um terminal ou um aplicativo
    host pode não suportar cores). Veja setattr abaixo para uma lista de
    cores.

**printf(const format[], ...)**

    Imprime uma string com códigos incorporados:

    %b   imprime um número nesta posição em base binária

    %c   um caractere nesta posição

    %d   imprime um número nesta posição em base decimal

    %f   imprime um número de ponto flutuante nesta posição (assumindo que o suporte
    a ponto flutuante está presente)

    %q   imprime um número de ponto fixo nesta posição (assumindo que o suporte
    a ponto fixo está presente)

    %r   imprime um número de ponto flutuante ou um número de ponto fixo nesta
    posição, dependendo do que está disponível; se ambos os suportes a ponto flutuante e
    ponto fixo estiverem presentes, %r é equivalente a %f (ou seja, imprime
    um número de ponto flutuante)

    %s   imprime uma string de caracteres nesta posição

    %x   imprime um número nesta posição em base hexadecimal

    A função printf funciona de forma similar à função printf da linguagem C.

**clrscr()**

    Limpa o console e define o cursor no canto superior esquerdo.

**clreol()**

    Limpa a linha onde o cursor está, da posição do cursor
    até a margem direita do console. Esta função não move o
    cursor.

**gotoxy(x=1, y=1)**

    Define a posição do cursor no console.
    O canto superior esquerdo está em (1,1).

**setattr(foreground=-1, background=-1)**

    Define as cores de primeiro plano e fundo para o texto escrito no
    console. Quando um dos dois parâmetros é negativo (ou ausente), a
    respectiva configuração de cor não será alterada. O valor de cor deve
    ser um valor entre zero e sete, conforme as Sequências de Escape ANSI, ISO 6429.

    Constantes predefinidas para as cores são black (0), red (1),
    green (2), yellow (3), blue (4), magenta (5), cyan (6) e white (7).

### • Funções de data/hora

Funções para obter e definir a data e hora atuais, bem como um
timer de "evento" de resolução de milissegundos são descritas em uma nota de aplicação intitulada "Time
Functions Library" que está disponível separadamente.

### • Entrada/saída de arquivo

Funções para manipular arquivos de texto e binários, com suporte direto para arquivos
de texto UTF-8, são descritas em uma nota de aplicação intitulada "File I/O Support Library"
que está disponível separadamente.

### • Aritmética de ponto fixo

O módulo de aritmética decimal de ponto fixo para pawn é descrito em uma nota
de aplicação intitulada "Fixed Point Support Library" que está disponível
separadamente.

### • Aritmética de ponto flutuante

O módulo de aritmética de ponto flutuante para pawn é descrito em uma nota de aplicação
intitulada "Floating Point Support Library" que está disponível separadamente.

### • Manipulação de strings

Um conjunto geral de funções de manipulação de strings, operando em strings empacotadas e
desempacotadas, é descrito em uma nota de aplicação intitulada "String Manipulation Library"
que está disponível separadamente.

### • Interface de chamada de DLL

A versão da máquina abstrata que é construída como uma Dynamic Link Library
para Microsoft Windows tem uma função de propósito geral para chamar uma função de
qualquer DLL em memória. Duas funções companheiras carregam uma DLL do disco para a
memória e a descarregam. As funções foram configuradas de forma que é possível
executar o mesmo script compilado em versões de 16 bits e 32 bits do Microsoft Windows.

Todos os parâmetros de string podem estar em formato empacotado ou desempacotado.

**calldll(const dllname[], const function[], const typestr[], ...)**

    O parâmetro dllname é o nome do módulo da DLL, tipicamente este é o
    mesmo que o nome do arquivo. Se a DLL não puder ser encontrada, calldll tenta novamente
    após anexar "16" ou "32" ao nome do arquivo, dependendo de você
    estar executando a versão de 16 bits ou 32 bits da máquina abstrata. Por
    exemplo, se você definir dllname como "USER", calldll conecta a USER na
    versão de 16 bits da máquina abstrata e a USER32 na versão de 32 bits.

    O parâmetro function é o nome da função na DLL. Na
    versão de 16 bits, este nome não diferencia maiúsculas de minúsculas, mas na versão de 32 bits
    do Microsoft Windows, nomes de funções exportadas diferenciam maiúsculas de minúsculas.
    Na versão de 32 bits da máquina abstrata, se function não puder ser
    encontrada, calldll anexa um "A" maiúsculo ao nome e tenta novamente

    — muitas funções no Windows de 32 bits existem em duas variedades: ANSI e
    "Wide", e essas funções são sufixadas com um "A" ou um "W" respectivamente.
    Então se function for "MessageBox", calldll chamará MessageBox
    na versão de 16 bits do Windows e MessageBoxA na versão de 32 bits.

    O parâmetro string typestr indica o número de argumentos que
    a função (na DLL) aceita e quais são os tipos. Para cada
    argumento, você adiciona uma letra à string typestr:

    h   um "handle" do Windows (HWND, HDC, HPALETTE, HMEM, etc.)

    i   um inteiro com um "tamanho nativo" (16 bits ou 32 bits, dependendo do
    "bitness" da máquina abstrata).

    l   um inteiro de 32 bits

    p   uma string empacotada

    s   uma string desempacotada

    w   um inteiro sem sinal de 16 bits

    Quando a letra está em minúscula, o parâmetro correspondente é passado
    "por valor"; quando está em maiúscula, é passado "por referência". A
    diferença entre strings empacotadas e desempacotadas é relevante apenas quando
    o parâmetro é passado por referência.

**loaddll(const dllname[])**

    Carrega a DLL especificada na memória (ou incrementa seu contador de uso
    se já estiver carregada). O nome no parâmetro dllname pode conter
    um caminho completo. Se nenhum caminho for especificado, o Microsoft Windows procura em seus
    diretórios de sistema pela DLL. De forma similar à função calldll, esta

    função anexa "16" ou "32" ao nome da DLL se a DLL não puder
    ser encontrada, e então tenta novamente.

**freedll(const dllname[])**

    Decrementa o contador de uso da DLL e, se o contador se tornar zero,
    remove a DLL da memória. O nome no parâmetro dllname pode
    conter um caminho completo, mas as informações de caminho são ignoradas. De forma similar à
    função calldll, esta função anexa "16" ou "32" ao nome da DLL
    se a DLL não puder ser encontrada, e então tenta novamente.

**iswin32()**

    Retorna true se a máquina abstrata for a versão de 32 bits (executando em
    uma versão de 32 bits do Microsoft Windows); retorna false se a máquina
    abstrata for a versão de 16 bits (executando no Windows 3.1x ou em
    qualquer versão posterior do Microsoft Windows).

---

`amx_Exec: veja o "Implementor's Guide"`

---

[Voltar ao Índice](Contents)
