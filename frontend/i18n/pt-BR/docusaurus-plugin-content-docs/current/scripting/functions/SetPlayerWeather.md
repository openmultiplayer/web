---
title: SetPlayerWeather
sidebar_label: SetPlayerWeather
description: "Defina o clima de um jogador."
tags: ["player"]
---


## Descrição

Defina o clima de um jogador.

| Nome | Descrição |
| -------- | --------------------------------------------- |
| playerid | O ID do jogador cujo clima será definido.    |
| weather | O [clima](../resources/weatherid) a ser definido. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

- Se [TogglePlayerClock](TogglePlayerClock) estiver ativado, o clima mudará lentamente com o tempo, em vez de mudar instantaneamente.
- Existem apenas 21 climas IDs válidos no jogo (0 - 20), porém o jogo não possui nenhuma forma de verificação de alcance.

:::

## Funções Relacionadas

- [GetPlayerWeather](GetPlayerWeather): Obtenha a previsão do tempo de um jogador.
- [SetWeather](SetWeather): Defina o clima global.
- [SetGravity](SetGravity): Defina a gravidade global.

## Recursos relacionados

- [Tempo IDs](../resources/weatherid)
