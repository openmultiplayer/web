---
title: NPC_SetHealth
sidebar_label: NPC_SetHealth
description: "Define o valor de integridade de um NPC."
tags: ["npc", "health"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o valor de integridade de um NPC.

| Nome | Descrição |
| ------ | ----------------------- |
| npcid | O ID do NPC |
| health | O valor de integridade a ser definido |

## Retornos

Retorna `true` se o funcionamento foi definido com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sethealth ", true, 11))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:health = floatstr(cmdtext[11]);
        if (health < 0.0 || health > 100.0)
            return SendClientMessage(playerid, 0xFF0000FF, "Health must be between 0.0 and 100.0.");

        NPC_SetHealth(npcid, health);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d health set to %.1f", npcid, health);

        return 1;
    }
    return 0;
}
```
## Notas

- Os valores de saúde normalmente variam de 0,0 a 100,0, mas podem ser definidos mais altos
- Definir a saúde para 0,0 matará o NPC
- NPCs spawn com 100,0 de saúde por padrão

## Funções Relacionadas

- [NPC_GetHealth](NPC_GetHealth): Obtenha saúde NPC
- [NPC_SetArmour](NPC_SetArmour): Definir armadura NPC
- [NPC_GetArmour](NPC_GetArmour): Obtenha a armadura NPC
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto
- [NPC_SetInvulnerable](NPC_SetInvulnerable): Tornar NPC invulnerável

## Callbacks Relacionadas

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando NPC sofre dano
- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando NPC morre
