---
title: fremove
sidebar_label: fremove
description: 删除文件。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

删除指定文件。

| 名称             | 说明               |
| ---------------- | ------------------ |
| const filename[] | 要删除的文件路径。 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败（文件不存在或权限不足）。

## 示例

**删除文件示例：**

```c
if (fremove("example.txt"))
{
    print("文件\"example.txt\"已删除。");
}
else
{
    print("文件\"example.txt\"不存在。");
}
```

**删除目录示例：**

```c
if (fremove("logs"))
{
    print("目录\"logs\"已删除。");
}
else
{
    print("目录\"logs\"不存在或非空目录。");
}
```

## 注意事项

:::tip

正在使用的文件（已通过 fopen 打开）需先关闭（fclose）才能删除。

:::

:::warning

文件路径必须有效。

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
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
