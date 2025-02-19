---
title: OnGameModeInit
sidebar_label: OnGameModeInit
description: Callback này được gọi khi gamemode bắt đầu.
tags: []
---

## Mô Tả

Callback này được gọi khi gamemode bắt đầu.

## Ví Dụ

```c
public OnGameModeInit()
{
    print("Gamemode đã bắt đầu!");
    return 1;
}
```

## Ghi Chú

:::tip

Hàm này cũng có thể được sử dụng trong một filterscript để phát hiện nếu gamemode thay đổi với các lệnh RCON như changemode hoặc gmx, vì việc thay đổi gamemode sẽ không tải lại một filterscript.

:::

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnGameModeExit](OnGameModeExit): Callback này được gọi khi một gamemode kết thúc.
- [OnFilterScriptInit](OnFilterScriptInit): Callback này được gọi khi một filterscript được tải.
- [OnFilterScriptExit](OnFilterScriptExit): Callback này được gọi khi một filterscript bị gỡ bỏ.