---
title: "filecrc | open.mp"
description: "Return the 32-bit CRC value of a file."
canonical: https://open.mp/docs/scripting/functions/filecrc
language: en
---

# filecrc

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Return the 32-bit CRC value of a file.

| Name | Description |
| --- | --- |
| const filename\[\] | The name of the file. |

## Returns

The 32-bit CRC value of the file, or **0** if the file cannot be opened.

## Examples

```c
new crc = filecrc("file.txt");

if (crc)
{
    // Success
    printf("CRC value = %d", crc);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

## Notes

note

-   The CRC value is a useful measure to check whether the contents of a file has changed during transmission or whether it has been edited (provided that the CRC value of the original file was saved).
-   The CRC value returned by this function is the same as the one used in ZIP archives (PKZip, WinZip) and the "SFV" utilities and file formats.

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
-   [fattrib](https://open.mp/docs/scripting/functions/fattrib): Set the file attributes.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
