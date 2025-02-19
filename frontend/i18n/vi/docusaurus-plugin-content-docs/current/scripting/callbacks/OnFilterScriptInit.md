---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: Callback này được gọi khi một filterscript được khởi tạo (tải).
tags: []
---

## Mô Tả

Callback này được gọi khi một filterscript được khởi tạo (tải). Nó chỉ được gọi bên trong filterscript đang được bắt đầu.

## Ví Dụ

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("Filterscript đã được tải.");
    print("--------------------------------------\n");
    return 1;
}
```

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnFilterScriptExit](OnFilterScriptExit): Callback này được gọi khi một filterscript bị gỡ bỏ.
- [OnGameModeInit](OnGameModeInit): Callback này được gọi khi một gamemode bắt đầu.
- [OnGameModeExit](OnGameModeExit): Callback này được gọi khi một gamemode kết thúc.