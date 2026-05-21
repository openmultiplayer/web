---
title: NPC_GetVelocity
sidebar_label: NPC_GetVelocity
description: "Obtém a velocidade de um NPC."
tags: ["npc", "velocity", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a velocidade de um NPC.

| Nome | Descrição |
| -------- | --------------------------------------------------------------- |
| npcid | O ID do NPC |
| &Float:x | Variável para armazenar a componente X da velocidade, passada por referência |
| &Float:y | Variável para armazenar a componente Y da velocidade, passada por referência |
| &Float:z | Variável para armazenar a componente Z da velocidade, passada por referência |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvelocity", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:velX, Float:velY, Float:velZ;
        NPC_GetVelocity(npcid, velX, velY, velZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d velocity: X=%.2f, Y=%.2f, Z=%.2f", npcid, velX, velY, velZ);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Todos os parâmetros de velocidade são passados por referência e serão modificados

:::

## Funções Relacionadas

- [NPC_SetVelocity](NPC_SetVelocity): Definir velocidade NPC
- [NPC_GetPos](NPC_GetPos): Obtenha a posição NPC
- [NPC_Move](NPC_Move): Faça com que NPC se mova para a posição

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC termina o movimento
