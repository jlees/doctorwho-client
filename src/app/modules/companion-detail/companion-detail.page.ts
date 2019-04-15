import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Companion } from 'src/app/shared/models/companion';
import { CompanionService } from 'src/app/core/services/companion.service';
import { Doctor } from 'src/app/shared/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-companion-detail',
  templateUrl: './companion-detail.page.html',
  styleUrls: ['./companion-detail.page.scss']
})
export class CompanionDetailComponent implements OnInit {

  hasWritePermission: Boolean;
  companion: Companion;
  doctors: Doctor[];

  constructor(private route: ActivatedRoute,
              private authService: AuthService, 
              private companionService: CompanionService,
              private doctorService: DoctorService) {
      this.hasWritePermission = this.authService.hasWritePermission();
      this.companion = new Companion();
      this.doctors = [];
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let companionId = +params['companion_id'];
      if (companionId) {
        this.companionService.getCompanion(companionId).subscribe(companion => { 
          this.companion = companion; 
          if (companion) {
            let doctorIds: number[] = companion.doctorIds;
            this.doctorService.getDoctors().subscribe(doctors => { 
              if (doctorIds) {
                doctors = doctors.filter(doctor => doctorIds.includes(doctor.id));
              }
              this.doctors = doctors; 
            });
          }
        });
      }
    });
  }

}
