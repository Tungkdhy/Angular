import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule, NzIconService } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  NotificationFill,
  LaptopOutline
} from '@ant-design/icons-angular/icons';
const ngZorroIconLiteral =
  '<svg viewBox="0 0 106 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient x1="68.1279872%" y1="-35.6905737%" x2="30.4400914%" y2="114.942679%" id="linearGradient-1">\n      <stop stop-color="#FA8E7D" offset="0%"></stop>\n      <stop stop-color="#F74A5C" offset="51.2635191%"></stop>\n      <stop stop-color="#F51D2C" offset="100%"></stop>\n    </linearGradient>\n    <linearGradient x1="68.1279872%" y1="-35.6905737%" x2="74.5363914%" y2="162.511755%" id="linearGradient-2">\n      <stop stop-color="#FA8E7D" offset="0%"></stop>\n      <stop stop-color="#F74A5C" offset="51.2635191%"></stop>\n      <stop stop-color="#F51D2C" offset="100%"></stop>\n    </linearGradient>\n    <linearGradient x1="69.644116%" y1="0%" x2="69.644116%" y2="100%" id="linearGradient-3">\n      <stop stop-color="#29CDFF" offset="0%"></stop>\n      <stop stop-color="#148EFF" offset="37.8600687%"></stop>\n      <stop stop-color="#0A60FF" offset="100%"></stop>\n    </linearGradient>\n    <linearGradient x1="-19.8191553%" y1="-36.7931464%" x2="138.57919%" y2="157.637507%" id="linearGradient-4">\n      <stop stop-color="#29CDFF" offset="0%"></stop>\n      <stop stop-color="#0F78FF" offset="100%"></stop>\n    </linearGradient>\n  </defs>\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Angular" transform="translate(-11.000000, -4.000000)">\n      <g id="Group-9" transform="translate(11.000000, 4.000000)">\n        <path d="M65.63,72.2 L53.23,53.2 L46,63.69 L53.37,63.69 C56.4075661,63.69 58.87,66.1524339 58.87,69.19 C58.87,72.2275661 56.4075661,74.69 53.37,74.69 L35.49,74.69 C33.4448986,74.6890667 31.569189,73.5534846 30.620326,71.7418281 C29.671463,69.9301715 29.8061511,67.7416349 30.97,66.06 L48.84,40.26 C49.879226,38.7527636 51.6013948,37.8627393 53.4320154,37.8868264 C55.2626361,37.9109135 56.960791,38.8459421 57.96,40.38 L74.84,66.18 C75.9449505,67.8698206 76.0352122,70.0292067 75.0751376,71.8053446 C74.115063,73.5814826 72.2590116,74.6888076 70.24,74.69 C68.3799194,74.6978131 66.6433454,73.7598372 65.63,72.2 Z" id="Path" fill="url(#linearGradient-1)"></path>\n        <path d="M70.28,25 C69.0616939,25.0004053 67.8648105,24.6796268 66.81,24.07 L52.87,16.07 L39,24 C36.8331842,25.2504298 34.1638674,25.249892 31.9975556,23.9985892 C29.8312438,22.7472865 28.4970513,20.4353214 28.4975555,17.933589 C28.4980597,15.4318566 29.833184,13.1204295 32,11.87 L49.34,1.87 C51.5058075,0.619570435 54.1741925,0.619570435 56.34,1.87 L73.76,11.87 C76.574107,13.4207731 77.9710889,16.688234 77.147902,19.7941088 C76.324715,22.8999837 73.492775,25.0466031 70.28,25 Z" id="Path" fill="url(#linearGradient-2)"></path>\n        <path d="M52.86,119.92 C51.6310454,119.919338 50.4239235,119.595139 49.36,118.98 L3.93,92.75 C1.76486614,91.4999595 0.43077789,89.190081 0.43,86.69 L0.43,34.23 C0.43077789,31.729919 1.76486614,29.4200405 3.93,28.17 L15.16,21.69 C17.3290879,20.369153 20.0434251,20.3267208 22.2527396,21.5791219 C24.4620541,22.831523 25.8197544,25.182284 25.8004986,27.7218131 C25.7812428,30.2613423 24.3880518,32.5912449 22.16,33.81 L14.43,38.27 L14.43,82.65 L52.86,104.83 L89.7896161,83.5159515 C90.7180357,82.9801111 91.29,81.9896088 91.29,80.9176536 L91.29,40.0028421 C91.29,38.9306213 90.7177545,37.9399157 89.7889721,37.4041727 L83.61,33.84 C81.4431842,32.5895704 80.1080601,30.2781434 80.1075559,27.7764111 C80.1070518,25.2746788 81.4412443,22.9627138 83.6075559,21.7114111 C85.7738676,20.4601083 88.4431842,20.4595704 90.61,21.71 L101.79,28.17 C103.955134,29.4200405 105.289222,31.729919 105.29,34.23 L105.29,86.69 C105.289222,89.190081 103.955134,91.4999595 101.79,92.75 L56.36,119 C55.2952279,119.610805 54.087499,119.928265 52.86,119.92 Z" id="Path" fill="url(#linearGradient-3)" fill-rule="nonzero"></path>\n        <path d="M78.06,106.45 C66.89,113 52.87,104.83 52.87,104.83 L15.9403839,83.5159515 C15.0119643,82.9801111 14.44,81.9896088 14.44,80.9176536 L14.44,40.0026171 C14.44,38.9305169 15.0121179,37.9399035 15.9407356,37.4041163 L22.17,33.81 C24.3980518,32.5912449 25.7912428,30.2613423 25.8104986,27.7218131 C25.8297544,25.182284 24.4720541,22.831523 22.2627396,21.5791219 C20.0534251,20.3267208 17.3390879,20.369153 15.17,21.69 L3.94,28.17 C1.77486614,29.4200405 0.44077789,31.729919 0.44,34.23 L0.44,86.69 C0.44077789,89.190081 1.77486614,91.4999595 3.94,92.75 L49.36,119 C51.5258075,120.25043 54.1941925,120.25043 56.36,119 L78.06,106.47 L78.06,106.45 Z" id="Path" fill="url(#linearGradient-4)" fill-rule="nonzero"></path>\n      </g>\n    </g>\n  </g>\n</svg>'
const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, NotificationFill, LaptopOutline];
const logo = ''
@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral('ng-zorro:antd', ngZorroIconLiteral);
  }
}
