---
title: NPC_IsValidPath
sidebar_label: NPC_IsValidPath
description: 检查路径 ID 是否有效且存在。
tags: ["npc", "路径", "验证"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

检查路径 ID 是否有效且存在。

| 参数   | 说明      |
| ------ | --------- |
| pathid | 路径的 ID |

## 返回值

如果路径有效则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalidpath ", true, 16))
    {
        new pathid = strval(cmdtext[16]);

        new bool:isValidPath = NPC_IsValidPath(pathid);

        SendClientMessage(playerid, 0x00FF00FF, "路径 %d 是否有效: %s", pathid, isValidPath ? "是" : "否");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 在与 NPC 一起使用路径前始终检查其是否有效
- 无效路径可能已被销毁或从未正确创建
- 在添加点或为 NPC 分配路径前使用此函数
- 路径被销毁时会重用 ID

## 相关函数

- [NPC_CreatePath](NPC_CreatePath): 创建新路径
- [NPC_DestroyPath](NPC_DestroyPath): 销毁路径
- [NPC_GetPathCount](NPC_GetPathCount): 获取路径总数
- [NPC_AddPointToPath](NPC_AddPointToPath): 向路径添加点

## 相关回调

_此函数不会触发任何特定的回调。_
