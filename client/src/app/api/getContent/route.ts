import { contents, contentTypes, ieltsBands, ieltsTopics } from "../../../utils/ieltsData"
export async function GET(request: Request) {
    const url = new URL(request.url)
    const topic = url.searchParams.get('topic')
    const bandScore = url.searchParams.get('bandScore')
    const type = url.searchParams.get('type');

    const page = Number(url.searchParams.get("page") || 1);
    const pageSize = Number(url.searchParams.get("pageSize") || 1);


    if (!topic || !ieltsTopics.some(t => t.toLowerCase() === topic.toLowerCase())) {
        return new Response(JSON.stringify({ error: 'Invalid topic' }), { status: 400 });
    }
    
    let validBandScore: number | 0 = bandScore ? Number(bandScore) : 0;

    if (validBandScore > 0 && !ieltsBands.includes(validBandScore)) {
        validBandScore = ieltsBands.reduce((prev, curr) => Math.abs(curr - validBandScore) < Math.abs(prev - validBandScore) ? curr : prev);
    }

    if (type && !contentTypes.find((value) => value.type == type)) {
        return new Response(JSON.stringify({ error: 'Invalid translation type' }), { status: 400 });
    }

    if (isNaN(page) || page <= 0) {
        return new Response(JSON.stringify({ error: 'Invalid page number' }), { status: 400 });
    }

    if (isNaN(pageSize) || pageSize <= 0) {
        return new Response(JSON.stringify({ error: 'Invalid page size' }), { status: 400 });
    }


    const filteredSentences = contents.filter((content) => {
        if (topic && !content.topic.some(t => t.toLowerCase() === topic.toLowerCase())) {
            return false;
        }
        if (validBandScore !== null && Math.abs(content.band - validBandScore) > 2) {
            return false;
        }
        if (type && content.type.toLowerCase() !== type.toLowerCase()) {

            return false;
        }

        return true;
    });
    if (filteredSentences.length > 0) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedResults = filteredSentences.slice(startIndex, endIndex);

        return new Response(JSON.stringify(paginatedResults), { status: 200 });
    } else {
        return new Response(JSON.stringify({ error: 'No content found' }), { status: 404 });
    }
}
