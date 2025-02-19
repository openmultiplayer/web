---
title: OnNPCConnect
sidebar_label: OnNPCConnect
description: Callback này được gọi khi một NPC kết nối thành công với server.
tags: ["npc"]
---

## Mô Tả

Callback này được gọi khi một NPC kết nối thành công với server.

| Tên          | Mô Tả                                          |
| ------------- | ---------------------------------------------- |
| myplayerid    | ID của NPC mà server đã gán                    |

## Ví Dụ

```c
public OnNPCConnect(myplayerid)
{
    printf("NPC kết nối thành công với server với ID %i!", myplayerid);
}
```

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnNPCDisconnect](OnNPCDisconnect): Callback này được gọi khi NPC ngắt kết nối khỏi server.
- [OnPlayerConnect](OnPlayerConnect): Callback này được gọi khi một người chơi kết nối với server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Callback này được gọi khi một người chơi rời khỏi server.