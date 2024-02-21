import postgres from "postgres";
import { env } from "./env";

const sql = postgres({
	user: env.PGUSER,
	password: env.PGPASSWORD,
	host: env.PGHOST,
	port: env.PGPORT,
	database: env.PGDATABASE,
});

export default sql;
