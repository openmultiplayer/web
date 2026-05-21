---
title: IsPlayerInModShop
sidebar_label: IsPlayerInModShop
description: "Verifique se o jogador está na loja de mods."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o jogador está na loja de mods.

## Parâmetros

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Valores de retorno

**true** – O jogador está na loja de mods.

**false** – O jogador não está na loja de mods.

## Exemplos

```c
if (IsPlayerInModShop(playerid))
{
    SendClientMessage(playerid, 0xFFFF00FF, "You are in the mod shop.");
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "You are not in the mod shop.");
}
```
## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [AddVehicleComponent](AddVehicleComponent): Adicione um componente a um veículo.

## Callbacks Relacionadas

Os retornos de chamada a seguir podem ser úteis, pois estão relacionados a esse callback de uma forma ou de outra.

- [OnVehicleMod](../callbacks/OnVehicleMod): Este callback é chamado quando um veículo é modificado.
- [OnVehicleRespray](../callbacks/OnVehicleRespray): Este callback é chamado quando um jogador sai de uma loja de mods, mesmo que as cores não tenham sido alteradas.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): Este callback é chamado quando um jogador visualiza a pintura de um veículo dentro de uma loja de mods.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Este callback é chamado quando um jogador entra ou sai de uma loja de mod.
