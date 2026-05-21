---
title: NPC_GetArmour
sidebar_label: NPC_GetArmour
description: "Obtém o valor da armadura de um NPC."
tags: ["npc", "health"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o valor da armadura de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a armadura do NPC como um valor flutuante (0,0 a 100,0).

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkarmour", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:armour = NPC_GetArmour(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has %.1f% armour", npcid, armour);
        return 1;
    }
    return 0;
}
```
## Notas

- Os valores de armadura variam de 0,0 a 100,0
- NPCs começa com armadura 0.0 por padrão, use [NPC_SetArmour](NPC_SetArmour) para definir um valor mais alto

## Funções Relacionadas

- [NPC_SetArmour](NPC_SetArmour): Definir armadura NPC
- [NPC_GetHealth](NPC_GetHealth): Obtenha saúde NPC
- [NPC_SetHealth](NPC_SetHealth): Definir saúde de NPC
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto

## Callbacks Relacionadas

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando NPC sofre dano
- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando NPC morre
