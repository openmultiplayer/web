---
title: OnVehicleStreamOut
description: Essa callback é chamada quando um veículo sai da área visível de um jogador.
tags: ["vehicle"]
---

:::warning

Esta callback foi implementada no SA-MP 0.3a e não funcionará em versões anteriores.

:::

## Descrição

Essa callback é chamada quando um veículo sai da área visível de um jogador.

| Nome        | Descrição                                                      |
| ----------- | -------------------------------------------------------------- |
| vehicleid   | ID do carro que saiu da área visível do jogador.               |
| forplayerid | ID do jogador cujo o carro saiu da área visível de um jogador. |

## Retornos

Sempre é chamada primeiro em Filterscripts.

## Exemplos

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "O carro de ID %d não está mais na sua área visível.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

Esta callback também pode ser chamada por um NPC.

## Funções Relacionadas
