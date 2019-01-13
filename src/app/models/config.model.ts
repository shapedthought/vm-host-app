export class ConfigModel {
  public configName: string;
  public reqCpu: number;
  public reqRam: number;
  public pTovRatio: number;
  public sockets: number;
  public ramPerHost: number;
  public coreToSocket: number;
  public cpuHostsReq: number;
  public ramHostReq: number;


  constructor(configName: string, reqCpu: number, reqRam: number,
              pTovRatio: number, sockets: number, coreToSocket: number,
              ramPerHost: number, cpuHostReq: number, ramHostReq: number) {
    this.configName = configName;
    this.reqCpu = reqCpu;
    this.reqRam = reqRam;
    this.pTovRatio = pTovRatio;
    this.sockets = sockets;
    this.ramPerHost = ramPerHost;
    this.coreToSocket = coreToSocket;
    this.cpuHostsReq = cpuHostReq;
    this.ramHostReq = ramHostReq;
  }
}
