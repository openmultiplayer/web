---
title: fflush
description: Flush a file to disk (ensure all writes are complete).
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Description

Flush a file to disk (ensure all writes are complete). Actually just calls [flength](flength) as that has to force a flush to be accurate.

| Name        | Description                                  |
| ----------- | -------------------------------------------- |
| File:handle | The handle of the file. (returned by fopen). |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. (Invalid file handle)

## Examples

```c
// Open "file.txt" in "append only" mode
new File:handle = fopen("file.txt", io_append);

// Check, if the file is opened
if (handle)
{
    // Success

    // Append "This is a text.\r\n"
    fwrite(handle, "This is a text.\r\n");

    fflush(handle);

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

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
