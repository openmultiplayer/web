---
title: fflush
sidebar_label: fflush
description: "Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas)."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas). Na verdade, apenas chama [flength](flength) pois isso precisa forçar um flush para ser preciso.

| Nome | Descrição |
| ----------- | -------------------------------------------- |
| File:handle | O identificador do arquivo. (retornado por fopen). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. (Identificador de arquivo inválido)

## Exemplos

```c
// Abra "file.txt" no modo "somente acréscimo"
new File:handle = fopen("file.txt", io_append);

// Verifique se o arquivo está aberto
if (handle)
{
    // Sucesso

    // Anexar "Isto é um texto.\r\n"
    fwrite(handle, "This is a text.\r\n");

    fflush(handle);

    // Feche o arquivo
    fclose(handle);
}
else
{
    // Erro
    print("The file \"file.txt\" does not exists, or can't be opened.");
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
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
