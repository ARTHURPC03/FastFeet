import Sequelize from 'sequelize'

import User from '../app/models/User'
import Reicipients from '../app/models/Recipients'

import databaseConfig from '../config/database'

const models = [User, Reicipients]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models.map(model => model.init(this.connection))
  }
}

export default new Database()
