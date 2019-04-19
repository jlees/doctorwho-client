import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Companion } from 'src/app/shared/models/companion';
import { CompanionService } from 'src/app/core/services/companion.service';
import { Doctor } from 'src/app/shared/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
  selector: 'app-companion-detail',
  templateUrl: './companion-detail.page.html',
  styleUrls: ['./companion-detail.page.scss']
})
export class CompanionDetailComponent implements OnInit {

  companion: Companion;
  companionForEdit: Companion;  
  allDoctors: Doctor[];
  associatedDoctors: Doctor[];
  inEditMode: boolean;

  constructor(private route: ActivatedRoute,
              private companionService: CompanionService,
              private doctorService: DoctorService) {
      this.companion = new Companion();
      this.companionForEdit = null;
      this.allDoctors = [];
      this.associatedDoctors = [];      
      this.inEditMode = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let companionId = +params['companion_id'];
      if (companionId) {
        this.companionService.getCompanion(companionId).subscribe(companion => { 
          this.companion = companion; 
          if (companion) {
            this.doctorService.getDoctors().subscribe(doctors => { 
              this.allDoctors = doctors;
              this.updateAssociatedDoctorsFromContact();
            });
          }
        });
      }
    });
  }

  updateAssociatedDoctorsFromContact() {
    let doctorIds: number[] = this.companion.doctorIds;
    if (doctorIds) {
      this.associatedDoctors = this.allDoctors.filter(doctor => doctorIds.includes(doctor.id));
    }
  }

  switchToEditMode() {
    this.companionForEdit = Object.assign({}, this.companion);
    this.companionForEdit.doctorIds = Object.assign([], this.companion.doctorIds);
    this.inEditMode = true;    
  }

  saveCompanionEdits() {
    this.companionService.saveCompanion(this.companionForEdit).subscribe(companion => {
      this.companion = this.companionForEdit;
      this.updateAssociatedDoctorsFromContact();
      this.inEditMode = false;
      this.companionForEdit = null;
    });  
  }

  cancelCompanionEdits() {
    this.inEditMode = false;
    this.companionForEdit = null;
  }

}
