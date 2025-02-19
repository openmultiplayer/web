---
title: OnVehicleSirenStateChange
sidebar_label: OnVehicleSirenStateChange
description: Essa callback é chamada quando a sirene de um carro é ligada/desligada.
tags: ["vehicle"]
---

<VersionWarnPT name='callback' version='SA-MP 0.3.7' />

## Descrição

Essa callback é chamada quando a sirene de um carro é ligada/desligada.

| Nome      | Descrição                                                                      |
| --------- | ------------------------------------------------------------------------------ |
| playerid  | ID do jogador que ligou/desligou a sirene (motorista).                         |
| vehicleid | ID do veículo que teve a sirene ligada/desligada.                              |
| newstate  | Retorna o novo estado da sirene após a troca. 0 para desligada, 1 para ligada. |

## Retornos

0 - Vai prevenir que outros Filterscripts chamem essa callback.

1 - Indica que essa callback vai ser passada para o Gamemode em seguida.

Sempre é chamada primeiro em Filterscripts.

## Exemplos

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Sirene ~G~ligada", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Sirene ~r~desligada", 1000, 3);
    }
    return 1;
}
```

## Notas

:::tip

Essa callback **só é chamada** quando a sirene é ligada/desligada, **NÃO** quando a sirene alternativa está sendo usada (segurando a buzina).

:::

## Funções Relacionadas

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Verifica se a sirene de um veículo está ou não ligada.
