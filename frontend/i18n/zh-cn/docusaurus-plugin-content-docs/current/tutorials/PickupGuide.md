---
title: Pickup Guide
sidebar_label: Pickup Guide
---

一个简短的教程，描述了如何使用拾取物。

## 定义pickupid

创建拾取物的第一步是创建一个存储其ID的地方。这将在全局变量中完成，以便在创建拾取物时可以记录其ID，并在拾取物时调用一个回调函数并读取拾取物的ID。在本示例中，我们将使用名称“gMyPickup” 创建一个记录拾取物ID的全局变量。

```c
new gMyPickup;
```

## 创建拾取物

创建拾取物有两种方法. [CreatePickup](../scripting/functions/CreatePickup) 和 [AddStaticPickup](../scripting/functions/AddStaticPickup). AddStaticPickup 在创建时不返回ID，不能被销毁，并且只能在 OnGameModeInit 下使用，因此在本示例中我们将使用 [CreatePickup](../scripting/functions/CreatePickup).

**[CreatePickup](../scripting/functions/CreatePickup) 的语法是:**

**参数:**

| model        | 拾取物的模型.                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| type         | 拾取物的生成类型，请参见本页面下方.                                                        |
| Float:X      | 拾取物显示的X轴坐标.                                                                  |
| Float:Y      | 拾取物显示的Y轴坐标.                                                                  |
| Float:Z      | 拾取物显示的Z轴坐标.                                                                  |
| Virtualworld | 拾取物的虚拟世界ID，值为-1将使拾取物显示在所有虚拟世界中. |

在本示例中，我们将在格罗夫街创建一个现金拾取物.

现在我们需要选择一个模型在世界中出现，有很多模型可供选择，其中一些列在 [此处](https://dev.prineside.com/en/gtasa_samp_model_id), 这里选择模型编号1274(即美元符号).

最后，我们需要为拾取物选择一个[类型](../scripting/resources/pickuptypes)，在同一页面上列出了各种类型的拾取物。我们希望此拾取物在你拾取后消失，因此你不能重复拾取它，但几分钟后它会重新出现，以便你可以再次拾取它，类型2正好符合这个需求

拾取物通常在脚本启动时创建, 在 [OnGameModeInit](../scripting/callbacks/OnGameModeInit) 或者 [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) 中创建, 具体取决于脚本类型，但它可以放在任何函数中（例如，你可以创建一个武器掉落脚本，该脚本将在OnPlayerDeath中使用CreatePickup来创建武器拾取物）.

所以，这里是创建我们的拾取物并将ID存储在'gMyPickup'中的代码:

```c
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### 选择它的功能

当你拾取一个拾取物时, [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup) 会被调用, 传递 playerid（拾取了拾取物的玩家）和 pickupid（被拾取的拾取物的ID）.

某些拾取物类型设计为自动工作，因此在 OnPlayerPickUpPickup 下不需要做任何事情。查看 [拾取物类型](../scripting/resources/pickuptypes) 页面以获取更多信息.

当玩家拾取我们的新拾取物时，我们希望给他们$100，为此首先需要检查他们拾取的是我们的美元拾取物，而不是其他拾取物。当我们完成此操作后，我们可以给他们$100:

```c
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // 检查他们拾取的拾取物ID是否为 gMyPickup
    if(pickupid == gMyPickup)
    {
        // 给玩家发送消息
        SendClientMessage(playerid, 0xFFFFFFFF, "你获得了$100!");
        // 给玩家金钱
        GivePlayerMoney(playerid, 100);
    }
    // 如果你需要添加更多拾取物，只需这样做：
    else if (pickupid == (其他拾取物))
    {
        // 另一个拾取物，执行其他操作
    }
    return 1;
}
```

恭喜你，现在你知道如何创建和处理拾取物了!

## 延伸阅读

你可以使用 [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) 插件的 [CreateDynamicPickup](<https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)>) 函数来创建无限数量的拾取物.

你还可以使用 [CreatePlayerPickup](../scripting/functions/CreatePlayerPickup) 创建每个玩家的拾取物.
