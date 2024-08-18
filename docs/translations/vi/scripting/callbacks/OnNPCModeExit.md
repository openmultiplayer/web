---

title: OnNPCModeExit  
description: Callback này được gọi khi một script NPC bị tháo dỡ.  
tags: ["npc"]  
---

## Mô Tả

Callback này được gọi khi một script NPC bị tháo dỡ.

## Ví Dụ

```c
public OnNPCModeExit()
{
    print("Script NPC đã được tháo dỡ");
    return 1;
}
```

## Các Callback Liên Quan

- [OnNPCModeInit](OnNPCModeInit): Callback này được gọi khi một script NPC được tải.