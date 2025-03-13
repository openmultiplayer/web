---
title: 玩家专属变量系统
description: 玩家专属变量系统（简称PVar）是一种通过全局动态创建机制高效管理玩家变量的新方法，支持在服务器游戏模式与滤镜脚本中同时使用。
---

玩家专属变量系统（简称 PVar）通过全局动态创建机制高效管理玩家变量，支持在服务器游戏模式与滤镜脚本中同时调用。

本系统类似于[服务器变量系统](servervariablesystem)，但针对单个玩家运作。关于 Pawn 属性与 PVar 的区别，请参阅相关技术文档。

## 核心优势

SA-MP 0.3a R5 版本引入的 PVar 系统相比传统 MAX_PLAYERS 数组方案具有以下优势：

- **跨脚本共享**：PVar 可在游戏模式脚本和滤镜脚本间共享/访问，提升代码模块化程度
- **自动内存管理**：玩家离开服务器后自动清除变量（在 OnPlayerDisconnect 之后触发），无需手动重置
- **简化数据结构**：无需复杂枚举/玩家信息结构体
- **内存优化**：动态分配内存，避免为未连接玩家预留空间
- **便捷调试**：支持变量枚举与导出，便于调试和数据存储
- **安全访问**：未定义变量默认返回 0 值，避免空指针错误
- **大文本支持**：使用动态内存分配处理超长字符串
- **运行时操作**：支持游戏内实时创建/修改变量

## 性能局限

- **速度折衷**：相比常规变量速度慢数倍，需在内存与性能间权衡

## 核心函数

| 函数名称                                              | 功能描述               |
| ----------------------------------------------------- | ---------------------- |
| [SetPVarInt](../scripting/functions/SetPVarInt)       | 设置玩家变量的整数值   |
| [GetPVarInt](../scripting/functions/GetPVarInt)       | 获取玩家变量的整数值   |
| [SetPVarString](../scripting/functions/SetPVarString) | 设置玩家变量的字符串值 |
| [GetPVarString](../scripting/functions/GetPVarString) | 获取玩家变量的字符串值 |
| [SetPVarFloat](../scripting/functions/SetPVarFloat)   | 设置玩家变量的浮点数值 |
| [GetPVarFloat](../scripting/functions/GetPVarFloat)   | 获取玩家变量的浮点数值 |
| [DeletePVar](../scripting/functions/DeletePVar)       | 删除指定玩家变量       |

```c
#define PLAYER_VARTYPE_NONE   (0)  // 未定义类型
#define PLAYER_VARTYPE_INT    (1)  // 整数类型
#define PLAYER_VARTYPE_STRING (2)  // 字符串类型
#define PLAYER_VARTYPE_FLOAT  (3)  // 浮点类型
```
