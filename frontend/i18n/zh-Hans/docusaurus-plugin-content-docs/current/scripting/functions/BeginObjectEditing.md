---
title: BeginObjectEditing
sidebar_label: BeginObjectEditing
description: 允许玩家通过图形用户界面（GUI）使用鼠标编辑物体（位置和旋转）。
tags: ["玩家", "物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

允许玩家通过图形用户界面（GUI）使用鼠标编辑物体（位置和旋转）。

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 需要进行物体编辑的玩家 ID |
| objectid | 玩家将要编辑的物体 ID     |

## 返回值

`true` - 函数执行成功。注意即使指定了不存在的物体也会返回成功（但不会产生实际效果）

`false` - 函数执行失败。通常表示玩家未连接

## 示例代码

```c
new objectid;

public OnGameModeInit()
{
    objectid = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        BeginObjectEditing(playerid, objectid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: 您现在可以编辑物体了！");
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
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): 编辑玩家物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [BeginObjectSelecting](BeginObjectSelecting): 选择物体
- [EndObjectEditing](EndObjectEditing): 取消物体编辑
