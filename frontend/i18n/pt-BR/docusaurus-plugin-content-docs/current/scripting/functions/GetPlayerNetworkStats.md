---
title: GetPlayerNetworkStats
sidebar_label: GetPlayerNetworkStats
description: "Obtém as estatísticas de rede de um jogador e as salva em uma string."
tags: ["player", "network monitoring"]
---


## Descrição

Obtém as estatísticas de rede de um jogador e as salva em uma string.

| Nome | Descrição |
| ---------------------- | ------------------------------------------------------------- |
| playerid | O ID do jogador do qual você deseja obter as estatísticas da rede.     |
| output[] | A string para armazenar as estatísticas da rede, passada por referência. |
| size = sizeof (output) | O comprimento da string que deve ser armazenada.               |

## Retornos

Esta função sempre retorna 1.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mynetstats"))
    {
        new stats[400+1];
        GetPlayerNetworkStats(playerid, stats, sizeof(stats));
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "My Network Stats", stats, "Okay", "");
    }
    return 1;
}
```
## Notas

:::tip

Esta função pode não retornar dados precisos quando usada em [OnPlayerDisconnect](OnPlayerDisconnect) se o jogador tiver encerrado normalmente. Geralmente retorna dados precisos se o jogador foi expulso ou expirou.

:::

## Funções Relacionadas

- [GetNetworkStats](GetNetworkStats): Obtém as estatísticas de rede dos servidores e as salva em uma string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Obtenha o tempo durante o qual um jogador esteve conectado.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Obtenha o número de mensagens de rede que o servidor recebeu do jogador.
- [NetStats_BytesReceived](NetStats_BytesReceived): Obtenha a quantidade de informações (em bytes) que o servidor recebeu do jogador.
- [NetStats_MessagesSent](NetStats_MessagesSent): Obtenha o número de mensagens de rede que o servidor enviou ao jogador.
- [NetStats_BytesSent](NetStats_BytesSent): Obtenha a quantidade de informações (em bytes) que o servidor enviou ao jogador.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Obtenha o número de mensagens de rede que o servidor recebeu do jogador no último segundo.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Obtenha a porcentagem de perda de pacotes de um jogador.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Obtenha o status de conexão de um jogador.
- [NetStats_GetIpPort](NetStats_GetIpPort): Obtenha o IP e a porta de um jogador.
