FROM golang:alpine

WORKDIR /server

ADD . .

RUN go build -o server.exe ./server/

ENTRYPOINT [ "/server/server.exe" ]