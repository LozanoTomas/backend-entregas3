
const request = require('supertest');
const app = require('../index'); // o donde inicies tu express

describe('Adoption Routes', () => {
  it('GET /adoptions debe devolver status 200', async () => {
    const res = await request(app).get('/adoptions');
    expect(res.statusCode).toBe(200);
  });

  it('POST /adoptions debe crear una adopción', async () => {
    const nuevaAdopcion = {
      nombre: "Toby",
      especie: "perro",
      edad: 2
    };

    const res = await request(app)
      .post('/adoptions')
      .send(nuevaAdopcion);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id'); // ajustá según tu modelo
  });
});
