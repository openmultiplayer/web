---
title: GetPlayerCameraTargetPlayerObject
sidebar_label: GetPlayerCameraTargetPlayerObject
description: "Permite recuperar o ID do objeto do jogador que o jogador está olhando."
tags: ["player", "camera", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Permite recuperar o ID do objeto do jogador que o jogador está olhando.

| Nome | Descrição |
| -------- | ----------------------------- |
| playerid | O ID do jogador a ser verificado |

## Retornos

O ID do objeto do jogador que o jogador está olhando.

Se `INVALID_OBJECT_ID` (65535) for retornado, o jogador não está olhando para nenhum objeto.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 19174, 978.9045, -986.3599, 40.9522, 0.0000, 0.0000, 228.0000);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetPlayerObject(playerid);
        if (objectid == gPlayerObject[playerid])
        {
            SendClientMessage(playerid, -1, "You're looking at your object.");
        }
        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535
        {
            SendClientMessage(playerid, -1, "You're not looking at any object.");
        }
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

Esta função está desabilitada por padrão para economizar largura de banda. Use [EnablePlayerCameraTarget](EnablePlayerCameraTarget) para habilitá-lo para cada jogador.

:::

## Funções Relacionadas

- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): Obtenha o ID do objeto que um jogador está olhando.
- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): Obtenha o ID do veículo que o jogador está olhando.
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): Obtenha o ID do jogador que um jogador está olhando.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador
