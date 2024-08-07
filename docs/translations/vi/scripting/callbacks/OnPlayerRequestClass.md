---
title: OnPlayerRequestClass
description: Callback này được gọi khi một người chơi thay đổi lớp trong chọn lớp (và khi chọn lớp xuất hiện lần đầu).
tags: ["player", "class"]
---

## Mô Tả

Callback này được gọi khi một người chơi thay đổi lớp trong chọn lớp (và khi chọn lớp xuất hiện lần đầu).

| Tên      | Mô Tả                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------- |
| playerid | ID của người chơi đã thay đổi lớp.                                                               |
| classid  | ID của lớp hiện tại đang được xem (trả về bởi [AddPlayerClass](../functions/AddPlayerClass)).  |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerRequestClass(playerid, classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "Lớp này chỉ dành cho quản trị viên!");
        return 0;
    }
    return 1;
}
```

## Ghi Chú

:::tip

Callback này cũng được gọi khi người chơi nhấn F4.

:::

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerRequestSpawn](OnPlayerRequestSpawn): Callback này được gọi khi một người chơi cố gắng spawn thông qua chọn lớp.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [AddPlayerClass](../functions/AddPlayerClass): Thêm một lớp cho người chơi.