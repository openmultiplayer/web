---
title: "fstat | open.mp"
description: "Return the size and the timestamp of a file."
canonical: https://open.mp/docs/scripting/functions/fstat
language: en
---

# fstat

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Return the size and the timestamp of a file.

| Name | Description |
| --- | --- |
| const filename\[\] | The name of the file. |
| &size | If the function is successful, this param-eter holds the size of the file on return. |
| &timestamp | If the function is successful, this parameter holds the time of the last modification of the file on return. |
| &attrib | If the function is successful, this parameter holds the file attributes. |
| &inode | If the function is successful, this parameter holds inode number of the file. An inode number is a number that uniquely identifies a file, and it usually indicates the physical position of (the start of) the file on the disk or memory card. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. (File doesn't exist)

## Examples

```c
new
    size,
    timestamp,
    attrib,
    inode;

if (fstat("file.txt", size, timestamp, attrib, inode))
{
    // Success

    printf("size = %d, timestamp = %d, attrib = %d, inode = %d", size, timestamp, attrib, inode);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

## Related Functions

-   [fopen](https://open.mp/docs/scripting/functions/fopen): Open a file.
-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fremove](https://open.mp/docs/scripting/functions/fremove): Remove a file.
-   [fwrite](https://open.mp/docs/scripting/functions/fwrite): Write to a file.
-   [fputchar](https://open.mp/docs/scripting/functions/fputchar): Put a character in a file.
-   [fgetchar](https://open.mp/docs/scripting/functions/fgetchar): Get a character from a file.
-   [fblockwrite](https://open.mp/docs/scripting/functions/fblockwrite): Write blocks of data into a file.
-   [fblockread](https://open.mp/docs/scripting/functions/fblockread): Read blocks of data from a file.
-   [fseek](https://open.mp/docs/scripting/functions/fseek): Jump to a specific character in a file.
-   [flength](https://open.mp/docs/scripting/functions/flength): Get the file length.
-   [fexist](https://open.mp/docs/scripting/functions/fexist): Check, if a file exists.
-   [fmatch](https://open.mp/docs/scripting/functions/fmatch): Check, if patterns with a file name matches.
-   [ftell](https://open.mp/docs/scripting/functions/ftell): Get the current position in the file.
-   [fflush](https://open.mp/docs/scripting/functions/fflush): Flush a file to disk (ensure all writes are complete).
-   [frename](https://open.mp/docs/scripting/functions/frename): Rename a file.
-   [fcopy](https://open.mp/docs/scripting/functions/fcopy): Copy a file.
-   [filecrc](https://open.mp/docs/scripting/functions/filecrc): Return the 32-bit CRC value of a file.
-   [fattrib](https://open.mp/docs/scripting/functions/fattrib): Set the file attributes.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
