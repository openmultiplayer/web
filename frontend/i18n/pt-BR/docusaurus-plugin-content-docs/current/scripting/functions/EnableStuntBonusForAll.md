---
title: EnableStuntBonusForAll
sidebar_label: EnableStuntBonusForAll
description: "Ativa ou desativa bônus de acrobacias para todos os jogadores."
tags: []
---


## Descrição

Ativa ou desativa bônus de acrobacias para todos os jogadores. Se ativado, os jogadores receberão recompensas monetárias ao realizar uma manobra em um veículo (por exemplo, um cavalinho).

| Nome | Descrição |
| ----------- | ---------------------------------------------------------- |
| bool:enable | 'true' para ativar bônus de acrobacias ou 'false' para desativá-los. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    EnableStuntBonusForAll(false);
    return 1;
}
```
## Notas

:::tip

Você também pode alternar os bônus de acrobacias via [config.json](../../server/config.json)

```json
"use_stunt_bonuses": false,
```
:::

## Funções Relacionadas

- [EnableStuntBonusForPlayer](EnableStuntBonusForPlayer): Alterna os bônus de acrobacias para um jogador.
