---
title: OnPlayerLeaveRaceCheckpoint
sidebar_label: OnPlayerLeaveRaceCheckpoint
description: Callback này được gọi khi một người chơi rời khỏi checkpoint đua.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Mô Tả

Callback này được gọi khi một người chơi rời khỏi checkpoint đua.

| Tên      | Mô Tả                                               |
| -------- | --------------------------------------------------- |
| playerid | ID của người chơi đã rời khỏi checkpoint đua. |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Người chơi %d đã rời khỏi checkpoint đua!", playerid);
    return 1;
}
```

## Ghi Chú

<TipNPCCallbacks />

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Callback này được gọi khi một người chơi vào một checkpoint.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Callback này được gọi khi một người chơi rời khỏi một checkpoint.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Callback này được gọi khi một người chơi vào một checkpoint đua.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Tạo một checkpoint cho người chơi.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Vô hiệu hóa checkpoint hiện tại của người chơi.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Kiểm tra xem một người chơi có đang ở trong một checkpoint không.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Tạo một checkpoint đua cho người chơi.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Vô hiệu hóa checkpoint đua hiện tại của người chơi.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Kiểm tra xem một người chơi có đang ở trong một checkpoint đua không.