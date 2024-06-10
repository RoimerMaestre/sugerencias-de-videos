import {VideoModule} from './Ife.js';
// Clase Multimedia
export class Multimedia {
    constructor(url) {
        let _url = url; // Closure para proteger el atributo
        this.getUrl = function () {
            return _url;
        };
    }
    
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase Reproductor que hereda de Multimedia
export class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        VideoModule.play(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        VideoModule.play(`${this.getUrl()}?start=${tiempo}`, this.id);
        // document.getElementById(this.id).setAttribute('src', urlConTiempo);
    }
}
