---
title: OnPickupStreamIn
description: Callback này được gọi khi một pickup vào phạm vi nhìn thấy của người chơi.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một pickup vào phạm vi nhìn thấy của người chơi.

| Tên       | Mô Tả                                                                           |
|-----------|---------------------------------------------------------------------------------|
| pickupid  | ID của pickup, được trả về bởi [CreatePickup](../functions/CreatePickup) |
| playerid  | ID của người chơi mà pickup vào phạm vi nhìn thấy.                             |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth đã vào phạm vi nhìn thấy của người chơi id %d", playerid);
    }
    return 1;
}
```

## Các Callback Liên Quan

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Được gọi khi một người chơi nhặt pickup.
- [OnPickupStreamOut](OnPickupStreamOut): Được gọi khi một pickup rời khỏi phạm vi nhìn thấy của người chơi.

## Các Hàm Liên Quan

- [CreatePickup](../functions/CreatePickup): Tạo một pickup.
- [DestroyPickup](../functions/DestroyPickup): Hủy một pickup.
