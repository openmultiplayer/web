---
title: fmatch
description: Find a filename matching a pattern.
tags: ["file management"]
---

<LowercaseNote />

## Description

Find a filename matching a pattern.

| Name                     | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| const filename[]         | The string to hold the result in, returned as a packed string.           |
| const pattern[]          | The pattern that should be matched. May contain wildcards.               |
| index                    | The number of the file, in case there are multiple matches. (default: 0) |
| size = sizeof (filename) | The maximum size of parameter name                                       |

## Returns

**true** on success, **false** on failure

## Examples

```c
if (fmatch("file.txt", "*.txt"))
{
    print("The file matches the pattern.");
}
else
{
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

## Notes

:::warning

This function does not work in the SA:MP server.

This function work in the open.mp server.

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fread](fread): Read a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
