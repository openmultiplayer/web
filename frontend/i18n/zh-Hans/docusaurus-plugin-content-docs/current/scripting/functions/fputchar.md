---
title: fputchar
sidebar_label: fputchar
description: 向文件写入单个字符。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

向文件写入单个字符。

| 名称        | 说明                                                                      |
| ----------- | ------------------------------------------------------------------------- |
| File:handle | 要操作的文件句柄，需预先通过 fopen() 打开。                               |
| value       | 需要写入的字符。                                                          |
| bool:utf8   | 设为 `true` 使用 UTF8 编码模式，否则使用扩展 ASCII 编码。（默认：`true`） |

## 返回值

该函数不返回特定值。

## 示例

```c
// 以"只写"模式打开"file.txt"
new File:handle = fopen("file.txt", io_write);

if (handle)
{
    // 操作成功

    // 向"file.txt"写入字符'e'（使用扩展ASCII编码）
    fputchar(handle, 'e', false);

    // 关闭文件
    fclose(handle);
}
else
{
    // 操作失败
    print("无法打开\"file.txt\"。");
}
```

## 注意事项

:::warning

使用无效句柄会导致服务器崩溃！请通过 [fopen](fopen) 或 [ftemp](ftemp) 获取有效文件句柄。

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fread](fread): 读取文件
- [fgetchar](fgetchar): 从文件读取字符
- [fblockwrite](fblockwrite): 写入数据块
- [fblockread](fblockread): 读取数据块
- [fseek](fseek): 定位文件指针
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 匹配文件名模式
- [ftell](ftell): 获取当前文件指针位置
- [fflush](fflush): 刷新文件缓冲区
- [fstat](fstat): 获取文件状态信息
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算文件 CRC32 校验值
- [diskfree](diskfree): 获取磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
