---
title: EditPlayerObject
sidebar_label: EditPlayerObject
description: 允许玩家通过图形界面编辑其专属物体的位置和旋转。
tags: ["玩家"]
---

## 描述

允许玩家通过图形用户界面（GUI）使用鼠标编辑其专属物体的位置和旋转。

| 参数     | 说明                    |
| -------- | ----------------------- |
| playerid | 执行编辑操作的玩家 ID   |
| objectid | 待编辑的玩家专属物体 ID |

## 返回值

**1** - 函数执行成功

**0** - 函数执行失败（玩家或物体无效）

## 示例

```c
new object[MAX_PLAYERS];
public OnPlayerSpawn(playerid)
{
    object[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditPlayerObject(playerid, object[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：你现在可以编辑你的专属物体！");
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

- [CreateObject](CreateObject): 创建全局物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [MoveObject](MoveObject): 移动全局物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [SelectObject](SelectObject): 选择物体
- [CancelEdit](CancelEdit): 取消编辑操作
