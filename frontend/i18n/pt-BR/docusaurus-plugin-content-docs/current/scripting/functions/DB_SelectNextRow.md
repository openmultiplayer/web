---

title: DB_SelectNextRow
sidebar_label: DB_SelectNextRow
description: Avança para a próxima linha do conjunto de resultados obtido com `DB_ExecuteQuery`.
keywords:
  - sqlite
tags: ["sqlite"]

---

## descrição

A função avança para a próxima linha do conjunto de resultados obtido com [DB_ExecuteQuery](DB_ExecuteQuery).

| Nome               | Descrição                                                      |
| ------------------ | -------------------------------------------------------------- |
| DBResult:dbresult | O resultado retornado por [DB_ExecuteQuery](DB_ExecuteQuery). |

## retorno

Retorna **true** se o handle do resultado for válido e ainda não estiver na última linha, caso contrário, retorna **false**.

## exemplo

```c
// examples.inc

Examples_ListNames(DB:dbConnectionHandle)
{
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `name` FROM `examples`");

    if (db_result_set)
    {
        new result[256];

        do
        {
            DB_GetFieldStringByName(db_result_set, "name", result, sizeof result);
        }
        while (DB_SelectNextRow(db_result_set));

        DB_FreeResultSet(db_result_set);
    }
}
```

```c
// mode.pwn

#include <examples>

static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        print("Conexão à base de dados \"example.db\" criada com sucesso.");
        Examples_ListNames(gDBConnectionHandle);
    }
    else
    {
        print("Falha ao abrir a base de dados \"example.db\".");
    }

    return 1;
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

## notas

## funções relacionadas

* [DB_Open](DB_Open): Abrir conexão com uma base de dados SQLite
* [DB_Close](DB_Close): Fechar a conexão com uma base de dados SQLite
* [DB_ExecuteQuery](DB_ExecuteQuery): Executar uma consulta SQL
* [DB_FreeResultSet](DB_FreeResultSet): Libertar memória do resultado
* [DB_GetRowCount](DB_GetRowCount): Obter número de linhas do resultado
* [DB_GetFieldCount](DB_GetFieldCount): Obter número de campos do resultado
* [DB_GetFieldName](DB_GetFieldName): Obter nome do campo pelo índice
* [DB_GetFieldString](DB_GetFieldString): Obter conteúdo de campo por índice
* [DB_GetFieldStringByName](DB_GetFieldStringByName): Obter conteúdo de campo por nome
* [DB_GetFieldInt](DB_GetFieldInt): Obter conteúdo inteiro por índice
* [DB_GetFieldIntByName](DB_GetFieldIntByName): Obter conteúdo inteiro por nome
* [DB_GetFieldFloat](DB_GetFieldFloat): Obter conteúdo float por índice
* [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Obter conteúdo float por nome
* [DB_GetMemHandle](DB_GetMemHandle): Obter handle de memória da base de dados
* [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Obter handle de memória do resultado
* [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): Obter número de conexões abertas (debug)
* [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): Obter número de resultados abertos (debug)
