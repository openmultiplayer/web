---
title: SetActorPos
description: Define a posição de um ator.
tags: []
---

Esta função foi implementada no SA-MP 0.3.7 e não funcionará em versões anteriores.

## Descrição

Define a posição de um ator.

| Nome    | Descrição                                                     |
| ------- | ------------------------------------------------------------- |
| actorid | O ID do ator a definir a posição. Retornado pelo CreateActor. |
| X       | A coordenada X na qual posicionar o ator.                     |
| Y       | A coordenada Y na qual posicionar o ator.                     |
| Z       | A coordenada Z na qual posicionar o ator.                     |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. O ator especificado não existe.

## Exemplos

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
    return 1;
}

// Outro local
SetActorPos(gMyActor, 1.0, 2.0, 3.0);
```

## Notas

:::tip

Ao criar um ator com CreateActor, você específica a sua posição. Você não precisa usar esta função, a menos que queira alterar a posição depois.

:::

## Funções Relacionadas

- [GetActorPos](GetActorPos.md): Obtém a posição de um ator.
- [CreateActor](CreateActor.md): Cria um ator (NPC fixo).
