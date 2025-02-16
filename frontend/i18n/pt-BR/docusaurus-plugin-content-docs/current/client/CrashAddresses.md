---
title: "Endereços de Crash"
sidebar_label: "Endereços de Crash"
description: Guia de endereços comuns de crash.
---

A lista abaixo contém alguns endereços comuns de crash que você pode usar para ajudar a rastrear o problema e evitar que ele ocorra no futuro. Na maioria dos casos, crashes do cliente ocorrem devido a um problema no script. Entretanto, vale mencionar que o SA-MP está bastante estável atualmente.

## Endereços de Crash do Cliente

| FREQUÊNCIA | ENDEREÇO | CAUSA | SOLUÇÃO |
|------------|----------|-------|----------|
| Raro | 0x00000000 | SA-MP não está inicializando. | Reinstale o jogo, certifique-se que o modo singleplayer funciona. Se você tiver mods instalados, remova-os |
| Raro | 0x006E3D17 | Relacionado à skin. Frequentemente ocorre quando se muda a skin de um jogador que está em um veículo, ou que está entrando ou saindo de um. | Certifique-se que o jogador está a pé antes de mudar sua skin. |
| Raro | 0x0058370A | Difícil de rastrear. Parece estar relacionado ao veículo/câmera. Ocorre quando o script tenta colocar o jogador em um veículo. O veículo para o qual o jogador está sendo teleportado ainda não está disponível e/ou renderizado no mundo. | Espere alguns milissegundos antes de teleportar um jogador para um veículo recém-criado. Outra solução possível seria usar SetCameraBehindPlayer antes de teleportá-los para o veículo. |
| Raro | 0x0040F64C | Problema no Windows 7/Vista relacionado a permissões. Problema na versão do instalador que o cliente SA-MP usa. | Atualize para SA-MP 0.3.7. Se ainda ocorrer, renomeie seu diretório do GTASA. |
| Raro | 0x0059F8B4 | Ocorre quando o cliente falha ao carregar objetos do SA-MP. Geralmente é um problema com um arquivo essencial, o samp.img está faltando. | Reinstale o cliente. Tente executar o instalador como Administrador se estiver usando Windows Vista/7. |
| Raro | 0x00746929 OU 0x0081214A | Configuração do lado do cliente mal configurada. | Encerre seu "gta_sa.exe" usando o Gerenciador de Tarefas |
| Frequente | 0x007F0BF7 | Relacionado a modificações de veículos. Frequentemente causado quando o servidor tenta colocar uma modificação inválida em um veículo (por exemplo, NOS ou aerofólios em uma moto). Outras causas podem ser mods ruins de veículos do lado do cliente. | Existem vários scripts lançados nesses fóruns que possuem verificação de erros para isso. |
| Frequente | 0x00544BC8 | Relacionado a objetos. Geralmente ocorre quando muitos objetos estão sendo exibidos para o cliente, ou seja, mais do que ele pode lidar. | Uma solução prática pode ser usar um streamer de objetos. Muitos streamers nesses fóruns vêm com configurações para diminuir a quantidade máxima de objetos visíveis exibidos para um jogador em qualquer momento |
| Frequente | 0x00415D47 OU 0x00536DF4 | Relacionado a objetos. Geralmente ocorre quando muitas texturas de objetos são carregadas para o cliente. | Problema de baixo nível que é difícil de rastrear e corrigir. Acredita-se que esteja relacionado a colisões. Ocorre aleatoriamente dependendo do objeto. Tente remover grupos de objetos e use o processo de eliminação para estabelecer quais objetos estão causando o problema e removê-los do seu modo. |
| Raro | 0x593C6F | Quando o número de objetos de roubo (que você pega ao roubar uma casa) é muito alto. | Reduza o número de objetos de roubo |

## Códigos de Aviso do Chat

| MENSAGEM | CAUSA | SOLUÇÃO |
|----------|-------|----------|
| Exception 0xC0000005 at 0x5E5815 | Difícil de rastrear. O método para o qual este endereço aponta faz várias coisas. Ele processa a mistura de animações com base na superfície em que o ped está e lida com áudio, e é chamado logo após uma função que te _dá_ armas... Talvez o que aconteceu aqui é que algum evento invocado por script ocorreu exatamente no momento em que você estava entrando em um veículo (por exemplo, recebendo uma arma, teleportando ou algo similar). | - |
| Exception 0x0000005 at 0x534134 | Problema com níveis de acesso do Windows 7/Vista | Executar o SA-MP como administrador parece resolver o problema. |
| Exception 0xC0000005 at 0x544BC8 | Ver 0x00544BC8 | Ver 0x00544BC8 |
| Exception 0xC0000005 at 0x536DF4 | Ver 0x00544BC8 | Ver 0x00544BC8 |
| Exception 0xC0000005 at 0x7F120E | Modificação inválida de veículo aplicada | Você instalou modificações no Handling.cfg e Vehicles.ide porque o SAMP não carrega estes arquivos, pois se você ajustar as configurações, poderia andar mais rápido que outros. Em resumo, o SAMP não carregará suas configurações modificadas de veículo. |
| Exception At Address: 0x0040FB80 | Crash comum em computadores Windows 7 x64. Acontece quando você executa em modo de compatibilidade do Windows 2000, Windows XP ou Windows Vista (qualquer service pack). | Corrija desabilitando a compatibilidade e executando gta_sa.exe como administrador. |
| Exception At Address:0x0071A708 | Desconhecido | Desabilite Legend em Options > Display Options. |
| Exception at Address: 0x004DFE92 | Configurações corrompidas | Delete seu arquivo gta_sa.set na pasta Meus Documentos. |