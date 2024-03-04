import { NextApiRequest, NextApiResponse } from "next";
import sql from "../../lib/db";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const data = await sql.begin(async (sql) => {
		const presiden = await sql`
		SELECT DATE(updated_at) AS date, COUNT('id') AS count
		FROM ppwp_tps
		GROUP BY DATE(updated_at)
		ORDER BY DATE(updated_at) DESC`;

		const dpd = await sql`
		SELECT DATE(updated_at) AS date, COUNT('id') AS count
		FROM pdpd_tps_list
		GROUP BY DATE(updated_at)
		ORDER BY DATE(updated_at) DESC`;

		const dpr = await sql`
		SELECT DATE(updated_at) AS date, COUNT('id') AS count
		FROM pdpr_tps_list
		GROUP BY DATE(updated_at)
		ORDER BY DATE(updated_at) DESC`;

		// const dpr = await sql`
		// SELECT TO_CHAR(updated_at, 'YYYY-MM-DD HH24:00:00') AS date, COUNT(id) AS count
		// FROM pdpr_tps_list
		// GROUP BY TO_CHAR(updated_at, 'YYYY-MM-DD HH24:00:00')
		// ORDER BY date DESC`;

		return { presiden, dpd, dpr };
	});

	res.status(200).json({ data });
}
