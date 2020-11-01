AttachCameraToObject.md
---
title: AttachCameraToObject
description: You can use this function to attach the player camera to objects.
tags: []
---

Esta função foi implementada no SA-MP 0.3e e não funcionará em versões anteriores.


## Descrição

You can use this function to attach the player camera to objects.

| Nome     | Descrição                                                            |
| -------- | -------------------------------------------------------------------- |
| playerid | The ID of the player which will have your camera attached on object. |
| objectid | The object id which you want to attach the player camera.            |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is attached on object now.");
        return 1;
    }
    return 0;
}
```

## Notas

:::tip

You need to create the object first, before attempting to attach a player camera for that.

:::

## Funções Relacionadas

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject.md): Attaches the player's camera to a player object.
