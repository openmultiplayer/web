---
title: DestroyActor
description: Destrói um ator que foi criado com CreateActor.
tags: []
---

Esta função foi implementada no SA-MP 0.3.7 e não funcionará em versões anteriores.

## Descrição

Destrói um ator que foi criado com CreateActor.

| Nome    | Descrição                                                |
| ------- | -------------------------------------------------------- |
| actorid | O ID do ator a ser destruído. Retornado por CreateActor. |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. o Ator com o ID especificado não existe.

## Exemplos

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(...);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## Funções Relacionadas

- [CreateActor](CreateActor): Cria um ator (NPC fixo).
