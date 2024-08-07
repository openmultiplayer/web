---
title: OnClientMessage
description: Callback này được gọi mỗi khi NPC thấy một ClientMessage.
tags: []
---

## Mô Tả

Callback này được gọi mỗi khi NPC thấy một ClientMessage. Điều này sẽ xảy ra mỗi khi một hàm [SendClientMessageToAll](../functions/SendClientMessageToAll) được sử dụng và mỗi khi một hàm [SendClientMessage](../functions/SendClientMessage) được gửi tới NPC. Callback này sẽ không được gọi khi ai đó nói điều gì đó. Để xem phiên bản với văn bản người chơi, hãy xem [NPC:OnPlayerText](OnPlayerText).

| Tên    | Mô Tả                            |
| ------ | -------------------------------- |
| color  | Màu sắc của ClientMessage.       |
| text[] | Tin nhắn thực tế.                |

## Trả Về

Callback này không xử lý các giá trị trả về.

## Ví Dụ

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "Tôi nghèo :(");
    }
}
```

## Callbacks Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerText](OnPlayerText): Callback này được gọi mỗi khi bất kỳ ai nói điều gì đó trong trò chuyện. Điều này bao gồm bất kỳ người chơi nào, bất kỳ NPC nào khác, hoặc chính NPC đó.