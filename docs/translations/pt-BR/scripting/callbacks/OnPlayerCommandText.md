---
title: OnPlayerCommandText
description: Esta callback é chamada quando o jogador entra com um comando na janela de chat do cliente.
tags: ["player"]
---

## Descrição

Esta callback é chamada quando o jogador entra com um comando na janela de chat do cliente. Comandos são qualquer coisa que iniciam com uma barra, EX: /help.

| Nome      | Descrição                                       |
| --------- | ----------------------------------------------- |
| playerid  | O ID do jogador que entrou com um comando.      |
| cmdtext[] | O comando que foi digitado (incluindo a barra). |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Este é o comando /help!");
        return 1;
        // Returnar 1 informa que o comando foi processado.
        // OnPlayerCommandText não será chamado em outro script.
    }
    return 0;
    // Retornar 0 informa que o comando não foi precessado pelo script.
    // OnPlayerCommandText será chamado em outros scripts até que seja retornado 1.
    // Se nenhum script retornar 1, uma mensagem irá aprecer: 'SERVER: Unknown Command'
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas

- [SendRconCommand](../functions/SendRconCommand): Envia um comando via RCON.
