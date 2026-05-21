---
title: NPC_UseVehicleSiren
sidebar_label: NPC_UseVehicleSiren
description: "Faz um NPC usar ou parar de usar a sirene do veículo."
tags: ["npc", "vehicle", "siren"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um NPC usar ou parar de usar a sirene do veículo.

| Nome | Descrição |
| ----- | ---------------------------------------------------- |
| npcid | O ID do NPC |
| use | `true` para usar sirene, `false` para parar (padrão: true) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcusesiren ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new veh = NPC_GetVehicle(npcid);
        if (veh == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new bool:use = strval(cmdtext[13]) ? true : false;

        new bool:success = NPC_UseVehicleSiren(npcid, use);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle siren %s: %s", npcid, use ? "enabled" : "disabled", success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- Só funciona quando o NPC está em um veículo como motorista
- O veículo deverá suportar sirenes (veículos de emergência)
- O estado da sirene persiste até ser alterado ou NPC sair do veículo

## Funções Relacionadas

- [NPC_IsVehicleSirenUsed](NPC_IsVehicleSirenUsed): Verifique se a sirene está sendo usada
- [NPC_GetVehicle](NPC_GetVehicle): Obtenha o veículo atual de NPC
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [NPC_Move](NPC_Move): Faça NPC dirigir até o local

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
