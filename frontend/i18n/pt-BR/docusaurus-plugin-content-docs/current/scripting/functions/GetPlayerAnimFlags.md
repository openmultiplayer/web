---
title: GetPlayerAnimFlags
sidebar_label: GetPlayerAnimFlags
description: Obtém as flags de animação do jogador.
tags: ["player", "animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém as flags de animação do jogador.

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| playerid | O ID do jogador do qual você quer as flags de animação |

## Retorno

Retorna as flags de animação do jogador como inteiro.

## Exemplos

```c
new flags = GetPlayerAnimFlags(playerid);
```

## Funções Relacionadas

- [ApplyAnimation](ApplyAnimation): Aplica uma animação a um jogador.
