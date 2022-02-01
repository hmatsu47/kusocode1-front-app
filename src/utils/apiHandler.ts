// APIからデータ取得
export const getApiData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
// APIにデータを送る
export const postApiData = async (url: string, postData: any) => {
    const headers = {
        "Content-Type": "application/json"
    };
    const res = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postData)
    });
    const data = await res.json();
    return data;
}