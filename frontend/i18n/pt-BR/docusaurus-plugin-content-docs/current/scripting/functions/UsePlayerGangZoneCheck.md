---
title: UsePlayerGangZoneCheck
sidebar_label: UsePlayerGangZoneCheck
description: "Ativa o callback quando um jogador entra/sai desta zona"
tags: ["player", "gangzone", "playergangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Ativa o callback quando um jogador entra/sai desta zona.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual você deseja ativar o acionamento de callback quando o jogador entra/sai desta zona. |
| zoneid | O ID da zona do jogador para ativar a detecção de área.                                                       |
| bool:enable | A detecção de entrada deve ser iniciada ou interrompida? (`true`/`false`) |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. A gangzone especificada não existe.

## Exemplos

```c
// Esta variável é usada para armazenar o id da gangzone
// para que possamos usá-lo em todo o script
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Crie a zona de gangue
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Habilitado o retorno de chamada quando um jogador entra em /leaves nesta zona
    UsePlayerGangZoneCheck(playerid, gGangZoneID[playerid], true);
}

public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "You are leaving player gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```
## Callbacks Relacionadas

Os retornos de chamada a seguir podem ser úteis, pois estão relacionados a esta função de uma forma ou de outra.

- [OnPlayerEnterPlayerGangZone](../callbacks/OnPlayerEnterPlayerGangZone): Este callback é chamado quando um jogador entra em uma gangzone de jogador.
- [OnPlayerLeavePlayerGangZone](../callbacks/OnPlayerLeavePlayerGangZone): Este callback é chamado quando um jogador sai de uma gangzone de jogador.

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esta função de uma forma ou de outra.

- [CreatePlayerGangZone](CreatePlayerGangZone): Criar gangzone de jogador.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destrua a gangzone do jogador.
- [PlayerGangZoneShow](PlayerGangZoneShow): Mostrar zona de gangue do jogador.
- [PlayerGangZoneHide](PlayerGangZoneHide): Ocultar zona de gangue do jogador.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Inicia o flash da gangzone do jogador.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Interrompe o flash da gangzone do jogador.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Obtenha a cor piscante da gangzone de um jogador.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Obtenha a cor da gangzone de um jogador.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Obtenha a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Verifique se a gangzone do jogador é válida.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Verifica se o jogador está na gangzone do jogador.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Verifique se a gangzone do jogador está visível.
