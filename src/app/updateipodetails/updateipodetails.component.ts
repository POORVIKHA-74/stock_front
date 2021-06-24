import { Component, OnInit } from '@angular/core';
import {CompanyServiceService} from '../company-service.service';
import {ipodetails} from '../ipodetails';
@Component({
  selector: 'app-updateipodetails',
  templateUrl: './updateipodetails.component.html',
  styleUrls: ['./updateipodetails.component.scss']
})
export class UpdateipodetailsComponent implements OnInit {

   ipodetails:ipodetails=new ipodetails("","",0,0,"","");
    message:any;
   constructor(private service:CompanyServiceService) { }

  ngOnInit(): void {
  }

  public addiponow(){
    let responnse=this.service.addipo(this.ipodetails);
    responnse.subscribe(data=>{
      this.message=data;
    })
  }

}
