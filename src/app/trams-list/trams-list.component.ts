import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data/services/data.service';
import { TramsService } from '../data/services/trams.service';
import { TramModel } from '../data/tram-model';

@Component({
    selector: 'app-trams-list',
    templateUrl: './trams-list.component.html',
    styleUrls: ['./trams-list.component.scss']
})
export class TramsListComponent implements OnInit {

    trams: TramModel[];
    
    subscription!: Subscription;

    constructor(private service: TramsService,
        private data: DataService) { }

    ngOnInit(): void {
        // get data from home component using rx js
        this.subscription = this.data.currentMessage.subscribe((message) => {
            this.trams = message;
        });

    }



}
