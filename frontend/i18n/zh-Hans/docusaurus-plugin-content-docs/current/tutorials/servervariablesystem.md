---
title: 服务器变量系统
sidebar_label: 服务器变量系统

description: 服务器变量系统（简称SVar）是一种高效动态创建全局服务器变量的新方法，支持在游戏模式(GameMode)与滤镜脚本(FilterScript)中同时使用。
---

**服务器变量系统**（简称**SVar**）通过动态分配内存的方式创建全局服务器变量，支持在游戏模式与滤镜脚本中跨脚本共享数据。

该机制类似于[玩家变量系统（PVars）](perplayervariablesystem)，但变量不与玩家 ID 绑定。

:::warning

此系统在 SA-MP 0.3.7 R2-1 版本引入，旧版本无法使用！

:::

:::note

SVar 系统与 PVars 实现原理相同，但变量作用域为全服范围，不关联任何玩家 ID，且在游戏模式切换后仍会保留。

:::

## 优势

- SVar 可在游戏模式脚本与滤镜脚本间共享/访问
- 支持枚举及打印/存储变量列表，便于调试排错
- 未创建的 SVar 会默认返回 0 值，避免空指针错误
- 使用动态内存分配，支持存储超长字符串
- 支持运行时动态创建、修改、读取变量

## 局限

- 相比常规变量，SVar 的读写速度存在数量级差距（建议优先考虑内存换速度的场景）

## 相关函数

- [SetSVarInt](../scripting/functions/SetSVarInt): 为服务器变量设置整数值
- [GetSVarInt](../scripting/functions/GetSVarInt): 以整数形式读取服务器变量
- [SetSVarString](../scripting/functions/SetSVarString): 为服务器变量设置字符串值
- [GetSVarString](../scripting/functions/GetSVarString): 读取服务器变量的字符串值
- [SetSVarFloat](../scripting/functions/SetSVarFloat): 为服务器变量设置浮点数值
- [GetSVarFloat](../scripting/functions/GetSVarFloat): 读取服务器变量的浮点数值
- [DeleteSVar](../scripting/functions/DeleteSVar): 删除指定的服务器变量
