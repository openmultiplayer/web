---
title: DB_GetDatabaseConnectionCount
sidebar_label: DB_GetDatabaseConnectionCount
description: Obtém o número de conexões de banco de dados abertas para fins de depuração.
keywords:
  - sqlite
tags: ["sqlite"]
---

## Descrição

A função obtém o número de conexões de banco de dados abertas para fins de depuração.

A função não tem parâmetros.

## Exemplos

```c
printf("Contagem de conexões do banco de dados: %d", DB_GetDatabaseConnectionCount());
```

## Funções Relacionadas

- [DB_Open](DB_Open): Abre uma conexão com um banco de dados SQLite
- [DB_Close](DB_Close): Fecha a conexão com um banco de dados SQLite
- [DB_ExecuteQuery](DB_ExecuteQuery): Consulta um banco de dados SQLite
- [DB_FreeResultSet](DB_FreeResultSet): Libera a memória do resultado de uma DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): Obtém o número de linhas em um resultado
- [DB_SelectNextRow](DB_SelectNextRow): Move para a próxima linha
- [DB_GetFieldCount](DB_GetFieldCount): Obtém o número de campos em um resultado
- [DB_GetFieldName](DB_GetFieldName): Retorna o nome de um campo em um índice específico
- [DB_GetFieldString](DB_GetFieldString): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
- [DB_GetFieldStringByName](DB_GetFieldStringByName): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
- [DB_GetFieldInt](DB_GetFieldInt): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
- [DB_GetFieldIntByName](DB_GetFieldIntByName): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
- [DB_GetFieldFloat](DB_GetFieldFloat): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
- [DB_GetMemHandle](DB_GetMemHandle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db_open.
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Obtém o handle de memória para uma consulta SQLite que foi executada com DB_ExecuteQuery.
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): A função obtém o número de resultados de banco de dados abertos.