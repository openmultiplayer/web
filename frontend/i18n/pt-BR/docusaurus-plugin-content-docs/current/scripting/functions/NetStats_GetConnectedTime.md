---
title: NetStats_GetConnectedTime
sidebar_label: NetStats_GetConnectedTime
description: "Obtém a quantidade de tempo (em milissegundos) durante a qual um jogador esteve conectado ao servidor."
tags: ["network monitoring"]
---


## Descrição

Obtém a quantidade de tempo (em milissegundos) durante a qual um jogador esteve conectado ao servidor.

| Nome | Descrição |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador para obter o tempo de conexão. |

## Retornos

Esta função retorna a quantidade de tempo (em milissegundos) que um jogador esteve conectado ao servidor.

0 é retornado se o jogador não estiver conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/connectedtime"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have been connected for %i milliseconds.", NetStats_GetConnectedTime(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```
## Notas

:::tip

O valor de retorno não é zerado após alterar o modo de jogo (usando o comando RCON "gmx").

:::

## Funções Relacionadas

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Obtém as estatísticas de rede de um jogador e as salva em uma string.
- [GetNetworkStats](GetNetworkStats): Obtém as estatísticas de rede do servidor e as salva em uma string.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Obtenha o número de mensagens de rede que o servidor recebeu do jogador.
- [NetStats_BytesReceived](NetStats_BytesReceived): Obtenha a quantidade de informações (em bytes) que o servidor recebeu do jogador.
- [NetStats_MessagesSent](NetStats_MessagesSent): Obtenha o número de mensagens de rede que o servidor enviou ao jogador.
- [NetStats_BytesSent](NetStats_BytesSent): Obtenha a quantidade de informações (em bytes) que o servidor enviou ao jogador.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Obtenha o número de mensagens de rede que o servidor recebeu do jogador no último segundo.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Obtenha a porcentagem de perda de pacotes de um jogador.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Obtenha o status de conexão de um jogador.
- [NetStats_GetIpPort](NetStats_GetIpPort): Obtenha o IP e a porta de um jogador.
