---
title: NPC_IsVehicleSirenUsed
sidebar_label: NPC_IsVehicleSirenUsed
description: "Verifica se um NPC está usando a sirene do veículo."
tags: ["npc", "vehicle", "siren"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está usando a sirene do veículo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver usando a sirene do veículo, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksirenused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new veh = NPC_GetVehicle(npcid);
        if (veh == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new bool:sirenUsed = NPC_IsVehicleSirenUsed(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle siren used: %s", npcid, sirenUsed ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna `false` se NPC não estiver em um veículo
- Funciona apenas para veículos que possuem sirenes (carros de polícia, ambulâncias, caminhões de bombeiros)
- Os efeitos visuais e sonoros da sirene são visíveis para todos os jogadores

## Funções Relacionadas

- [NPC_UseVehicleSiren](NPC_UseVehicleSiren): Alternar sirene do veículo
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo de NPC
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remova NPC do veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
