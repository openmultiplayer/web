---
title: OnPlayerKeyStateChange
sidebar_label: OnPlayerKeyStateChange
description: 当玩家操作任何受支持的按键状态发生改变（按下/释放）时触发此回调。
tags: ["玩家"]
---

## 描述

当玩家操作任何[受支持按键](../resources/keys)的状态发生改变（按下/释放）时触发此回调。<br/>方向键（上/下/左/右）不会触发 OnPlayerKeyStateChange。

| 参数名   | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| playerid | 操作按键的玩家 ID                                          |
| newkeys  | 当前按下的按键位掩码 - [详见此处](../resources/keys)       |
| oldkeys  | 状态改变前按下的按键位掩码 - [详见此处](../resources/keys) |

## 返回值

- 本回调不处理返回值
- 始终在游戏模式脚本中优先触发

## 注意事项

:::info

NPC 也会触发此回调

:::

:::tip

方向键（上/下/左/右）不会触发 OnPlayerKeyStateChange<br/>需通过[GetPlayerKeys](../functions/GetPlayerKeys)在[OnPlayerUpdate](OnPlayerUpdate)或定时器中检测

:::

## 相关函数

以下函数可能与本回调有关联：

- [GetPlayerKeys](../functions/GetPlayerKeys): 检测玩家当前按下的按键

## 扩展说明

### 基本原理

本回调在玩家按下或释放任何受支持按键时触发（参见[按键列表](../resources/keys)）。<br/>这些"按键"并非真实键盘映射，而是《圣安地列斯》的功能键绑定。例如无法直接检测空格键，但可以检测"冲刺"功能键（默认绑定为空格）。

### 参数解析

参数包含按键状态变化前后的位掩码。通过对比新旧掩码可以精确判断具体按键变化。由于采用位掩码机制，单个变量可能包含多个按键组合状态，直接值比较可能失效。

### 错误检测方式

假设需要检测"开火"键按下：

```c
if (newkeys == KEY_FIRE)
```

该代码在玩家同时蹲下时失效，因为 newkeys 此时包含 KEY_FIRE | KEY_CROUCH

### 正确检测方式

使用位掩码检测：

```c
if (newkeys & KEY_FIRE)
```

此方式可正确检测组合键中的目标按键

### 精确按键检测

检测按键刚被按下：

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

检测按键刚被释放：

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### 组合键检测

检测同时按住两个按键：

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

精确检测同时按下两个按键：

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

## 快捷方式定义

### 持续按住按键

定义宏：

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

单键检测：

```c
if (HOLDING( KEY_FIRE ))
```

组合键检测：

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### 首次按下按键

定义宏：

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

单键检测：

```c
if (PRESSED( KEY_FIRE ))
```

组合键检测：

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### 实时按键状态

定义宏：

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

单键检测：

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

组合键检测：

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### 释放按键检测

定义宏：

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

单键检测：

```c
if (RELEASED( KEY_FIRE ))
```

组合键检测：

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## 应用示例

### 按下开火键安装氮气

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

### 超级跳跃

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

### 使用动作键无敌

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
		// 按下动作键时保存当前生命值
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// 释放动作键时恢复生命值
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### 底层原理

HOLDING 检测持续按住状态，PRESSED 检测刚按下状态，RELEASED 检测刚释放状态。通过位掩码的二进制运算实现精确判断：

KEY_SPRINT 二进制表示：

```
0b00001000
```

KEY_JUMP 二进制表示：

```
0b00100000
```

当玩家同时按下跳跃和冲刺时：

```
newkeys = 0b00101010
wanted  = 0b00101000
```

通过位与运算和等值比较，可准确判断组合键状态，避免其他干扰按键的影响。
