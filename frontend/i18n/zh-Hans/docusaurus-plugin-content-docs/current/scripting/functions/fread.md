---
title: fread
sidebar_label: fread
description: 从文件中读取单行内容。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

从文件中读取单行内容。

| 参数                   | 说明                                   |
| ---------------------- | -------------------------------------- |
| File:handle            | 要读取的文件句柄（由 fopen 返回）。    |
| string[]               | 存储读取内容的字符串数组（引用传递）。 |
| size = sizeof (string) | 要读取的字节数。                       |
| bool:pack              | 是否启用压缩格式？（默认：false）。    |

## 返回值

返回读取内容的字符串长度（整数值）。

## 示例

```c
// 以"只读"模式打开"file.txt"
new File:handle = fopen("file.txt", io_read);

// 初始化缓冲区
new buf[128];

// 检查文件是否成功打开
if (handle)
{
    // 操作成功

    // 读取整个文件内容
    while(fread(handle, buf))
    {
        print(buf);
    }

    // 关闭文件
    fclose(handle);
}
else
{
    // 操作失败
    print("文件\"file.txt\"不存在或无法打开。");
}
```

<br />

```c
// 以"读写"模式打开"file.txt"
new File:handle = fopen("file.txt");

// 初始化缓冲区
new buf[128];

// 检查文件是否成功打开
if (handle)
{
    // 操作成功

    // 读取整个文件内容
    while(fread(handle, buf))
    {
        print(buf);
    }

    // 将文件指针重置到起始位置
    fseek(handle, _, seek_begin);

    // 向文件写入内容
    fwrite(handle, "I just wrote here!");

    // 关闭文件
    fclose(handle);
}
else
{
    // 操作失败
    print("文件\"file.txt\"不存在或无法打开。");
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
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算 CRC32 校验值
- [diskfree](diskfree): 获取磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
