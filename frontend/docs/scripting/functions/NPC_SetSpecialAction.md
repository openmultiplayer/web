---
title: NPC_SetSpecialAction
sidebar_label: NPC_SetSpecialAction
description: Sets an NPC's special action state.
tags: ["npc", "action", "special"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets an NPC's special action state, such as sitting, smoking, drinking, etc.

| Name   | Description                  |
| ------ | ---------------------------- |
| npcid  | The ID of the NPC            |
| action | The special action ID to set |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setspecialaction ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new actionid = strval(cmdtext[18]);

        NPC_SetSpecialAction(npcid, SPECIAL_ACTION:actionid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d special action set to %d", npcid, actionid);

        return 1;
    }
    return 0;
}
```

## Notes

- Use SPECIAL_ACTION_NONE to clear the current action
- Some actions may conflict with movement or other activities

## Related Functions

- [NPC_GetSpecialAction](NPC_GetSpecialAction): Get current special action
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply custom animations
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear animations
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset to default

## Related Resources

- [Special Actions](../resources/specialactions)

## Related Callbacks

_No specific callbacks are triggered by this function._
