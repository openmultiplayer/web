---
title: CreateExplosion
sidebar_label: CreateExplosion
description: Cria uma explosão nas coordenadas especificadas.
tags: []
---

## Descrição

Cria uma explosão nas coordenadas especificadas.

| Nome         | Descrição                                                |
| ------------ | -------------------------------------------------------- |
| Float:x      | A coordenada X da explosão.                             |
| Float:y      | A coordenada Y da explosão.                             |
| Float:z      | A coordenada Z da explosão.                             |
| type         | O [tipo](../resources/explosionlist) da explosão.       |
| Float:radius | O raio da explosão.                                     |

## Retorno

Esta função sempre retorna 1, mesmo quando os valores do tipo de explosão e/ou raio são inválidos.

## Exemplos

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // Obtém a posição do jogador
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // Cria uma explosão na posição do jogador
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## Notas

:::tip

Há um limite de quantas explosões podem ser vistas ao mesmo tempo por um jogador. Este é aproximadamente 10.

:::

## Funções Relacionadas

- [CreateExplosionForPlayer](CreateExplosionForPlayer): Cria uma explosão que é visível apenas para um único jogador.

## Veja Também

- [Explosion Types](../resources/explosionlist): Uma lista de todos os tipos de explosão.