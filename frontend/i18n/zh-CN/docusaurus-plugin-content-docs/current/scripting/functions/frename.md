---
title: frename
sidebar_label: frename
description: 重命名文件。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

重命名指定文件。

| 参数            | 说明                         |
| --------------- | ---------------------------- |
| const oldname[] | 原文件名（可包含完整路径）。 |
| const newname[] | 新文件名（可包含完整路径）。 |

## 返回值

**true** 操作成功，**false** 操作失败。

## 示例

```c
if (frename("example.txt", "file.txt"))
{
    // 操作成功
    printf("文件\"example.txt\"已重命名为\"file.txt\"。");
}
else
{
    // 操作失败
    print("文件\"example.txt\"不存在或无法访问。");
}
```

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fputchar](fputchar): 写入单个字符
- [fgetchar](fgetchar): 读取单个字符
- [fblockwrite](fblockwrite): 写入数据块
- [fblockread](fblockread): 读取数据块
- [fseek](fseek): 定位文件指针
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 匹配文件名模式
- [ftell](ftell): 获取当前指针位置
- [fflush](fflush): 刷新文件缓冲区
- [fstat](fstat): 获取文件状态信息
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算 CRC32 校验值
- [diskfree](diskfree): 获取磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
