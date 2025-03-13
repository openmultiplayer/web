---
title: memcpy
sidebar_label: memcpy
description: 将字节从一个位置复制到另一个位置
tags: ["字符串"]
---

<LowercaseNoteZH_CN />

## 描述

用于将字节从一个位置复制到另一个位置

| 参数                      | 说明                                         |
| ------------------------- | -------------------------------------------- |
| dest[]                    | 目标数组，用于存放从源数组复制的字节         |
| const source[]            | 源数组                                       |
| index = 0                 | 目标数组中开始复制的字节索引（以字节为单位） |
| numbytes                  | 要复制的字节数（非单元格数）                 |
| maxlength = sizeof (dest) | 目标缓冲区的最大单元格容量                   |

## 返回值

成功时返回 **true**，失败时返回 **false**

## 示例

```c
// 使用memcpy拼接两个字符串
new
	destination[64] = "This is ",
	source[] = "a string in a 32 Bit Array";

memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
// 输出: This is a string in a 32 Bit Array
```

## 相关函数

- [strcmp](strcmp): 比较两个字符串是否相同
- [strfind](strfind): 在字符串中搜索子串
- [strdel](strdel): 删除字符串的部分或全部内容
- [strins](strins): 将字符串插入到另一个字符串中
- [strlen](strlen): 获取字符串长度
- [strmid](strmid): 从字符串中提取指定字符
- [strpack](strpack): 将字符串打包到目标缓冲区
- [strval](strval): 转换字符串为数值
- [strcat](strcat): 拼接两个字符串
