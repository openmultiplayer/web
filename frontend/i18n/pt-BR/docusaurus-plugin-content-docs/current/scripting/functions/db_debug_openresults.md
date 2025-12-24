---
title: db_debug_openresults
sidebar_label: db_debug_openresults
description: Obtém o número de resultados de banco de dados abertos
tags: ["sqlite"]
---

<LowercaseNote />

## Descrição

A função obtém o número de resultados de banco de dados abertos.

| Nome | Descrição |
| ---- | --------- |

## Funções Relacionadas

- [db_open](db_open): Abre uma conexão com um banco de dados SQLite
- [db_close](db_close): Fecha a conexão com um banco de dados SQLite
- [db_query](db_query): Consulta um banco de dados SQLite
- [db_free_result](db_free_result): Libera a memória do resultado de uma db_query
- [db_num_rows](db_num_rows): Obtém o número de linhas em um resultado
- [db_next_row](db_next_row): Move para a próxima linha
- [db_num_fields](db_num_fields): Obtém o número de campos em um resultado
- [db_field_name](db_field_name): Retorna o nome de um campo em um índice específico
- [db_get_field](db_get_field): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
- [db_get_field_assoc](db_get_field_assoc): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
- [db_get_field_int](db_get_field_int): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
- [db_get_field_assoc_int](db_get_field_assoc_int): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
- [db_get_field_float](db_get_field_float): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual
- [db_get_field_assoc_float](db_get_field_assoc_float): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
- [db_get_mem_handle](db_get_mem_handle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Obtém o handle de memória para uma consulta SQLite que foi executada com db_query.
- [db_debug_openfiles](db_debug_openfiles): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
