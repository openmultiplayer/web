---
title: fwrite
sidebar_label: fwrite
description: 向文件写入文本内容。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

向指定文件写入文本内容。

| 参数           | 说明                                |
| -------------- | ----------------------------------- |
| File:handle    | 要操作的文件句柄（由 fopen 返回）。 |
| const string[] | 需要写入的文本字符串。              |

## 返回值

返回成功写入的字符串长度（整数值）。

## 示例

```c
// 以"只写"模式打开"file.txt"
new File:handle = fopen("file.txt", io_write);

// 检查文件是否成功打开
if (handle)
{
    // 操作成功

    // 写入内容到文件
    fwrite(handle, "I just wrote here!");

    // 关闭文件
    fclose(handle);
}
else
{
    // 操作失败
    print("无法打开\"file.txt\"文件。");
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
    // 读取文件全部内容
    while(fread(handle, buf))
    {
        print(buf);
    }

    // 重置文件指针到起始位置
    fseek(handle, _, seek_begin);

    // 写入新内容
    fwrite(handle, "I just wrote here!");

    // 关闭文件
    fclose(handle);
}
else
{
    // 操作失败
    print("文件\"file.txt\"不存在或无法访问。");
}
```

<br />

```c
// 以"追加"模式打开"file.txt"
new File:handle = fopen("file.txt", io_append);

// 检查文件是否成功打开
if (handle)
{
    // 追加写入内容（包含换行符）
    fwrite(handle, "This is a test.\r\n");

    // 关闭文件
    fclose(handle);
}
else
{
    // 操作失败
    print("无法打开\"file.txt\"文件。");
}
```

## 注意事项

:::tip

此函数使用 UTF-8 编码写入文件，可能无法支持某些特殊语言符号。

:::

:::warning

使用无效句柄会导致服务器崩溃！请通过 [fopen](fopen) 或 [ftemp](ftemp) 获取有效文件句柄。

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
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
