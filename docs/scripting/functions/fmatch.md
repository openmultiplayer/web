---
title: "fmatch | open.mp"
description: "Find a filename matching a pattern."
canonical: https://open.mp/docs/scripting/functions/fmatch
language: en
---

# fmatch

## Description

Find a filename matching a pattern.

| Name | Description |
| --- | --- |
| const filename\[\] | The string to hold the result in, returned as a [packed](https://open.mp/docs/scripting/functions/strunpack) string. |
| const pattern\[\] | The pattern that should be matched. May contain wildcards. |
| index | The number of the file, in case there are multiple matches. (default: 0) |
| size = sizeof (filename) | The maximum size of parameter _name_ |

## Returns

**true** - Success (the file matches the pattern)

**false** - Failure (the file does not exist or the pattern does not match)

## Examples

```c
if (fmatch("file.txt", "*.txt"))
{
    print("The file matches the pattern.");
}
else
{
    print("The file \"file.txt\" does not exists, or pattern does not match.");
}
```

## Notes

warning

This function works on open.mp server but not on SA:MP server.

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
-   [fexist](https://open.mp/docs/scripting/functions/fexist): Check, if a file exists.
-   [ftell](https://open.mp/docs/scripting/functions/ftell): Get the current position in the file.
-   [fflush](https://open.mp/docs/scripting/functions/fflush): Flush a file to disk (ensure all writes are complete).
-   [fstat](https://open.mp/docs/scripting/functions/fstat): Return the size and the timestamp of a file.
-   [frename](https://open.mp/docs/scripting/functions/frename): Rename a file.
-   [fcopy](https://open.mp/docs/scripting/functions/fcopy): Copy a file.
-   [filecrc](https://open.mp/docs/scripting/functions/filecrc): Return the 32-bit CRC value of a file.
-   [fattrib](https://open.mp/docs/scripting/functions/fattrib): Set the file attributes.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
