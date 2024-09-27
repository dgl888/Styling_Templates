export interface IApplication {
  id: string,
  username: string,
  pidm: string,
  status: IApplicationStatus,
  statePermitNumber: string,
  permitState: string,
  permitExpirationDate: string,
  storageDorm: boolean,
  storageCar: boolean,
  applicationSignature: string,
  updatedBy: string,
  activityDate: string,
}

export enum IApplicationStatus {
  ACC = 'ACCEPTED',
  ARA = 'AWAITING ROOMMATE APPROVAL',
  DEC = 'DECLINED',
  INC = 'INCOMPLETE',
  REV = 'UNDER REVIEW',
  RDC = 'ROOMMATE DECLINED',
  EXP = 'EXPIRED'
}
