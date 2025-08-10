---
title: diskfree
sidebar_label: diskfree
description: Retorna o espaço livre em disco.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

<LowercaseNote />

## Descrição

Retorna o espaço livre em disco.

| Nome                | Descrição                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| const volume[] = "" | O nome do volume em sistemas que suportam múltiplos discos ou cartões de memória. Em sistemas com volume único, é opcional. |

## Retornos

A quantidade de espaço livre em KiB.

## Exemplos

```c
new freeSpace = diskfree();

printf("Espaço livre = %d KiB", freeSpace);
```

## Observações

:::tip

O tamanho máximo suportado é de 2048 GiB (2 terabytes).

:::

## Funções Relacionadas

- [fopen](fopen): Abre um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Cria um arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Escreve em um arquivo.
- [fputchar](fputchar): Insere um caractere em um arquivo.
- [fgetchar](fgetchar): Obtém um caractere de um arquivo.
- [fblockwrite](fblockwrite): Escreve blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Posiciona em um caractere específico do arquivo.
- [flength](flength): Obtém o tamanho do arquivo.
- [fexist](fexist): Verifica se um arquivo existe.
- [fmatch](fmatch): Verifica se padrões correspondem a um nome de arquivo.
- [ftell](ftell): Obtém a posição atual no arquivo.
- [fflush](fflush): Descarrega o arquivo no disco (garante que todas as escritas sejam concluídas).
- [fstat](fstat): Retorna o tamanho e o timestamp de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [fattrib](fattrib): Define os atributos do arquivo.
- [fcreatedir](fcreatedir): Cria um diretório.