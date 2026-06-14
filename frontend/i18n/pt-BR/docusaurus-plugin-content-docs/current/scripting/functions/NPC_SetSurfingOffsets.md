---
title: NPC_SetSurfingOffset
sidebar_label: NPC_SetSurfingOffset
description: "Define o deslocamento de navegação para um NPC."
tags: ["npc", "surfing"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o deslocamento de navegação para um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |
| x | O deslocamento X |
| y | O deslocamento Y |
| z | O deslocamento Z |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingoffset ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        new idx = 18;

        // Analisar x
        while (cmdtext[idx] == ' ') idx++;
        new startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new xStr[32];
        strmid(xStr, cmdtext, startIdx, idx);
        x = floatstr(xStr);

        // Analisar y
        while (cmdtext[idx] == ' ') idx++;
        startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new yStr[32];
        strmid(yStr, cmdtext, startIdx, idx);
        y = floatstr(yStr);

        // Analisar z
        while (cmdtext[idx] == ' ') idx++;
        z = floatstr(cmdtext[idx]);

        NPC_SetSurfingOffsets(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing offset set to %.2f, %.2f, %.2f", npcid, x, y, z);

        return 1;
    }
    return 0;
}
```
## Notas

- O deslocamento de navegação determina a posição relativa do NPC em comparação com o objeto/veículo em que ele está navegando
- Valores positivos de Z movem NPC para cima, valores negativos para baixo
- Valores positivos de Y normalmente movem o NPC para frente em relação à direção do veículo
- Valores positivos de X movem NPC para a direita em relação à direção do veículo
- Isso é útil para ajustar a posição do NPC ao navegar
- Ótimo para criar acompanhantes ou passageiros de veículos

## Funções Relacionadas

- [NPC_GetSurfingOffset](NPC_GetSurfingOffsets): Obtém o deslocamento de navegação para um NPC
- [NPC_SetSurfingObject](NPC_SetSurfingObject): Define o objeto em que um NPC está navegando
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Define o veículo em que um NPC está navegando
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Define o objeto do jogador em que um NPC está navegando
- [NPC_ResetSurfingData](NPC_ResetSurfingData): redefine todos os dados de navegação para um NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
