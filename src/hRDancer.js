var HRDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hr');
};

HRDancer.prototype = Object.create(Dancer.prototype);
HRDancer.prototype.constructor = HRDancer;
HRDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var randY = $("body").height() / 10 * (2 * Math.random() - 1);
  var randX = $("body").width() / 10 * (2 * Math.random() - 1);


  setTimeout(function(){
    Dancer.prototype.setPosition.call(this, this.$node.position().top + randY,
    this.$node.position().left +  randX);
  }.bind(this), 50);
};

// bill

  // var randY = $("body").height() / 10 * Math.random();
  // var randX = $("body").width() / 10 * Math.random(); 


  // setTimeout(function(){
  //   Dancer.prototype.setPosition.call(this, this.$node.position().top + randY,
  //   this.$node.position().left +  randX);
  // }.bind(this), 1000);

  // michael

  // setTimeout(function(){
  //   console.log(this.$node.position().top);
  //   debugger;
  //   Dancer.prototype.setPosition.call(this, randY, randX);
  // }.bind(this), 1000);