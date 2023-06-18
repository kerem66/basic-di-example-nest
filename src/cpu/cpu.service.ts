import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number): number {
    log('supplying 10 watts of energy');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
