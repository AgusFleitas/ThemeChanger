import { useContext } from "react";
import "./Form.css";
import { ThemeContext } from "../context/themes";

const Form = () => {
  const { themes } = useContext(ThemeContext);

  const handleTheme = () => {
    const activeTheme = themes.find((theme) => theme.active === true);

    return `${activeTheme.name}-container`;
  };

  return (
    <div className={handleTheme()}>
      <strong>Formulario</strong>
      <div className='inputs-container'>
        <div className='field-container'>
          <label>Nombre:</label>
          <input type='text' />
        </div>
        <div className='field-container'>
          <label>Apellido:</label>
          <input type='text' />
        </div>
        <div className='field-container'>
          <label>Nacionalidad:</label>
          <select name='' id=''>
            <option value='' hidden default>
              Selecciona un país
            </option>
            <option value=''>España </option>
            <option value=''>México</option>
            <option value=''>Argentina</option>
            <option value=''>Venezuela</option>
          </select>
        </div>
      </div>
      <button className='form-button'>Enviar</button>
    </div>
  );
};

export default Form;
