---
title: OnNPCExitVehicle
description: Callback này được gọi khi NPC rời khỏi một chiếc xe.
tags: ["npc"]
---

## Mô Tả

Callback này được gọi khi NPC rời khỏi một chiếc xe.

## Ví Dụ

```c
public OnNPCExitVehicle()
{
    print("NPC đã rời khỏi chiếc xe");
    return 1;
}
```

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Callback này được gọi khi NPC vào một chiếc xe.