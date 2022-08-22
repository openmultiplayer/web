---
title: OnPlayerRequestSpawn
description: 当玩家通过按下SHIFT键或点击“重生”按钮来尝试通过类选择器进行重生时调用。
tags: ["player"]
---

## 描述

当玩家通过按下 SHIFT 键或点击“重生”按钮来尝试通过类选择器进行重生时调用。

| 参数名   | 描述                  |
| -------- | --------------------- |
| playerid | 请求重生的玩家的 ID。 |

## 返回值

它总是在过滤脚本中首先被调用，因此在那里返回 0 也会阻止其他脚本看到它。

## 案例

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "你不能重生");
        return 0;
    }
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />

:::tip

为了防止玩家重生特定的类，最后查看的类必须保存在 OnPlayerRequestClass 的一个变量中。

:::
