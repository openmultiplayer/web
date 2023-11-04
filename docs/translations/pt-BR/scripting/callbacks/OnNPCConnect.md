---
title: OnNPCConnect
description: Essa callback é executada quando um NPC conecta com sucesso no servidor.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada quando um NPC conecta com sucesso no servidor.

| Nome         | Descrição                                          |
| ------------ | -------------------------------------------------- |
| myplayerid   | O ID de jogador que o NPC recebeu.                 |

## Exemplos

```c
public OnNPCConnect(myplayerid)
{
    printf("O NPC conectou com sucesso no servidor com o ID %i!", myplayerid);
}
```

## Callbacks Relacionadas

- [OnNPCDisconnect](OnNPCDisconnect): Executada quando o NPC desconecta do servidor.
- [OnPlayerConnect](OnPlayerConnect): Executada quando o jogador conecta no servidor.
- [OnPlayerDisconnect](OnPlayerDisconnect): Executada quando o jogador desconecta do servidor.
