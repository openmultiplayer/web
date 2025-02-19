---

title: OnNPCDisconnect
description: Callback này được gọi khi NPC ngắt kết nối khỏi server.
tags: ["npc"]
---

## Mô Tả

Callback này được gọi khi NPC ngắt kết nối khỏi server.

| Tên          | Mô Tả                                                   |
| ------------- | ------------------------------------------------------- |
| reason[]      | Lý do tại sao bot đã ngắt kết nối khỏi server          |

## Ví Dụ

```c
public OnNPCDisconnect(reason[])
{
    printf("NPC đã ngắt kết nối khỏi server. Lý do: %s", reason);
}
```

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnNPCConnect](OnNPCConnect): Callback này được gọi khi NPC kết nối thành công với server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Callback này được gọi khi một người chơi rời khỏi server.
- [OnPlayerConnect](OnPlayerConnect): Callback này được gọi khi một người chơi kết nối với server.