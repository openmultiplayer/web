---
title: Kick
description: I-kick ang isang manlalaro mula sa server. Kakailanganin nilang umalis sa laro at muling kumonekta kung nais nilang magpatuloy sa paglalaro.
tags: ["administration"]
---

## Description

I-kick ang isang manlalaro mula sa server. Kakailanganin nilang umalis sa laro at muling kumonekta kung nais nilang magpatuloy sa paglalaro.

| Name     | Description                   |
| -------- | ----------------------------- |
| playerid | Ang ID ng player na I-kick.   |

## Returns

Ang function na ito ay palaging nagbabalik ng 1, kahit na ang function ay nabigong isagawa (ang tinukoy ng player ay hindi umiiral).

## Notes

:::warning

Ang anumang aksyon na direktang ginawa bago ang Kick() (tulad ng pagpapadala ng mensahe gamit ang SendClientMessage) ay hindi makakarating sa player. Dapat gumamit ng timer para maantala ang pag-kick.

:::

## Examples

```c
// Upang magpakita ng mensahe (hal. dahilan) para sa player bago isara ang koneksyon
// kailangan mong gumamit ng timer para gumawa ng pagkaantala. Ang pagkaantala na ito ay kailangan lang ng ilang millisecond ang haba,
// ngunit ang halimbawang ito ay gumagamit ng isang buong segundo para lamang maging ligtas.

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // I-kick ang manlalaro kung sino man ang gumamit ng command na ito.

        // Una, bigyan sila ng mensahe.
        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");

        // I-kick na ang manlalaro sa susunod na segundo.
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## Related Functions

- [Ban](Ban): I-ban ang manlalaro mula sa paglalaro sa server.
- [BanEx](BanEx): I-ban ang manlalaro mula sa paglalaro sa server na may kasamang dahilan.