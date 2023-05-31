import _mock from '../_mock';

import Art from './images/Art.png'
import Printing from './images/3D Printing.png'
import Fashion from './images/Fashion.png'
import Gadgets from './images/Gadgets.png'
import Hobby from './images/Hobby.png'
import Household from './images/Household.png'
import Learning from './images/Learning.png'
import Models from './images/Models.png'
import Tools from './images/Tools.png'
import ToysGames from './images/Toys&Games.png'

// ----------------------------------------------------------------------

// 사용 !
const PRODUCT_ID =[
    0,1,2,3,4,5,6,7,8,9
]

const PRODUCT_NAME = [
  '3D Printing',
  'Art',
  'Fashion',
  'Gadgets',
  'Hobby',
  'Household',
  'Learning',
  'Models',
  'Tools',
  'Toys & Games'
];

export const PRODUCT_IMAGES = [
  Printing,
  Art,
  Fashion,
  Gadgets,
  Hobby,
  Household,
  Learning,
  Models,
  Tools,
  ToysGames
];

// 필요 !
export const _bigcategory_ranks = [...Array(10)].map((_, index) => ({
  id: PRODUCT_ID[index],
  name: PRODUCT_NAME[index],
  image: PRODUCT_IMAGES[index],
}));
