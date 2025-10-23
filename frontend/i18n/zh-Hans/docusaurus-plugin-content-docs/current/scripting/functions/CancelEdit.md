---
title: CancelEdit
sidebar_label: CancelEdit
description: 取消玩家的物体编辑模式
tags: []
---

## 描述

终止玩家当前的物体编辑状态

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要终止编辑的玩家 ID |

## 返回值

本函数没有特定返回值

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器: 您已终止物体编辑！");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SelectObject](SelectObject): 选择物体
- [EditObject](EditObject): 编辑物体
- [EditPlayerObject](EditPlayerObject): 编辑玩家物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [MoveObject](MoveObject): 移动物体
