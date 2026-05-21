---
title: NPC_GetSurfingOffset
sidebar_label: NPC_GetSurfingOffset
description: "Obtém o deslocamento de navegação para um NPC."
tags: ["npc", "surfing"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o deslocamento de navegação para um NPC.

| Nome | Descrição |
| ----- | ----------------------------------------------------- |
| npcid | O ID do NPC |
| &x | Uma variável para armazenar o deslocamento X, passada por referência |
| &y | Uma variável para armazenar o deslocamento Y, passada por referência |
| &z | Uma variável para armazenar o deslocamento Z, passada por referência |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingoffset", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:offsetX, Float:offsetY, Float:offsetZ;
        NPC_GetSurfingOffset(npcid, offsetX, offsetY, offsetZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing offset: X=%.2f, Y=%.2f, Z=%.2f", npcid, offsetX, offsetY, offsetZ);
        return 1;
    }
    return 0;
}
```
## Notas

- O deslocamento de navegação representa a posição relativa do NPC em comparação com o objeto/veículo em que ele está navegando
- Todos os valores de deslocamento são retornados como números de ponto flutuante

## Funções Relacionadas

- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Define o deslocamento de navegação para um NPC
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Obtém o objeto em que um NPC está navegando
- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Obtém o veículo em que um NPC está navegando
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Obtém o objeto do jogador em que um NPC está navegando
- [NPC_ResetSurfingData](NPC_ResetSurfingData): redefine todos os dados de navegação para um NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
