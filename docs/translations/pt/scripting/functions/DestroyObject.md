---
title: DestroyObject
description: Destrói (remove) um objeto que foi criado usando CreateObject.
tags: []
---

## Descrição

Destrói (remove) um objeto que foi criado usando CreateObject.

| Nome     | Descrição                                                  |
| -------- | ---------------------------------------------------------- |
| objectid | O ID do objeto a ser destruído. Retornado por CreateObject.|

## Retorno

Esta função não retorna nenhum valor específico. 

## Exemplos

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## Funções Relacionadas

- [CreateObject](CreateObject.md): Cria um objeto.
- [IsValidObject](IsValidObject.md): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject.md): Move um objeto.
- [StopObject](StopObject.md): Impede um objeto de se mover.
- [SetObjectPos](SetObjectPos.md): Define a posição do objeto.
- [SetObjectRot](SetObjectRot.md): Define a rotação do objeto.
- [GetObjectPos](GetObjectPos.md): Localiza um objeto.
- [GetObjectRot](GetObjectRot.md): Verifica a rotação do objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Attach a player object to a player.
