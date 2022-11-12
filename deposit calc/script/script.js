let type
let per
let types   =   [
    "Пополняемый",
    "Срочный"
]
let pers =   [
        {
            Name: "Пополняемый",
            duration: "6 месяцев",
            percent: 0.2,
            dur: 6
        },
        {
            Name: "Пополняемый",
            duration: "1 год",
            percent: 0.22,
            dur: 12
        },
        {
            Name: "Пополняемый",
            duration: "1,5 года",
            percent: 0.15,
            dur: 18
        },
        {
            Name: "Пополняемый",
            duration: "2 года",
            percent: 0.1,
            dur: 24
        }
    ,
        {
            Name: "Срочный",
            duration: "3 месяца",
            percent: 0.2,
            dur: 3
        },
        {
            Name: "Срочный",
            duration: "6 месяцев",
            percent: 0.22,
            dur: 6
        },
        {
            Name: "Срочный",
            duration: "9 месяцев",
            percent: 0.23,
            dur: 9
        },
        {
            Name: "Срочный",
            duration: "1 год",
            percent: 0.24,
            dur: 12
        },
        {
            Name: "Срочный",
            duration: "1,5 года",
            percent: 0.18,
            dur: 18
        },
        {
            Name: "Срочный",
            duration: "2 года",
            percent: 0.15,
            dur: 24
        },
]

for (let i = 0; i < types.length; i++)  {
    document.getElementById('type').innerHTML += `
        <option value="${types[i]}">${types[i]}</option>
    `
}
type = document.getElementById("type").value
console.log(type);

for (let i = 0; i < pers.length; i++)   {
    let names = pers[i].Name
    if (names == type)  {
        document.getElementById('month').innerHTML += `
        <option value="${pers[i].duration}">${pers[i].duration}</option>
    `
    }
}
let change = () => { type = document.getElementById("type").value
document.getElementById('month').innerHTML = "" 
    for (let i = 0; i < pers.length; i++)   {
        let names = pers[i].Name
        if (names == type)  {
            document.getElementById('month').innerHTML += `
            <option value="${pers[i].dur}">${pers[i].duration}</option>
        `
   
        }
    } 
}

per = document.getElementById("month").value
let changes = ()  => { per = document.getElementById("month").value
per = document.getElementById("month").value

}
let res
let result
let dis = ()    => {
    let num = parseInt(document.getElementById("number").value)
    for (let i = 0; i < pers.length; i++)  {
        if(type == pers[i].Name && per == pers[i].duration)   {
            res = ((num*pers[i].percent)/12)*pers[i].dur
            result = num+res;
            document.getElementById("result").innerHTML = `Вклад "${pers[i].Name}" на срок "${pers[i].duration}" на сумму ${num} руб, ${result}`;
        }
       
    }
}