---
title: OnPlayerDisconnect
description: This callback is called when a player disconnects from the server.
tags: ["player"]
---

## Deskripsyon

Ang callback na ito ay natatawag kapag ang player ay nag diskonekta mula sa server.

| Pangalan      | Deskripsyon                                                |
| ------------- | ---------------------------------------------------------- |
| playerid      | Ang ID ng player na nag diskonekta                         |
| reason        | Ang rason ng pag diskonekta. Tignan ang table sa baba      |

## Returns

0 - Ay hindi hahayaan ang ibang filterscript na ma gamit ang callback na ito.

1 - Iniindika na ang callback na ito ay pwedeng ma-ipasa o magamit sa susunod the filterscript.

Lagi itong natatawag una sa mga filterscript.

## Mga Halimbawa

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s left the server (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Mga Dapat Unawain

:::tip

Ang ibang function ay maaaring di gumana ng maayos kapag ginamit sa callback na ito dahil ang player ay naka diskonekta na bago matatawag ang callback na ito. Dahil din dito, hindi mo magagamit ng buo ang mga importanteng functions na pangkuha ng impormasyon tulad ng `GetPlayerIp` at `GetPlayerPos`.

:::

## Mga Kaugnay na Functions
