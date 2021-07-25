// Simple webserver with static directory for css and image files
async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const url = new URL(requestEvent.request.url);
    const p=url.pathname;
    const mime=String(mimetypes[p.substr(p.lastIndexOf('.')+1)]);
    if(p=='/favicon.ico' || p=='/robots.txt' || p.substr(0,7)=='/static') {
      const buf=await Deno.readFile("."+p);
      await requestEvent.respondWith(
        new Response(buf,{status:200, headers:{"Content-type":mime}})
      );
    }else{
      await requestEvent.respondWith(
        new Response(hello, {status: 200, headers:{"Content-type":"text/html" } })
      );  
    } 
  }
}
const mimetypes: Record<string,string>={'svg':'image/svg+xml','jpg':'image/jpeg','png':'image/png','txt':'text/plain','css':'text/css','jpeg':'image/jpeg'};
const hello=await Deno.readFile('./template.html');
const server = Deno.listen({ port: 8080 });
for await (const conn of server) {handle(conn);}
