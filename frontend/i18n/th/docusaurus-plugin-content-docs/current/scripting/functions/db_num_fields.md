---
title: db_num_fields
sidebar_label: db_num_fields
description: Get the number of fields in a result.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Get the number of fields in a result.

| Name              | Description             |
| ----------------- | ----------------------- |
| DBResult:dbresult | The result of db_query. |

## ส่งคืน

The number of fields in the result.

## ตัวอย่าง

```c
// ...
// Declare "db_result" and select all rows and columns from "spawn_list"
new DBResult:db_result = db_query(db_handle, "SELECT * FROM `spawn_list` WHERE 1;");

// Print the amount of columns selected
printf("Selected columns: %d", db_num_fields(db_result));

// Do...
do
{
    // ...
}

// While next row has been fetched
while(db_next_row(db_handle));

// Frees result
db_free_result(db_result);
// ...
```

## บันทึก

:::warning

Using an invalid handle will crash your server! Get a valid handle by using db_query. But it's protected against NULL references.

:::

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
