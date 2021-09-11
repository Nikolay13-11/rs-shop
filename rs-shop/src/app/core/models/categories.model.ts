interface Isub {
  id: string;
  name: string;
}

export interface IsubCategories {
  sub: Isub[]
}

export interface Icategory {
  id: string;
  name:string;
  subCategories: IsubCategories[]
}

export interface Icategories {
  catigories: Icategory[]
}
