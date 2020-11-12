FROM golang:latest

RUN rm /bin/sh && ln -s /bin/bash /bin/sh && \
    echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Node
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 12.18.3

RUN mkdir -p $NVM_DIR && \
    curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

WORKDIR /server

ADD . .

RUN go get github.com/prisma/prisma-client-go@master
RUN prisma-client-go generate
RUN go build -o server.exe ./server/

# Install prisma command for automatic migrations.
RUN npm install --global @prisma/cli

ENTRYPOINT [ "/server/server.exe" ]