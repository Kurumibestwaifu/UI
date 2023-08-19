module.exports = {
    DBConnectors: {
        host: process.env.DB_HOST || "db4free.net",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || "namukurumi_db",
        password: process.env.DB_PASSWORD || "Kurumiichiban",
        database: process.env.DB_NAME || "namukurumi_db",
        dialect: process.env.DB_DIALECT || "mysql",
    },
    jwtAuthKey: 'abcxyz',
    tokenLoginExpiredDays:'25 days'
};
