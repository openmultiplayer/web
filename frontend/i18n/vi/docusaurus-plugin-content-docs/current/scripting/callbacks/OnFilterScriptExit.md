---
title: OnFilterScriptExit
description: Callback này được gọi khi một filterscript bị gỡ bỏ.
tags: []
---

## Mô Tả

Callback này được gọi khi một filterscript bị gỡ bỏ. Nó chỉ được gọi bên trong filterscript đang bị gỡ bỏ.

## Ví Dụ

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Filterscript của tôi đã được gỡ bỏ");
    print("--------------------------------------\n");
    return 1;
}
```

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnFilterScriptInit](OnFilterScriptInit): Callback này được gọi khi một filterscript được tải.
- [OnGameModeInit](OnGameModeInit): Callback này được gọi khi một gamemode bắt đầu.
- [OnGameModeExit](OnGameModeExit): Callback này được gọi khi một gamemode kết thúc.