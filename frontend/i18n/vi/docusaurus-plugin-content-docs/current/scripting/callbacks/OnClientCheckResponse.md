---
title: OnClientCheckResponse
description: Callback này được gọi khi một yêu cầu SendClientCheck hoàn tất.
tags: []
---

## Mô Tả

Callback này được gọi khi một yêu cầu SendClientCheck hoàn tất.

| Tên         | Mô Tả                                         |
| ------------ | --------------------------------------------- |
| playerid     | ID của người chơi được kiểm tra.            |
| actionid     | Loại kiểm tra được thực hiện.               |
| memaddr      | Địa chỉ yêu cầu.                             |
| retndata     | Kết quả của kiểm tra.                        |

## Trả Về

Nó luôn được gọi đầu tiên trong các filterscripts.

## Ví Dụ

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // hoặc 72
    {
        print("Người chơi đang kết nối bằng khách hàng PC.");
    }
    return 1;
}
```

## Ghi Chú

:::warning

**Máy chủ SA:MP**: Callback này chỉ được gọi khi nó nằm trong một filterscript.

**Máy chủ Open Multiplayer**: Callback này hoạt động bình thường trong gamemode / filterscript.

:::

## Các Hàm Liên Quan

Hàm sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [SendClientCheck](../functions/SendClientCheck): Thực hiện kiểm tra bộ nhớ trên khách hàng.

## Tài Nguyên Liên Quan

- [opcodes](../resources/opcodes): ID opcodes hành động và mục đích của chúng.