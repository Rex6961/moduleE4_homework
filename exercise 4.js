function ElectricalAppliances(name, state, activation=false){
  this.activation = activation,
  this.state = state,
  this.name = name
}

ElectricalAppliances.prototype.consumptionWatt = function(kwt, activation){
  if(activation===true){
    return kwt;
  }
  return 0;
}

function KitchenAppliances(name, state, smart='no'){
  this.name = name,
  this.state = state,
  this.smart = smart
}

function HouseholdAppliances(name, state, generation='4'){
  this.name = name,
  this.state = state,
  this.generation = generation
}

KitchenAppliances.prototype = new ElectricalAppliances();
HouseholdAppliances.prototype = new ElectricalAppliances();

KitchenAppliances.prototype.consumptionWatt = function(kwt, activation){
  if(activation===true){
    return kwt;
  }
  return 0;
}

HouseholdAppliances.prototype.consumptionWatt = function(kwt, activation){
  if(activation===true){
    return kwt;
  }
  return 0;
}

const computer = new HouseholdAppliances(name='computer', state='new', generation='7');
const radio = new HouseholdAppliances(name='radio', state='old');
const kettle = new KitchenAppliances(name='kettle', state='old');

const computerFirst = computer.consumptionWatt(1500);
const radioFirst = radio.consumptionWatt(300, true);
const kettleFirst = kettle.consumptionWatt(1800, true);

const summWatt = computerFirst + radioFirst + kettleFirst;

console.log(`Общее потребление электроприборов = ${summWatt} Ватт`);
console.log(computer, radio, kettle);