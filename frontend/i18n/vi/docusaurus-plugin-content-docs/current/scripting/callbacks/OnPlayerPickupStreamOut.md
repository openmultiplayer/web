---
title: OnPlayerPickupStreamOut
sidebar_label: OnPlayerPickupStreamOut
description: Callback này được gọi khi một pickup của người chơi rời khỏi phạm vi tầm nhìn của người chơi.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một pickup của người chơi rời khỏi phạm vi tầm nhìn của người chơi.

| Tên      | Mô Tả                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------ |
| pickupid | ID của pickup của người chơi, trả về bởi [CreatePlayerPickup](../functions/CreatePlayerPickup) |
| playerid | ID của người chơi mà pickup của người chơi rời khỏi phạm vi tầm nhìn.                           |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
new g_PlayerPickupHealth[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPlayerPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth is streamed out for player id %d", playerid);
    }
    return 1;
}
```

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Được gọi khi một người chơi nhặt pickup của người chơi.
- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Được gọi khi một pickup của người chơi vào phạm vi tầm nhìn của người chơi.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Tạo một pickup chỉ hiển thị cho một người chơi.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Hủy bỏ một pickup của người chơi.