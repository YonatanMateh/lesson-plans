const createHouse = function (bath, bedrooms) {
  const house = {
    bath: bath !== undefined ? bath : true,
    bedrooms: bedrooms ? bedrooms : 3
  }

  return house
}