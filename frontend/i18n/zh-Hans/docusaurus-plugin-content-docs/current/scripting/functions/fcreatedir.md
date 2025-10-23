---
title: fcreatedir
sidebar_label: fcreatedir
description: 创建目录。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

创建目录。

| 名称            | 描述                               |
| --------------- | ---------------------------------- |
| const dirname[] | 要创建的目录名称，可包含完整路径。 |

## 返回值

**true** 表示成功，**false** 表示失败。

## 示例

```c
if (fcreatedir("logs"))
{
    // 成功
    printf("目录 \"logs\" 创建成功。");
}
else
{
    // 错误
    print("无法创建目录 \"logs\"");
}
```

## 注意事项

:::tip

如需删除目录，请使用 [fremove](fremove)。删除前目录必须为空。

:::

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
- [fflush](fflush): 将文件刷入磁盘（确保所有写入完成）
- [fstat](fstat): 返回文件大小和时间戳
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 返回文件的 32 位 CRC 值
- [diskfree](diskfree): 返回磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
