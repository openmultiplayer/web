---
title: SetVehicleHealth
description: Define a vida de um veículo.
tags: ["vehicle"]
---

## Descrição

Define a vida de um veículo. Quando a vida do veículo diminui, o motor irá fazer fumaça, até que arde quando diminuir para menos de 250 (25%).

| Nome         | Descrição                         |
| ------------ | --------------------------------- |
| vehicleid    | O ID do veículo a definir a vida. |
| Float:health | A vida, em valor float.           |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. Isso significa que o veículo não existe.

## Exemplos

```c
if (strcmp("/fixengine", cmdtext, true) == 0)
{
    new
        vehicleid = GetPlayerVehicleID(playerid);

    SetVehicleHealth(vehicleid, 1000);
    SendClientMessage(playerid, COLOUR_WHITE, "O motor do veículo foi reparado.");
    return 1;
}
```

## Notas

:::tip

A vida máxima do veículo é 1000. Valores maiores são possíveis. Para mais informações sobre os valores de vida dos veículos , veja [esta](../resources/vehiclehealth) página.

:::

## Funções Relacionadas

- [GetVehicleHealth](GetVehicleHealth): Verifica a vida de um veículo.
- [RepairVehicle](RepairVehicle): Repara totalmente um veículo.
- [SetPlayerHealth](SetPlayerHealth): Define a vida de um jogador.
- [OnVehicleDeath](../callbacks/OnVehicleDeath): É chamado quando um veículo é destruído.
