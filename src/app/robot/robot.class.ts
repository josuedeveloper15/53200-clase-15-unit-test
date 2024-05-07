export class Robot {
  piloto: string = '';
  energia = 90;

  poderes: string[] = ['rayos laser', 'super fuerza', 'volar'];

  constructor(piloto: string) {
    this.piloto = piloto;
  }

  iniciarSistema(): void {
    this.saludar();
  }

  saludar(): void {
    console.log(`Bienvenido ${this.piloto}!`);
  }
}
