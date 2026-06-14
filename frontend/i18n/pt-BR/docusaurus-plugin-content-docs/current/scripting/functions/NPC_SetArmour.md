---
title: NPC_SetArmour
sidebar_label: NPC_SetArmour
description: "Define o nível de armadura de um NPC."
tags: ["npc", "armour", "health"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o nível de armadura de um NPC.

| Nome | Descrição |
| ------ | ----------------------------- |
| npcid | O ID do NPC |
| armour | A quantidade de armadura (0,0-100,0) |

## Retornos

Retorna `true` se a armadura foi definida com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setarmour ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:armour = floatstr(cmdtext[11]);
        if (armour < 0.0 || armour > 100.0)
            return SendClientMessage(playerid, 0xFF0000FF, "Armour must be between 0.0 and 100.0.");

        NPC_SetArmour(npcid, armour);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d armour set to %.1f", npcid, armour);

        return 1;
    }
    return 0;
}
```
## Notas

- O valor da armadura varia de 0,0 (sem armadura) a 100,0 (armadura completa)
- A armadura absorve o dano antes que a saúde seja afetada
- Use NPC_GetArmour para verificar o nível de armadura atual

## Funções Relacionadas

- [NPC_GetArmour](NPC_GetArmour): Obtenha o nível de armadura de NPC
- [NPC_SetHealth](NPC_SetHealth): Define a saúde de NPC
- [NPC_GetHealth](NPC_GetHealth): Obtenha a saúde de NPC
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto

## Callbacks Relacionadas

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando NPC sofre dano
- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando NPC morre
