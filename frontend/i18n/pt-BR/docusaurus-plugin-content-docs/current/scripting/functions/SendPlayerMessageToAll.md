---
title: SendPlayerMessageToAll
sidebar_label: SendPlayerMessageToAll
description: "Envia uma mensagem em nome de um jogador para todos os outros jogadores no servidor."
tags: ["player"]
---


## Descrição

Envia uma mensagem em nome de um jogador para todos os outros jogadores no servidor. A linha começará com o nome do remetente na sua cor, seguido da mensagem em branco.

| Nome | Descrição |
| ---------------- | --------------------------------------------------------------- |
| senderid | O ID do remetente. Se for inválido, a mensagem não será enviada. |
| const format[] | A mensagem que será enviada.                                  |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                      |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerText(playerid, text[])
{
    // formate uma mensagem para conter o ID do jogador na frente dela
    new string[144];
    format(string, sizeof(string), "(%d): %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    return 0; // retornar 0 impede que a mensagem original seja enviada

    // Supondo que 'playerid' seja 0 e o jogador se chame Tenpenny, a saída será 'Tenpenny:(0) <message>'
}
```
## Notas

:::warning

Evite usar especificadores de formato em suas mensagens sem formatar a string enviada. Caso contrário, isso resultará em travamentos.

:::

## Funções Relacionadas

- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Força um jogador a enviar texto para um jogador.
- [SendClientMessageToAll](SendClientMessageToAll): Envie uma mensagem para todos os jogadores.

## Callbacks Relacionadas

- [OnPlayerText](../callbacks/OnPlayerText): Chamado quando um jogador envia uma mensagem pelo chat.
