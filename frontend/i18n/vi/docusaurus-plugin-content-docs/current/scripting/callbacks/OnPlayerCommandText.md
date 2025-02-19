---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: Callback này được gọi khi một người chơi nhập lệnh vào cửa sổ trò chuyện của client.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi nhập lệnh vào cửa sổ trò chuyện của client. Lệnh là bất kỳ thứ gì bắt đầu bằng dấu gạch chéo, ví dụ: /help.

| Tên       | Mô Tả                                                       |
| ---------- | ----------------------------------------------------------- |
| playerid   | ID của người chơi đã nhập lệnh.                             |
| cmdtext[]  | Lệnh đã được nhập (bao gồm cả dấu gạch chéo).               |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts, vì vậy việc trả về 1 ở đây sẽ chặn các script khác nhận được callback này.

## Ví Dụ

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Đây là lệnh /help!");
        return 1;
        // Việc trả về 1 thông báo cho server rằng lệnh đã được xử lý.
        // OnPlayerCommandText sẽ không được gọi trong các script khác.
    }
    return 0;
    // Việc trả về 0 thông báo cho server rằng lệnh chưa được xử lý bởi script này.
    // OnPlayerCommandText sẽ được gọi trong các script khác cho đến khi một script trả về 1.
    // Nếu không có script nào trả về 1, thông báo 'SERVER: Lệnh không xác định' sẽ được hiển thị cho người chơi.
}
```

## Ghi Chú

<TipNPCCallbacks />

## Các Callback Liên Quan

- [OnPlayerText](OnPlayerText): Callback này được gọi khi một người chơi gửi tin nhắn trò chuyện.
- [OnRconCommand](OnRconCommand): Callback này được gọi khi một lệnh được gửi qua console của server, RCON từ xa, hoặc qua lệnh "/rcon command" trong trò chơi.

## Các Hàm Liên Quan

- [SendRconCommand](../functions/SendRconCommand): Gửi một lệnh RCON qua script.