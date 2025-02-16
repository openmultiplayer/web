---
title: OnPlayerText
description: Executada quando o Player envia uma mensagem no chat.
tags: ["player"]
---

## Descrição

Executada quando o Player envia uma mensagem no chat.

| Nome     | Descrição                                |
| -------- | ---------------------------------------- |
| playerid | ID do jogador que enviou o texto.        |
| text[]   | Texto que o jogador enviou.              |

## Retornos

Sempre executada primeiro nos filterscripts, ao retornar 0 bloqueia outros scripts de visualizarem a mesma.

## Exemplos

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // Ignora o texto padrão e envia um personalizado.
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Força um jogador enviar uma mensagem para outro jogador.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Força um jogador a mandar uma mensagem visível para todos.
