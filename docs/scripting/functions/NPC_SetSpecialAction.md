---
title: "NPC_SetSpecialAction | open.mp"
description: "Sets an NPC's special action state."
canonical: https://open.mp/docs/scripting/functions/NPC_SetSpecialAction
language: en
---

# NPC\_SetSpecialAction

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets an NPC's special action state, such as sitting, smoking, drinking, etc.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
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

-   Use SPECIAL\_ACTION\_NONE to clear the current action
-   Some actions may conflict with movement or other activities

## Related Functions

-   [NPC\_GetSpecialAction](https://open.mp/docs/scripting/functions/NPC_GetSpecialAction): Get current special action
-   [NPC\_ApplyAnimation](https://open.mp/docs/scripting/functions/NPC_ApplyAnimation): Apply custom animations
-   [NPC\_ClearAnimations](https://open.mp/docs/scripting/functions/NPC_ClearAnimations): Clear animations
-   [NPC\_ResetAnimation](https://open.mp/docs/scripting/functions/NPC_ResetAnimation): Reset to default

## Related Resources

-   [Special Actions](https://open.mp/docs/scripting/resources/specialactions)

## Related Callbacks

_No specific callbacks are triggered by this function._
