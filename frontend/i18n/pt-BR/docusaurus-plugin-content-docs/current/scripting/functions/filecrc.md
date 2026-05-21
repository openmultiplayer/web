---
title: filecrc
sidebar_label: filecrc
description: "Retorne o valor CRC de 32 bits de um arquivo."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Retorne o valor CRC de 32 bits de um arquivo.

| Nome | Descrição |
| ---------------- | --------------------- |
| const filename[] | O nome do arquivo. |

## Retornos

O valor CRC de 32 bits do arquivo ou **0** se o arquivo não puder ser aberto.

## Exemplos

```c
new crc = filecrc("file.txt");

if (crc)
{
    // Sucesso
    printf("CRC value = %d", crc);
}
else
{
    // Erro
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```
## Notas

:::tip

- O valor CRC é uma medida útil para verificar se o conteúdo de um arquivo foi alterado durante a transmissão ou se foi editado (desde que o valor CRC do arquivo original tenha sido salvo).
- O valor CRC retornado por esta função é o mesmo usado nos arquivos ZIP (PKZip, WinZip) e nos utilitários e formatos de arquivo "SFV".

:::

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
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
