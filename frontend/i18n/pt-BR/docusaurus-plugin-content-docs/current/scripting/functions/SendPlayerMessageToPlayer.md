---
title: SendPlayerMessageToPlayer
sidebar_label: SendPlayerMessageToPlayer
description: "Envia uma mensagem em nome de um jogador para outro jogador no servidor."
tags: ["player"]
---


## Descrição

Envia uma mensagem em nome de um jogador para outro jogador no servidor. A mensagem aparecerá na caixa de chat, mas só poderá ser vista pelo usuário especificado com 'playerid'. A linha começará com o nome do remetente na sua cor, seguido da mensagem em branco.

| Nome | Descrição |
| ---------------- | ---------------------------------------------------------- |
| playerid | O ID do jogador que receberá a mensagem.         |
| senderid | O ID do remetente. Se for inválido, a mensagem não será enviada. |
| const format[] | A mensagem que será enviada.                             |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.                 |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador especificado não existe.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hello", true))
    {
        SendPlayerMessageToPlayer(0, playerid, "Hello ID 0!"); // Enviará uma mensagem ao usuário com o ID 0 no nome do usuário que digitou '/hello'.
        // Supondo que 'playerid' seja chamado Tenpenny, a saída será 'Tenpenny: Hello ID 0!'
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

- [SendPlayerMessageToAll](SendPlayerMessageToAll): Força um jogador a enviar texto para todos os jogadores.
- [SendClientMessage](SendClientMessage): Envie uma mensagem para um determinado jogador.
- [SendClientMessageToAll](SendClientMessageToAll): Envie uma mensagem para todos os jogadores.

## Callbacks Relacionadas

- [OnPlayerText](../callbacks/OnPlayerText): Chamado quando um jogador envia uma mensagem pelo chat.
