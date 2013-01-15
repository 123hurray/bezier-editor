(function($){
  $.fx.step.path = function(fx) {
    var css = fx.end.css( 1 - fx.pos );
    fx.elem.style.top = css.top;
    fx.elem.style.left = css.left;
  };
})(jQuery); 
   var V = {
    rotate: function(p, degrees) {
      var radians = degrees * Math.PI / 180,
        c = Math.cos(radians),
        s = Math.sin(radians);
      return [c*p[0] - s*p[1], s*p[0] + c*p[1]];
    },
    scale: function(p, n) {
      return [n*p[0], n*p[1]];
    },
    add: function(a, b) {
      return [a[0]+b[0], a[1]+b[1]];
    },
    minus: function(a, b) {
      return [a[0]-b[0], a[1]-b[1]];
    }
  };
var bezier = function( params) {
	//params.start.length = 0.3333;
	//params.end.length = 0.3333;
    this.start = params.start;
    this.end = params.end;
	this.p2 = params.c1;
	this.p3 = params.c2;

    this.f1 = function(t) { return (t*t*t); };
    this.f2 = function(t) { return (3*t*t*(1-t)); };
    this.f3 = function(t) { return (3*t*(1-t)*(1-t)); };
    this.f4 = function(t) { return ((1-t)*(1-t)*(1-t)); };

    /* p from 0 to 1 */
    this.css = function(p) {
      var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4=this.f4(p), css = {};
      css.x = this.x = ( this.start[0]*f1 + this.p2[0]*f2 + this.p3[0]*f3 + this.end[0]*f4 +.5 )|0;
      css.y = this.y = ( this.start[1]*f1 + this.p2[1]*f2 + this.p3[1]*f3 + this.end[1]*f4 +.5 )|0;
      css.left = css.x + "px";
      css.top = css.y + "px";
      return css;
    };
  };
