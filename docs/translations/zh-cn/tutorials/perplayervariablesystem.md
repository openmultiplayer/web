---
title: Per-player variable system
description: The per-player variable system (put short, PVar) is a new way of creating player variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time.
---

每玩家变量系统（简称为PVar）是一种新方式，可以通过动态创建的全局方法高效地创建玩家变量，这意味着它们可以在服务器的游戏模式和过滤脚本中同时使用。

它们类似于[SVars](servervariablesystem)，但基于每个玩家。请参阅本线程的最后两篇帖子以了解Pawn属性和PVars之间的区别。

## 优点

SA-MP 0.3a R5服务器更新中引入的新系统相比于创建大小为 `MAX_PLAYERS` 的数组具有几个主要优点：

- PVars 可以跨游戏模式脚本和过滤脚本共享/访问，使代码模块化更容易。

- 当玩家离开服务器时（在 `OnPlayerDisconnect` 之后），PVars 会自动删除，因此不必手动重置下一个加入的玩家的变量。

- 不需要复杂的 `enum`/玩家信息结构。

- 通过不为可能永远不会使用的 `playerid` 分配Pawn数组元素来节省内存。

- 可以轻松枚举并打印/存储PVar列表。这使得调试和玩家信息存储更加容易。

- 即使PVar尚未创建，它仍会返回默认值 `0`。

- PVars 可以使用动态分配的内存保存非常大的字符串。

- 您可以在游戏中设置、获取、创建PVars。

## 缺点

- PVars 比普通变量慢几倍。一般来说，此功能在用内存换速度方面比用速度换内存更有利。

## 函数

用于设置和检索玩家变量的函数包括：

- [SetPVarInt](../scripting/functions/SetPVarInt): 为玩家变量设置一个整数.
- [GetPVarInt](../scripting/functions/GetPVarInt): 获取玩家变量的整数值.
- [SetPVarString](../scripting/functions/SetPVarString): 为玩家变量设置字符串.
- [GetPVarString](../scripting/functions/GetPVarString): 获取玩家变量的字符串.
- [SetPVarFloat](../scripting/functions/SetPVarFloat): 为玩家变量设置一个浮点数.
- [GetPVarFloat](../scripting/functions/GetPVarFloat): 获取玩家变量的浮点数.
- [DeletePVar](../scripting/functions/DeletePVar): 删除一个玩家变量.

```c
#define PLAYER_VARTYPE_NONE   (0)
#define PLAYER_VARTYPE_INT    (1)
#define PLAYER_VARTYPE_STRING (2)
#define PLAYER_VARTYPE_FLOAT  (3)
```
