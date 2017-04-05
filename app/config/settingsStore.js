export default class SettingsStore {
  constructor() {
    this.splashTime = 5000;
    this.splashImg = require('../images/splash.png')
  }

  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}