---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: Called when a player double-clicks on a player on the scoreboard.
tags: ["player"]
---

## Description

Itinatawag kapag ang player ay nag-double-click sa isang player sa scoreboard. (Tab)

| Name            | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| playerid        | Ang ID ng player na nag-pindot ng isang player sa scoreboard.    |
| clickedplayerid | Ang ID ng player na ipinindot.                                   |
| source          | Ang source na pinagpindutan ng player.                           |

## Returns

1 - Ay pipigilan ang ibang filterscripts na tanggapin itong callback.

0 - Ipinapahiwatig na ang callback na ito ay ipapasa sa susunod na filterscript.

Ito ay palaging itinatawag una sa mga filterscripts.

## Examples

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new message[32];
    format(message, sizeof(message), "Ipinindot mo si player id: %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Mga Dapat Unawain

:::tip

Sa kasalukuyan, isa lang ang 'source' (0 - CLICK_SOURCE_SCOREBOARD). Ang existence ng argument na ito ay nagmumungkahi na pwede magkaroon ng iba pang sources na darating.

:::

## Mga Kaugnay na Functions

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw.md): Itinatawag kapag ang player ay pumindot ng TextDraw.
