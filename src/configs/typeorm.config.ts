import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'postgres',
  synchronize: true,
  autoLoadEntities: true,
  logging: ['error', 'query', 'info', 'log', 'migration', 'schema'],
  logger: 'simple-console',
};
