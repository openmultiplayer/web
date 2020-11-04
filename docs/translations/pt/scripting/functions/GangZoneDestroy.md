---
title: GangZoneDestroy
description: Destrói uma gangzone.
tags: ["gangzone"]
---

## Descrição

Destrói uma gangzone.

| Nome | Descrição                    |
| ---- | ---------------------------- |
| zone | O ID da gangzone a destruir. |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new gangZoneId;
gangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

GangZoneDestroy(gangZoneId);
```

## Funções Relacionadas

- [GangZoneCreate](GangZoneCreate): Cria uma gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone a um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Esconde uma gangzone a um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Esconde uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz uma gangzone piscar para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faz uma gangzone piscar para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Pare uma Gangzone de piscar para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.
