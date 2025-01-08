const uuid = require('uuid')
const path = require('path');
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError');


class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        )
      }

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {

  }
  // по id получаем определенный девайс
  async getOne(req, res) {

  }
}

module.exports = new DeviceController()

