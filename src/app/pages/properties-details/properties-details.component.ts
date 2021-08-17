import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropiedadesService } from 'src/app/services/propiedades.service';
declare var mapboxgl: any;

import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { Property } from '../../interfaces/interfaces';

@Component({
  selector: 'app-properties-details',
  templateUrl: './properties-details.component.html',
  styleUrls: ['./properties-details.component.sass'],
})
export class PropertiesDetailsComponent implements OnInit {
  loadingProperties = false;
  error = false;
  property: Property = null;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  urlVideoSaneada: SafeResourceUrl;

  submited = false;
  status = 2;
  asunto = '';
  msj = '';
  cargandoEmail: boolean;

  lat: string;
  lng: string;
  isDataAvailable: boolean = false;

  validation_messages = {
    nombre: [{ type: 'required', message: 'Ingrese su nombre' }],
    email: [
      { type: 'required', message: 'Ingrese su email' },
      { type: 'pattern', message: 'Ingrese un email válido' },
    ],
    telefono: [{ type: 'required', message: 'El teléfono es requerido' }],
    asunto: [{ type: 'required', message: 'El mensaje es requerido' }],
    mensaje: [
      { type: 'required', message: 'El mensaje es requerido' },
      { type: 'minlength', message: 'El mínimo de caractéres es de 20' },
    ],
  };

  formEmailContact = new FormGroup({
    nombre: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])
    ),
    mensaje: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(20)])
    ),
  });

  constructor(
    private emailService: EmailService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private propiedadesService: PropiedadesService,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService
  ) {
    this._activatedRoute.params.subscribe(async (param) => {
      await this.searchPropertyDetail(param.id);
    });
  }

  async ngOnInit() {
    try {
      this.galleryOptions = [
        {
          width: '100%',
          height: '695px',
          thumbnailsColumns: 4,
          lazyLoading: true,
          imageSize: 'contain',
        },
      ]; 
    } catch (e) {}
  }

  searchPropertyDetail(id) {
      this.loadingProperties = true;
      this.propiedadesService
        .getPropiedadesDetail(id)
        .subscribe((data) => {
          this.loadingProperties = false;
          if (data) {
            console.log(data);
            this.property = data;
            this.property.whatsapp = this.getPhoneFormated();
            this.asunto = `Propiedad ${data.code} - Consulta web`;
            this.formEmailContact.controls.mensaje.setValue(
              `Buenos días, necesito información sobre la propiedad ${data.code}`
            );
            this.formEmailContact.controls.asunto.setValue(this.asunto);

            this.property.images.forEach((element) => {
              this.galleryImages.push({
                small: element.url,
                medium: element.url,
                big: element.url,
              });
            });

            if (this.property.videos[0]) {
              const cadena = this.property.videos[0].url.substr(32, 11);
              this.urlVideoSaneada = this.sanitizer.bypassSecurityTrustResourceUrl(
                `https://www.youtube.com/embed/${cadena}`
              );
            }

            this.cargarMapa(this.property.ubication.location.latitude, this.property.ubication.location.longitude);

            this.error = false;
          } else {
            this.error = true;
          }
        });
  }

  cargarMapa(lat, lng) {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaXZhbm92aWNzb2xhcm8iLCJhIjoiY2p4czR6YWQxMGc2MjNtcGJoeDMxc2ZhMiJ9.OkBNDx2o55HKTevT6UqCNw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom: 11.5,
    });

    var size = 500;

    // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
    // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
    var pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },

      // called once before every frame where the icon will be used
      render: function () {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(255, 100, 100, 0.31)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(0, 0, this.width, this.height).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      },
    };

    map.on('load', () => {
      map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [lng, lat],
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': 'pulsing-dot',
        },
      });
    });
  }

  async sendEmail() {
    this.submited = true;
    this.status = 2;
    this.cargandoEmail = true;
    console.log(this.formEmailContact);
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
        this.formEmailContact.value.mensaje
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
            this.formEmailContact.controls.asunto.setValue(this.asunto);
            break;
        }
        this.msj = resp.msj;
        this.cargandoEmail = false;
      });
  }

  imprimirFicha() {
    let printContents, popupWin;
    printContents = document.getElementById('content').innerHTML;
    popupWin = window.open(
      'properties-details.component.html',
      '_blank',
      'top=0,left=0,height=auto,width=auto'
    );
    popupWin.document.open();
    popupWin.document.write(`
  <html>

<body onload='window.print();window.close()'>${printContents}</body>
  </html>`);
    popupWin.document.close();
  }

  getPhoneFormated() {
    console.log(this.property._comercialUser_person[0])
    // tslint:disable-next-line:max-line-length
    return `${this.property._comercialUser_person[0].phone.countryCode} ${this.property._comercialUser_person[0].phone.areaCode} ${this.property._comercialUser_person[0].phone.phoneNumber}`;
  }


  _getValueCharByName( name: string) {
    const chars = this.property.characteristics;
    const response = chars.filter(c => c.name === name)[0].value.toString();
    if (response) {
      return response;
    } else {
      return '-';
    }
  }
}
