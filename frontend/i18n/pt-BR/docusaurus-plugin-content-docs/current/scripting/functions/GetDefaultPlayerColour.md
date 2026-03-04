---
title: GetDefaultPlayerColour
sidebar_label: GetDefaultPlayerColour
description: Obtém a cor padrão para o ID do jogador.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a cor padrão para o ID do jogador.

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | O ID do jogador para obter a cor. Não precisa estar conectado.            |

## Retorno

A cor padrão do jogador.

## Exemplos

```c
new colour = GetDefaultPlayerColour(playerid);
```

## Funções Relacionadas

- [GetPlayerColor](GetPlayerColor): Obtém a cor de um jogador.
