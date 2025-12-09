**Este tutorial é para aqueles que desejam transferir seu gamemode de servidor SA:MP para servidor open.mp.**

:::note

Se você está usando o plugin FCNPC, por favor pare por enquanto porque este plugin não funciona para open.mp atualmente.

:::

## Passo 1

Baixe a versão mais recente dos arquivos do servidor open.mp em [https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases/latest)

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(1).png>)

- `open.mp-win-x86.zip` Servidor **Windows**
- `open.mp-linux-x86.tar.gz` Servidor **Linux**
- `open.mp-linux-x86-dynssl.tar.gz` Servidor **Linux** (SSL Dinâmico)

## Passo 2

Extraia o conteúdo do arquivo `.zip` ou `.tar.gz` no seu disco

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(3).png>)

:::note

- **components:** componentes do open.mp
- **filterscripts:** Arquivos de filter script do seu servidor (scripts secundários)
- **gamemodes:** Arquivos de game mode do seu servidor (scripts principais)
- **models:** Modelos personalizados do seu servidor (texturas .txd .dff)
- **plugins:** Arquivos de plugin do seu servidor (plugins legados)
- **qawno:** Programa editor Pawn e includes do seu servidor
- **scriptfiles:** Arquivos INI ou outras coisas.
- **bans.json:** Arquivo de lista de banimentos
- **config.json:** Arquivo de configuração do servidor
- **omp-server.exe:** Programa do servidor open.mp
- **omp-server.pdb:** Arquivo de depuração do servidor open.mp

:::

## Passo 3

Coloque seu arquivo `.pwn` do gamemode na pasta **gamemodes**

## Passo 4

Coloque os includes necessários (por exemplo, `sscanf2.inc`, `streamer.inc`) na pasta **qawno/include**

:::note

Se você está usando os includes YSI-4 no seu game mode, atualize para [YSI-5.x](https://github.com/pawn-lang/YSI-Includes/releases)

:::

## Passo 5

Coloque os plugins necessários (por exemplo, `sscanf.dll`, `streamer.dll`) na pasta **plugins**

<hr />

:::warning

Se você usa os seguintes plugins da tabela, você deve colocar uma versão do plugin que seja compatível com omp!

Coloque os seguintes plugins na pasta **../components**, não na pasta **../plugins**!

:::

| Plugin            | OMP                                                                          |
| ----------------- | ---------------------------------------------------------------------------- |
| Pawn.CMD          | https://github.com/katursis/Pawn.CMD/releases/tag/3.4.0-omp                  |
| Pawn.RakNet       | https://github.com/katursis/Pawn.RakNet/releases/tag/1.6.0-omp               |
| sampvoice         | https://github.com/AmyrAhmady/sampvoice/releases/tag/v3.1.5-omp              |
| discord-connector | https://github.com/maddinat0r/samp-discord-connector/releases/tag/v0.3.6-pre |
| SKY               | Use Pawn.RakNet em vez disso                                                 |
| YSF               | Você não precisa do YSF porque o open.mp já declarou a maioria das mesmas natives |
| FCNPC             | Atualmente não suportado                                                     |

## Passo 6

Abra o programa qawno IDE localizado em **Server/qawno/qawno.exe**

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(5).png>)

## Passo 7

Pressione **CTRL + O** e vá para a pasta **../gamemodes** e abra seu arquivo `.pwn` do gamemode

## Passo 8

Encontre

```pawn
#include <a_samp>
```

substitua por

```pawn
#include <open.mp>
```

depois pressione **F5** para compilar.

## Passo 9

Abra o arquivo **[config.json](https://www.open.mp/docs/server/config.json)** com o Bloco de Notas ou outras IDEs

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(9).png>)

## Passo 10

Edite o **config.json**

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(11).png>)

Encontre

```json
"main_scripts": [
    "gungame 1"
],
```

substitua por

```json
"main_scripts": [
    "nome_do_arquivo_amx_do_seu_gamemode 1"
],
```

<hr />

Encontre

```json
"legacy_plugins": [],
```

Especifique os plugins necessários

```json
"legacy_plugins": [
    "crashdetect",
    "mysql",
    "sscanf",
    "streamer",
    "PawnPlus",
    "pawn-memory"
],
```

<hr />

Encontre

```json
"side_scripts": []
```

Especifique seus filterscripts

```json
"side_scripts": [
    "filterscripts/nome_do_arquivo"
]
```

<hr />

Encontre

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "changeme1"
},
```

Digite uma senha forte para a senha do rcon:

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "151sd80hgse32q1oi0v8dsge166"
},
```

Pressione **CTRL + S** para salvar as alterações.

:::tip

Há um guia sobre como converter `server.cfg` para `config.json` em https://www.open.mp/docs/server/config.json

:::

## Passo 11

Execute o servidor

- **Windows**

Abra o programa `omp-server.exe`

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(10).png>)

- **Linux**

```bash
./omp-server
```

## Erros e avisos do compilador

- **warning 213: tag mismatch: expected tag "?", but found none ("\_")**:

Por exemplo:

```pawn
TogglePlayerControllable(playerid, 1);
// ->
TogglePlayerControllable(playerid, true);
```

<br />

```pawn
TextDrawFont(textid, 1);
// ->
TextDrawFont(textid, TEXT_DRAW_FONT_1);
```

<br />

```pawn
GivePlayerWeapon(playerid, 4, 1);
// ->
GivePlayerWeapon(playerid, WEAPON_KNIFE, 1);
```

Mas você pode ignorar por enquanto:

```pawn
#define NO_TAGS
#include <open.mp>

// Se o aviso ainda ocorrer
// Use #pragma warning disable 213
```

<br />

<hr />

- **warning 234: function is deprecated (symbol "TextDrawColor") Use `TextDrawColour**

Pressione **CTRL + F** no qawno e substitua todos os `TextDrawColor` por `TextDrawColour`

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(7).png>)

<br />

Ou se você preferir, pode usar as grafias mistas:

```pawn
#define MIXED_SPELLINGS
#include <open.mp>
```

<br />

<hr />

- **warning 234: function is deprecated (symbol "GetPlayerPoolSize") This function is fundamentally broken.**
- **warning 234: function is deprecated (symbol "GetVehiclePoolSize") This function is fundamentally broken.**
- **warning 234: function is deprecated (symbol "GetActorPoolSize") This function is fundamentally broken.**

Substitua `GetPlayerPoolSize()` por `MAX_PLAYERS`

Substitua `GetVehiclePoolSize()` por `MAX_VEHICLES`

Substitua `GetActorPoolSize()` por `MAX_ACTORS`

<hr />

- **warning 234: function is deprecated (symbol "SHA256_PassHash") Use BCrypt for hashing passwords**

Use o plugin [samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt) para hash de senhas. SHA-256 não é seguro.

<hr />

- **warning 214: possibly a "const" array argument was intended: "?"**
- **warning 239: literal array/string passed to a non-const parameter**

Por exemplo:

```pawn
public MyFunction(string[])
// ->
public MyFunction(const string[])
```

<br />

<hr />

- **error 025: function heading differs from prototype**

Por exemplo:

```pawn
public OnPlayerDeath(playerid, killerid, reason)
// ->
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
```

<br />

```pawn
public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
// ->
public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
```

<br />

<hr />

:::note

Também existe uma ferramenta de atualização que tenta encontrar código antigo sem tags e com const incorreto e atualizá-lo.

https://github.com/openmultiplayer/upgrade

Já incluída na pasta `/qawno/upgrader`.

:::

## Erros e avisos em tempo de execução

```
[Info] Couldn't announce legacy network to open.mp list.
[Info] [Server Error] Status: 406
[Info] [Server Error] Message: {"error":"failed to query server: socket read timed out"}
[Info] This won't affect the server's behaviour.
```

- Seu servidor não está acessível a partir do site open.mp.
- Você provavelmente está executando o servidor localmente.
- O firewall bloqueou a conexão.

**Este aviso não afetará o comportamento do servidor.**

<br />

<hr />

```
[Warning] Insufficient specifiers given to `format`: "?" < 1
```

Os especificadores são menores que os argumentos que você passa no format. Por exemplo:

```pawn
new string[32];
new mp[32] = ".MP";

format(string, sizeof(string), "OPEN", mp);
// [Warning] Insufficient specifiers given to `format`: "OPEN" < 1

// Deveria ser:
format(string, sizeof(string), "OPEN%s", mp);
//                                  ^^
```

## Documentos úteis

Confira as novas funções e callbacks de script: https://www.open.mp/docs/server/omp-functions

Se você é completamente novo na programação Pawn: [readme-beginner](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-beginner.md)

Se você é intermediário na programação Pawn: [readme-intermediate](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-intermediate.md)

Se você é especialista na programação Pawn: [readme-expert](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-expert.md)

Postagem no blog: [Portando para open.mp](https://www.open.mp/blog/porting)

## Ajuda

Se você ainda tiver problemas ao executar o servidor, junte-se ao servidor Discord oficial do open.mp: https://discord.gg/samp

Pergunte no canal [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790).
