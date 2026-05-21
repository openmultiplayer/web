---
title: NPC_IsMeleeAttacking
sidebar_label: NPC_IsMeleeAttacking
description: "Verifica se um NPC está realizando um ataque corpo a corpo."
tags: ["npc", "melee", "fighting"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está realizando um ataque corpo a corpo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver realizando um ataque corpo a corpo, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmeleeattacking", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isMeleeAttacking = NPC_IsMeleeAttacking(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is melee attacking: %s", npcid, isMeleeAttacking ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true durante a animação do ataque corpo a corpo
- Ataques corpo a corpo são iniciados com NPC_MeleeAttack

## Funções Relacionadas

- [NPC_MeleeAttack](NPC_MeleeAttack): Iniciar ataque corpo a corpo
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Pare o ataque corpo a corpo
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Definir estilo de luta
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Obtenha estilo de luta

## Callbacks Relacionadas

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a alguém
