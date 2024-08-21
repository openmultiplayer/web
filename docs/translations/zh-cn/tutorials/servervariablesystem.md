---
title: 服务器变量系统

description: 服务器变量系统（简称 SVar）是一种以高效动态方式创建服务器变量的新方法, 这意味着它们可以在服务器的游戏模式和脚本中同时使用.
---

**服务器变量系统** (简称 **SVar**) 是一种高效、动态地创建全局服务器变量的新方法, 这意味着它们可以在服务器的游戏模式和过滤脚本中同时使用.

它们与 [PVars](每个玩家的变量系统) 类似, 但不与玩家 ID 绑定.

:::警告

该系统在 SA-MP 0.3.7 R2-1 中引入，在早期版本中无法运行!

:::

:::提示

SVar 系统与 PVars 系统相同，但所创建的变量是服务器范围的变量，不与任何玩家 ID 关联，并且在游戏模式改变时也会持续存在.

:::

## 优点

- SVars 可跨游戏模式脚本和过滤脚本共享/访问.

- 您可以轻松枚举并打印/存储 SVar 列表。这使调试变得更容易.

- 即使 SVar 尚未创建，也会返回默认值 0.

- SVars 可以使用动态分配的内存来保存非常大的字符串.

- 您可以在游戏中设置、获取和创建 SVars.

## 缺点

- SVars 比普通变量慢几倍. 一般来说，用内存换速度比用速度换内存更有利.

## 相关函数

- [SetSVarInt](../scripting/functions/SetSVarInt): 为服务器变量设置一个整数.
- [GetSVarInt](../scripting/functions/GetSVarInt): 获取服务器变量的整数值.
- [SetSVarString](../scripting/functions/SetSVarString): 为服务器变量设置字符串.
- [GetSVarString](../scripting/functions/GetSVarString): 获取服务器变量的字符串.
- [SetSVarFloat](../scripting/functions/SetSVarFloat): 为服务器变量设置一个浮点数.
- [GetSVarFloat](../scripting/functions/GetSVarFloat): 获取服务器变量的浮点数.
- [DeleteSVar](../scripting/functions/DeleteSVar): 删除一个服务器变量.
