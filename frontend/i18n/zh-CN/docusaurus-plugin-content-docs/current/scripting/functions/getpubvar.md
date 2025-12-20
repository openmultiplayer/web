---
title: getpubvar
sidebar_label: getpubvar
description: 获取当前脚本中的特定公共变量
tags: ["核心", "公共变量"]
---

<LowercaseNoteZH_CN />

## 描述

获取当前脚本中声明的特定公共变量值

| 参数         | 说明             |
| ------------ | ---------------- |
| const name[] | 目标公共变量名称 |

## 返回值

若变量不存在返回无效值（建议先使用[existpubvar](existpubvar)进行检测）

## 相关函数

- [setpubvar](setpubvar): 设置当前脚本的公共变量值
- [existpubvar](existpubvar): 检测公共变量是否存在
- [numpubvars](numpubvars): 统计脚本中公共变量数量
