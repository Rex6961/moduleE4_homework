class ElectricalAppliances{
  constructor(name, state, activation) {
    this.activation = activation || false;
    this.state = state;
    this.name = name;
  }

  consuptionWatt(kwt) {
    if (this.activation) {
      return kwt;
    }
    return 0;
  }
}

const KitchenAppliancesKettle = new ElectricalAppliances('kettle', 'old', true);
const HouseAppliancesRadio = new ElectricalAppliances('radio', 'old');
const HouseApplicationComputer = new ElectricalAppliances('computer', 'new', true);

KitchenAppliancesKettle.smart = 'yes';
HouseAppliancesRadio.generation = '7';
HouseApplicationComputer.generation = '10';

const kettle = KitchenAppliancesKettle.consuptionWatt(2300);
const radio = HouseAppliancesRadio.consuptionWatt(300);
const computer = HouseApplicationComputer.consuptionWatt(1900);
const totalWattConsumption = kettle + radio + computer


console.log(KitchenAppliancesKettle);
console.log(HouseAppliancesRadio);
console.log(HouseApplicationComputer);

if(KitchenAppliancesKettle.activation) {
  console.log(`Чайник включен в розетку и его потребление составляет ${kettle} Ватт`);
} else {
  console.log(`Чайник выключен, потребление = ${kettle} Ватт`);
}

if(HouseAppliancesRadio.activation) {
  console.log(`Радио включено в розетку и его потребление составляет ${radio} Ватт`);
} else {
  console.log(`Радио выключено, потребление = ${radio} Ватт`);
}

if(HouseApplicationComputer.activation) {
  console.log(`Компьютер включен в розетку и его потребление составляет ${computer} Ватт`);
} else {
  console.log(`Компьютер выключен, потребление = ${computer} Ватт`);
}

console.log(`Суммарное потребление приборов состовляет ${totalWattConsumption}`);