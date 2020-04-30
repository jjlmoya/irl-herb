import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import TYPE from '../type.data'
import SEASON from '../season.data'
import { i18n } from '../../boot/i18n'
export default [
  {
    name: i18n.t('plants.tomato'),
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

/**

/fresa/
/fresa/pineberry/
/kiwi/
/pina/
/pina/enana/
/platano/
/platano/macho/
/platano/manzano/
/platano/manzano/
/platano/rojo/
/tomate/
/tomate/cherry/
/tomate/corazon-de-buey/
/tomate/indigo/
/tomate/kumato/
/tomate/pera/
/tomate/rama/
/tomate/roma/
/tomate/rosa/

 */
