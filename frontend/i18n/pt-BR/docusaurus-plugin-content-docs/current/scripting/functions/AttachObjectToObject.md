---
title: AttachObjectToObject
sidebar_label: AttachObjectToObject
description: Você pode usar esta função para anexar objetos a outros objetos.
tags: ["object"]
---

## Descrição

Você pode usar esta função para anexar objetos a outros objetos. Os objetos seguirão o objeto principal.

| Nome              | Descrição                                                                 |
| ----------------- | ------------------------------------------------------------------------- |
| objectid          | O objeto a ser anexado a outro objeto.                                   |
| parentid          | O objeto ao qual anexar o objeto.                                        |
| Float:offsetX     | A distância entre o objeto principal e o objeto na direção X.            |
| Float:offsetY     | A distância entre o objeto principal e o objeto na direção Y.            |
| Float:offsetZ     | A distância entre o objeto principal e o objeto na direção Z.            |
| Float:rotationX   | A rotação X entre o objeto e o objeto principal.                         |
| Float:rotationY   | A rotação Y entre o objeto e o objeto principal.                         |
| Float:rotationZ   | A rotação Z entre o objeto e o objeto principal.                         |
| bool:syncRotation | Se definido como `false`, a rotação do objectid não mudará com o attachtoid. |

## Retorno

**true** - A função foi executada com sucesso.
**false** - A função falhou ao executar. Isso significa que o primeiro objeto (objectid) não existe. Não há verificações internas para verificar se o segundo objeto (attachtoid) existe.

## Exemplos

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);
AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## Observações

:::tip
Ambos os objetos precisam ser criados antes de tentar anexá-los.
:::
:::tip
Não há uma versão player-object desta função no SA-MP.
Mas existe [AttachPlayerObjectToObject](AttachPlayerObjectToObject) no open.mp
:::

## Funções Relacionadas

- [AttachObjectToPlayer](AttachObjectToPlayer): Anexar um objeto a um jogador.
- [AttachObjectToVehicle](AttachObjectToVehicle): Anexar um objeto a um veículo.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexar um objeto de jogador a um jogador.
- [CreateObject](CreateObject): Criar um objeto.
- [DestroyObject](DestroyObject): Destruir um objeto.
- [IsValidObject](IsValidObject): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject): Mover um objeto.
- [StopObject](StopObject): Para um objeto de se mover.
- [SetObjectPos](SetObjectPos): Definir a posição de um objeto.
- [SetObjectRot](SetObjectRot): Definir a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localizar um objeto.
- [GetObjectRot](GetObjectRot): Verificar a rotação de um objeto.
- [CreatePlayerObject](CreatePlayerObject): Criar um objeto apenas para um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destruir um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto de jogador é válido.
- [MovePlayerObject](MovePlayerObject): Mover um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Para um objeto de jogador de se mover.
- [SetPlayerObjectPos](SetPlayerObjectPos): Definir a posição de um objeto de jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Definir a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localizar um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verificar a rotação de um objeto de jogador.