import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Basic health check
router.get('/health', async (req, res) => {
  try {
    const healthCheck = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: await checkDatabase(),
        memory: getMemoryUsage(),
      },
    };

    res.status(200).json(healthCheck);
  } catch (error) {
    const healthCheck = {
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      error: error instanceof Error ? error.message : 'Unknown error',
      services: {
        database: 'DISCONNECTED',
        memory: getMemoryUsage(),
      },
    };

    res.status(503).json(healthCheck);
  }
});

// Check database connection
async function checkDatabase(): Promise<string> {
  try {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.admin().ping();
      return 'CONNECTED';
    } else {
      return 'DISCONNECTED';
    }
  } catch (error) {
    return 'ERROR';
  }
}

// Get memory usage information
function getMemoryUsage() {
  const memUsage = process.memoryUsage();
  return {
    rss: `${Math.round(memUsage.rss / 1024 / 1024)} MB`,
    heapTotal: `${Math.round(memUsage.heapTotal / 1024 / 1024)} MB`,
    heapUsed: `${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`,
    external: `${Math.round(memUsage.external / 1024 / 1024)} MB`,
  };
}

export default router;
