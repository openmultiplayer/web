---
title: 颜色列表
sidebar_label: 颜色列表
description: 颜色在SA-MP中无处不在——车辆、玩家昵称与地图标记、文本绘图、游戏文本、聊天信息、3D文本和对话框（通过颜色嵌入）！以下是关于这些不同元素的详细信息。
---

## 聊天文本与玩家颜色

SA-MP 中的颜色通常采用十六进制表示（也可使用整数值）。聊天文本或玩家颜色的格式为：0xRRGGBBAA。

_RR_ 表示红色分量，_GG_ 表示绿色分量，_BB_ 表示蓝色分量。_AA_ 为透明度值（Alpha 通道）。若使用 FF 则完全不透明，00 则为完全透明。

这些颜色的十六进制代码可参考[十六进制颜色表](hexcolors)页面。

---

### 透明度值

以下图片展示了使用白色方块作为玩家标记背景时不同透明度值的视觉效果。演示采用 0x11（十进制 17）的增量变化，实际可使用任意值。

![透明度矩阵图示](https://assets.open.mp/assets/images/colorList/transparency/trans_matrix.png)

---

### 颜色运算

由于颜色本质是数值，可进行数学运算（尽管并非所有运算都有实际意义）。例如动态调整玩家地图标记的可见度：

```c
SetPlayerMarkerVisibility(playerid, alpha = 0xFF)
{
    new oldcolor, newcolor;

    alpha = clamp(alpha, 0x00, 0xFF); // 若提供的值超出范围，在此修正
    oldcolor = GetPlayerColor(playerid); // 获取当前颜色（需已调用SetPlayerColor）

    newcolor = (oldcolor & ~0xFF) | alpha; // 剥离原透明度数据后应用新值
    return SetPlayerColor(playerid, newcolor); // 成功返回1，失败返回0
}
```

---

### Pawn 中的字符串转颜色值

使用以下函数将"RRGGBBAA"格式字符串转换为颜色数值：

```c
stock HexToInt(string[])
{
    if (!string[0])
    {
        return 0;
    }

    new
        cur = 1,
        res = 0;

    for (new i = strlen(string); i > 0; i--)
    {
        res += cur * (string[i - 1] - ((string[i - 1] < 58) ? (48) : (55)));
        cur = cur * 16;
    }
    return res;
}
```

调用 HexToInt("RRGGBBAA")可获得适用于[SetPlayerColor](../functions/SetPlayerColor)的数值。

---

### 颜色嵌入

可在以下场景使用内嵌颜色代码：

- [SendClientMessage](../functions/SendClientMessage)
- [ShowPlayerDialog](../functions/ShowPlayerDialog)
- [Create3DTextLabel](../functions/Create3DTextLabel)
- [SetObjectMaterialText](../functions/SetObjectMaterialText)
- [SetVehicleNumberPlate](../functions/SetVehicleNumberPlate)

该功能与[游戏文本颜色](../resources/gametextstyles)的用法相似，但支持自定义任意颜色值。

:::caution

此方式不适用于文本绘图，详见[游戏文本样式](../resources/gametextstyles)。

:::

---

#### 示例

```c
{FFFFFF}白色文本 {00FF00}绿色文本 {FF0000}红色文本
```

效果：  
![颜色嵌入示例1](https://assets.open.mp/assets/images/colorList/Example1.png)

---

#### 进阶示例

![复杂颜色嵌入](https://assets.open.mp/assets/images/colorList/Cembed.png)  
实现代码：

```c
SendClientMessage(playerid, COLOR_WHITE, "欢迎来到 {00FF00}M{FFFFFF}a{FF0000}r{FFFFFF}c{00FF00}o{FFFFFF}'{FF0000}s {FFFFFF}B{00FF00}i{FFFFFF}s{FF0000}t{FFFFFF}r{00FF00}o{FFFFFF}！");
```

颜色宏定义建议：

```c
#define COLOR_RED_EMBED "{FF0000}"

SendClientMessage(playerid, -1, "这是白色文本"COLOR_RED_EMBED"这是红色文本。");
```

或者

```c
#define COLOR_RED_EMBED "FF0000"

SendClientMessage(playerid, -1, "白色文本{"COLOR_RED_EMBED"}红色文本");
```

第二个示例方案更优，因其能更清晰地体现颜色嵌入的用法。

---

#### 结合玩家颜色

要使用玩家的颜色作为嵌入颜色，你必须首先移除 alpha 值。为此，执行逻辑右移。

```c
new msg[128];
format(msg, sizeof(msg), "{ffffff}白色文本 {%06x}玩家颜色文本", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, 0xffffffff, msg);
```

在格式化字符串中：

- `%x` 是十六进制值的占位符
- `6` 确保输出始终为 6 位字符长度
- `0` 表示不足 6 位时用前导零填充

重要提示：  
[GetPlayerColor](../functions/GetPlayerColor) 需在预先调用[SetPlayerColor](../functions/SetPlayerColor) 的情况下才能正确获取颜色值。

颜色嵌入使用的格式与常规 Pawn 十六进制颜色不同：

- 不需要 `0x` 前缀
- 不包含透明度通道（最后两位数字）

---

### 颜色选择工具

- [SA-MP 调色板](http://www.gtavision.com/index.php?section=downloads&site=download&id=1974)
- [December 色表](http://www.december.com/html/spec/color.html)
- [RGB 拾取器](http://psyclops.com/tools/rgb)
- [Adobe 配色](https://kuler.adobe.com/create/color-wheel/)
- [配色设计器](http://colorschemedesigner.com/)

---

## 游戏文本颜色

使用特殊标签设置游戏文本颜色：

```c
~r~    红
~g~    绿
~b~    蓝
~w~    白
~y~    黄
~p~    紫
~l~    黑
~h~    亮色
```

通过叠加颜色标签可轻松创建渐变效果（注意以下颜色与基础标签颜色存在差异）：

```c
~y~                纯黄
~r~~h~             浅红
~r~~h~~h~          粉红色
~r~~h~~h~~h~       深粉
~r~~h~~h~~h~~h~    浅粉红
~r~~h~~h~~h~~h~~h~ 亮粉
~g~~h~             浅绿
~g~~h~~h~          淡草绿
~g~~h~~h~~h~       海绿色
~g~~h~~h~~h~~h~    米白色
~b~~h~             天蓝
~b~~h~~h~          蓝紫色
~b~~h~~h~~h~       淡蓝
~y~~h~~h~          乳白色
~p~~h~             玫粉色
```

---

### 示例

```c
~w~白色 ~b~蓝色 ~r~红色
```

效果：  
![基础颜色示例](https://assets.open.mp/assets/images/colorList/Blueandred.png)

添加`~h~`提亮颜色：

```c
~w~白色 ~b~~h~亮蓝 ~r~~h~亮红
```

效果：  
![高亮颜色示例](https://assets.open.mp/assets/images/colorList/Blueandred2.png)
