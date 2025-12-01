---
title: config.json
sidebar_label: config.json
description: open.mp serverconfiguratiebestand.
---

## Beschrijving

- `config.json` is het serverconfiguratiebestand waarmee je allerlei settings van je open.mp-server kunt aanpassen.
- Je kunt nog steeds het bestand [server.cfg](server.cfg) gebruiken op je open.mp-server, maar `config.json` heeft meer opties en verdient de voorkeur.

<br />

<hr />

<br />

:::tip

Je kunt je `server.cfg` eenvoudig omzetten naar `config.json`.

Open een command prompt in je servermap en voer het volgende commando uit, druk daarna Enter:

```bash
# Windows
omp-server --dump-config

# Linux
./omp-server --dump-config
```

**Let op:** Als er al een `config.json` in de map staat, verwijder die dan eerst voordat je bovenstaande commando uitvoert.

:::

<br />

:::tip

Een standaard `config.json` genereren kan zo:

```bash
# Windows
omp-server --default-config

# Linux
./omp-server --default-config
```

:::

<hr />

## Announce

| Key      | Type | Default value | Read-only | Rule | Effect                                                                                                                 |
| -------- | ---- | ------------- | --------- | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| announce | bool | true          | ❌        | ❌   | Schakelt aanmelding bij de open.mp-masterlist in. '**true**' om in te schakelen of '**false**' om uit te schakelen.   |

## Zelfgemaakte modellen (Artwork)

| Key                     | Type   | Default value | Read-only | Rule | Effect                                                                                                                  |
| ----------------------- | ------ | ------------- | --------- | ---- | ----------------------------------------------------------------------------------------------------------------------- |
| artwork.cdn             | string |               | ✅        | ❌   | Een HTTP-adres voor een externe modelserver.                                                                            |
| artwork.enable          | bool   | true          | ✅        | ✅   | Schakelt gebruik van zelfgemaakte modellen uit de map `/models` in. '**true**' = aan, '**false**' = uit.               |
| artwork.models_path     | string | models        | ✅        | ❌   | Het pad waar de zelfgemaakte modellen staan.                                                                            |
| artwork.port            | int    | 7777          | ✅        | ❌   |                                                                                                                         |
| artwork.web_server_bind | string |               | ✅        | ❌   |                                                                                                                         |

## Chatfilter

| Key               | Type | Default value | Read-only | Rule | Effect                                                                                                                                                                                    |
| ----------------- | ---- | ------------- | --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chat_input_filter | bool | true          | ❌        | ❌   | Schakelt de chat input filter. Zet uit om karakters zoals % in de chat te kunnen gebruiken. Zie ook [ToggleChatTextReplacement](../scripting/functions/ToggleChatTextReplacement).        |

## Query serverinfo

| Key          | Type | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                  |
| ------------ | ---- | ------------- | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enable_query | bool | true          | ❌        | ❌   | Toont/verbergt serverinformatie in de serverbrowser. '**true**' = aan, '**false**' = uit. Spelers kunnen nog steeds joinen; alleen wordt er geen info getoond in de browser.                                                      |

## Game

| Key                                | Type   | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------- | ------ | ------------- | --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| game.allow_interior_weapons        | bool   | true          | ❌        | ❌   | Bepaalt of weapons in interiors zijn toegestaan. '**true**' om toe te staan, '**false**' om te blokkeren.                                                                                                                                                                                                                            |
| game.chat_radius                   | float  | 200.0         | ❌        | ❌   | Stelt een radius in voor chat. Alleen players binnen deze afstand zien het bericht. Dit beïnvloedt ook de zichtafstand van players op de map.                                                                                                                                                                                        |
| game.death_drop_amount             | int    | 0             | ❌        | ❌   |                                                                                                                                                                                                                                                                                                                                                                             |
| game.gravity                       | float  | 0.008         | ❌        | ✅   | De globale zwaartekracht van de server.                                                                                                                                                                                                                                                                                                                                     |
| game.group_player_objects          | bool   | false         | ❌        | ❌   | In SA:MP delen per-player- en globale objects één ID-pool. Met grouping probeert de server een al gebruikt per-player-objectslot te hergebruiken bij een andere speler als dat kan.                                                                                                                                                |
| game.lag_compensation_mode         | int    | 1             | ✅        | ✅   | **0**: Volledig uit.<br /><br />**1**: Volledig aan.<br /><br />**2**: Alleen positie-compensatie (rotatie wordt niet gecompenseerd).                                                                                                                                                                                                                                      |
| game.map                           | string |               | ❌        | ✅   | De mapnaam die in de serverbrowser verschijnt. Kan alles zijn, bijv. "My Stunt Map".                                                                                                                                                                                                                                                                                      |
| game.mode                          | string |               | ❌        | ❌   | De mode die in de serverbrowser wordt getoond. [SetGameModeText](../scripting/functions/SetGameModeText) heeft hetzelfde effect en overschrijft de waarde uit `config.json`. Voor verschillende gamemodes kun je die functie gebruiken.                                                                                              |
| game.nametag_draw_radius           | float  | 70.0          | ❌        | ❌   | Maximale afstand voor het tonen van nametags.                                                                                                                                                                                                                                                                                                                               |
| game.player_marker_draw_radius     | float  | 250.0         | ❌        | ❌   | Stelt de marker radius voor alle spelers in.                                                                                                                                                                                                                                                                                                                                |
| game.player_marker_mode            | int    | 1             | ❌        | ❌   | **0**: Marker mode off<br /><br />**1**: Marker mode global<br /><br />**2**: Marker mode streamed<br /><br />[Marker Modes](../scripting/resources/markermodes)                                                                                                                                                                                                            |
| game.time                          | int    | 12            | ❌        | ✅   | De globale tijd die de server gebruikt en die in de serverbrowser wordt getoond.                                                                                                                                                                                                                                                                                            |
| game.use_all_animations            | bool   | false         | ✅        | ❌   | Schakelt animaties in die in sommige versies ontbreken. '**true**' om alles in te schakelen, '**false**' om uit te schakelen.                                                                                                                                                                                                                                              |
| game.use_chat_radius               | bool   | false         | ❌        | ❌   | Chat radius aan/uit.                                                                                                                                                                                                                                                                                                                                                        |
| game.use_entry_exit_markers        | bool   | true          | ✅        | ❌   | Schakelt alle interior-ingangen en -uitgangen in (gele pijlen bij deuren).                                                                                                                                                                                                                                                                                                   |
| game.use_instagib                  | bool   | false         | ❌        | ❌   | Oude instelbare variabele (client-side niet meer beschikbaar). Instagib = one shot one kill.                                                                                                                                                                                                                                                                                |
| game.use_manual_engine_and_lights  | bool   | false         | ❌        | ❌   | Handmatige controle over vehicle engines en lights. **false**: voorkomt automatisch engine aan/uit en headlights bij donker.                                                                                                                                                                                                                                                 |
| game.use_nametag_los               | bool   | true          | ❌        | ❌   | Line-Of-Sight voor nametags, health- en armor-balken.                                                                                                                                                                                                                                                                                                                        |
| game.use_nametags                  | bool   | true          | ❌        | ❌   | Tekent nametags, health- en armor-balken boven players.                                                                                                                                                                                                                                                                                                                      |
| game.use_player_marker_draw_radius | bool   | false         | ❌        | ❌   | Player markers (blips op de radar) aan/uit.                                                                                                                                                                                                                                                                                                                                  |
| game.use_player_ped_anims          | bool   | false         | ❌        | ❌   | Gebruikt standaard player-walk anim (CJ-skin) in plaats van custom anims per skin (bijv. skater).                                                                                                                                                                                                                                                                            |
| game.use_stunt_bonuses             | bool   | true          | ❌        | ❌   | Schakelt stuntbonussen voor alle players in/uit. Ingeschakeld: beloningen voor stunts (bijv. wheelie).                                                                                                                                                                                                                                                                       |
| game.use_vehicle_friendly_fire     | bool   | false         | ❌        | ❌   | Friendly fire voor team vehicles. Players kunnen team-vehicles geen damage doen.                                                                                                                                                                                                                                                                                              |
| game.use_zone_names                | bool   | false         | ❌        | ❌   | Toont zone-/areanamen zoals "Vinewood" of "Doherty" rechtsonder in beeld bij binnenkomst van een area.                                                                                                                                                                                                                                                                     |
| game.validate_animations           | bool   | true          | ❌        | ❌   | Valideert animaties voor players.                                                                                                                                                                                                                                                                                                                                           |
| game.vehicle_respawn_time          | int    | 10000         | ❌        | ❌   | Respawn time van vehicles in milliseconden (standaard 10 seconden).                                                                                                                                                                                                                                                                                                          |
| game.weather                       | int    | 10            | ❌        | ✅   | Het globale weer dat de server gebruikt en dat in de serverbrowser wordt getoond.                                                                                                                                                                                                                                                                                            |

## Language

| Key      | Type   | Default value | Read-only | Rule | Effect                                                                                                                    |
| -------- | ------ | ------------- | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| language | string |               | ❌        | ❌   | De taal die in de serverbrowser verschijnt. Spelers kunnen hiermee op taal filteren in de serverbrowser.                  |

## Logging

| Key                             | Type   | Default value         | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------- | ------ | --------------------- | --------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| logging.enable                  | bool   | true                  | ❌        | ❌   | Logging aan/uit.                                                                                                                                                                                                                                                                                                                                                                |
| logging.file                    | string | log.txt               | ✅        | ❌   | Pad en bestandsnaam voor de serverlog.                                                                                                                                                                                                                                                                                                                                          |
| logging.log_chat                | bool   | true                  | ❌        | ❌   | Toont/verbergt player chat in de serverconsole. Handig om logbloat te voorkomen of als je een eigen chatloggingoplossing hebt. '**true**' = aan, '**false**' = uit.                                                                                                                                |
| logging.log_connection_messages | bool   | true                  | ❌        | ❌   | Player- en NPC-join-berichten aan/uit.                                                                                                                                                                                                                                                                                                                                          |
| logging.log_cookies             | bool   | false                 | ❌        | ❌   | Logt connection cookies van nieuw verbindende players. '**true**' = aan, '**false**' = uit.                                                                                                                                                                                                                                              |
| logging.log_deaths              | bool   | true                  | ❌        | ❌   | Toont/verbergt player deaths in de console. '**true**' = aan, '**false**' = uit.                                                                                                                                                                                                                                                         |
| logging.log_queries             | bool   | false                 | ❌        | ❌   | Logt alle queries die door players naar de server worden gestuurd. Nuttig tijdens DDoS-aanvallen.                                                                                                                                                                                                                                        |
| logging.log_sqlite              | bool   | false                 | ❌        | ❌   | Logt sqlite `DB_*`-fouten in de console.                                                                                                                                                                                                                                                                                                                                        |
| logging.log_sqlite_queries      | bool   | false                 | ❌        | ❌   | Logt alle sqlite `DB_Query`-aanroepen, inclusief de querystring.                                                                                                                                                                                                                                                                                                                |
| logging.timestamp_format        | string | [%Y-%m-%dT%H:%M:%S%z] | ✅        | ❌   | Het tijdstempelformaat. Gebaseerd op [strftime](http://cplusplus.com/reference/clibrary/ctime/strftime/) (C/C++). Voorbeelden:<br /><br />**[%H:%M:%S]** Alleen tijd.<br /><br />**[%d/%m/%Y %H:%M:%S]** Datum als dd/mm/jjjj, gevolgd door tijd uur:minuut:seconde.                          |
| logging.use_prefix              | bool   | true                  | ❌        | ❌   | Prefixes zoals `[Info]` wel/niet tonen bij elk consolebericht. '**true**' = aan, '**false**' = uit.                                                                                                                                                                                                                                       |
| logging.use_timestamp           | bool   | true                  | ❌        | ❌   | Tijdstempel wel/niet tonen bij elk consolebericht. '**true**' = aan, '**false**' = uit.                                                                                                                                                                                                                                                   |

## NPC's en players

| Key         | Type | Default value | Read-only | Rule | Effect                                                                                                                                                                    |
| ----------- | ---- | ------------- | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| max_bots    | int  | 0             | ❌        | ❌   | Maximaal aantal NPC's dat je server kan bevatten (gebruikt spelerslots).                                                                                                  |
| max_players | int  | 50            | ✅        | ❌   | Maximaal aantal players op je server. Maximum is 1000 en minimum is 1.                                                                                                    |

## Hostname

| Key  | Type   | Default value  | Read-only | Rule | Effect                                                                                       |
| ---- | ------ | -------------- | --------- | ---- | -------------------------------------------------------------------------------------------- |
| name | string | open.mp server | ❌        | ❌   | De naam die in de serverbrowser en bij het verbinden wordt getoond.                          |

## Network

| Key                             | Type   | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                            |
| ------------------------------- | ------ | ------------- | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| network.acks_limit              | int    | 3000          | ❌        | ❌   |                                                                                                                                                                                                                                                                                                   |
| network.aiming_sync_rate*       | int    | 30            | ✅        | ❌   | Milliseconden tussen updates naar de server tijdens weapon fire.                                                                                                                                                                                                                                  |
| network.allow_037_clients       | bool   | true          | ❌        | ❌   | Staat players met 0.3.7-client toe om te joinen.                                                                                                                                                                                                                                                  |
| network.use_omp_encryption      | bool   | false         | ❌        | ❌   | Schakelt open.mp-pakket-encryptie in voor extra bescherming (het standaardprotocol blijft werken).                                                                                                                                                                                                |
| network.bind                    | string |               | ✅        | ❌   | Het IP-adres dat de server moet gebruiken. Dwingt de server dit adres te gebruiken i.p.v. automatisch een vrij adres te kiezen. Moet matchen met een netwerkkaart op de server. Handig voor meerdere servers op dezelfde poort op dezelfde machine.                                              |
| network.cookie_reseed_time      | int    | 300000        | ❌        | ❌   | Milliseconden tussen updates van de cookie-seedwaarde.                                                                                                                                                                                                                                           |
| network.grace_period            | int    | 5000          | ❌        | ❌   | Grace period voor onbeperkte connecties vanaf hetzelfde IP na serverstart, met name voor NPC's. Standaard: 5 seconden.                                                                                                                                                                          |
| network.http_threads            | int    | 50            | ❌        | ❌   |                                                                                                                                                                                                                                                                                                   |
| network.in_vehicle_sync_rate*   | int    | 30            | ✅        | ❌   | Milliseconden tussen updates naar de server wanneer een player in een vehicle zit.                                                                                                                                                                                                               |
| network.limits_ban_time         | int    | 60000         | ❌        | ❌   | Raknet ban time voor slechte connect-packets in milliseconden (wanneer acks/message limit bereikt is).                                                                                                                                                                                           |
| network.message_hole_limit      | int    | 3000          | ❌        | ❌   | Netwerkniveau-instelling tegen DoS-aanvallen.                                                                                                                                                                                                                                                                                            |
| network.messages_limit          | int    | 500           | ❌        | ❌   | Maximaal aantal messages dat een user per seconde kan sturen.                                                                                                                                                                                                                                    |
| network.minimum_connection_time | int    | 0             | ❌        | ❌   | Wachtijd in milliseconden voordat een volgende inkomende connectie wordt geaccepteerd. Gebruik dit alleen bij connection-floods.                                                                                                                           |
| network.mtu                     | int    | 576           | ✅        | ❌   | Laat dit op de standaardwaarde. Zie: https://en.wikipedia.org/wiki/Maximum_transmission_unit                                                                                                                                                                                                      |
| network.multiplier              | int    | 10            | ❌        | ❌   |                                                                                                                                                                                                                                                                                                   |
| network.on_foot_sync_rate*      | int    | 30            | ✅        | ❌   | Milliseconden tussen updates naar de server wanneer een player te voet is.                                                                                                                                                                                                                       |
| network.player_marker_sync_rate | int    | 2500          | ✅        | ❌   | Milliseconden tussen updates van player movement-markers.                                                                                                                                                                                                                                        |
| network.player_timeout          | int    | 10000         | ❌        | ❌   | Milliseconden waarna een player time-out krijgt bij het niet verzenden van data.                                                                                                                                                                                                                 |
| network.port                    | int    | 7777          | ✅        | ❌   | De poort die de server gebruikt. Je moet [Port Forward](http://www.portforward.com/) instellen voor spelers buiten je LAN.                                                                                                                                                                       |
| network.public_addr             | string |               | ✅        | ❌   | Voor machines met meerdere IP's: als het adres in `bind` anders is, stel je hier een nieuw adres in (voor DL-servers).                                                                                                                                                                           |
| network.stream_radius           | float  | 200.0         | ❌        | ❌   | Afstand op het X,Y-vlak waarop players server-entiteiten binnen streamen. Max **400.0**, min **50.0**. Hoger = meer zicht, maar meer client processing en potentieel meer bandbreedte.                                                                     |
| network.stream_rate             | int    | 1000          | ❌        | ❌   | Milliseconden voordat instreamen van server-entiteiten opnieuw getest wordt per player. Max **5000**, min **500**. Lager = meer serverprocessing omdat streamcondities vaker worden gecheckt.                                                              |
| network.time_sync_rate          | int    | 30000         | ❌        | ❌   | Frequentie waarmee de game time van een player wordt bijgewerkt, in milliseconden.                                                                                                                                                                                                                |
| network.use_lan_mode            | bool   | false         | ❌        | ❌   | Verouderde variabele, heeft geen effect.                                                                                                                                                                                                                                                          |

> [*] Lagere waarden voor `aiming_sync_rate`, `in_vehicle_sync_rate` en `on_foot_sync_rate` verbeteren sync performance, maar gebruiken meer bandbreedte.

## Server lock

| Key      | Type   | Default value | Read-only | Rule | Effect                                                                                                                      |
| -------- | ------ | ------------- | --------- | ---- | --------------------------------------------------------------------------------------------------------------------------- |
| password | string |               | ❌        | ❌   | Het wachtwoord om de server te locken. Alleen players die dit weten, kunnen joinen.                                         |

## Pawn

| Key                 | Type         | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------- | ------------ | ------------- | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| pawn.legacy_plugins | list, string | []            | ✅        | ❌   | De .dll- of .so-bestanden in de map `/plugins` die als plugin geladen moeten worden. Voorbeeld: `["mysql", "streamer"]`.                                                                                                                                                                                                            |
| pawn.main_scripts   | list, string | ["test 1"]   | ✅        | ❌   | De .amx-bestanden in de map `/gamemodes` die als gamemode moeten draaien.                                                                                                                                                                                                                                                                                                      |
| pawn.side_scripts   | list, string | []            | ✅        | ❌   | De .amx-bestanden in de map `/filterscripts` die als filterscript moeten draaien (achtergrondscripts met extra features). Voorbeeld: `["filterscripts/Race_System"]`                                                                                                                            |

## RCON

| Key                 | Type   | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                      |
| ------------------- | ------ | ------------- | --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rcon.allow_teleport | bool   | false         | ✅        | ❌   | Bepaalt of RCON-admins naar hun waypoint geteleporteerd worden wanneer ze er een zetten. '**true**' = aan, '**false**' = uit.                                                                                                                               |
| rcon.enable         | bool   | false         | ✅        | ❌   | Schakelt [Remote Console](RemoteConsole) in. '**true**' = aan, '**false**' = uit.                                                                                                                                                                          |
| rcon.password       | string | changeme      | ❌        | ❌   | Wachtwoord voor serveradministratie en remote console (RCON). Verander dit naar iets sterks; anders kunnen anderen je server overnemen. Je server start NIET als `changeme` het RCON-wachtwoord is!                                                        |

## Sleep en ticks

| Key           | Type  | Default value | Read-only | Rule | Effect                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ----- | ------------- | --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sleep         | float | 5.0           | ❌        | ❌   | Milliseconden dat de main open.mp- en raknet-netwerkthread idle "slaapt" per sync-cyclus. Hoger = minder serverprocessing maar mindere sync; lager = meer processing maar betere sync. Pas dit alleen aan bij hoge spelersaantallen of fps-stabiliteitsproblemen.                                                                                                                                    |
| use_dyn_ticks | bool  | true          | ✅        | ❌   | Dynticks houdt de tickrate constant door indien nodig meer CPU te gebruiken. Wordt berekend met de `sleep`-waarde: `1000 / 5 = 200` ticks/s bij sleep 5. open.mp past intern `sleep` on-the-fly aan op basis van exectijd per tick om ~200 TPS te houden; lagere sleep betekent meer CPU (meestal prima als je servercode goed is).                                                                      |

## Web URL

| Key     | Type   | Default value | Read-only | Rule | Effect                                                                 |
| ------- | ------ | ------------- | --------- | ---- | ---------------------------------------------------------------------- |
| website | string | open.mp       | ❌        | ✅   | De website waar spelers meer info over de server kunnen vinden.        |

## Discord

| Key            | Type   | Default value           | Read-only | Rule | Effect                                                              |
| -------------- | ------ | ----------------------- | --------- | ---- | ------------------------------------------------------------------- |
| discord.invite | string | https://discord.gg/samp | ❌        | ❌   | De invite-URL van je server Discord die in de OMP launcher verschijnt. |

![](https://i.ibb.co/cTRq5pr/294345382-54d77460-da32-458e-bcfa-10ebec90fbfa.png)

## Banners

| Key           | Type   | Default value | Read-only | Rule | Effect                                                                  |
| ------------- | ------ | ------------- | --------- | ---- | ----------------------------------------------------------------------- |
| banners.light | string |               | ❌        | ❌   | Light banner-URL die in de OMP launcher verschijnt.                     |
| banners.dark  | string |               | ❌        | ❌   | Dark banner-URL die in de OMP launcher verschijnt.                      |

![](https://i.ibb.co/86T8wYG/image.png)

## Serverlogo

| Key  | Type   | Default value | Read-only | Rule | Effect                                                                               |
| ---- | ------ | ------------- | --------- | ---- | ------------------------------------------------------------------------------------ |
| logo | string |               | ❌        | ❌   | Logo-URL van je server die in de OMP launcher en Discord-status verschijnt.          |

![](https://i.ibb.co/VQZch1Y/image-1.png)

<br />

:::note

- Waarden gemarkeerd als "Read-only" kunnen niet tijdens runtime worden gewijzigd. Alle andere waarden kunnen (tijdelijk) worden aangepast via [SendRconCommand](../scripting/functions/SendRconCommand) of via de serverconsole.

- Waarden gemarkeerd als "Rule" worden in de serverbrowser in de sectie Rules weergegeven.

:::


