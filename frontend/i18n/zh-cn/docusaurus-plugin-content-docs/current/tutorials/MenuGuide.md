---
title: Menu Guide
---

如何使用游戏菜单系统的简短教程。该菜单系统与 SA-MP 对话框不同，能更好地反映原版游戏的传统用户界面.

## SA-MP 中的菜单

对于大多数玩家来说，菜单看起来非常复杂，难以编写，其实不然。下面我将向大家展示如何创建一个简单的菜单。最后我们将创建一个传送菜单.

## 菜单的第一个步骤

首先，我们必须创建一个菜单。前面的前缀是 `Menu:`，这使得变量具备正确的[标签](../scripting/language/Tags). 不同类型的标签用于不同的用途, 比如 `Float:` `bool:` `Text3D:` 等等. 在脚本顶部附近编写以下代码:

```c
new Menu:teleportmenu;
```

好了，我们创建了变量来存储菜单。现在我们必须创建菜单，并将创建出来的菜单赋值给变量。在 `OnGameModeInit` 中键入以下内容:

```c
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

[CreateMenu](../scripting/functions/CreateMenu) 参数说明.

**参数:**

| 参数       | 具体说明                                                        |
| --------------- | ---------------------------------------------------------------- |
| 标题           | 菜单标题                                          |
| 列         | 此处的数字定义了列的使用数量（2 为最大值） |
| Float:x         | 菜单在屏幕上的宽度位置（从左到右）        |
| Float:y         | 菜单在屏幕上的高度位置（上下）           |
| Float:col1width | 第一列的宽度                                    |
| Float:col2width | 第二列的宽度                                   |

## 添加菜单里的选项

好了，现在我们已经有了菜单，但还需要一些选项供玩家在菜单中进行选择. 将它们添加到之前制作的 `CreateMenu` 下方.

```c
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

[AddMenuItem](../scripting/functions/AddMenuItem) 参数说明:

| 菜单ID | 应显示选项的菜单的 menuid |
| ------ | -------------------------------------------------------- |
| 列 | 选项应显示在哪一列              |
| 文本   | 选项文本                                     |

## 为选项创建效果

好了，现在我们已经创建了一个包含选项的完整菜单，那么当你选择一个选项时，会发生什么情况呢? 在我们的示例中，我们要制作一个传送菜单，因此我们应该被传送到我们选择的位置. 当玩家在菜单上选择一个选项时，脚本会调用回调 [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow). 最好的方法是使用`switch`，这就像用几个 `if` 语句来检查变量是否值某些值一样. 但首先，我们只想在我们想要的菜单中使用这些功能，因此我们需要创建一个变量，通过 `GetPlayerMenu` 保存玩家正在查看的菜单:

```c
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

现在，当有人选择菜单上的某项内容时，他们的 menuid 将被保存在 `CurrentMenu` 这个变量中.

现在，我们必须检查他们选择的菜单是否是我们想要的菜单:

```c
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu) // 如果菜单是 teleportmenu
    {
        //内容
    }
    return 1;
}
```

现在在这些大括号之间是 `switch` 语句，它检查玩家选择了哪个选项或 `row`。这可以通过 `if` 语句检查 `row` 来实现，但 `switch` 是一种更简单的写法.

```c
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到 Grove街");
        }
        case 1: //Starfish Tower
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到 Starfish 塔顶层");
        }
        case 2: //Wheel Arch Angels
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到 Wheel Arch Angels 改装店");
        }
        case 3: //Jizzys
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到Jizzy的夜总会!");
        }
        case 4: //4Dragons
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到四龙赌场");
        }
        case 5: //Come-a-Lot
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "欢迎来到Come-a-Lot赌场!");
        }
    }
}
```

## 最后一步

现在我们需要编写一个命令来显示菜单。这是最简单的一步. 使用 `strcmp` 和 `ShowMenuForPlayer`. 这在 `OnPlayerCommandText` 中完成. 如果你已经有一个命令处理器，使用它来调用 `ShowMenuForPlayer`.

```c
if(strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

真的很容易, 不是吗?

## 结尾

好了，阅读完此教程并理解它之后，试试创造你自己的菜单吧。正如您所看到的，这并不难，但会给您服务器上的玩家留下更深刻的印象。您还可以用它编写非常酷的功能。对于实现商店或超市的功能来说，这也是非常酷的，因为你可以通过菜单买到很多东西。然后，您可以扣除玩家金钱作为选项的效果，商品价格显示在菜单的另一列中。请自行尝试操作.

你也可以在 `ShowPlayerMenu` 之后添加 [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) 设置为 `false` 并且在 `OnPlayerSelectedMenuRow` 的结尾添加 [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) 设置为 `true`，从而实现在玩家在打开操作菜单时无法移动.

希望你能从本教程中学到一些东西。如果您有任何问题, 请在 forums/discord 提问.
