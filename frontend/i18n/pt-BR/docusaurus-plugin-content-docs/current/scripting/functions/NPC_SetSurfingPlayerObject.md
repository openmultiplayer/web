---
title: NPC_SetSurfingPlayerObject
sidebar_label: NPC_SetSurfingPlayerObject
description: "Define o objeto do jogador em que um NPC está navegando."
tags: ["npc", "surfing"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o objeto do jogador em que um NPC está navegando.

| Nome | Descrição |
| -------- | -------------------- |
| npcid | O ID do NPC |
| objectid | O objeto do jogador ID |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingplayerobject ", true, 24))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new objectid = strval(cmdtext[24]);

        NPC_SetSurfingPlayerObject(npcid, objectid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing player object set to %d", npcid, objectid);

        return 1;
    }
    return 0;
}
```
## Notas

- O NPC se moverá junto com o objeto do jogador se ele se mover
- Objetos de jogador são objetos do lado do cliente criados especificamente para jogadores individuais
- O objeto do jogador deve existir para que a navegação funcione corretamente

## Funções Relacionadas

- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Obtém o objeto do jogador em que um NPC está navegando
- [NPC_SetSurfingObject](NPC_SetSurfingObject): Define o objeto em que um NPC está navegando
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Define o veículo em que um NPC está navegando
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Define o deslocamento de navegação para um NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): redefine todos os dados de navegação para um NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
