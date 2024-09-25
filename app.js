// Updated on 2024-09-25 20:17:37
// Updated on 2024-09-25 19:11:20
// Updated on 2024-09-25 18:21:19
// Updated on 2024-09-25 17:14:13
// Updated on 2024-09-25 16:22:12
// Updated on 2024-09-25 15:17:45
// Updated on 2024-09-25 14:15:57
// Updated on 2024-09-25 13:24:16
// Updated on 2024-09-25 12:32:19
// Updated on 2024-09-25 11:14:10
// Updated on 2024-09-25 10:18:17
// Updated on 2024-09-25 09:17:47
// Updated on 2024-09-25 08:22:22
// Updated on 2024-09-25 07:15:51
// Updated on 2024-09-25 06:22:45
// Updated on 2024-09-25 05:16:02
// Updated on 2024-09-25 04:19:35
// Updated on 2024-09-25 03:23:21
// Updated on 2024-09-25 02:49:57
// Updated on 2024-09-25 01:47:20
// Updated on 2024-09-22 01:18:51
// Updated on 2024-09-21 23:14:16
// Updated on 2024-09-21 22:13:49
// Updated on 2024-09-21 21:13:08
// Updated on 2024-09-21 20:15:27
// Updated on 2024-09-21 19:12:01
// Updated on 2024-09-21 18:19:26
// Updated on 2024-09-21 17:14:47
// Updated on 2024-09-21 16:19:04
// Updated on 2024-09-21 15:16:20
// Updated on 2024-09-21 14:12:45
// Updated on 2024-09-21 13:18:14
// Updated on 2024-09-21 12:27:55
// Updated on 2024-09-21 11:11:48
// Updated on 2024-09-21 10:14:42
// Updated on 2024-09-21 09:14:45
// Updated on 2024-09-21 08:18:14
// Updated on 2024-09-21 07:13:29
// Updated on 2024-09-21 06:20:25
// Updated on 2024-09-21 05:14:14
// Updated on 2024-09-21 04:18:08
// Updated on 2024-09-21 03:16:42
// Updated on 2024-09-21 02:43:41
// Updated on 2024-09-21 02:41:02
// Updated on 2024-09-21 01:41:32
// Updated on 2024-09-18 01:11:07
// Updated on 2024-09-17 23:17:23
// Updated on 2024-09-17 22:14:15
// Updated on 2024-09-17 21:14:36
// Updated on 2024-09-17 20:16:20
// Updated on 2024-09-17 19:12:27
// Updated on 2024-09-17 18:21:06
// Updated on 2024-09-17 17:14:03
// Updated on 2024-09-17 16:19:34
// Updated on 2024-09-17 15:16:41
// Updated on 2024-09-17 14:14:10
// Updated on 2024-09-17 13:21:55
// Updated on 2024-09-17 12:30:31
// Updated on 2024-09-17 11:13:07
// Updated on 2024-09-17 10:16:31
// Updated on 2024-09-17 09:16:24
// Updated on 2024-09-17 08:20:27
// Updated on 2024-09-17 07:13:58
// Updated on 2024-09-17 06:20:06
// Updated on 2024-09-17 05:16:32
// Updated on 2024-09-17 04:17:24
// Updated on 2024-09-17 03:17:49
// Updated on 2024-09-17 02:21:53
// Updated on 2024-09-17 01:19:28
// Updated on 2024-09-14 05:26:47
// Updated on 2024-09-14 01:10:02
// Updated on 2024-09-13 23:14:58
// Updated on 2024-09-13 22:15:17
// Updated on 2024-09-13 21:13:32
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
let a19 = 1;
let a20 = 1;
let a21 = 1;
let a22 = 1;
let a23 = 1;
let a24 = 1;
let a25 = 1;
let a26 = 1;
let a27 = 1;
let a28 = 1;
let a29 = 1;
let a30 = 1;
let a31 = 1;
let a32 = 1;
let a33 = 1;
let a34 = 1;
let a35 = 1;
let a36 = 1;
let a37 = 1;
let a38 = 1;
let a39 = 1;
let a40 = 1;
let a41 = 1;
let a42 = 1;
let a43 = 1;
let a44 = 1;
let a45 = 1;
let a46 = 1;
let a47 = 1;
let a48 = 1;
let a49 = 1;
let a50 = 1;
let a51 = 1;
let a52 = 1;
let a53 = 1;
let a54 = 1;
let a55 = 1;
let a56 = 1;
let a57 = 1;
let a58 = 1;
let a59 = 1;
let a60 = 1;
let a61 = 1;
let a62 = 1;
let a63 = 1;
let a64 = 1;
let a65 = 1;
let a66 = 1;
let a67 = 1;
let a68 = 1;
let a69 = 1;
let a70 = 1;
let a71 = 1;
let a72 = 1;
let a73 = 1;
let a74 = 1;
let a75 = 1;
let a76 = 1;
let a77 = 1;
let a78 = 1;
let a79 = 1;
let a80 = 1;
let a81 = 1;
let a82 = 1;
let a83 = 1;
let a84 = 1;
let a85 = 1;
let a86 = 1;
let a87 = 1;
let a88 = 1;
let a89 = 1;
let a90 = 1;
let a91 = 1;
let a92 = 1;
