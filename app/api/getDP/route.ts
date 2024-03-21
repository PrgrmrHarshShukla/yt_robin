"use server";



export async function GET(req: Request) {
    try {
        const link = new URL(req.url);
        const channelID: any = link.searchParams.get("id");
        const apiUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelID}&key=${process.env.API_KEY}&part=snippet,contentDetails`;

        const res = await fetch(apiUrl);
        const response = await res.json();

        const name = response.items[0].snippet.title;
        const dp = response.items[0].snippet.thumbnails.default.url


        return Response.json({
            dp,
            name
        }, {
            status: 200
        })
    } 
    catch (error: any) {
        return Response.json({
            msg: error.message,
            err: error
        }, {
            status: 500
        })
    }
}