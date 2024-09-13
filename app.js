// Updated on 2024-09-13 20:16:16
// Updated on 2024-09-13 19:12:40
// Updated on 2024-09-13 18:20:42
// Updated on 2024-09-13 17:13:51
// Updated on 2024-09-13 16:18:17
// Updated on 2024-09-13 15:16:39
// Updated on 2024-09-13 14:13:53
// Updated on 2024-09-13 13:20:25
// Updated on 2024-09-13 12:29:29
// Updated on 2024-09-13 11:13:41
// Updated on 2024-09-13 10:16:16
// Updated on 2024-09-13 09:16:06
// Updated on 2024-09-13 08:19:13
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
let a6 = 1;
let a7 = 1;
let a8 = 1;
let a9 = 1;
let a10 = 1;
let a11 = 1;
let a12 = 1;
let a13 = 1;
let a14 = 1;
let a15 = 1;
let a16 = 1;
let a17 = 1;
let a18 = 1;
