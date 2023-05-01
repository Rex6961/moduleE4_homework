const f = function(own){
    for(let key in own){
    if(own.hasOwnProperty(key)){
      console.log(key);
    }
  }
}

const parent = {
  name: 'Kris',
  age: 32
};

const own = Object.create(parent);

own.colores = 'Red';

f(own);