
let arr = [
    {
        id: 1,
        name: 'Bruce Reyes',
        age: 1997

    },
    {
        id: 2,
        name: 'Benjamin Dean',
        age: 1194
    },
    {
        id: 3,
        name: 'Phillip Lucas',
        age: 1525
    },
    {
        id: 4,
        name: 'Jose Hill',
        age: 4325
    },
    {
        id: 5,
        name: 'Jerry Andrews',
        age: 683
    },
    {
        id: 6,
        name: 'Nicolas Lee',
        age: 2798
    },
    {
        id: 7,
        name: 'Alan Wade',
        age: 3586
    },
]
let excel = document.querySelector('.excel')
let inp = document.querySelector('.inp')
let modal = document.querySelector('.modal')
let form = document.forms.add


form.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        id: Math.random()
    }

    let fm = new FormData(form)
    if(inp.value.length > 0){
        fm.forEach((value, key) => {
            user[key] = value
        })
    
        user.age = new Date().getFullYear() - user.age   
    
        arr.push(user)
        reload(arr)

    }
}
let main = document.querySelector('main')
function reload(params) {
    excel.innerHTML = ""
    
    for(let item of params) {
        //Создание
        let box = document.createElement('div')
        let id = document.createElement('p')
        let name = document.createElement('p')
        let age = document.createElement('p')
        let edit_btn = document.createElement('button')
        let delete_btn = document.createElement('button')
        
        // Стилизация
        box.classList.add('box')
        id.innerHTML = params.indexOf(item) + 1
        name.innerHTML = item.name
        age.innerHTML = item.age
        edit_btn.innerHTML = 'edit'
        delete_btn.innerHTML = 'X'

        // Аппенд
        excel.append(box)
        box.append(id, name, age, edit_btn, delete_btn)

        delete_btn.onclick = () => {
            arr = arr.filter(elem => elem.id !== item.id)
            let idx = arr.indexOf(item)

            arr.splice(idx, .1)

            reload(arr)
        }

        edit_btn.onclick = () => {
            modal.style.display = "inline"
            reload(arr)
        }
        
        let edit_bt = document.querySelector('.edit_btn')
        let nam = document.querySelector('.namei')
        let ag = document.querySelector('.agei')
        
        edit_bt.onclick = () => {
            let finded = arr.find(elem => elem.id === item.id)
            
            finded.name = nam.value
            finded.age = ag.value = new Date().getFullYear() - ag.value
            
            reload(arr)
            modal.style.display = "none"
            console.log(finded.name);
        }    
    }
}    

reload(arr)