export default async function handler(req, res) {
    try {
        const response = await fetch(
            'https://api.transportapi.com/v1/uk/train/station/alexandra-palace/live.json',
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
