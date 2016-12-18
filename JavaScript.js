function Transport(name,speed){
  this.name=name;
  this.speed=0;
  this.colour='';
 };
Transport.prototype.Gcolour=function(colour){
  this.colour=colour;
  alert(this.colour+' цвета');
};

Transport.prototype.run= function(speed){
  this.speed += speed;
  alert( ' едет со скоростью ' + this.speed + ' км/ч');
};
Transport.prototype.stop = function() {
  this.speed = 0;
  alert( ' стоит');
};
function Auto(name,speed,mileage){
  Transport.apply(this.arguments);
  this.mileage=Mileage;
}

Auto.prototype=Object.create(Transport.prototype);

function Train(name,speed,mileage){
  Transport.apply(this.arguments);}
  
Train.prototype=Object.create(Transport.prototype);
  
  var auto=new Auto('Киа', 120, 50000);
  auto.Gcolour(' голубая');
  
  var sapsan =new Train('Скорый', 70, 100000);
  sapsan.Gcolour(' серый');
  
  alert(auto.name+auto.colour+auto.speed);
  alert(sapsan.name+auto.colour+auto.speed);