import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Email } from '../entity/Email'

export class EmailController {
  private emailRepository = getRepository(Email)

  async all(_request: Request, _response: Response, _next: NextFunction) {
    return this.emailRepository.find()
  }

  async one(request: Request, _response: Response, _next: NextFunction) {
    return this.emailRepository.findOne(request.params.id)
  }

  async save(request: Request, _response: Response, _next: NextFunction) {
    return this.emailRepository.save(request.body)
  }

  async remove(request: Request, _response: Response, _next: NextFunction) {
    let emailToRemove = await this.emailRepository.findOne(request.params.id)
    await this.emailRepository.remove(emailToRemove)
  }
}
