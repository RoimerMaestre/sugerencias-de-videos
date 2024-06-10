
import {Multimedia, Reproductor} from './clases.js';


// Instancias para cada tipo de video
const musica = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'musica');
const pelicula = new Reproductor('https://www.youtube.com/embed/1Q8fG0TtVAY', 'peliculas');
const serie = new Reproductor('https://www.youtube.com/embed/TcMBFSGVi1c', 'series');


// Reproducir los videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio de alguno de los videos
musica.setInicio(25); // Inicia el video de música en el segundo 30`

//alt + shift f12 ----> practicar