---
title: OnClientMessage
description: 每当NPC看到一个客户端消息时，这个回调就会被调用。
tags: []
---

## 描述

每当 NPC 看到一个客户端消息时，这个回调就会被调用。
每次使用 SendClientMessageToAll 函数以及每次向 NPC 发送 SendClientMessage 函数时，都会出现这种情况。
当玩家说话时，不会调用此回调。
有关玩家的文本的版本，请参阅 NPC:OnPlayerText。

| 参数名 | 说明               |
| ------ | ------------------ |
| color  | 客户端消息的颜色。 |
| text[] | 实际的消息内容。   |

## 返回值

此回调不处理返回。

## 案例

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"银行存款余额: $0") != -1)
    {
        SendClientMessage(playerid, -1, "我好穷 :(");
    }
}
```
