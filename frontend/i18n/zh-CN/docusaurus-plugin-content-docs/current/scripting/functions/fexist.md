---
title: fexist
sidebar_label: fexist
description: 检查指定文件是否存在于scriptfiles目录中。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

检查指定文件是否存在于 scriptfiles 目录中。

| 名称             | 描述   |
| ---------------- | ------ |
| const filename[] | 文件名 |

## 返回值

返回匹配该模式的文件数量。

## 示例

```c
// 检查"file.txt"是否存在
if (fexist("file.txt"))
{
    // 成功

    // 输出成功信息
    print("\"file.txt\" 存在。");
}
else
{
    // 错误
    print("\"file.txt\" 不存在。");
}
```

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fread](fread): 读取文件
- [fputchar](fputchar): 向文件写入字符
- [fgetchar](fgetchar): 从文件读取字符
- [fblockwrite](fblockwrite): 向文件写入数据块
- [fblockread](fblockread): 从文件读取数据块
- [fseek](fseek): 跳转至文件指定位置
- [flength](flength): 获取文件长度
- [fmatch](fmatch): 检查文件名模式匹配
- [ftell](ftell): 获取当前文件位置
- [fflush](fflush): 将文件刷入磁盘（确保所有写入完成）
- [fstat](fstat): 返回文件大小和时间戳
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 返回文件的 32 位 CRC 值
- [diskfree](diskfree): 返回磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
