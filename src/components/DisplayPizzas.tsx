import type { FC } from 'react';
import type { Pizza } from '../models/Pizza';
import { SinglePizza } from './singlePizza';

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            key={pizza.id}
            updatePizza={updatePizza}
            pizza={pizza}
            deletePizza={deletePizza}
          />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
