---
title: ChangeVehicleColor
description: Altere a cor primária e secundária de um veículo.
tags: ["vehicle"]
---

## Descrição

Altere a cor primária e secundária de um veículo.

| Nome      | Descrição                                    |
| --------- | -------------------------------------------- |
| vehicleid | O ID do veículo cujas cores serão alteradas. |
| color1    | O ID da nova cor primária do veículo.        |
| color2    | O ID da nova cor secundária do veículo.      |

## Retorno

1: A função foi executada com sucesso. A cor do veículo foi alterada com sucesso.

0: A função falhou ao ser executada. O veículo não existe.

## Exemplos

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // Muda a cor primária para preto e a cor secundária para branco.
    ChangeVehicleColor(vehicleid, 0, 1);
    return 1;
}
```

## Notas

:::tip

Alguns veículos apenas possuem uma cor primária e outros não podem ter a cor alterada. Alguns (Cement, Squalo) têm 4 cores, das quais 2 não podem ser alteradas no SA:MP.

:::

## Funções Relacionadas

- [ChangeVehiclePaintjob](ChangeVehiclePaintjob.md): Mude o paintjob de um veículo.
- [OnVehicleRespray](../callbacks/OnVehicleRespray.md): É chamado quando um veículo é pintado (Pay'n'Spray).
