---
title: "fattrib | open.mp"
description: "Set the file attributes."
canonical: https://open.mp/docs/scripting/functions/fattrib
language: en
---

# fattrib

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Set the file attributes.

| Name | Description |
| --- | --- |
| const filename\[\] | The name of the file. |
| timestamp = 0 | Time of the last modification of the file. When this parameter is set to zero, the time stamp of the file is not changed. |
| attrib = 0x0F | A bit mask with the new attributes of the file. When set to 0x0F, the attributes of the file are not changed. |

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

note

-   The time is in number of seconds since midnight at 1 January 1970: the start of the UNIX system epoch.
-   The file attributes are a bit mask.
-   The meaning of each bit depends on the underlying file system (e.g. FAT, NTFS, etx2 and others).

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
-   [fstat](https://open.mp/docs/scripting/functions/fstat): Return the size and the timestamp of a file.
-   [frename](https://open.mp/docs/scripting/functions/frename): Rename a file.
-   [fcopy](https://open.mp/docs/scripting/functions/fcopy): Copy a file.
-   [filecrc](https://open.mp/docs/scripting/functions/filecrc): Return the 32-bit CRC value of a file.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
