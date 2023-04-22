import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labelform',
  templateUrl: './labelform.component.html',
  styleUrls: ['./labelform.component.sass']
})
export class LabelformComponent {
  @Input('titleLabel') titleLabel: string ="titulo del label";
}
