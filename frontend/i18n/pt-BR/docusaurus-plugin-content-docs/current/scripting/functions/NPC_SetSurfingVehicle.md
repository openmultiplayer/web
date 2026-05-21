---
title: NPC_SetSurfingVehicle
sidebar_label: NPC_SetSurfingVehicle
description: "Define o veículo em que um NPC está navegando."
tags: ["npc", "surfing", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o veículo em que um NPC está navegando.

| Nome | Descrição |
| --------- | ----------------- |
| npcid | O ID do NPC |
| vehicleid | O veículo ID |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setsurfingvehicle ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = strval(cmdtext[19]);

        NPC_SetSurfingVehicle(npcid, vehicleid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d surfing vehicle set to %d", npcid, vehicleid);

        return 1;
    }
    return 0;
}
```
## Notas

- Esta função permite que NPCs "surfe" nos veículos, o que significa que eles se moverão junto com o veículo enquanto mantêm sua posição em relação a ele
- O NPC seguirá o movimento, rotação e mudanças de posição do veículo
- Use `NPC_SetSurfingOffset` para posicionar o NPC em locais específicos do veículo (teto, capô, etc.)
- O veículo deve existir para que o surf funcione corretamente

## Funções Relacionadas

- [NPC_GetSurfingVehicle](NPC_GetSurfingVehicle): Obtém o veículo em que um NPC está navegando
- [NPC_SetSurfingObject](NPC_SetSurfingObject): Define o objeto em que um NPC está navegando
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Define o objeto do jogador em que um NPC está navegando
- [NPC_SetSurfingOffset](NPC_SetSurfingOffset): Define o deslocamento de navegação para um NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): redefine todos os dados de navegação para um NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
