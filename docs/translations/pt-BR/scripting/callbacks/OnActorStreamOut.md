---
title: OnActorStreamOut
description: Esta callback é chamada quando um ator é descarregado (torna-se invisível) para um jogador.
tags: []
---

<VersionWarnPT name='callback' version='SA-MP 0.3.7' />

## Descrição

Esta callback é chamada quando um ator é descarregado (torna-se invisível) para um jogador.

| Name        | Description                                    |
| ----------- | ---------------------------------------------- |
| actorid     | O ID do ator que foi descarregado pelo jogador |
| forplayerid | O ID do jogador que descarregou o ator.        |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Ator %d descarregou para você.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas
