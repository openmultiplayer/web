---
title: TextDrawShowForAll
description: Shows a textdraw for all players.
tags: ["textdraw"]
---

## คำอธิบาย

Shows a textdraw for all players.

| Name | Description                                                 |
| ---- | ----------------------------------------------------------- |
| text | The ID of the textdraw to show. Returned by TextDrawCreate. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the textdraw specified does not exist.

## ตัวอย่าง

```c
new Text:textid = TextDrawCreate(100.0, 100.0, "Hello!");
TextDrawShowForAll(textid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
