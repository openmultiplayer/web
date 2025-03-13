---
title: 浮点数舍入模式
sidebar_label: 浮点数舍入模式
description: floatround函数使用的舍入模式说明
---

:::info

以下是[floatround](../functions/floatround)函数可使用的浮点数舍入模式列表。

:::

| 模式                | 描述                                                                |
| ------------------- | ------------------------------------------------------------------- |
| floatround_round    | 四舍五入到最接近的整数。当小数部分正好为 0.5 时向上舍入（默认模式） |
| floatround_floor    | 向下取整                                                            |
| floatround_ceil     | 向上取整                                                            |
| floatround_tozero   | 正数向下取整，负数向上取整（"向零取整"）                            |
| floatround_unbiased | 与 floatround_round 功能相同                                        |
