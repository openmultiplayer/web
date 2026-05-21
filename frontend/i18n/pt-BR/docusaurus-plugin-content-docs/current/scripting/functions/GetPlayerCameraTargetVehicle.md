---
title: GetPlayerCameraTargetVehicle
sidebar_label: GetPlayerCameraTargetVehicle
description: "Obtenha o ID do veículo que o jogador está olhando."
tags: ["player", "vehicle", "camera"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtenha o ID do veículo que o jogador está olhando.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

O veículo ID do veículo que o jogador está olhando. `INVALID_VEHICLE_ID` se nenhum.

## Exemplos

```c
new globalVehicleID;

public OnGameModeInit()
{
    globalVehicleID = CreateVehicle(596, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, -1, -1, -1);
    return 1;
}

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new vehicleid = GetPlayerCameraTargetVehicle(playerid);
        if (vehicleid == globalVehicleID)
        {
            SendClientMessage(playerid, -1, "You're looking at your vehicle!");
        }
        else
        {
            SendClientMessage(playerid, -1, "You're not looking at your vehicle.");
        }
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Esta função pode (obviamente) retornar apenas um veículo ID por vez, enquanto o jogador pode estar olhando para vários. Geralmente parece detectar primeiro o veículo mais próximo.

:::

:::warning

Esta função está desabilitada por padrão para economizar largura de banda. Use [EnablePlayerCameraTarget](EnablePlayerCameraTarget) para habilitá-lo para cada jogador.

:::

## Funções Relacionadas

- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): Obtenha o ID do jogador que um jogador está olhando.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): Obtenha o ID do objeto que um jogador está olhando.
- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): Habilita funções de direcionamento da câmera do jogador.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): Coloque a câmera do jogador na frente
