---
title: BanEx
description: Ipagbawal ang isang manlalaro na may dahilan.
tags: ["administration"]
---

## Description

Ipagbawal ang isang manlalaro na may dahilan.

| Name     | Description                  |
| -------- | ---------------------------- |
| playerid | Ang ID ng player na pagbabawalan.|
| reason   | Ang dahilan ng pagbabawal.   |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang partikular na halaga.

## Examples

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // I-ban ang manlalaro kung sino ang gumamit ng command na ito na may kasamang dahilan na ("Request")
        BanEx(playerid, "Request");
        return 1;
    }
}
/*Upang magpakita ng mensahe (hal. dahilan) para sa player bago isara ang koneksyon
kailangan mong gumamit ng timer para gumawa ng pagkaantala. Ang pagkaantala na ito ay kailangan lang ng ilang millisecond ang haba,
ngunit ang halimbawang ito ay gumagamit ng isang buong segundo para lamang maging ligtas.*/

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    // dahilan - dahilan na magagamit para sa BanEx
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // I-ban ang manlalaro kung sino man ang gumamit ng command na ito.
        BanExWithMessage(playerid, 0xFF0000FF, "You have been banned!", "Request");
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Ang anumang aksyon na direktang ginawa bago ang BanEx() (tulad ng pagpapadala ng mensahe gamit ang SendClientMessage) ay hindi makakarating sa player. Dapat gumamit ng timer para maantala ang pagbabawal.

:::

## Related Functions

- [Ban](Ban): I-ban ang manlalaro mula sa paglalaro sa server.
- [Kick](Kick): I-kick ang manlalaro mula sa server.