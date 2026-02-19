import {
  BASE_URL,
  LOGIN_GET,
  PRODUTOS_GET,
  PRODUTO_UPDATE_STATUS,
} from "./API";

describe("API", () => {
  test("LOGIN_GET retorna url e options corretos para login", () => {
    const result = LOGIN_GET("user@email.com", "senha123");

    expect(result.url).toBe(
      `${BASE_URL}usuarios?email=user@email.com&senha=senha123`
    );
    expect(result.options.method).toBe("GET");
  });

  test("PRODUTOS_GET retorna url com usuarioId", () => {
    const result = PRODUTOS_GET(42);

    expect(result.url).toBe(`${BASE_URL}produtos?usuarioId=42`);
    expect(result.options.method).toBe("GET");
  });

  test("PRODUTO_UPDATE_STATUS retorna PATCH com body de status", () => {
    const result = PRODUTO_UPDATE_STATUS(10, "inativo");

    expect(result.url).toBe(`${BASE_URL}produtos/10`);
    expect(result.options.method).toBe("PATCH");
    expect(result.options.headers).toEqual({
      "Content-Type": "application/json",
    });
    expect(JSON.parse(result.options.body as string)).toEqual({
      status: "inativo",
    });
  });
});
