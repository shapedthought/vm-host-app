import {Component, Input, OnInit} from '@angular/core';
import {ConfigModel} from '../../models/config.model';

@Component({
  selector: 'app-config-item',
  templateUrl: './config-item.component.html',
  styleUrls: ['./config-item.component.css']
})
export class ConfigItemComponent implements OnInit {
  @Input() config: ConfigModel;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
