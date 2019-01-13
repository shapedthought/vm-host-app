import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfigModel} from '../models/config.model';
import {ConfigsService} from '../services/configs.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {
  config: ConfigModel;
  cpuHostsReq = 0;
  ramHostReq = 0;
  calRun = false;
  id: number;
  editMode = false;


  envReqForm = new FormGroup( {
    configName: new FormControl('', Validators.required),
    reqCpu: new FormControl('', Validators.required),
    reqRam: new FormControl('', Validators.required),
    pToV: new FormControl('', Validators.required),
    ram: new FormControl('', Validators.required),
    sockets: new FormControl('', Validators.required),
    coresSocket: new FormControl('', Validators.required)
  });
  constructor(private ConfigService: ConfigsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          if (!isNaN(this.id)) {
            this.editMode = true;
          }
          this.initForm();
          // const config = this.ConfigService.getConfiguration(this.id);
          // console.log(this.id);
          // console.log(config);
        }
      );
  }
  private initForm() {
    if (this.editMode) {
      console.log('yes this is running');
      const config = this.ConfigService.getConfiguration(this.id);
      this.envReqForm.patchValue(
        {
                configName: config.configName,
                reqCpu: config.reqCpu,
                reqRam: config.reqRam,
                pToV: config.pTovRatio,
                ram: config.ramPerHost,
                sockets: config.sockets,
                coresSocket: config.coreToSocket
        });
      // this.onCalculate();
    }
  }

  onCalculate() {
    const data = this.envReqForm.value;
    const coresPerHost = data.coresSocket * data.sockets;
    const reqCores = data.reqCpu / data.pToV;
    this.cpuHostsReq = Math.ceil(reqCores / coresPerHost) + 1;
    this.ramHostReq = Math.ceil(data.reqRam / data.ram) + 1;
    this.config = new ConfigModel (data.configName, data.reqCpu,
      data.reqRam, data.pToV, data.sockets, data.coresSocket, data.ram, this.cpuHostsReq, this.ramHostReq);
    this.calRun = true;
  }
  onSave() {
    this.ConfigService.addConfig(this.config);
    this.router.navigate(['/config_list']);
    this.editMode = false;
  }
  onUpdate() {
    this.ConfigService.updateConfig(this.id, this.config);
    this.router.navigate(['/config_list']);
    this.editMode = false;
  }
  onDelete() {
    this.ConfigService.deleteConfig(this.id);
    this.router.navigate(['/config_list']);
    this.editMode = false;
  }
}
