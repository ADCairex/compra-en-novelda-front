import { Product } from '@/types/product';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://api.ejemplo.com/productos');
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en productService:', error);
    return [];
  }
}