---
title: OnScriptCash
description: Callback này được gọi khi một điều gì đó trong trò chơi như casino cấp tiền cho người chơi.
tags: ["player"]
---

:::warning

Callback này hiện tại KHÔNG hoạt động.

:::

## Mô tả

Callback này được gọi khi một điều gì đó trong trò chơi như casino cấp tiền cho người chơi.

| Tên      | Mô tả                                           |
|----------|-------------------------------------------------|
| playerid | ID của người chơi nhận tiền từ trò chơi         |
| amount   | Số tiền được cấp hoặc lấy                       |
| source   | Nguồn gốc của số tiền                           |

## Trả về

Chưa rõ vì hàm này hiện tại không hoạt động.

## Ví dụ

```c
// Tưởng tượng:

public OnScriptCash(playerid, amount, source)
{
    if (source == SCRIPT_CASH_CASINO)
    {
        SendClientMessage(playerid, -1, "Bạn đã thắng $%d từ casino!", amount);
    }
    else if (source == SCRIPT_CASH_VENDING_MACHINE)
    {
        SendClientMessage(playerid, -1, "Bạn đã mua một lon nước từ máy bán hàng tự động với giá $%d", amount);
    }
    return 1;
}
```

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [GetPlayerMoney](../functions/GetPlayerMoney): Lấy số tiền mà người chơi đang có.