import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  configurations: ConfigModel[] = [
    // new ConfigModel('peakside & charter point', 746, 1962, 4, 2, 18, 384,  7, 7),
    // new ConfigModel('Charterpoint', 377, 794, 4, 2, 18 , 384, 4, 4)
  ];
  constructor() { }
  getConfigurations() {
    return this.configurations.slice();
  }
  getConfiguration(index: number) {
    return this.configurations[index];
  }
  deleteConfig(index) {
    this.configurations.splice(index, 1);
  }
  addConfig(config: ConfigModel) {
    this.configurations.push(config);
  }
  updateConfig(index, config: ConfigModel) {
    this.configurations.splice(index, 1, config);
  }
}
