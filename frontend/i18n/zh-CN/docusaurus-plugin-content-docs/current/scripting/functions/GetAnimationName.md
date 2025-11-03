---
title: GetAnimationName
sidebar_label: GetAnimationName
description: 根据动画索引获取对应的动画库名称和动画名称。
tags: []
---

## 描述

根据动画索引获取对应的动画库名称和动画名称。

| 参数名             | 说明                                        |
| ------------------ | ------------------------------------------- |
| index              | 动画索引（由 GetPlayerAnimationIndex 返回） |
| animationLibrary[] | 字符串变量，用于存储动画库名称              |
| len1（数组长度）   | 存储动画库名称的字符串数组长度              |
| animationName[]    | 字符串变量，用于存储动画名称                |
| len2（数组长度）   | 存储动画名称的字符串数组长度                |

## 返回值

成功返回 1，失败返回 0。

## 示例代码

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animLib[32],
            animName[32],
            msgText[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);
        format(msgText, sizeof msgText, "正在播放动画：%s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msgText);
    }
    return 1;
}
```

## 相关函数

- [GetPlayerAnimationIndex](GetPlayerAnimationIndex): 获取玩家当前动画的索引
