---
title: NPC_SetVelocity
sidebar_label: NPC_SetVelocity
description: "Define a velocidade de um NPC."
tags: ["npc", "velocity", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a velocidade de um NPC.

| Nome | Descrição |
| ------- | ------------------------ |
| npcid | O ID do NPC |
| Float:x | A componente de velocidade X |
| Float:y | A componente da velocidade Y |
| Float:z | A componente da velocidade Z |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvelocity ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        new idx = 13;

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

        NPC_SetVelocity(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d velocity set to %.2f, %.2f, %.2f", npcid, x, y, z);

        return 1;
    }
    return 0;
}
```
## Notas

- Os valores de velocidade determinam a velocidade e a direção do movimento
- Valores positivos de Z movem NPC para cima, valores negativos movem para baixo
- Isso pode ser usado para criar comportamentos de movimento personalizados

## Funções Relacionadas

- [NPC_GetVelocity](NPC_GetVelocity): Obtenha velocidade NPC
- [NPC_SetPos](NPC_SetPos): Definir posição NPC
- [NPC_Move](NPC_Move): Faça com que NPC se mova para a posição

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC termina o movimento
