---
title: GetTickCount
sidebar_label: GetTickCount
description: 返回一个每毫秒递增的数值。
tags: ["时间"]
---

## 描述

返回一个每毫秒递增的数值，仅用于比较两个时间点的间隔。

## 示例

限制玩家每 10 秒（10000 毫秒）只能使用一次指令：

```c
static gLastCommandUse[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/limited") == 0)
    {
        if (GetTickCount() - gLastCommandUse[playerid] >= 10000)
        {
            // 时间间隔足够
            SendClientMessage(playerid, COLOUR_ERROR, "指令已执行！");
            gLastCommandUse[playerid] = GetTickCount();
        }
        else
        {
            SendClientMessage(playerid, COLOUR_ERROR, "请等待冷却");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

`GetTickCount` 的有效差值范围约为 25 天（2147483647 毫秒）。只要事件间隔在此范围内，本函数能完美工作，但需注意整数溢出的情况：

```c
new start = GetTickCount();
// 长时间代码
new end = GetTickCount();
if (start + 2000 > end)
{
    // 代码执行时间小于两秒
}
```

当`start`接近最大值时，计算可能产生溢出导致错误判断。建议改用以下安全方式：

```c
new start = GetTickCount();
// 长时间代码
new end = GetTickCount();
if (end - start < 2000)
{
    // 代码执行时间小于两秒
}
```

通过调整比较顺序，可完全避免溢出问题。两种写法在模运算中等效，但后者更安全。

:::

## 相关函数

- [tickcount](tickcount): 获取服务器的实际运行时间
