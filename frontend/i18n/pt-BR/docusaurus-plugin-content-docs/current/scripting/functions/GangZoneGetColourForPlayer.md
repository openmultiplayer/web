---
title: GangZoneGetColourForPlayer
sidebar_label: GangZoneGetColourForPlayer
description: "Obtenha a cor de uma gangzone para o jogador"
tags: ["player", "gangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a cor de uma gangzone para o jogador.

| Nome | Descrição |
| -------- | ------------------------------------- |
| playerid | O ID do jogador que você precisa obter. |
| zoneid | O ID da gangzone.               |

## Retornos

Cor da gangzone para o jogador.

**0:** Falha ao executar a função. A gangzone não é mostrada para o jogador.

## Funções Relacionadas

- [GangZoneDestroy](GangZoneDestroy): Destrua uma zona de gangue.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone para um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Ocultar uma gangzone para um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Oculte uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faça um flash de gangzone para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faça um flash de gangzone para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Interrompe o flash de uma gangzone para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Interrompe o flash de uma gangzone para todos os jogadores.
- [IsValidGangZone](IsValidGangZone): Verifique se a gangzone é válida.
- [IsPlayerInGangZone](IsPlayerInGangZone): Verifica se o jogador está na gangzone.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): Verifique se a gangzone está visível para o jogador.
