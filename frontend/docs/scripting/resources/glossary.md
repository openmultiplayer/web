---
title: Glossary
sidebar_label: Glossary
description: Glossary of terms
tags: []
---

## Scripting

| Word         | Meaning                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| PAWN         | The scripting language used to make SA:MP and open.mp scripts                                           |
| Gamemode     | The main script that runs on a server                                                                   |
| Filterscript | Scripts that run alongside gamemodes                                                                    |
| Plugin       | Extra functions/capabilities added through a .dll (Windows) or .so (Linux) file                         |
| Component    | The open.mp equivalent of a plugin, loaded from the `components` folder                                 |
| Include      | Pieces of script placed in .inc files to be included in Filterscripts/Gamemodes using `#include <name>` |
| Native       | A function provided by the server or a plugin that can be called from PAWN                              |
| Callback     | A function automatically called by the server when a specific event occurs (e.g. OnPlayerConnect)       |
| AMX          | The compiled file (.amx) produced from a .pwn source file, which the server actually runs               |
| Tick         | One millisecond of server time, as counted by [GetTickCount](../functions/GetTickCount)                 |

## Tools

| Word                                              | Meaning                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------ |
| Pawno                                             | The original SA:MP script editor for PAWN, Windows only and unmaintained |
| [Qawno](https://github.com/openmultiplayer/qawno) | The script editor that ships with open.mp, and the replacement for Pawno |
| Pawncc                                            | The compiler that compiles .pwn to .amx                                  |

## Networking

| Word       | Meaning                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Client     | The game application used by players to connect to a multiplayer server                                              |
| Server     | The application that hosts a multiplayer game and manages connected clients                                          |
| Masterlist | The public list of running servers, which servers announce themselves to and clients read to fill the server browser |
| Sync       | The process of keeping the game state consistent between the server and connected clients                            |
| Desync     | A situation where the game state differs between the server and one or more clients                                  |
| Ping       | The round-trip time for data to travel between a client and the server, measured in milliseconds                     |

## Entities

| Word  | Meaning                                                                                                            |
| ----- | ------------------------------------------------------------------------------------------------------------------ |
| NPC   | A non-player character that connects to the server like a player and is driven by a script, and uses a player slot |
| Actor | A static non-player character used for decoration or interaction, such as a cashier, that uses no player slot      |

## Common gamemode types

| Word             | Meaning                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| Deathmatch       | A gamemode type where players try to kill each other to win                                                |
| Roleplay         | A gamemode type where players act like in real life and are expected to stay in character                  |
| Reallife         | A gamemode type which is based on real life but players do not need to act like in real life               |
| Cops and Robbers | A gamemode type where criminals commit crimes while police attempt to stop and arrest them                 |
| Derby / Sumo     | A gamemode type where players try to knock opponents out of an arena with vehicles                         |
| Survival         | A gamemode type where players must survive against environmental hazards, such as zombies or other players |
| Freeroam         | A gamemode type with no set objective, where players are free to explore, stunt and fight as they please   |
