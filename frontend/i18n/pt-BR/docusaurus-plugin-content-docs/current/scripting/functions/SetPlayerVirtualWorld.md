---
title: SetPlayerVirtualWorld
sidebar_label: SetPlayerVirtualWorld
description: "Defina o mundo virtual de um jogador."
tags: ["player"]
---


## Descrição

Defina o mundo virtual de um jogador. Eles só podem ver outros jogadores ou veículos que estejam no mesmo mundo.

| Nome | Descrição |
| ------------ | ---------------------------------------------------------- |
| playerid | O ID do jogador cujo mundo virtual você deseja definir. |
| virtualWorld | O mundo virtual ID para colocar o jogador. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/world3", true) == 0)
    {
        SetPlayerVirtualWorld(playerid, 3);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

O mundo virtual padrão é 0.

:::

## Funções Relacionadas

- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Verifique em que mundo virtual um jogador está.
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Defina o mundo virtual de um veículo.
