import { useData } from "nextra/data";
import { z } from "zod";

const schema = z.object({
	data: z.object({
		presiden: z.array(z.object({ date: z.string(), count: z.string() })).min(1),
		dpd: z.array(z.object({ date: z.string(), count: z.string() })).min(1),
		dpr: z.array(z.object({ date: z.string(), count: z.string() })).min(1),
	}),
});

export const getLastUpdate = async () => {
	const resp = await fetch("https://data-pemilu.vercel.app/api/update").then(
		(res) => res.json(),
	);

	const data = schema.parse(resp);

	return data;
};

type LastUpdate = z.infer<typeof schema>;

export const LastUpdateCard = () => {
	const {
		lastUpdate: { data },
	} = useData() as {
		lastUpdate: LastUpdate;
	};

	type Card = {
		date: string;
		count: string;
	}[];

	const Card = ({ title, data }: { title: string; data: Card }) => {
		return (
			<div className="border border-gray-300 p-4 rounded-md">
				<h2 className="text-xl font-bold">{title}</h2>
				{data.map((item) => (
					<div key={item.date} className="flex justify-between">
						<p>{formatDateFromISOToLocale(item.date)}</p>
						<p>{addDotsToNumber(item.count)} baris</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="mt-6 mb-6">
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
				<Card title="Presiden" data={data.presiden} />
				<Card title="DPD" data={data.dpd} />
				<Card title="DPR" data={data.dpr} />
			</div>
		</div>
	);
};

const formatDateFromISOToLocale = (date: string) => {
	// Only for the date that is not available
	if (date === "2024-02-16T00:00:00.000Z") {
		return "-";
	}

	return new Date(date).toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

const addDotsToNumber = (numStr: string) => {
	let result = "";

	// Loop through the string from right to left
	for (let i = numStr.length - 1, count = 0; i >= 0; i--, count++) {
		// Add dot every 3 characters from the right
		if (count !== 0 && count % 3 === 0) {
			result = `.${result}`; // Add dot
		}
		result = numStr[i] + result; // Add current character
	}

	return result;
};
