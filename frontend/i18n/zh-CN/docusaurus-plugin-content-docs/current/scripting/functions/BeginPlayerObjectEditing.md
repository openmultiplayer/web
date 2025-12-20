---
title: BeginPlayerObjectEditing
sidebar_label: BeginPlayerObjectEditing
description: 允许玩家通过图形用户界面（GUI）使用鼠标编辑玩家物体（位置和旋转）。
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

允许玩家通过图形用户界面（GUI）使用鼠标编辑玩家物体（位置和旋转）。

| 参数     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要进行物体编辑的玩家 ID |
| objectid | 玩家将要编辑的玩家物体 ID |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（玩家或物体无效）

## 示例代码

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        BeginPlayerObjectEditing(playerid, gPlayerObject[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：你现在可以编辑你的玩家物体！");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

编辑过程中按住空格键（车辆中按 W 键）并移动鼠标可以控制视角移动

:::

## 相关函数

- [CreateObject](CreateObject): 创建物体
- [DestroyObject](DestroyObject): 销毁物体
- [MoveObject](MoveObject): 移动物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [BeginObjectSelecting](BeginObjectSelecting): 选择物体
- [EndObjectEditing](EndObjectEditing): 取消物体编辑
