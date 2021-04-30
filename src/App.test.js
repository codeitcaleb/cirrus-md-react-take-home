import React from "react";
import { cleanup, render, waitFor, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

afterEach(cleanup);

test('fetches pokemon', async () => {
  pokemonContainer = document.createElement("div");
  document.body.appendChild(container);

  const pokemon = {name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/"};

  // Mock API
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: pokemon
      })
    }));

  const { getByTestClass } = async () => await render(<App />);

  await waitFor(async () => getByTestClass("pokemon-name"));

  expect(getByTestClass("pokemon-name").textContent).toBe(pokemon.name);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch.mock.calls[0][0]).toBe("https://pokeapi.co/api/v2/pokemon/1/");

  // Clear mock
  global.fetch.mockClear();
});
