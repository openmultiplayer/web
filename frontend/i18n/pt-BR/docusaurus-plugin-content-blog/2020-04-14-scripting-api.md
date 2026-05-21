---
slug: scripting-api
title: Design da API do open.mp
authors: y_less
---

Um foco principal do open.mp é manter a **compatibilidade retroativa** — seus scripts SA:MP existentes continuarão funcionando como estão. No entanto, o open.mp também introduz melhorias para corrigir inconsistências e tornar a criação de scripts mais intuitiva e poderosa.  

Veja alguns problemas comuns do SA:MP que estamos abordando e como o open.mp melhora a experiência.

<!-- truncate -->

:::warning

O conteúdo do post a seguir está desatualizado e não tem relação com o estado atual do open.mp. O post está publicado aqui para fins de arquivo.

:::

## Introdução

Primeiro, um esclarecimento MUITO importante: scripts existentes ainda funcionarão como estão. Trabalhamos muito duro na compatibilidade retroativa e a levamos em consideração em todas as decisões. Há muitas melhorias que gostaríamos de fazer, mas simplesmente não podemos por esse motivo, além de outros códigos que ficam muito mais complicados por causa desse requisito de compatibilidade.

Dito isso, há melhorias que podem ser feitas em todos os lugares. Vamos ver alguns exemplos de inconsistências nos scripts SA:MP:

### Tags

- `Menu:CreateMenu` - Com tag.
- `DB:db_open` - Com tag.
- `CreateVehicle` - Sem tag.
- `CreateActor` - Sem tag.

```c
#define SELECT_OBJECT_GLOBAL_OBJECT 1
#define SELECT_OBJECT_PLAYER_OBJECT 2

forward OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ);
```

`type` não tem tag, assim como TODAS as constantes definidas pelo SA:MP; diferente das constantes padrão do pawn:

```c
native File:fopen(const name[], filemode:mode = io_readwrite);
```

### Nomeação

- `SetVehiclePos` - "Vehicle" no meio do nome da função.
- `TextDrawTextSize` - "TextDraw" no começo.
- `db_open` - "db" no começo e em minúsculas.
- `fread` - "file" no começo, e abreviado.
- `asin` - Uma função adicionada pelo SA:MP sem camel/pascal case.

Consistência:

- GetVehicleZAngle - "Z-Angle"
- GetVehicleRotationQuat - "Rotation"
- SetPlayerFacingAngle - "Facing Angle"
- SetObjectRot - "Rot"

E apesar de tudo isso, a maioria das bibliotecas agora adotou a convenção de nomenclatura `Module_Method`.

### Constantes

- `65535`

Valor para jogadores, atores, TDs e algumas outras coisas inválidas. Também é o valor para veículos inválidos, mas `0` TAMBÉM é um ID de veículo inválido às vezes retornado.

- `0`

Valor para arquivos inválidos, às vezes veículos (assim como `65535`). Também é o valor para a ausência de muitas coisas, como estados de ação e armas.

- `255`

Valor para times e menus inválidos.

- `-1`

Valor para gang zones e estados de arma inválidos.

Além disso, muitas bibliotecas usam `0x80000000` e `-1` para estados inválidos porque é muito menos provável que eles acabem se tornando um ID válido. 65535 é um número bem grande, mas um servidor grande pode facilmente ter mais objetos do que isso.

### Funções por jogador

- `CreateObject` e `CreatePlayerObject`

Tem versões globais e por jogador.

- `SetPlayerMapIcon`

Não tem versão global.

- `SetGravity`

Sem versão por jogador, apesar de possivelmente ser uma das funções por jogador mais solicitadas, e adicionada quase instantaneamente pelo YSF e outros plugins.

- `CreateVehicle`

Sem versão por jogador, apesar de também ser solicitada repetidamente. Mas também não foi adicionada por nenhum plugin (público), nem mesmo pelo plugin streamer.

- `SendClientMessage` e `SendClientMessageToAll`

Tem versões globais e por jogador, mas a versão por jogador é o padrão, diferente da maioria das outras funções.

- `GangZoneShowForPlayer` e `GangZoneShowForAll`

Menus, Gang Zones e Text Draws são as únicas funções padrão do SA:MP em que você pode especificar exatamente quais jogadores podem vê-los. Todas as outras são para todo mundo ou apenas uma pessoa. Claro, bibliotecas e plugins desde então expandiram muito esse modelo, e a maioria dos bons agora permite controle muito granular sobre quais subconjuntos de jogadores (grupos) podem usar qualquer entidade específica.

### IDs

- `CreateObject` e `CreatePlayerObject`

O pool de IDs dessas funções é compartilhado. Se um objeto global tiver ID `4`, nenhum objeto de jogador poderá ter ID `4`, mas vários jogadores poderiam ter objetos diferentes todos com ID `5`.

- `Create3DTextLabel` e `CreatePlayer3DTextLabel`

O pool de IDs é dividido: os primeiros `1024` IDs são globais, os segundos `1024` são por jogador. Cada jogador pode ter até `2048` textos 3D, mas apenas `1024` de cada tipo, apesar de isso não fazer diferença nenhuma no lado do cliente.

- `SetPlayerMapIcon`

Os IDs são especificados manualmente, até o limite de 32. Por um tempo esse limite não era verificado no lado do cliente, levando a um possível exploit de ACE.

- `ShowPlayerDialog`

Os IDs são especificados manualmente, sem limite algum. Os IDs também são totalmente inúteis, já que um jogador só pode ver um diálogo por vez.

- `SetTimer`

Os IDs dão a volta, sem verificar se um timer existente tem o mesmo ID. Você teria que iniciar mais de 4.000.000.000 timers em algum momento para encontrar esse problema, mas ele poderia acontecer — eles nem precisam continuar todos rodando.

E, claro, algumas pessoas dependem de IDs serem alocados em ordens muito específicas, e depois se perguntam por que o modo inteiro quebra quando, por exemplo, adicionam ou removem um único veículo.

## Compatibilidade

Então, novamente, precisamos deixar muito claro que todo *"código SA:MP"* existente funcionará. O que isso significa exatamente? Qualquer código que seja:

- Escrito em pawn.
- Use a API original do SA:MP sem plugins.
- Seja recompilado com nossos includes.
- Já use o compilador da comunidade.

Vai funcionar.

No entanto:

- Se você usa um plugin para escrever em uma linguagem diferente de pawn, esse plugin provavelmente precisará ser portado primeiro. Então seu código não funcionará imediatamente.
- Se você usa outros plugins, como streamer, YSF, audio etc.; eles podem já funcionar, podem precisar de portabilidade, ou podem ser totalmente supérfluos porque sua funcionalidade foi integrada ao servidor principal. Então seu código pode funcionar.
- Se você só tem o .AMX do seu modo e não o código-fonte original, por quê? De qualquer forma, embora todas as funções SA:MP existam, algumas foram refeitas ou substituídas por código pawn ou macros, e você DEVE recompilar. Então, se você não puder, seu código não funcionará de jeito nenhum.

## Build

### Exemplo

Vamos começar vendo um modo SA:MP absurdamente simples.

```c
#include <a_samp>

main() {}

public OnGameModeInit()
{
    SetGameModeText("Example Script");
    AddPlayerClass(0, 0.0, 0.0, 4.0, 0.0, 0, 0, 0, 0, 0, 0);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 20.0, 20.0, 4.0, 2.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    SendClientMessage(playerid, 0xFF0000AA, "You won!");
    return 1;
}
```

Você nasce. Vai até o checkpoint. Você vence.

### Conversão

Para fazer o build disso para open.mp, precisamos mudar apenas o primeiro include e adicionar um define.

Isto:

```c
#include <a_samp>

main() {}
```

Vira:

```c
#define OPENMP_COMPAT
#include <openmp\openmp>

main() {}
```

O primeiro erro que você pode receber é:

`open.mp scripts require the community compiler from: git.io/pawn-compiler`

Se você receber isso, vá para https://git.io/pawn-compiler e baixe a versão 3.10.10 ou posterior do compilador. Para o lançamento, gostaríamos de uma ferramenta equivalente ao pawno com esse compilador já integrado, mas ainda não fizemos isso. Eu recomendo FORTEMENTE tentar compilar seu modo com esse compilador primeiro, pois ele reativou os avisos de correção de const, então é provável que você receba uma porção de novos avisos logo de cara (isso NÃO é um problema do compilador; são problemas no seu código que sempre existiram, mas eram ignorados antes). Você provavelmente também vai querer substituir seus includes por estes:

https://github.com/pawn-lang/pawn-stdlib  
https://github.com/pawn-lang/samp-stdlib

Isso é uma coisa boa a fazer mesmo se você não usa open.mp, pois eles corrigem vários problemas de tags e const nos includes originais.

### Avisos

Se você não receber nenhum aviso usando o novo compilador com a nova versão de `a_samp`, agora verá uma porção de novos avisos parecidos com:

`warning 234: function is deprecated (symbol "AddPlayerClass") Use "Class_Add" instead.`

Você tem três opções — e todas são suportadas:

- **Ignorar os avisos:** O código ainda funcionará.
- **Suprimir os avisos:** Troque `OPENMP_COMPAT` por `OPENMP_QUIET`:

```c
#define OPENMP_QUIET
#include <openmp\openmp>

main() {}
```

- **Corrigir os avisos:** Algumas funções mudaram de nome para ficarem consistentes entre si; algumas funções mudaram parâmetros porque as antigas evoluíram e não expunham totalmente as capacidades do open.mp. Ainda não há uma forma simples de converter todas as funções, mas você pode deixar os avisos ligados enquanto converte o código aos poucos — as funções antigas continuarão funcionando perfeitamente bem.

Há três estágios na conversão:

### `#define OPENMP_QUIET`

Usar esse define permite que seu modo compile sem novos avisos de funções obsoletas. Mas você não deve ficar com esse define, e as conversões implícitas só funcionarão para código pawn. Você pode converter código nesse modo, já que a nova API também funcionará, mas não pode usar o compilador para ver onde ainda restam problemas.

### `#define OPENMP_COMPAT`

Este é o segundo estágio. Quando você quiser começar a aproveitar todos os recursos melhorados do open.mp, como controles granulares de entidades por jogador e limites removidos, precisará começar a usar as novas versões das funções. As novas funções estão sempre disponíveis, mas talvez você não saiba todos os lugares que precisam de conversão. Isso dará avisos para as funções antigas, mas elas ainda funcionarão, permitindo converter partes do seu modo uma de cada vez.

### Sem define

Quando você achar que terminou de converter seu código, remova os defines:

```c
#include <openmp\openmp>

main() {}
```

Agora você recebe erros em vez de avisos para qualquer código antigo ainda em uso.

## Nova API

Agora que vimos quais eram os problemas da API antiga e como encontrar onde você precisa aplicar a nova API, devemos de fato olhar para essa nova API em termos dos problemas identificados anteriormente:

### Tags

As funções agora usam tags quase em todos os lugares. Tentamos encontrar um equilíbrio entre avisos de tags demais e pouca informação útil, mas avisos existem por um motivo e podem ajudar a encontrar problemas que você talvez tenha deixado passar. Por exemplo, passar um veículo como parâmetro para uma função de objeto, ou dar a alguém uma arma que não existe:

```c
// Nenhum aviso para este código, apesar de ele estar claramente errado.
new object = CreateObject(various, parameters, here);
PutPlayerInVehicle(playerid, object);

// O mesmo aqui - não existe arma 20, apesar de estar entre IDs de armas válidos.
GivePlayerWeapon(playerid, 20, 200);
```

Seria muito melhor se todos os trechos de código claramente errados pudessem gerar avisos. Esse é o poder de uma linguagem type-safe, e embora pawn não seja totalmente type-safe, podemos chegar perto com tags. Esses exemplos viram:

```c
// warning 213: tag mismatch: expected tag "Vehicle", but found "Object"
new Object:object = Object@Create(various, parameters, here);
Player_PutInVehicle(playerid, object);

// warning 213: tag mismatch: expected tag "WeaponType", but found but found none ("_")
GivePlayerWeapon(playerid, 20, 200);

// Isto não gera aviso:
GivePlayerWeapon(playerid, WEAPON_COLT45, 200);
```

### Nomeação

A maioria das novas funções usa um refinamento do esquema de nomes já adotado por muitas bibliotecas e plugins: `Module_VerbNoun`. Algumas não usam, quando são casos isolados que não se encaixam em nenhum módulo maior, mas na maior parte você possivelmente consegue adivinhar o nome de uma função de que precisa. Chega de ficar se perguntando se era "Rot" ou "Rotation" para esse tipo de elemento; não há abreviações, a menos que o nome da função fique longo demais (32+ caracteres, o compilador não aceita). Quer mudar o modelo de um objeto? `Object_SetModel`. Quer mostrar texto para um jogador? `Text_Show`.

Há um conjunto limitado de verbos: `Get`, `Set`, `Create`, `Destroy`, `Add`, `Remove`, `Show`, `Hide`, `Run`, `Move`, `Stop` e `Count`. Mais podem ser adicionados e podem aparecer em situações especiais, mas, em geral, se um desses se encaixa, provavelmente é ele. De longe os mais comuns são `Get` e `Set`, que, diferente do SA:MP, agora sempre vêm em pares: se você pode definir qualquer parâmetro, também pode obtê-lo depois. Eles também são os verbos que mais frequentemente vêm com um substantivo — você precisa especificar o que obter ou definir: `Health`, `Position`, `Model`, `Width` etc.

Alguns exemplos:

```c
native bool:Menu_SetDisabled(Menu:menuid, bool:disabled);
native bool:Menu_GetDisabled(Menu:menuid);

native bool:Text_SetAlignment(Text:text, alignment);
native Text_GetAlignment(Text:text);

native bool:Object_Move(Object:objectid, Float:posX, Float:posY, Float:posZ, Float:speed, Float:rotX = FLOAT_NAN, Float:rotY = FLOAT_NAN, Float:rotZ = FLOAT_NAN);

native DBResult_CountRows(DBResult:dbresult);

native Player_Spawn(Player:playerid);
```

Observe que os nomes de módulo e tag sempre correspondem — `Vehicle`, `DB`, `Player` etc. [Há motivos além da consistência para isso](https://github.com/pawn-lang/compiler/issues/234): dá uma interface mais parecida com OO e é mais fácil de lembrar. No entanto, você talvez tenha notado em um exemplo anterior a função `Object@Create`, não `Object_Create`. A razão para isso está no primeiro parâmetro.

Em todos os sete exemplos imediatamente acima, o primeiro parâmetro é a entidade (objeto, veículo, jogador etc.) sobre a qual a operação é realizada. Você quer obter a posição de uma entidade específica. Quer mover uma entidade específica. Quer obter o tempo restante de uma entidade específica. Isso novamente mapeia para a API parecida com OO: `Player_Spawn(playerid)` pode ser pensado como `player.Spawn()`. PAWN não pode fazer isso, mas isso não significa que outras linguagens conectadas a essa API não possam. Em termos de C++: `_` é `.` ou `->` e sempre precisa de um ID válido dado como primeiro parâmetro. No entanto, a função `Dialog_IsValid(Dialog:id)`, por definição, pode não ter um ID válido como primeiro parâmetro (ou qual seria o propósito dela[^1]?), e `Icon_Create(image, Float:x, Float:y, Float:z)` nem sequer recebe um ID. Assim, elas viram `@` — `::` na sintaxe de C++. Elas podem nem receber um ID, e definitivamente não precisam de um válido (`@Destroy` também entra nesse grupo de funções, já que destruir uma entidade é uma operação logicamente externa a uma entidade, não uma operação sobre a entidade).

### Constantes

Para começar, em vez de `#define` para tudo, usamos `const` e `enum` tanto quanto possível, exceto onde esperamos que coisas sejam sobrescritas (`MAX_PLAYERS`):

```c
enum ObjectMaterialTextAlignment
{
    MATERIAL_TEXT_ALIGN_LEFT,
    MATERIAL_TEXT_ALIGN_CENTRE,
    MATERIAL_TEXT_ALIGN_RIGHT,
};
```

`Object_SetMaterialText` agora aceitará apenas um desses três valores, e nada mais.

E quanto aos IDs inválidos? Também os tornamos consistentes. Todas as entidades agora usam o mesmo valor inválido, bem fora do intervalo de valores possivelmente válidos — o open.mp removeu quase todos os limites, então tornar um valor como `65536` inválido simplesmente não funcionará. Qual é esse novo valor inválido? Ainda não decidimos... Há dois principais candidatos, ambos com prós e contras, e a decisão não é tão fácil quanto pode parecer à primeira vista. Mas felizmente isso não faz grande diferença para o trabalho interno, já que podemos trocar quase instantaneamente.

As duas escolhas são explicadas abaixo, e gostaríamos de receber feedback sobre isso se possível:

#### `0`

Usar `0` como valor inválido tem algumas vantagens:

- ele não é um índice inválido, então, quando retornado e não verificado corretamente, seu código não vai travar. Talvez não funcione perfeitamente, mas pelo menos continuará fazendo alguma coisa.
- É muito fácil de verificar, e a intenção fica óbvia com ele:

```c
new Object:object = Object@Create(various, parameters, here);
if (object)
{
    Object_SetMaterialText(object, "Hello");
}
else
{
    printf("Couldn't create the object.");
}
```

- Uma variável recém-declarada é, por padrão, um valor inválido:

```c
new Dialog:d;
```

Um dos bugs mais comuns que as pessoas encontram é o código só funcionar para o jogador 0, porque esqueceram de inicializar uma variável. Se não houver jogador/objeto/veículo 0, o código não será aplicado a ninguém — é melhor não promover nenhum jogador a admin do que promover o jogador errado.

#### `-1`

Usar `-1` como valor inválido tem algumas vantagens:

- Ele É um índice inválido. Não ser um foi listado como vantagem para `0` porque seu código muitas vezes continuará rodando em vez de travar, mas com crashdetect isso pode ser bom — há um bug no seu código e o crash dirá exatamente onde ele está, às vezes até a linha exata do código-fonte. O que é melhor: continuar silenciosamente ou terminar de forma barulhenta?
- As pessoas estão acostumadas a `0` como valor válido na maior parte do tempo. Programadores começam a contar em `0`, então ele deveria ser válido, e algo fora do domínio dos inteiros positivos deveria ser inválido.
- Em matemática sem sinal, ele é o maior inteiro possível: `0xFFFFFFFF`, `4294967295`. Isso significa que o limite interno rígido para qualquer tipo de entidade é o maior possível: `4,294,967,295` itens antes de ficar sem IDs (e memória).

### Funções por jogador

Em resumo, elas não existem mais. Toda função `ForPlayer`, `ForAll`, `CreatePlayerX` etc. foi substituída por uma função simples: `X_Display` (onde `X` é qualquer entidade), e `X_Has` para verificação:

```c
Object_Display(objectid, playerid, true); // Mostra.
Object_Display(objectid, playerid, false); // Oculta.

Text_Display(textid, true); // Mostra para todos.

if (Zone_Has(zoneid, playerid))
{
    // O jogador TEM PERMISSÃO para ver a gang zone.
}
```

YSI usava `X_SetPlayer`, mas mostrar coisas para jogadores é a coisa mais fundamental a fazer, então merece seu próprio verbo. Algumas bibliotecas usam `X_Show` e `X_Hide`, mas isso são duas funções, o que só leva a código extra ao verificar qual usar:

```c
if (var) Checkpoint_Show(cpid, playerid);
else Checkpoint_Hide(cpid, playerid);
```

vs

```c
Checkpoint_Display(cpid, playerid, var);
```

Observe que apenas chamar `X_Display` pode não mostrar o item de fato. Um objeto do outro lado do mundo ainda não ficará visível. Um checkpoint em outro mundo virtual não ficará visível mesmo que esteja bem ao seu lado. Para entidades do mundo, isso apenas diz que o jogador tem permissão para vê-la, não que ele atualmente consegue vê-la. Por outro lado, para elementos de HUD como menus e diálogos, isso os mostra instantaneamente e pode ocultar outros quando apenas um é permitido.

### IDs

Com a remoção dos pools por jogador e a unificação dos IDs inválidos, isso não é mais um problema.

## Funções mais inteligentes.

As funções `X_Display` mostradas acima podem receber dois parâmetros — entidade e estado de exibição, para permitir que todos os jogadores as vejam; ou, alternativamente, três parâmetros — entidade, jogador e estado de exibição. Há outras funções que também são inteligentes com seus parâmetros. Um conjunto de exemplos são as várias funções de rotação. Como mencionado na introdução, há pelo menos quatro maneiras diferentes de obter e definir rotações para diferentes entidades. Agora há uma só: `X_SetRotation` e `X_GetRotation`. Por exemplo:

```c
// Obtém apenas `z`.
z = Player_GetRotation(playerid);

// Obtém os ângulos Euler x, y e z.
Object_GetRotation(objectid, x, y, z);

// Obtém os ângulos quaternion w, x, y e z.
Vehicle_GetRotation(vehicleid, w, x, y, z);
```

Qual é usado para qual entidade? Todos:

```c
// Obtém apenas `z`.
z = Object_GetRotation(objectid);

// Obtém os ângulos Euler x, y e z.
Object_GetRotation(objectid, x, y, z);

// Obtém os ângulos quaternion w, x, y e z.
Object_GetRotation(objectid, w, x, y, z);
```

Os significados dos parâmetros e do retorno são determinados pelo número de parâmetros fornecidos. O mesmo vale para Set:

```c
// Define apenas `z`.
Vehicle_SetRotation(vehicleid, z);

// Define os ângulos Euler x, y e z.
Vehicle_SetRotation(vehicleid, x, y, z);

// Define os ângulos quaternion w, x, y e z.
Vehicle_SetRotation(vehicleid, w, x, y, z);
```

## Conclusão

Tentamos muito criar uma API que seja fácil de usar, fácil de aprender, mas também compatível com versões anteriores. Muito do sucesso do SA:MP vem da sua facilidade de uso, e queremos manter isso, mas também sabemos que há usuários avançados que querem extrair muito mais do próprio código. Encontrar esse equilíbrio é sempre difícil, especialmente quando quem mais comenta são os mais experientes — aqueles que conhecem a linguagem por dentro e por fora e querem levá-la mais longe. Isso cria um sistema que se autosseleciona para recursos avançados em detrimento dos iniciantes. Não queremos isso, mas ainda assim queremos ouvir suas opiniões. Quais recursos de linguagem e API você gosta, e quais não gosta? Quais funções ajudariam você a tirar o máximo do seu código? Você acha o novo design simples ou complicado demais? Você está de boa com os nomes desorganizados das funções atuais? Eles cumprem seu propósito, então por que mudá-los? Como iniciante, você teria gostado que algo fosse feito de outra forma?

Por favor, compartilhe qualquer feedback que tiver no tópico do burgershot abaixo. Adoraríamos ouvir você:

https://forum.open.mp/showthread.php?tid=1036

[^1]: Nota lateral interessante. Graças à forma como abstraímos o código da API de scripting, Dialog_IsValid é implementada como:

    ```c
    SCRIPT_API(Dialog_IsValid, bool(Dialog_s)) { return true; }
    ```

    É literalmente isso. Nenhuma implementação real é necessária porque, para a função ser chamada, a busca pela entidade deve ter sido bem-sucedida, e assim podemos retornar true instantaneamente.
