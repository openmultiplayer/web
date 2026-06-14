---
title: IsPlayerInGangZone
sidebar_label: IsPlayerInGangZone
description: "Verifique se o jogador está na gangzone"
tags: ["player", "gangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o jogador está na gangzone.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| playerid | O ID do jogador para verificar se ele está em uma gangzone. |
| zoneid | O ID da gangzone.                               |

## Retornos

**true** – O jogador está na gangzone.

**false** – O jogador não está na gangzone.

## Notas

:::warning

Esta função é para open.mp, não para SA-MP. Para usar com SA-MP, você precisa do plugin [YSF](https://github.com/IS4Code/YSF/releases).

:::

:::warning

Esta função não pode ser usada sem que [UseGangZoneCheck](UseGangZoneCheck) seja chamado primeiro.

:::

## Funções Relacionadas

- [GangZoneDestroy](GangZoneDestroy): Destrua uma zona de gangue.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone para um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Ocultar uma gangzone para um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Oculte uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz um flash de gangzone para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faça um flash de gangzone para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Interrompe o flash de uma gangzone para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Interrompe o flash de uma gangzone para todos os jogadores.
- [IsValidGangZone](IsValidGangZone): Verifique se a gangzone é válida.
