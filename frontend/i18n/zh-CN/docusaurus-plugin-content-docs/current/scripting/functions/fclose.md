---
title: fclose
sidebar_label: fclose
description: 关闭一个文件。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

关闭一个文件。当脚本不再需要某个文件时（读取/写入后），应当始终关闭该文件。

| 名称        | 描述                                       |
| ----------- | ------------------------------------------ |
| File:handle | 要关闭的文件句柄。由 [fopen](fopen) 返回。 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。文件无法关闭，可能已经处于关闭状态。

## 示例

```c
// 以"仅追加"模式打开"file.txt"
new File:handle = fopen("file.txt", io_append);

// 检查文件是否成功打开
if (handle)
{
    // 成功

    // 向文件写入"Hi there!"
    fwrite(handle, "Hi there!");

    // 关闭文件
    fclose(handle);
}
else
{
    // 错误
    print("Failed to open file \"file.txt\".");
}
```

## 注意事项

:::warning

使用无效句柄将导致服务器崩溃！请通过 [fopen](fopen) 或 [ftemp](ftemp) 获取有效句柄。

:::

## 相关函数

- [fopen](fopen): 打开文件
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
- [fexist](fexist): 检查文件是否存在
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

```

```
