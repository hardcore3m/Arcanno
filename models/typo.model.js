const jsonData = require('../functions/readJsonFiles')

class Typo {
    constructor(title, context, class_name, file, lowercase, uppercase, numbers, symbols) {
      this.title = title;
      this.context = context;
      this.class_name = class_name;
      this.file = file;
      this.lowercase = lowercase;
      this.uppercase = uppercase;
      this.numbers = numbers;
      this.symbols = symbols;
    }
  
    static filterByName(list, name) {
      return list.filter((item) => item.title.toLowerCase().includes(name.toLowerCase()));
    }
  }

  const typos = jsonData.typos[0].data.map((el)=>{
    
    return new Typo(el.title,el.context,el.class_name,el.file,el.lowercase,el.uppercase,el.numbers,el.symbols)
  })

  exports.list = typos;