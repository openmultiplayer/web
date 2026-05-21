---
title: NPC_EnterVehicle
sidebar_label: NPC_EnterVehicle
description: "Faz um NPC entrar em um veículo."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um NPC entrar em um veículo caminhando até ele e entrando.

| Nome | Descrição |
| --------- | ----------------------------------------- |
| npcid | O ID do NPC |
| vehicleid | O ID do veículo para entrar |
| seatid | O assento para entrar |
| moveType | O tipo de movimento a ser usado ao se aproximar |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcenterbike ", true, 14))
    {
        new seatid = strval(cmdtext[15]);
        if (cmdtext[15] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcenterbike [seatid]");

        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new vehicleid = PlayerVehicles[playerid][0];
        if (vehicleid == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "Your motorcycle is not available.");

        if (NPC_EnterVehicle(npcid, vehicleid, seatid, NPC_MOVE_TYPE_JOG))
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering motorcycle (seat %d).", npcid, seatid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d failed to enter motorcycle (seat %d).", npcid, seatid);

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

- O NPC tentará alcançar a porta do veículo, utilizando o tipo de movimento especificado, antes de entrar
- Se o assento estiver ocupado, o NPC poderá não conseguir entrar

## Funções Relacionadas

- [NPC_ExitVehicle](NPC_ExitVehicle): Faça com que NPC saia do veículo
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque instantaneamente NPC no veículo
- [NPC_GetVehicle](NPC_GetVehicle): Obtenha o veículo atual de NPC
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Verifique se NPC está entrando no veículo

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
