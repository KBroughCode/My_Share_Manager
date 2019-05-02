const {calculateData} = require ('../helpers/data_helper');


  describe('portfolioView', ()=>{

    let numbers = [];

  beforeEach( () =>{

  numbers = [10,20,30,40]

  })
    test('function will add up each item in array', () =>{
      const result = calculateData(numbers);
      expect(result).toEqual(100);
    })

})
