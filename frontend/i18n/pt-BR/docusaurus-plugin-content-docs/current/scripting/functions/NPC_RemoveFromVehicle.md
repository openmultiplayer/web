---
title: NPC_RemoveFromVehicle
sidebar_label: NPC_RemoveFromVehicle
description: "Remove um NPC do veículo atual."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Remove um NPC do veículo atual.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC foi removido do veículo, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcremovefromvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_RemoveFromVehicle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d removed from vehicle: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- NPC aparecerá instantaneamente fora do veículo sem animação de saída
- Use NPC_ExitVehicle para saída animada
- Retorna false se NPC não estiver em um veículo
- A posição NPC será definida perto do veículo

## Funções Relacionadas

- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [NPC_ExitVehicle](NPC_ExitVehicle): Faça NPC sair com animação
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo de NPC
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Obtenha o assento de NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
