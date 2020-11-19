---
title: PlayAudioStreamForPlayer
description: Pustanje 'audio stream-a' igracu.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3d' />

## Description

Pusta audio stream igracu. Audio fajlovi takodje rade (.mp3).

| Name           | Description                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| playerid       | ID igraca kome se pusta audio                                                                                 |
| url[]          | Link koji se pusta. Pravilni formati su mp3 i ogg/vorbis. Link ka .pls fajlu (playlista) ce pustiti playlistu |
| Float:PosX     | Pozicija X na kojoj se pusta audio. Default 0.0. Nema efekta osim ako je usepos podesen na 1.                 |
| Float:PosY     | Pozicija Y na kojoj se pusta audio. Default 0.0. Nema efekta osim ako je usepos podesen na 1.                 |
| Float:PosZ     | Pozicija Z na kojoj se pusta audio. Default 0.0. Nema efekta osim ako je usepos podesen na 1.                 |
| Float:distance | Razdaljina do koje se cuje audio. Nema efekta osim ako je usepos podesen na 1.                                |
| usepos         | Koristi postavljenu poziciju i distancu. Default neaktivan (0).                                               |

## Returns

1: Funkcija je uspesno izvrsena.

0: Funkcija nije uspela da se izvrsi. Zadati igrac ne postoji.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:X, Float:Y, Float:Z, Float:Distance = 5.0;
        GetPlayerPos(playerid, X, Y, Z);
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", X, Y, Z, Distance, 1);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer.md): Zaustavlja audio stream za igraca.
- [PlayerPlaySound](PlayerPlaySound.md): Pustanje zvuka igracu.
