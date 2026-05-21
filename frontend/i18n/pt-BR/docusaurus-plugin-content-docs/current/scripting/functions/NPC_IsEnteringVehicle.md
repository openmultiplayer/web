---
title: NPC_IsEnteringVehicle
sidebar_label: NPC_IsEnteringVehicle
description: "Verifica se um NPC está entrando em um veículo."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está atualmente em processo de entrada em um veículo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver entrando em um veículo, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkenteringvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isEntering = NPC_IsEnteringVehicle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering vehicle: %s", npcid, isEntering ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true somente durante a entrada da animação/processo
- Assim que NPC estiver totalmente dentro, isso retornará false
- O NPC deve ter sido instruído para entrar com NPC_EnterVehicle

## Funções Relacionadas

- [NPC_EnterVehicle](NPC_EnterVehicle): Faça NPC entrar no veículo
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): Entrar no veículo ID
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Obtenha o assento
- [NPC_GetVehicle](NPC_GetVehicle): Obtenha o veículo atual

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
