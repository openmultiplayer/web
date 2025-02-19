---
title: AddCharModel
sidebar_label: AddCharModel
description: Adds a new custom character model for download.
tags: []
---

:::warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

:::

## คำอธิบาย

Adds a new custom character model for download. The model files will be stored in player's Documents\GTA San Andreas User Files\SAMP\cache under the Server IP and Port folder in a CRC-form file name.

| Name    | Description                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| baseid  | The base skin model ID to use (behavior of the character & original character to use when download is failed). |
| newid   | The new skin model ID ranged from 20000 to 30000 (10000 slots) to be used later with SetPlayerSkin             |
| dffname | Name of the .dff model collision file located in models server folder by default (artpath setting).            |
| txdname | Name of the .txd model texture file located in models server folder by default (artpath setting).              |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## บันทึก

:::tip

useartwork must be enabled first in server settings in order for this to work

:::

:::warning

There are currently no restrictions on when you can call this function, but be aware that if you do not call them inside OnFilterScriptInit/OnGameModeInit, you run the risk that some players, who are already on the server, may not have downloaded the models.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerSkin](../../scripting/functions/SetPlayerSkin.md): Set a player's skin.
