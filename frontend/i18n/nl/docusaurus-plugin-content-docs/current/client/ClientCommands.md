---
title: "Client commands"
sidebar_label: "Client commands"
description: Lijst van alle client commands.
---

## Commands

| Command        | Beschrijving                                                                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /quit (/q)     | Dit command spreekt voor zich: het sluit het spel af. Je kunt ook /q gebruiken; dat is hetzelfde command, maar korter. |
| /save          | Waarschijnlijk het meest gebruikte standaard command, en ook de nuttigste. Met /save wordt je huidige positie opgeslagen in `savedpositions.txt` in je user files map. Van daaruit kun je het in scripts gebruiken.                                                                                                              |
| /rs            | /rs (Raw Save) is als /save, maar slaat alleen je huidige positie en facing angle op in `rawpositions.txt` in je user files map. Er wordt geen extra info opgeslagen zoals class en weapons.                                                                                                                                    |
| /interior      | Even belangrijk als /save: dit command toont simpelweg je huidige interior in de chat.                                                                                                                                                                                                                                           |
| /vw            | Even belangrijk als /save: dit command toont simpelweg je huidige virtual world in de chat.                                                                                                                                                                                                                                      |
| /fpslimit      | Stelt de FPS-limiet (frames per seconde) voor je game in. Hoe hoger de limiet, hoe vloeiender je game. Heeft geen effect als de frameratelimiter in de graphic options is uitgeschakeld. De limiet ligt tussen 20 en 90 en is standaard 50. Stelt de `fpslimit` optie in `sa-mp.cfg` in.                                     |
| /pagesize      | Hiermee kies je hoeveel regels chat er worden getoond. Dit kan 10 tot 20 regels zijn. Standaard is pagesize 10. Stelt de `pagesize` optie in `sa-mp.cfg` in.                                                                                                                                                                   |
| /headmove      | Bepaalt of hoofden van spelers meebewegen in de kijkrichting. Dit wordt lokaal afgehandeld; andere spelers zien je hoofd nog steeds bewegen. Stelt de `disableheadmove` optie in `sa-mp.cfg` in.                                                                                                                               |
| /timestamp     | Toont/verbergt de tijd naast alle berichten in de chatbox. De getoonde tijd is die van je computer, niet die van de server. Stelt de `timestamp` optie in `sa-mp.cfg` in.                                                                                                                                                     |
| /dl            | DL staat voor debug labels. Dit command togglet debug labels op vehicles, die vehicle ID, model, health, of het vehicle preloaded is, afstand tot player, trailer, beschikbare seats, current position en spawn position tonen.                                                                                                |
| /nametagstatus | Indien ingeschakeld (standaard), zien spelers een klein hourglass-icoon naast de nametag van gepauzeerde players. Dit omvat minimizen (alt-tab), het pause menu (ESC), lost connection (crash/timeout) en screenshots die het spel >3 sec. bevriezen. Stelt de `nonametagstatus` optie in `sa-mp.cfg` in.                    |
| /mem           | Toont het huidige memory usage (meestal wordt 128 MB getoond).                                                                                                                                                                                                                                                                 |
| /audiomsg      | Schakelt het bericht in/uit dat verschijnt wanneer een URL naar een client wordt gestreamd. Stelt de `audiomsgoff` optie in `sa-mp.cfg` in.                                                                                                                                                                                     |
| /fontsize      | Wijzigt de font size van de UI (chat, dialogs etc.). Geldige `fontsize` is -3 t/m 5.                                                                                                                                                                                                                                            |
| /ctd           | Toegevoegd in SA-MP 0.3.7 RC2. Schakelt client debugging van de player camera target in.                                                                                                                                                                                                                                        |
| /rcon          | Meer serverspecifiek dan client. Wordt gebruikt om RCON commands uit te voeren. RCON is het ingebouwde adminsysteem. RCON staat voor [Remote Control](../server/ControllingServer#using-rcon).                                                                                                                                |
| /hudscalefix   | Toegevoegd in SA-MP 0.3.7 R3. Schakelt de radar scale fix in/uit, zodat de radar beter schaalt op widescreen resoluties (dus geen 'egg of finding' meer). Stelt de `nohudscale` optie in `sa-mp.cfg` in.                                                                                                                      |

## Bestand sa-mp.cfg

| Optie          | Beschrijving                                                                                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pagesize       | Zie /pagesize.                                                                                                                                                              |
| fpslimit       | Zie /fpslimit.                                                                                                                                                              |
| disableheadmove| Zie /headmove.                                                                                                                                                              |
| timestamp      | Zie /timestamp.                                                                                                                                                             |
| ime            | Bepaalt of de invoer van het chatvenster IME-tekstbewerking en taalwissel ondersteunt. 1 = aan, 0 = uit.                                                                    |
| audiomsgoff    | Zie /audiomsg.                                                                                                                                                              |
| multicore      | Schakelt gebruik van meerdere CPU-cores door de SA-MP-client in. Standaard 1 (GEBRUIKT meerdere cores). Zet op 0 bij muisproblemen.                                        |
| directmode     | Voor spelers met problemen met chattekstweergave: gebruikt de tragere direct-to-screen-tekstmodus. 0 = uit, 1 = aan.                                                        |
| audioproxyoff  | Als dit op 1 staat en er is een proxy ingesteld in Windows Internetopties, wordt die proxy niet gebruikt bij audiostreams in SA-MP.                                          |
| nonametagstatus| Zie /nametagstatus.                                                                                                                                                         |
| fontface       | Wijzigt het lettertype van chat, dialogen en scoreboard. Bijvoorbeeld `fontface="Comic Sans MS"`. Niet officieel ondersteund; kan problemen veroorzaken.                   |
| fontweight     | Schakelt vetgedrukte chatlettertypes. 0 = VET (standaard) en 1 = NORMAAL.                                                                                                   |
| nohudscale     | Toegevoegd in 0.3.7 R3. Zie /hudscalefix.                                                                                                                                   |


