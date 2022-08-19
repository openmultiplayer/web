---
title: OnClientCheckResponse
description: 当SendClientCheck请求完成时，调用这个回调
tags: []
---

## 描述

当 SendClientCheck 请求完成时，调用这个回调。

| 参数名   | 描述                |
| -------- | ------------------- |
| playerid | 被检查的玩家 ID。   |
| actionid | 执行的检查类型 ID。 |
| memaddr  | 请求的地址。        |
| retndata | 检查的结果。        |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // 或者 72
    {
        print("警告: 这个玩家似乎不是在使用普通的电脑!!");
        Kick(playerid);
    }
    return 1;
}
```

## 要点

:::warning

这个回调只能在过滤脚本中被调用。

:::

## 相关函数

- [SendClientCheck](../functions/SendClientCheck): 对客户端进行内存检查。
