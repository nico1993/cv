import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { transition, trigger, style, state, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(public _resume: ResumeService) { }

  ngOnInit() {
    this._resume.getResumeData();
  }

}
