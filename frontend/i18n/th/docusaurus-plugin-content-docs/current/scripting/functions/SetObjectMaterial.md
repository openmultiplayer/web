---
title: SetObjectMaterial
sidebar_label: SetObjectMaterial
description: Replace the texture of an object with the texture from another model in the game.
tags: []
---

## คำอธิบาย

Replace the texture of an object with the texture from another model in the game.

| Name          | Description                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| objectid      | The ID of the object to change the texture of                                                                                               |
| materialindex | The material index on the object to change (0 to 15)                                                                                        |
| modelid       | The modelid on which the replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the texture. |
| txdname       | The name of the txd file which contains the replacement texture (use "none" if not required)                                                |
| texturename   | The name of the texture to use as the replacement (use "none" if not required)                                                              |
| materialcolor | The object color to set, as an integer or hex in ARGB color format. Using 0 keeps the existing material color.                              |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext,"/mycommand",true))
    {
        new Float:X, Float:Y, Float:Z;
        new myobject;
        GetPlayerPos(playerid, X, Y, Z);
        myobject = CreateObject(19371, X, Y, Z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetObjectMaterial(myobject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        //Replaces the texture of our object with the texture of object 19341
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

Vertex lighting of the object will disappear if material color is changed.

:::

:::warning

You MUST use ARGB color format, not RGBA like used in client messages etc.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerObjectMaterial: Replace the texture of a player object with the texture from another model in the game.
- SetObjectMaterialText: Replace the texture of an object with text.
- Ultimate Creator by Nexius
- Fusez's Map Editor by RedFusion
