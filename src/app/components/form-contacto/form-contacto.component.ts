import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormData } from "../../interfaces/interfaces";
import { EmailService } from "../../services/email.service";

@Component({
  selector: "app-form-contacto",
  templateUrl: "./form-contacto.component.html",
  styleUrls: ["./form-contacto.component.sass"],
})
export class FormContactoComponent implements OnInit {
  @Input() type = false;
  dataForm: FormData;
  submited = false;
  status = 2;
  msj = "";
  cargandoEmail: boolean;
  formData: FormData;

  checkBusco = false;
  checkEntrego = false;

  validation_messages = {
    nombre: [{ type: "required", message: "Ingrese su nombre" }],
    email: [
      { type: "required", message: "Ingrese su email" },
      { type: "pattern", message: "Ingrese un email válido" },
    ],
    telefono: [{ type: "required", message: "El teléfono es requerido" }],
    asunto: [{ type: "required", message: "El mensaje es requerido" }],
    mensaje: [
      { type: "required", message: "El mensaje es requerido" },
      { type: "minlength", message: "El mínimo de caractéres es de 20" },
    ],
  };

  formEmailContact = new FormGroup({
    nombre: new FormControl("", Validators.required),
    asunto: new FormControl("", Validators.required),
    telefono: new FormControl("", Validators.required),
    email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
      ])
    ),
    mensaje: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.minLength(20)])
    ),
    fecha_ingreso: new FormControl(""),
    fecha_salida: new FormControl(""),
  });

  constructor(private emailService: EmailService) {}

  ngOnInit() {}

  checkValueBusco() {
    this.checkBusco = !this.checkBusco;
    console.log(this.checkBusco);
  }

  checkValueEntrego() {
    this.checkEntrego = !this.checkEntrego;
    console.log(this.checkEntrego);
  }

  setFechaIngreso(event) {
    console.log(event.target.value);
  }

  async sendEmail() {
    this.submited = true;
    this.status = 2;
    this.cargandoEmail = true;
    if (this.formEmailContact.invalid) {
      this.cargandoEmail = false;
      return;
    }

    await this.emailService
      .sendEmailAgents(
        this.formEmailContact.value.nombre,
        this.formEmailContact.value.email,
        this.formEmailContact.value.asunto,
        this.formEmailContact.value.telefono,
        this.formEmailContact.value.mensaje,
        this.checkBusco ? "Si" : "No",
        this.checkEntrego ? "Si" : "No",
        this.formatDate(this.formEmailContact.value.fecha_ingreso),
        this.formatDate(this.formEmailContact.value.fecha_salida)
      )
      .subscribe((resp) => {
        switch (resp.status) {
          case 0:
            this.status = 0;
            break;
          case 1:
            this.formEmailContact.reset();
            this.status = 1;
            this.submited = false;
            break;
        }
        this.msj = resp.msj;
        this.cargandoEmail = false;
      });
  }

  formatDate(dateString) {
    if (
      dateString === "" ||
      typeof dateString === undefined ||
      !dateString.includes("-")
    ) {
      return null;
    } else {
      var dateParts = dateString.split("-");
      var dateObject = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      return dateObject.toString();
    }
  }
}
