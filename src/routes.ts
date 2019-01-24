import { EmailController } from './controller/EmailController'

export const Routes = [
  {
    method: 'get',
    route: '/email',
    controller: EmailController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/email/:id',
    controller: EmailController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/email',
    controller: EmailController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/email/:id',
    controller: EmailController,
    action: 'remove',
  },
]
