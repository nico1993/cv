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
        College: "Sarasa",
        Title: "SarasaTitle",
        Year: 2015,
        Detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam a expedita, repudiandae excepturi ipsa aperiam eaque, corporis nulla dolorem, necessitatibus vero temporibus. Provident fugiat ex obcaecati repellat quam similique."
      },
      {
        College: "Sarasa",
        Title: "SarasaTitle",
        Year: 2016,
        Detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam a expedita, repudiandae excepturi ipsa aperiam eaque, corporis nulla dolorem, necessitatibus vero temporibus. Provident fugiat ex obcaecati repellat quam similique."
      },
      {
        College: "Sarasa",
        Title: "SarasaTitle",
        Year: 2017,
        Detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam a expedita, repudiandae excepturi ipsa aperiam eaque, corporis nulla dolorem, necessitatibus vero temporibus. Provident fugiat ex obcaecati repellat quam similique."
      },
    ],
    experiences: [
      {
        Position: "Software developer",
        Period: "2015 - Actualidad",
        Detail: "Detalle",
        Company: "Soluciones IT"
      },
      {
        Position: "Freelancer",
        Period: "2018 - Actualidad",
        Detail: "Detalle",
        Company: ""
      }
    ],
    skills: [
      {
        Name: "Full-stack developer",
        Experience: 3,
        ExperienceFormat: "Años",
        HabilityLevel: 70
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
