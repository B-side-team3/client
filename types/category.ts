// admin 으로 옮길예정

export interface Category {
  // Category Post & Patch
  categoryId: number;
  title: string;
}

export interface CategoryResponse {
  categoryId: number;
  createdDateTime: string;
  title: string;
}
