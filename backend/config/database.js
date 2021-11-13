module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.esplt.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'lillys-pottery'),
        username: env('DATABASE_USERNAME', 'maxadams'),
        password: env('DATABASE_PASSWORD', 'toXoid84'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
