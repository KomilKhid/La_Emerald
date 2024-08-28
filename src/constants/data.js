import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
const appetizers =[
  {
    name: 'Tuna Carpaccio',
    cena: '68$',
    opis: 'Yuzu Sauce | Truffle Oil',
  },
  {
    name: 'Foie Gras',
    cena: '$85',
    opis: 'Figs | Balsamic Reduction',
  },
  {
    name: 'Lobster Bisque',
    cena: '$75',
    opis: 'Cognac | Cream',
  },
  {
    name: 'Smoked Salmon Blinis',
    cena: '$95',
    opis: 'Caviar | Crème Fraîche',
  },
  {
    name: 'Escargots',
    cena: '$65',
    opis: 'Snails | Garlic Herb Butter',
  },
]
const courses=[
  {
    name: 'Beef Wellington',
    cena: '145$',
    opis: 'Red Wine Jus | Eruca',
  },
  {
    name: 'Seared Scallops',
    cena: '$138',
    opis: 'Saffron Risotto  | Lemon butter',
  },
  {
    name: 'Duck Breast',
    cena: '$128',
    opis: 'Orange | Grand Marnier Sauce ',
  },
  {
    name: 'Lamb Rack ',
    cena: '$155',
    opis: 'Rosemary | Garlic Crust',
  },
  {
    name: 'Chilean Sea Bass',
    cena: '$165',
    opis: 'Lemon caper sauce | Champagne Beurre Blanc',
  },
]
export default { wines, cocktails, awards, appetizers, courses  };
