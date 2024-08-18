---
title: OnPlayerRequestSpawn
description: Callback này được gọi khi người chơi cố gắng xuất hiện qua việc chọn lớp bằng cách nhấn SHIFT hoặc nhấp vào nút 'Spawn'.
tags: ["player", "class"]
---

## Mô tả

Callback này được gọi khi người chơi cố gắng xuất hiện qua việc chọn lớp bằng cách nhấn SHIFT hoặc nhấp vào nút 'Spawn'.

| Tên      | Mô tả                                      |
| -------- | ------------------------------------------ |
| playerid | ID của người chơi yêu cầu xuất hiện.       |

## Giá trị trả về

Nó luôn được gọi đầu tiên trong filterscripts nên trả về 0 ở đó cũng chặn các script khác nhìn thấy nó.

## Ví dụ

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "You may not spawn.");
        return 0;
    }
    return 1;
}
```

## Ghi chú

<TipNPCCallbacks />

:::tip

Để ngăn người chơi xuất hiện với các lớp nhất định, lớp cuối cùng đã xem phải được lưu trong một biến trong OnPlayerRequestClass.

:::

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerSpawn](OnPlayerSpawn): Callback này được gọi khi người chơi xuất hiện. 
- [OnPlayerRequestClass](OnPlayerRequestClass): Callback này được gọi khi người chơi thay đổi lớp ở việc chọn lớp.