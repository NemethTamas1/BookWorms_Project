
import { Injectable } from '@nestjs/common';
import { Counter, register } from 'prom-client';

@Injectable()
export class MetricsService {
  private readonly booksAccessedCounter: Counter<string>;

  constructor() {
    // Register the metric once in the constructor
    this.booksAccessedCounter = new Counter({
      name: 'books_accessed',
      help: 'Number of times the books endpoint was accessed',
    });
  }

  async getMetrics() {
    // Increment the counter
    this.booksAccessedCounter.inc();
    // Return all metrics
    return register.metrics();
  }
}