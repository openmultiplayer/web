---
title: OnPlayerConnect
description: This callback is called when a player connects to the server.
tags: ["player"]
---

## Description

Ang callback na ito ay itinatawag kapag ang isang player ay kumonek sa server.

| Name     | Description                            |
| -------- | -------------------------------------- |
| playerid | Ang ID ng player na kumonek sa server. |

## Returns

0 - Ay papagbawalan ang ibang filterscript na tanggapin itong callback.

1 - Ay nagpapahiwatig na ang callback na ito ay ipapasa sa susunod na filterscript.

Ito ay palaging unang tinatawag sa mga filterscript.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s ay pumasok sa server, mabuhay!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Functions
