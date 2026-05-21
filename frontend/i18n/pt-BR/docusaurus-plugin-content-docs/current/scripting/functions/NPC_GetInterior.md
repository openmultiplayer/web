---
title: NPC_GetInterior
sidebar_label: NPC_GetInterior
description: "Obtém o ID interno de um NPC."
tags: ["npc", "interior"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o ID interno de um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o interior ID em que NPC está atualmente.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinterior", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new interior = NPC_GetInterior(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d interior: %d", npcid, interior);
        return 1;
    }
    return 0;
}
```
## Notas

- Interior 0 é o mundo principal (externo)

## Funções Relacionadas

- [NPC_SetInterior](NPC_SetInterior): Definir interior NPC
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Obtenha o mundo virtual NPC
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Definir mundo virtual NPC
- [NPC_GetPos](NPC_GetPos): Obtenha a posição NPC

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
