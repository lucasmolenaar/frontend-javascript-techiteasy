// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//OPDRACHT 4A
function showInformation(tvObject) {
  const name = tvObject.name;
  const brand = tvObject.brand;
  const type = tvObject.type;

  return `${brand} ${type} - ${name}`;
}

console.log(showInformation(inventory[0]));

//OPDRACHT 4B
function makePrice(price) {
  return `€${price},-`;
}

console.log(makePrice(379));

//OPDRACHT 4C
function showScreenSizes(screenSizesArray) {
  let sizes = ``;

  for (let i = 0; i < screenSizesArray.length; i++) {
    const screenInCm = screenSizesArray[i] * 2.54;

    if (i !== screenSizesArray.length - 1) {
      sizes += ` ${screenSizesArray[i]} inch (${screenInCm.toFixed()} cm) |`;
    } else {
      sizes += ` ${screenSizesArray[i]} inch (${screenInCm.toFixed()} cm)`;
    }
  }

  return sizes;
}

console.log(showScreenSizes(inventory[0].availableSizes));

//OPDRACHT 4D
/*
const title = document.getElementById('name-brand-type');
const price = document.getElementById('price');
const tvSizes = document.getElementById('sizes');

title.textContent = showInformation(inventory[0]);
price.textContent = makePrice(inventory[0].price);
tvSizes.textContent = showScreenSizes(inventory[0].availableSizes);
 */

//OPDRACHT 4E
const tvsContainer = document.getElementById('tvs-container');

function tvGenerator(tvObjects) {
  const tvs = tvObjects.map((tv) => {
    //Getting data from inventory
    const info = showInformation(tv);
    const price = makePrice(tv.price);
    const sizes = showScreenSizes(tv.availableSizes);

    //Creating new HTML elements
    const newTv = document.createElement('div');
    const infoTitle = document.createElement('h1');
    const priceTitle = document.createElement('h2');
    const sizesTitle = document.createElement('h3');

    //Adding class to element
    newTv.setAttribute('class', 'tv-container');

    //Adding data to HTML elements
    infoTitle.textContent = info;
    priceTitle.textContent = price;
    sizesTitle.textContent = sizes;

    //Appending to parent elements
    tvsContainer.appendChild(newTv);
    newTv.appendChild(infoTitle);
    newTv.appendChild(priceTitle);
    newTv.appendChild(sizesTitle);
  })
}

tvGenerator(inventory);

//BONUS OPDRACHT

//Selectors
const sortBtn = document.getElementById('btn-sort');
const ambiLightBtn = document.getElementById('btn-ambilight');
const soldOutBtn = document.getElementById('btn-soldout');

//Event listeners
sortBtn.addEventListener('click', () => {
  sortOnPrice(inventory);
})

ambiLightBtn.addEventListener('click', () => {
  getAmbiLightTvs(inventory);
})

soldOutBtn.addEventListener('click', () => {
  getSoldOutTvs(inventory);
})

//Functions
function sortOnPrice(tvInventory) {
  tvInventory.sort((a, b) => {
    return a.price - b.price;
  })
  console.log(tvInventory);
}

function getAmbiLightTvs(tvInventory) {
  const ambiLightTvs = tvInventory.filter((tv) => {
    return tv.options.ambiLight === true;
  })
  console.log(ambiLightTvs);
}

function getSoldOutTvs(tvInventory) {
  const soldOutTvs = tvInventory.filter((tv) => {
    return tv.originalStock - tv.sold === 0;
  })
  console.log(soldOutTvs);
}


















