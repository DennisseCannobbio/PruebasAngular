import { usuarioLogeado } from "./booleanos"

describe('Pruebas de Booleanos', () => {
  it('Debe de retornar true', () => {
    const res = usuarioLogeado();

    expect( res ).toBeTrue();
  })
})
