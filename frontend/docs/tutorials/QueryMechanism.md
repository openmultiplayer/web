---
title: "SA:MP Query Mechanism"
sidebar_label: "SA:MP Query Mechanism"
---

## Introduction

The SA:MP Query Mechanism is nothing more than the mechanism for transmitting server statistics and information, such as name, ping, language, online players, etc...

In this article I will document how this mechanism works, as well as teach you how to use it without needing the original client.

## Queries

Queries are pure UDP packets sent to the server address containing serialized data.

You may ask yourself: "But how does the server interpret query packets differently than those from the RakNet protocol?", and the answer is simple: in the low RakNet socket layer, packets that contain 53 41 4D 50 or translated into characters "SAMP" at the beginning, are treated in a different way. **[View Code](https://github.com/openmultiplayer/RakNet/blob/master/Source/SocketLayer.cpp#L371)**

## Serialized Data

The data transmitted in the packet is: **"SAMP"** + **IP octets** + **first port byte\*** + **second port byte** + **OPCODE**

If you have doubts about why to extract and what IP octets and port bytes are, see: [Link](http://penta2.ufrgs.br/trouble/ts_ip.htm).

| Byte size |       Name       |
| :-------: | :--------------: |
|     4     |      "SAMP"      |
|     4     |    IP Octets     |
|     1     |   Port & 0xFF    |
|     1     | Port >> 8 & 0xFF |
|     1     |      OPCODE      |

[Example in C](https://github.com/Louzindev/sampquery-c/blob/master/src/packet.c)

## OPCODE

OPCODE's are package identifiers, and each one represents a different request.

- **OPCODE "i" or 0x69:** This stands for information. This gets the amount of players in the server, the map name, and all the stuff like that. It's really useful for describing your server without changing anything.

- **OPCODE "r" or 0x72:** This stands for rules. 'Rules' when it comes to SA:MP includes the instagib, the gravity, weather, the website URL, and so on

- **OPCODE "c" or 0x63:** It stands for client list, this sends back to the server the players' name, and then the players' score. Just imagine it as a basic overview of all the players.

- **OPCODE "d" or 0x64:** This stands for detailed player information. With this, you can get everything from the ping to the player, the player ID (useful for admin scripts), the score again, and also the username.

- **OPCODE "x" or 0x78:** This is an RCON command, and it's completely different from all of the other packets.

- **OPCODE "p" or 0x70:** Four psuedo-random characters are sent to the server, and the same characters are returned. You can use the time between sending and receiving to work out the servers' ping/latency.

## Response

As stated above, each OPCODE returns information.

the response consists of the same first 11 bytes sent, what we call the Header, then the definitive response.

### Response Tables for `i`, `r`, `c`, `d`, `p`

#### Response Type `i`

| Byte        | Key        | Byte Width | Description                                             |
| ----------- | ---------- | ---------- | ------------------------------------------------------- |
| 11          | Password   | 1          | Either 0 or 1, depending on whether the password is set |
| 12-13       | Players    | 2          | Current number of players online                        |
| 14-15       | MaxPlayers | 2          | Maximum number of players allowed on the server         |
| 16-19       | (strlen)   | 4          | Length of the server’s hostname                         |
| 20 + strlen | Hostname   | (strlen)   | Hostname of the server                                  |
| 21-24       | (strlen)   | 4          | Length of the server’s gamemode                         |
| 25 + strlen | Gamemode   | (strlen)   | Gamemode of the server                                  |
| 26-29       | (strlen)   | 4          | Length of the server’s language                         |
| 30 + strlen | Language   | (strlen)   | Language of the server                                  |

#### Response Type `r`

| Byte        | Key       | Byte Width | Description                            |
| ----------- | --------- | ---------- | -------------------------------------- |
| 11-12       | RuleCount | 2          | Number of rules provided by the server |
| 13          | (strlen)  | 1          | Length of the rule name                |
| 14 + strlen | Rulename  | (strlen)   | Name of the rule                       |
| 15          | (strlen)  | 1          | Length of the rule value               |
| 16 + strlen | RuleValue | (strlen)   | Value of the rule                      |

_(Repeat from Byte 13 for each rule, as many times as `RuleCount`)_

#### Response Type `c`

| Byte        | Key         | Byte Width | Description                              |
| ----------- | ----------- | ---------- | ---------------------------------------- |
| 11-12       | PlayerCount | 2          | Number of players provided by the server |
| 13          | (strlen)    | 1          | Length of the player’s nickname          |
| 14 + strlen | PlayerNick  | (strlen)   | Player’s nickname                        |
| 15-18       | Score       | 4          | Player’s score                           |

_(Repeat from Byte 13 for each player, as many times as `PlayerCount`)_

#### Response Type `d`

| Byte        | Key         | Byte Width | Description                              |
| ----------- | ----------- | ---------- | ---------------------------------------- |
| 11-12       | PlayerCount | 2          | Number of players provided by the server |
| 13          | PlayerID    | 1          | Player’s ID (values 0-255)               |
| 14          | (strlen)    | 1          | Length of the player’s nickname          |
| 15 + strlen | PlayerNick  | (strlen)   | Player’s nickname                        |
| 16-19       | Score       | 4          | Player’s score                           |
| 20-23       | Ping        | 4          | Player’s ping to the server              |

_(Repeat from Byte 13 for each player, as many times as `PlayerCount`)_

#### Response Type `p`

| Byte | Key      | Byte Width | Description                                                   |
| ---- | -------- | ---------- | ------------------------------------------------------------- |
| 11   | number 1 | 1          | First number of the pseudo-random sequence sent by the client |
| 12   | number 2 | 1          | Second number of the pseudo-random sequence                   |
| 13   | number 3 | 1          | Third number of the pseudo-random sequence                    |
| 14   | number 4 | 1          | Fourth number of the pseudo-random sequence                   |

## Example Code in C

A while ago I made a small lib in C, which allows you to perform queries, you can use it as an example. **[See Repository](https://github.com/Louzindev/sampquery-c)**
