---
title: fmatch
sidebar_label: fmatch
description: "Encontre um nome de arquivo que corresponda a um padrão."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Encontre um nome de arquivo que corresponda a um padrão.

| Nome | Descrição |
| ------------------------ | ------------------------------------------------------------------------ |
| const filename[] | A string para armazenar o resultado, retornada como uma string compactada.           |
| const pattern[] | O padrão que deve ser correspondido. Pode conter curingas.               |
| index | O número do arquivo, caso haja múltiplas correspondências. (padrão: 0) |
| size = sizeof (filename) | O tamanho máximo do nome do parâmetro |

## Retornos

**true** – Sucesso (o arquivo corresponde ao padrão)

**false** - Falha (o arquivo não existe ou o padrão não corresponde)

## Exemplos

```c
if (fmatch("file.txt", "*.txt"))
{
    print("The file matches the pattern.");
}
else
{
    print("The file \"file.txt\" does not exists, or pattern does not match.");
}
```
## Notas

:::warning

Esta função funciona no servidor open.mp, mas não no servidor SA:MP.

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fread](fread): Leia um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Descarregue um arquivo no disco (garanta que todas as gravações sejam concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
