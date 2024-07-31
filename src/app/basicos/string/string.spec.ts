import { mensaje } from "./string"

//? Describe => Agrupar pruebas.
// describe('Pruebas de Strings');


//? It => Realizar una prueba en especifico, en concreto.
// it('Debe de regresar un string');


describe('Pruebas de Strings', () => {
  it('Debe de retornar un string', () => {
    const resp = mensaje('Dennisse');

    expect( typeof resp ).toBe('string');
  })

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Dennisse';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  })

})
