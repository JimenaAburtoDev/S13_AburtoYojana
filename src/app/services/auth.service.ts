import { Injectable, signal } from '@angular/core';

export interface SesionUsuario {
  correo: string;
  nombre: string;
}

const CLAVE_SESION = 'sabor-andino-sesion';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Credenciales de prueba (no hay backend)
  private readonly usuarioPrueba = {
    correo: 'admin@saborandino.com',
    clave: '123456',
    nombre: 'Administrador',
  };

  // Estado reactivo de la sesión: se lee de localStorage al iniciar (sobrevive a recargas)
  private sesion = signal<SesionUsuario | null>(this.leerSesion());

  readonly usuarioActual = this.sesion.asReadonly();

  /** Valida usuario y clave de prueba. */
  validarCredenciales(correo: string, clave: string): boolean {
    return (
      correo.trim().toLowerCase() === this.usuarioPrueba.correo &&
      clave === this.usuarioPrueba.clave
    );
  }

  /** Inicia sesión: si las credenciales son válidas guarda la sesión en localStorage. */
  login(correo: string, clave: string): boolean {
    if (!this.validarCredenciales(correo, clave)) {
      return false;
    }
    const datos: SesionUsuario = {
      correo: this.usuarioPrueba.correo,
      nombre: this.usuarioPrueba.nombre,
    };
    localStorage.setItem(CLAVE_SESION, JSON.stringify(datos));
    this.sesion.set(datos);
    return true;
  }

  /** Comprueba si hay una sesión activa. */
  estaAutenticado(): boolean {
    return this.sesion() !== null;
  }

  /** Cierra la sesión y limpia el almacenamiento. */
  logout(): void {
    localStorage.removeItem(CLAVE_SESION);
    this.sesion.set(null);
  }

  private leerSesion(): SesionUsuario | null {
    try {
      const guardado = localStorage.getItem(CLAVE_SESION);
      return guardado ? (JSON.parse(guardado) as SesionUsuario) : null;
    } catch {
      return null;
    }
  }
}
