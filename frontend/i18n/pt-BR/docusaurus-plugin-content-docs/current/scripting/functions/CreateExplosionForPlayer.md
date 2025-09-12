---
title: CreateExplosionForPlayer
sidebar_label: CreateExplosionForPlayer
description: Cria uma explosão que é visível apenas para um único jogador.
tags: ["player"]
---

## Descrição

Cria uma explosão que é visível apenas para um único jogador. Isso pode ser usado para isolar explosões de outros jogadores ou para fazê-las aparecer apenas em mundos virtuais específicos.

| Nome         | Descrição                                                |
| ------------ | -------------------------------------------------------- |
| playerid     | O ID do jogador para criar a explosão.                  |
| Float:x      | A coordenada X da explosão.                             |
| Float:y      | A coordenada Y da explosão.                             |
| Float:z      | A coordenada Z da explosão.                             |
| type         | O [tipo](../resources/explosionlist) da explosão.       |
| Float:radius | O raio da explosão.                                     |

## Retorno

Esta função sempre retorna **true**, mesmo se a função falhar ao executar (jogador não existe, raio inválido, ou tipo de explosão inválido).

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/burnme", true) == 0)
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        CreateExplosionForPlayer(playerid, x, y, z, 1, 10.0);
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

Há um limite de quantas explosões podem ser vistas ao mesmo tempo por um jogador. Este é aproximadamente 10.

:::

## Funções Relacionadas

- [CreateExplosion](CreateExplosion): Cria uma explosão que é visível para todos os jogadores.

## Veja Também

- [Explosion Types](../resources/explosionlist): Uma lista de todos os tipos de explosão.