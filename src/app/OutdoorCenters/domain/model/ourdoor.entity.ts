export class Bookstore {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly activityType: string,
    public readonly capacity: string,
    public readonly latitude: string,
    public readonly longitude: string,
  ) {}
}
