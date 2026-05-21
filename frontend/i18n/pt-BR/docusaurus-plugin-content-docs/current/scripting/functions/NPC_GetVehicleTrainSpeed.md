---
title: NPC_GetVehicleTrainSpeed
sidebar_label: NPC_GetVehicleTrainSpeed
description: "Obtém a velocidade do trem para um NPC dirigindo um trem."
tags: ["npc", "vehicle", "train"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a velocidade do trem para um NPC dirigindo um trem.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna a velocidade do trem como um valor flutuante ou 0,0 se não estiver em um trem.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicletrainspeed", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new Float:speed = NPC_GetVehicleTrainSpeed(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle train speed: %.2f", npcid, speed);
        return 1;
    }
    return 0;
}
```
## Notas

- Funciona apenas quando o NPC está dirigindo um veículo ferroviário
- Retorna 0,0 se NPC não estiver no trem ou não for o maquinista

## Funções Relacionadas

- [NPC_SetVehicleTrainSpeed](NPC_SetVehicleTrainSpeed): Definir velocidade do trem
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo de NPC
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
