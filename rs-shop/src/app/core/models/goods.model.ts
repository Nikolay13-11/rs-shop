export interface IDetail {
  id:string;
  name:string;
  imageUrls: string[];
  availableAmount: number;
  price: number;
  rating: number;
  description: string;
}
export interface IGoodsItem {
  id:string;
  name:string;
  imageUrls: string[];
  rating: number;
  availableAmount: number;
  price: number;
  description: string;
  isInCart: boolean,
  isFavorite: boolean,
}

interface IAppliances {
  refrigerators: IDetail[];
  cookers: IDetail[];
  dishwashers: IDetail[];
  freezers: IDetail[];
  microwaves: IDetail[];
  teapots: IDetail[];
  washingMachines: IDetail[];
  irons: IDetail[];
  vacuum: IDetail[];
}

interface IElectronics {
  mobile: IDetail[];
  watches: IDetail[];
  tablets: IDetail[];
  ebooks: IDetail[];
  powerbanks: IDetail[];
  cameras: IDetail[];
  tvs: IDetail[];
  headphones: IDetail[];
}

interface IComputersPeripherals {
  laptops: IDetail[];
  computers: IDetail[];
  consoles: IDetail[];
  hardware: IDetail[];
  peripherals: IDetail[];
  monitors: IDetail[];
}

interface IFurniture {
  sofas: IDetail[];
  armchairs: IDetail[];
  cabinets: IDetail[];
  chairs: IDetail[];
  tables: IDetail[];
  beds: IDetail[];
}

interface IHobbies {
  somusicinstrumentsfas: IDetail[];
  books: IDetail[];
  funAndRest: IDetail[];
}

export interface IGoods {
  appliances: IAppliances;
  electronics: IElectronics;
  computersPeripherals: IComputersPeripherals;
  furniture: IFurniture
  hobbies: IHobbies;
}
