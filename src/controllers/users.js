import composeApplyToRouter from './composeApplyToRouter'

const composeGetUsers = ({ fetchUsers }) => { 
    async function getUsers(req, res) {
      const token = await fetchUsers()
      // give reponse at this is controller
    }

    getUsers.applyToRouter = composeApplyToRouter({ method: 'get', path: '/users' })
    return getUsers
}

export default composeGetUsers
