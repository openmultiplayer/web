---
title: "ConnectNPC | open.mp"
description: "Connect an NPC to the server."
canonical: https://open.mp/docs/scripting/functions/ConnectNPC
language: en
---

# ConnectNPC

warning

This function is deprecated. Please see [NPC\_Create](https://open.mp/docs/scripting/functions/NPC_Create).

## Description

Connect an NPC to the server.

| Name | Description |
| --- | --- |
| const name\[\] | The name the NPC should connect as. Must follow the same rules as normal player names. |
| const script\[\] | The NPC script name that is located in the **npcmodes** folder (without the .amx extension). |

## Returns

This function always return **1**.

## Examples

```c
public OnGameModeInit()
{
    ConnectNPC("[BOT]Pilot", "pilot");
    return 1;
}
```

## Notes

note

NPCs do not have nametags. These can be scripted with [Attach3DTextLabelToPlayer](https://open.mp/docs/scripting/functions/Attach3DTextLabelToPlayer).

## Related Functions

-   [IsPlayerNPC](https://open.mp/docs/scripting/functions/IsPlayerNPC): Check if a player is an NPC or an actual player.

## Related Callbacks

-   [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect): Called when a player connects to the server.
