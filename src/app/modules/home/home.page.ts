import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/shared/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomeComponent implements OnInit {

  allDoctors: Doctor[];

  constructor(private doctorService: DoctorService) { 
    this.doctorService.getDoctors().subscribe(doctors => { 
      this.allDoctors = doctors;
    });      
  }

  ngOnInit() { }

}
