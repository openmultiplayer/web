---
title: Guia de desenvolvimento de Plugins
description: Um guia simples para desenvolvolver plugins ( Tradução de um post do sampforum )
---

## Introdução
Eu decidi criar esse topico para direcionar problemas e questões frequentes em relação ao desenvolvimento de Plugins.
Eu de longe sou um especialista de C/C++ ou sobre a SDK de plugins, apenas estou compartilhando o que aprendi nesse tempo desenvolvendo plugins.

Tenho esperança de que este topico pode se tornar um projeto em grupo quando vir a tona e outras pessoas poderão compartilhar informações que eu possa não saber agora.

> Nota do tradutor: Eu conhecido como Louzindev na comunidade, estou tentando reviver este topico para reforçar o conhecimento na comunidade local.

## Este **Não** é um forum de ajuda de C/++
Algumas pessoas parecem estar bem confusas quando vêem este post.

Eu vejo muitas pessoas perguntarem questões completamente validas e terminarem com multiplas respostas como: "Este não é um forum de ajuda para C/++". Apenas porque é esperado que alguem conheça a linguagem, não significa que eles não podem fazer perguntas sobre a atual SDK. Existe uma grande diferença entre perguntar o que um ponteiro é, para algo como: "Como criar callbacks"

Dito isso, separei alguns sites ótimos para perguntas frequentes e tutorias além da documentação oficial do C/++.

cprogramming.com

cplusplus.com

learncpp.com

Se você precisar de assistencia com C/++, você pode perguntar nesses foruns:

dreamincode.net

stackoverflow.com

## FAQ

### Duvidas rapidas

**Duvida:** Como os plugins são feitos?

- **Resposta:** Plugins são feitos usando a plugin SDK do AMX, este topico presume que você já sabe C/++, e vai providenciar informação sobre a SDK neste artigo.

**Duvida:** Eu Posso criar um plugin em outra linguagem sem ser C/++?

- **Resposta:** É possivel na teoria. Existem varias tentativas de portar a Plugin SDK do SA-MP para a linguagem D, que suporta a interface de programação C. Por enquanto, eu nunca vi nenhum plugin funcionando em linguagem D, mas é possivel na teoria.

> Nota do tradutor: é possivel 'bindar' a Plugin SDK para outras linguagens. Como no repositorio de exemplo: https://github.com/AmyrAhmady/samp-node 


**Pergunta:** Como posso fazer meu plugin ser multiplataforma (disponível no Linux e Windows)?

- **Resposta:** Linux e Windows são dois sistemas operacionais diferentes, cada um com suas próprias APIs e implementações distintas. Fazer seu código funcionar em ambas as plataformas significa que você deve usar código independente de plataforma ou algum tipo de framework que lide com as diferenças de plataforma para você. Depois de garantir que seu código não depende de uma API específica, basta compilá-lo no ambiente desejado (novamente, este guia assume que você sabe como fazer isso).

**Resposta:** Meu plugin pode usar memory hacking?

**Resposta:** Para ser honesto, isso é uma área meio cinzenta. Usar hacking de memória para fazer *hook* em callbacks ou chamar funções parece ser totalmente aceitável. Qualquer coisa que modifique a memória do servidor parece ser proibida (veja isso). Se você planeja criar um plugin que precise usar hacking de memória para qualquer coisa além de fazer *hook* de callbacks ou chamadas de funções, peça permissão antes e obtenha aprovação antes de postar; essa é, honestamente, a melhor forma de descobrir!

**Pergunta:** É possível fazer um plugin que **\_\_\_\_\_\_**?

- **Resposta:** Na maioria dos casos, qualquer ideia é completamente possível de implementar. Pode ser necessário um aplicativo independente que se comunique com o plugin, mas provavelmente é viável. Perguntas como essa **não** devem ser postadas. Você ouviu a resposta, então siga em frente! Esta não é uma seção para pedidos de plugins. Espero que um dia haja criadores de plugins suficientes para uma seção ou um tópico fixo para solicitações (este guia foi criado para apresentar e ajudar novos desenvolvedores de plugins, então vamos torcer).

**Pergunta:** Qual IDE/Compilador devo usar para **\_\_\_\_\_\_**?

- **Resposta:** Isso é completamente com você! Eu pessoalmente usarei o VC++ 2010 Express como minha IDE e compilador para Windows, e planejo usar o g++ como meu compilador para Linux. Experimente diferentes opções e veja qual você gosta mais!

**Pergunta:** O que é um arquivo de definição de módulo (.def)?

- **Resposta:** Um arquivo de definição de módulo é um arquivo especial no IDE Visual Studio que fornece ao *linker* informações sobre o programa que está sendo vinculado. Quando se trata de escrever plugins para SA-MP, geralmente usamos apenas a declaração "EXPORTS", que fornece informações sobre as funções exportadas. Vamos abordar essa declaração mais adiante no artigo.

**Pergunta:** Quando eu lançar um plugin, ele precisa ter o código-fonte junto?

- **Resposta:** Se você está lançando algo neste fórum, **sempre** deve incluir o código-fonte. Plugins não são exceção (a menos que o plugin seja aprovado por um desenvolvedor para ser postado sem o código-fonte — talvez um anti-cheat?).

## Introdução

Você ficaria surpreso com a frequência que me perguntam: "Como eu começo com o desenvolvimento de plugins?". Decidi adicionar esta seção inteira para responder a essa pergunta! Só porque você conhece a linguagem não significa que sabe lidar com a IDE, afinal de contas; acho que isso é especialmente verdadeiro para o VC++ 2010. O Visual Studio pode ser um lugar muito intimidador para novos usuários. Acho que não é justo simplesmente entregar o SDK do plugin sem antes orientá-lo! Mexer com as páginas de propriedades/o linker pode facilmente assustar as pessoas, então vou guiá-lo por isso.

**Nota:** Se você escolheu usar uma IDE/compilador diferente que tenha como alvo o Windows, você pode ter dificuldades! Parece que a única maneira de exportar funções com sucesso é usar um arquivo de definição de módulo (.DEF). Tentei incluir um método alternativo neste artigo usando \_\_declspec(dllexport), mas isso simplesmente não funcionou devido à convenção de chamada \_\_stdcall modificar os nomes das funções exportadas (Veja: [Aqui](https://pastebin.com/y3xkVY70)).

Aqui estão os downloads necessários para esta seção:

**Visual Studio Atualizado:** [Download](https://visualstudio.microsoft.com/pt-br/downloads/)

**Visual C++ 2010 Express:** [Download grátis](https://visualstudio.microsoft.com/vs/express/)

**Plugin SDK (Versão Simples):** [Download](https://github.com/Zeex/samp-plugin-sdk)

**SDK Atualizado:** [Download](https://github.com/maddinat0r/samp-plugin-sdk)

- A primeira coisa que queremos fazer é criar um novo projeto. Selecione *File -> New -> Project* para fazer isso.

- Depois de criar um novo projeto, será solicitado o tipo de projeto que você está criando. Selecione *Win32 Project*, insira um nome para o projeto e pressione *OK* para continuar.

- Depois de definir as configurações do seu projeto, este diálogo deve aparecer. Pressione *Next* para continuar.
- Após clicar em continuar, deve aparecer uma caixa de diálogo solicitando o tipo e as configurações da aplicação. Para o tipo, selecione *DLL (Dynamic-link library)* e para as configurações, selecione *Empty project*. Depois disso, pressione o botão *Finish* na parte inferior.

- O próximo passo é ir ao *Solution Explorer*. O *Solution Explorer* normalmente está no lado esquerdo da IDE. Se você o desativou acidentalmente, pode ativá-lo novamente pressionando *CTRL+ALT+L* ou selecionando *View -> Other Windows -> Solution Explorer*. No *Solution Explorer*, clique com o botão direito no nome do projeto (neste exemplo, é "Test") e selecione *Properties*.

- Na janela de propriedades, navegue até *Configuration Properties -> Linker -> Input* no lado esquerdo. Quando estiver lá, adicione um arquivo de definição de módulo. Você pode nomear esse arquivo como preferir, desde que tenha a extensão ".def" no final; normalmente os arquivos *.def* são nomeados como o projeto. Depois de nomear seu arquivo de definição, pressione *OK*.

- Agora, só precisamos adicionar nossos arquivos (incluindo o arquivo de definição!). Para adicionar um arquivo ao projeto, vá ao *Solution Explorer* novamente, clique com o botão direito no nome do projeto, clique em *Add* e selecione *New Item*. Neste exemplo, vamos adicionar nosso arquivo de definição. Como não há uma opção específica para arquivos de definição, escolha um arquivo-fonte (.cpp) e digite o nome do arquivo de definição do módulo que você escolheu (Nota: certifique-se de incluir a extensão ".def", caso contrário uma extensão ".cpp" será adicionada!). Depois disso, adicione um arquivo de origem para o projeto da mesma forma (exceto sem adicionar uma extensão). A maioria das pessoas usa o nome "Main" para seu arquivo principal de origem.

- Antes de começar a adicionar qualquer coisa aos nossos dois arquivos atualmente vazios, precisamos realmente adicionar o SDK ao projeto. Se ainda não fez isso, baixe o SDK no link fornecido no início desta seção. Depois de baixá-lo, extraia a pasta do SDK para o diretório do projeto atual. Nota: esta parte é opcional: pessoalmente, gosto de criar filtros para organizar todos os nossos arquivos e códigos. Um filtro é uma ferramenta organizacional no Visual Studio que cria pastas no projeto, mas não cria pastas correspondentes no Windows (recomenda-se criar pastas correspondentes no Windows). Para criar um filtro, clique com o botão direito no projeto no *Solution Explorer* -> *Add* -> *New Filter* e selecione um nome para o filtro (neste caso, nomeie-o como SDK).

- O próximo passo é adicionar todos os arquivos do SDK ao projeto atual. Para adicionar arquivos existentes ao projeto, clique com o botão direito na pasta ou no projeto onde deseja adicioná-los e selecione *Add -> Existing Item*. Você vai querer adicionar tudo o que está dentro da pasta do SDK no diretório do projeto (Nota: você pode selecionar vários arquivos segurando Ctrl enquanto clica nos arquivos para adicionar). Para manter a consistência das pastas, criaremos outro filtro dentro do filtro SDK e nomeá-lo-emos como *amx*. Claro, você vai querer adicionar todo o conteúdo da pasta SDK\amx\ dentro do filtro amx.

Agora é hora de compilar o plugin! Se você seguiu as instruções corretamente, deve ter um arquivo de definição de módulo e um arquivo de origem abertos; se não, volte alguns passos e siga as instruções com atenção. Agora, copie e cole as informações a seguir em seus respectivos arquivos. Não se preocupe se não entender tudo, abordaremos isso na próxima seção.

### Arquivo de origem (\*.cpp)

```cpp
#include "SDK\amx\amx.h"
#include "SDK\plugincommon.h"


typedef void (*logprintf_t)(const char* format, ...);
logprintf_t logprintf;
extern void *pAMXFunctions;


cell AMX_NATIVE_CALL HelloWorld(AMX* amx, cell* params)
{
    logprintf("This was printed from the Test plugin! Yay!");
    return 1;
}

PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports()
{
    return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void **ppData)
{
    pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
    logprintf = (logprintf_t) ppData[PLUGIN_DATA_LOGPRINTF];

    logprintf(" * Test plugin was loaded.");
    return true;
}

PLUGIN_EXPORT void PLUGIN_CALL Unload()
{
    logprintf(" * Test plugin was unloaded.");
}

AMX_NATIVE_INFO PluginNatives[] =
{
    {"HelloWorld", HelloWorld},
    {0, 0}
};

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    return amx_Register(amx, PluginNatives, -1);
}


PLUGIN_EXPORT int PLUGIN_CALL AmxUnload( AMX *amx )
{
    return AMX_ERR_NONE;
}
```

### Arquivo de definição de módulo (\*.def)

```cpp
EXPORTS
      Supports
      Load
      Unload
      AmxLoad
      AmxUnload
```
## Examinando o código

Nesta seção, vamos dar uma olhada em algumas das definições, estruturas e funções que o SDK de plugins do SA-MP oferece. Você deve ter uma compreensão confortável de C/C++ antes de prosseguir, pois a partir daqui **só** explicarei informações relacionadas ao SDK nos segmentos de código. A partir deste ponto, não haverá mais “mão na massa”!

### O arquivo de definição de módulo

Antes de analisarmos o código, vamos verificar o arquivo de definição de módulo que criamos na seção anterior. Mas, antes de tudo, o que exatamente é um arquivo de definição de módulo? Sabemos que é um recurso exclusivo do Visual Studio, mas o que ele realmente faz? É simples! Um arquivo de definição de módulo fornece informações para o linker sobre o código que está sendo vinculado. Existem muitas regras e declarações que podem ser usadas nesses arquivos, mas vamos falar apenas de uma: a declaração EXPORTS.

#### O que é "**EXPORTS**"

Exports é uma declaração que nos permite… bem, exportar itens para a nossa aplicação! Por que fazemos isso? Porque é necessário, tão simples quanto isso. As funções que exportamos são pontos de entrada em nosso arquivo DLL. Aplicativos podem acessar apenas as funções em nossa DLL que exportamos; se não as exportarmos, elas permanecem privadas no arquivo DLL. E não queremos isso, certo? Então, exportamos tudo o que a aplicação irá acessar diretamente.

#### Funções exportadas

Atualmente, há 6 funções que precisam ser exportadas. Usamos 5 delas no projeto que estamos configurando. Não se preocupe com as definições `PLUGIN_EXPORT` e `PLUGIN_CALL` que você vê nas declarações de funções. Vamos abordá-las juntamente com outras definições importantes (marcadas em verde) mais adiante no artigo.

| Funções                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Supports()**           | Esta função informa ao servidor quais recursos nosso plugin terá com base no valor retornado. Geralmente, usamos apenas 3 flags de suporte em plugins: **SUPPORTS_VERSION**, **SUPPORTS_AMX_NATIVES** e **SUPPORTS_PROCESS_TICK**.                                                                                                                                                                                                               |
| **Load(void\*\*)**       | A função Load é bem simples. Ela é chamada quando o plugin é carregado e recebe um array de endereços que o plugin usará para funcionar. Os dois índices que normalmente usamos são **PLUGIN_DATA_AMX_EXPORTS** e **PLUGIN_DATA_LOGPRINTF**.                                                                                                                                                                                                      |
| **Unload()**             | Unload é chamada quando o plugin é descarregado (quando o servidor é encerrado).                                                                                                                                                                                                                                                                                                                                                                  |
| **AmxLoad(AMX\*)**       | Esta função é chamada sempre que uma nova instância AMX é carregada no servidor. Isso acontece para cada filterscript/modo de jogo! Por isso, não é uma boa ideia armazenar uma única instância AMX para todo o plugin; em vez disso, use uma fila/lista/vetor. Nesta função, também registramos as funções nativas que queremos disponibilizar para o PAWN.                                                                                     |
| **AmxUnload(AMX\*)**     | Esta função é chamada sempre que uma instância AMX é descarregada. Se você armazena instâncias AMX, certifique-se de removê-las. Caso contrário, terá instâncias para modos de jogo/filterscripts inexistentes.                                                                                                                                                                                                                                   |
| **ProcessTick()**        | ProcessTick é uma função chamada a cada iteração do loop do servidor. As pessoas geralmente a usam para controlar o tempo, monitorando a quantidade de ticks que passaram. Dizem que o servidor SA-MP possui um tempo de espera de 5ms, então se passarem 50 ticks, você terá uma ideia do tempo decorrido (5 * 50 = 250ms). **Nota:** Quem usa threads em seus plugins e precisa interagir com o PAWN deve usar esta função para garantir que o PAWN não está ocupado com outra tarefa! |

### Definições e estruturas

Agora vem a parte divertida, onde analisamos o código! Você provavelmente notará desde o início que estamos usando uma série de definições e estruturas em nosso pequeno exemplo da seção anterior. Se você nunca desenvolveu um plugin SA-MP antes, isso pode parecer muito confuso e até intimidante. Vamos esclarecer essas definições e estruturas nesta seção.

| Definições/Estruturas             | Descrição                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **cell**                          | Um "cell" é um typedef utilizado para portabilidade. O PAWN oferece suporte para inteiros de 16, 32 e 64 bits. O typedef "cell" sempre terá o tamanho correto, enquanto "int" pode não ter. Geralmente, com plugins SA-MP, este typedef será sempre um inteiro de 32 bits. **Nota:** Existe também um typedef "ucell" para inteiros sem sinal, mas ele é pouco usado.                            |
| **AMX_NATIVE_CALL**               | Define a convenção de chamada que nossas funções nativas irão usar. Atualmente, está definida como nada, então o padrão será utilizado.                                                                                                                                                                                                                                                                        |
| **AMX**                           | O nome desta estrutura é autoexplicativo, é uma instância AMX. Esta estrutura contém diversas informações relacionadas aos segmentos de dados, juntamente com outras informações relevantes do amx. Esta estrutura deve estar presente em todas as declarações de funções nativas, juntamente com um ponteiro cell para os parâmetros passados; sem essas informações, não sabemos qual script está chamando nossa função nativa, nem o que foi passado. |
| **PLUGIN_EXPORT**                 | Este é definido como "PLUGIN_EXTERN_C".                                                                                                                                                                                                                                                                                                                                                                       |
| **PLUGIN_EXTERN_C**               | Se estiver usando um compilador C++, isto é definido como "extern "C"". Isso garante compatibilidade com C. O C++ oferece recursos como sobrecarga de funções, então informações adicionais como o número/tamanho dos argumentos são armazenadas no nome da função, o que é chamado de "name mangling". Este define informa ao C++ para usar a ligação no estilo C, evitando o name mangling do C++.                          |
| **PLUGIN_CALL**                   | Esta definição informa ao C/C++ qual convenção de chamada usar para nossas funções exportadas. Se você usa um compilador para Windows, isto é definido como \_\_stdcall. Caso contrário, é definido como nada, e a convenção padrão é usada.                                                                                                                                                                       |
| **SUPPORTS_VERSION**              | Esta definição deve ser usada em uma máscara de bits que é retornada pela função "Supports()". Este flag é usado para verificar a compatibilidade com o servidor.                                                                                                                                                                                                                                               |
| **SUPPORTS_AMX_NATIVES**          | Esta é outra definição que deve ser usada pela função "Supports()". Qualquer plugin que use funções AMX deve usar este flag! Sem ele, você terá um erro de execução 19 devido às suas nativas não se registrarem com o servidor (amx_Register).                                                                                                                                                              |
| **SUPPORTS_PROCESS_TICK**         | Nosso último flag para a função "Supports()". Se você for usar a função "ProcessTick()", é preciso adicioná-lo à máscara de bits retornada pela função "Supports()".                                                                                                                                                                                                                                           |
| **PLUGIN_DATA_AMX_EXPORTS**       | Este é usado como um índice para o array multidimensional que é passado no Load. Este índice específico contém a tabela de funções AMX. Todos os plugins devem usar este índice para atribuir o endereço da tabela de funções a pAMXFunctions.                                                                                                                                                                 |
| **PLUGIN_DATA_LOGPRINTF**         | Outro índice a ser usado com o array multidimensional passado no Load. Este índice contém o endereço da função logprintf, que imprime informações e as salva no arquivo de log do servidor. Se o seu plugin usar essa função, você deve usar esse índice para atribuir o endereço ao ponteiro de função logprintf.                                                      |
| **AMX_NATIVE_INFO**               | Esta struct é usada junto com amx_Register. Contém uma string com o nome da nova função nativa e um ponteiro para seu endereço.                                                                                                                                                                                                                                                                               |

Existem algumas outras definições importantes que estão relacionadas a erros de funções AMX, mas elas já estão documentadas no cabeçalho amx. Portanto, em vez de reinventar a roda, vou apenas postar o enum com todos os códigos de erro e seus comentários correspondentes. **Nota:** Todas as funções amx, com exceção de amx_NativeInfo, retornam um desses códigos de erro se um problema for encontrado.

## Funções Amx

As funções `amx` estão muito bem documentadas no guia do implementador PAWN, que pode ser encontrado aqui. Em vez de reinventar a roda e explicar todas as funções com minhas próprias palavras, vou simplesmente copiá-las do guia do implementador e torná-las um pouco mais apresentáveis; acredito que isso tornará o conteúdo muito mais acessível. Com isso dito, esta seção será principalmente uma referência para a próxima seção, que foca em algo que o guia do implementador não abrange: exemplos de código. Nota: vou cobrir apenas as funções que considero vitais para plugins (por enquanto). Qualquer outra informação pode ser encontrada no guia do implementador; basta garantir que você use a versão que eu referenciei nesta seção!

### Legenda

\+ => Não disponível

## amx_Allot

\- Reserva espaço no heap da máquina abstrata

### Sintaxe

```cpp
int amx_Allot(AMX *amx, int cells, cell *amx_addr, cell **phys_addr);
```

| Parâmetro     | Descrição                                                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **amx**       | A máquina abstrata.                                                                                                                                                      |
| **cells**     | O número de células a serem reservadas.                                                                                                                                  |
| **amx_addr**  | O endereço da célula alocada para que o programa pawn (que executa na máquina abstrata) possa acessá-lo. `phys_addr` é o endereço da célula para acesso em C/C++.        |

**Notas:** Em versões anteriores do PAWN, matrizes e strings tinham que ser passadas para um script após a alocação explícita de memória na pilha `amx`. Na versão atual, essa funcionalidade foi amplamente substituída pelas funções `amx_PushArray` e `amx_PushString`. Uma função PAWN pode acessar a memória apenas dentro de sua máquina abstrata. Se um parâmetro deve ser passado "por referência" para uma função PAWN, é necessário passar o endereço desse parâmetro para `amx_Exec`. Além disso, o próprio endereço deve estar dentro do intervalo de endereços da máquina abstrata. A `amx_Allot` aloca células de memória na máquina abstrata e retorna dois endereços: `amx_addr` é o endereço da variável relativo à “seção de dados” da máquina abstrata; este é o valor que você deve passar para `amx_Exec` (via `amx_Push`). O parâmetro `phys_addr` mantém o endereço relativo ao espaço de endereço do programa anfitrião, permitindo que um programa C/C++ use esse endereço e escreva na memória alocada. Após `amx_Exec` retornar, você pode inspecionar o bloco de memória (a função PAWN chamada por `amx_Exec` pode ter escrito nele) e finalmente liberá-lo chamando `amx_Release`.

**Veja também:** [amx_Exec](#amx_exec), [amx_PushArray](#amx_pusharray), [amx_PushString](#amx_pushstring), [amx_Release](#amx_release)

## amx_ctof

\- Converte “cell” para “float”

### Sintaxe

```cpp
[float] amx_ctof([cell] c);
```

| Parâmetro | Descrição                                        |
| --------- | ------------------------------------------------ |
| **c**     | Valor a ser convertido do tipo “cell” para “float”. |

**Retorna:** O mesmo padrão de bits, agora como um tipo de ponto flutuante.

**Notas:** Esta macro converte um tipo “cell” para um tipo “float” sem alterar o padrão de bits. Um cast normal em C/C++ altera a representação de memória da expressão para que seu valor numérico em formato IEEE 754 seja o mais próximo possível do valor inteiro original. O parser e a máquina abstrata PAWN armazenam valores de ponto flutuante em uma célula — ao recuperar um valor de ponto flutuante de uma célula, o padrão de bits não deve ser alterado.

**Veja também:** [amx_ftoc](#amx_ftoc)

## amx_Exec

\- Executa o código

### Sintaxe

```cpp
  int amx_Exec(AMX *amx, long *retval, int index);
```

| Parâmetro  | Descrição                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**    | A máquina abstrata na qual chamar uma função.                                                                                                                                 |
| **retval** | Armazena o valor de retorno da função chamada ao retornar. Este parâmetro pode ser `NULL` se você não estiver interessado no valor de retorno.                                 |
| **index**  | Índice na “tabela de funções públicas” que indica a função a ser executada. Use `AMX_EXEC_MAIN` para iniciar a execução da função principal e `AMX_EXEC_CONT` para continuar a partir de um “estado de espera”. |

**Notas:** Esta função executa o script, começando na função indicada. Ela chama a função de retorno de chamada para qualquer chamada de função nativa que o código em `amx` faz. `amx_Exec` assume que todas as funções nativas foram corretamente inicializadas com `amx_Register`.

**Veja também:** [amx_FindPublic](#amx_findpublic), [amx_Register](#amx_register)

## amx_FindPublic

\- Retorna o índice de uma função pública

### Sintaxe

```cpp
int amx_FindPublic(AMX *amx, char *funcname, int *index);
```

| Parâmetro     | Descrição                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------- |
| **amx**       | A máquina abstrata.                                                                         |
| **funcname**  | O nome da função pública a ser encontrada.                                                  |
| **index**     | Ao retornar, esse parâmetro mantém o índice da função pública solicitada.                   |

**Veja também:** [amx_Exec](#amx_exec), amx_FindNative+, amx_FindPubVar+, amx_GetPublic+, amx_NumPublics+

## amx_ftoc

\- Converte “float” para “cell”

### Sintaxe

```cpp
[cell] amx_ftoc([float] f);
```

| Parâmetro | Descrição                                        |
| --------- | ------------------------------------------------ |
| **f**     | O valor a ser convertido do tipo “float” para “cell”. |

**Retorna:** O mesmo padrão de bits, agora como um tipo “cell”.

**Notas:** Esta macro converte um tipo “float” para um tipo “cell” sem alterar o padrão de bits. Um cast normal em C/C++ altera a representação de memória da expressão para que seu valor numérico em formato inteiro seja o valor truncado do valor racional original. O parser e a máquina abstrata PAWN armazenam valores de ponto flutuante em uma célula — ao armazenar um valor de ponto flutuante em uma célula, o padrão de bits não deve ser alterado.

**Veja também:** [amx_ctof](#amx_ctof)

## amx_GetAddr

\- Resolve um endereço AMX

### Sintaxe

```cpp
int amx_GetAddr(AMX *amx, cell amx_addr, cell **phys_addr);
```

| Parâmetro     | Descrição                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **amx**       | A máquina abstrata.                                                                                                               |
| **amx_addr**  | O endereço relativo à máquina abstrata.                                                                                           |
| **phys_addr** | Ponteiro para a variável que conterá o endereço de memória da célula indicada. Se `amx_addr` não for válido, `phys_addr` será `NULL`. |

**Notas:** Esta função retorna o endereço de memória de um endereço na máquina abstrata. Tipicamente, usa-se essa função em um módulo de extensão, pois permite acessar variáveis dentro da máquina abstrata.

## amx_GetString

\- Recupera uma string da máquina abstrata

### Sintaxe

```cpp
int amx_GetString(char *dest, cell *source, int use_wchar, size_t size);
```

| Parâmetro     | Descrição                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| **dest**      | Ponteiro para um array de caracteres com tamanho suficiente para armazenar a string convertida de `source`.     |
| **source**    | Ponteiro para a string de origem. Use `amx_GetAddr` para converter um endereço de string `amx` para um endereço físico. |
| **use_wchar** | Um valor não-zero interpreta `dest` como um ponteiro para “caracteres largos” (`wchar_t`), permitindo Unicode.  |
| **size**      | Número máximo de caracteres a serem armazenados em `dest`, incluindo o byte `NULL`.                            |

**Notas:** Esta função converte strings compactadas e não compactadas do formato PAWN para o formato C. Ao recuperar uma string não compactada com o parâmetro `use_wchar` definido como zero, a função pode truncar caracteres de 16 bits para ASCII/ANSI.

**Veja também:** [amx_SetString](#amx_setstring)

## amx_Push

\- Passa um argumento numérico “por valor”

### Sintaxe

```cpp
int amx_Push(AMX *amx, cell value);
```

| Parâmetro | Descrição                               |
| --------- | --------------------------------------- |
| **amx**   | A máquina abstrata.

## amx_PushString

\- Passa uma string.

### Sintaxe

```cpp
int amx_PushString(AMX *amx, cell *amx_addr, cell **phys_addr, const char *string, int pack, int use_wchar);
```

| Parâmetro       | Descrição                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**         | A máquina abstrata.                                                                                                                                                            |
| **amx_addr**    | O endereço da célula alocada que o programa Pawn (que roda na máquina abstrata) pode acessar; necessário para liberar o bloco de memória. Esse parâmetro pode ser NULL.         |
| **phys_addr**   | O endereço da célula para que programas em C/C++ possam acessá-la. Esse parâmetro pode ser NULL.                                                                                |
| **string**      | A string a ser passada para a função pública.                                                                                                                                   |
| **pack**        | Valor não-zero para converter a string de origem em uma string compactada na máquina abstrata, ou zero para converter a string de origem em uma string de células.              |
| **use_wchar**   | Um valor não-zero interpreta o argumento da string como um ponteiro para “caracteres largos”, ou seja, `wchar_t`, independente de seu tipo `char`. Isso permite strings Unicode.|

**Notas:** Quaisquer parâmetros para uma função pública devem ser empilhados na função antes de chamar `amx_Exec`. Se uma função pública possui múltiplos argumentos, estes devem ser empilhados na ordem inversa. A função aloca memória para o array dentro do "heap" da máquina abstrata. Esta memória deve ser liberada com `amx_Release`. Veja a função `amx_Allot` para mais detalhes sobre os parâmetros `amx_addr` e `phys_addr`. Ao passar uma string Unicode e solicitar um formato compactado na máquina abstrata (ou seja, `pack` e `use_wchar` são verdadeiros), os caracteres são truncados para 8 bits.

**Veja também:** [amx_Exec](#amx_exec), [amx_Push](#amx_push), [amx_PushArray](#amx_pusharray), [amx_Release](#amx_release), [amx_SetString](#amx_setstring)

## amx_Register

\- Torna as funções nativas conhecidas

### Sintaxe

```cpp
int amx_Register(AMX *amx, AMX_NATIVE_INFO *list, int number);
```

| Parâmetro    | Descrição                                                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**      | A máquina abstrata.                                                                                                                                                                             |
| **list**     | Um array de estruturas onde cada estrutura mantém um ponteiro para o nome de uma função nativa e um ponteiro para a função. O array é opcionalmente finalizado com uma estrutura de ponteiros NULL. |
| **number**   | O número de estruturas no array `list`, ou -1 se o array termina com uma estrutura contendo dois ponteiros NULL.                                                                                  |

**Notas:** Em caso de sucesso, essa função retorna 0 (`AMX_ERR_NONE`). Se a função retornar o código de erro `AMX_ERR_NOTFOUND`, uma ou mais funções nativas usadas pelo programa Pawn não foram encontradas na lista fornecida. É possível chamar `amx_Register` novamente para registrar listas adicionais de funções.

Para verificar se todas as funções nativas usadas no script compilado foram registradas, chame `amx_Register` com o parâmetro `list` definido como NULL. Esta chamada não registrará novas funções nativas, mas ainda retornará `AMX_ERR_NOTFOUND` se alguma função nativa estiver desregistrada.

**Veja também:** amx_NativeInfo+

## amx_Release

\- Libera espaço do heap na máquina abstrata

### Sintaxe

```cpp
int amx_Release(AMX *amx, cell amx_addr);
```

| Parâmetro    | Descrição                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**      | A máquina abstrata.                                                                                                                                                    |
| **amx_addr** | O endereço da célula alocada que o programa Pawn (que roda na máquina abstrata) vê. Esse valor é retornado por `amx_Allot`, `amx_PushArray` e `amx_PushString`.       |

**Notas:** `amx_Allot` aloca memória no heap em ordem ascendente (o heap cresce para cima). `amx_Release` libera toda a memória acima do valor do parâmetro de entrada `amx_addr`. Assim, uma única chamada para `amx_Release` pode liberar múltiplas chamadas para `amx_Allot` se você passar o valor `amx_addr` da primeira alocação. `amx_PushArray` e `amx_PushString` usam `amx_Allot` internamente, então o mesmo procedimento se aplica a essas funções também.

**Veja também:** [amx_Allot](#amx_allot), [amx_PushArray](#amx_pusharray), [amx_PushString](#amx_pushstring)

## amx_SetString

\- Armazena uma string na máquina abstrata

### Sintaxe

```cpp
int amx_SetString(cell *dest, char *source, int pack, int use_wchar, size_t size);
```

| Parâmetro     | Descrição                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **dest**      | Um ponteiro para um array de caracteres no `amx` onde a string convertida é armazenada. Use `amx_GetAddr` para converter um endereço de string no `amx` para o endereço físico.                 |
| **source**    | Um ponteiro para a string de origem.                                                                                                                                                            |
| **pack**      | Valor não-zero para converter a string de origem em uma string compactada na máquina abstrata, zero para converter a string de origem em uma string de células.                                |
| **string**    | A string a ser passada para a função pública.                                                                                                                                                   |
| **use_wchar** | Um valor não-zero interpreta o argumento da string como um ponteiro para “caracteres largos”, ou seja, `wchar_t`, independente de seu tipo `char`. Isso permite strings Unicode.               |
| **size**      | O número máximo de células a serem armazenadas em `dest`, incluindo o caractere ou célula zero de terminação. Se a string em `source` for maior, ela será truncada.                             |

**Notas:** Ao passar uma string Unicode e solicitar um formato compactado na máquina abstrata (ou seja, `pack` e `use_wchar` são verdadeiros), os caracteres são truncados para 8 bits.

**Veja também:** [amx_GetString](#amx_getstring)

## Exemplos de Funções AMX

Para evitar longos blocos de texto, adicionei comentários no código para explicar o que estou fazendo em vez de escrever na seção do tópico. É provavelmente uma boa ideia manter o artigo da wiki aberto como referência enquanto lê os exemplos.

### Registrando Nativas

Cada função que fornecemos para PAWN deve ser registrada para que a máquina abstrata esteja ciente de sua existência. Vou reutilizar um exemplo de seção anterior, acrescentando comentários.

```cpp
// Um array das funções que queremos registrar na máquina abstrata.
AMX_NATIVE_INFO PluginNatives[] =
{
    // Especificamos informações da função nativa e terminamos o array com dois valores NULL.
    {"HelloWorld", HelloWorld},
    {0, 0}
};

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    // Registramos nossas nativas na máquina abstrata. Usamos -1 para especificar o número
    // de funções, pois terminamos o array com dois valores NULL.
    return amx_Register(amx, PluginNatives, -1);
}
```

- ### Obtendo uma String e Seu Tamanho

```cpp
// Esta função demonstra como obter uma string (e seu tamanho) do PAWN.
// PAWN native: native PrintPawnString(const str[]);
cell AMX_NATIVE_CALL PrintPawnString(AMX* amx, cell* params)
{
    int len = NULL, ret = NULL;
    cell *addr  = NULL;

    // Obtemos o endereço do parâmetro string (str) e seu tamanho.
    amx_GetAddr(amx, params[1], &addr);
    amx_StrLen(addr, &len);

    if(len)
    {
        // Incrementamos len para acomodar o caractere nulo ao alocar memória.
        len++;
        char* text = new char[ len ];
        amx_GetString(text, addr, 0, len);
        logprintf(text);
        delete[] text;
    }
    return 1;
}
```

### Método Alternativo para Obter uma String

```cpp
// Demonstra uma forma alternativa de obter strings do Pawn, com os possíveis riscos.
// PAWN native: native PrintPawnString2(const str[]);
cell AMX_NATIVE_CALL PrintPawnString2(AMX* amx, cell* params)
{
    char* text = NULL;
    amx_StrParam(amx, params[1], text);

    if(text != NULL)
    {
        logprintf(text);
    }
    return 1;
}
```

### Como Definir uma String

```cpp
// Demonstra como modificar uma string no PAWN.
// PAWN native: native SetPawnString(str[], len = sizeof(str));
cell AMX_NATIVE_CALL SetPawnString(AMX* amx, cell* params)
{
    const string

 str = "Texto do plugin";
    cell* dest = NULL;

    amx_GetAddr(amx, params[1], &dest);
    amx_SetString(dest, str.c_str(), 0, 0, params[2]);
    return 1;
}
```

Esses exemplos cobrem o básico sobre strings

### Passando parâmetros por referência

```cpp
//Esta função demonstra como passar parâmetros por referência.
//PAWN nativo: native SetPawnReferenceVars(&value1, &Float:value2);
cell AMX_NATIVE_CALL SetPawnReferenceVars(AMX* amx, cell* params)
{
    const int val = 65;
    const float val2 = 84.54f;

    cell* addr[2] = {NULL, NULL};

    //Obtém os endereços de "value1" e "value2"
    amx_GetAddr(amx, params[1], &addr[0]);
    amx_GetAddr(amx, params[2], &addr[1]);

    //Desreferencia os ponteiros e atribui valores. Lembre-se de SEMPRE usar a macro "amx_ftoc" para converter floats em
    //cells (o formato float adequado para PAWN)!
    *addr[0] = val;
    *addr[1] = amx_ftoc(val2);

    return 1;
}
```

### Obtendo e modificando valores de array

```cpp
//Esta função demonstra como obter e modificar valores de um array.
//PAWN nativo: native PrintPawnArray(arr[], size = sizeof(arr));
cell AMX_NATIVE_CALL PrintPawnArray(AMX* amx, cell* params)
{
    //Certifique-se de que há algo para imprimir...
    if(params[2] > 0)
    {
        cell* addr = NULL;

        //Obtém o endereço do primeiro valor no array PAWN.
        amx_GetAddr(amx, params[1], &addr);

        for(int i = 0, l = params[2]; i < l; i++)
        {
            //É simples: Desreferenciamos o ponteiro addr para obter o valor a ser impresso.
            //Arrays e ponteiros são quase iguais, então podemos usar aritmética de ponteiros para adicionar um deslocamento
            //ou simplesmente o operador de índice (no final *(addr+1) e addr[1] são o mesmo).
            logprintf("arr[%d] = %d", i, *(addr + i));

            //Se você quisesse modificar o array, basta mudar o valor desreferenciando addr e atribuindo um novo valor.
            //Aqui mudamos o primeiro valor do array para 5 (Nota: Como é o primeiro valor, sem deslocamento).

            // *(addr) = 5;
        }
    }
    return 1;
}
```

### Chamando um callback

```cpp
//Esta função demonstra como chamar um callback que está em um script PAWN.
//PAWN nativo: native EmitPawnCallback();
cell AMX_NATIVE_CALL EmitPawnCallback(AMX* amx, cell* params)
{
    int idx;

    const cell var = 3;
    const cell arr[] = {100, 4, 33};
    const string str = "Uma mensagem aleatória do C++.";

    //Callback PAWN: forward OnPawnCallbackEmitted(var, arr[], str[]);
    //Encontra nosso callback e armazena sua posição na tabela de funções públicas (índice) na variável idx.
    if(!amx_FindPublic(amx, "OnPawnCallbackEmitted", &idx))
    {
        cell ret, addr;

        //Aqui empurramos os argumentos para nossa função. Note que, se a função tiver vários argumentos, você deve empurrá-los em ordem reversa! Por isso, primeiro a string, depois o array e, por último, o inteiro.

        amx_PushString(amx, &addr, NULL, str.c_str(), NULL, NULL);
        //amx_PushArray(amx, NULL, NULL, arr, sizeof(arr) / sizeof(cell));

        cell amx_addr, *phys_addr;

        //Por algum motivo, amx_PushArray está travando o servidor, e não faço ideia do porquê. A solução é alocar memória usando amx_Allot, copiar para phys_addr e empurrar manualmente.
        amx_Allot(amx, sizeof(arr) / sizeof(cell), &amx_addr, &phys_addr);
        memcpy(phys_addr, arr, sizeof(arr));
        amx_Push(amx, amx_addr);

        //Empurra nosso valor inteiro
        amx_Push(amx, var);

        //Executa a função usando o índice previamente obtido.
        //Nota: O segundo parâmetro é o valor de retorno do callback (pode ser NULL se não precisar de retorno).
        amx_Exec(amx, &ret, idx);

        //Libera a memória alocada. Tanto amx_PushString quanto amx_PushArray usam amx_Allot, então devemos liberar a memória com amx_Release.
        amx_Release(amx, addr);

        //Imprime o valor de retorno (por completude).
        logprintf("EmitPawnCallback: O callback OnPawnCallbackEmitted retornou %d!", ret);
    }
    return 1;
}
```

## Chamando nativos e interceptando callbacks

Antes de entrarmos na interceptação de callbacks ou chamadas de nativos SA-MP, é importante lembrar que plugins foram projetados para fornecer funcionalidades ao PAWN, não para substituí-lo. A decisão de criar um plugin em vez de um script PAWN deve ser cuidadosamente avaliada.

### Invoke

Invoke é um método para chamar funções nativas do SA-MP criado por Incognito. [Encontre aqui](https://github.com/Dystans/SA-MP_Invoke_2.0). Para o Invoke funcionar, você deve ter uma função pública PAWN que use todas as nativas que seu plugin requer.

#### Começando

1. Inclua o cabeçalho do invoke.
2. Aloque memória para a instância do invoke em `Load`.
3. Adicione o membro `amx_list` toda vez que uma nova instância AMX é carregada em `AmxLoad`.
4. Remova a instância AMX ao descarregar o script em `AmxUnload`.
5. Crie uma nativa que chame a função `getAddresses` do invoke para PAWN quando um filterscript ou gamemode que usa o plugin for carregado.

#### Adicionando nativos SA-MP

No cabeçalho do invoke, adicione o nome do nativo ao array de nomes e declare uma estrutura `Native` com as especificações de parâmetros, por exemplo:

```cpp
i = inteiro
f = valor float
s = string
v = variável de referência (GetPlayerPos, GetPlayerKeys, etc.)
p = variável string (GetPlayerName etc.)
```

**Atualize a função pública PAWN para chamar os novos nativos sempre que adicioná-los.**

#### Chamando nativos

A função `callNative` do invoke usa como parâmetros um ponteiro para uma estrutura `Native` e os parâmetros para o nativo. Abaixo um exemplo:

```cpp
//Esta função demonstra como usar o invoke para chamar nativos SA-MP.
//PAWN nativo: native WhereIsPlayer(playerid);
cell AMX_NATIVE_CALL WhereIsPlayer(AMX* amx, cell* params)
{
    float x = NULL, y = NULL, z = NULL;

    //Obtém a posição do jogador (verifica se ele está conectado).
    if(g_Invoke->callNative(&PAWN::GetPlayerPos, params[1], &x, &y, &z))
    {
        char name[24];

        //Obtém o nome, interior e mundo virtual do jogador e imprime.
        g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);
        int interior = g_Invoke->callNative(&PAWN::GetPlayerInterior, params[1]);
        int virtualworld = g_Invoke->callNative(&PAWN::GetPlayerVirtualWorld, params[1]);

        logprintf("%s está em X: %.2f, Y: %.2f, Z: %.2f (Mundo virtual: %d, Interior %d).", name, x, y, z, virtualworld, interior);
        return 1;
    }
    return 0;
}
```

### Hooking de Callbacks

Usando o método `invoke`, não existe um método de hooking 100% transparente quando se trata de callbacks. Plugins que desejam hookear callbacks que usam `invoke` precisam passar pelo PAWN para fazê-lo. Você pode criar uma função nativa que pode ser chamada dentro do callback PAWN que deseja hookear, e usar essa nativa como uma espécie de pseudo callback. Você pode fazer isso de uma maneira que não exige trabalho do usuário final, usando o método de hooking ALS.

O primeiro passo é, obviamente, criar a nativa (lembre-se de adicioná-la à nossa lista de nativas a serem registradas e também adicioná-la em seu include posteriormente). O callback que decidi hookear é `OnPlayerConnect`, então vou escrever uma função nativa que tenha os mesmos argumentos que o callback, e então adicionar o código que requer o callback (neste caso, uma pequena piada).

```cpp
// Esta função demonstra: como escrever uma nativa para agir como um callback.
// Nativa PAWN: native TEST_Hook_OnPlayerConnnect(playerid);
cell AMX_NATIVE_CALL TEST_Hook_OnPlayerConnnect(AMX* amx, cell* params)
{
    // Obter o nome do jogador
    char name[24];
    g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);

    // Verificar se o nome dele é "Mario".
    if(string("Mario") == name)
    {
        // Se for, envie nossa mensagem engraçada e o expulse.
        g_Invoke->callNative(&PAWN::SendClientMessage, params[1], 0xFFFFFFFF, "Desculpe {FF0000}Mario, {FFFFFF}mas sua princesa está em outro servidor.");
        g_Invoke->callNative(&PAWN::Kick, params[1]);
    }
    return 1;
}
```

`TEST_Hook_OnPlayerConnnect` agora agirá como o callback `OnPlayerConnect` do nosso plugin. Como o nome do nosso plugin é "Test" e é bastante curto, decidi deixá-lo agir como nosso prefixo para hooking. Você geralmente quer algo único para seus prefixes para não colidir com outros plugins/includes. **Nota:** Ainda temos que chamar essa função do PAWN usando o método ALS que falamos anteriormente para conveniência do usuário. Como Y_Less faz um ótimo trabalho explicando o método ALS, não há necessidade de eu entrar em detalhes sobre isso, eu simplesmente fornecerei um exemplo de hooking para nosso callback `TEST_Hook_OnPlayerConnect`. Isso deve ser colocado no arquivo include do seu plugin.

```cpp
public OnPlayerConnect(playerid)
{
    TEST_Hook_OnPlayerConnnect(playerid);
    //..

    if(funcidx("TEST_OnPlayerConnect") != -1)
    {
        return CallLocalFunction("TEST_OnPlayerConnect", "d", playerid);
    }
    return 1;
}

#if defined _ALS_OnPlayerConnect
    #undef OnPlayerConnect
#else
    #define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect TEST_OnPlayerConnect

forward TEST_OnPlayerConnect(playerid);
```

## Fechamento

Alguns de vocês, desenvolvedores de plugins experientes, podem estar se perguntando por que não incluí o GDK na seção "Chamando nativas e hookeando callbacks". Decidi deixá-lo de fora por duas razões. A primeira é que simplesmente não tenho tanto tempo disponível mais, e não pude me dedicar a me familiarizar com esse novo sistema. A segunda razão é que o GDK é muito experimental e atualmente está enfrentando problemas como crashes, entre outros. Estou bem ciente das diferenças de velocidade entre `Invoke` e GDK, e definitivamente vou adicionar isso algum dia no futuro, se ninguém mais fizer (lembre-se, isso deve ser uma iniciativa comunitária). Acho que é melhor esperar que mais alguns problemas sejam resolvidos por enquanto (zeex é um codificador incrível e tenho certeza de que ele resolverá tudo).

Além disso, como prometi, aqui está o arquivo de include/atualização com comentários sobre tudo que esperamos ter aprendido:

### Include do Plugin

```cpp
// Qualquer coisa com o prefixo "TEST" deve ser alterada se você chamou seu plugin de forma diferente.
// Isso também se aplica ao código do plugin (TEST_Hook_OnPlayerConnect especificamente).
#if defined _TEST_INCLUDED
    #endinput
#endif
#define _TEST_INCLUDED
#pragma library Test

#include <a_samp>

// Nativas de exemplo
native PrintPawnString(const str[]);
native PrintPawnString2(const str[]);
native SetPawnString(str[], len = sizeof(str));
native Float:ReturnPawnFloatVal();
native SetPawnReferenceVars(&value1, &Float:value2);
native PrintPawnArray(arr[], size = sizeof(arr));
native EmitPawnCallback();
native WhereIsPlayer(playerid);
native TEST_Hook_OnPlayerConnnect(playerid);

// Nativa Invoke
native Invoke_GetAddresses();

// Hooks de callback
public OnPlayerConnect(playerid)
{
    TEST_Hook_OnPlayerConnnect(playerid);
    //..

    if(funcidx("TEST_OnPlayerConnect") != -1)
    {
        return CallLocalFunction("TEST_OnPlayerConnect", "d", playerid);
    }
    return 1;
}

#if defined _ALS_OnPlayerConnect
    #undef OnPlayerConnect
#else
    #define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect TEST_OnPlayerConnect

forward TEST_OnPlayerConnect(playerid);

public OnGameModeInit()
{
    Invoke_GetAddresses();
    //..

    if(funcidx("TEST_OnGameModeInit") != -1)
    {
        return CallLocalFunction("TEST_OnGameModeInit", "");
    }
    return 1;
}

#if defined _ALS_OnGameModeInit
    #undef OnGameModeInit
#else
    #define _ALS_OnGameModeInit
#endif
#define OnGameModeInit TEST_OnGameModeInit

forward TEST_OnGameModeInit();

public OnFilterScriptInit()
{
    Invoke_GetAddresses();
    //..

    if(funcidx("TEST_OnFilterScriptInit") != -1)
    {
        return CallLocalFunction("TEST_OnFilterScriptInit", "");
    }
    return 1;
}

#if defined _ALS_OnFilterScriptInit
    #undef OnFilterScriptInit
#else
    #define _ALS_OnFilterScriptInit
#endif
#define OnFilterScriptInit TEST_OnFilterScriptInit

forward TEST_OnFilterScriptInit();


//Public function for invoke
forward InvokeFunction();
public InvokeFunction()
{
    new Float:fVar;
    new Var[ 256 ];
    new iVar;

    // a_samp.inc
    SendClientMessage(0, 0, "");
    SendClientMessageToAll(0, "");
    SendDeathMessage(0, 0, 0);
    GameTextForAll("", 0, 0);
    GameTextForPlayer(0, "", 0, 0);
    GetTickCount();
    GetMaxPlayers();
    SetGameModeText("");
    SetTeamCount(0);
    AddPlayerClass(0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0);
    AddPlayerClassEx(0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0);
    AddStaticVehicle(0, 0.0, 0.0, 0.0, 0.0, 0, 0);
    AddStaticVehicleEx(0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0);
    AddStaticPickup(0, 0, 0.0, 0.0, 0.0);
    ShowNameTags(0);
    ShowPlayerMarkers(0);
    GameModeExit();
    SetWorldTime(0);
    GetWeaponName(0, Var, sizeof( Var ) );
    EnableTirePopping(0);
    AllowInteriorWeapons(0);
    SetWeather(0);
    SetGravity(0.0);
    AllowAdminTeleport(0);
    SetDeathDropAmount(0);
    CreateExplosion(0.0, 0.0, 0.0, 0, 0.0);
    //SetDisabledWeapons();
    EnableZoneNames(0);
    IsPlayerAdmin(0);
    Kick(0);
    Ban(0);
    SendRconCommand("");
    ShowPlayerDialog(0,0,0,"lol","lol","lol","lol");

    // a_players.inc
    SetSpawnInfo(0, 0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0,0);
    SpawnPlayer(0);
    SetPlayerPos(0, 0.0, 0.0, 0.0);
//  SetPlayerPosFindZ(0, 0.0, 0.0, 0.0);
    GetPlayerPos(0, fVar, fVar, fVar);
    SetPlayerFacingAngle(0,0.0);
    GetPlayerFacingAngle(0,fVar);
    SetPlayerInterior(0,0);
    GetPlayerInterior(0);
    SetPlayerHealth(0, 0.0);
    GetPlayerHealth(0, fVar);
    SetPlayerArmour(0, 0.0);
    GetPlayerArmour(0, fVar);
    SetPlayerAmmo(0, 0,0);
    GetPlayerAmmo(0);
    SetPlayerTeam(0,0);
    GetPlayerTeam(0);
    SetPlayerScore(0,0);
    GetPlayerScore(0);
    SetPlayerColor(0,0);
    GetPlayerColor(0);
    SetPlayerSkin(0,0);
    GivePlayerWeapon(0, 0,0);
    ResetPlayerWeapons(0);
    GetPlayerWeaponData(0, 0, iVar, iVar );
    GivePlayerMoney(0,0);
    ResetPlayerMoney(0);
    SetPlayerName(0, "");
    GetPlayerMoney(0);
    GetPlayerState(0);
    GetPlayerIp(0, Var, sizeof( Var ));
    GetPlayerPing(0);
    GetPlayerWeapon(0);
    GetPlayerKeys(0,iVar,iVar,iVar);
    GetPlayerName(0, Var, sizeof( Var ));
    PutPlayerInVehicle(0, 0,0);
    GetPlayerVehicleID(0);
    RemovePlayerFromVehicle(0);
    TogglePlayerControllable(0,0);
    PlayerPlaySound(0, 0, 0.0, 0.0,0.0);
    SetPlayerCheckpoint(0, 0.0, 0.0, 0.0,0.0);
    DisablePlayerCheckpoint(0);
    SetPlayerRaceCheckpoint(0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0);
    DisablePlayerRaceCheckpoint(0);
    SetPlayerWorldBounds(0,0.0,0.0,0.0,0.0);
    SetPlayerMarkerForPlayer(0, 0,0);
    ShowPlayerNameTagForPlayer(0, 0,0);
    SetPlayerMapIcon(0, 0, 0.0, 0.0, 0.0, 0,0);
    RemovePlayerMapIcon(0,0);
    SetPlayerCameraPos(0,0.0, 0.0, 0.0);
    SetPlayerCameraLookAt(0, 0.0, 0.0, 0.0);
    SetCameraBehindPlayer(0);
    AllowPlayerTeleport(0,0);
    IsPlayerConnected(0);
    IsPlayerInVehicle(0,0);
    IsPlayerInAnyVehicle(0);
    IsPlayerInCheckpoint(0);
    IsPlayerInRaceCheckpoint(0);
    SetPlayerTime(0, 0,0);
    TogglePlayerClock(0,0);
    SetPlayerWeather(0,0);
    GetPlayerTime(0,iVar,iVar);
    SetPlayerVirtualWorld(0,0);
    GetPlayerVirtualWorld(0);

    // a_vehicle.inc
    CreateVehicle(0,0.0,0.0,0.0,0.0,0,0,0);
    DestroyVehicle(0);
    GetVehiclePos(0,fVar,fVar,fVar);
    SetVehiclePos(0,0.0,0.0,0.0);
    GetVehicleZAngle(0,fVar);
    SetVehicleZAngle(0,0.0);
    SetVehicleParamsForPlayer(0,0,0,0);
    SetVehicleToRespawn(0);
    LinkVehicleToInterior(0,0);
    AddVehicleComponent(0,0);
    ChangeVehicleColor(0,0,0);
    ChangeVehiclePaintjob(0,0);
    SetVehicleHealth(0,0.0);
    GetVehicleHealth(0,fVar);
    AttachTrailerToVehicle(0, 0);
    DetachTrailerFromVehicle(0);
    IsTrailerAttachedToVehicle(0);
    GetVehicleModel(0);
    SetVehicleNumberPlate(0,"");
    SetVehicleVirtualWorld(0,0);
    GetVehicleVirtualWorld(0);

    ApplyAnimation(0,"","",1.0,0,0,0,0,0);

    // a_objects.inc
    CreateObject(0,0.0,0.0,0.0,0.0,0.0,0.0);
    SetObjectPos(0,0.0,0.0,0.0);
    GetObjectPos(0,fVar,fVar,fVar);
    SetObjectRot(0,0.0,0.0,0.0);
    GetObjectRot(0,fVar,fVar,fVar);
    IsValidObject(0);
    DestroyObject(0);
    MoveObject(0,0.0,0.0,0.0,0.0);
    StopObject(0);
    CreatePlayerObject(0,0,0.0,0.0,0.0,0.0,0.0,0.0);
    SetPlayerObjectPos(0,0,0.0,0.0,0.0);
    GetPlayerObjectPos(0,0,fVar,fVar,fVar);
    GetPlayerObjectRot(0,0,fVar,fVar,fVar);
    SetPlayerObjectRot(0,0,0.0,0.0,0.0);
    IsValidPlayerObject(0,0);
    DestroyPlayerObject(0,0);
    MovePlayerObject(0,0,0.0,0.0,0.0,0.0);
    StopPlayerObject(0,0);

    // Menu's
    CreateMenu("", 0, 0.0, 0.0, 0.0, 0.0);
    DestroyMenu(Menu:0);
    AddMenuItem(Menu:0, 0, "");
    SetMenuColumnHeader(Menu:0, 0, "");
    ShowMenuForPlayer(Menu:0, 0);
    HideMenuForPlayer(Menu:0, 0);
    IsValidMenu(Menu:0);
    DisableMenu(Menu:0);
    DisableMenuRow(Menu:0,0);

    // Textdraw
    TextDrawCreate(0.0,0.0,"");
    TextDrawDestroy(Text:0);
    TextDrawLetterSize(Text:0, 0.0,0.0);
    TextDrawTextSize(Text:0, 0.0,0.0);
    TextDrawAlignment(Text:0, 0);
    TextDrawColor(Text:0,0);
    TextDrawUseBox(Text:0, 0);
    TextDrawBoxColor(Text:0, 0);
    TextDrawSetShadow(Text:0, 0);
    TextDrawSetOutline(Text:0, 0);
    TextDrawBackgroundColor(Text:0,0);
    TextDrawFont(Text:0, 0);
    TextDrawSetProportional(Text:0, 0);
    TextDrawShowForPlayer(0, Text:0);
    TextDrawHideForPlayer(0, Text:0);
    TextDrawShowForAll(Text:0);
    TextDrawHideForAll(Text:0);

    // Others
    funcidx("");
    gettime(iVar,iVar,iVar);
    getdate(iVar,iVar,iVar);
    tickcount(iVar);

    return 1;
}
```

Aqui está a tradução do seu código de plugin e dos agradecimentos especiais:

---

### Código-fonte do plugin

```cpp
#include "SDK\amx\amx.h"
#include "SDK\plugincommon.h"

#include "Invoke.h"

#include <string>
#include <vector>

#include <cstdlib>
#include <ctime>


typedef void (*logprintf_t)(char* format, ...);

logprintf_t logprintf;
extern void *pAMXFunctions;


using namespace std;


// Esta função demonstra: como obter uma string (e seu comprimento) do PAWN.
// Nativo do PAWN: native PrintPawnString(const str[]);
cell AMX_NATIVE_CALL PrintPawnString(AMX* amx, cell* params)
{
    int
        len = NULL,
        ret = NULL;

    cell *addr  = NULL;

    // Obtém o endereço do nosso parâmetro de string (str) e, em seguida, obtém seu comprimento
    amx_GetAddr(amx, params[1], &addr);
    amx_StrLen(addr, &len);

    // Se o comprimento da entrada não for 0
    if(len)
    {
        // Aumentamos o len porque queremos fazer espaço para o caractere nulo terminador quando alocamos memória.
        // Além disso, como o parâmetro de tamanho do GetString conta o caractere nulo, precisamos especificar o comprimento
        // da string + 1; caso contrário, nossa string será truncada para dar espaço ao caractere nulo (perderíamos 1 caractere).
        len++;

        // Aloca memória para segurar nossa string que estamos passando (str) e então "obtemos" a string usando nossa memória alocada para armazená-la.
        char* text = new char[ len ];
        amx_GetString(text, addr, 0, len);

        // Usa logprintf para imprimir a string (text). Não usamos std::cout porque não escreve no log do servidor (apenas na janela).
        logprintf(text);

        // Desaloca nossa memória...
        delete[] text;
    }
    return 1;
}

// Esta função demonstra: como chamar um callback que está em um script PAWN.
// Nativo do PAWN: native EmitPawnCallback();
cell AMX_NATIVE_CALL EmitPawnCallback(AMX* amx, cell* params)
{
    int idx;

    const cell var = 3;
    const cell arr[] = {100, 4, 33};
    const string str = "Alguma mensagem aleatória de C++.";


    // Callback do Pawn: forward OnPawnCallbackEmitted(var, arr[], str[]);
    // Encontra nosso callback e armazena seu lugar na tabela de funções públicas (é o índice) em nossa variável idx.
    if(!amx_FindPublic(amx, "OnPawnCallbackEmitted", &idx))
    {
        cell
            ret,
            addr;

        // Aqui empurramos nossos argumentos para nossa função. Note que se a função tem múltiplos argumentos, você tem que empurrar seus
        // valores na ordem inversa! Por isso estamos empurrando a string primeiro, depois o array, e finalmente nosso inteiro.

        amx_PushString(amx, &addr, NULL, str.c_str(), NULL, NULL);
        //amx_PushArray(amx, NULL, NULL, arr, sizeof(arr) / sizeof(cell));

        cell
            amx_addr,
            *phys_addr;

        // Por alguma razão amx_PushArray parece estar travando o servidor, e não tenho ideia do porquê. Meu uso deve ser completamente
        // válido segundo o guia dos implementadores, e o código em si. Como a função não está funcionando, teremos que
        // usar o método antigo e alocar a memória, configurá-la e empurrá-la todos nós mesmos. Isso é bem direto. Nós
        // alocamos memória no heap usando amx_Allot (isso retorna 2 endereços - um da localização na máquina abstrata
        // (amx_addr), e um relativo ao espaço de endereçamento real do servidor (phsy_addr - que podemos usar em C++)). Depois de alocar
        // memória, usamos memcpy para copiar a memória do nosso array para a localização de endereço físico (phys_addr).
        amx_Allot(amx, sizeof(arr) / sizeof(cell), &amx_addr, &phys_addr);
        memcpy(phys_addr, arr, sizeof(arr));
        amx_Push(amx, amx_addr);

        // Empurre nosso valor inteiro
        amx_Push(amx, var);

        // Execute nossa função usando nosso índice obtido anteriormente.
        // Nota: O segundo parâmetro desta função é o que o callback retornou (pode ser NULL se você não estiver interessado em valores de retorno).
        amx_Exec(amx, &ret, idx);

        // Libere a memória que alocamos. A função amx_Alloc aloca memória no heap na máquina abstrata.
        // As funções amx_PushString e amx_PushArray usam essa função internamente, então você precisa liberar a memória toda vez que
        // usar uma dessas funções. NOTA: Usamos tanto amx_PushString quanto amx_PushArray, e ainda assim só temos UMA chamada de liberação.
        // Isso porque a memória no heap é alocada em ordem ascendente! amx_Release libera toda a memória acima de um determinado ponto
        // (o segundo parâmetro, amx_addr - que é nossa variável addr). Desde que fazemos isso, só armazenamos o endereço da chamada
        // amx_PushString, pois ele deletará tudo a partir desse ponto.
        amx_Release(amx, addr);

        // Imprime o valor de retorno (para completude).
        logprintf("EmitPawnCallback NOTA: O callback OnPawnCallbackEmitted retornou %d!", ret);

    }
    return 1;
}


// Esta função demonstra: um método alternativo para obter strings do PAWN - e os riscos possíveis que vêm com isso.
// Nativo do PAWN: native PrintPawnString2(const str[]);
cell AMX_NATIVE_CALL PrintPawnString2(AMX* amx, cell* params)
{
    // Este método NÃO é recomendado, pois o macro amx_StrParam usa a função alloca que NÃO é um padrão em C ou C++.
    // Usar este método traz riscos de sobrecarregar a pilha (se você alocar grandes quantidades de memória) e também
    // traz o risco de bugs (esta função é dependente da máquina e do compilador - algumas implementações são ditas
    // ser bugadas).

    char* text = NULL;
    amx_StrParam(amx, params[1], text);

    // Verifica se o texto é nulo
    if(text != NULL)
    {
        // Usa logprintf para imprimir a string (text). Não usamos std::cout porque não escreve no log do servidor (apenas na janela).
        logprintf(text);
    }
    return 1;
}

// Esta função demonstra: como modificar uma string do PAWN.
// Nativo do PAWN: native SetPawnString(str[], len = sizeof(str));
cell AMX_NATIVE_CALL SetPawnString(AMX* amx, cell* params)
{
    const string message = "Esta é uma string de C/++!!";
    cell* addr = NULL;

    // Obtém o endereço do nosso parâmetro de string (str) e armazena nossa mensagem
    amx_GetAddr(amx, params[1], &addr);
    amx_SetString(addr, message.c_str(), 0, 0, params[2]);
    return 1;
}

// Esta função demonstra: como converter um float para um float do PAWN.
// Nativo do PAWN: native Float:ReturnPawnFloatVal();
cell AMX_NATIVE_CALL ReturnPawnFloatVal(AMX* amx, cell* params)
{
    // Como o PAWN é uma linguagem sem tipo, ele armazena tudo como um inteiro de 32 bits e depende de tags para lidar com dados especiais.
    // Um número de ponto flutuante não é exceção a isso; ainda é um inteiro de 32 bits, mas possui uma tag de float para mostrar que não deve
    // ser tratado como um inteiro comum! Então, como fazemos a conversão de um float para um inteiro de 32 bits (para PAWN) sem perder dados?
    // A resposta é o macro amx_ftoc!

    // O macro amx_ftoc converte um float em uma célula preservando seu padrão de bits (amx_ctof faz o inverso).
    const float f = 22.624f;
    return amx_ftoc(f);
}

// Esta função demonstra: como passar parâmetros por referência.
// Nativo do PAWN: native SetPawnReferenceVars(&value1, &Float:value2);
cell AMX_NATIVE_CALL SetPawnReferenceVars(AMX* amx, cell* params)
{
    const int val = 65;
    const float val2 = 84.54f;

    cell* addr[2] = {NULL, NULL};

    // Obtém os endereços de "value1" e "value2"
    amx_GetAddr(amx, params[1], &addr[0]);
    amx_GetAddr(amx, params[2], &addr[1]);

    // Desreferencia nossos ponteiros e atribui nossos valores. Lembre-se de SEMPRE usar o macro "amx_ftoc" para converter floats em
    // células (o formato apropriado de float para PAWN)!
    *addr[0] = val;
    *addr[1] = amx_ftoc(val2

);

    return 1;
}

// Defina nossas funções nativas aqui, incluindo todas as funções que definimos acima.
AMX_NATIVE_INFO Natives[] =
{
    {"PrintPawnString", PrintPawnString},
    {"PrintPawnString2", PrintPawnString2},
    {"EmitPawnCallback", EmitPawnCallback},
    {"SetPawnString", SetPawnString},
    {"ReturnPawnFloatVal", ReturnPawnFloatVal},
    {"SetPawnReferenceVars", SetPawnReferenceVars},
    {NULL, NULL}
};

// A função de inicialização que define nosso logprintf e a estrutura nativa.
extern "C" int AMXAPI
AMX_Load(AMX *amx)
{
    // Define a função logprintf da SDK
    pAMXFunctions = amx->GetNative;
    logprintf = (logprintf_t)pAMXFunctions->GetFunction("logprintf");
    // Registre nossas funções nativas
    return amx_Register(amx, Natives, -1);
}
```

### Agradecimentos Especiais
- Agradeço à comunidade de desenvolvedores que contribuíram para o desenvolvimento deste plugin e forneceram feedback valioso.
- Um agradecimento especial à [SAMP Forums](https://forum.sa-mp.com/) e à equipe de desenvolvimento da SA-MP por suas contribuições e suporte contínuo.
- Agradeço aos meus colegas desenvolvedores e amigos que sempre me apoiaram e incentivaram a continuar aprendendo e melhorando.

## Special thanks

**RyDeR** - For contributing the pictures from his plugin tutorial.

**Incognito** - For Invoke, information about ProcessTick, and for all the help over my time learning C++.

**Zeex/0x5A656578** - For GDK (will be included some time), and for volunteering to answer questions about GDK.

**Y_Less** - For being generally awesome and constantly helping me when ever im completely baffled.

**Techboy123** - For a ton of productive chats, help, and for listening to my complaints.