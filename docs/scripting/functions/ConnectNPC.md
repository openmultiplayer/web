---
title: ConnectNPC
description: Connect an NPC to the server.
tags: ["npc"]
---

## Description

Connect an NPC to the server.

| Name           | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| const name[]   | The name the NPC should connect as. Must follow the same rules as normal player names.   |
| const script[] | The NPC script name that is located in the npcmodes folder (without the .amx extension). |

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

NPCs do not have nametags. These can be scripted with [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer).

:::

## Related Functions

- [IsPlayerNPC](IsPlayerNPC): Check if a player is an NPC or an actual player.

## Related Callbacks

- [OnPlayerConnect](../callbacks/OnPlayerConnect): Called when a player connects to the server.
