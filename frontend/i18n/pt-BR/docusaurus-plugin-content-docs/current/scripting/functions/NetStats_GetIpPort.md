---
title: NetStats_GetIpPort
sidebar_label: NetStats_GetIpPort
description: "Obtenha o IP e a porta de um jogador."
tags: ["network monitoring", "ip address"]
---


## Descrição

Obtenha o IP e a porta de um jogador.

| Nome | Descrição |
| ---------------------- | ---------------------------------------------------------------- |
| playerid | O ID do jogador para obter o IP e a porta de.                  |
| output[] | Uma matriz de strings para armazenar IP e porta, passada por referência. |
| size = sizeof (output) | O comprimento máximo do IP/porta. 22 é recomendado.            |

## Retornos

O IP e a porta do jogador são armazenados na matriz especificada.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ipandport"))
    {
        new dest[22];
        NetStats_GetIpPort(playerid, dest, sizeof(dest));

        new szString[144];
        format(szString, sizeof(szString), "Your current IP and port: %s.", dest);
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerIp](GetPlayerIp): Obtenha o IP de um jogador.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): Obtém as estatísticas de rede de um jogador e as salva em uma string.
- [GetNetworkStats](GetNetworkStats): Obtém as estatísticas de rede do servidor e as salva em uma string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Obtenha o tempo durante o qual um jogador esteve conectado.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Obtenha o número de mensagens de rede que o servidor recebeu do jogador.
- [NetStats_BytesReceived](NetStats_BytesReceived): Obtenha a quantidade de informações (em bytes) que o servidor recebeu do jogador.
- [NetStats_MessagesSent](NetStats_MessagesSent): Obtenha o número de mensagens de rede que o servidor enviou ao jogador.
- [NetStats_BytesSent](NetStats_BytesSent): Obtenha a quantidade de informações (em bytes) que o servidor enviou ao jogador.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Obtenha o número de mensagens de rede que o servidor recebeu do jogador no último segundo.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Obtenha a porcentagem de perda de pacotes de um jogador.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Obtenha o status de conexão de um jogador.
