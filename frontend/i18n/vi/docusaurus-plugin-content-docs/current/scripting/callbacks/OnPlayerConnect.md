---
title: OnPlayerConnect
description: Callback này được gọi khi một người chơi kết nối với server.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi kết nối với server.

| Tên       | Mô Tả                                           |
| ---------- | ----------------------------------------------- |
| playerid   | ID của người chơi đã kết nối.                   |

## Trả Về

0 - Sẽ ngăn các filterscripts khác nhận được callback này.

1 - Chỉ ra rằng callback này sẽ được chuyển đến filterscript tiếp theo.

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s đã kết nối với server. Chào mừng!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Ghi Chú

<TipNPCCallbacks />

## Các Callback Liên Quan

- [OnPlayerDisconnect](OnPlayerDisconnect): Callback này được gọi khi một người chơi rời khỏi server.
- [OnIncomingConnection](OnIncomingConnection): Callback này được gọi khi một người chơi đang cố gắng kết nối với server.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Callback này được gọi khi một người chơi hoàn tất việc tải các mô hình tùy chỉnh.