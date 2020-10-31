---
title: SetActorHealth
description: Define a saúde de um ator.
tags: []
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3.7' />

## Descrição

Define a saúde de um ator.

| Nome         | Descrição                                 |
| ------------ | ----------------------------------------- |
| actorid      | O ID do ator a definir a vida.            |
| Float:health | O valor a definir para a vida do ator.    |

## Retorno

1 - Sucesso

0 - Falha (por exemplo, ator não está criado).

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Ator como vendedor na Ammunation
    SetActorHealth(gMyActor, 100);
    return 1;
}
```

## Funções Relacionadas