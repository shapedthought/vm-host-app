import { Component, OnInit } from '@angular/core';
import { ConfigModel } from '../models/config.model';
import {ConfigsService} from '../services/configs.service';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {
  configurations: ConfigModel[];
  configShow = true;
  constructor(private configService: ConfigsService) { }

  ngOnInit() {
    this.configurations = this.configService.getConfigurations();
    if (this.configurations.length === 0 ) {
      this.configShow = false;
    }
  }

}
