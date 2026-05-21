---
title: IsPlayerConnected
sidebar_label: IsPlayerConnected
description: "Verifica se um jogador está conectado (se um ID for capturado por um jogador conectado)."
tags: ["player"]
---


## Descrição

Verifica se um jogador está conectado (se um ID for capturado por um jogador conectado).

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

**true** - O jogador está conectado.

**false** - O jogador não está conectado.

## Exemplos

```c
KillPlayer(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        printf("Player ID %i is not connected!", playerid);
    }
    else
    {
        SetPlayerHealth(playerid, 0.0);
    }
}
```
## Notas

:::tip

Esta função pode ser omitida em muitos casos. Muitas outras funções já possuem algum tipo de verificação de conexão integrada.

:::

## Funções Relacionadas

- [IsPlayerAdmin](IsPlayerAdmin): Verifica se um jogador está logado em RCON.

## Callbacks Relacionadas

- [OnPlayerConnect](../callbacks/OnPlayerConnect): Chamado quando um jogador se conecta ao servidor.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Chamado quando um jogador sai do servidor.
