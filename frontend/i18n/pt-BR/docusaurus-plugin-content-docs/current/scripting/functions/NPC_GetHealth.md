---
title: NPC_GetHealth
sidebar_label: NPC_GetHealth
description: "Obtém o valor de integridade de um NPC."
tags: ["npc", "health"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o valor de integridade de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a integridade do NPC como um valor flutuante.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkhealth", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:health = NPC_GetHealth(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d health: %.2f", npcid, health);
        return 1;
    }
    return 0;
}
```
## Notas

- Os valores de saúde normalmente variam de 0,0 a 100,0
- Um NPC com 0,0 de saúde é considerado morto

## Funções Relacionadas

- [NPC_SetHealth](NPC_SetHealth): Definir integridade de NPC
- [NPC_GetArmour](NPC_GetArmour): Obtenha a armadura NPC
- [NPC_SetArmour](NPC_SetArmour): Definir armadura NPC
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto

## Callbacks Relacionadas

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando NPC sofre dano
- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando NPC morre
