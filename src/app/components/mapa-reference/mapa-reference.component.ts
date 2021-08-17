import { Component, OnInit, AfterViewInit } from "@angular/core";
declare var mapboxgl: any;
@Component({
  selector: "app-mapa-reference",
  templateUrl: "./mapa-reference.component.html",
  styleUrls: ["./mapa-reference.component.sass"],
})
export class MapaReferenceComponent implements OnInit, AfterViewInit {
  lat = "-32.5528294";
  lng = "-71.4588181";
  map: any;
  selectedOption: string;

  options = [
    { name: "Zapallar", lat: "-32.5528294", lng: "-71.4588181" },
    { name: "Cachagua", lat: "-32.5796147", lng: "-71.453085" },
    { name: "Laguna de Zapallar", lat: "-32.6235026", lng: "-71.4236619" },
    { name: "Maitencillo", lat: "-32.6441845", lng: "-71.4329357" },
    { name: "Puchuncaví", lat: "-32.7259856", lng: "-71.4150065" },
    { name: "Papudo", lat: "-32.5075685", lng: "-71.4459582" },
    { name: "El Horcón", lat: "-32.71685198799721", lng: "-71.48733949880959" },
  ];
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaXZhbm92aWNzb2xhcm8iLCJhIjoiY2p4czR6YWQxMGc2MjNtcGJoeDMxc2ZhMiJ9.OkBNDx2o55HKTevT6UqCNw";
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [this.lng, this.lat],
      zoom: 14.15,
    });

    this.map.on("load", () => {
      // Add a layer showing the places.
      this.map.addLayer({
        id: "places",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Chiringuito Zapallar</strong><br/><br/><p>Dirección: Av Zapallar 151, Zapallar<br/>Contacto: +56 33 2741024<br/>@chiringuitozapallar</p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.462937, -32.553696],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>El Cesar Zapallar</strong><br/><br/><p>Direccción: Av Zapallar 177, Zapallar<br/>Contacto: +569 96871566<br/>@cesarzapallar</p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.461608, -32.552595],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Tio Tomate</strong><br/><br/><p>Dirección: Av. Cachagua 380, Cachagua  <br/>Contacto: +56 32 2771314<br/>@tiotomate   www.tiotomate.cl   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.448634, -32.578192],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Los Coirones  </strong><br/><br/><p> Dirección: Los Eucaliptus,Cachagua <br/>Contacto: +56 9 95040337<br/>@loscoironescachagua   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.4535, -32.583188],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Club Costa Cachagua  </strong><br/><br/><p>Ubicación: Condominio Costa Cachagua  <br/>Contacto: +56 33 2295817  y +569 68441244<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.42267, -32.622578],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Panadería De las Flores  </strong><br/><br/><p>Dirección: Av. Januario Ovalle 160, Zapallar  <br/> <br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.456469, -32.555668],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Dos salmones  </strong><br/><br/><p>Dirección: Carlos Leon Briceño 400, Zapallar  <br/>Contacto: +56 9 6173 2798<br/>@dossalmones   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.422581, -32.629629],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Nou Cami  </strong><br/><br/><p>Dirección: Carlos León 737, La Laguna, Zapallar  <br/>Contacto: +5633 248 8299<br/>@noucami_laguna   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.424018, -32.629629],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Mamali  </strong><br/><br/><p>Dirección: Carlos león Briceño s/n  La Laguna, Zapallar  <br/>Contacto: mamalimigrante@gmail.com<br/>@mamali_cl (comida asiática)   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.423334, -32.629591],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Playa Gourmet  </strong><br/><br/><p>Dirección: Carlos Leon Briceno 601, La Laguna,Zapallar  <br/>Contacto: +56 9 5431 6322<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.422902, -32.629632],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Tia Natasha  </strong><br/><br/><p>Dirección: Carlos León Briceño 598, La Laguna, Zapallar  <br/>Contacto: +56 9 9042 1951<br/>@tianatasha   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.42284, -32.629579],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Donde Gastón  </strong><br/><br/><p>Dirección: Tajamar 898, La Laguna, Zapallar  <br/>Contacto: +56 953718551     <br/>#dondegaston   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.429823, -32.629791],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Picá de Octavio  </strong><br/><br/><p>Dirección: Carlos Leon Briceno 698, Laguna de Zapallar  <br/>Contacto:  +56 9 9780 6496<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.423392, -32.629714],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Choca  </strong><br/><br/><p>Dirección: Av. Carlos León Briceño 779 | Av principal Laguna de Zapallar  <br/>Contacto: +56 9 4164 1130<br/>@lachoca   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.424387, -32.629633],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>5unset Lounge   </strong><br/><br/><p>Dirección: Avenida del Mar 2681, Maitencillo  <br/>Contacto: +569 95380661<br/>Facebook: https://www.facebook.com/5unset-Lounge-1017458948459741/<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.442959, -32.650486],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Café Emilia y restaurant  </strong><br/><br/><p>Ubicación: Carretera F/30, s/n, Maitencillo  <br/><br/>@cafe.emilia   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.424413, -32.642609],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Miel  </strong><br/><br/><p>Dirección: Av. del Mar 2730, Maintencillo  <br/>Contacto: +569 87699876<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.442908, -32.651037],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Santo Pez  </strong><br/><br/><p>Ubicación: Carretera F-30 E, km35 – Maitencillo  <br/>Contacto: +56 32 277 2402<br/>@restaurantsantopez    </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.430104, -32.659758],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Empanadas El Hoyo  </strong><br/><br/><p>Dirección: Av. del mar 1060, Maintencillo  <br/>Contacto: +56 32 2772355<br/>@elhoyomaitencillo   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.430254, -32.640932],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Punta Natural  </strong><br/><br/><p>Dirección: Cerro Tacna S/N | Vista Hermosa mz 23 sitio 14, Maitencillo  <br/>Contacto: +56 32 277 0066<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.441559, -32.676095],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Beach Break Sushi Maitencillo  </strong><br/><br/><p>Dirección: Av. Del Mar 1436, Maitencillo  <br/>Contacto: +56 32 288 9686<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.433108, -32.644298],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Deli Mai  </strong><br/><br/><p>Ubicación: Ruta F-30-E S/N | Centro comercial El Triángulo, Maitencillo  <br/>Contacto: +56 32 342 1240<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.420626, -32.63308],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Punta Perú  </strong><br/><br/><p>Dirección: Av. Del Mar 1380 | Maitencillo  <br/>Contacto: +56 32 277 1067<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.432293, -32.644225],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Praia  </strong><br/><br/><p>Dirección: Avenida del Mar 985, Maitencillo  <br/>Contacto: +56 9 6508 2108<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.43031, -32.641126],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Pescá Cevichería  </strong><br/><br/><p>Dirección: Av. del Mar 4420, Maitencillo  <br/>Contacto: +56 32 277 1823<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.441385, -32.665976],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Tía Natasha  </strong><br/><br/><p>Ubicación: F-30-E, Maintencillo  <br/>Contacto: +5632 277 1443<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.422818, -32.634154],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Hamburguesas 21/40  </strong><br/><br/><p>Dirección: Av. del Mar 2140, Maintencillo  <br/>Contacto: +569 76670581<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.438011, -32.648301],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>El Farito  </strong><br/><br/><p>Dirección: Av. Del Mar 2205, Maintencillo  <br/>Contacto: +569 63004198<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.438837, -32.648856],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Unicornio  </strong><br/><br/><p>Dirección: Av. Del mar 1350, Maintencillo  <br/>Contacto: +56 322771413<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.432572, -32.64383],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Vista Mar  </strong><br/><br/><p>Dirección: Av. Del Mar 1345, Maintencillo  <br/>Contacto: +56 32 2771067<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.431959, -32.643166],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Koala  </strong><br/><br/><p>Dirección: Av. Del mar 2204, Maitencillo  <br/>Contacto: +56 32 2771640<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.440875, -32.649131],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Canasta  </strong><br/><br/><p>Av del Mar 526, Maitencillo  <br/>Contacto:<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.429638, -32.637759],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Tío Tomate  </strong><br/><br/><p>Dirección:Av. del Mar 695, Maitencillo  <br/> <br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.429748, -32.638744],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>El Tapado  </strong><br/><br/><p>Dirección: Av. Del mar 100   <br/>Contacto: +56 9 81539438<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.428681, -32.633353],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Mr Waffles  </strong><br/><br/><p>Dirección: Av del Mar 940-652 (playa el faro), Maintencillo  <br/> <br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.429932, -32.6398],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Empanadas Suculentas  </strong><br/><br/><p>Dirección: Av del mar 518, Maitencillo  <br/>Contacto: +56 9 46153454<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.429411, -32.637096],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Caballito de Palo  </strong><br/><br/><p>Ubicación: Carretera F – 30 – E s/n | El Rungue, Puchuncaví, Chile  <br/>Contacto: +56 32 279 1254<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.406334, -32.696057],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Donde Pablo  </strong><br/><br/><p>Ubicación: Frente a la Playa Grande. Estacionamiento Irarrázaval. Al lado de Club de Tenis, Papudo.  <br/>Contacto: +56 33 79 1942<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.443966, -32.504583],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Maison des Fous  </strong><br/><br/><p>Dirección: Blanco 151, Papudo  <br/>Contacto: +56 9 5006 2874<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.444496, -32.506859],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Tajali  Sushi y Pizza  </strong><br/><br/><p>Dirección: Chorrillos #27, Papudo  <br/>Contacto: +56 9 8138 4112<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.447538, -32.506475],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Catita  </strong><br/><br/><p>Dirección: El Peumo 1051, Papudo  <br/>Contacto: +56 9 50737087<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.434112, -32.507257],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Enikita Pastelería  </strong><br/><br/><p>Dirección: 19 de Julio #712, Papudo  <br/>Contacto: +56 33 279 1600 <br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.439603, -32.507123],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Casa de César  </strong><br/><br/><p>Dirección: Fernández Cancha 175, Chorrillos, Papudo  <br/>Contacto: +56 33 279 0384<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.44614, -32.508601],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Bahía  </strong><br/><br/><p>Dirección: Lord Cochrane 184, Papudo  <br/> <br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.443071, -32.506729],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>La Mare  </strong><br/><br/><p>Dirección: Chorrillos 153, Plaza de Papudo, Papudo  <br/>Contacto: +56 9 4047 7012<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.446639, -32.507811],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong> El Torres </strong><br/><br/><p>Dirección: Chorrillos 153, Papudo  <br/><br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.446573, -32.507905],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Sunshine  </strong><br/><br/><p>Dirección: Miraflores 186,  Frente a la plaza, esquina nor-oriente, Papudo  <br/>Contacto: +56 33 248 9581<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.445024, -32.508016],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Café Benjamin  </strong><br/><br/><p>Dirección: Chorrillos 97, Papudo  <br/>Contacto: +56 55 555 5555<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.44698, -32.507318],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Don Rola  </strong><br/><br/><p>Dirección:Domingo Fernández Concha 555, Papudo  <br/>Contacto: +56 9 9046 9259<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.442148, -32.506699],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Restaurant Yachting Papudo  </strong><br/><br/><p>Dirección: Av. Irarrazabal 0201, Papudo, Chile  <br/>Contacto: +56 33 279 0889<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.445792, -32.505219],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>El Ancla  </strong><br/><br/><p>Dirección: Calle Costanera Horcón, Puchuncaví  <br/>Contacto: +56 32 279 6017<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.490774, -32.70945],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Los Duendes  </strong><br/><br/><p>Ubicación: Camino vecinal sn, Las Ventanas, Horcón  <br/>Contacto: +56 9 4109 1035<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.493015, -32.716433],
                },
              },
              {
                type: "Feature",
                properties: {
                  description:
                    "<strong>Club el Tebo  </strong><br/><br/><p>Ubicación: Camino Caucau El Tebo, Puchuncaví, Chile  <br/>Contacto: +56 32 279 4580<br/>   </p>",
                  icon: "restaurant",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-71.502765, -32.725935],
                },
              },
            ],
          },
        },
        layout: {
          "icon-image": "{icon}-15",
          "icon-allow-overlap": true,
        },
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      this.map.on("click", "places", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        this.map.flyTo({ center: e.features[0].geometry.coordinates });
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      this.map.on("mouseenter", "places", () => {
        this.map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      this.map.on("mouseleave", "places", () => {
        this.map.getCanvas().style.cursor = "";
      });
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  changeMap(event) {
    const result = this.options.find(
      (element) => element.name === event.target.value
    );

    this.map.flyTo({ center: [result.lng, result.lat] });
  }
}
