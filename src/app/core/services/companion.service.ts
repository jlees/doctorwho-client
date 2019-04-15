import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companion } from 'src/app/shared/models/companion';

@Injectable({
  providedIn: 'root'
})
export class CompanionService {

  constructor(private http: HttpClient) { }

  getCompanion(companion_id: number): Observable<Companion> {
    return this.http.get<Companion>(`http://localhost:8080/api/companions/${companion_id}`);  
  }

  getCompanions(): Observable<Companion[]> {
     return this.http.get<Companion[]>("http://localhost:8080/api/companions");
    // return [
    //   {id:1, name:'Susan Forman', doctorIds:['1']},
    //   {id:2, name:'Ian Chesterton', doctorIds:['1']},
    //   {id:3, name:'Barbara Wright', doctorIds:['1']},
    //   {id:4, name:'Vicki', doctorIds:['1']},
    //   {id:5, name:'Steven Taylor', doctorIds:['1']},
    //   {id:6, name:'Katarina', doctorIds:['1']},
    //   {id:7, name:'Dodo Chaplet', doctorIds:['1']},
    //   {id:8, name:'Ben Jackson', doctorIds:['1', '2']},
    //   {id:9, name:'Polly Wright', doctorIds:['1', '2']},
    //   {id:10, name:'Jamie McCrimmon', doctorIds:['2']},
    //   {id:11, name:'Victoria Waterfield', doctorIds:['2']},
    //   {id:12, name:'Zoe Heriot', doctorIds:['2']},
    //   {id:13, name:'Alistair Gordon Lethbridge-Stewart', doctorIds:['2','3','4','5','7']},
    //   {id:14, name:'John Benton', doctorIds:['2','3','4']},
    //   {id:15, name:'Liz Shaw', doctorIds:['3']},
    //   {id:16, name:'Mike Yates', doctorIds:['3']},
    //   {id:17, name:'Jo Grant', doctorIds:['3']},
    //   {id:18, name:'Sarah Jane Smith', doctorIds:['3','4']},
    //   {id:19, name:'Harry Sullivan', doctorIds:['4']},
    //   {id:20, name:'Leela', doctorIds:['4']},
    //   {id:21, name:'K-9', doctorIds:['4']},
    //   {id:22, name:'Romana', doctorIds:['4']},
    //   {id:23, name:'Adric', doctorIds:['4']},
    //   {id:24, name:'Nyssa', doctorIds:['4','5']},
    //   {id:25, name:'Tegan Jovanka', doctorIds:['4','5']},
    //   {id:26, name:'Vislor Turlough', doctorIds:['5']},
    //   {id:27, name:'Kamelion', doctorIds:['5']},
    //   {id:28, name:'Peri Brown', doctorIds:['5','6']},
    //   {id:29, name:'Melanie Bush', doctorIds:['6','7']},
    //   {id:30, name:'Ace', doctorIds:['7']},
    //   {id:31, name:'Grace Holloway', doctorIds:['8']},
    //   {id:32, name:'Cinder', doctorIds:['war']},
    //   {id:33, name:'Rose Tyler', doctorIds:['9','10']},
    //   {id:34, name:'Mickey Smith', doctorIds:['9','10']},
    //   {id:35, name:'Jack Harkness', doctorIds:['9','10']},
    //   {id:36, name:'Donna Noble', doctorIds:['10']},
    //   {id:37, name:'Martha Jones', doctorIds:['10']},
    //   {id:38, name:'River Song', doctorIds:['10','11','12']},
    //   {id:39, name:'Amy Pond', doctorIds:['11']},
    //   {id:40, name:'Rory Williams', doctorIds:['11']},
    //   {id:41, name:'Clara Oswin Oswald', doctorIds:['12']},
    //   {id:42, name:'Nardole', doctorIds:['12']},
    //   {id:43, name:'Bill Potts', doctorIds:['12']},
    //   {id:44, name:'Graham O\'Brien', doctorIds:['13']},
    //   {id:45, name:'Ryan Sinclair', doctorIds:['13']},
    //   {id:46, name:'Yasmin Khan', doctorIds:['13']}
    // ];
  } 

}
