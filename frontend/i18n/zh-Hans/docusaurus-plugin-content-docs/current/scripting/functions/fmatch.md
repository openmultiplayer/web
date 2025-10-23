---
title: fmatch
sidebar_label: fmatch
description: 根据匹配模式查找文件名。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

根据通配符模式查找匹配的文件名。

| 名称                     | 描述                                       |
| ------------------------ | ------------------------------------------ |
| const filename[]         | 存储匹配结果的字符串（返回压缩字符串格式） |
| const pattern[]          | 匹配模式（支持通配符）                     |
| index                    | 当存在多个匹配项时的文件索引号（默认：0）  |
| size = sizeof (filename) | 目标字符串的最大容量                       |

## 返回值

**true** - 成功（找到匹配文件）

**false** - 失败（文件不存在或模式不匹配）

## 示例

```c
if (fmatch("file.txt", "*.txt"))
{
    print("文件匹配模式成功。");
}
else
{
    print("文件 \"file.txt\" 不存在，或模式不匹配。");
}
```

## 注意事项

:::warning

本函数在 open.mp 服务器可用，SA:MP 服务器不支持。

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fread](fread): 读取文件
- [fputchar](fputchar): 写入单个字符
- [fgetchar](fgetchar): 读取单个字符
- [fblockwrite](fblockwrite): 写入数据块
- [fblockread](fblockread): 读取数据块
- [fseek](fseek): 跳转文件指针
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [ftell](ftell): 获取当前文件位置
- [fflush](fflush): 刷新文件到磁盘
- [fstat](fstat): 获取文件状态信息
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算文件 CRC 校验值
- [diskfree](diskfree): 获取磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
