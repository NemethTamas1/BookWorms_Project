import { Controller, Get } from '@nestjs/common';
import { collectDefaultMetrics, Registry } from 'prom-client';
import { MetricsService } from './metrics.service';

const register = new Registry();
collectDefaultMetrics({ register });

@Controller('api/metrics')
export class MetricsController {
    constructor(private readonly metricService:MetricsService){}
    @Get()
    async getMetrics() {
        return await this.metricService.getMetrics();
    }
}