---
title: OnPlayerPickUpPickup
sidebar_label: OnPlayerPickUpPickup
description: Callback này được gọi khi một người chơi nhặt pickup được tạo ra với CreatePickup.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi nhặt pickup được tạo ra với [CreatePickup](../functions/CreatePickup).

| Tên      | Mô Tả                                                      |
| -------- | ---------------------------------------------------------- |
| playerid | ID của người chơi đã nhặt pickup.                         |
| pickupid | ID của pickup, trả về bởi [CreatePickup](../functions/CreatePickup) |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    pickup_Health = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPickupStreamIn](OnPickupStreamIn): Được gọi khi một pickup vào phạm vi tầm nhìn của người chơi.
- [OnPickupStreamOut](OnPickupStreamOut): Được gọi khi một pickup rời khỏi phạm vi tầm nhìn của người chơi.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [CreatePickup](../functions/CreatePickup): Tạo một pickup.
- [DestroyPickup](../functions/DestroyPickup): Hủy bỏ một pickup.