import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlesection',
  templateUrl: './titlesection.component.html',
  styleUrls: ['./titlesection.component.sass']
})
export class TitlesectionComponent {
  @Input('titleSection') titleSection: string ="titulo del label";
}
