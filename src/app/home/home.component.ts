import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { DataService } from '../data/services/data.service';
import { TramsService } from '../data/services/trams.service';
import { TramModel } from '../data/tram-model';

const PrimaryWhite = "#ffffff";
const SecondaryGrey = "#ccc";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tram: TramModel
  dateTime: any;
  trams: TramModel[];
  /**for Loading  */
  public loading = false;
  @ViewChild("ngxLoading") ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild("customLoadingTemplate") customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public config = {
    animationType: this.ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: "3px",
  };

  constructor(private service: TramsService,
    private dataServer: DataService) { }

  ngOnInit(): void {
    this.getTramList()
  }

  /**data */
  getTramList() {
    this.loading = true;
    this.service.findAll().subscribe(data => {
      this.loading = false;

      this.dateTime = data.ResponseData.LatestUpdate
      //filter data by JourneyDirection = 1 // for heading towards Gullmarsplan 
      var dataFilterd: TramModel[] = data.ResponseData.Trams.filter(function (item) {
        return item.JourneyDirection === 1;
      });
      this.trams = dataFilterd;
      //find one model of trams
      this.tram = dataFilterd[1];
      // to send trams List to Home Components
      this.dataServer.changeMessage(dataFilterd);
    }, err => {
      console.log(err);
    })
  }


}
