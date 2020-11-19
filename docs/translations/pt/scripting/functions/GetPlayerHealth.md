---
title: GetPlayerHealth
description: A função GetPlayerHealth permite obter a vida de um jogador.
tags: ["player"]
---

## Descrição

A função GetPlayerHealth permite obter a vida de um jogador. Útil para detetar cheats, entre outras coisas.

| Nome          | Descrição                                          |
| ------------- | -------------------------------------------------- |
| playerid      | O ID do jogador.                                   |
| &Float:health | Float para armazenar vida, passado por referência. |

## Retorno

1 - Sucesso

0 - Falha (por exemplo, jogador não está conectado).

A vida de um jogador é armazenada na variável especificada.

## Exemplos

```c
// Define a vida do jogador para 50 se for menor que
// 50 assim que ele digitar /doctor.

if (strcmp(cmdtext, "/doctor", true) == 0)
{
    new Float:health;
    GetPlayerHealth(playerid,health);
    if (health < 50.0)
    {
        SetPlayerHealth(playerid, 50.0);
    }
    return 1;
}
```

## Notas

:::warning

Mesmo que a vida possa ser definida para valores quase infinitos no lado do servidor, os usuários vão reportar valores até 255. Qualquer valor superior não funcionará; 256 passa a 0, 257 passa a 1, etc. A vida é obtida arredondando os integers: se definir 50.15, o jogador obtém 50.0.

:::

## Funções Relacionadas

- [SetPlayerHealth](SetPlayerHealth): Define a vida de um jogador.
- [GetVehicleHealth](GetVehicleHealth): Verifica a vida de um veículo.
- [GetPlayerArmour](GetPlayerArmour): Verifica o colete/armadura de um jogador.
