---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: Callback này được gọi khi một người chơi vào điểm kiểm tra được đặt cho người chơi đó.
tags: ["player", "checkpoint"]
---

## Mô Tả

Callback này được gọi khi một người chơi vào điểm kiểm tra được đặt cho người chơi đó.

| Tên       | Mô Tả                                    |
| --------- | ---------------------------------------- |
| playerid  | Người chơi đã vào điểm kiểm tra.         |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
//Trong ví dụ này, một điểm kiểm tra được tạo cho người chơi khi xuất hiện,
//điều này tạo ra một phương tiện và vô hiệu hóa điểm kiểm tra.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Ghi Chú

<TipNPCCallbacks />

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Callback này được gọi khi một người chơi rời khỏi điểm kiểm tra.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Callback này được gọi khi một người chơi vào điểm kiểm tra đua.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Callback này được gọi khi một người chơi rời khỏi điểm kiểm tra đua.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Tạo một điểm kiểm tra cho một người chơi.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Vô hiệu hóa điểm kiểm tra hiện tại của người chơi.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Kiểm tra xem một người chơi có đang ở trong điểm kiểm tra không.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Tạo một điểm kiểm tra đua cho một người chơi.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Vô hiệu hóa điểm kiểm tra đua hiện tại của người chơi.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Kiểm tra xem một người chơi có đang ở trong điểm kiểm tra đua không.