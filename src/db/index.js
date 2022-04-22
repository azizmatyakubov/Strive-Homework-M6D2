import { Sequelize} from 'sequelize';

const {PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE, NODE_ENV} = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: 'postgres',
    ...(NODE_ENV==='production' && {
        dialectOptions:{
            ssl: {
                required: true,
                rejectUnAutorized: false
            }
        }
    })
});

export const testDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
       
    } catch (error) {
        console.log('Connection to database failed');
    }
}

export const syncDB = async()=>{
    try {
        await sequelize.sync();
        console.log('Database has been synced');
    } catch (error) {
        console.log('Connection to database failed')
    }
}

export default sequelize