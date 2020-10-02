---
id: db_get_result_mem_handle
title: db_get_result_mem_handle
description: Get memory handle for an SQLite query that was executed with db_query.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.  
This function was added in SA-MP 0.3.7 R1 and will not work in earlier versions!

:::

## Description

Get memory handle for an SQLite query that was executed with db_query.

| Name  | Description                                    |
| ----- | ---------------------------------------------- |
| DB:db | The index of the query (returned by db_query). |

## Returns

Returns the memory handle for a specified query.

## Related Functions

- [db_open](../functions/db_open.md): Open a connection to an SQLite database
- [db_close](../functions/db_close.md): Close the connection to an SQLite database
- [db_query](../functions/db_query.md): Query an SQLite database
- [db_free_result](../functions/db_free_result.md): Free result memory from a db_query
- [db_num_rows](../functions/db_num_rows.md): Get the number of rows in a result
- [db_next_row](../functions/db_next_row.md): Move to the next row
- [db_num_fields](../functions/db_num_fields.md): Get the number of fields in a result
- [db_field_name](../functions/db_field_name.md): Returns the name of a field at a particular index
- [db_get_field](../functions/db_get_field.md): Get content of field with specified ID from current result row
- [db_get_field_assoc](../functions/db_get_field_assoc.md): Get content of field with specified name from current result row
- [db_get_field_int](../functions/db_get_field_int.md): Get content of field as an integer with specified ID from current result row
- [db_get_field_assoc_int](../functions/db_get_field_assoc_int.md): Get content of field as an integer with specified name from current result row
- [db_get_field_float](../functions/db_get_field_float.md): Get content of field as a float with specified ID from current result row
- [db_get_field_assoc_float](../functions/db_get_field_assoc_float.md): Get content of field as a float with specified name from current result row
- [db_get_mem_handle](../functions/db_get_mem_handle.md): Get memory handle for an SQLite database that was opened with db_open.
- [db_get_result_mem_handle](../functions/db_get_result_mem_handle.md): Get memory handle for an SQLite query that was executed with db_query.
- [db_debug_openfiles](../functions/db_debug_openfiles.md)
- [db_debug_openresults](../functions/db_debug_openresults.md)
