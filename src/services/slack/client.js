const Slack = require('slack-node');

const fetchUsersFromChannel = (channelId) => {
  const slackClient = new Slack(process.env.slack_oauth_access_token);
  return new Promise((resolve, reject) => {
    const data = {
      channel: channelId
    };
    slackClient.api('channels.info', data, (err, response) => {
      if (response.ok === false) {
          reject(response.error);
      } else if (response.ok === true) {
          resolve(response.channel.members);
      }
    })
  })
}

const fetchUsersFromTeam = () => {
  const slackClient = new Slack(process.env.slack_oauth_access_token);
  return new Promise((resolve, reject) => {
    slackClient.api('users.list', {}, (err, response) => {
      if (response.ok === false) {
          reject(response.error);
      } else if (response.ok === true) {
          resolve(response.members);
      }
    })
  })
}

module.exports = {
  fetchUsersFromChannel,
  fetchUsersFromTeam
}
