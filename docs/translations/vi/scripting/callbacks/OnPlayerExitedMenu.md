---
title: OnPlayerExitedMenu
description: Callback này được gọi khi một người chơi thoát khỏi menu.
tags: ["player", "menu"]
---

## Mô Tả

Callback này được gọi khi một người chơi thoát khỏi menu.

| Tên        | Mô Tả                                    |
| ---------- | ---------------------------------------- |
| playerid   | ID của người chơi đã thoát khỏi menu     |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid, true); // giải phóng người chơi khi họ thoát khỏi menu
    return 1;
}
```

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerSelectedMenuRow](OnPlayerSelectedMenuRow): Callback này được gọi khi một người chơi chọn một hàng trong menu.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [CreateMenu](../functions/CreateMenu): Tạo một menu.
- [DestroyMenu](../functions/DestroyMenu): Xóa một menu.