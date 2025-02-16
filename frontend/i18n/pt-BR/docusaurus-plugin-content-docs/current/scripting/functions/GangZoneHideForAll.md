---
title: GangZoneHideForAll
sidebar_label: GangZoneHideForAll
description: Esconde uma gangzone de todos os jogadores.
tags: ["gangzone"]
---

## Descrição

Esconde uma gangzone de todos os jogadores.

| Nome | Descrição                   |
| ---- | --------------------------- |
| zone | A gangzone a ser escondida. |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new gGangZoneId;
gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
GangZoneHideForAll(gGangZoneId);
```

## Funções Relacionadas

- [GangZoneCreate](GangZoneCreate): Cria uma gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destrói uma gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone a um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Esconde uma gangzone a um jogador.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz uma gangzone piscar para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faz uma gangzone piscar para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Pare uma Gangzone de piscar para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.
