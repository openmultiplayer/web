---
title: Create3DTextLabel
sidebar_label: Create3DTextLabel
description: 在游戏世界中指定坐标位置创建3D文本标签。
tags: ["3D文本标签"]
---

## 描述

在三维空间中创建带有文字内容的可视化标签。

| 参数               | 说明                                                      |
| ------------------ | --------------------------------------------------------- |
| const text[]       | 初始显示的文本字符串                                      |
| colour             | 颜色值（使用整数或 RGBA 十六进制格式）                    |
| Float:x            | X 轴坐标                                                  |
| Float:y            | Y 轴坐标                                                  |
| Float:z            | Z 轴坐标                                                  |
| Float:drawDistance | 可视距离（单位：游戏单位）                                |
| virtualWorld       | 所属虚拟世界 ID                                           |
| bool:testLOS       | 是否启用视线检测（true=穿透物体不可见，false=可穿透显示） |
| OPEN_MP_TAGS:...   | 扩展参数（支持任意类型参数）                              |

## 返回值

成功返回新建 3D 文本标签的 ID，当达到全局 3D 文本标签数量上限（MAX_3DTEXT_GLOBAL）时返回 INVALID_3DTEXT_ID。

## 应用示例

```c
public OnGameModeInit()
{
    // 在坐标(30.0,40.0,50.0)处创建蓝绿色提示标签
    Create3DTextLabel("当前位置坐标:\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mark", true))
    {
        new name[MAX_PLAYER_NAME];
        new Float:x, Float:y, Float:z;
        new worldid;

        GetPlayerName(playerid, name, sizeof(name));
        GetPlayerPos(playerid, x, y, z);
        worldid = GetPlayerVirtualWorld(playerid);

        // 在玩家当前位置创建红色标记标签
        Create3DTextLabel("%s 标记了这个位置", 0xFF0000FF, x, y, z, 15.0, worldid, false, name);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

- 在观察模式下有效显示距离会明显缩小
- 使用~r~~g~等颜色代码实现多色文本效果

:::

:::warning

- 空文本内容可能导致客户端崩溃（open.mp 版本已修复此问题）
- virtualworld 参数设置为-1 时标签不可见

:::

## 关联函数

- [Delete3DTextLabel](Delete3DTextLabel): 删除 3D 文本标签
- [IsValid3DTextLabel](IsValid3DTextLabel): 验证标签有效性
- [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): 检测标签是否流加载
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): 绑定标签到玩家实体
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): 绑定标签到车辆实体
- [Update3DTextLabelText](Update3DTextLabelText): 更新标签文本内容
- [Get3DTextLabelText](Get3DTextLabelText): 获取标签文本内容
- [Get3DTextLabelColour](Get3DTextLabelColour): 获取标签颜色值
- [Get3DTextLabelPos](Get3DTextLabelPos): 获取标签空间坐标
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): 获取可视距离参数
- [Set3DTextLabelDrawDistance](Set3DTextLabelDrawDistance): 设置可视距离参数
- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): 获取所属虚拟世界
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): 设置所属虚拟世界
- [Get3DTextLabelLOS](Get3DTextLabelLOS): 获取视线检测状态
- [Set3DTextLabelLOS](Set3DTextLabelLOS): 设置视线检测状态
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): 创建玩家私有标签
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): 删除玩家私有标签
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): 更新私有标签文本
