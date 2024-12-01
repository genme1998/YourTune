import React, { useState } from 'react';
import axios from 'axios';


const YouTube3 = ({genre,update,updateTitles}) => {
  const classic=[
[ "What a Wonderful World" , "rBrd_3VMC3c"],
["Yesterday" , "NajvYJab6Pg"],
["I Did It My Way" , "qQzdAsjWGPg"],
["Fly Me to the Moon","ZEcqHA7dbwM"],
["The Way We Were","Zci4-yxWQJ0"],
["Unforgettable","MIcIza4sqaM"],
["Bridge Over Troubled Water","h0n-mYqB9WQ"],
["Hallelujah","ttEMYvpoR-k"],
["Imagine" , "bNnFFKv_NyI"],
["Stand By Me","hwZNL7QVJjE"],
["Over the Rainbow","8SMIHXJKwFA"],
["The Girl from Ipanema","mD6pbCSeWLs"],
["As Time Goes By", "H3Xkm8mgH_A"],
["Unchained Melody","pm2Z9yAp_CE"],
["Piano Man","GB4YjpLk4nk"],
["Delilah","Qvo5SeAwz88"],
["Lean on Me","yFz1gP4MP-8"],
["Help yourself","8zWPROdFK4Q"],
["A Change Is Gonna Come","wEBlaMOmKV4"], 
 ["New York, New York","gFwuHsra6Oc"],
 ["Born Free","ETi7ddio5jM"],
["Mack the Knife","557lFG-qq5g"],
 ["Somewhere","cAu3a7CMA84"],
["The Sound of Silence","DCtouot15cA"],
["I Can’t Help Falling in Love","MqazV4hbu8E"],
["Eleanor Rigby","HuS5NuXRb5Y"],
["The Impossible Dream","bqSZeu-9zJo"],
["Let It Be","CGj85pVzRJs"],
["It's Now or Never","HtipfCdkdVE"],
["Don't Let the Sun Go Down on Me","mBGb5xNK9lU"] 
];
  const popSongs = [
  ["Flowers", "G7KNmW9a75Y"],
  ["As It Was", "H5v3kku4y6Q"],
  ["Apt", "ekr2nIex040"],
  ["Unholy", "Uq9gPaIzbe8"],
  ["Levitating", "TUVcZfQe-Kw"],
  ["Save Your Tears", "XXYlFuWEuKI"],
  ["Bad Habit", "orJSJGHjBLI"],
  ["Good 4 U", "gNi_6U5Pm_o"],
  ["Stay", "kTJczUoc26U"],
  ["Shivers", "Il0S8BoucSA"],
  ["Industry Baby", "UTHLKHL_whs"],
  ["Blinding Lights", "fHI8X4OXluQ"],
  ["Karma", "XzOvgu3GPwY"],
  ["Montero (Call Me By Your Name)", "nsXwi67WgOo"],
  ["First Class", "yQBImEeXNZ4"],
  ["Easy on Me", "U3ASj1L6_sY"],
  ["Ghost", "Fp8msa5uYsc"],
  ["Circles", "wXhTHyIgQ_U"],
  ["I Like You (A Happier Song)", "_a0T5qwxANg"],
  ["Cold Heart ", "fs57adf_ZpM"],
  ["Beggin'", "W2MpGCL8-9o"],
  ["Need to Know", "dI3xkL7qUAc"],
  ["Peaches", "tQ0yjYUFKAE"],
  ["Waves", "dKlgCk3IGBg"],
  ["Die with a smile", "CZhiyFIuHDo"],
  ["Take My Breath", "rhTl_OyehF8"],
  ["Stargazing", "eVli-tstM5E"],
  ["Beautiful things", "Oa_RSwwpPaA"],
  ["Illusion", "a9cyG_yfh1k"],
  ["Before you leave me", "0CzEr7YT5oI"]
];
  const disneySongs = [
  ["A Whole New World", "PmvT7B3u7II"],
  ["Let It Go", "L0MK7qz13bU"],
  ["Circle of Life", "GibiNy4d4gc"],
  ["Under the Sea", "GC_mV1IpjWA"],
  ["Beauty and the Beast", "ippaCca4L6A"],
  ["You'll Be in My Heart", "MfrX4IOjCz0"],
  ["How Far I'll Go", "ZNra8eK0K6k"],
  ["Colors of the Wind", "ob5UggoNtjc"],
  ["Can You Feel the Love Tonight", "KjgWWjkNbhU"],
  ["Part of Your World", "SXKlJuO07eM"],
  ["Hakuna Matata", "kaOIxll4LCA"],
  ["I See the Light", "ILRs2r6lcHY"],
  ["You're Welcome", "79DijItQXMM"],
  ["Go the Distance", "0BmYF4dCErg"],
  ["Friend Like Me", "coq1qiSA5yk"],
  ["Into the Unknown", "gIOyB9ZXn8s"],
  ["Bare Necessities", "6BH-Rxd-NBo"],
  ["When You Wish Upon a Star", "HSy3tE4HKsc"],
  ["We Don't Talk About Bruno", "bvWRMAU6V-c"],
  ["Reflection", "TyeKQkOvjPc"]
];
  const animeSongs = [
  ["A Cruel Angel's Thesis", "ZmJ5oBdJTXQ"],
  ["Blue Bird", "KpsJWFuVTdI"],
  ["Guren no Yumiya", "CgAeJxvFubI"],
  ["The World", "EtGhFQ88mjc"],
  ["Unravel", "Fve_lHIPa-I"],
  ["Tank!", "UFFa0QoHWvE"],
  ["My Dearest", "nIrYjzHAEp0"],
  ["We Are!", "IHhNTt3oxtY"],
  ["Again", "sE1qn8mmNF8"],
  ["Shinunoga E-Wa", "dawrQnvwMTY"],
  ["Crossing Field", "1aPOj0ERTEc"],
  ["The Day", "gUCmjNHIrcU"],
  ["Silhouette", "dlFA0Zq1k2A"],
  ["Hikarunara", "cWtgGTCAjYY"],
  ["Koi wa Sensou", "1ss--IO653Y"],
  ["No Title", "r-27B7LStXs"],
  ["Sign", "qpi9YXaChHI"],
  ["Let Me Hear", "D_jk-nGpxLQ"],
  ["Anata Dake", "xMOmmwD4xWo"],
  ["Kimi no Sei", "vOLncha7MqM"]
];
  const boybandSongs90s = [
  ["I Want It That Way", "4fndeDfaWCg"],
  ["Tearin' Up My Heart", "_ZcmuKsyvzg"],
  ["Quit Playing Games (With My Heart)", "Ug88HO2mg44"],
  ["Bye Bye Bye", "Eo-KmOd3i7s"],
  ["Step by Step", "GDEDQ8TCzW8"],
  ["Everybody (Backstreet's Back)", "6M6samPEMpM"],
  ["I'll Make Love to You", "fV8vB1BB2qc"],
  ["End of the Road", "zDKO6XYXioc"],
  ["All or Nothing", "TG8IkUoZ6j0"],
  ["No Diggity", "3KL9mRus19o"],
  ["I Do (Cherish You)", "1kofixtz2Us"],
  ["Because of You", "4gAsPT-vgeM"],
  ["Invisible Man", "WKgQPVoN088"],
  ["When the Lights Go Out", "mpdcKmaHk_s"],
  ["Slam Dunk (Da Funk)", "PZUZx-8--0c"],
  ["Summer Girls", "ZaWF_FrMRpY"],
  ["Every Other Time", "jaznx5FeYCc"],
  ["I Swear", "cVpvlaKfLQc"],
  ["I Can Love You Like That", "FEHQnTXC3SI"],
  ["MMMBop", "NHozn0YXAeE"],
  ["Where's the Love", "hK5obmgq6u0"],
  ["If You Go Away", "vK-xPWnG-NY"],
  ["Unbelievable", "oRGbxfTiEaE"],
  ["Love Me for a Reason", "OBnxEHG2Zro"],
  ["No Matter What", "7eul_Vt6SZY"],
  ["Picture of You", "ryCIAJRTwJg"],
  ["Flying Without Wings", "vKPGxGCFgTs"],
  ["Swear It Again", "LFryxsUH46A"],
  ["Fool Again", "H4BB9eGUEaE"],
  ["Uptown Girl", "0HTexqxo1og"]
];
  const slowRockSongs = [
  ["November Rain", "WjFG03kS7nQ"],
  ["Stairway to Heaven", "x8z6iqeiOIU"],
  ["I Don't Want to Miss a Thing", "T-doQhcwDS8"],
  ["With or Without You", "6Q2mFw4VYBo"],
  ["Wind of Change", "n4RjJKxsamQ"],
  ["The Final Countdown", "9jK-NcRmVcw"],
  ["Hotel California", "xXRHkA-EHc8"],
  ["Sweet Child O' Mine", "1w7OgIMMRc4"],
  ["More Than a Feeling", "gwIQpmXc_ZA"],
  ["Free Bird", "OKAq_G7CXQo"],
  ["Under the Bridge", "GLvohMXgcBo"],
  ["Don't Stop Believin'", "7gupK06T68k"],
  ["Knockin' on Heaven's Door", "UcCNj3q79Ic"],
  ["I Want to Know What Love Is", "r3Pr1_v7hsw"],
  ["Nothing Else Matters", "Fkj6-LN6WKI"],
  ["Patience", "ErvgV4P6Fzc"],
  ["Wanted Dead or Alive", "ecNGtHxzG0w"],
  ["Livin' on a Prayer", "lDK9QqIzhwk"],
  ["Let It Be", "5AnNkJ_VK9E"],
  ["Angie", "RcZn2-bGXqQ"],
  ["Smoke on the Water","Q2FzZSBD5LE"],
  ["Bitter Sweet Symphony", "1lyu1KKwC74"],
  ["Come Sail Away", "ri1ZhkqQ-w4"],
  ["The Unforgiven", "Ckom3gf57Yw"],
  ["Black", "qgaRVvAKoqQ"],
  ["Open Arms", "i5pUOVC50Y8"],
  ["Love of My Life", "BwM5DOG__OQ"],
  ["I’ll Be There for You", "mh8MIp2FOhc"],
  ["Is This Love", "GOJk0HW_hJw"],
  ["Every Rose Has Its Thorn", "j2r2nDhTzO4"]
];
  const rnbSongs = [
  ["Blinding Lights", "fHI8X4OXluQ"],
  ["If I Ain't Got You", "Ju8Hr50Ckwk"],
  ["We Belong Together", "0habxsuXW4g"],
  ["No Scrubs", "FrLequ6dUdM"],
  ["Irreplaceable", "2EwViQxSJJQ"],
  ["That's What I Like", "PMivT7MJ41M"],
  ["U Got It Bad", "o3IWTfcks4k"],
  ["Ordinary People", "PIh07c_P4hc"],
  ["Finesse", "LsoLEjrDogU"],
  ["Climax", "nNTyfVh3nmU"],
  ["I Will Always Love You", "aZXKvm32JI"],
  ["Back to Sleep", "OQLuhelCaDQ"],
  ["So Sick", "IxszlJppRQI"],
  ["Pony", "vqkeOzBNNcA"],
  ["Kiss from a Rose", "3-Yh6rnOchs"],
  ["Sweet Love", "QVvQxpy6DMk"],
  ["Can We Talk", "3SoYkCAzMBk"],
  ["Love on Top", "Ob7vObnFUJcé"],
  ["The Way You Make Me Feel", "uzbnrfd9vLQ"],
  ["Say My Name", "sQgd6MccwZc"],
  ["Unpretty", "QsJa-6Ci1Rk"],
  ["Just Friends (Sunny)", "i7zsG3XFUd8"],
  ["No One", "rywUS-ohqeE"],
  ["Be Without You", "8XNaPX6MKlU"],
  ["Bump N' Grind", "PK-sHqa-sMk"],
  ["Distant Lover", "XieemfCOWlo"],
  ["Adorn", "8dM5QYdTo08"],
  ["I Don't Want to Miss a Thing", "T-doQhcwDS8"],
  ["Can't Let You Go", "z4gXkpt6jPE"]
];




let a=0;
let b=30;
 
 
    const numbers = new Set();  // Using Set to ensure uniqueness
    // Continue generating numbers until we have 6 unique numbers
  if (a==0){
    if(genre==3|| genre ==4){b=20;}
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * b) + 1;  // Random number between 1 and 100
      numbers.add(randomNumber);  // Set automatically avoids duplicates
    }

    a =[...numbers];  // Convert Set to Array and set the state
  }   
  
const generate = () => {
 let songsArray=[];
 
alert(a);
if(genre==1){
  songsArray=classic;
}
else if(genre==3){
  songsArray=disneySongs;
  }
else if(genre==4){
 songsArray=animeSongs;
  }
//else if (genre==5){
// songsArray=boybandSongs90s;
//}
//else if (genre ==6){
// songsArray=slowRockSongs;
//}
//else if(genre==7){
//songsArray=rnbSongs;
//}
else{
  songsArray=popSongs;
}
  let temp=[];
  let titlesArray=[];
  for(let i=0; i<a.length;i++){
    temp.push(songsArray[a[i]][1]);
    titlesArray.push(songsArray[a[i]][0]);
  }
  
  update(temp);
  updateTitles(titlesArray);
}
  

  return (
    <div id ="gay">
    <button onClick={generate}>Generate</button>
    </div>
  );
}

export default YouTube3;