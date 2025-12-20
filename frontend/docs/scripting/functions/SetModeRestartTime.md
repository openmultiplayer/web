---
title: SetModeRestartTime
sidebar_label: SetModeRestartTime
description: Sets the delay between loading main scripts, in seconds.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the delay between loading main scripts, in seconds.

## Parameters

| Name          | Description         |
| ------------- | ------------------- |
| Float:seconds | Seconds to restart. |

## Return Values

1 - Function executed successfully.

0 - Function failed to execute. This means that the specified seconds should not be less than 1.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/restart", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        SetModeRestartTime(5.0);
        SendClientMessage(playerid, -1, "[SERVER]: The server will restart in 5 seconds.");
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

The `seconds` parameter is a float.

:::

## Related Functions

- [GetModeRestartTime](GetModeRestartTime): Gets the delay between loading main scripts, in seconds.
- [GameModeExit](GameModeExit): Ends the current gamemode.
