---
title: NPC_SetPos
sidebar_label: NPC_SetPos
description: Sets the position of an NPC.
tags: ["npc", "position"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the position of an NPC instantly without movement animation.

| Name    | Description        |
| ------- | ------------------ |
| npcid   | The ID of the NPC. |
| Float:x | The X coordinate.  |
| Float:y | The Y coordinate.  |
| Float:z | The Z coordinate.  |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setposhere", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_SetPos(npcid, x + 2.0, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d teleported to your position", npcid);

        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- This function teleports the NPC instantly without animation
- Any current movement is stopped when setting position
- Use `NPC_Move` if you want the NPC to walk to a position

:::

## Related Functions

- [NPC_GetPos](NPC_GetPos): Get NPC position.
- [NPC_Move](NPC_Move): Move NPC to position with animation.
- [NPC_SetRot](NPC_SetRot): Set NPC rotation.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Set NPC facing direction.

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns.
