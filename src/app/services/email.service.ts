import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { RespuestaEmail } from "../interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  URL = environment.URL;
  apiKey = environment.apiKey;
  URLWeb = environment.URLWebMail;
  email = "contacto@morelpropiedades.cl";
  emailprueba = "ivan.solaro3@gmail.com";

  constructor(private http: HttpClient) {}

  sendEmailAgents(
    nombre,
    email,
    asunto,
    telefono,
    mensaje,
    buscopropiedad?,
    entregopropiedad?,
    fechaingreso?,
    fechasalida?
  ) {
    var formData = `name=${nombre}&email=${email}&phone=${telefono}&message=${mensaje}&email_agent=${this.email}&subject=${asunto}`;

    if (fechaingreso) {
      formData = formData.concat(`&fechaingreso=${fechaingreso}`);
    }

    if (fechasalida) {
      formData = formData.concat(`&fechasalida=${fechasalida}`);
    }
    if (buscopropiedad) {
      formData = formData.concat(`&buscopropiedad=${buscopropiedad}`);
    }

    if (entregopropiedad) {
      formData = formData.concat(`&entregopropiedad=${entregopropiedad}`);
    }
    return this.http.get<RespuestaEmail>(`${this.URLWeb}${formData}`);
  }
}
