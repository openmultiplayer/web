---
title: NPC_IsDead
sidebar_label: NPC_IsDead
description: "Verifica se um NPC está morto."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está morto.

| Nome | Descrição |
| ----- | --------------------------- |
| npcid | O ID do NPC para verificar. |

## Retornos

Retorna `true` se NPC estiver morto, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkdead", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isDead = NPC_IsDead(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is dead: %s", npcid, isDead ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Um NPC é considerado morto quando sua saúde atinge 0,0 ou menos.
- Dead NPCs pode ser reaparecido usando [NPC_Respawn](NPC_Respawn).

:::

## Funções Relacionadas

- [NPC_GetHealth](NPC_GetHealth): Obtém a saúde de um NPC
- [NPC_SetHealth](NPC_SetHealth): Define a saúde de um NPC
- [NPC_Respawn](NPC_Respawn): Reaparece um NPC

## Callbacks Relacionadas

- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando um NPC morre
- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando um NPC sofre dano
