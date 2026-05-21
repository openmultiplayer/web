---
title: NPC_SetVehicleTrainSpeed
sidebar_label: NPC_SetVehicleTrainSpeed
description: "Define a velocidade do veículo ferroviário de um NPC."
tags: ["npc", "vehicle", "train", "speed"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a velocidade do veículo ferroviário de um NPC.

| Nome | Descrição |
| ----- | ---------------------- |
| npcid | O ID do NPC |
| speed | A velocidade do trem a ser definida |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/settrainspeed ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:speed = floatstr(cmdtext[15]);

        NPC_SetVehicleTrainSpeed(npcid, speed);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d train speed set to %.2f", npcid, speed);

        return 1;
    }
    return 0;
}
```
## Notas

- Funciona apenas com veículos ferroviários (modelos 537, 538)
- Use NPC_GetVehicleTrainSpeed para verificar a velocidade atual
- Definir a velocidade para 0 para o trem

## Funções Relacionadas

- [NPC_GetVehicleTrainSpeed](NPC_GetVehicleTrainSpeed): Obtenha a velocidade do trem
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo de NPC
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [GetVehicleModel](GetVehicleModel): Obtenha o modelo do veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
