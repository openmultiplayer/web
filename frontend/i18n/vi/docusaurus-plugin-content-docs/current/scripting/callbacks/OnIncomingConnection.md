---
title: OnIncomingConnection
sidebar_label: OnIncomingConnection
description: Callback này được gọi khi một địa chỉ IP cố gắng kết nối với server.
tags: []
---

## Mô Tả

Callback này được gọi khi một địa chỉ IP cố gắng kết nối với server. Để chặn các kết nối đến, hãy sử dụng `BlockIpAddress`.

| Tên           | Mô Tả                                            |
| -------------- | ------------------------------------------------ |
| playerid       | ID của người chơi đang cố gắng kết nối          |
| ip_address[]   | Địa chỉ IP của người chơi đang cố gắng kết nối  |
| port           | Cổng của kết nối được thử nghiệm                |

## Trả Về

- `1` - Sẽ ngăn các filterscript khác nhận callback này.
- `0` - Chỉ ra rằng callback này sẽ được truyền đến filterscript tiếp theo.

Hàm này luôn được gọi đầu tiên trong các filterscript.

## Ví Dụ

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Kết nối đến cho player ID %i [IP/cổng: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerConnect](OnPlayerConnect): Callback này được gọi khi một người chơi kết nối với server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Callback này được gọi khi một người chơi ngắt kết nối với server.
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Callback này được gọi khi một người chơi hoàn tất việc tải các mô hình tùy chỉnh.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [BlockIpAddress](../functions/BlockIpAddress): Chặn một địa chỉ IP không kết nối với server trong một khoảng thời gian nhất định.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Bỏ chặn một IP đã bị chặn trước đó.