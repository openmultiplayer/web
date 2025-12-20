---
title: GetPlayerAnimationIndex
sidebar_label: GetPlayerAnimationIndex
description: 获取玩家当前播放的动画索引
tags: ["玩家", "动画"]
---

## 描述

获取玩家当前正在应用的动画索引编号。

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取动画索引的玩家 ID |

## 返回值

返回动画库中的索引编号，当没有应用动画时返回 0。

## 示例代码

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animationLibrary[32],
            animationName[32],
            string[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animationLibrary, sizeof(animationLibrary), animationName, sizeof(animationName));

        format(string, sizeof(string), "正在播放动画：%s 库中的 %s", animationLibrary, animationName);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## 注意事项

:::tip
动画索引对应 SA-MP 内置动画库的编号，可通过[GetAnimationName](GetAnimationName)获取具体动画名称
:::

## 相关函数

- [ApplyAnimation](ApplyAnimation): 为玩家应用指定动画
- [GetAnimationName](GetAnimationName): 通过索引获取动画库及动画名称
