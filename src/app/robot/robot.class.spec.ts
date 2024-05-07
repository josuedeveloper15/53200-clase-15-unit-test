import { Robot } from './robot.class';

describe('Pruebas de las class Robot', () => {
  it('Robot debe asignar un piloto al instanciarse', () => {
    // Logica para evaluar que el expectation suceda
    const robot = new Robot('Martin');
    expect(robot.piloto).toBe('Martin');
  });

  it('Debe establecer la energia en 90 al instanciarse', () => {
    // Logica para evaluar que el expectation suceda
    const robot = new Robot('Lucas');

    console.log('INSTANCIA: ', robot);

    expect(robot.energia).toBe(90);
  });

  it('Al saludar piloto debe mostrar un log de consola', () => {
    const robot = new Robot('Pedro');
    // Spy debe definirse antes de la ejecucion del codigo
    const spyOnConsoleLog = spyOn(console, 'log');
    robot.saludar();
    expect(spyOnConsoleLog).toHaveBeenCalled();
  });

  it('Al saludar debe mostrar en consola "Bienvenido {NOMBRE}!"', () => {
    const robot = new Robot('Pedro');

    const spyOnConsoleLog = spyOn(console, 'log');

    robot.saludar();

    expect(spyOnConsoleLog).toHaveBeenCalledWith('Bienvenido Pedro!');
  });

  it('Debe llamar a saludar al iniciarSistema', () => {
    const robot = new Robot('Pedro');
    const spyOnSaludar = spyOn(robot, 'saludar');
    robot.iniciarSistema();
    expect(spyOnSaludar).toHaveBeenCalled();
  });

  it('Debe tener los poderes de: "volar", "rayos laser", "super fuerza"', () => {
    const poderesEsperados = ['volar', 'rayos laser', 'super fuerza'];

    const robot = new Robot('Juan');

    expect(robot.poderes).toEqual(poderesEsperados);
  });
});
