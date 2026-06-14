---
title: HasPlayerObjectCameraCollision
sidebar_label: HasPlayerObjectCameraCollision
description: "Verifica se um objeto do jogador tem colisão de câmera habilitada. (SetPlayerObjectNoCameraCollision)"
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um objeto do jogador tem colisão de câmera habilitada. ([SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision))

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador.          |
| objectid | O ID do objeto a ser verificado. |

## Retornos

`true` - A colisão da câmera do objeto do jogador está habilitada.

`false` - A colisão da câmera do objeto do jogador está desativada.

## Exemplos

```c
if (HasPlayerObjectCameraCollision(playerid, playerobjectid))
{
    printf("Player: %d  Object: %d  Camera collision: enable", playerid, playerobjectid);
}
else
{
    printf("Player: %d  Object: %d  Camera collision: disable", playerid, playerobjectid);
}
```
## Funções Relacionadas

- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): Desativa colisões entre as câmeras dos jogadores e o objeto especificado.
- [HasObjectCameraCollision](HasObjectCameraCollision): Verifica se um objeto está com colisão de câmera habilitada.
