function Phone(brand, price, color, ram, procesor, screen) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.ram = ram;
  this.procesor = procesor;
  this.screen = screen;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.printSpec = function() {
	console.log("The phone has " + this.ram + "gb of ram, procesor has " + this.procesor + " cores and screen is " + this.screen + ".");
  console.log("");
}


var iPhone6S = new Phone("Apple", 2250, "silver", 4, 8, "6.5' AMOLED - UHD");
var galaxyS6 = new Phone("Samsung", 1250, "black", 3, 4, "6' AMOLED - FULL HD");
var onePlus = new Phone("One", 750, "white", 6, 4, "5' OLED - FULL HD");


iPhone6S.printInfo();
iPhone6S.printSpec();
galaxyS6.printInfo();
galaxyS6.printSpec();
onePlus.printInfo();
onePlus.printSpec();
