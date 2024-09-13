// Updated on 2024-09-13 03:17:17
// Updated on 2024-09-13 02:41:54
// Updated on 2024-09-13 01:41:51
// Updated on 2024-09-11 23:10:22
// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("response: ", res);
//     })
//     .catch((e) => {
//         console.log("ERROR! ", e);
//     });



const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }
    catch (e) {
        console.log("ERROR!", e);
    }
};

getStarWarsPerson(10);
int a1 = 1;
int a1 = 1;
int a1 = 1;
int a1 = 1;
