---
title: NPC_PutInVehicle
sidebar_label: NPC_PutInVehicle
description: "Coloca um NPC em um veículo em um assento específico."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Coloca um NPC em um veículo em um assento específico.

| Nome | Descrição |
| --------- | ----------------------------- |
| npcid | O ID do NPC |
| vehicleid | O ID do veículo |
| seatid | O assento ID para colocar o NPC |

## Retornos

Retorna `true` se NPC foi colocado no veículo com sucesso, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcputinvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = GetPlayerVehicleID(playerid);
        if (vehicleid == 0)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not in a vehicle.");

        new bool:success = NPC_PutInVehicle(npcid, vehicleid, 1);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d put in vehicle %d (seat 1): %s", npcid, vehicleid, success ? "Success" : "Failed");
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

- NPC aparecerá instantaneamente no veículo sem entrar na animação
- Use NPC_GetVehicleID para verificar em qual veículo um NPC está
- O assento 0 é sempre o assento do motorista
- Assento máximo ID depende do modelo do veículo

## Funções Relacionadas

- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remova NPC do veículo
- [NPC_GetVehicleID](NPC_GetVehicleID): Obtenha o veículo de NPC
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Obtenha o assento de NPC
- [NPC_EnterVehicle](NPC_EnterVehicle): Faça NPC entrar com animação

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
