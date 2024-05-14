// route handler
// file that can export various functions (get, post, patch, put)
export function GET(request) {
  console.log(request);
  let json = Response.json();
  return new Response("Hello!");
}

export function POST(request) {}
