---
title: OnEnterExitModShop
description: Esta callback é chamada quando o jogador entra ou sai de um modshop.
tags: []
---
## Descrição

Esta callback é chamada quando o jogador entra ou sai de um shop mod.

| Nome       | Descrição                                                         |
| ---------- | ----------------------------------------------------------------- |
| playerid   | O ID do jogador que entrou/saiu do modshop                        |
| enterexit  | 1 se o jogador entrou ou 0 se ele saiu                            |
| interiorid | O ID do interior do modshop que o jogador entrou (ou 0 caso saia) |

## Retornos

É sempre chamado primeiro nas filterscripts.

## Exemplos

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Se enterexit é 0, isso significa que ele está saindo
    {
        SendClientMessage(playerid, COLOR_WHITE, "Ótimo carro! Você foi taxado em R$100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notas

:::warning

Bugs Conhecidos: Jogadores colidem quando entram no mesmo modshop.

:::

## Funções Relacionadas

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Adiciona um componente a um veículo.
