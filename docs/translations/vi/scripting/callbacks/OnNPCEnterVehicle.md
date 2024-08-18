---
title: OnNPCEnterVehicle
description: Callback này được gọi khi NPC vào một chiếc xe.
tags: ["npc"]
---

## Mô Tả

Callback này được gọi khi NPC vào một chiếc xe.

| Tên         | Mô Tả                                                   |
| ------------ | ------------------------------------------------------- |
| vehicleid    | ID của chiếc xe mà NPC vào                              |
| seatid       | ID của ghế mà NPC sử dụng                               |

## Ví Dụ

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("NPC đã vào xe với ID: %d và ngồi ở ghế: %d", vehicleid, seatid);
    return 1;
}
```

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnNPCExitVehicle](OnNPCExitVehicle): Callback này được gọi khi NPC rời khỏi một chiếc xe.