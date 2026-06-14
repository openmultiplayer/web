---
title: NPC_GetSkin
sidebar_label: NPC_GetSkin
description: "Obtém o skin/modelo ID de um NPC."
tags: ["npc", "skin", "model"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o skin/modelo ID de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o skin/modelo ID do NPC ou -1 se for inválido.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkskin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new skinid = NPC_GetSkin(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d skin: %d", npcid, skinid);
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna o skin/modelo atual que o NPC está usando
- Use [NPC_SetSkin](NPC_SetSkin) para alterar a aparência do NPC

## Funções Relacionadas

- [NPC_SetSkin](NPC_SetSkin): Definir skin/modelo NPC
- [NPC_IsValid](NPC_IsValid): Verifique se NPC é válido
- [NPC_IsSpawned](NPC_IsSpawned): Verifique se NPC foi gerado

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
