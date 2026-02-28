---
title: GetPlayerZAim
sidebar_label: GetPlayerZAim
description: Obtém o Z Aim de um jogador.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o Z Aim de um jogador. (relacionado à câmera e mira)

| Name     | Description           |
| -------- | --------------------- |
| playerid | O ID do jogador.      |

## Retorno

Retorna o Z Aim do jogador como valor float.

## Exemplos

```c
new Float:zAim = GetPlayerZAim(playerid);

SendClientMessage(playerid, -1, "Z Aim = %f", zAim);
```

## Funções Relacionadas

- [GetPlayerCameraPos](GetPlayerCameraPos): Obtém a posição da câmera do jogador.
