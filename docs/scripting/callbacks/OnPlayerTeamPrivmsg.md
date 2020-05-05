---
id: OnPlayerTeamPrivmsg
title: OnPlayerTeamPrivmsg
description: This callback is called when a player sends a team private message through the native TPM system (/tpm).
tags: ["player"]
---

:::warning

This function was removed in SA-MP 0.3. You must make your own command using OnPlayerCommandText.

:::

## Description

This callback is called when a player sends a team private message through the native TPM system (/tpm).

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player that sent a message. |
| text[]   | The text player wrote to team.            |

## Returns

Retrieved from "https://wiki.sa-mp.com/wiki/OnPlayerTeamPrivmsg"

## Examples

```c
/*
 *  Example script to alert an admin when a team private message
 *  has been sent.
 */

public OnPlayerTeamPrivmsg(playerid, text[])
{
    new
        sSenderName[24],
        sString[128];

    GetPlayerName(playerid, sSenderName, sizeof sSenderName);
    format(sString, sizeof sString, "TeamMessage <%s>: %s", senderName, text);

    for(new iPlayer = 0 ; iPlayer < MAX_PLAYERS; iPlayer++)
    {
        if(IsPlayerAdmin(iPlayer))
        {
            SendPlayerMessage(iPlayer, 0xFFFFFFAA, sString);
        }
    }

    return true;
}
/*
 *  Disable all private team messaging.
 */

public OnPlayerTeamPrivmsg(playerid, text[])
{
    return false; // Disables it.
}
```

## Notes

:::warning

Player teams must be set with SetPlayerTeam. If not, messages will be sent to all players.

:::

## Related Functions

