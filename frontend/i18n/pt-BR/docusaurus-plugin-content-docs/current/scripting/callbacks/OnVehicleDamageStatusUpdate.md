---
title: OnVehicleDamageStatusUpdate
sidebar_label: OnVehicleDamageStatusUpdate
description: Essa callback é executada quando elementos do veíclo como portas, rodas, painéis, ou luzes mudam seu status de dano.
tags: ["vehicle"]
---

:::tip

Funções úteis para trabalhar com danos em veículos podem ser encontradas [aqui](../resources/damagestatus).

:::

## Descrição

Essa callback é executada quando elementos do veíclo como portas, rodas, painéis, ou luzes mudam seu status de dano.

| Nome      | Descrição                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------ |
| vehicleid | ID do veículo que teve seu status de dano modificado.                                                  |
| playerid  | ID do jogador que foi sincronizado com o dano no veículo (aquele que danificou ou reparou o veículo).  |

## Retornos

1 - Irá previnir que outros filterscripts recebam essa callback.

0 - Indica que essa callback pode ser passada para o próximo filterscript.

Sempre executada primeiro nos filterscripts.

## Exemplos

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Pega o status de dano nos componentes.
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // Define a roda como 0, o que significa que a mesma não está estourada.
    tires = 0;

    // Faz o update no dano do veículo informando que a roda não está estourada.
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## Notas

:::tip

Essa função não incluí parâmetros do dano(vida) do veículo.

:::

## Funções Relacionadas

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Pega o status de dano do veículo por parte selecionada.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Faz o update no status de dano do veículo.
