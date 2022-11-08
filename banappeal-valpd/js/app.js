const xiopb = document.getElementById("xiopb")
const xiobanner = document.getElementById("xiobanner")

const modpb = document.getElementById("modpb")
const modbanner = document.getElementById("modbanner")

const craypb = document.getElementById("craypb")
const craybanner = document.getElementById("craybanner")

const alipb = document.getElementById("alipb")
const alibanner = document.getElementById("alibanner")

const harampb = document.getElementById("harampb")
const harambanner = document.getElementById("harambanner")

const katzepb = document.getElementById("katzepb")
const katzebanner = document.getElementById("katzebanner")

const robinnpb = document.getElementById("robinnpb")
const robinnbanner = document.getElementById("robinnbanner")

const viernullvierpb = document.getElementById("404pb")
const viernullvierbanner = document.getElementById("404banner")

const shoyopb = document.getElementById("shoyopb")
const shoyobanner = document.getElementById("shoyobanner")

const maltepb = document.getElementById("maltepb")
const maltebanner = document.getElementById("maltebanner")

const kosmixpb = document.getElementById("kosmixpb")
const kosmixbanner = document.getElementById("kosmixbanner")

const dodopb = document.getElementById("dodopb")
const dodobanner = document.getElementById("dodobanner")

const peachipb = document.getElementById("peachipb")
const peachibanner = document.getElementById("peachibanner")

const clickspb = document.getElementById("clickspb")
const clicksbanner = document.getElementById("clicksbanner")

const carismapb = document.getElementById("carismapb")
const carismabanner = document.getElementById("carismabanner")

const scarpb = document.getElementById("scarpb")
const scarbanner = document.getElementById("scarbanner")

const talhaapb = document.getElementById("talhaapb")
const talhaabanner = document.getElementById("talhaabanner")

const draixonpb = document.getElementById("draixonpb")
const draixonbanner = document.getElementById("draixonbanner")

const riopb = document.getElementById("riopb")
const riobanner = document.getElementById("riobanner")

const realyamamotopb = document.getElementById("realyamamotopb")
const realyamamotobanner = document.getElementById("realyamamotobanner")

const alpb = document.getElementById("alpb")
const albanner = document.getElementById("albanner")

const shizukopb = document.getElementById("shizukopb")
const shizukobanner = document.getElementById("shizukobanner")


async function getxio(userId){
    fetch(`https://api.discord.name/api/user/${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
    let data = res.data
    console.log(data)
    xiopb.src = data.avatar
    xiobanner.src = data.banner + "?size=1024"

    })
}

getxio("977279910336954468")


async function getmod(userId){
    fetch(`https://api.discord.name/api/user/${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
    let data = res.data
    console.log(data)
    modpb.src = data.avatar
    modbanner.src = data.banner + "?size=1024"

    })
}

getmod("707658469188304988")


async function getcray(userId){
    fetch(`https://api.discord.name/api/user/${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
    let data = res.data
    console.log(data)
    craypb.src = data.avatar 
    craybanner.src = data.banner + "?size=1024"

    })
}

getcray("1016421965831086140")

async function getali(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  alipb.src = data.avatar
  alibanner.src = data.banner + "?size=1024"

  })
}

getali("1016705925693841489")

async function getharam(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  harampb.src = data.avatar
  harambanner.src = data.banner + "?size=1024"

  })
}

getharam("699321576515960862")


async function getkatze(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  katzepb.src = data.avatar
  katzebanner.src = data.banner + "?size=1024"

  })
}

getkatze("1003587883648692255")


async function getrobinn(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  robinnpb.src = data.avatar
  robinnbanner.src = data.banner + "?size=1024"

  })
}

getrobinn("277439098250067968")


async function getviernullvier(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  viernullvierpb.src = data.avatar
  viernullvierbanner.src = data.banner + "?size=1024"

  })
}

getviernullvier("951479638046154852")


async function getshoyo(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  shoyopb.src = data.avatar
  shoyobanner.src = data.banner + "?size=1024"

  })
}

getshoyo("791713781541109772")

async function getshoyo(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  shoyopb.src = data.avatar
  shoyobanner.src = data.banner + "?size=1024"

  })
}

getshoyo("791713781541109772")


async function getmalte(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  maltepb.src = data.avatar
  maltebanner.src = data.banner + "?size=1024"

  })
}

getmalte("431771671171432448")

async function getkosmix(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  kosmixpb.src = data.avatar
  kosmixbanner.src = data.banner + "?size=1024"

  })
}

getkosmix("670400897603338272")


async function getdodo(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  dodopb.src = data.avatar
  dodobanner.src = data.banner + "?size=1024"

  })
}

getdodo("277046679520411648")


async function getpeachi(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  peachipb.src = data.avatar
  peachibanner.src = data.banner + "?size=1024"

  })
}

getpeachi("685510707655213154")


async function getclicks(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  clickspb.src = data.avatar
  clicksbanner.src = data.banner + "?size=1024"

  })
}

getclicks("804282045522116618")


async function getcarisma(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  carismapb.src = data.avatar
  carismabanner.src = data.banner + "?size=1024"

  })
}

getcarisma("385578896718036992")


async function getscar(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  scarpb.src = data.avatar
  scarbanner.src = data.banner + "?size=1024"

  })
}

getscar("656617960894627851")


async function gettalhaa(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  talhaapb.src = data.avatar
  talhaabanner.src = data.banner + "?size=1024"

  })
}

gettalhaa("642732993152024582")


async function getdraixon(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  draixonpb.src = data.avatar
  draixonbanner.src = data.banner + "?size=1024"

  })
}

getdraixon("479537494384181248")


async function getrealyamamoto(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  realyamamotopb.src = data.avatar
  realyamamotobanner.src = data.banner + "?size=1024"

  })
}

getrealyamamoto("242319239044792332")


async function getrio(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  riopb.src = data.avatar 
  riobanner.src = data.banner + "?size=1024"

  })
}

getrio("691665388970311782")


async function getshizuko(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  shizukopb.src = data.avatar 
  shizukobanner.src = data.banner + "?size=1024"

  })
}

getshizuko("459413827751247922")


async function getal(userId){
  fetch(`https://api.discord.name/api/user/${userId}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
  let data = res.data
  console.log(data)
  alpb.src = data.avatar
  albanner.src = data.banner + "?size=1024"

  })
}

getal("800336968911290369")