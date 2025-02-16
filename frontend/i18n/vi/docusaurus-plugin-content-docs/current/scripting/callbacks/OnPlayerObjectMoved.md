---
title: OnPlayerObjectMoved
sidebar_label: OnPlayerObjectMoved
description: Callback này được gọi khi một đối tượng của người chơi được di chuyển sau khi MovePlayerObject (khi nó ngừng di chuyển).
tags: ["player", "object", "playerobject"]
---

## Mô Tả

Callback này được gọi khi một đối tượng của người chơi được di chuyển sau khi [MovePlayerObject](../functions/MovePlayerObject) (khi nó ngừng di chuyển).

| Tên      | Mô Tả                                     |
| -------- | ----------------------------------------- |
| playerid | ID của người chơi mà đối tượng được gán cho |
| objectid | ID của đối tượng người chơi đã được di chuyển |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Đối tượng người chơi đã được di chuyển: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Ghi Chú

<TipNPCCallbacks />

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnObjectMoved](OnObjectMoved): Callback này được gọi khi một đối tượng ngừng di chuyển.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [MovePlayerObject](../functions/MovePlayerObject): Di chuyển một đối tượng người chơi.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Kiểm tra xem đối tượng người chơi có đang di chuyển không.
- [StopPlayerObject](../functions/StopPlayerObject): Dừng đối tượng người chơi di chuyển.
- [CreatePlayerObject](../functions/CreatePlayerObject): Tạo một đối tượng chỉ cho một người chơi.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Hủy bỏ đối tượng người chơi.