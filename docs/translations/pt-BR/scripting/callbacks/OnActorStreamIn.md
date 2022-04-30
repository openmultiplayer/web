---
title: OnActorStreamIn
description: Esta callback é chamada quando um ator é carregado (torna-se visível) para um jogador.
tags: []
---

<VersionWarnPT name='callback' version='SA-MP 0.3.7' />

## Descrição

Esta callback é chamada quando um ator é carregado (torna-se visível) para um jogador.

| Nome        | Descrição                                   |
| ----------- | ------------------------------------------- |
| actorid     | O ID do ator que foi carregado pelo jogador |
| forplayerid | O ID do jogador que carregou o ator.        |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Ator %d carrgou para você.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas
