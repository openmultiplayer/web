---
title: GetPlayerName
sidebar_label: GetPlayerName
description: 获取玩家的昵称
tags: ["玩家"]
---

## 描述

获取玩家的昵称

| 参数名   | 说明                                                                      |
| -------- | ------------------------------------------------------------------------- |
| playerid | 需要获取昵称的玩家 ID                                                     |
| name[]   | 用于存储昵称的数组（引用传递）                                            |
| len      | 存储字符串的长度，建议设置为 MAX_PLAYER_NAME + 1。其中+1 用于容纳空终止符 |

## 返回值

返回玩家昵称的长度

**0** 表示指定玩家不存在

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    // 获取连接玩家的昵称并向其他玩家显示加入消息
    new name[MAX_PLAYER_NAME + 1];
    GetPlayerName(playerid, name, sizeof(name));

    new string[128];
    format(string, sizeof(string), "%s 加入了服务器。", name);
    SendClientMessageToAll(0xC4C4C4FF, string);

    return 1;
}
```

## 注意事项

:::tip

通过 [SetPlayerName](SetPlayerName) 设置玩家昵称时，最大长度为 24 个字符（定义为`MAX_PLAYER_NAME`）

客户端实际可使用的昵称长度为 3-20 个字符，超出范围的昵称会被服务器拒绝连接

:::

## 相关函数

- [SetPlayerName](SetPlayerName): 设置玩家昵称
- [IsValidNickName](IsValidNickName): 检查昵称是否有效
- [GetPlayerIp](GetPlayerIp): 获取玩家 IP 地址
- [GetPlayerPing](GetPlayerPing): 获取玩家网络延迟
- [GetPlayerScore](GetPlayerScore): 获取玩家分数
- [GetPlayerVersion](GetPlayerVersion): 获取玩家客户端版本
