---
title: NPC_SetInterior
sidebar_label: NPC_SetInterior
description: "Define o interior de um NPC."
tags: ["npc", "interior"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o interior de um NPC.

| Nome | Descrição |
| ---------- | ---------------------- |
| npcid | O ID do NPC |
| interiorid | O interior ID para definir |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setinterior ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new interiorid = strval(cmdtext[13]);
        if (interiorid < 0 || interiorid > 255)
            return SendClientMessage(playerid, 0xFF0000FF, "Interior ID must be between 0 and 255.");

        NPC_SetInterior(npcid, interiorid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d interior set to %d", npcid, interiorid);

        return 1;
    }
    return 0;
}
```
## Notas

- Interior 0 é o mundo principal (externo)
- Certifique-se de definir as coordenadas apropriadas para cada interior

## Funções Relacionadas

- [NPC_GetInterior](NPC_GetInterior): Obtenha o interior NPC
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Definir mundo virtual NPC
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): Obtenha o mundo virtual NPC
- [NPC_SetPos](NPC_SetPos): Definir posição NPC

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
