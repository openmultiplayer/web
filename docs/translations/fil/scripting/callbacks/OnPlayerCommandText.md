---
title: OnPlayerCommandText
description: This callback is called when a player enters a command into the client chat window.
tags: ["player"]
---

## Description

Ang callback na ito ay itinatawag kapag ang player ay nag-input ng command sa client chat window. Ang command ay lahat ng mensahe na itinatype sa client chat window na nagsisimula s aforward slash '/', e.g. /help.

| Name      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| playerid  | Ang ID ng player na nagtype ng command.                     |
| cmdtext[] | Ang command na itinype. (kasama dito ang forward slash '/') |

## Returns

Ito ay palaging itinatawag una sa mga filterscript, kaya ang pag return ng 1 ay ipinagbabawal ang ibang script na makita ito.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Ito ang /help command.");
        return 1;
        // Ang pag return ng 1 ay nagsasabi na ang command ay na-iprocess na.
        // Ang OnPlayerCommandText ay hindi matatawag sa ibang script.
    }
    return 0;
    // Ang pag return ng 0 ay nagsasabi na ang command ay hindi na-process ng script.
    // Ang OnPlayerCommandText ay tatawagin sa ibang script hanggang mayroong isa na mag return 1.
    // Kung walang script ang mag return 1, may lalabas na mensahe na 'SERVER: Unknown command.'.
}
```

## Notes

<TipNPCCallbacks />

## Related Functions

- [SendRconCommand](../functions/SendRconCommand): Mag send ng RCON command gamit ang script.
