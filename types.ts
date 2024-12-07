export interface ItemType {
  id: number | string;
  image: string;
  title: string;
  price: number;
  colors: string[];
  description: string;
  rating_rate: number;
  rating_count: number;
  category: string;
}

export interface ItemProps {
  id: number | string;
  image: string;
  name: string;
  price: number;
  colors: string[];
  description: string;
  rating_rate: number;
  rating_count: number;
}

export interface CartItemType {
  id: number | string;
  image: string;
  title: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export interface CartItemProps {
  id: number | string;
  image: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export interface ShoppingProps {
  categoryItems: ItemType[];
}

export interface AuthType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
