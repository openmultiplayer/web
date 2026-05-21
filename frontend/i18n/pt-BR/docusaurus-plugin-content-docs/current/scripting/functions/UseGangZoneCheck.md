---
title: UseGangZoneCheck
sidebar_label: UseGangZoneCheck
description: "Ativa o callback quando um jogador entra/sai desta zona"
tags: ["player", "gangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Ativa o callback quando um jogador entra/sai desta zona.

| Nome | Descrição |
| ----------- | -------------------------------------------------------------- |
| zoneid | O ID da zona para a qual ativar a detecção de área.               |
| bool:enable | A detecção de entrada deve ser iniciada ou interrompida? (`true`/`false`) |

## Retornos

**1:** A função foi executada com sucesso.

**0:** A função não foi executada. A gangzone especificada não existe.

## Exemplos

```c
new gGangZoneID = INVALID_GANG_ZONE;

public OnGameModeInit()
{
    gGangZoneID = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    // Habilitado o retorno de chamada quando um jogador entra em /leaves nesta zona
    UseGangZoneCheck(gGangZoneID, true);
}

public OnPlayerEnterGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "You are entering gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeaveGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```
## Callbacks Relacionadas

Os retornos de chamada a seguir podem ser úteis, pois estão relacionados a esta função de uma forma ou de outra.

- [OnPlayerEnterGangZone](../callbacks/OnPlayerEnterGangZone): Este callback é chamado quando um jogador entra em uma gangzone.
- [OnPlayerLeaveGangZone](../callbacks/OnPlayerLeaveGangZone): Este callback é chamado quando um jogador sai de uma gangzone.

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esta função de uma forma ou de outra.

- [GangZoneCreate](GangZoneCreate): Crie uma gangzone.
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
