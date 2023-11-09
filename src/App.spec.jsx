import { render, screen } from '@testing-library/react';

import App from './App';

import {describe, expect, it} from "vitest";

describe('App', () => {
  it('renders headline', () => {
    const component = render(<App />);
    const heading = component.getByRole("heading", {
      name: "APP PARA PELIS",
    });
    console.log(heading);
    
  });
});