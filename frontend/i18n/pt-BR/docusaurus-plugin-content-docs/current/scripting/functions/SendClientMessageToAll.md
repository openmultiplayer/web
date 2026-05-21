---
title: SendClientMessageToAll
sidebar_label: SendClientMessageToAll
description: "Exibe uma mensagem no chat para todos os jogadores."
tags: []
---


## Descrição

Exibe uma mensagem no chat para todos os jogadores. Este é um equivalente multijogador de [SendClientMessage](SendClientMessage).

| Nome | Descrição |
| ---------------- | ------------------------------------------------- |
| colour | A cor da mensagem (formato hexadecimal 0xRRGGBBAA). |
| const format[] | A mensagem a ser exibida (máximo de 144 caracteres).         |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.        |

## Retornos

Esta função sempre retorna **true (1)**.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Envie uma mensagem para todos.
        SendClientMessageToAll(-1, "Hello!");
        return 1;
    }
    if (strcmp(cmdtext, "/time", true) == 0)
    {
        new
            hours,
            minutes,
            seconds;

        gettime(hours, minutes, seconds);

        // Envie mensagem de horário atual para todos.
        SendClientMessageToAll(-1, "Current time is %02d:%02d:%02d", hours, minutes, seconds);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

Evite usar especificadores de formato em suas mensagens sem formatar a string enviada. Caso contrário, isso resultará em travamentos.

:::

## Funções Relacionadas

- [SendClientMessage](SendClientMessage): Envie uma mensagem para um determinado jogador.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Força um jogador a enviar texto para todos os jogadores.
