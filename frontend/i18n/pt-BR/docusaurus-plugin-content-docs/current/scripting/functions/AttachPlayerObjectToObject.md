---
title: AttachPlayerObjectToObject
sidebar_label: AttachPlayerObjectToObject
description: Você pode usar esta função para anexar objetos de jogador a outros objetos de jogador.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Você pode usar esta função para anexar objetos de jogador a outros objetos de jogador. Os objetos seguirão o objeto principal.

| Nome              | Descrição                                                                |
| ----------------- | ------------------------------------------------------------------------ |
| playerid          | O ID do jogador.                                                         |
| objectid          | O objeto de jogador a ser anexado a outro objeto de jogador.            |
| parentid          | O objeto ao qual anexar o objeto.                                       |
| Float:OffsetX     | A distância entre o objeto principal e o objeto na direção X.           |
| Float:OffsetY     | A distância entre o objeto principal e o objeto na direção Y.           |
| Float:OffsetZ     | A distância entre o objeto principal e o objeto na direção Z.           |
| Float:RotX        | A rotação X entre o objeto e o objeto principal.                        |
| Float:RotY        | A rotação Y entre o objeto e o objeto principal.                        |
| Float:RotZ        | A rotação Z entre o objeto e o objeto principal.                        |
| bool:syncRotation | Se definido como `false`, a rotação do objectid não mudará com o parentid. |

## Retorno

`true` - A função foi executada com sucesso.

`false` - A função falhou ao executar. Isso significa que o primeiro objeto (objectid) não existe. Não há verificações internas para verificar se o segundo objeto (parentid) existe.

## Exemplos

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);

AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## Notas

:::tip

Ambos os objetos precisam ser criados antes de tentar anexá-los.

:::

## Funções Relacionadas

- [AttachObjectToObject](AttachObjectToObject): Anexa um objeto a outro objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexa um objeto a um jogador.
- [AttachObjectToVehicle](AttachObjectToVehicle): Anexa um objeto a um veículo.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexa um objeto de jogador a um jogador.
- [CreatePlayerObject](CreatePlayerObject): Cria um objeto apenas para um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrói um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto de jogador é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Para um objeto de jogador de se mover.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto de jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localiza um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto de jogador.