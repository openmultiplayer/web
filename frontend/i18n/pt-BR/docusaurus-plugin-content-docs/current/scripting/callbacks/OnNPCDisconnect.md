---
title: OnNPCDisconnect
sidebar_label: OnNPCDisconnect
description: Essa callback é executada quando um NPC é desconectado do servidor.
tags: []
---

## Descrição

Essa callback é executada quando um NPC é desconectado do servidor.

| Nome         | Descrição                                               |
| ------------ | ------------------------------------------------------- |
| reason[]     | The reason why the bot has disconnected from the server |

## Exemplos

```c
public OnNPCDisconnect(reason[])
{
    printf("Desconectado do servidor. Motivo: %s", reason);
}
```

## Callbacks Relacionadas

- [OnNPCConnect](OnNPCConnect): Executada quando um NPC conecta no servidor.
- [OnPlayerDisconnect](OnPlayerDisconnect): Executada quando o jogador desconecta do servidor.
- [OnPlayerConnect](OnPlayerConnect): Executada quando o jogador conecta no servidor.
