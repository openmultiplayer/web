---
title: getdate
sidebar_label: getdate
description: 获取当前服务器日期并存储到年、月、日变量中。
tags: ["时间", "日期"]
---

<LowercaseNoteZH_CN />

## 描述

获取当前服务器日期，并将结果存储到指定的年、月、日变量中。

| 参数名   | 说明                                       |
| -------- | ------------------------------------------ |
| &year=0  | 整型变量（引用传递），用于存储年份         |
| &month=0 | 整型变量（引用传递），用于存储月份（1-12） |
| &day=0   | 整型变量（引用传递），用于存储日期（1-31） |

## 返回值

返回自年初以来的天数。

## 示例代码

```c
new Year, Month, Day, Days;
Days = getdate(Year, Month, Day);
printf("当前日期: %02d/%02d/%d", Day, Month, Year);  // 输出格式：日/月/年
printf("本年已过天数: %d", Days);                    // 输出自年初以来的天数
```

## 相关函数

- [gettime](gettime.md): 获取服务器时间的 UNIX 时间戳
