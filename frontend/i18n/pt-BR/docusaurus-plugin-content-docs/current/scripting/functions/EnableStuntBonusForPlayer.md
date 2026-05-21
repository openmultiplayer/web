---
title: EnableStuntBonusForPlayer
sidebar_label: EnableStuntBonusForPlayer
description: "Alternar bônus de acrobacias para um jogador."
tags: ["player"]
---


## Descrição

Alternar bônus de acrobacias para um jogador. Habilitado por padrão.

| Nome | Descrição |
| ----------- | ----------------------------------------------------------- |
| playerid | O ID do jogador para o qual alternar os bônus de acrobacias.           |
| bool:enable | 'true' para ativar bônus de acrobacias e 'false' para desativá-los. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador não está conectado.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    EnableStuntBonusForPlayer(playerid, false); // Desative os bônus de acrobacias quando o jogador se conectar ao servidor.
    return 1;
}
```
## Funções Relacionadas

- [EnableStuntBonusForAll](EnableStuntBonusForAll): Alterna os bônus de acrobacias para todos os jogadores.
