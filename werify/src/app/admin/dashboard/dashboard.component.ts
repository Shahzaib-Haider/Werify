import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  private orgs = 0;
  private rec = 0;
  private cert = 0;
  private jobs = 0;
  ngOnInit() {
    this.adminService.GetStats().subscribe(
      data => {
        console.log(data);
        this.orgs = data["org"];
        this.rec = data["rec"];
        this.cert = data["cert"];
        this.jobs = data["job"];
      },
      err => { console.log(err) }
    )
  }
  open() {
    var url = "https://rinkeby.etherscan.io/address/0xfe4B085669f71608de16428d3815Bc4194aB2145";
    window.open(url, "_blank");
  }

}
