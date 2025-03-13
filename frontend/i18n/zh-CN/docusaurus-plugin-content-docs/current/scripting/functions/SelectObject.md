---
title: SelectObject
sidebar_label: SelectObject
description: 显示光标并允许玩家选取物体
tags: []
---

## 描述

显示光标并允许玩家选取物体。当玩家选中物体时会触发[OnPlayerSelectObject](../callbacks/OnPlayerSelectObject)回调。

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 可以选取物体的玩家 ID |

## 返回值

该函数没有特定返回值

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        SelectObject(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：请选择您要编辑的物体！");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [MoveObject](MoveObject): 移动物体
- [EditObject](EditObject): 编辑物体
- [EditPlayerObject](EditPlayerObject): 编辑玩家所属物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [CancelEdit](CancelEdit): 取消物体编辑
- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): 玩家选取物体时触发的回调
