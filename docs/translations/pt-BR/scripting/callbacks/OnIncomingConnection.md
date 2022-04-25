---
title: OnIncomingConnection
description: Essa callback é executada quando um IP tenta conexão com o servidor.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3z R2-2' />

## Descrição

Essa callback é executada quando um IP tenta conexão com o servidor. Para bloquear determinada conexão, use BlockIpAddress.

| Nome         | Descrição                                             |
| ------------ | ----------------------------------------------------- |
| playerid     | ID atribuido ao jogador que está tentando a conexão.  |
| ip_address[] | IP do jogador tentando a conexão.                     |
| port         | Porta que o jogador está tentando a conexão.          |

## Retornos

1 - Irá previnir outros filterscripts de receberem esse callback.

0 - Indica que esse callback deve ser passado para o próximo filterscript.

Sempre é chamado primeiro nos filterscripts.

## Exemplos

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("O Player de ID %i [IP/port: %s:%i] está tentando realizar uma conexão com o servidor.", playerid, ip_address, port);
    return 1;
}
```

## Funções Relacionadas

- [BlockIpAddress](../functions/BlockIpAddress): Bloqueia o IP do jogador de tentar conexão com o servidor por um determinado tempo.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Desbloqueia o IP do jogador bloqueado anteriormente.
