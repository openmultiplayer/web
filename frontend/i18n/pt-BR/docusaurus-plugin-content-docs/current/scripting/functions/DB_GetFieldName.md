---

title: DB_GetFieldName
sidebar_label: DB_GetFieldName
description: Retorna o nome do campo no índice especificado.
tags: ["sqlite"]

---

## Descrição

Retorna o nome de um campo em um índice específico.

| Nome                  | Descrição                                                                            |
| --------------------- | ------------------------------------------------------------------------------------ |
| DBResult:result      | Resultado de onde obter os dados; retornado por [DB_ExecuteQuery](DB_ExecuteQuery). |
| field                 | Índice do campo para obter o nome.                                                   |
| output[]             | Variável onde o nome será armazenado.                                                |
| size = sizeof(output) | Tamanho máximo do nome do campo.                                                     |

## Retorno

Retorna **true** se o handle do resultado for válido, caso contrário **false**.

## Exemplos

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        new DBResult:db_result_set = DB_ExecuteQuery(gDBConnectionHandle, "SELECT * FROM `join_log` LIMIT 1");

        if (db_result_set)
        {
            new columns = DB_GetFieldCount(db_result_set);
            new field_name[32];

            for (new index = 0; index < columns; index++)
            {
                DB_GetFieldName(db_result_set, index, field_name, sizeof field_name);
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            DB_FreeResultSet(db_result_set);
        }
    }
    else
    {
        print("Failed to open a connection to database \"example.db\".");
    }
}

public OnGameModeExit()
{
    if (DB_Close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;
    }
    return 1;
}
```

## Notas

## Funções Relacionadas

* [DB_Open](DB_Open): Abre conexão com banco SQLite
* [DB_Close](DB_Close): Fecha conexão com banco SQLite
* [DB_ExecuteQuery](DB_ExecuteQuery): Executa consulta no banco
* [DB_FreeResultSet](DB_FreeResultSet): Libera memória do resultado
* [DB_GetRowCount](DB_GetRowCount): Obtém número de linhas do resultado
* [DB_SelectNextRow](DB_SelectNextRow): Avança para próxima linha
* [DB_GetFieldCount](DB_GetFieldCount): Obtém número de campos do resultado
* [DB_GetFieldName](DB_GetFieldName): Retorna nome do campo pelo índice
* [DB_GetFieldString](DB_GetFieldString): Obtém conteúdo do campo pelo índice
* [DB_GetFieldStringByName](DB_GetFieldStringByName): Obtém conteúdo do campo pelo nome
* [DB_GetFieldInt](DB_GetFieldInt): Obtém conteúdo do campo como inteiro pelo índice
* [DB_GetFieldIntByName](DB_GetFieldIntByName): Obtém conteúdo do campo como inteiro pelo nome
* [DB_GetFieldFloat](DB_GetFieldFloat): Obtém conteúdo do campo como float pelo índice
* [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Obtém conteúdo do campo como float pelo nome
* [DB_GetMemHandle](DB_GetMemHandle): Obtém handle de memória do banco aberto com DB_Open
* [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Obtém handle de memória do resultado DB_ExecuteQuery
* [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): Número de conexões abertas
* [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): Número de resultados abertos
