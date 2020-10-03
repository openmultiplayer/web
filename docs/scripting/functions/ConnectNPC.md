---
id: ConnectNPC
title: ConnectNPC
description: Connect an NPC to the server.
tags: ["npc"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Connect an NPC to the server.

| Name     | Description                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| name[]   | The name the NPC should connect as. Must follow the same rules as normal player names.   |
| script[] | The NPC script name that is located in the npcmodes folder (without the .amx extension). |

## Returns

This function always return 1.

## Examples

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Notes

:::tip

NPCs do not have nametags. These can be scripted with Attach3DTextLabelToPlayer.

:::

## Related Functions

- [IsPlayerNPC](../functions/IsPlayerNPC.md): Check if a player is an NPC or an actual player.
- [OnPlayerConnect](../callbacks/OnPlayerConnect.md): Called when a player connects to the server.
