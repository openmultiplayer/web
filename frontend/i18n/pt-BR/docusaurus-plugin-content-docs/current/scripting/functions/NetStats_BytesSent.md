---
title: NetStats_BytesSent
sidebar_label: NetStats_BytesSent
description: "Obtém a quantidade de dados (em bytes) que o servidor enviou ao jogador."
tags: ["network monitoring"]
---


## Descrição

Obtém a quantidade de dados (em bytes) que o servidor enviou ao jogador.

| Nome | Descrição |
| -------- | ------------------------------------------ |
| playerid | O ID do jogador do qual obter os dados. |

## Retornos

Esta função retorna o número de bytes que o servidor enviou ao jogador.

0 é retornado se o jogador não estiver conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/bytes_sent"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have sent %i bytes of information to the server.", NetStats_BytesSent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Obtém as estatísticas de rede de um jogador e as salva em uma string.
- [GetNetworkStats](GetNetworkStats): Obtém as estatísticas de rede do servidor e as salva em uma string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Obtenha o tempo durante o qual um jogador esteve conectado.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Obtenha o número de mensagens de rede que o servidor recebeu do jogador.
- [NetStats_MessagesSent](NetStats_MessagesSent): Obtenha o número de mensagens de rede que o servidor enviou ao jogador.
- [NetStats_BytesReceived](NetStats_BytesReceived): Obtenha a quantidade de informações (em bytes) que o servidor recebeu do jogador.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Obtenha o número de mensagens de rede que o servidor recebeu do jogador no último segundo.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Obtenha a porcentagem de perda de pacotes de um jogador.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Obtenha o status de conexão de um jogador.
- [NetStats_GetIpPort](NetStats_GetIpPort): Obtenha o IP e a porta de um jogador.
