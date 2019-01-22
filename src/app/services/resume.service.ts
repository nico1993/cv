import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { Skill } from '../models/skill';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  public educations: Education[] = [];
  public experiences: Experience[] = [];
  public skills: Skill[] = [];
  
  response = {
    educations: [
      {
        College: "Escuela de Programación",
        Title: "Programador Web",
        Year: 2014,
        Detail: ["HTML5, CSS3, PHP, MYSQL"]
      },
      {
        College: "UTN FRM",
        Title: "Técnico Superior en Programación",
        Year: 2015,
        Detail: [""]
      },
      {
        College: "Udemy",
        Title: "Angular (7+): De cero a experto creando aplicaciones",
        Year: 2018,
        Detail: [
          "Base sólida para trabajar con Angular",
          "Nuevos conceptos del ECMAScript 6",
          "Introducción a Ionic",
          "Conceptos de TypeScript"
        ]
      },
      {
        College: "Udemy",
        Title: "Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN STACK",
        Year: 2018,
        Detail: [
          "Módulos, servicios y lazyload",
          "Creación de backend con Mongo y ExpressJs",
          "JWT",
          "Pruebas unitarias y de integración"
        ]
      },
      {
        College: "Udemy",
        Title: "Angular: Convierte cualquier template HTML en una WebAPP",
        Year: 2018,
        Detail: [
          "Uso de Angular y Firebase",
          "Desplegar una aplicación en producción",
          "Conocimiento necesario para migrar cualquier template a una aplicación de Angular"
        ]
      },
      {
        College: "Udemy",
        Title: "Angular: Convierte cualquier template HTML en una WebAPP",
        Year: 2019,
        Detail: [
          "Uso de sockets en el lado del cliente y servidor",
          "Emisión y escucha de eventos por medio de sockets.",
          "Crear aplicaciones en tiempo real"
        ]
      },
    ],
    experiences: [
      {
        Position: "PHP / C# / Angular Developer",
        Period: "2015 - Actualidad",
        Detail: [
          "Resolución de problemas y requerimientos de productos propios de la empresa",
          "Mantener constantemente el soporte de la plataforma FacturaciónWEB",
          "Mantenimiento de bases de datos"
        ],
        Company: "Soluciones IT"
      },
      {
        Position: "Freelancer",
        Period: "2018 - Actualidad",
        Detail: [
          "Desarrollo de actualizaciones para un sistema en ASP.NET"
        ],
        Company: ""
      }
    ],
    skills: [
      {
        Name: "Full-stack developer",
        Experience: 3,
        ExperienceFormat: "Años",
        HabilityLevel: 70
      },
      {
        Name: "Angular",
        Experience: 3,
        ExperienceFormat: "Años",
        HabilityLevel: 70,
        Icon: 'skill-icon fab fa-angular',
        IconStyle: {
          'color': '#e23237'
        }
      },
      {
        Name: "NodeJs",
        Experience: 3,
        ExperienceFormat: "Años",
        HabilityLevel: 70,
        Icon: 'skill-icon fab fa-node',
        IconStyle: {
          'color': '#3e863d'
        }
      }
    ]
  };

  constructor(public http: HttpClient) { }

  getResumeData() {
    this.educations = this.response.educations;
    this.experiences = this.response.experiences;
    this.skills = this.response.skills;
  }
}
