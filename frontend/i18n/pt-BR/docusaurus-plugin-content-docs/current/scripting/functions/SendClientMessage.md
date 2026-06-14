---
title: SendClientMessage
sidebar_label: SendClientMessage
description: "Esta função envia uma mensagem para um jogador específico com uma cor escolhida no chat."
tags: []
---


## Descrição

Esta função envia uma mensagem para um jogador específico com uma cor escolhida no chat. Toda a linha na caixa de bate-papo estará na cor definida, a menos que a incorporação de cores seja usada.

| Nome | Descrição |
| ---------------- | ----------------------------------------------------- |
| playerid | O ID do jogador para o qual exibir a mensagem.       |
| color | A cor da mensagem (formato hexadecimal 0xRRGGBBAA).     |
| const format[] | O texto que será exibido (máximo 144 caracteres). |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag.            |

## Retornos

**true** - A função foi executada com sucesso. O sucesso é relatado quando a string tem mais de 144 caracteres, mas a mensagem não será enviada.

**false** - Falha na execução da função. O jogador não está conectado.

## Exemplos

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    SendClientMessage(playerid, COLOR_RED, "This text is red");
    SendClientMessage(playerid, 0x00FF00FF, "This text is green.");
    SendClientMessage(playerid, -1, "This text is white.");
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
        new name[MAX_PLAYER_NAME];
        GetPlayerName(killerid, name, sizeof(name));

        SendClientMessage(playerid, COLOR_RED, "%s killed you.", name);
    }
    return 1;
}
```
## Notas

:::tip

- Você pode usar a incorporação de cores para várias cores na mensagem.
- Usar '-1' como cor tornará o texto branco (pela simples razão de que -1, quando representado em notação hexadecimal, é 0xFFFFFFFF).

:::

:::warning

- Se uma mensagem tiver mais de 144 caracteres, ela não será enviada. O truncamento pode ser usado para evitar isso. Exibir uma mensagem em várias linhas também resolverá esse problema.
- Evite usar o sinal de porcentagem (ou especificadores de formato) no texto da mensagem real sem escapar adequadamente (como %%). Caso contrário, isso resultará em travamentos.

:::

## Funções Relacionadas

- [SendClientMessageToAll](SendClientMessageToAll): Envie uma mensagem para todos os jogadores.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Força um jogador a enviar texto para um jogador.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Força um jogador a enviar texto para todos os jogadores.
