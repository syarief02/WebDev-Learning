// Updated on 2024-09-13 07:16:04
// Updated on 2024-09-13 06:21:57
// Updated on 2024-09-13 05:15:01
// Updated on 2024-09-13 05:09:41
// Updated on 2024-09-13 05:07:51
// Updated on 2024-09-13 04:18:04
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

let a1 = 1;
let a2 = 1;
let a3 = 1;
let a4 = 1;
let a5 = 1;
