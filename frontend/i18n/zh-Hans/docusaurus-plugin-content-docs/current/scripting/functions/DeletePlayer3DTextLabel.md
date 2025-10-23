---
title: DeletePlayer3DTextLabel
sidebar_label: DeletePlayer3DTextLabel
description: 销毁通过CreatePlayer3DTextLabel创建的3D文本标签。
tags: ["玩家", "3D文本标签"]
---

## 描述

销毁通过 CreatePlayer3DTextLabel 创建的 3D 文本标签。

| 参数名              | 说明                            |
| ------------------- | ------------------------------- |
| playerid            | 要删除其 3D 文本标签的玩家 ID。 |
| PlayerText3D:textid | 要删除的玩家 3D 文本标签 ID。   |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败。这意味着指定的标签不存在。

## 示例

```c
new PlayerText3D:playerTextId[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    new
        name[MAX_PLAYER_NAME],
        Float:x, Float:y, Float:z,
        string[64];

    GetPlayerName(playerid, name, sizeof(name));
    GetPlayerPos(playerid, x, y, z);

    format(string, sizeof(string), "Hello %s!\nI'm at your position", name);
    playerTextId[playerid] = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DeletePlayer3DTextLabel(playerid, playerTextId[playerid]);
    return 1;
}
```

## 相关函数

- [创建 3D 文本标签](Create3DTextLabel): 创建 3D 文本标签
- [将 3D 文本标签附加到玩家](Attach3DTextLabelToPlayer): 将 3D 文本标签附加到玩家身上
- [将 3D 文本标签附加到车辆](Attach3DTextLabelToVehicle): 将 3D 文本标签附加到车辆上
- [更新 3D 文本标签内容](Update3DTextLabelText): 修改 3D 文本标签的文本内容
- [为玩家创建 3D 文本标签](CreatePlayer3DTextLabel): 为单个玩家创建 3D 文本标签
- [更新玩家 3D 文本标签内容](UpdatePlayer3DTextLabelText): 修改玩家的 3D 文本标签内容
- [验证玩家 3D 文本标签有效性](IsValidPlayer3DTextLabel): 检查玩家的 3D 文本标签是否有效
