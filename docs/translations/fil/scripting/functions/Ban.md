---
title: Ban
description: I-ban ang isang manlalaro na kasalukuyang nasa server.
tags: ["administration"]
---

## Description

I-ban ang isang manlalaro na kasalukuyang nasa server. Hindi na sila makakasali muli sa server. Ang pagbabawal ay magiging IP-based, at mase-save sa samp.ban file sa root directory ng server. Maaaring gamitin ang BanEx upang magbigay ng dahilan para sa pagbabawal. Maaaring idagdag/alisin ang mga IP ban gamit ang RCON banip at unbanip command (SendRconCommand).

| Name     | Description                  |
| -------- | ---------------------------- |
| playerid | Ang ID ng player na ipagbawal.|

## Returns

Ang function na ito ay hindi nagbabalik ng anumang partikular na halaga.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // I-ban ang player kung sino ang nagsulat ng command na ito
        Ban(playerid);
        return 1;
    }
}
// Upang magpakita ng mensahe (hal. dahilan) para sa player bago isara ang koneksyon
// kailangan mong gumamit ng timer para gumawa ng pagkaantala. Ang pagkaantala na ito ay kailangan lang ng ilang millisecond ang haba,
// ngunit ang halimbawang ito ay gumagamit ng isang buong segundo para lamang maging ligtas.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // I-ban ang manlalaro kung sino ang gumamit ng command na ito.

        // Una, bigyan mo sila ng mensahe.
        SendClientMessage(playerid, 0xFF0000FF, "You have been banned!");

        // I-ban na ang manlalaro sa susunod na segundo.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Ang anumang aksyon na direktang ginawa bago ang Ban() (tulad ng pagpapadala ng mensahe gamit ang SendClientMessage) ay hindi makakarating sa player. Dapat gumamit ng timer para maantala ang pagbabawal.

:::

## Related Functions

- [BanEx](BanEx): I-ban ang isang manlalaro na may dahilan.
- [Kick](Kick): I-kick ang isang manlalaro mula sa server.