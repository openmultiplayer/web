---
title: Linux Server Installation
sidebar_label: Linux Server Installation
description: Comprehensive guide on installing an open.mp server on Ubuntu or another Debian based Linux.
---

**This guide contains a comprehensive guide on installing an open.mp server on Ubuntu or another Debian based Linux.
Whether you're a beginner or just looking to refresh your knowledge, this guide may have something useful for you!**

:::warning

If you are using the SA:MP server and didn't convert to open.mp yet, **[please stop here and read this guide first.](https://www.open.mp/docs/server/Installation)**

:::

:::tip

**Good news for FCNPC users!** The legacy FCNPC plugin has been replaced with the official **open.mp NPC component**, which provides the same functionality with better performance and native integration. Simply convert your code to the built-in NPC component instead.

:::

## Prerequisites

Before starting, you should have:

- A machine running Ubuntu (20.04 or later recommended) or another Debian based Linux;
- WinSCP or Filezilla for file transfers;
- PuTTY or your hosting SSH solution;

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

3. Creating a secure service account:
   - For security reasons, we should create a dedicated service account without a home directory:

   ```
   sudo useradd -M svc-omp-server
   ```

4. Locking the service account:
   - Let's prevent the service account from being used for login:

   ```
   sudo usermod -L svc-omp-server
   ```

5. Adding your user to the service group:
   - Add your current user to the svc-omp-server group so you can manage files:

   ```
   sudo usermod -aG svc-omp-server $USER
   ```

   :::warning

   You need to log out and log back in for group changes to take effect!

   :::

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

   - Give the group read, write, and execute permissions:

   ```
   sudo chmod g+rwx /opt/omp-server
   ```

   - Setting the g+s flag so new files inherit the correct group:

   ```
   sudo chmod g+s /opt/omp-server
   ```

   - Remove access for others:

   ```
   sudo chmod o-rwx /opt/omp-server
   ```

<hr />

## Phase 2: Installing open.mp Server Files

8. Let's navigate to the server directory:
   - We need to move to the /opt/omp-server directory where the server will be stored:

   ```
   cd /opt/omp-server
   ```

9. Downloading the open.mp server files:
   - Download the latest release of the open.mp server:

   ```
   sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz
   ```

:::warning

**You should ALWAYS check for the latest release at the open.mp GitHub Releases page!**
[https://github.com/openmultiplayer/open.mp/releases](https://github.com/openmultiplayer/open.mp/releases)

:::

10. Extracting the server files:
   - Once downloaded, extract the files:

   ```
   sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz
   ```

<hr />

## Phase 3: Configuring and Starting the Server

11. Installing the required packages:
    - Since the server runs as a 32-bit application, you need to enable 32-bit architecture support and install screen:

    ```
    sudo dpkg --add-architecture i386
    ```

    ```
    sudo apt update
    ```

    ```
    sudo apt install libc6:i386 screen
    ```

12. Making the server executable:
    - Change the permissions so the server can be executed (only required once!):

    ```
    cd /opt/omp-server/Server/
    ```

    ```
    sudo chmod +x omp-server
    ```

13. Starting the server:
    - Use screen to start the server in a detachable session as the service account:

    ```
    sudo -u svc-omp-server screen -dmS omp-server ./omp-server
    ```

    :::tip

    This creates a detached screen session named "omp-server" running as the service account. You can attach to it anytime to see the console!

    :::

<hr />

## Phase 4: Managing the Server

14. Viewing the server console:
    - To attach to the running server and see the console output:

    ```
    sudo -u svc-omp-server screen -r omp-server
    ```

    - To detach from the screen session (leave it running), press: `Ctrl+A` then `D`

15. Stopping the server:
    - Attach to the screen session (step 14), then stop the server gracefully by typing `/exit` in the console or pressing `Ctrl+C`
    - Alternatively, you can kill the screen session:

    ```
    sudo -u svc-omp-server screen -X -S omp-server quit
    ```

16. Checking if the server is running:
    - To see all screen sessions:

    ```
    sudo -u svc-omp-server screen -ls
    ```

<hr />

## Phase 5: Uploading Your Gamemode and Files

17. Upload your custom gamemodes and scripts:
    - Use WinSCP or Filezilla to transfer your gamemodes and scripts to the /opt/omp-server directory.
      Important: Make sure to use .so files for Linux plugins, as .dll files are only supported on Windows.

## Help

If you're still experiencing issues setting up the server, join the official open.mp Discord server: [https://discord.gg/samp](https://discord.gg/samp)

Post your question in the [#openmp-support](https://discord.com/channels/231799104731217931/966398440051445790) channel and mention this guide so we can improve it.
