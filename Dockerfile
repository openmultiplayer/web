FROM golang:latest

RUN rm /bin/sh && ln -s /bin/bash /bin/sh && \
    echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Node
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.13.2

RUN mkdir -p $NVM_DIR && \
    curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install prisma command for automatic migrations.
RUN npm install --global prisma

# Install Taskfile
RUN sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b /usr/local/bin

WORKDIR /server

ADD . .

# Install prisma client code generation tool and generate prisma bindings
RUN task generate

# Build the docs search index
RUN task docsindex

# Build the server binary
RUN task build

ENTRYPOINT [ "task", "production" ]
