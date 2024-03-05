import z from "zod";

const schema = z.object({
	PGHOST: z.string(),
	PGPORT: z.coerce.number(),
	PGDATABASE: z.string(),
	PGUSER: z.string(),
	PGPASSWORD: z.string(),
	NODE_ENV: z.enum(["development", "production"]).default("development"),
});

export const env = schema.parse(process.env);
