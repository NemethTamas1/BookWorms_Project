import { Controller, Get } from '@nestjs/common';
import { collectDefaultMetrics, Registry } from 'prom-client';
import { MetricsService } from './metrics.service';

const register = new Registry();
collectDefaultMetrics({ register });

@Controller('api/metrics')
export class MetricsController {
    constructor(private readonly metricsService: MetricsService) {}

    @Get()
    async getMetrics(): Promise<string> {
      // Fetch metrics and return
      return this.metricsService.getMetrics();
    }
}