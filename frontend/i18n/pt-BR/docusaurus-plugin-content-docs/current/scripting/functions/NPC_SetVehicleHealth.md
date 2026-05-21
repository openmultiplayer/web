---
title: NPC_SetVehicleHealth
sidebar_label: NPC_SetVehicleHealth
description: "Define a integridade do veículo de um NPC."
tags: ["npc", "vehicle", "health"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a integridade do veículo de um NPC.

| Nome | Descrição |
| ------ | ----------------------------- |
| npcid | O ID do NPC |
| health | O valor de saúde (0,0-1000,0) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvehiclehealth ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:health = floatstr(cmdtext[18]);

        NPC_SetVehicleHealth(npcid, health);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle health set to %.2f", npcid, health);

        return 1;
    }
    return 0;
}
```
## Notas

- Funciona apenas quando NPC está em um veículo
- A saúde varia de 0,0 (destruída) a 1000,0 (condição perfeita)
- Veículos explodem quando a saúde cai abaixo de 250

## Funções Relacionadas

- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): Obtenha a integridade do veículo
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo de NPC
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [SetVehicleHealth](SetVehicleHealth): Defina a integridade do veículo diretamente

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
