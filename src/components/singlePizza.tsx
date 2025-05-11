import { useState, type FC } from 'react';
import type { Pizza } from '../models/Pizza';
import EditPizzaForm from './EditPizzaForm';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToogleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const handleDelete = () => {
    deletePizza(pizza.id);
  };

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} ₽</span>

      <div className="pizza-controls">
        <AiFillEdit onClick={handleToogleEdit} />
        <AiFillDelete onClick={handleDelete} />
      </div>

      {edit ? (
        <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToogleEdit={handleToogleEdit} />
      ) : null}
    </div>
  );
};
