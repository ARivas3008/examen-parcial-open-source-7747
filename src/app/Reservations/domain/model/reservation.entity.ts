export class Reservation {
  constructor(
    public readonly id: number,
    public readonly outdoorCenterId: number,
    public readonly activityType: string,
    public readonly participantName: string,
    public readonly participants: number,
    public readonly weatherTemperature: string,
    public readonly reservedAt: string,
  ) {}
}
