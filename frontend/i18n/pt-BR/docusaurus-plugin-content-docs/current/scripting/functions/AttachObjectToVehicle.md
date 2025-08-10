---
title: AttachObjectToVehicle
sidebar_label: AttachObjectToVehicle
description: Anexa um objeto a um veículo.
tags: ["object", "vehicle"]
---

## Descrição

Anexa um objeto a um veículo.

| Nome            | Descrição                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| objectid        | O ID do objeto a ser anexado ao veículo. Note que este é um ID de objeto, não um ID de modelo. O objeto deve ser criado com CreateObject primeiro. |
| parentid        | O ID do veículo ao qual anexar o objeto.                                                                                                      |
| Float:offsetX   | O deslocamento do eixo X a partir do veículo para anexar o objeto.                                                                           |
| Float:offsetY   | O deslocamento do eixo Y a partir do veículo para anexar o objeto.                                                                           |
| Float:offsetZ   | O deslocamento do eixo Z a partir do veículo para anexar o objeto.                                                                           |
| Float:rotationX | O deslocamento de rotação X para o objeto.                                                                                                   |
| Float:rotationY | O deslocamento de rotação Y para o objeto.                                                                                                   |
| Float:rotationZ | O deslocamento de rotação Z para o objeto.                                                                                                   |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new objectid = CreateObject(...);
new vehicleid = GetPlayerVehicleID(playerid);
AttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
```

## Notas

:::tip

O objeto deve ser criado primeiro.

:::

:::warning

Quando o veículo é destruído ou respawnado, os objetos anexados não serão destruídos junto com ele; eles permanecerão estacionários na posição onde o veículo desapareceu e serão reanexados ao próximo veículo que reclamar o ID do veículo ao qual os objetos estavam anexados.

:::

## Funções Relacionadas

- [AttachObjectToPlayer](AttachObjectToPlayer): Anexa um objeto a um jogador.
- [AttachObjectToObject](AttachObjectToObject): Anexa um objeto a outro objeto.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexa um objeto de jogador a um jogador.
- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [IsValidObject](IsValidObject): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject): Move um objeto.
- [StopObject](StopObject): Para um objeto de se mover.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localiza um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [CreatePlayerObject](CreatePlayerObject): Cria um objeto apenas para um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrói um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto de jogador é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Para um objeto de jogador de se mover.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto de jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localiza um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto de jogador.