---
title: NetStats_ConnectionStatus
sidebar_label: NetStats_ConnectionStatus
description: "Obtém o status atual da conexão do jogador."
tags: ["network monitoring"]
---


## Descrição

Obtém o status atual da conexão do jogador.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| playerid | O ID do jogador do qual obter o status da conexão. |

## Retornos

O [status da conexão](../resources/connectionstatus) do jogador, como um valor inteiro.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/connectionstatus"))
    {
        static ConnectionStatuses[9][48] =
        {
            "No Action",
            "Disconnect ASAP",
            "Disconnect ASAP Silently",
            "Disconnect On No Ack",
            "Requested Connection",
            "Handling Connection Request",
            "Unverified Sender",
            "Set Encryption On Multiple 16 Byte Packet",
            "Connected"
        };

        new connectionStatus = NetStats_ConnectionStatus(playerid);

        new string[144];
        format(string, sizeof(string), "Your current connection status: %s", ConnectionStatuses[connectionStatus]);
        SendClientMessage(playerid, -1, string);
    }
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Obtém as estatísticas de rede de um jogador e as salva em uma string.
- [GetNetworkStats](GetNetworkStats): Obtém as estatísticas de rede do servidor e as salva em uma string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Obtenha o tempo durante o qual um jogador esteve conectado.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Obtenha o número de mensagens de rede que o servidor recebeu do jogador.
- [NetStats_BytesReceived](NetStats_BytesReceived): Obtenha a quantidade de informações (em bytes) que o servidor recebeu do jogador.
- [NetStats_MessagesSent](NetStats_MessagesSent): Obtenha o número de mensagens de rede que o servidor enviou ao jogador.
- [NetStats_BytesSent](NetStats_BytesSent): Obtenha a quantidade de informações (em bytes) que o servidor enviou ao jogador.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Obtenha o número de mensagens de rede que o servidor recebeu do jogador no último segundo.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Obtenha a porcentagem de perda de pacotes de um jogador.
- [NetStats_GetIpPort](NetStats_GetIpPort): Obtenha o IP e a porta de um jogador.
- [IsPlayerConnected](IsPlayerConnected): Verifique se um jogador está conectado ao servidor.

## Callbacks Relacionadas

- [OnPlayerConnect](../callbacks/OnPlayerConnect): Chamado quando um jogador se conecta ao servidor.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Chamado quando um jogador sai do servidor.

## Recursos relacionados

- [Status da conexão](../resources/connectionstatus)
