const f = function(word, obj){
  console.log(obj.hasOwnProperty(word));
}

const word = 'stand';
const obj = {'Hello':'word',
            'stand': 'up'
            };

f(word, obj);