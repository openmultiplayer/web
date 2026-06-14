---
title: GetPlayerCameraTargetObject
sidebar_label: GetPlayerCameraTargetObject
description: "Permite recuperar o ID do objeto que o jogador está olhando."
tags: ["player", "camera"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Permite recuperar o ID do objeto que o jogador está olhando.

| Nome | Descrição |
| -------- | ----------------------------- |
| playerid | O ID do jogador a ser verificado |

## Retornos

O ID do objeto que o playerid está olhando. Se INVALID_OBJECT_ID (65535) for retornado, playerid não está olhando para nenhum objeto.

## Exemplos

```c
new globalObjectID;

public OnGameModeInit()
{
    globalObjectID = CreateObject(1337, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetObject(playerid);
        if (objectid == globalObjectID)
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

- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): Obtenha o ID do veículo que o jogador está olhando.
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): Obtenha o ID do jogador que um jogador está olhando.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador
