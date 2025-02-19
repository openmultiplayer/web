---
title: RemoveBuildingForPlayer
sidebar_label: RemoveBuildingForPlayer
description: Remove um modelo de San Andreas para um único jogador em um raio específico.
tags: ["player"]
---

## Descrição

Remove um modelo de San Andreas para um único jogador em um raio específico.

| Nome          | Descrição                                                                             |
| ------------- | ------------------------------------------------------------------------------------- |
| playerid      | O ID do jogador para o qual remover os objetos.                                       |
| modelid       | O modelo a ser removido.                                                              |
| Float:fX      | A coordenada X em torno da qual os objetos serão removidos.                           |
| Float:fY      | A coordenada Y em torno da qual os objetos serão removidos.                           |
| Float:fZ      | A coordenada Z em torno da qual os objetos serão removidos.                           |
| Float:fRadius | O raio ao redor do ponto especificado para remover objetos com o modelo especificado. |

## Retorno

Essa função não retorna um valor específico.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    // Quando o jogador se conectar, os objetos com o modelo 615 serão removidos dentro de um
    // raio de 200.0 metros do ponto 0.0, 0.0, 0.0, que é o centro de San Andreas(mapa).
    RemoveBuildingForPlayer(playerid, 615, 0.0, 0.0, 0.0, 200.0);
    return 1;
}

public OnPlayerConnect(playerid)
{
    // Quando o jogador se conectar, todos os objetos do mapa serão removidos.
    RemoveBuildingForPlayer(playerid, -1, 0.0, 0.0, 0.0, 6000.0);
    return 1;
}
```

## Notas

:::tip

No SA-MP 0.3.7 você pode usar -1 no modelid para remover todos os objetos dentro do raio especificado.

:::

:::warning

Há um limite de cerca de 1000 linhas/objetos. Não há solução alternativa. Ao remover o mesmo objeto para um jogador, eles travarão. Comummente, os jogadores travam ao se reconectar ao servidor porque o servidor remove o objeto no OnPlayerConnect.

:::

## Funções relacionadas

- [DestroyObject](DestroyObject): Destrua um objeto.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto para um jogador.
