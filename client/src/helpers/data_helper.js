const DataHelper = {

  calculateData(array) {
    return array.reduce((total, number)=>{
      return total + number;
    })
  }

}

module.exports = DataHelper;
