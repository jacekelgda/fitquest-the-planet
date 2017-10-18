import { Router } from 'express'
import { fetchUsers } from '../services/slack/client'
import composeGetUsers from './users'

const router = new Router()

composeGetUsers({fetchUsers}).applyToRouter(router)
