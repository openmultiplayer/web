---
title: LimitGlobalChatRadius
sidebar_label: LimitGlobalChatRadius
description: "Defina uma limitação de raio para o chat."
tags: []
---


## Descrição

Defina uma limitação de raio para o chat. Apenas jogadores a uma certa distância do jogador verão sua mensagem no chat. Também altera a distância em que um jogador pode ver outros jogadores no mapa à mesma distância.

| Nome | Descrição |
| ---------------- | ---------------------------------------------------- |
| Float:chatRadius | A faixa em que os jogadores poderão ver o bate-papo. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    LimitGlobalChatRadius(200.0);
    return 1;
}
```
## Funções Relacionadas

- [SetNameTagDrawDistance](SetNameTagDrawDistance): Defina a distância de onde as pessoas podem ver os crachás de outros jogadores.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Força um jogador a enviar texto para um jogador.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Força um jogador a enviar texto para todos os jogadores.

## Callbacks Relacionadas

- [OnPlayerText](../callbacks/OnPlayerText): Chamado quando um jogador envia uma mensagem pelo chat.
