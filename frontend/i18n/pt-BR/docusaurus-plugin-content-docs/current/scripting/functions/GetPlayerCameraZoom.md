---
title: GetPlayerCameraZoom
sidebar_label: GetPlayerCameraZoom
description: "Recupera o nível de zoom da câmera do jogo para um determinado jogador."
tags: ["player", "camera"]
---


## Descrição

Recupera o nível de zoom da câmera do jogo para um determinado jogador.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| playerid | O ID do jogador para obter o nível de zoom da câmera. |

## Retornos

O nível de zoom da câmera do jogador (câmera, atirador etc.), um flutuador.

## Exemplos

```c
new string[128];
format(string, sizeof(string), "Your camera zoom level: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, string);
```
## Notas

:::tip

Isso recupera o nível de zoom da câmera GAME (incluindo o escopo Sniper), não da câmera WEAPON.

:::

## Funções Relacionadas

- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): Obtenha a proporção da câmera de um jogador.
- [GetPlayerCameraPos](GetPlayerCameraPos): Descubra onde está a câmera do jogador.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador
