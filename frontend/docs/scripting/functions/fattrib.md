---
title: fattrib
sidebar_label: fattrib
description: Set the file attributes.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Description

Set the file attributes.

| Name             | Description                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| const filename[] | The name of the file.                                                                                                     |
| timestamp = 0    | Time of the last modification of the file. When this parameter is set to zero, the time stamp of the file is not changed. |
| attrib = 0x0F    | A bit mask with the new attributes of the file.  When set to 0x0F, the attributes of the file are not changed.            |

## Returns

**true** on success, **false** on failure.

## Examples

```c
// Change file modification time to 'Thu Mar 07 2024 06:28:15'
if (fattrib("file.txt", 1709792895))
{
    // Success
    print("File attributes was set.");
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't set the attributes.");
}
```

## Notes

:::tip

- The time is in number of seconds since midnight at 1 January 1970: the start of the UNIX system epoch.
- The file attributes are a bit mask.
- The meaning of each bit depends on the underlying file system (e.g. FAT, NTFS, etx2 and others).

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
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
- [fcreatedir](fcreatedir): Create a directory.
