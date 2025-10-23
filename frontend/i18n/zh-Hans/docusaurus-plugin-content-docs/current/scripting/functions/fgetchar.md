---
title: fgetchar
sidebar_label: fgetchar
description: 从文件中读取单个字符。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

从文件中读取单个字符。

| 名称        | 描述                                                                         |
| ----------- | ---------------------------------------------------------------------------- |
| File:handle | 文件句柄（由 [fopen](fopen) 返回）                                           |
| value       | 此参数无实际作用，保持为 "0" 即可                                            |
| bool:utf8   | 若为 `true` 以 UTF-8 编码读取字符，否则以扩展 ASCII 编码读取（默认：`true`） |

## 返回值

成功时返回字符的扩展 ASCII 或 UTF-8 值，否则返回 EOF（文件末尾标识）。

## 示例

```c
// 以"只读"模式打开"file.txt"
new File:handle = fopen("file.txt", io_read);

// 声明变量"g_char"
new g_char;

// 检查"file.txt"是否成功打开
if (handle)
{
    // 读取所有字符（忽略UTF-8编码）
    while((g_char = fgetchar(handle, 0, false)) != EOF)
    {
        // 输出字符
        printf("[ \"file.txt\" ] 0x%x", g_char);
    }

    // 关闭"file.txt"
    fclose(handle);
}
else
{
    // 错误
    print("无法打开文件 \"file.txt\"。");
}
```

## 注意事项

:::warning

使用无效句柄将导致服务器崩溃！请通过 [fopen](fopen) 或 [ftemp](ftemp) 获取有效句柄。

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fread](fread): 读取文件
- [fputchar](fputchar): 向文件写入字符
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
