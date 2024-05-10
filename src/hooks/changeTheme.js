import { useContext } from "react";
import { ThemeContext } from "../context/themes";

// Creamos un Custom Hook para setear el filtro nuevo.
export function useTheme() {
    // Nos tremos los filtros y el seteo del contexto.
  const { themes, setThemes } = useContext(ThemeContext);

  // Declaramos la función que va a cambiar el tema.
  // La función va a recibir el nombre del tema al que vamos a cambiar (newThemeName). En ella mapeamos cada uno de los temas que tenemos y por cada tema, comparamos si el nombre del tema coincide con nuestro tema a cambiar, cuando coincida, seteamos el 'active' de ese tema en true, si no coincide lo seteamos en false. Esto es para "desactivar todos los temas" excepto el tema que estamos queriendo poner.
  // Finalmente seteamos el estado con la nueva configuración.
  const changeActiveTheme = (newThemeName) => {
    const newTheme = themes.map((theme) => {
      if (theme.name === newThemeName) {
        return { ...theme, active: true };
      } else {
        return { ...theme, active: false };
      }
    });
    setThemes(newTheme);
  };

  // El Custom Hook devolverá los temas y la función de cambiar el tema.
  return {
    themes,
    changeActiveTheme,
  };
}
