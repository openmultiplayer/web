---
title: EditObject
sidebar_label: EditObject
description: 允许玩家通过图形界面（GUI）编辑物体的位置和旋转。
tags: []
---

## 描述

允许玩家通过图形用户界面（GUI）使用鼠标编辑物体的位置和旋转。

| 名称     | 描述                  |
| -------- | --------------------- |
| playerid | 执行编辑操作的玩家 ID |
| objectid | 待编辑的物体 ID       |

## 返回值

**1** - 函数执行成功（即使指定了不存在的物体也会返回成功，但无实际效果）

**0** - 函数执行失败（玩家未连接）

## 示例

```c
new object;
public OnGameModeInit()
{
    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        EditObject(playerid, object);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：您现在可以编辑该物体！");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

编辑过程中按住空格键（车内按 W 键）并移动鼠标可调整视角

:::

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [MoveObject](MoveObject): 移动物体
- [EditPlayerObject](EditPlayerObject): 编辑玩家专属物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [SelectObject](SelectObject): 选择物体
- [CancelEdit](CancelEdit): 取消编辑操作
