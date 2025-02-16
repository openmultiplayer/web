---
title: OnPlayerPickUpPlayerPickup
description: Callback này được gọi khi một người chơi nhặt pickup của người chơi được tạo ra bằng CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một người chơi nhặt pickup của người chơi được tạo ra bằng [CreatePlayerPickup](../functions/CreatePlayerPickup).

| Tên      | Mô Tả                                                                                       |
| -------- | ------------------------------------------------------------------------------------------ |
| playerid | ID của người chơi đã nhặt pickup của người chơi.                                           |
| pickupid | ID của pickup của người chơi, trả về bởi [CreatePlayerPickup](../functions/CreatePlayerPickup) |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
new player_pickup_Cash[MAX_PLAYERS];
new player_pickup_Health[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPlayerPickup(playerid, pickupid)
{
    if (pickupid == player_pickup_Cash[playerid])
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == player_pickup_Health[playerid])
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Được gọi khi một pickup của người chơi vào phạm vi tầm nhìn của người chơi.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Được gọi khi một pickup của người chơi rời khỏi phạm vi tầm nhìn của người chơi.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Tạo một pickup chỉ hiển thị cho một người chơi.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Hủy bỏ một pickup của người chơi.