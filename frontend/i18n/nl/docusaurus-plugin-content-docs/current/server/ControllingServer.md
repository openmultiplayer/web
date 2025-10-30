---
title: "Een server bedienen"
sidebar_label: "Een server bedienen"
description: Handige commands om je server te beheren.
---

## Gamemode wisselen

### Een custom/gedownloade gamemode draaien

- Open de map waar je de server hebt geïnstalleerd (bijv.: `/Rockstar Games/GTA San Andreas/server`)
- Plaats het gedownloade/gecompileerde `.amx`-bestand in de map `gamemodes` van je server
- Gebruik RCON om de mode te wisselen
- Of voeg de nieuwe mode toe aan de rotatie

### Filterscripts gebruiken

Hetzelfde als een custom gamemode draaien, behalve:

- Plaats de `.amx` in de map `filterscripts`
- Voeg dit toe aan `server.cfg`: `filterscripts <scriptname>`

## Je server voorzien van een wachtwoord

- Als je een password wilt instellen zodat alleen vrienden kunnen joinen, voeg dit toe aan [server.cfg](server.cfg):

```
password whatever
```

- Hiermee is je server met het wachtwoord 'whatever' beschermd – verander dat natuurlijk naar iets eigens
- Je kunt het password ook in-game aanpassen met `/rcon password nieuwwachtwoord`
- Je verwijdert het password met `/rcon password 0`, of door de server te herstarten

## RCON gebruiken

### Inloggen

Je kunt inloggen terwijl je in-game bent met `/rcon login password`, of buiten de game via de RCON-modus in de [Remote Console](RemoteConsole).

Het password is hetzelfde als je in [server.cfg](server.cfg) hebt ingesteld.

### Bans toevoegen

##### samp.ban

`samp.ban` is het bestand waarin bans worden opgeslagen, met o.a. deze info:

- IP
- Datum
- Tijd
- Naam (naam van persoon of reden, zie [BanEx](../../functions/BanEx))
- Type ban

Een ban toevoegen doe je door een regel te plaatsen als:

```
IP_HERE [28/05/09 | 13:37:00] PLAYER - BAN REASON
```

Op de plek van `IP_HERE` zet je het IP dat je wilt bannen.

##### Ban() function

De functie [Ban](../scripting/functions/Ban) kun je vanuit een script gebruiken om een speler te bannen. De functie [BanEx](../scripting/functions/BanEx) voegt optioneel een reden toe, zoals:

```
13.37.13.37 [28/05/09 | 13:37:00] Cheater - INGAME BAN
```

##### RCON ban command

Het RCON-commando voor bannen (`/rcon ban` in-game of `ban` in de console) bannt een specifieke speler op je server. Voor een IP ban zie hieronder.

Typ simpelweg:

```
# Ingame:
/rcon ban PLAYERID

# Console:
ban PLAYERID
```

##### banip

Het RCON-commando `banip` (`/rcon banip` in-game of `banip` in de console) bannt een specifiek IP-adres. Voor een speler-ID, zie de vorige sectie. Wildcards voor rangebans worden geaccepteerd.

Typ simpelweg:

```
# Ingame:
/rcon banip IP

# Console:
banip IP
```

### Bans verwijderen

Als iemand geband is, kun je op twee manieren unbannen:

- Regel verwijderen uit `samp.ban`
- Het RCON-commando `unbanip`

#### samp.ban

`samp.ban` staat in je SA-MP-servermap en bevat regels met o.a.:

- IP
- Datum
- Tijd
- Naam (naam van persoon of reden, zie [BanEx](../scripting/functions/BanEx))
- Type ban (INGAME, IP BAN, etc.)

Voorbeelden:

```
127.8.57.32 [13/06/09 | 69:69:69] NONE - IP BAN
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

Unban door de regel te verwijderen, en voer daarna het RCON-commando `reloadbans` uit zodat de server `samp.ban` opnieuw inleest.

#### unbanip

Het RCON-commando `unbanip` kan in-game of vanuit de serverconsole (zwarte box) gebruikt worden. Unban een IP met `/rcon unbanip IP_HERE` in-game of `unbanip IP_HERE` in de console.

Voorbeeld:

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

```
# Ingame:
/rcon unbanip 13.37.13.37

# Console
unbanip 13.37.13.37
```

Unban uitgevoerd? Gebruik daarna RCON `reloadbans` zodat de server `samp.ban` opnieuw leest.

#### reloadbans

`samp.ban` bevat de IP's die momenteel geband zijn. Dit bestand wordt bij serverstart ingelezen. Als je een IP/persoon unbant, MOET je het RCON-commando `reloadbans` uitvoeren zodat `samp.ban` opnieuw wordt ingelezen en ze weer kunnen joinen.

### RCON-commands

Typ `cmdlist` voor commands (of `varlist` voor variables) via RCON in-game (`/rcon cmdlist`).

Dit zijn de commands die je als admin kunt gebruiken:

| Command                           | Description                                                                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                   | Toont een lijst met beschikbare commands.                                                                                                            |
| `/rcon varlist`                   | Toont een lijst met de huidige variables.                                                                                                            |
| `/rcon exit`                      | Sluit de server af.                                                                                                                                  |
| `/rcon echo [text]`               | Print `[text]` in de serverconsole (NIET de client-console in-game).                                                                                 |
| `/rcon hostname [name]`           | Wijzigt de hostname-tekst (_voorbeeld: `/rcon hostname my server`_).                                                                                 |
| `/rcon gamemodetext [name]`       | Wijzigt de gamemode-tekst (_voorbeeld: `/rcon gamemodetext my gamemode`_).                                                                           |
| `/rcon mapname [name]`            | Wijzigt de mapnaam-tekst (_voorbeeld: `/rcon mapname San Andreas`_).                                                                                 |
| `/rcon exec [filename]`           | Voert het opgegeven cfg-bestand uit (_voorbeeld: `/rcon exec blah.cfg`_).                                                                            |
| `/rcon kick [ID]`                 | Kickt de player met de opgegeven ID (_voorbeeld: `/rcon kick 2`_).                                                                                   |
| `/rcon ban [ID]`                  | Bannt de player met de opgegeven ID (_voorbeeld: `/rcon ban 2`_).                                                                                    |
| `/rcon changemode [mode]`         | Wisselt naar de opgegeven gamemode (_voorbeeld: `/rcon changemode sftdm`_).                                                                          |
| `/rcon gmx`                       | Laadt de volgende gamemode uit [server.cfg](server.cfg).                                                                                              |
| `/rcon reloadbans`                | Laadt `samp.ban` opnieuw (lijst met gebande IP's). Gebruik dit na unbannen.                                                                           |
| `/rcon reloadlog`                 | Laadt `server_log.txt` opnieuw. Handig voor automatische logrotatie. Op Linux ook te triggeren met het `SIGUSR1`-signaal.                             |
| `/rcon say`                       | Toont een bericht in de client-console van spelers (bijv. `/rcon say hello` toont `Admin: hello`).                                                    |
| `/rcon players`                   | Toont de players in de server (met naam, IP en ping).                                                                                                 |
| `/rcon banip [IP]`                | Bannt het opgegeven IP (_voorbeeld: `/rcon banip 127.0.0.1`_).                                                                                        |
| `/rcon unbanip [IP]`              | Unbannt het opgegeven IP (_voorbeeld: `/rcon unbanip 127.0.0.1`_).                                                                                    |
| `/rcon gravity`                   | Wijzigt de gravity (_voorbeeld: `/rcon gravity 0.008`_).                                                                                              |
| `/rcon weather [ID]`              | Wijzigt het weather (_voorbeeld: `/rcon weather 1`_).                                                                                                 |
| `/rcon loadfs`                    | Laadt het opgegeven filterscript (_voorbeeld: `/rcon loadfs adminfs`_).                                                                               |
| `/rcon weburl [server url]`       | Wijzigt de server-URL in de masterlists/SA-MP client.                                                                                                 |
| `/rcon unloadfs`                  | Unloadt het opgegeven filterscript (_voorbeeld: `/rcon unloadfs adminfs`_).                                                                           |
| `/rcon reloadfs`                  | Reloadt het opgegeven filterscript (_voorbeeld: `/rcon reloadfs adminfs`_).                                                                           |
| `/rcon rcon\_password [PASSWORD]` | Wijzigt het RCON-wachtwoord.                                                                                                                          |
| `/rcon password [password]`       | Zet/reset het serverpassword.                                                                                                                         |
| `/rcon messageslimit [count]`     | Wijzigt het max. aantal messages per seconde per client (standaard 500).                                                                              |
| `/rcon ackslimit [count]`         | Wijzigt de acks-limit (standaard 3000).                                                                                                               |
| `/rcon messageholelimit [count]`  | Wijzigt de message holes-limit (standaard 3000).                                                                                                      |
| `/rcon playertimeout [limit m/s]` | Wijzigt de timeout (ms) wanneer een player geen packets verstuurt (standaard 1000).                                                                   |
| `/rcon language [language]`       | Wijzigt de servertaal (_voorbeeld: `/rcon language English`_). Wordt getoond in de serverbrowser.                                                     |

De vier limieten/counters hierboven zijn bedoeld om tools tegen te gaan die SA-MP-servers laten vastlopen of crashen. Stel ze in naar wat bij jouw server past. Standaarden zijn prima; als je onterechte kicks ziet, verhoog de waarden zodat legitieme spelers niet geraakt worden.

### Relevante callbacks en functies

De volgende callbacks en functies zijn gerelateerd en mogelijk nuttig:

#### Callbacks

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt): wordt aangeroepen wanneer iemand probeert in te loggen op RCON.

#### Functions

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin): checkt of een speler is ingelogd op RCON.
- [SendRconCommand](../scripting/functions/SendRconCommand): stuurt een RCON-command vanuit je script.


