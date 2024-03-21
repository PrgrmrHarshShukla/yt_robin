"use server";



export async function GET(req: Request) {
    try {
        const link = new URL(req.url);
        const vidID: any = link.searchParams.get("id");
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${vidID}&key=${process.env.API_KEY}&part=snippet,contentDetails`;

        const res = await fetch(apiUrl);
        const response = await res.json();

        const title = response.items[0].snippet.title
        const thumbnailMed = response.items[0].snippet.thumbnails.medium.url
        const thumbnailHigh = response.items[0].snippet.thumbnails.high.url
        const channelID = response.items[0].snippet.channelId
        const publishedAt = response.items[0].snippet.publishedAt


        return Response.json({
            title,
            thumbnailMed,
            thumbnailHigh,
            channelID,
            publishedAt
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