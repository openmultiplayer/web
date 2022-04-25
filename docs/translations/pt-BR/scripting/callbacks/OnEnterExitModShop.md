---
title: OnEnterExitModShop
description: Esse callback é executado quando um jogado entra ou sai de uma garagem de modificações.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descrição

Esse callback é executado quando um jogado entra ou sai de uma garagem de modificações.

| Nome       | Descrição                                                                       |
| ---------- | ------------------------------------------------------------------------------- |
| playerid   | ID do jogador que entrou ou saiu do Modshop.                                    |
| enterexit  | 1 quando o jogador entra no Modshop 0 quando ele sai.                           |
| interiorid | ID do interior da garagem  que o jogador está(ou 0 caso o mesmo esteja saindo). |

## Retorno

Sempre a primeira a ser declarada em filterscripts.

## Exemplos

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Caso o enterexit for igual a 0 significa que o jogador está saindo do modshop.
    {
        SendClientMessage(playerid, COLOR_WHITE, "Belo carro! Uma taxa de $100 foi cobrada pelas modificações!");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notas

:::warning

Bug(s) Conhecidos: Alguns players podem "colidir" quando entram em determinadas garagens.

:::

## Funções Relacionadas

- [AddVehicleComponent](../functions/AddVehicleComponent): Adiciona um componente a um veículo.
