---
title: NetStats_PacketLossPercent
sidebar_label: NetStats_PacketLossPercent
description: "Obtém a porcentagem de perda de pacotes de um jogador."
tags: ["network monitoring"]
---


## Descrição

Obtém a porcentagem de perda de pacotes de um jogador. Perda de pacote significa que os dados que o jogador está enviando ao servidor estão sendo perdidos (ou vice-versa).

| Nome | Descrição |
| -------- | ------------------------------------------ |
| playerid | O ID do jogador do qual obter os dados. |

## Retornos

A porcentagem de perda de pacotes como um valor flutuante. 0 se o jogador não estiver conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/packetloss"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Packets lost: %.2f percent.", NetStats_PacketLossPercent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```
## Notas

:::tip

Esta função foi considerada atualmente não confiável e a saída não é a esperada quando comparada ao cliente. Portanto, esta função não deve ser usada como kicker de perda de pacotes. Uma função de perda de pacotes mais precisa:

```c
stock GetPlayerPacketLoss(playerid, &Float:packetLoss)
{
    /* Retorna a porcentagem de perda de pacotes do playerid fornecido - Feito por Fusez */

    if(!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new nstats[400+1], nstats_loss[20], start, end;
    GetPlayerNetworkStats(playerid, nstats, sizeof (nstats));

    start = strfind(nstats, "packetloss", true);
    end = strfind(nstats, "%", true, start);

    strmid(nstats_loss, nstats, start+12, end, sizeof (nstats_loss));
    packetLoss = floatstr(nstats_loss);
    return 1;
}
```
:::

:::tip

Esteja ciente de que esta função reportará os pacotes perdidos pelo servidor. O número de perda de pacotes relatado pelo cliente **será** diferente, não porque qualquer um esteja incorreto, mas porque tanto o servidor quanto o cliente estão cientes apenas dos pacotes perdidos enviados por eles.

:::

:::tip

Qualquer valor superior a 0,0% já deve ser motivo de preocupação. Qualquer coisa superior a 1,0% é totalmente ruim.

:::

## Funções Relacionadas

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Obtém as estatísticas de rede de um jogador e as salva em uma string.
- [GetNetworkStats](GetNetworkStats): Obtém as estatísticas de rede do servidor e as salva em uma string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Obtenha o tempo que um jogador esteve conectado.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Obtenha o número de mensagens de rede que o servidor recebeu do jogador.
- [NetStats_BytesReceived](NetStats_BytesReceived): Obtenha a quantidade de informações (em bytes) que o servidor recebeu do jogador.
- [NetStats_MessagesSent](NetStats_MessagesSent): Obtenha o número de mensagens de rede que o servidor enviou ao jogador.
- [NetStats_BytesSent](NetStats_BytesSent): Obtenha a quantidade de informações (em bytes) que o servidor enviou ao jogador.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Obtenha o número de mensagens de rede que o servidor recebeu do jogador no último segundo.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Obtenha o status de conexão de um jogador.
- [NetStats_GetIpPort](NetStats_GetIpPort): Obtenha o IP e a porta de um jogador.
