---
title: SetPlayerHealth
sidebar_label: SetPlayerHealth
description: "Defina a saúde de um jogador."
tags: ["player"]
---


## Descrição

Defina a saúde de um jogador.

| Nome | Descrição |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador cuja saúde será definida.                                                                                   |
| Float:health | O valor para definir a saúde do jogador. A integridade máxima que pode ser exibida no HUD é 100, embora valores mais altos sejam válidos. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/heal", cmdtext, true))
    {
        // Define a saúde dos jogadores para o máximo
        SetPlayerHealth(playerid, 100.0);
        return 1;
    }
    if (!strcmp("/kill", cmdtext, true))
    {
        // Mata os jogadores
        SetPlayerHealth(playerid, 0.0);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

- Se a saúde de um jogador estiver definida como 0,0 ou um valor negativo, ele morrerá instantaneamente.
- Se a saúde de um jogador estiver abaixo de 10,0 ou acima de 98303,0, sua barra de saúde piscará.

:::

:::warning

A saúde é arredondada para números inteiros: defina 50,15, mas obtenha 50,0

:::

## Funções Relacionadas

- [GetPlayerHealth](GetPlayerHealth): Descubra quanta saúde um jogador tem.
- [GetPlayerArmour](GetPlayerArmour): Descubra quanta armadura um jogador possui.
- [SetPlayerArmour](SetPlayerArmour): Define a armadura de um jogador.
