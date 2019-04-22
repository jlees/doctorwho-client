import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/shared/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {

  private doctor: Doctor

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { 
    this.doctor = new Doctor();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let doctorId = +params['doctor_id'];
      if (doctorId || 0 === doctorId) {
        this.doctorService.getDoctor(doctorId).subscribe(doctor => { 
          this.doctor = doctor; 
        });
      }
    });    
  }

}
