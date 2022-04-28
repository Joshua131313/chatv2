export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIxNmNjYTQ2Mi04OWZlLTQxMjktOTMwMi00YzczNGRkMDdiNzQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY1MDg1MzQ1NCwiZXhwIjoxNjUxNDU4MjU0fQ.CHW2qComLtxYHcsNqQPhEo90GoJU7JbG510cpqZ0DVo";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};