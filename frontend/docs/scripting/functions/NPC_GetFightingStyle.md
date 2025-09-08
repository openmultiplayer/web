---
title: NPC_GetFightingStyle
sidebar_label: NPC_GetFightingStyle
description: Gets the fighting style of an NPC.
tags: ["npc", "fighting"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the fighting style of an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the fighting style ID of the NPC.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Fighter");
    NPC_Spawn(npcid);
    
    NPC_SetFightingStyle(npcid, FIGHT_STYLE_BOXING);
    
    new style = NPC_GetFightingStyle(npcid);
    printf("NPC %d fighting style: %d", npcid, style);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkstyle", true))
    {
        new style = NPC_GetFightingStyle(0);
        
        new styleName[32];
        switch(style)
        {
            case FIGHT_STYLE_NORMAL: styleName = "Normal";
            case FIGHT_STYLE_BOXING: styleName = "Boxing";
            case FIGHT_STYLE_KUNGFU: styleName = "Kung Fu";
            default: styleName = "Unknown";
        }
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 fighting style: %s", styleName);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        return 1;
    }
    return 0;
}
```

## Notes

- Fighting styles affect melee combat animations and damage
- Each style has different punch and kick animations
- The default fighting style is FIGHT_STYLE_NORMAL
- Fighting styles only affect hand-to-hand combat

## Related Functions

- [NPC_SetFightingStyle](NPC_SetFightingStyle): Set NPC fighting style
- [NPC_MeleeAttack](NPC_MeleeAttack): Make NPC perform melee attack
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Check if NPC is attacking

## Related Callbacks

- [OnNPCGiveDamage](OnNPCGiveDamage): Called when NPC damages someone
