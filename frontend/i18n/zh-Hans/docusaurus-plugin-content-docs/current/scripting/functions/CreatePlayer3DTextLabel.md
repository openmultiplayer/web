---
title: CreatePlayer3DTextLabel
sidebar_label: CreatePlayer3DTextLabel
description: 为指定玩家创建专属的3D文本标签。
tags: ["玩家", "3D文本标签"]
---

## 描述

创建仅对特定玩家可见的 3D 文本标签，支持实体绑定和视线检测功能。

| 参数               | 说明                                                  |
| ------------------ | ----------------------------------------------------- |
| playerid           | 可见该标签的目标玩家 ID                               |
| const text[]       | 显示文本内容（支持格式符）                            |
| colour             | 颜色值（使用整数或 RGBA 十六进制格式）                |
| Float:x            | X 轴坐标（若绑定实体则为偏移量）                      |
| Float:y            | Y 轴坐标（若绑定实体则为偏移量）                      |
| Float:z            | Z 轴坐标（若绑定实体则为偏移量）                      |
| Float:drawDistance | 可视距离（单位：游戏单位）                            |
| attachedplayer     | 绑定玩家实体 ID（不绑定填 INVALID_PLAYER_ID）         |
| attachedvehicle    | 绑定车辆实体 ID（不绑定填 INVALID_VEHICLE_ID）        |
| bool:testLOS       | 视线检测开关（true=穿透物体不可见，false=可穿透显示） |
| OPEN_MP_TAGS:...   | 扩展参数（支持任意类型参数）                          |

## 返回值

成功返回私有 3D 文本标签 ID，达到玩家标签上限（MAX_3DTEXT_PLAYER）时返回 INVALID_3DTEXT_ID。

## 应用示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/playerlabel", true))
    {
        new
            PlayerText3D:playerTextId,
            name[MAX_PLAYER_NAME],
            Float:x, Float:y, Float:z,
            string[64];

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, x, y, z);

        // 创建带玩家名的动态标签
        format(string, sizeof(string), "你好 %s!\n我在你的当前位置", name);
        playerTextId = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

观察模式下有效显示距离会显著缩短

:::

:::warning

空文本可能导致客户端崩溃（open.mp 版本已修复此问题）

:::

## 关联函数

- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除私有标签
- [IsValidPlayer3DTextLabel](IsValidPlayer3DTextLabel): 验证有效性
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 更新标签文本
- [GetPlayer3DTextLabelText](GetPlayer3DTextLabelText): 获取当前文本
- [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour): 获取颜色值
- [GetPlayer3DTextLabelPos](GetPlayer3DTextLabelPos): 获取坐标位置
- [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance): 获取可视距离
- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): 设置可视距离
- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): 获取虚拟世界
- [SetPlayer3DTextLabelVirtualWorld](SetPlayer3DTextLabelVirtualWorld): 设置虚拟世界
- [GetPlayer3DTextLabelLOS](GetPlayer3DTextLabelLOS): 获取视线检测状态
- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): 设置视线检测状态
- [Create3DTextLabel](Create3DTextLabel): 创建全局可见标签
