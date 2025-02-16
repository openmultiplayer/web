---
title: OnGameModeExit
description: Callback này được gọi khi một gamemode kết thúc, qua 'gmx', khi máy chủ bị tắt, hoặc GameModeExit.
tags: []
---

## Mô Tả

Callback này được gọi khi một gamemode kết thúc, qua 'gmx', khi máy chủ bị tắt, hoặc GameModeExit.

## Ví Dụ

```c
public OnGameModeExit()
{
    print("Gamemode đã kết thúc.");
    return 1;
}
```

## Ghi Chú

:::tip

Hàm này cũng có thể được sử dụng trong một filterscript để phát hiện nếu gamemode thay đổi với các lệnh RCON như changemode hoặc gmx, vì việc thay đổi gamemode sẽ không tải lại một filterscript.

:::

:::warning

Khi sử dụng `OnGameModeExit` cùng với lệnh console 'rcon gmx', hãy lưu ý rằng có thể xảy ra các lỗi của client.

Một ví dụ về điều này là việc gọi [RemoveBuildingForPlayer](RemoveBuildingForPlayer) quá mức trong [OnGameModeInit](OnGameModeInit) có thể dẫn đến sự cố client. Callback này sẽ KHÔNG được gọi nếu máy chủ bị lỗi hoặc quy trình bị kết thúc bằng các phương pháp khác, chẳng hạn như sử dụng lệnh `kill` trên Linux hoặc nhấn nút đóng trên console của Windows.

:::

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnGameModeInit](OnGameModeInit): Callback này được gọi khi một gamemode bắt đầu.
- [OnFilterScriptInit](OnFilterScriptInit): Callback này được gọi khi một filterscript được tải.
- [OnFilterScriptExit](OnFilterScriptExit): Callback này được gọi khi một filterscript bị gỡ bỏ.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [GameModeExit](../functions/GameModeExit): Thoát khỏi gamemode hiện tại.