import { useTheme } from '../hooks/changeTheme';

import './Changer.css'

const Changer = () => {
  // Nos traemos la función que cambia el tema de nuestro Custom Hook.
  const { changeActiveTheme } = useTheme()

  // En cada botón seteamos la ejecución del cambio de tema con el string/parámetro que corresponda.
  return (
  <header>
    <button onClick={() => changeActiveTheme("dark")} className='dark-button'>DARK</button>
    <button onClick={() => changeActiveTheme("light")} className='light-button'>LIGHT</button>
    <button onClick={() => changeActiveTheme("blue")} className='blue-button'>BLUE</button>
    <button onClick={() => changeActiveTheme("purple")} className='purple-button'>PURPLE</button>
  </header>
);
};

export default Changer;
