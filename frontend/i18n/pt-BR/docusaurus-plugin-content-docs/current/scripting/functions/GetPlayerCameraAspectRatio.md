---
title: GetPlayerCameraAspectRatio
sidebar_label: GetPlayerCameraAspectRatio
description: "Recupera a proporção da câmera de um jogador."
tags: ["player", "camera"]
---


## Descrição

Recupera a proporção da câmera de um jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------- |
| playerid | O ID do jogador para obter a proporção da câmera. |

## Retornos

A proporção da câmera do jogador, como um flutuador.

A proporção pode ser um de três valores: 4:3 (1,3333334, Float:0x3FAAAAAB) quando a tela widescreen está desligada, 5:4 (1,2470589, Float:0x3F9F9FA0) quando o modo letterbox está ativado e 16:9 (1,7764707, Float:0x3FE36364) quando a tela widescreen está ativada, independentemente do modo letterbox.

## Exemplos

```c
new string[128];
format(string, sizeof(string), "Your aspect ratio: %f", GetPlayerCameraAspectRatio(playerid));
SendClientMessage(playerid, -1, string);
```
## Notas

:::tip

O valor de retorno desta função representa o valor da opção "widescreen" nas configurações de exibição do jogo, não a proporção real da tela do jogador.

:::

## Funções Relacionadas

- [GetPlayerCameraZoom](GetPlayerCameraZoom): Obtenha o nível de zoom da câmera de um jogador.
- [GetPlayerCameraPos](GetPlayerCameraPos): Descubra onde está a câmera do jogador.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador
