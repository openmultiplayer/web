---
title: NPC_GetVehicleSeat
sidebar_label: NPC_GetVehicleSeat
description: "Obtém o assento ID de um NPC em um veículo."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o assento ID de um NPC em um veículo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna o assento ID ou -1 se não estiver em um veículo.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicleseat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new seatid = NPC_GetVehicleSeat(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle seat: %d", npcid, seatid);
        return 1;
    }
    return 0;
}
```
## Assento IDs

| ID | Assento |
| --- | ---------------------------- |
| 0 | Motorista |
| 1 | Passageiro dianteiro |
| 2 | Passageiro traseiro esquerdo |
| 3 | Passageiro traseiro direito |
| 4+ | Assentos de passageiros (autocarro, etc.) |

## Notas

- Retorna -1 se NPC não estiver em nenhum veículo
- O assento 0 é sempre o assento do motorista
- O assento máximo ID depende do modelo do veículo

## Funções Relacionadas

- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo NPC de ID
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remova NPC do veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
