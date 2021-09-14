interface Isub {
  id: string;
  name: string;
}

export interface IsubCategories {
  id: string;
  name: string;
}

export interface Icategory {
  id: string;
  name:string;
  subCategories: IsubCategories[]
}

export interface Icategories {
  catigories: Icategory[]
}
