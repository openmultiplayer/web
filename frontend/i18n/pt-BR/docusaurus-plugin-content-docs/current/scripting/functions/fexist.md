---
title: fexist
sidebar_label: fexist
description: "Verifica se existe um arquivo específico no diretório scriptfiles."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Verifica se existe um arquivo específico no diretório scriptfiles.

| Nome | Descrição |
| ---------------- | --------------------- |
| const filename[] | O nome do arquivo. |

## Retornos

O número de arquivos que correspondem ao padrão.

## Exemplos

```c
// Verifique se "file.txt" existe
if (fexist("file.txt"))
{
    // Sucesso

    // Imprima o sucesso
    print("\"file.txt\" exists.");
}
else
{
    // Erro
    print("\"file.txt\" does not exist.");
}
```
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
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
