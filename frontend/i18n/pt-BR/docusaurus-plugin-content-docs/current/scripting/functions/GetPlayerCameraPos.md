---
title: GetPlayerCameraPos
sidebar_label: GetPlayerCameraPos
description: "Obtenha a posição da câmera do jogador."
tags: ["player", "camera"]
---


## Descrição

Obtenha a posição da câmera do jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------- |
| playerid | O ID do jogador para obter a posição da câmera.                 |
| &Float:x | Uma variável flutuante para armazenar a coordenada X, passada por referência. |
| &Float:y | Uma variável flutuante para armazenar a coordenada Y, passada por referência. |
| &Float:z | Uma variável flutuante para armazenar a coordenada Z, passada por referência. |

## Retornos

A posição do jogador é armazenada nas variáveis especificadas.

## Exemplos

```c
public OnPlayerDisconnect(playerid, reason)
{
    new Float:x, Float:y, Float:z;
    GetPlayerCameraPos(playerid, x, y, z);

    printf("The player left when they had their camera at %f, %f, %f.", x, y, z);
    return 1;
}
```
## Notas

:::warning

As posições da câmera do jogador são atualizadas apenas uma vez por segundo, a menos que esteja mirando. É recomendado definir um cronômetro de 1 segundo se você deseja realizar uma ação que dependa da posição da câmera do jogador.

:::

## Funções Relacionadas

- [SetPlayerCameraPos](SetPlayerCameraPos): Defina a posição da câmera de um jogador.
- [GetPlayerCameraZoom](GetPlayerCameraZoom): Obtenha o nível de zoom da câmera de um jogador.
- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRatio): Obtenha a proporção da câmera de um jogador.
- [GetPlayerCameraMode](GetplayerCameraMode): Obtenha o modo de câmera do jogador.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador
- [GetPlayerZAim](GetPlayerZAim): Obtém o Z Aim do jogador.
