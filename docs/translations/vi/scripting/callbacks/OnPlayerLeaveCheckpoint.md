---
title: OnPlayerLeaveCheckpoint
description: Callback này được gọi khi một người chơi rời khỏi checkpoint đã được thiết lập cho họ bởi SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## Mô Tả

Callback này được gọi khi một người chơi rời khỏi checkpoint đã được thiết lập cho họ bởi [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint). Chỉ có thể thiết lập một checkpoint tại một thời điểm.

| Tên      | Mô Tả                                                                 |
| -------- | ----------------------------------------------------------------------- |
| playerid | ID của người chơi đã rời khỏi checkpoint.                             |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscript.

## Ví Dụ

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Người chơi %i đã rời khỏi một checkpoint!", playerid);
    return 1;
}
```

## Ghi Chú

<TipNPCCallbacks />

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Callback này được gọi khi một người chơi vào một checkpoint.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Callback này được gọi khi một người chơi vào một race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Callback này được gọi khi một người chơi rời khỏi một race checkpoint.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Tạo một checkpoint cho người chơi.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Vô hiệu hóa checkpoint hiện tại của người chơi.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Kiểm tra xem người chơi có đang ở trong checkpoint không.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Tạo một race checkpoint cho người chơi.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Vô hiệu hóa race checkpoint hiện tại của người chơi.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Kiểm tra xem người chơi có đang ở trong race checkpoint không.