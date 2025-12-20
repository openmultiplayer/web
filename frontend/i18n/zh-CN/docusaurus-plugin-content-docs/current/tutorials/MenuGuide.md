---
title: 菜单指南
sidebar_label: 菜单指南
---

本简短教程将解释如何使用游戏的菜单系统。该菜单系统与 SA-MP 对话框不同，更贴近原版游戏的传统 UI 设计。

## SA-MP 中的菜单系统

对于大多数玩家而言，菜单看似复杂且难以编写脚本，实则不然。这里我将展示如何创建一个简单菜单。最终我们将完成一个传送菜单的创建。

## 初始步骤

首先需要创建菜单变量。变量前的`Menu:`前缀用于标识正确的[标签类型](../scripting/language/Tags)。不同用途有不同类型如`Float:`、`bool:`、`Text3D:`等。在脚本顶部附近添加以下代码：

```pawn
new Menu:teleportmenu;
```

完成变量声明后，需在`OnGameModeInit`中创建菜单并赋值：

```pawn
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

以下是关于[CreateMenu](../scripting/functions/CreateMenu)参数的说明：

**参数说明：**

| 参数            | 说明                     |
| --------------- | ------------------------ |
| title           | 菜单标题                 |
| columns         | 定义列数（最大值为 2）   |
| Float:x         | 菜单水平坐标（从左到右） |
| Float:y         | 菜单垂直坐标（从上到下） |
| Float:col1width | 第一列宽度               |
| Float:col2width | 第二列宽度               |

## 添加菜单项

现在需要为菜单添加可选项。在`CreateMenu`下方添加：

```pawn
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "LV");
AddMenuItem(teleportmenu, 0, "LV");
 
AddMenuItem(teleportmenu, 1, "Grove Street");
AddMenuItem(teleportmenu, 1, "Starfish Tower");
AddMenuItem(teleportmenu, 1, "Wheel Arch Angels");
AddMenuItem(teleportmenu, 1, "Jizzys");
AddMenuItem(teleportmenu, 1, "4 Dragons");
AddMenuItem(teleportmenu, 1, "Come-a-Lot");
```

[AddMenuItem](../scripting/functions/AddMenuItem)参数说明：

| menuid | 目标菜单的 ID |
| ------ | ------------- |
| column | 显示项的列号  |
| text   | 项文本        |

## 创建选项效果

当玩家选择菜单项时，需在回调函数[OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow)中处理逻辑。虽然可以通过多个 if 语句检查`row`值，但使用 switch 语句是更简洁的写法。首先需要获取玩家当前查看的菜单：

```pawn
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

然后验证目标菜单：

```pawn
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        // 逻辑处理
    }
    return 1;
}
```

具体传送逻辑实现：

```pawn
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: // 格罗夫街
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到格罗夫街");
        }
        case 1: // 海星大厦
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到海星大厦顶层");
        }
        case 2: // 轮弧天使
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到轮弧天使改装店");
        }
        case 3: // 吉兹俱乐部
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到吉兹夜总会！");
        }
        case 4: // 四龙赌场
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到四龙赌场");
        }
        case 5: // 康乐赌场
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到康乐赌场！");
        }
    }
}
```

## 最终步骤

现在需要创建显示菜单的命令。这是最简单的步骤：在`OnPlayerCommandText`中使用`strcmp`进行命令比对并调用`ShowMenuForPlayer`。如果你已有命令处理器，可直接通过处理器调用：

```pawn
if(strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

## 补充建议与结语

理解本教程后，请尝试创建自己的菜单。如你所见，菜单系统并不复杂，但能为服务器玩家带来深刻印象。你可以用它实现酷炫的效果，例如：

- 创建便利店/超市的购物系统
- 在第二列显示商品价格
- 选择商品时自动扣除金钱

现在就开始实践吧！

进阶技巧：在调用`ShowMenuForPlayer`后使用[TogglePlayerControllable](../scripting/functions/TogglePlayerControllable)传递`false`来禁用移动，确保玩家浏览菜单时无法移动，并在`OnPlayerSelectedMenuRow`回调结束时使用[TogglePlayerControllable](../scripting/functions/TogglePlayerControllable)传递`true`来恢复操作。

希望本教程对你有所帮助。如有疑问，请访问论坛/Discord 咨询。
