FROM node:9-alpine

ENV USER_HOME=/home/nats-streaming-console

USER root

RUN addgroup -g 1022 nats-streaming-console && \
    adduser -u 1022 -D -g '' -h ${USER_HOME} -G nats-streaming-console nats-streaming-console

USER nats-streaming-console

WORKDIR ${USER_HOME}

COPY --chown="nats-streaming-console:nats-streaming-console" package.json ${USER_HOME}/
COPY --chown="nats-streaming-console:nats-streaming-console" yarn.lock ${USER_HOME}/
COPY --chown="nats-streaming-console:nats-streaming-console" public ${USER_HOME}/public
COPY --chown="nats-streaming-console:nats-streaming-console" server ${USER_HOME}/server
COPY --chown="nats-streaming-console:nats-streaming-console" src ${USER_HOME}/src

RUN yarn install
RUN yarn build

EXPOSE 8282

CMD ["node", "server"]