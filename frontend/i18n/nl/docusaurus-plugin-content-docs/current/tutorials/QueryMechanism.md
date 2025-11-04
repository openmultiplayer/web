---
title: "SA:MP Query-mechanisme"
sidebar_label: "SA:MP Query-mechanisme"
---

## Introductie

Het SA:MP Query-mechanisme verstuurt serverstatistieken en -informatie (naam, ping, taal, online spelers, enz.). Hier staat hoe het werkt en hoe je het zonder de originele client kunt gebruiken.

## Queries

Queries zijn pure UDP-pakketten met geserialiseerde data.

In de lagere RakNet-socketlaag worden pakketten die beginnen met 53 41 4D 50 ("SAMP") anders behandeld. Zie de code: **[View Code](https://github.com/openmultiplayer/RakNet/blob/master/Source/SocketLayer.cpp#L371)**

## Geserialiseerde data

De payload: **"SAMP"** + **IP-octets** + **eerste poortbyte\*** + **tweede poortbyte** + **OPCODE**

Zie uitleg over IP-octets/poortbytes: [Link](http://penta2.ufrgs.br/trouble/ts_ip.htm).

| Byte size | Naam            |
| :-------: | :-------------- |
|     4     | "SAMP"         |
|     4     | IP Octets       |
|     1     | Port & 0xFF     |
|     1     | Port >> 8 & 0xFF|
|     1     | OPCODE          |

[C-voorbeeld](https://github.com/Louzindev/sampquery-c/blob/master/src/packet.c)

## OPCODE

Identifiers voor verzoektypes:

- **"i" (0x69):** Info (players, map, hostname, gamemode, language)
- **"r" (0x72):** Rules (instagib, gravity, weather, website URL, ...)
- **"c" (0x63):** Client list (namen en scores)
- **"d" (0x64):** Detail per player (ping, id, score, naam)
- **"x" (0x78):** RCON command (anders dan de rest)
- **"p" (0x70):** Ping/latency check met 4 pseudo-random bytes

## Response

Elke OPCODE geeft een response terug. De eerste 11 bytes zijn gelijk aan de request-header, daarna volgt de specifieke payload.

### Response-tabellen (`i`, `r`, `c`, `d`, `p`)

#### Type `i`

| Byte        | Key        | Breedte | Omschrijving                                             |
| ----------- | ---------- | ------- | -------------------------------------------------------- |
| 11          | Password   | 1       | 0 of 1 (password ingesteld)                              |
| 12-13       | Players    | 2       | Aantal online spelers                                    |
| 14-15       | MaxPlayers | 2       | Maximum aantal spelers                                   |
| 16-19       | (strlen)   | 4       | Lengte van hostname                                      |
| 20 + strlen | Hostname   | (strlen)| Hostname van de server                                   |
| 21-24       | (strlen)   | 4       | Lengte van gamemode                                      |
| 25 + strlen | Gamemode   | (strlen)| Gamemode                                                 |
| 26-29       | (strlen)   | 4       | Lengte van language                                      |
| 30 + strlen | Language   | (strlen)| Taal                                                     |

#### Type `r`

| Byte        | Key       | Breedte | Omschrijving                           |
| ----------- | --------- | ------- | -------------------------------------- |
| 11-12       | RuleCount | 2       | Aantal rules                           |
| 13          | (strlen)  | 1       | Lengte van rule-naam                   |
| 14 + strlen | Rulename  | (strlen)| Rule-naam                              |
| 15          | (strlen)  | 1       | Lengte van rule-waarde                 |
| 16 + strlen | RuleValue | (strlen)| Rule-waarde                            |

Herhaal vanaf byte 13 voor elke rule.

#### Type `c`

| Byte        | Key         | Breedte | Omschrijving                           |
| ----------- | ----------- | ------- | ------------------------------------- |
| 11-12       | PlayerCount | 2       | Aantal spelers                         |
| 13          | (strlen)    | 1       | Lengte van nickname                    |
| 14 + strlen | PlayerNick  | (strlen)| Spelernaam                             |
| 15-18       | Score       | 4       | Score                                  |

Herhaal vanaf byte 13 per speler.

#### Type `d`

| Byte        | Key         | Breedte | Omschrijving                           |
| ----------- | ----------- | ------- | ------------------------------------- |
| 11-12       | PlayerCount | 2       | Aantal spelers                         |
| 13          | PlayerID    | 1       | Speler-ID (0-255)                      |
| 14          | (strlen)    | 1       | Lengte van nickname                    |
| 15 + strlen | PlayerNick  | (strlen)| Spelernaam                             |
| 16-19       | Score       | 4       | Score                                  |
| 20-23       | Ping        | 4       | Ping                                   |

Herhaal vanaf byte 13 per speler.

#### Type `p`

| Byte | Key      | Breedte | Omschrijving                                        |
| ---- | -------- | ------- | --------------------------------------------------- |
| 11   | number 1 | 1       | Eerste pseudo-random byte                           |
| 12   | number 2 | 1       | Tweede                                              |
| 13   | number 3 | 1       | Derde                                               |
| 14   | number 4 | 1       | Vierde                                              |

## Codevoorbeeld in C

Er is een kleine C-lib beschikbaar om queries te doen: **[Repository](https://github.com/Louzindev/sampquery-c)**


