---
title: frename
sidebar_label: frename
description: "Renomeie um arquivo."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Renomeie um arquivo.

| Nome | Descrição |
| --------------- | --------------------------------------------------------------- |
| const oldname[] | O nome atual do arquivo, incluindo opcionalmente um caminho completo. |
| const newname[] | O novo nome do arquivo, incluindo opcionalmente um caminho completo.     |

## Retornos

**true** em caso de sucesso, **false** em caso de falha.

## Exemplos

```c
if (frename("example.txt", "file.txt"))
{
    // Sucesso
    printf("File \"example.txt\" renamed to \"file.txt\" successfully.");
}
else
{
    // Erro
    print("The file \"example.txt\" does not exists, or can't be opened.");
}
```
## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
