---
title: BeginObjectSelecting
sidebar_label: BeginObjectSelecting
description: 显示光标并允许玩家选择物体。
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

显示光标并允许玩家选择物体。当玩家选择物体时会触发 OnPlayerSelectObject 回调函数。

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要进行物体选择的玩家 ID |

## 返回值

此函数不返回特定值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        BeginObjectSelecting(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：请选择你要编辑的物体！");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [MoveObject](MoveObject): 移动物体
- [BeginObjectEditing](BeginObjectEditing): 编辑物体
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): 编辑玩家物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [EndObjectEditing](EndObjectEditing): 取消物体编辑

## 相关回调

- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): 当玩家选择物体时触发
