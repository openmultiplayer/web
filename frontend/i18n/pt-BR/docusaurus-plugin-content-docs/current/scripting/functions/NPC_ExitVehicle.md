---
title: NPC_ExitVehicle
sidebar_label: NPC_ExitVehicle
description: "Faz um NPC sair de seu veículo atual."
tags: ["npc", "vehicle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um NPC sair de seu veículo atual.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcexitbike", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (NPC_ExitVehicle(npcid))
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is exiting motorcycle.", npcid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d failed to exit motorcycle.", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

- O NPC deve estar em um veículo para que esta função funcione, caso contrário esta função não terá efeito
- O NPC realizará a animação de saída e após sair o NPC estará a pé próximo ao veículo

## Funções Relacionadas

- [NPC_EnterVehicle](NPC_EnterVehicle): Faça NPC entrar em um veículo
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque instantaneamente NPC no veículo
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remova instantaneamente NPC do veículo
- [NPC_GetVehicle](NPC_GetVehicle): Obtenha o veículo atual de NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
