import { Injectable } from '@angular/core';
import { Categoria, Mesa, Pedido, Plato } from '../models/modelos';

@Injectable({ providedIn: 'root' })
export class DatosService {
  categorias: Categoria[] = [
    { id: 1, nombre: 'Entradas', icono: '🥗', descripcion: 'Para abrir el apetito' },
    { id: 2, nombre: 'Platos de fondo', icono: '🍛', descripcion: 'Clásicos de la cocina peruana' },
    { id: 3, nombre: 'Postres', icono: '🍮', descripcion: 'El final dulce' },
    { id: 4, nombre: 'Bebidas', icono: '🥤', descripcion: 'Refrescos y chichas' },
  ];

  platos: Plato[] = [
    { id: 1, nombre: 'Ceviche clásico', categoriaId: 1, precio: 38, disponible: true, descripcion: 'Pescado fresco, limón y ají limo' },
    { id: 2, nombre: 'Causa limeña', categoriaId: 1, precio: 22, disponible: true, descripcion: 'Papa amarilla rellena de pollo' },
    { id: 3, nombre: 'Lomo saltado', categoriaId: 2, precio: 34, disponible: true, descripcion: 'Res salteada con papas fritas y arroz' },
    { id: 4, nombre: 'Ají de gallina', categoriaId: 2, precio: 28, disponible: true, descripcion: 'Crema de ají amarillo con pollo' },
    { id: 5, nombre: 'Arroz con mariscos', categoriaId: 2, precio: 42, disponible: false, descripcion: 'Arroz al ají con mariscos frescos' },
    { id: 6, nombre: 'Suspiro limeño', categoriaId: 3, precio: 14, disponible: true, descripcion: 'Manjar blanco con merengue de oporto' },
    { id: 7, nombre: 'Picarones', categoriaId: 3, precio: 16, disponible: true, descripcion: 'Con miel de chancaca' },
    { id: 8, nombre: 'Chicha morada', categoriaId: 4, precio: 9, disponible: true, descripcion: 'Jarra personal' },
    { id: 9, nombre: 'Maracuyá sour', categoriaId: 4, precio: 18, disponible: true, descripcion: 'Cóctel de maracuyá' },
  ];

  mesas: Mesa[] = [
    { id: 1, numero: 1, capacidad: 2, estado: 'Libre' },
    { id: 2, numero: 2, capacidad: 4, estado: 'Ocupada' },
    { id: 3, numero: 3, capacidad: 4, estado: 'Ocupada' },
    { id: 4, numero: 4, capacidad: 6, estado: 'Reservada' },
    { id: 5, numero: 5, capacidad: 2, estado: 'Libre' },
    { id: 6, numero: 6, capacidad: 8, estado: 'Ocupada' },
  ];

  pedidos: Pedido[] = [
    { id: 101, mesaNumero: 2, platos: ['Ceviche clásico', 'Chicha morada'], total: 47, estado: 'En cocina', hora: '13:05' },
    { id: 102, mesaNumero: 3, platos: ['Lomo saltado', 'Ají de gallina', 'Maracuyá sour'], total: 80, estado: 'Pendiente', hora: '13:12' },
    { id: 103, mesaNumero: 6, platos: ['Causa limeña', 'Lomo saltado', 'Picarones', 'Chicha morada'], total: 81, estado: 'Entregado', hora: '12:40' },
    { id: 104, mesaNumero: 2, platos: ['Suspiro limeño'], total: 14, estado: 'Pendiente', hora: '13:20' },
  ];

  nombreCategoria(id: number): string {
    return this.categorias.find((c) => c.id === id)?.nombre ?? '-';
  }

  platosPorCategoria(id: number): number {
    return this.platos.filter((p) => p.categoriaId === id).length;
  }
}
