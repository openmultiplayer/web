---
title: fseek
sidebar_label: fseek
description: 修改文件指针位置。
tags: ["文件管理"]
---

<LowercaseNoteZH_CN />

## 描述

修改文件指针位置。可在文件中进行正向或反向定位。

| 参数                                                | 说明                                         |
| --------------------------------------------------- | -------------------------------------------- |
| File:handle                                         | 要操作的文件句柄（由 fopen 返回）。          |
| position                                            | 相对于基准位置的偏移量（详见 whence 参数）。 |
| [seek_whence:whence](../resources/file-seek-whence) | 定位基准点（指定偏移量计算的起始位置）。     |

## 返回值

返回相对于文件起始位置的新偏移量（整数值）。

## 示例

```c
// 以"只读"模式打开"file.txt"
new File:handle = fopen("file.txt", io_read);

// 检查文件是否成功打开
if (handle)
{
    // 操作成功

    // 跳转到文件起始位置并输出
    printf("文件起始位置: %d", fseek(handle, 0, seek_start));

    // 跳转到文件末尾位置并输出
    printf("文件末尾位置: %d", fseek(handle, 0, seek_end));

    // 保持当前位置并输出
    printf("当前文件位置: %d", fseek(handle, 0, seek_current));

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
- [fputchar](fputchar): 写入单个字符
- [fgetchar](fgetchar): 读取单个字符
- [fblockwrite](fblockwrite): 写入数据块
- [fblockread](fblockread): 读取数据块
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

## 相关资源

- [文件定位基准](../resources/file-seek-whence)
