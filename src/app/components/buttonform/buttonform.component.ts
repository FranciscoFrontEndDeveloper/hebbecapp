import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttonform',
  templateUrl: './buttonform.component.html',
  styleUrls: ['./buttonform.component.sass']
})
export class ButtonformComponent {
@Input('valueButton') valueButton = 'valor'
}
