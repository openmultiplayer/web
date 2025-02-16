---
title: db_get_mem_handle
description: Get memory handle for an SQLite database that was opened with db_open.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.  
This function was added in SA-MP 0.3.7 R1 and will not work in earlier versions!

:::

## คำอธิบาย

Get memory handle for an SQLite database that was opened with db_open.

| Name  | Description                                                 |
| ----- | ----------------------------------------------------------- |
| DB:db | The index of the database connection (returned by db_open). |

## ส่งคืน

Returns the memory handle for a specified database.

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- db_open: Open a connection to an SQLite database
- db_close: Close the connection to an SQLite database
- db_query: Query an SQLite database
- db_free_result: Free result memory from a db_query
- db_num_rows: Get the number of rows in a result
- db_next_row: Move to the next row
- db_num_fields: Get the number of fields in a result
- db_field_name: Returns the name of a field at a particular index
- db_get_field: Get content of field with specified ID from current result row
- db_get_field_assoc: Get content of field with specified name from current result row
- db_get_field_int: Get content of field as an integer with specified ID from current result row
- db_get_field_assoc_int: Get content of field as an integer with specified name from current result row
- db_get_field_float: Get content of field as a float with specified ID from current result row
- db_get_field_assoc_float: Get content of field as a float with specified name from current result row
- db_get_mem_handle: Get memory handle for an SQLite database that was opened with db_open.
- db_get_result_mem_handle: Get memory handle for an SQLite query that was executed with db_query.
- db_debug_openfiles
- db_debug_openresults
