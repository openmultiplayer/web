**Este guia contém um guia abrangente sobre como instalar um servidor open.mp no Ubuntu ou em outro Linux baseado em Debian.
Seja você um iniciante ou apenas queira atualizar seus conhecimentos, este guia pode ter algo útil para você!**

:::warning

Se você está usando o servidor SA:MP e ainda não converteu para open.mp, **[por favor pare aqui e leia este guia primeiro.](https://www.open.mp/docs/server/Installation)**

:::

:::note

Se você está usando o plugin FCNPC, por favor pare por enquanto porque este plugin não funciona para open.mp atualmente.

:::

## Pré-requisitos

Antes de começar, você deve ter:

- Uma máquina executando Ubuntu (20.04 ou posterior recomendado) ou outro Linux baseado em Debian;
- WinSCP ou Filezilla para transferências de arquivos;
- PuTTY ou sua solução SSH de hospedagem;

:::note

Se você instalar o WinSCP, o instalador solicitará que você instale o PuTTY!
Depende de você se deseja instalá-lo ou não, mas você sempre pode baixá-lo mais tarde!

:::

## Fase 1: Preparando o Ambiente

1. Conectando via SSH:
   - Use o PuTTY ou sua solução SSH de hospedagem para se conectar à sua instância.

:::note

Procure guias online ou a documentação do seu provedor de hospedagem se não tiver certeza de como se conectar à sua Instância Linux.

:::

2. Atualizando sua Instância Linux:

   - Antes de prosseguir, vamos garantir que seu sistema esteja atualizado executando:

   ```
   sudo apt update
   ```

   ```
   sudo apt upgrade
   ```

3. Criando uma conta de serviço segura:

   - Por razões de segurança, devemos criar uma conta de serviço dedicada sem um diretório home:

   ```
   sudo useradd -M svc-omp-server
   ```

4. Bloqueando a conta de serviço:

   - Vamos impedir que a conta de serviço seja usada para login:

   ```
   sudo usermod -L svc-omp-server
   ```

5. Criando um diretório para os arquivos do servidor:

   - Usaremos o diretório /opt, este é o local padrão para aplicações de terceiros:

   ```
   sudo mkdir /opt/omp-server
   ```

6. Definindo permissões para o diretório:

   - Alterando o grupo do diretório para corresponder à conta de serviço:

   ```
   sudo chgrp svc-omp-server /opt/omp-server
   ```

   - Definindo a flag g+s para que novos arquivos herdem o grupo correto e removendo o acesso para outros:

   ```
   sudo chmod g+s /opt/omp-server
   ```

   ```
   sudo chmod o-rwx /opt/omp-server
   ```

<hr />

## Fase 2: Instalando os Arquivos do Servidor open.mp

7. Vamos navegar para o diretório do servidor:

   - Precisamos ir para o diretório /opt/omp-server onde o servidor será armazenado:

   ```
   cd /opt/omp-server
   ```

8. Baixando os arquivos do servidor open.mp:

   - Baixe a versão mais recente do servidor open.mp:

   ```
   sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz
   ```

:::warning

**Você deve SEMPRE verificar a versão mais recente na página de Releases do GitHub do open.mp!**
[https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases)

:::

9. Extraindo os arquivos do servidor:

   - Uma vez baixado, extraia os arquivos:

   ```
   sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz
   ```

<hr />

## Fase 3: Configurando e Iniciando o Servidor

10. Instalando as bibliotecas x86 necessárias:

    - Como o servidor roda como uma aplicação de 32 bits, você precisa habilitar o suporte para arquitetura de 32 bits:

    ```
    sudo dpkg --add-architecture i386
    ```

    ```
    sudo apt update
    ```

    ```
    sudo apt install libc6:i386
    ```

11. Tornando o servidor executável:

    - Altere as permissões para que o servidor possa ser executado (necessário apenas uma vez!):

    ```
    cd /opt/omp-server/Server/
    ```

    ```
    sudo chmod +x omp-server
    ```

12. Iniciando o servidor:

    - Use o seguinte comando para iniciar o servidor em segundo plano:

    ```
    nohup ./omp-server &
    ```

    - O terminal exibirá um ID de processo (PID). Anote este número para referência futura.

<hr />

## Fase 4: Gerenciando o Servidor

13. Parando o servidor:

    - Para parar o servidor, use o PID do passo 12 e execute:

    ```
    sudo kill <PID>
    ```

14. Encontrando o ID do Processo (se esquecido):

    - Se você esquecer o ID do processo, execute:

    ```
    top
    ```

    - Procure pelo processo omp-server na lista, anote o PID, pressione 'Q' para sair e então finalize o processo conforme mostrado no passo 13.

<hr />

## Fase 5: Enviando Seu Gamemode e Arquivos

15. Envie seus gamemodes e scripts personalizados:
    - Use o WinSCP ou Filezilla para transferir seus gamemodes e scripts para o diretório /opt/omp-server.
      Importante: Certifique-se de usar arquivos .so para plugins Linux, pois arquivos .dll são suportados apenas no Windows.

## Ajuda

Se você ainda estiver enfrentando problemas para configurar o servidor, junte-se ao servidor Discord oficial do open.mp: [https://discord.gg/samp](https://discord.gg/samp)

Poste sua pergunta no canal [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) e mencione este guia para que possamos melhorá-lo.
