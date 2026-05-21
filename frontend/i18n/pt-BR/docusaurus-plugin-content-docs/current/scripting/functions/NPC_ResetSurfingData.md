---
title: NPC_ResetSurfingData
sidebar_label: NPC_ResetSurfingData
description: "Redefine todos os dados de navegação para um NPC."
tags: ["npc", "surfing"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Redefine todos os dados de navegação para um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetsurfing", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        NPC_ResetSurfingData(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing data has been reset.", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

- Esta função limpa todos os dados relacionados à navegação de um NPC, incluindo o objeto/veículo de navegação e o deslocamento
- O NPC não será mais anexado a nenhuma superfície após chamar esta função
- A posição do NPC não é alterada, apenas o seu estado de navegação é redefinido

## Funções Relacionadas

- [NPC_SetSurfingObject](NPC_SetSurfingObject): Define o objeto em que um NPC está navegando
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Define o veículo em que um NPC está navegando
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Define o objeto do jogador em que um NPC está navegando
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Define o deslocamento de navegação para um NPC
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Obtém o objeto em que um NPC está navegando
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Obtém o veículo em que um NPC está navegando

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
