---
title: TextDrawHideForAll
sidebar_label: TextDrawHideForAll
description: Hides a text draw for all players.
tags: ["textdraw"]
---

## คำอธิบาย

Hides a text draw for all players.

| Name | Description                                                  |
| ---- | ------------------------------------------------------------ |
| text | The ID of the textdraw to hide (returned by TextDrawCreate). |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new TextID;

TextID = TextDrawCreate(...);


//Later on
TextDrawShowForAll(TextID);

//Even later on
TextDrawHideForAll(TextID);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
