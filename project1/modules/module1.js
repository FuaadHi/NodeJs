const PI = 3.14;
function piM(r) {
  this.r = r;
  this.outline = () => {
    return 2 * PI * this.r;
  };
  this.area = () => {
    return PI * this.r ** 2;
  };
}

module.exports = {
  PI,
  piM,
};
