---
title: OnNPCModeInit  
description: Callback này được gọi khi một script NPC được tải.  
tags: ["npc"]  
---

## Mô Tả

Callback này được gọi khi một script NPC được tải.

## Ví Dụ

```c
public OnNPCModeInit()
{
    print("Script NPC đã được tải.");
    return 1;
}
```

## Các Callback Liên Quan

Các callback sau có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó:

- [OnNPCModeExit](OnNPCModeExit): Callback này được gọi khi một script NPC bị tháo dỡ.