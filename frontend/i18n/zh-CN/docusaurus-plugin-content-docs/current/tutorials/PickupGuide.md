---
title: 拾取物指南
sidebar_label: 拾取物指南
---

本简短教程将讲解如何在游戏中使用拾取物系统。

## 定义拾取物 ID

创建拾取物的第一步是声明存储其 ID 的变量。我们将使用全局变量`gMyPickup`，该变量将在创建拾取物时被赋值，并在玩家拾取时通过回调函数读取。

```pawn
new gMyPickup;
```

## 创建拾取物

有两种创建方式：[CreatePickup](../scripting/functions/CreatePickup) 和 [AddStaticPickup](../scripting/functions/AddStaticPickup)。由于后者无法返回 ID、不可销毁且只能在`OnGameModeInit`中使用，本教程选用前者。

**[CreatePickup](../scripting/functions/CreatePickup) 参数说明：**

| 参数         | 说明                                 |
| ------------ | ------------------------------------ |
| model        | 拾取物显示模型 ID                    |
| type         | 生成类型（详见下文）                 |
| Float:X      | X 坐标                               |
| Float:Y      | Y 坐标                               |
| Float:Z      | Z 坐标                               |
| Virtualworld | 虚拟世界 ID（-1 表示全虚拟世界可见） |

以在格罗夫街创建金钱拾取物为例：

首先需要选择显示模型，您可通过[此外部站点](https://dev.prineside.com/en/gtasa_samp_model_id)查看完整模型列表。本教程选用编号 1274 的美元符号模型。

接下来确定[拾取类型](../scripting/resources/pickuptypes)，该参数决定拾取物行为特性。为实现"拾取后暂时消失，数分钟后重生"的效果，我们选择类型 2。

拾取物通常创建于脚本初始化阶段：

- 游戏模式脚本使用[OnGameModeInit](../scripting/callbacks/OnGameModeInit)
- 滤镜脚本使用[OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit)

但实际可放置于任意函数中（例如在[OnPlayerDeath](../scripting/callbacks/OnPlayerDeath)回调中创建武器掉落）。

最终创建代码（ID 存储至'gMyPickup'变量）：

```pawn
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### 设置拾取行为

当玩家拾取物品时，系统将调用[OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup)回调函数，传递两个参数：

- `playerid`：执行拾取操作的玩家 ID
- `pickupid`：被拾取物品的 ID

部分拾取类型（如武器类型）已内置自动处理逻辑，无需在此回调中编写额外代码。具体行为请参考[拾取物类型文档](../scripting/resources/pickuptypes)。

实现金钱奖励功能的步骤：

1. 验证拾取物 ID 是否为预设的`gMyPickup`
2. 通过条件判断后执行奖励逻辑

```pawn
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // 验证拾取物ID是否为预设的gMyPickup
    if(pickupid == gMyPickup)
    {
        // 发送提示信息
        SendClientMessage(playerid, 0xFFFFFFFF, "你获得了$100!");
        // 发放金钱奖励
        GivePlayerMoney(playerid, 100);
    }
    // 如需添加更多拾取物，可扩展如下：
    else if (pickupid == other_pickup_id)
    {
        // 处理其他拾取物逻辑
    }
    return 1;
}
```

恭喜！您已掌握创建和处理拾取物的核心方法！

## 进阶应用

- 使用[流加载插件](https://github.com/samp-incognito/samp-streamer-plugin)的[CreateDynamicPickup](<https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)>)创建无限拾取物
- 通过[CreatePlayerPickup](../scripting/functions/CreatePlayerPickup)实现玩家专属拾取物
