const axios = require('axios')
const { getNerveInstance, options } = require('../nats-ss')

exports.getServerOptions = async (req, res) => {
  if (options.server.split('@').length > 1) {
    options.server = `nats://${options.server.split('@')[1]}`
  }
  res.status(200).send(options)
}

exports.setServerOptions = async (req, res) => {
  const { host, port, monitoringHost, monitoringPort } = req.body
  try {
    const resp = await axios({
      method: 'get',
      baseURL: `http://${monitoringHost}:${monitoringPort}/`,
      url: '/streaming/serverz',
      headers: { Accept: 'application/json' },
      proxy: false,
    })
    updateOptions(resp.data, host, port, monitoringHost, monitoringPort)
    res.status(200).send({ options, data: resp.data })
  } catch (err) {
    console.log({ err })
    res.status(500).send({ status: 'error' })
  }
}

function updateOptions(data, host, port, monitoringHost, monitoringPort) {
  ;(options.server = `nats://${host}:${port}`),
    (options.monitor = `http://${monitoringHost}:${monitoringPort}`),
    (options.cluster = data.cluster_id)
}
