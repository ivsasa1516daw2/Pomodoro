(function(app) {
  app.Temps = Temps;

  function Temps(min, sec) {
    this.min = min;
    this.sec = sec;
  }
})(window.app || (window.app = {}));
