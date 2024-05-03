import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// insert data
async function insertUser(username: string, password: string, firstName: string, lastName: string) {

    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}
// insertUser("krish1210@gmail.com", "chrix@1210", "Krish", "Aagja");
// insertUser("kuldeepsolanki@gmail.com", "kuldeep@8011", "Kuldeep", "Solanki");
// insertUser("aryanpanchal@gmail.com", "aryanpnchl", "Aryan", "Panchal");
// insertUser("johndeo@gmail.com", "johnsecret", "John", "Deo");


// updating data

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);   
}
updateUser('johndeo@gmail.com', {
    firstName: "Elone",
    lastName: "Musk"
});
