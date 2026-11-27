---
title: "db_debug_openfiles | open.mp"
description: "Gets the number of open database connections for debugging purposes."
canonical: https://open.mp/docs/scripting/functions/db_debug_openfiles
language: en
---

# db\_debug\_openfiles

warning

This function is deprecated. Please see [DB\_GetDatabaseConnectionCount](https://open.mp/docs/scripting/functions/DB_GetDatabaseConnectionCount).

## Description

The function gets the number of open database connections for debugging purposes.

## Related Functions

-   [db\_open](https://open.mp/docs/scripting/functions/db_open): Open a connection to an SQLite database
-   [db\_close](https://open.mp/docs/scripting/functions/db_close): Close the connection to an SQLite database
-   [db\_query](https://open.mp/docs/scripting/functions/db_query): Query an SQLite database
-   [db\_free\_result](https://open.mp/docs/scripting/functions/db_free_result): Free result memory from a db\_query
-   [db\_num\_rows](https://open.mp/docs/scripting/functions/db_num_rows): Get the number of rows in a result
-   [db\_next\_row](https://open.mp/docs/scripting/functions/db_next_row): Move to the next row
-   [db\_num\_fields](https://open.mp/docs/scripting/functions/db_num_fields): Get the number of fields in a result
-   [db\_field\_name](https://open.mp/docs/scripting/functions/db_field_name): Returns the name of a field at a particular index
-   [db\_get\_field](https://open.mp/docs/scripting/functions/db_get_field): Get content of field with specified ID from current result row
-   [db\_get\_field\_assoc](https://open.mp/docs/scripting/functions/db_get_field_assoc): Get content of field with specified name from current result row
-   [db\_get\_field\_int](https://open.mp/docs/scripting/functions/db_get_field_int): Get content of field as an integer with specified ID from current result row
-   [db\_get\_field\_assoc\_int](https://open.mp/docs/scripting/functions/db_get_field_assoc_int): Get content of field as an integer with specified name from current result row
-   [db\_get\_field\_float](https://open.mp/docs/scripting/functions/db_get_field_float): Get content of field as a float with specified ID from current result row
-   [db\_get\_field\_assoc\_float](https://open.mp/docs/scripting/functions/db_get_field_assoc_float): Get content of field as a float with specified name from current result row
-   [db\_get\_mem\_handle](https://open.mp/docs/scripting/functions/db_get_mem_handle): Get memory handle for an SQLite database that was opened with db\_open.
-   [db\_get\_result\_mem\_handle](https://open.mp/docs/scripting/functions/db_get_result_mem_handle): Get memory handle for an SQLite query that was executed with db\_query.
-   [db\_debug\_openresults](https://open.mp/docs/scripting/functions/db_debug_openresults): The function gets the number of open database results.
