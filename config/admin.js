module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '609109ab6de74aedf5313997e295ff66'),
  },
});
