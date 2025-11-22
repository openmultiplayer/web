---
title: AttachCameraToObject
sidebar_label: AttachCameraToObject
description: You can use this function to attach the player camera to objects.
tags: []
---

## คำอธิบาย

You can use this function to attach the player camera to objects.

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | The ID of the player which will have your camera attached on object. |
| objectid | The object id which you want to attach the player camera.            |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new object = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, object);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is attached on object now.");
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

You need to create the object first, before attempting to attach a player camera for that.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): Attaches the player's camera to a player object.
