---
title: EditAttachedObject
sidebar_label: EditAttachedObject
description: 进入附加物体的编辑模式。
tags: ["玩家", "物体", "附加"]
---

## 描述

进入附加物体的编辑模式。

| 参数     | 说明                         |
| -------- | ---------------------------- |
| playerid | 要进入编辑模式的玩家 ID      |
| index    | 要编辑的附加物体索引（槽位） |

## 返回值

**1** - 操作成功

**0** - 操作失败

## 示例

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 0, 1337, 2);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditAttachedObject(playerid, 0);
        SendClientMessage(playerid, 0xFFFFFFFF, "服务器：你正在编辑槽位0的附加物体！");
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

编辑过程中按住空格键（车内按 W 键）并移动鼠标可调整视角

:::

:::warning

玩家可缩放物体至极大或负值尺寸，应通过 [OnPlayerEditAttachedObject](../callbacks/OnPlayerEditAttachedObject) 回调设置缩放值限制或中止非法操作

:::

## 相关函数

- [SetPlayerAttachedObject](SetPlayerAttachedObject): 为玩家附加物体
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): 移除玩家附加物体
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): 检查指定槽位是否已被占用
- [EditObject](EditObject): 编辑全局物体
- [EditPlayerObject](EditPlayerObject): 编辑玩家专属物体
- [SelectObject](SelectObject): 选择物体
- [CancelEdit](CancelEdit): 取消编辑操作

## 相关回调

- [OnPlayerEditAttachedObject](../callbacks/OnPlayerEditAttachedObject): 当玩家完成附加物体编辑时触发
