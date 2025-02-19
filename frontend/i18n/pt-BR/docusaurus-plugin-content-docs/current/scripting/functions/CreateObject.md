---
title: CreateObject
sidebar_label: CreateObject
description: Cria um objeto em coordenadas especificadas no mundo do jogo.
tags: []
---

## Descrição

Cria um objeto em coordenadas especificadas no mundo do jogo.

| Nome               | Descrição                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid            | O modelo do objeto.                                                                                                                                                       |
| Float:X            | A coordenada X para criar o objeto.                                                                                                              |
| Float:Y            | A coordenada Y para criar o objeto.                                                                                   |
| Float:Z            | A coordenada Z para criar o objeto.                                                                                   |
| Float:rX           | A rotação X para criar o objeto.                                                                                                            |
| Float:rY           | A rotação Y para criar o objeto.                                                                                                                                               |
| Float:rZ           | A rotação Z para criar o objeto.                                                                                                                                             |
| Float:DrawDistance | (Opcional) A distância de renderização do objeto no mapa. 0.0 fará com que os objetos sejam renderizados em suas distâncias padrão. Utilizável desde 0.3b. Limitado a 300 antes de 0,3x. |

## Exemplos

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // O objeto será renderizado em sua distância padrão.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // O objeto será renderizado em 300.0 metros de distância.
    return 1;
}
```

## Notas

:::tip

Há um limite de 1000 objetos (MAX_OBJECTS). Para contornar esse limite, você pode usar um streamer.

:::

## Funções relacionadas

- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject): Move um objeto.
- [StopObject](StopObject): Pare a movimentação de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize a posição de um objeto.
- [GetObjectRot](GetObjectRot): Localize a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexa um objeto a um jogador.
- [SetObjectMaterialText](SetObjectMaterialText): Substitua a textura de um objeto por texto.
- [SetObjectMaterial](SetObjectMaterial): Substitua a textura de um objeto pela textura de outro modelo no jogo.
- [CreatePlayerObject](CreatePlayerObject): Cria um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto do jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto player é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto do jogador.
- [StopPlayerObject](StopPlayerObject): Pare a movimentação de um objeto do jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Defina a rotação de um objeto do jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize a posição de um objeto do jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Localize a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexa um objeto de jogador a um jogador
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Substitua a textura de um objeto de jogador por texto.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Substitua a textura de um objeto do jogador pela textura de outro modelo no jogo.