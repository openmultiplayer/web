---
title: AttachPlayerObjectToVehicle
sidebar_label: AttachPlayerObjectToVehicle
description: Anexa um objeto de jogador a um veículo.
tags: ["player", "object", "playerobject", "vehicle"]
---

## Descrição

Anexa um objeto de jogador a um veículo.

| Nome            | Descrição                                         |
| --------------- | ------------------------------------------------- |
| playerid        | O ID do jogador para quem o objeto foi criado.   |
| objectid        | O ID do objeto a ser anexado ao veículo.         |
| parentid        | O ID do veículo ao qual anexar o objeto.         |
| Float:offsetX   | O deslocamento de posição X para anexação.       |
| Float:offsetY   | O deslocamento de posição Y para anexação.       |
| Float:offsetZ   | O deslocamento de posição Z para anexação.       |
| Float:rotationX | O deslocamento de rotação X para anexação.       |
| Float:rotationY | O deslocamento de rotação Y para anexação.       |
| Float:rotationZ | O deslocamento de rotação Z para anexação.       |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // Se o jogador entrar no veículo
    {
        // Anexa uma vaca gigante.
        new cowObject = CreatePlayerObject(playerid, 16442, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        new vehicleid = GetPlayerVehicleID(playerid);

        AttachPlayerObjectToVehicle(playerid, cowObject, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
    return 1;
}
```

## Notas

:::tip

Você precisa criar o objeto antes de tentar anexá-lo a um veículo.

:::

## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Cria um objeto apenas para um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrói um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto de jogador é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Para um objeto de jogador de se mover.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localiza um objeto de jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto de jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexa um objeto de jogador a um jogador
- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [IsValidObject](IsValidObject): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject): Move um objeto.
- [StopObject](StopObject): Para um objeto de se mover.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localiza um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexa um objeto a um jogador.