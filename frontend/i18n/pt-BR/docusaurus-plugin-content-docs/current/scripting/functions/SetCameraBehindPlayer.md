---
title: SetCameraBehindPlayer
sidebar_label: SetCameraBehindPlayer
description: "Restaure a câmera para um local atrás do jogador, após usar uma função como SetPlayerCameraPos."
tags: ["player", "camera"]
---


## Descrição

Restaure a câmera para um local atrás do jogador, após usar uma função como SetPlayerCameraPos.

| Nome | Descrição |
| -------- | ---------------------------------------------- |
| playerid | O jogador para o qual você deseja restaurar a câmera. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
SetCameraBehindPlayer(playerid);
```
## Funções Relacionadas

- [SetPlayerCameraPos](SetPlayerCameraPos): Defina a posição da câmera de um jogador.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Defina para onde a câmera do jogador deve ficar voltada.
