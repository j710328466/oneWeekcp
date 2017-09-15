$youziku.load("body", "b247a4899ca34bd29da8076da3ddafe4", "jdzhonyuanjian")
$youziku.draw()
var mixin = {
  created () {
    var currentTime = parseInt(new Date().getTime()/1000)
    console.log(currentTime);
    var leftTime = timer - currentTime
        ,d = parseInt(leftTime / 60 / 60 / 24)
        ,h = parseInt(leftTime / 60 / 60 % 24)
        ,m = parseInt(leftTime / 60 % 60)
        this.d = d
        this.h = h
        this.m = m
        console.log(leftTime);

        console.log(this.d, h, m)
  },
  methods: {
    isWeiXin: function() {
      var ua = window.navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return false
      } else {
        return true
      }
    }
  }
}
