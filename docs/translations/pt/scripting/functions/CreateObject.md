---
title: CreateObject
description: Cria um objeto em coordenadas especificadas no - Creates an object at specified coordinates in the game world.
tags: []
---

## Descrição

Creates an object at specified coordinates in the game world.

| Name               | Descrição                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid            | O modelo a criar.                                                                                                                                                  								    |
| Float:X            | A coordenada-X para criar o objeto.                                                                                                                                								    |
| Float:Y            | A coordenada-Y para criar o objeto.                                                                                                                               								    |
| Float:Z            | A coordenada-Z para criar o objeto.                                                                                                                      								            |
| Float:rX           | A rotação X do objeto.                                                                                                                                								                |
| Float:rY           | A rotação Y do objeto.                                                                                                                               								                |
| Float:rZ           | A rotação Z do objeto.                                                                                                                             									                |
| Float:DrawDistance | (opcional) A distância da qual o objeto pode ser visto/renderizado. 0.0 fará com que o objeto seja criado utilizando distâncias predefinidas. Utilizável desde 0.3b. Limitado para 300 antes de 0.3x.|
 
## Exemplos

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // Objeto irá renderizar na sua distância padrão. Object will render at its default distance.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // Objeto irá renderizar a 300.0 unidades. Object will render at 300.0 units.
    return 1;
}
```

## Notas

:::tip

Existe um limite de 1000 objetos (MAX_OBJECTS). Para contornar esse limite, você pode usar um streamer.

:::

## Funções Relacionadas

- [DestroyObject](DestroyObject.md): Destrói um objeto.
- [IsValidObject](IsValidObject.md): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject.md): Move um objeto.
- [StopObject](StopObject.md): Impede um objeto de mover.
- [SetObjectPos](SetObjectPos.md): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot.md): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos.md): Localize um objeto.
- [GetObjectRot](GetObjectRot.md): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
- [SetObjectMaterialText](SetObjectMaterialText.md): Substitui a textura de um objeto por/com texto. - Replace the texture of an object with text.
- [SetObjectMaterial](SetObjectMaterial.md): Replace the texture of an object with the texture from another model in the game.
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
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText.md): Replace the texture of a player object with text.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial.md): Replace the texture of a player object with the texture from another model in the game.