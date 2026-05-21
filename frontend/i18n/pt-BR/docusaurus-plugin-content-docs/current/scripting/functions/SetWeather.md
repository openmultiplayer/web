---
title: SetWeather
sidebar_label: SetWeather
description: "Defina o clima mundial para todos os jogadores."
tags: []
---


## Descrição

Defina o clima mundial para todos os jogadores.

| Nome | Descrição |
| --------- | --------------------------------------------- |
| weatherid | O [clima](../resources/weatherid) a ser definido. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sandstorm", true))
    {
        SetWeather(19);
        return 1;
    }
    return 1;
}
```
## Notas

:::tip

- Se [TogglePlayerClock](TogglePlayerClock) estiver ativado, o clima mudará lentamente com o tempo, em vez de mudar instantaneamente.
- Existem apenas 21 climas IDs válidos no jogo (0 - 20), porém o jogo não possui nenhuma forma de verificação de alcance.

:::

## Funções Relacionadas

- [GetWeather](GetWeather): Obtenha o clima mundial atual.
- [SetPlayerWeather](SetPlayerWeather): Defina o clima de um jogador.
- [SetGravity](SetGravity): Defina a gravidade global.

## Recursos relacionados

- [Tempo IDs](../resources/weatherid)
