import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Телефон' },
      { id: 2, name: 'Ноутбук' },
      { id: 3, name: 'Монитор' },
      { id: 4, name: 'Смартфон' },
      { id: 5, name: 'Компьютер' },
    ]
    this._brands = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Samsung' },
      { id: 3, name: 'Xiaomi' },
      { id: 4, name: 'Huawei' },
      { id: 5, name: 'Google' },
    ]
    this.device = [
      {
        id: 1,
        name: 'iPhone 12 Pro Max',
        price: 100000,
        rating: 5,
        img: 'https://storage.yandexcloud.net/itech-media/images/products/2022/9/786de063158e11ecb2c03cecef20832b_465c3607159b11ecb2c03cecef20832b.png',
        typeId: 1,
        brandId: 1,
        info: {
          screenSize: '6.5" OLED',
          processor: 'A15 Bionic',
          memory: '64GB',
        },
      },
      {
        id: 1,
        name: 'iPhone 13 Pro Max',
        price: 120000,
        rating: 5,
        img: 'https://storage.yandexcloud.net/itech-media/images/products/2022/9/786de063158e11ecb2c03cecef20832b_465c3607159b11ecb2c03cecef20832b.png',
        typeId: 1,
        brandId: 1,
        info: {
          screenSize: '6.5" OLED',
          processor: 'A15 Bionic',
          memory: '64GB',
        },
      },
      {
        id: 1,
        name: 'iPhone 14 Pro Max',
        price: 140000,
        rating: 4,
        img: 'https://storage.yandexcloud.net/itech-media/images/products/2022/9/786de063158e11ecb2c03cecef20832b_465c3607159b11ecb2c03cecef20832b.png',
        typeId: 1,
        brandId: 1,
        info: {
          screenSize: '6.5" OLED',
          processor: 'A15 Bionic',
          memory: '64GB',
        },
      },     
      {
        id: 1,
        name: 'iPhone 14 Pro Max',
        price: 140000,
        rating: 3,
        img: 'https://storage.yandexcloud.net/itech-media/images/products/2022/9/786de063158e11ecb2c03cecef20832b_465c3607159b11ecb2c03cecef20832b.png',
        typeId: 1,
        brandId: 1,
        info: {
          screenSize: '6.5" OLED',
          processor: 'A15 Bionic',
          memory: '64GB',
        },
      },     
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    console.log('Выбранный бренд:', brand); 
    this._selectedBrand = brand;
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
