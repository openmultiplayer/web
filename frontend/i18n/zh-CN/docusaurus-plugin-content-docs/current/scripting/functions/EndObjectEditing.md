---
title: EndObjectEditing
sidebar_label: EndObjectEditing
description: 取消玩家的物体编辑模式。
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

强制终止指定玩家的物体编辑状态。

| 参数     | 说明                |
| -------- | ------------------- |
| playerid | 要终止编辑的玩家 ID |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        EndObjectEditing(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：物体编辑已终止！");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [BeginObjectSelecting](BeginObjectSelecting): 进入物体选择模式
- [BeginObjectEditing](BeginObjectEditing): 开始编辑全局物体
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): 开始编辑玩家专属物体
- [EditAttachedObject](EditAttachedObject): 编辑附加物体
- [CreateObject](CreateObject): 创建全局物体
- [DestroyObject](DestroyObject): 销毁全局物体
- [MoveObject](MoveObject): 移动全局物体
