---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: Callback này được gọi khi một xe hồi sinh (respawn).
tags: ["vehicle"]
---

:::warning

Callback này chỉ được gọi khi xe **hồi sinh** (respawn)! Hàm `CreateVehicle` và `AddStaticVehicle(Ex)` **không** kích hoạt callback này.

:::

## Mô tả

Callback này được gọi khi một xe hồi sinh.

| Tên        | Mô tả                         |
|------------|-------------------------------|
| vehicleid  | ID của xe vừa hồi sinh.       |

## Trả về

0 - Ngăn các filterscript khác nhận callback này.

1 - Cho biết callback này sẽ được chuyển đến filterscript tiếp theo.

Luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehicle %i spawned!",vehicleid);
    return 1;
}
```

## Các callback liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnVehicleDeath](OnVehicleDeath): Callback này được gọi khi một xe bị phá hủy.
- [OnPlayerSpawn](OnPlayerSpawn): Callback này được gọi khi một người chơi hồi sinh.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Hồi sinh một xe.
- [CreateVehicle](../functions/CreateVehicle): Tạo một xe.