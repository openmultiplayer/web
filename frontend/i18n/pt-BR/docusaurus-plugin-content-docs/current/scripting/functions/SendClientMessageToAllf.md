---
title: SendClientMessageToAllf
sidebar_label: SendClientMessageToAllf
description: "Exibe uma mensagem formatada no chat para todos os jogadores."
tags: []
---


<VersionWarn version='open.mp beta build 6' />

:::warning

Esta função foi descontinuada.

A função [SendClientMessageToAll](SendClientMessageToAll) agora está integrada ao formato!

:::

## Descrição

Exibe uma mensagem formatada no chat para todos os jogadores. Este é um equivalente multijogador de SendClientMessage.

| Nome | Descrição |
| ----------------- | ------------------------------------------------- |
| color | A cor da mensagem (formato hexadecimal 0xRRGGBBAA). |
| const message[] | A mensagem a ser exibida (máximo de 144 caracteres).         |
| \{Float, \_\}:... | Número indefinido de argumentos de qualquer tag |

## Retornos

Esta função sempre retorna true (1).

## Exemplos

```c
#define HELLO_WORLD "Hello World"

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Envie uma mensagem para todos.
        SendClientMessageToAllf(-1, "%s!", HELLO_WORLD);
        return 1;
    }
    return 0;
}
```