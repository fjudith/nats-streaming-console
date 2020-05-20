# Nats Monitor

A web console for Nats Streaming Server.

This repository is forked from [nats-streaming-console](https://github.com/KualiCo/nats-streaming-console).

# Install

```
npm -g install nats-streaming-console

nats-streaming-console
```

For other installation method, please read the below.

## Dashboard

<img src="https://s3-us-west-2.amazonaws.com/co.kuali.docs/nsc-ss-home.png" width="512" height="384" />

## Clients

<img src="https://s3-us-west-2.amazonaws.com/co.kuali.docs/nsc-ss-clients.png" width="512" height="384" />

## Channels

<img src="https://s3-us-west-2.amazonaws.com/co.kuali.docs/nsc-ss-channels.png" width="512" height="384" />

## Server

<img src="https://s3-us-west-2.amazonaws.com/co.kuali.docs/nsc-ss-server.png" width="512" height="384" />

## Store

<img src="https://s3-us-west-2.amazonaws.com/co.kuali.docs/nsc-ss-store.png" width="512" height="384" />

# Configuration

```
env STAN_URL=nats://127.0.0.1:4222 STAN_MONITOR_URL=http://127.0.0.1:8222 STAN_CLUSTER=my-cluster nats-streaming-console

```

# Usage

There are four ways other than npm to use Nats Monitor:

## Docker

The docker image is available from dockerhub
[https://hub.docker.com/r/mozgoo/nats-streaming-console](https://hub.docker.com/r/mozgoo/nats-streaming-console)

## Electron App

Coming soon

## Checkout and run the Codes!

If you just want to build and run it. That is pretty easy too. You will need git and nodejs.

```sh
git clone https://github.com/KualiCo/nats-streaming-console.git
cd nats-streaming-console
yarn install
yarn start
```

Good luck. Let me know if something goes wrong.
