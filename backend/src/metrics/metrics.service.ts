import { Injectable } from '@nestjs/common';
import { booksAccessedCounter, register } from './metrics.config';

@Injectable()
export class MetricsService {
  incrementBooksAccessed() {
    // Increment the counter when books endpoint is accessed
    booksAccessedCounter.inc();
  }

  async getMetrics(): Promise<string> {
    // Return all metrics from the registry
    return register.metrics();
  }
}
