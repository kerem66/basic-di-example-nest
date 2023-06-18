import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { PowerService } from 'src/power/power.service';
PowerService;
@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): number {
    log('drawing 20 watts of energy');
    this.powerService.supplyPower(20);
    return 20;
  }
}
