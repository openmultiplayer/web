---
title: NPC_GetFightingStyle
sidebar_label: NPC_GetFightingStyle
description: "Obtém o estilo de luta de um NPC."
tags: ["npc", "fighting"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o estilo de luta de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o estilo de luta ID do NPC.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfightingstyle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new style = NPC_GetFightingStyle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d fighting style: %d", npcid, style);
        return 1;
    }
    return 0;
}
```
## Notas

- Os estilos de luta afetam as animações e os danos do combate corpo a corpo
- Cada estilo tem diferentes animações de socos e chutes
- O estilo de luta padrão é FIGHT_STYLE_NORMAL

## Funções Relacionadas

- [NPC_SetFightingStyle](NPC_SetFightingStyle): Definir estilo de luta NPC
- [NPC_MeleeAttack](NPC_MeleeAttack): Faça NPC realizar ataque corpo a corpo
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Verifique se NPC está atacando

## Callbacks Relacionadas

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a alguém
