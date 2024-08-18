---
title: OnPlayerEnterRaceCheckpoint
description: Callback này được gọi khi một người chơi vào một checkpoint đua.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Mô Tả

Callback này được gọi khi một người chơi vào một checkpoint đua.

| Tên       | Mô Tả                                              |
| --------- | -------------------------------------------------- |
| playerid  | ID của người chơi đã vào checkpoint đua.          |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Người chơi %d đã vào một checkpoint đua!", playerid);
    return 1;
}
```

## Ghi Chú

<TipNPCCallbacks />

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Callback này được gọi khi một người chơi vào một checkpoint.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Callback này được gọi khi một người chơi rời khỏi một checkpoint.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Callback này được gọi khi một người chơi rời khỏi một checkpoint đua.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Tạo một checkpoint cho người chơi.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Vô hiệu hóa checkpoint hiện tại của người chơi.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Kiểm tra xem người chơi có đang ở trong một checkpoint hay không.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Tạo một checkpoint đua cho người chơi.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Vô hiệu hóa checkpoint đua hiện tại của người chơi.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Kiểm tra xem người chơi có đang ở trong một checkpoint đua hay không.
