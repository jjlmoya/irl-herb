import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import TYPE from '../type.data'
import SEASON from '../season.data'

export default [
  {
    name: 'Tomates',
    image: 'tomato.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.JUNE(TYPE.FLOWER),
      MONTHS.AUGUST(TYPE.FRUIT)
    ],
    pathname: '/tomate/'
  }
]