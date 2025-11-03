---
title: OnIncomingConnection
sidebar_label: OnIncomingConnection
description: Esta callback é chamada quando um endereço de IP tenta conectar no servidor.
tags: []
---

## Descrição

Esta callback é chamada quando um endereço de IP tenta conectar no servidor. Para bloquear tentativas de conexão, use BlockIpAddress.

| Nome         | Descrição                             |
| ------------ | ------------------------------------- |
| playerid     | O ID do jogador que tentou conectar   |
| ip_address[] | O IP do jogador que tentou conectar   |
| port         | A porta de conexão usada na tentativa |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Há uma tentativa de conexão do jogador de ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Funções Relacionadas

- [BlockIpAddress](../functions/BlockIpAddress): Bloqueia um IP de entrar no servidor por determinado tempo.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Desbloqueia um IP previamente bloqueado.
