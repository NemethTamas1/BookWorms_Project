// metrics.config.ts
import { Registry, Counter, collectDefaultMetrics } from 'prom-client';

export const register = new Registry();

// Initialize and register default metrics
collectDefaultMetrics({ register });

// Initialize your metrics here
export const booksAccessedCounter = new Counter({
  name: 'books_accessed',
  help: 'Number of times the books endpoint was accessed',
  registers: [register], // Register the metric with the global registry
});
