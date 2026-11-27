---
title: "fexist | open.mp"
description: "Checks if a specific file exists in the scriptfiles directory."
canonical: https://open.mp/docs/scripting/functions/fexist
language: en
---

# fexist

## Description

Checks if a specific file exists in the scriptfiles directory.

| Name | Description |
| --- | --- |
| const filename\[\] | The name of the file. |

## Returns

The number of files that match the pattern.

## Examples

```c
// Check, if "file.txt" exists
if (fexist("file.txt"))
{
    // Success

    // Print the success
    print("\"file.txt\" exists.");
}
else
{
    // Error
    print("\"file.txt\" does not exist.");
}
```

## Related Functions

-   [fopen](https://open.mp/docs/scripting/functions/fopen): Open a file.
-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fremove](https://open.mp/docs/scripting/functions/fremove): Remove a file.
-   [fwrite](https://open.mp/docs/scripting/functions/fwrite): Write to a file.
-   [fread](https://open.mp/docs/scripting/functions/fread): Read a file.
-   [fputchar](https://open.mp/docs/scripting/functions/fputchar): Put a character in a file.
-   [fgetchar](https://open.mp/docs/scripting/functions/fgetchar): Get a character from a file.
-   [fblockwrite](https://open.mp/docs/scripting/functions/fblockwrite): Write blocks of data into a file.
-   [fblockread](https://open.mp/docs/scripting/functions/fblockread): Read blocks of data from a file.
-   [fseek](https://open.mp/docs/scripting/functions/fseek): Jump to a specific character in a file.
-   [flength](https://open.mp/docs/scripting/functions/flength): Get the file length.
-   [fmatch](https://open.mp/docs/scripting/functions/fmatch): Check, if patterns with a file name matches.
-   [ftell](https://open.mp/docs/scripting/functions/ftell): Get the current position in the file.
-   [fflush](https://open.mp/docs/scripting/functions/fflush): Flush a file to disk (ensure all writes are complete).
-   [fstat](https://open.mp/docs/scripting/functions/fstat): Return the size and the timestamp of a file.
-   [frename](https://open.mp/docs/scripting/functions/frename): Rename a file.
-   [fcopy](https://open.mp/docs/scripting/functions/fcopy): Copy a file.
-   [filecrc](https://open.mp/docs/scripting/functions/filecrc): Return the 32-bit CRC value of a file.
-   [fattrib](https://open.mp/docs/scripting/functions/fattrib): Set the file attributes.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
