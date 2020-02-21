import * as Yup from 'yup'
import Recipients from '../models/Recipients'

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object(req.body).shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' })
    }

    const recipientsExists = await Recipients.findOne({
      where: { name: req.body.name },
    })

    if (recipientsExists) {
      return res.status(400).json({ error: 'Recipient already exists' })
    }

    const recipients = await Recipients.create(req.body)
    return res.json(recipients)
  }

  async update(req, res) {
    const schema = Yup.object(req.body).shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      cep: Yup.string(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' })
    }

    const { name } = req.body

    const recipients = await Recipients.findByPk(req.params.id)

    if (name && name !== recipients.name) {
      const recipientsExists = await Recipients.findOne({ where: { name } })

      if (recipientsExists) {
        return res.status(400).json({ error: 'Recipientss already exists' })
      }
    }

    const updatedRecipients = await recipients.update(req.body)

    return res.json(updatedRecipients)
  }
}

export default new RecipientsController()
