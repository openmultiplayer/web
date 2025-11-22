**Deze tutorial is voor wie zijn gamemode van een SA:MP-server naar een open.mp-server wil overzetten.**

:::note

Als je de FCNPC-plugin gebruikt, stop daar dan voorlopig mee, want deze plugin werkt momenteel niet met open.mp.

:::

## Stap 1

Download de nieuwste versie van de open.mp-serverbestanden van [https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases/latest)

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(1).png>)

- `open.mp-win-x86.zip` **Windows**-server
- `open.mp-linux-x86.tar.gz` **Linux**-server
- `open.mp-linux-x86-dynssl.tar.gz` **Linux**-server (dynamische SSL)

## Stap 2

Pak de inhoud van het `.zip`- of `.tar.gz`-archief uit op je schijf

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(3).png>)

:::note

- **components:** open.mp-componenten
- **filterscripts:** Je serverfilterscripts (bijscripts)
- **gamemodes:** Je servergamemodes (hoofdscripts)
- **models:** Je aangepaste servermodellen (textures .txd .dff)
- **plugins:** Je serverplugins (legacy-plugins)
- **qawno:** Pawn-editor en server-includes
- **scriptfiles:** INI-bestanden of andere gegevens
- **bans.json:** Banlijstbestand
- **config.json:** Serverconfiguratiebestand
- **omp-server.exe:** open.mp-serverprogramma
- **omp-server.pdb:** open.mp-serverdebugbestand

:::

## Stap 3

Plaats je gamemode-`.pwn`-bestand in de map **gamemodes**

## Stap 4

Plaats vereiste includes (bijv. `sscanf2.inc`, `streamer.inc`) in de map **qawno/include**

:::note

Als je YSI-4-includes in je gamemode gebruikt, update naar [YSI-5.x](https://github.com/pawn-lang/YSI-Includes/releases)

:::

## Stap 5

Plaats vereiste plugins (bijv. `sscanf.dll`, `streamer.dll`) in de map **plugins**

<hr />

:::warning

Als je de onderstaande plugins gebruikt, moet je een versie gebruiken die compatibel is met omp!

Plaats de volgende plugins in de map **../components**, niet in **../plugins**!

:::

| Plugin            | OMP                                                                          |
| ----------------- | ---------------------------------------------------------------------------- |
| Pawn.CMD          | https://github.com/katursis/Pawn.CMD/releases/tag/3.4.0-omp                  |
| Pawn.RakNet       | https://github.com/katursis/Pawn.RakNet/releases/tag/1.6.0-omp               |
| sampvoice         | https://github.com/AmyrAhmady/sampvoice/releases/tag/v3.1.5-omp              |
| discord-connector | https://github.com/maddinat0r/samp-discord-connector/releases/tag/v0.3.6-pre |
| SKY               | Gebruik Pawn.RakNet in plaats daarvan                                        |
| YSF               | Niet nodig: open.mp heeft de meeste gelijkwaardige natives al                 |
| FCNPC             | Momenteel niet ondersteund                                                   |

## Stap 6

Open het qawno-IDE-programma in **Server/qawno/qawno.exe**

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(5).png>)

## Stap 7

Druk op **CTRL + O**, ga naar de map **../gamemodes** en open je gamemode-`.pwn`-bestand

## Stap 8

Zoek

```pawn
#include <a_samp>
```

vervang door

```pawn
#include <open.mp>
```

druk vervolgens op **F5** om te compileren.

## Stap 9

Open het bestand **[config.json](https://www.open.mp/docs/server/config.json)** met Kladblok of een andere IDE

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(9).png>)

## Stap 10

Bewerk **config.json**

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(11).png>)

Zoek

```json
"main_scripts": [
    "gungame 1"
],
```

vervang door

```json
"main_scripts": [
    "your_gamemode_amx_file_name 1"
],
```

<hr />

Zoek

```json
"legacy_plugins": [],
```

Specificeer vereiste plugins

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

Zoek

```json
"side_scripts": []
```

Specificeer je filterscripts

```json
"side_scripts": [
    "filterscripts/file_name"
]
```

<hr />

Zoek

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "changeme1"
},
```

Voer een sterk wachtwoord in voor het rcon-wachtwoord:

```json
"rcon": {
    "allow_teleport": false,
    "enable": false,
    "password": "151sd80hgse32q1oi0v8dsge166"
},
```

Druk op **CTRL + S** om wijzigingen op te slaan.

:::tip

Er is een gids voor het converteren van `server.cfg` naar `config.json` op https://www.open.mp/docs/server/config.json

:::

## Stap 11

Start de server

- **Windows**

Open het programma `omp-server.exe`

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(10).png>)

- **Linux**

```bash
./omp-server
```

## Compilerfouten en -waarschuwingen

- **warning 213: tag mismatch: expected tag "?", but found none ("\_")**:

Bijvoorbeeld:

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

Maar je kunt dit voorlopig negeren:

```pawn
#define NO_TAGS
#include <open.mp>

// Als de waarschuwing nog steeds optreedt
// Gebruik #pragma warning disable 213
```

<br />

<hr />

- **warning 234: function is deprecated (symbol "TextDrawColor") Use `TextDrawColour**

Druk **CTRL + F** in qawno en vervang overal `TextDrawColor` door `TextDrawColour`

![](<https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(7).png>)

<br />

Of, als je dat wilt, kun je gemengde spelling inschakelen:

```pawn
#define MIXED_SPELLINGS
#include <open.mp>
```

<br />

<hr />

- **warning 234: function is deprecated (symbol "GetPlayerPoolSize") This function is broken.**
- **warning 234: function is deprecated (symbol "GetVehiclePoolSize") This function is broken.**
- **warning 234: function is deprecated (symbol "GetActorPoolSize") This function is broken.**

Vervang `GetPlayerPoolSize()` door `MAX_PLAYERS`

Vervang `GetVehiclePoolSize()` door `MAX_VEHICLES`

Vervang `GetActorPoolSize()` door `MAX_ACTORS`

<hr />

- **warning 234: function is deprecated (symbol "SHA256_PassHash") Use BCrypt for hashing passwords**

Gebruik de plugin [samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt) voor wachtwoord-hashing. SHA-256 is niet veilig.

<hr />

- **warning 214: possibly a "const" array argument was intended: "?"**
- **warning 239: literal array/string passed to a non-const parameter**

Bijvoorbeeld:

```pawn
public MyFunction(string[])
// ->
public MyFunction(const string[])
```

<br />

<hr />

- **error 025: function heading differs from prototype**

Bijvoorbeeld:

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

Er is ook een upgrade-tool die probeert oude, ongetagde en const-onjuiste code te vinden en te upgraden.

https://github.com/openmultiplayer/upgrade

Al inbegrepen in de map `/qawno/upgrader`.

:::

## Runtime-fouten en -waarschuwingen

```
[Info] Couldn't announce legacy network to open.mp list.
[Info] [Server Error] Status: 406
[Info] [Server Error] Message: {"error":"failed to query server: socket read timed out"}
[Info] This won't affect the server's behaviour.
```

- Je server is niet toegankelijk vanaf de open.mp-website.
- Waarschijnlijk draai je de server lokaal.
- De firewall heeft de verbinding geblokkeerd.

**Deze waarschuwing heeft geen invloed op het gedrag van de server.**

<br />

<hr />

```
[Warning] Insufficient specifiers given to `format`: "?" < 1
```

Het aantal specifiers is kleiner dan het aantal argumenten dat je aan `format` doorgeeft. Bijvoorbeeld:

```pawn
new string[32];
new mp[32] = ".MP";

format(string, sizeof(string), "OPEN", mp);
// [Warning] Insufficient specifiers given to `format`: "OPEN" < 1

// Correct is:
format(string, sizeof(string), "OPEN%s", mp);
//                                  ^^
```

## Nuttige documenten

Bekijk de nieuwe scriptingfuncties en callbacks: https://www.open.mp/docs/server/omp-functions

Als Pawn helemaal nieuw voor je is: [readme-beginner](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-beginner.md)

Als je al wat ervaring hebt met Pawn: [readme-intermediate](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-intermediate.md)

Als je een expert bent: [readme-expert](https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-expert.md)

Blogpost: [Porting to open.mp](https://www.open.mp/blog/porting)

## Hulp

Als je nog steeds problemen hebt met het draaien van de server, wordt dan lid van de officiële open.mp-Discord: https://discord.gg/samp

Stel je vraag in het kanaal [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790).


