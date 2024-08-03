---
title: OnPlayerKeyStateChange
description: 当任何受支持的按键的状态发生变化(按下/松开)时，将调用此回调。
tags: ["player"]
---

## 描述

当任何受支持的[按键](../resources/keys)的状态发生变化(按下/松开)时，将调用此回调。

方向键不触发 OnPlayerKeyStateChange(上/下/左/右)。

| 参数名   | 描述                                                     |
| -------- | -------------------------------------------------------- |
| playerid | 按下或松开键的玩家的 ID。                                |
| newkeys  | 当前支持的键映射(位掩码) - [参考这里](../resources/keys) |
| oldkeys  | 当前支持的键映射(位掩码) - [参考这里](../resources/keys) |

## 返回值

- 此回调不处理返回。
- 它在游戏模式中总是先被调用。

## 要点

<TipNPCCallbacksCN />

:::tip

方向键不会触发 OnPlayerKeyStateChange(上/下/左/右)。

它们只能通过 [GetPlayerKeys 函数](../functions/GetPlayerKeys) (在 [OnPlayerUpdate 回调](../callbacks/OnPlayerUpdate) 或计时器中被捕获)。

:::

## 相关函数

- [GetPlayerKeys](../functions/GetPlayerKeys): 检查玩家正在按的是什么键。

## 附加信息

### 介绍

每当玩家按下或松开受支持的某个键 (见[按键](../resources/keys))，

支持的键不是实际的键盘按键，而是圣安地列斯映射的功能键。

这意味着，您无法检测到玩家何时按下了什么键，例如**空格键**，但可以检测到他们何时按下了冲刺键(Sprint) (玩家可以分配该映射给空格键，也可以分配给其他按键(默认情况下冲刺键是 Sprint 键)。

### 参数

此函数的参数是当前按下的所有键和刚才按下的所有键的列表。

当键状态更改时(即，当按下或松开键时)调用回调，并传递此更改前后的状态或所有键。

这些信息可以用来查看到底发生了什么，但变量不能像其他函数的参数一样直接使用。

为了减少变量的数量，只使用一个位来表示一个键，**这意味着一个变量可能同时包含多个键，简单地比较值并不总是有效的**。

### 如何不去检测某个键

假设你想检测玩家何时按下开火按钮，显而易见的代码应该是:

```c
if (newkeys == KEY_FIRE)
```

这段代码甚至可能在你的测试中工作，但是它是错误的，你的测试是不充分的。尝试蹲下并按下开火键，您的代码将立即停止工作。

为什么？因为 "newkeys" 不再等同于“KEY_FIRE”，而是等同于“KEY_FIRE”结合“KEY_CROUCH”。

### 如何检测某个键

那么，如果变量可以同时包含多个键，那么如何检查是否只有一个键呢？

答案是位屏蔽。

每个键在变量中都有自己的位(有些键有相同的位，但它们在步行/车内对应不同功能，因此无论如何都不能同时按下)，您只需检查这一点:

```c
if (newkeys & KEY_FIRE)
```

请注意，单个&是正确的，这是按位与运算，而不是两个&的逻辑与运算。

现在，如果你测试这个代码，当你按下开火键时，无论你是蹲着还是站着，它都会起作用。

然而，还有一个小问题——只要你按住开火键，它就会一直开火。

每次键更改时都会调用 OnPlayerKeyStateChange，只要按住开火键，这个代码是正确的。

如果你按下开火键，代码将被触发，如果按住那个键并按下蹲下，代码将再次触发。

因为一个键(下蹲)已经改变，并且仍然被按下，你如何检测到一个键第一次被按下，但当它仍然被按住而另一个键改变时不会再次触发？

### 如何检测已按下的键

这就是“oldkeys”的用武之地。

要检查某个键是否刚刚被按下，你需要首先检查它是否设置在“newkeys”中--意思是它被按住了，然后检查它是否不在“oldkeys”中--意思是它只是被按住了。

下面的代码执行此操作:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

只有当第一次按下开火键时才会发生这种情况，而不是在按住它并改变另一个键的时候。

### 如何检查正在松开的键

与上面的原则完全相同，但情况相反:

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### 如何检查多个键

如果您想要检查保持蹲伏射击的玩家，则以下代码可以很好地工作:

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

但是，如果您想要检测他们第一次按下火和蹲下的时间，下面的代码将不起作用。

如果他们设法同时按下这两个键，它就会起作用，但如果他们零星地(远远不到半秒)按下这两个键，就不会:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

为什么不行？因为每次更改单个按键时都会调用 OnPlayerKeyStateChange。

所以他们按“KEY_FIRE”-OnPlayerKeyStateChange 是用“newkeys”中的“KEY_FIRE”调用的，而不是在“oldkeys”中调用的。

然后他们按下“KEY_CROUCH”-OnPlayerKeyStateChange 是用“KEY_CROUCH”调用的，在“newkeys”中调用的是“KEY_FIRE”，但“KEY_FIRE”，现在也在“oldkeys”中，因为它已经被按下了。

所以“!(oldkeys & KEY_FIRE)”将失败。

幸运的是，解决方案非常简单(实际上比原始代码更简单):

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

这看起来可能很复杂，但它会检查两个键是否都设置在“newkey”中，以及两个键是否都没有设置在“oldkey”中，如果其中一个设置在“oldkey”中，这并不重要，因为它们都不是。

**有了 #define 定义，所有这些事情都可以大大简化。**

## 简化

### 检测是否按住某键

定义:

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

按住一个键:

```c
if (HOLDING( KEY_FIRE ))
```

按住多个键:

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### 检测第一次按下一个键

定义:

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

按下一个键:

```c
if (PRESSED( KEY_FIRE ))
```

按下多个键:

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### 检测玩家当前是否按下某个键

定义:

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

当前按下一个键:

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

当前按下多个键:

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### 检测松开键

定义:

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

松开一个键:

```c
if (RELEASED( KEY_FIRE ))
```

松开多个键:

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## 案例

### 当玩家按下开火键时附加氮气

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_FIRE))
	{
		if (IsPlayerInAnyVehicle(playerid))
		{
			AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);
		}
	}
	return 1;
}
```

### 超级跳

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_JUMP))
	{
		new
			Float:x,
			Float:y,
			Float:z;
		GetPlayerPos(playerid, x, y, z);
		SetPlayerPos(playerid, x, y, z + 10.0);
	}
	return 1;
}
```

### 按住不放时进入上帝模式

```c
new
	Float:gPlayerHealth[MAX_PLAYERS];

#if !defined INFINITY
	#define INFINITY (Float:0x7F800000)
#endif

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_ACTION))
	{
		// 按下行动键，保存原有的生命值。
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		// 赋予无限生命值
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// 松开了行动键，恢复之前的生命值
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### 解释

其实你不需要关心它具体是怎么实现的，尽管用就是了。

按住:检测他们是否正在按下一个键(或多个键)，无论他们以前是否按过键。

按下:检测他们是否只按下(S)键，然后松开检测他们是否刚刚松开(S)键。

不过，如果你想知道的更多的话，请继续往下阅读吧。

之所以需要这样做，而不仅仅是使用&或==，是为了准确检测您想要的键，同时忽略其他可能被按下或可能不被按下的键。

在二进制中， KEY_SPRINT 是:

```
0b00001000
```

而 KEY_JUMP 是:

```
0b00100000
```

从而将它们与所需的键进行**或**运算(我们也可以在这个例子中添加它们，但情况并不总是这样)

得到:

```
0b00101000
```

如果我们只使用&，OnPlayerKeyStateChange 在玩家按下跳跃时被调用，我们将得到以下代码:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

两个数的与运算不为 0，因此检测的结果为真，这不是我们想要的。

如果我们只使用 == 运算符，那么这两个数字显然不相同，因此检测将失败，但这是我们想要的。

如果玩家按下 JUMP、SPRINT 和 CLOUCH，我们将得到以下代码：

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

这两个数与运算的结果和所需的按键相同，也不是 0，因此将给出正确的答案，但是两个原始数字不同，因此==将失败。

在这两个例子中，其中一个给出了正确的答案，另一个给出了错误的答案。

如果我们使用&和==比较第一个，我们得到：

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

显然 想要的 和 与运算的结果 不同，所以检查失败，这是正确的。

对于第二个示例：

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

想要的 和 与运算的结果是相同的，因此将它们比较将得到一个相等的结果，这也是正确的。

因此，使用这种方法，我们可以准确地检查某些键是否被按下，忽略所有其他可能没有按下的键。

oldkeys 检查只使用!=，而不是==来确保之前没有按下所需的键，因此我们知道刚刚按了其中一个键。
