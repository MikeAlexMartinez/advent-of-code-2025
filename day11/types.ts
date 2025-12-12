export type DeviceId = string;

export interface Device {
  id: DeviceId;
  connections: DeviceId[];
}
