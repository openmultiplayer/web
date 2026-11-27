---
title: "File Seek Whence | open.mp"
description: "File seek whence definitions (fseek)."
canonical: https://open.mp/docs/scripting/resources/file-seek-whence
language: en
---

# File Seek Whence

note

These definitions are used by [fseek](https://open.mp/docs/scripting/functions/fseek).

| Definition | Description |
| --- | --- |
| seek\_start | Set the file position relative to the start of the file (the position parameter must be positive). |
| seek\_current | Set the file position relative to the current file position: the position parameter is added to the current position. |
| seek\_end | Set the file position relative to the end of the file (parameter position must be zero or negative). |
