import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { Recipient } from 'src/app/models/recipient';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-find-recipients',
  templateUrl: './find-recipients.component.html',
  styleUrls: ['./find-recipients.component.css']
})
export class FindRecipientsComponent implements OnInit {

  private recs: Recipient[];
  constructor(private orgService: OrganizationService) { }

  ngOnInit() {
    this.orgService.getRecipients().subscribe(
      (data: Recipient[]) => {
        this.recs = data["docs"];
        console.log(this.recs);
      },
      err => { console.log(err) }
    )
  }
  search(formdata: NgForm) {
    var search = formdata.value["search"];
    this.orgService.searchRecipients(search).subscribe(
      (data: Recipient[]) => {
        this.recs = data["docs"];
      },
      err => { console.log(err) }
    )
  }
}
