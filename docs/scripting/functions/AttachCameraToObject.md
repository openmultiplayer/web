---
id: AttachCameraToObject
title: AttachCameraToObject
description: You can use this function to attach the player camera to objects.
tags: []
---

:::warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

You can use this function to attach the player camera to objects.

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | The ID of the player which will have your camera attached on object. |
| objectid | The object id which you want to attach the player camera.            |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strcmp(cmdtext, "/attach", false))
    {
        new object = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, object);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is attached on object now.");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

You need to create the object first, before attempting to attach a player camera for that.

:::

## Related Functions

- [AttachCameraToPlayerObject](../functions/AttachCameraToPlayerObjecy.md): Attaches the player's camera to a player object.
