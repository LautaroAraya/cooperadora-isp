export default async function handler(req,res){
  if(req.method === 'GET'){
    const response = await fetch('http://localhost:4000/stats')
    const stats = await response.json();

    res.send(stats);
  }
}
