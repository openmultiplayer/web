---
title: SendClientMessage
sidebar_label: SendClientMessage
description: 该函数用于向指定玩家发送带有特定颜色的聊天消息。
tags: []
---

## 描述

该函数向指定玩家的聊天框发送带有设定颜色的消息。聊天框中的整行文字将显示为设定颜色，除非使用了颜色嵌入技术。

| 参数名           | 说明                                |
| ---------------- | ----------------------------------- |
| playerid         | 接收消息的玩家 ID                   |
| color            | 消息颜色（0xRRGGBBAA 十六进制格式） |
| const format[]   | 要显示的文本内容（最多 144 个字符） |
| OPEN_MP_TAGS:... | 可变参数列表（支持任意类型参数）    |

## 返回值

**true** - 函数执行成功（当文本超过 144 字符时仍返回 true，但实际不会发送）

**false** - 函数执行失败（通常表示玩家未连接）

## 示例

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    SendClientMessage(playerid, COLOR_RED, "这段文字显示为红色");
    SendClientMessage(playerid, 0x00FF00FF, "这段文字显示为绿色");
    SendClientMessage(playerid, -1, "这段文字显示为白色");
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
        new name[MAX_PLAYER_NAME];
        GetPlayerName(killerid, name, sizeof(name));

        SendClientMessage(playerid, COLOR_RED, "你被玩家 %s 击杀", name);
    }
    return 1;
}
```

## 注意要点

:::tip

- 可使用颜色嵌入技术在一条消息中显示多种颜色
- 使用-1 作为颜色值时，消息将显示为白色（十六进制表示为 0xFFFFFFFF）

:::

:::warning

- 超过 144 个字符的消息将不会被发送，建议使用截断或多行显示
- 避免在消息中直接使用百分号%，如需使用请转义为%%

:::

## 相关函数

- [SendClientMessageToAll](SendClientMessageToAll): 向所有玩家发送消息
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): 模拟玩家发送私聊消息
- [SendPlayerMessageToAll](SendPlayerMessageToAll): 模拟玩家发送全局消息
