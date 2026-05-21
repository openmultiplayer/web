---
title: GetPlayerCameraTargetPlayer
sidebar_label: GetPlayerCameraTargetPlayer
description: "Permite recuperar o ID do jogador que o playerid está visualizando."
tags: ["player", "camera"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Permite recuperar o ID do jogador que o playerid está visualizando.

| Nome | Descrição |
| -------- | ----------------------------- |
| playerid | O ID do jogador a ser verificado |

## Retornos

O ID do jogador que o playerid está olhando

## Exemplos

```c
new playerTarget = GetPlayerCameraTargetPlayer(playerid);

if (IsPlayerAdmin(playerTarget))
{
    GameTextForPlayer(playerid, "Looking at an admin", 3000, 3);
}
```
## Notas

:::warning

Não confunda esta função com GetPlayerTargetPlayer. GetPlayerTargetPlayer retorna o ID do jogador que playerid está atacando (com uma arma). GetPlayerCameraTargetPlayer retorna o ID do jogador que o playerid está olhando (o ponto de referência é o centro da tela).

:::

## Funções Relacionadas

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Obtenha o ID do ator (se houver) que um jogador está olhando.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Obtenha o ID do veículo que o jogador está olhando.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): Obtenha o ID do objeto que um jogador está olhando.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): Obtenha o vetor frontal da câmera do jogador
