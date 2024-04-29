import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-parking-lot',
  standalone: true,
  imports: [],
  providers: [MasterService],
  templateUrl: './parking-lot.component.html',
  styleUrl: './parking-lot.component.scss',
})
export class ParkingLotComponent implements OnInit {
  masterService = inject(MasterService);
  selectedParkingLotId: number = 0;

  parkingLotList: any[] = [];

  ngOnInit(): void {
    this.getParkingLots();
  }

  getParkingLots() {
    this.masterService.getAllParkingLots().subscribe((res: any) => {
      this.parkingLotList = res.data;
      this.selectedParkingLotId = this.parkingLotList[0].parkingLotId;
    });
  }
}
