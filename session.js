import session from "express-session";
import env from "dotenv";
import genFunc from "connect-pg-simple";

env.config();
const {
    PGCONNECTION_STRING,
    SESS_NAME,
    SESS_SECRET
} = process.env;

const PostgresqlStore = genFunc(session);
const sessionStore = new PostgresqlStore({
    conString: PGCONNECTION_STRING

})

const Session = session({
    store: sessionStore,
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
});

export default Session;