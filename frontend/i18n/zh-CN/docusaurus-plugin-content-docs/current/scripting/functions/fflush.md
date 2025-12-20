---
title: fflush
sidebar_label: fflush
description: 将文件刷入磁盘（确保所有写入完成）。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

将文件刷入磁盘（确保所有写入完成）。实际调用 [flength](flength) 函数实现，因为此函数需要强制刷新以确保准确性。

| 参数        | 说明                                 |
| ----------- | ------------------------------------ |
| File:handle | 文件句柄（由 [fopen](fopen) 返回）。 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败（无效的文件句柄）。

## 示例

```c
// 以"仅追加"模式打开"file.txt"
new File:handle = fopen("file.txt", io_append);

// 检查文件是否成功打开
if (handle)
{
    // 成功

    // 追加文本"This is a text.\r\n"
    fwrite(handle, "This is a text.\r\n");

    fflush(handle);

    // 关闭文件
    fclose(handle);
}
else
{
    // 错误
    print("文件 \"file.txt\" 不存在或无法打开。");
}
```

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fputchar](fputchar): 向文件写入字符
- [fgetchar](fgetchar): 从文件读取字符
- [fblockwrite](fblockwrite): 向文件写入数据块
- [fblockread](fblockread): 从文件读取数据块
- [fseek](fseek): 跳转至文件指定位置
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 检查文件名模式匹配
- [ftell](ftell): 获取当前文件位置
- [fstat](fstat): 返回文件大小和时间戳
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 返回文件的 32 位 CRC 值
- [diskfree](diskfree): 返回磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
