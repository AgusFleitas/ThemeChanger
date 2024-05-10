import "./Form.css";

const Form = () => {
  return (
    <div className='container'>
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
      <button>Enviar</button>
    </div>
  );
};

export default Form;
