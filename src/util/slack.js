const { fetchUsersFromTeam } = require('../services/slack/client');

export const decodeUsernames = async (ids) => {
    const users = await fetchUsersFromTeam().catch((error) => {
      console.log('Error: ', error);
    });

    const userdata = users.filter((user) => {
      return ids.includes(user.id);
    });

    const usernames = userdata.map((user) => {
      return user.name;
    });

    return usernames;
}
