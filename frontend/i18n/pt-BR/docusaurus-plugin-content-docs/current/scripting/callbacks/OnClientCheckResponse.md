---
title: OnClientCheckResponse
description: Essa callback é executada quando a requisição enviada pela função SendClientCheck é completa.
tags: []
---

## Descrição

Essa callback é executada quando a requisição enviada pela função SendClientCheck é completa.

| Nome          | Descrição                         |
| ------------- | --------------------------------- |
| playerid      | ID do jogador checado.            |
| actionid      | Tipo da checagem feita.           |
| memaddr       | Endereço requisitado.             |
| retndata      | Resultado da checagem.            |

## Retorno

Sempre a primeira a ser declarada em filterscripts.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // ou 72
    {
        print("AVISO: O jogador não parece estar usando um computador!");
        Kick(playerid);
    }
    return 1;
}
```

## Notas

:::warning

Esse callback é usado somente em filterscripts.

:::

## Funções Relacionadas

- [SendClientCheck](../functions/SendClientCheck): Realiza uma checagem de memória no cliente.
