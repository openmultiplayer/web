**This guide contains a comprehensive guide on installing an open.mp server on Ubuntu or another Debian based Linux.
Whether you're a beginner or just looking to refresh your knowledge, this guide may have something useful for you!**

:::warning

If you are using the SA:MP server and didn't convert to open.mp yet, **[please stop here and read this guide first.](https://www.open.mp/docs/server/Installation)**

:::

:::note

If you are using the FCNPC plugin, please stop for now because this plugin does not work for open.mp currently.

:::

## Prerequisites

Before starting, you should have:

- A machine running Ubuntu (20.04 or later recommended) or another Debian based Linux;
- WinSCP or Filezilla for file transfers;
- PuTTY or your hosting SSH solution;
- libssl1.1:i386;

:::note

If you install WinSCP, the installer will prompt you to install PuTTY!
It's up to you if you want to install it or not, but you can always download it later!

:::

## Phase 1: Preparing the Environment

1. Connecting via SSH:
   - Use PuTTY or your hosting SSH solution to connect to your instance.

:::note

Seek online guides or your hosting provider's documentation if you're unsure how to connect to your Linux Instance.

:::

2. Updating your Linux Instance:

   - Before proceeding, let's ensure your system is up to date by running:

   ```
   sudo apt update
   ```

   ```
   sudo apt upgrade
   ```
   
3. Install libssl1.1:i386:
   
   - Without this, the server won't be able to run properly:
     
   ```
   wget http://security.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.24_i386.deb
   sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2.24_i386.deb
   ```

4. Creating a secure service account:

   - For security reasons, we should create a dedicated service account without a home directory:

   ```
   sudo useradd -M svc-omp-server
   ```

5. Locking the service sccount:

   - Let's prevent the service account from being used for login:

   ```
   sudo usermod -L svc-omp-server
   ```

6. Creating a directory for the server files:

   - We will use the /opt directory, this is the standard location for third-party applications:

   ```
   sudo mkdir /opt/omp-server
   ```

7. Setting permissions for the directory:

   - Changing the group of the directory to match the service account:

   ```
   sudo chgrp svc-omp-server /opt/omp-server
   ```

   - Setting the g+s flag so new files inherit the correct group and remove access for others:

   ```
   sudo chmod g+s /opt/omp-server
   ```

   ```
   sudo chmod o-rwx /opt/omp-server
   ```

<hr />

## Phase 2: Installing open.mp Server Files

7. Let's navigate to the server directory:

   - We need to move to the /opt/omp-server directory where the server will be stored:

   ```
   cd /opt/omp-server
   ```

8. Downloading the open.mp server files:

   - Download the latest release of the open.mp server:

   ```
   sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz
   ```

:::warning

**You should ALWAYS check for the latest release at the open.mp GitHub Releases page!**
[https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases)

:::

9. Extracting the server files:

   - Once downloaded, extract the files:

   ```
   sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz
   ```

<hr />

## Phase 3: Configuring and Starting the Server

10. Installing the required x86 libraries:

    - Since the server runs as a 32-bit application, you need to enable 32-bit architecture support:

    ```
    sudo dpkg --add-architecture i386
    ```

    ```
    sudo apt update
    ```

    ```
    sudo apt install libc6:i386
    ```

11. Making the server executable:

    - Change the permissions so the server can be executed (only required once!):

    ```
    cd /opt/omp-server/Server/
    ```

    ```
    sudo chmod +x omp-server
    ```

12. Starting the server:

    - Use the following command to start the server in the background:

    ```
    nohup ./omp-server &
    ```

    - The terminal will output a process ID (PID). Write this number down for future reference.

<hr />

## Phase 4: Managing the Server

13. Stopping the server:

    - To stop the server, use the PID from step 12 and run:

    ```
    sudo kill <PID>
    ```

14. Finding the Process ID (if forgotten):

    - If you forget the process ID, run:

    ```
    top
    ```

    - Look for the omp-server process in the list, note the PID, press 'Q' to quit, and then kill the process as shown in step 13.

<hr />

## Phase 5: Uploading Your Gamemode and Files

15. Upload your custom gamemodes and scripts:
    - Use WinSCP or Filezilla to transfer your gamemodes and scripts to the /opt/omp-server directory.
      Important: Make sure to use .so files for Linux plugins, as .dll files are only supported on Windows.

## Help

If you're still experiencing issues setting up the server, join the official open.mp Discord server: [https://discord.gg/samp](https://discord.gg/samp)

Post your question in the [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) channel and mention this guide so we can improve it.
