type pessoas = {
    name: string,
    email: string,
    role: string,
}

const listaPessoas: pessoas[] =
[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornaAdmin(admins: pessoas[]): string[] {
    const filtrarAdmin: any = admins.filter((roleAdmin) => {
        return roleAdmin.role === "admin"
    })

    const retornaEmail = filtrarAdmin.map((roleAdmin:pessoas) =>  {
        return roleAdmin.email
    })

    return retornaEmail
}

console.log(retornaAdmin(listaPessoas))