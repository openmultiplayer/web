**This tutorial is for those who want to transfer their gamemode from SA:MP server to open.mp server.**

:::note

*If you are using the FCNPC plugin, please stop for now because this plugin does not work for open.mp currently.*

:::

## Contents

- [Step 1](#step-1)
- [Step 2](#step-2)
- [Step 3](#step-3)
- [Step 4](#step-4)
- [Step 5](#step-5)
- [Step 6](#step-6)
- [Step 7](#step-7)
- [Step 8](#step-8)
- [Step 9](#step-9)
- [Step 10](#step-10)
- [Step 11](#step-11)
- [Compiler errors and warnings](#compiler-errors-and-warnings)
- [Runtime errors and warnings](#runtime-errors-and-warnings)
- [Useful documents](#useful-documents)
- [Help](#help)

## Step 1

Download the latest version of open.mp server files from [https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases/latest)

<kbd>![](https://github.com/adib-yg/openmp-server-installation/blob/main/screenshots/Screenshot%20(1).png)</kbd>

- `open.mp-win-x86.zip` **Windows** Server
- `open.mp-linux-x86.tar.gz` **Linux** Server
- `open.mp-linux-x86-dynssl.tar.gz` **Linux** Server (Dynamic SSL)

## Step 2

Extract the `.zip` or `.tar.gz` archive contents on your disk

<kbd>![](https://github.com/adib-yg/openmp-server-installation/blob/main/screenshots/Screenshot%20(3).png)</kbd>

:::note
- **components:** open.mp components
- **filterscripts:** Your server filter script files (side scripts)
- **gamemodes:** Your server game mode files (main scripts)
- **models:** Your server custom models (textures .txd .dff)
- **plugins:** Your server plugin files (legacy plugins)
- **qawno:** Pawn editor program and your server includes
- **scriptfiles:** INI files or other stuff.
- **bans.json:** Ban list file
- **config.json:** Server configuration file
- **omp-server.exe:** open.mp server program
- **omp-server.pdb:** open.mp server debugging file

:::

## Step 3

Put your gamemode `.pwn` file in the **gamemodes** folder

## Step 4

Put required includes (e.g. `sscanf2.inc`, `streamer.inc`) in the **qawno/include** folder

:::note

If you are using the YSI-4 includes in your game mode, update to [YSI-5.x](https://github.com/pawn-lang/YSI-Includes/releases)

:::

## Step 5

Put required plugins (e.g. `sscanf.dll`, `streamer.dll`) in the **plugins** folder

<hr />

:::warning

If you use the following plugins in table, you must put a version of the plugin that is compatible with omp!

Put the following plugins in the **../components** folder, not in the **../plugins** folder!

:::

| Plugin            | OMP                                                                          |
|-------------------|------------------------------------------------------------------------------|
| Pawn.CMD          | https://github.com/katursis/Pawn.CMD/releases/tag/3.4.0-omp                  |
| Pawn.RakNet       | https://github.com/katursis/Pawn.RakNet/releases/tag/1.6.0-omp               |
| sampvoice         | https://github.com/AmyrAhmady/sampvoice/releases/tag/v3.1.5-omp              |
| discord-connector | https://github.com/maddinat0r/samp-discord-connector/releases/tag/v0.3.6-pre |
| SKY               | Use Pawn.RakNet instead                                                      |
| YSF               | You don't need YSF because open.mp already declared most of the same natives |
| FCNPC             | Currently not supported                                                      |

## Step 6

Open the qawno IDE program located at **Server/qawno/qawno.exe**

<kbd>![](https://github.com/adib-yg/openmp-server-installation/blob/main/screenshots/Screenshot%20(5).png)</kbd>

## Step 7

Press **CTRL + O** then go to the **../gamemodes** folder and open your gamemode `.pwn` file

## Step 8

Find 
```pawn
#include <a_samp>
```
replace with
```pawn
#include <open.mp>
```
then press **F5** to compile.

:::note

If you are get error or warning, see [Compiler errors and warnings](#compiler-errors-and-warnings)

:::

## Step 9

Open **[config.json](https://www.open.mp/docs/server/config.json)** file with Notepad or other IDEs

<kbd>![](https://github.com/adib-yg/openmp-server-installation/blob/main/screenshots/Screenshot%20(9).png)</kbd>

## Step 10

Edit **config.json**

<kbd>![](https://github.com/adib-yg/openmp-server-installation/blob/main/screenshots/Screenshot%20(11).png)</kbd>

Find
```json
"main_scripts": [
    "gungame 1"
],
```
replace with
```json
"main_scripts": [
    "your_gamemode_amx_file_name 1"
],
```

<hr />

Find
```json
"legacy_plugins": [],
```
Specify required plugins
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

Find
```json
"side_scripts": []
```
Specify your filterscripts
```json
"side_scripts": [
    "filterscripts/file_name"
]
```

<hr />

Find
```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "changeme1"
},
```
Enter strong password for rcon password:
```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "151sd80hgse32q1oi0v8dsge166"
},
```

Press **CTRL + S** to save changes.

:::tip

There is a guide on how to convert `server.cfg` to `config.json` at https://www.open.mp/docs/server/config.json

:::

## Step 11

Run the server

- **Windows**

Open the `omp-server.exe` program

<kbd>![](https://github.com/adib-yg/openmp-server-installation/blob/main/screenshots/Screenshot%20(10).png)</kbd>

- **Linux**

```bash
./omp-server
```

## Compiler errors and warnings
- **warning 213: tag mismatch: expected tag "?", but found none ("_")**:

For example:

```pawn
TogglePlayerControllable(playerid, 1);
// ->
TogglePlayerControllable(playerid, true);
```

```pawn
TextDrawFont(textid, 1);
// ->
TextDrawFont(textid, TEXT_DRAW_FONT_1);
```


```pawn
GivePlayerWeapon(playerid, 4, 1);
// ->
GivePlayerWeapon(playerid, WEAPON_KNIFE, 1);
```

But you can ignore it for now:

```pawn
#define NO_TAGS
#include <open.mp>

// If the warning still occurs
// Use #pragma warning disable 213
```

<hr />

- **warning 234: function is deprecated (symbol "TextDrawColor") Use `TextDrawColour**

Press **CTRL + F** in qawno and replace all `TextDrawColor` to `TextDrawColour`

<kbd>![](https://github.com/adib-yg/openmp-server-installation/blob/main/screenshots/Screenshot%20(7).png)</kbd>

Or if you prefer you can use the mixed spellings:

```pawn
#define MIXED_SPELLINGS
#include <open.mp>
```

<hr />

- **warning 234: function is deprecated (symbol "GetPlayerPoolSize") This function is fundamentally broken.**
- **warning 234: function is deprecated (symbol "GetVehiclePoolSize") This function is fundamentally broken.**
- **warning 234: function is deprecated (symbol "GetActorPoolSize") This function is fundamentally broken.**

Replace `GetPlayerPoolSize()` with `MAX_PLAYERS`

Replace `GetVehiclePoolSize()` with `MAX_VEHICLES`

Replace `GetActorPoolSize()` with `MAX_ACTORS`

<hr />

- **warning 234: function is deprecated (symbol "SHA256_PassHash") Use BCrypt for hashing passwords**

Use the [samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt) plugin for hashing passwords. SHA-256 is not secure.

<hr />

- **warning 214: possibly a "const" array argument was intended: "?"**
- **warning 239: literal array/string passed to a non-const parameter**

For example:

```pawn
public MyFunction(string[])
// ->
public MyFunction(const string[])
```

<hr />

- **error 025: function heading differs from prototype**

For example:

```pawn
public OnPlayerDeath(playerid, killerid, reason)
// ->
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
```

```pawn
public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
// ->
public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
```

<hr />

:::note

There is also an upgrade tool that attempts to find old untagged and const-incorrect code and upgrade it.

https://github.com/openmultiplayer/upgrade

Already included in `/qawno/upgrader` folder.

:::

## Runtime errors and warnings
```log
[Info] Couldn't announce legacy network to open.mp list.
[Info] [Server Error] Status: 406
[Info] [Server Error] Message: {"error":"failed to query server: socket read timed out"}
[Info] This won't affect the server's behaviour.
```

- Your server is not accessible from the open.mp website.
- You are probably running the server locally.
- The firewall has blocked the connection.

**This warning will not affect the behavior of the server.**

<hr />

```log
[Warning] Insufficient specifiers given to `format`: "?" < 1
```

The specifiers are less than the arguments you pass in the format. For example:

```pawn
new string[32];
new mp[32] = ".MP";

format(string, sizeof(string), "OPEN", mp);
// [Warning] Insufficient specifiers given to `format`: "OPEN" < 1

// Should be:
format(string, sizeof(string), "OPEN%s", mp);
//                                  ^^
```

## Useful documents
Check out the new scripting functions and callbacks: https://www.open.mp/docs/server/omp-functions

If you are completely new to Pawn programming: [readme-beginner](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-beginner.md)

If you are an intermediate at Pawn programming: [readme-intermediate](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-intermediate.md)

If you are an expert at Pawn programming: [readme-expert](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-expert.md)

Blog post: [Porting to open.mp](https://www.open.mp/blog/porting)

## Help
If you still have issues running the server, please join the official open.mp Discord server: https://discord.gg/samp

Ask in [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) channel.
