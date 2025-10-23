---
title: ftemp
sidebar_label: ftemp
description: 在"tmp"、"temp"目录或根目录创建随机命名的临时文件用于读写。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

在"tmp"、"temp"目录或根目录创建随机命名的临时文件用于读写。该文件在使用 fclose()关闭后会自动删除。

## 示例

```c
// 创建临时文件流
new File:t_handle = ftemp();

// 声明句柄变量
new File:handle;

// 声明字符变量
new g_char;

// 检查临时文件是否成功创建
if (t_handle)
{
    // 操作成功

    // 以"只读"模式打开"file.txt"并检查
    if (handle = fopen("file.txt", io_read))
    {
        // 读取源文件所有字符
        while((g_char = fgetchar(handle, 0, false)) != EOF)
        {
            // 将小写字符写入临时文件
            fputchar(t_handle, tolower(g_char), false);
        }

        // 关闭源文件
        fclose(handle);

        // 重置临时文件指针到起始位置
        fseek(t_handle, _, seek_begin);

        // 以"只写"模式打开"file1.txt"并检查
        if (handle = fopen("file1.txt", io_write))
        {
            // 读取临时文件所有字符
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // 写入目标文件1
                fputchar(handle, g_char, false);
            }

            // 关闭目标文件1
            fclose(handle);

            // 再次重置临时文件指针
            fseek(t_handle, _, seek_begin);
        }
        else
        {
            print("无法打开\"file1.txt\"文件。");
        }

        // 以"只写"模式打开"file2.txt"并检查
        if (handle = fopen("file2.txt", io_write))
        {
            // 读取临时文件所有字符
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // 写入目标文件2
                fputchar(handle, g_char, false);
            }

            // 关闭目标文件2
            fclose(handle);
        }
        else
        {
            print("无法打开\"file2.txt\"文件。");
        }
    }
    else
    {
        print("无法打开\"file.txt\"文件。");
    }

    // 关闭临时文件流（自动删除）
    fclose(t_handle);
}
else
{
    print("创建临时文件流失败。");
}
```

## 注意事项

:::warning

若目标目录未正确创建，此函数可能导致服务器崩溃。

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fread](fread): 读取文件
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
