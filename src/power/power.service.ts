import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    log(`supplying ${watts} worth of power`);
  }
}
