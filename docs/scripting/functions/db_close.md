---
title: db_close
description: Closes a SQLite database connection that was opened with `db_open`.
keywords:
  - sqlite
tags: ["sqlite"]
---

<LowercaseNote />

## Description

Closes a SQLite database connection that was opened with [db_open](db_open).

| Name  | Description                                                                      |
| ----- | -------------------------------------------------------------------------------- |
| DB:db | The handle of the database connection to close (returned by [db_open](db_open)). |

## Returns

1: The function executed successfully.

0: The function failed to execute. This could mean that the database connection handle is invalid.

## Examples

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        print("Successfully created a connection to database \"example.db\".");
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Close the connection to the database if connection is open
    if (db_close(gDBConnectionHandle))
    {
        // Extra cleanup
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notes

:::warning

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [db_open](db_open).

:::

## Related Functions

- [db_open](db_open): Open a connection to an SQLite database
- [db_close](db_close): Close the connection to an SQLite database
- [db_query](db_query): Query an SQLite database
- [db_free_result](db_free_result): Free result memory from a db_query
- [db_num_rows](db_num_rows): Get the number of rows in a result
- [db_next_row](db_next_row): Move to the next row
- [db_num_fields](db_num_fields): Get the number of fields in a result
- [db_field_name](db_field_name): Returns the name of a field at a particular index
- [db_get_field](db_get_field): Get content of field with specified ID from current result row
- [db_get_field_assoc](db_get_field_assoc): Get content of field with specified name from current result row
- [db_get_field_int](db_get_field_int): Get content of field as an integer with specified ID from current result row
- [db_get_field_assoc_int](db_get_field_assoc_int): Get content of field as an integer with specified name from current result row
- [db_get_field_float](db_get_field_float): Get content of field as a float with specified ID from current result row
- [db_get_field_assoc_float](db_get_field_assoc_float): Get content of field as a float with specified name from current result row
- [db_get_mem_handle](db_get_mem_handle): Get memory handle for an SQLite database that was opened with db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Get memory handle for an SQLite query that was executed with db_query.
- [db_debug_openfiles](db_debug_openfiles): The function gets the number of open database connections for debugging purposes.
- [db_debug_openresults](db_debug_openresults): The function gets the number of open database results.

## Modern SQLite Functions

- [DB_Open](DB_Open): Open a connection to an SQLite database
- [DB_Close](DB_Close): Close the connection to an SQLite database
- [DB_ExecuteQuery](DB_ExecuteQuery): Query an SQLite database
- [DB_FreeResultSet](DB_FreeResultSet): Free result memory from a DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): Get the number of rows in a result
- [DB_SelectNextRow](DB_SelectNextRow): Move to the next row
- [DB_GetFieldCount](DB_GetFieldCount): Get the number of fields in a result
- [DB_GetFieldName](DB_GetFieldName): Returns the name of a field at a particular index
- [DB_GetFieldString](DB_GetFieldString): Get content of field with specified ID from current result row
- [DB_GetFieldStringByName](DB_GetFieldStringByName): Get content of field with specified name from current result row
- [DB_GetFieldInt](DB_GetFieldInt): Get content of field as an integer with specified ID from current result row
- [DB_GetFieldIntByName](DB_GetFieldIntByName): Get content of field as an integer with specified name from current result row
- [DB_GetFieldFloat](DB_GetFieldFloat): Get content of field as a float with specified ID from current result row
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Get content of field as a float with specified name from current result row
- [DB_GetMemHandle](DB_GetMemHandle): Get memory handle for an SQLite database that was opened with db_open.
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Get memory handle for an SQLite query that was executed with DB_ExecuteQuery.
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): The function gets the number of open database connections for debugging purposes.
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): The function gets the number of open database results.
