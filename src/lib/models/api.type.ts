export interface SetupRecord {
  id: string,
  idle: number,
  load: number,
  measuringDevice?: string,
  cState?: string,
  motherboard?: string,
  cpu?: string,
  cpuCooler?: string,
  gpu?: string,
  ram?: string,
  bootDrive?: string,
  psu?: string,
  powerAdapter?: string,
  os?: string,
  mouse?: string,
  keyboard?: string,
  monitor?: string,
  status: string,
  user: string,
  created: Date,
  updated: Date,
}

export interface UserRecord {
  id: String,
  username: String,
  name?: String,
  avatar?: String,
  created: Date,
  updated: Date,
}

export default class type {
}