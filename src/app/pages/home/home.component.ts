import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  name: string;
  age: string | number;
  address: string;
  stt?:string;
  resolution?:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listOfData: Person[] = [
    {
      key: '1',
      stt: '1',
      name: 'Phát hiện chuyển dộng',
      age: '20/11/2024',
      resolution:"4K-HD",
      address: 'New York No. 1 Lake Park'
    },
    {
      stt: '2',
      key: '2',
      name: 'Cảnh báo cháy',
      age: '20/11/2024',
      resolution:"4K-HD",
      address: 'London No. 1 Lake Park'
    },
    {
      stt: '3',
      key: '3',
      name: 'Camera dịch chuyển',
      age: '20/11/2024',
      resolution:"4K-HD",
      address: 'Sidney No. 1 Lake Park'
    }
  ];

}
