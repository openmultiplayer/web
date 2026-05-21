---
title: IsGangZoneVisibleForPlayer
sidebar_label: IsGangZoneVisibleForPlayer
description: "Verifique se a gangzone está visível para o jogador"
tags: ["player", "gangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se a gangzone está visível para o jogador.

| Nome | Descrição |
| -------- | ---------------------------------- |
| playerid | O ID do jogador a ser verificado. |
| zoneid | O ID da gangzone.            |

## Retornos

**true** – A gangzone fica visível para o jogador.

**false** - A gangzone não está visível para o jogador.

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
