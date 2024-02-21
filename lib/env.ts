import z from "zod";

const schema = z.object({
	PGHOST: z.string(),
	PGPORT: z.coerce.number(),
	PGDATABASE: z.string(),
	PGUSER: z.string(),
	PGPASSWORD: z.string(),
});

export const env = schema.parse(process.env);
