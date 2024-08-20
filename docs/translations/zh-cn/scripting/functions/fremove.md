---
title: fremove
description: Delete a file.
tags: ["file management"]
---

<LowercaseNote />

## Description

Delete a file.

| Name             | Description                     |
| ---------------- | ------------------------------- |
| const filename[] | The path of the file to delete. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The file doesn't exist, or you don't have permission to delete it.

## Examples

**Delete a file:**

```c
if (fremove("example.txt"))
{
    print("The file \"example.txt\" removed.");
}
else
{
    print("The file \"example.txt\" does not exists.");
}
```

**Delete a directory:**

```c
if (fremove("logs"))
{
    print("The directory \"logs\" removed.");
}
else
{
    print("The directory \"logs\" does not exists, or it is not empty.");
}
```

## Notes

:::tip

Files that are currently open (fopen) must be closed first (fclose) to be deleted.

:::

:::warning

The file path must be valid.

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fwrite](fwrite): Write to a file.
- [fread](fread): Read a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [fmatch](fmatch): Check, if patterns with a file name matches.
- [ftell](ftell): Get the current position in the file.
- [fflush](fflush): Flush a file to disk (ensure all writes are complete).
- [fstat](fstat): Return the size and the timestamp of a file.
- [frename](frename): Rename a file.
- [fcopy](fcopy): Copy a file.
- [filecrc](filecrc): Return the 32-bit CRC value of a file.
- [diskfree](diskfree): Returns the free disk space.
- [fattrib](fattrib): Set the file attributes.
- [fcreatedir](fcreatedir): Create a directory.
