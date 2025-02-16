---
title: GetNetworkStats
sidebar_label: GetNetworkStats
description: Obtém as estatísticas da rede do servidor e as armazena em uma string.
tags: []
---

## Descrição

Obtém as estatísticas da rede do servidor e as armazena em uma string.

| Nome        | Descrição                                                                |
| ----------- | ------------------------------------------------------------------------ |
| retstr[]    | A string para armazenar as estatísticas da rede, passado por referência. |
| retstr_size | O comprimento da string a ser armazenada.                                |

## Retorno

Esta função sempre retorna 1.

## Exemplos

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/netstats"))
    {
        new stats[400+1];
        GetNetworkStats(stats, sizeof(stats)); // Obtém  as estatísticas da rede do servidor.
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Server Network Stats", stats, "Close", "");
    }
    return 1;
}
```

```
Server Ticks: 200
Messages in Send buffer: 0
Messages sent: 142
Bytes sent: 8203
Acks sent: 11
Acks in send buffer: 0
Messages waiting for ack: 0
Messages resent: 0
Bytes resent: 0
Packetloss: 0.0%
Messages received: 54
Bytes received: 2204
Acks received: 0
Duplicate acks received: 0
Inst. KBits per second: 28.8
KBits per second sent: 10.0
KBits per second received: 2.7
```

## Funções Relacionadas

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Obtém as estatísticas de rede de um jogador e as salva em uma string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Obtém o tempo que um jogador es Get the time that a player has been connected for.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Obtém a percentagem de perda de pacotes (packet loss) de um jogador.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Obtém o status de conexão de um jogador.
- [NetStats_GetIpPort](NetStats_GetIpPort): Obtém o IP e porta de um jogador.
