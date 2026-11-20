import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  correo = signal('');
  clave = signal('');
  intentado = signal(false);
  errorCredenciales = signal(false);
  verClave = signal(false);

  get errorCorreo(): string {
    const v = this.correo().trim();
    if (!v) return 'El correo electrónico es obligatorio.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Ingresa un correo válido (ej. usuario@ejemplo.com).';
    return '';
  }

  get errorClave(): string {
    const v = this.clave();
    if (!v) return 'La contraseña es obligatoria.';
    if (v.length < 6) return 'La contraseña debe tener al menos 6 caracteres.';
    return '';
  }

  ingresar(evento: Event): void {
    evento.preventDefault();
    this.intentado.set(true);
    this.errorCredenciales.set(false);

    if (this.errorCorreo || this.errorClave) return;

    if (this.auth.login(this.correo(), this.clave())) {
      const destino = this.route.snapshot.queryParamMap.get('redirigir') || '/inicio';
      this.router.navigateByUrl(destino);
    } else {
      this.errorCredenciales.set(true);
    }
  }
}
