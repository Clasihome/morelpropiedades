export interface Propiedad {
  id: number;
  tipo: string;
  operacion: string;
  titulo: string;
  ubicacion: string;
  codigo: string;
  sup_const: any;
  sup_total: any;
  banios: any;
  habitaciones: any;
  privados: any;
  captador: string;
  img_destacada: string;
  thumb: string;
  latitud: string;
  longitud: string;
  captador_email: string;
  captador_celu: string;
  garages: any;
  gasto_comun: string;
  publicado: string;
  pesos: string;
  uf: string;
  imagenes?: string[];
  thumbs?: string[];
  descripcion?: string;
  link_video: string;
  caracterisiticas?: string[];
}

export interface RespPropiedades {
  properties: Property[];
  totalRegisters: number;
  totalRegistersQuery: number;
  totalResults: number;
  hasMore: number;
  page: number;
  perPage: number;
}


export interface Comunas {
  id: string;
  name: string;
  state: State;
  country: State;
  neighborhoods: State[];
  geo_information: Geoinformation;
}

interface Geoinformation {
  location: Location;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface State {
  id: string;
  name: string;
}

export interface Pagination {
  currentpage: number;
  lastpage: number;
}

export interface RespPropiedadDetalle {
  propiedad: Propiedad;
}

export interface LatLng {
  lat: string;
  lng: string;
}

export interface Agente {
  id: number;
  nombre: string;
  tel: string;
  cel: string;
  email: string;
  avatar: string;
}

export interface RespuestaAgentes {
  agentes: Agente[];
}

export interface RespuestaEmail {
  msj: string;
  status: number;
}

export interface ValorSbif {
  Valor: string;
  Fecha: string;
}

export interface RespuestaSbifUF {
  UFs: ValorSbif[];
}

export interface RespuestaSbifUTMs {
  UTMs: ValorSbif[];
}

export interface RespuestaSbifDolar {
  Dolares: ValorSbif[];
}

export interface FormData {
  asunto: string;
  mensaje?: string;
  emailTo: string;
}


export interface Property {
  _id: string;
  value: number;
  characteristics: Characteristic[];
  images: Image[];
  videos: any[];
  status: string;
  code: string;
  propertyType: string;
  operation: string;
  currency: string;
  mainImage: string;
  publicObservations: string;
  title: string;
  ubication: Ubication;
  _characteristics: any[];
  _assignedUser: AssignedUser[];
  _comercialUser: AssignedUser[];
  _assignedUser_person: AssignedUserperson[];
  _comercialUser_person: AssignedUserperson[];
  _office: Office[];
  whatsapp?: string;
}

interface Office {
  logo?: any;
  email: string;
  phone: Phone;
  name: string;
}

interface AssignedUserperson {
  firstName: string;
  lastName: string;
  phone: Phone;
}

interface Phone {
  areaCode: string;
  countryCode: string;
  phoneNumber: string;
}

interface AssignedUser {
  email: string;
  avatar?: any;
  position: string;
  internalEmail: string;
}

interface Ubication {
  location: Location;
  commune: string;
  address: string;
  number: string;
  region: string;
}

interface Location {
  coordinates: string[];
}

interface Image {
  url: string;
  name: string;
  order: number;
}

interface Characteristic {
  id: string;
  name: string;
  value: boolean | number | number | number | string | string;
}