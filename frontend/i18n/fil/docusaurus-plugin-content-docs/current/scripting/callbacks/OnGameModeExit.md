---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or GameModeExit.
tags: []
---

## Description

Ang callback na ito ay itinatawag kapag ang isang gamemode ay isinara or itinapos. Itinatawag ito tuwing itinatawag ang rcon command na `gmx`, o kapag and server ay ishinu-shutdown, o GameModeExit.

## Examples

```c
public OnGameModeExit()
{
    print("Ang gamemode ay isinara.");
    return 1;
}
```

## Mga Dapat Unawain

:::tip

Ang function na ito ay pwede rin gamitin sa mga filterscript, upang idetect kung ang gamemode ay nabago gamit ang RCON commands katulad ng changemode o gmx, sapagkat ang pagpapalit ng gamemode ay hindi nagrereload ng filterscript. Kapag ginagamit ang OnGameModeExit kasabay ang 'rcon gmx' na command sa console, tandaan na pwede ito magdulot ng client bugs tulad ng sobra sobra na pagtawag ng RemoveBuildingForPlayer tuwing OnGameModeInit na pwede magdulot ng crash sa client. Ang callback na ito ay hindi tatawagin kapag ang server ay nag crash or napatay gamit ang ibang bagay, tulad ng Linux kill command o ang pag pindot ng close-button sa console ng Windows.

:::

## Mga Kaugnay na Functions

- [GameModeExit](../functions/GameModeExit.md): Isinasara ang gamemode.
