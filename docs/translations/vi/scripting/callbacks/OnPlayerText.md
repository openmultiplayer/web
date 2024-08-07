---
title: OnPlayerText
description: Callback này được gọi khi một người chơi gửi tin nhắn trò chuyện.
tags: ["player"]
---

## Mô tả

Callback này được gọi khi một người chơi gửi tin nhắn trò chuyện.

| Tên       | Mô tả                                    |
| --------- | ---------------------------------------- |
| playerid  | ID của người chơi đã gõ văn bản.         |
| text[]    | Văn bản mà người chơi đã gõ.             |

## Giá trị trả về

Nó luôn được gọi đầu tiên trong filterscripts nên trả về 0 sẽ chặn các script khác không thấy được nó.

## Ví dụ

```c
public OnPlayerText(playerid, text[])
{
    new string[144];
    format(string, sizeof (string), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);
    return 0; // bỏ qua văn bản mặc định và gửi văn bản tùy chỉnh
}
```

## Ghi chú

<TipNPCCallbacks />

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerCommandText](OnPlayerCommandText): Được gọi khi một người chơi gõ một lệnh.

## Các Hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Buộc một người chơi gửi văn bản cho một người chơi.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Buộc một người chơi gửi văn bản cho tất cả người chơi.
- [ToggleChatTextReplacement](../functions/ToggleChatTextReplacement): Bật/tắt bộ lọc đầu vào trò chuyện.