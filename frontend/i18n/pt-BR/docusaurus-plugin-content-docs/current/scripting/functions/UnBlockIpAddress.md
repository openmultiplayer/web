---
title: UnBlockIpAddress
sidebar_label: UnBlockIpAddress
description: "Desbloqueie um endereço IP que foi bloqueado anteriormente usando BlockIpAddress."
tags: ["administration", "ip address"]
---


## Descrição

Desbloqueie um endereço IP que foi bloqueado anteriormente usando [BlockIpAddress](BlockIpAddress).

| Nome | Descrição |
| ----------------- | -------------------------- |
| const ipAddress[] | O endereço IP a ser desbloqueado. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    UnBlockIpAddress("127.0.0.1");
    return 1;
}
```
## Funções Relacionadas

- [BlockIpAddress](BlockIpAddress): Bloqueia a conexão de um endereço IP ao servidor por um determinado período de tempo.
- [IsBanned](IsBanned): Verifica se o endereço IP fornecido foi banido.

## Callbacks Relacionadas

- [OnIncomingConnection](../callbacks/OnIncomingConnection): Chamado quando um jogador está tentando se conectar ao servidor.
