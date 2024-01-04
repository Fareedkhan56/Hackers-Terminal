async function addItem(data) {
    await random()
    let p = document.createElement('p')
    let div = document.querySelector('.container')
    // div.append(random())
    p.innerHTML = data;
    p.setAttribute('class', 'p')
    div.append(p)
    document.body.append(div)
}

let random = () => {
    return new Promise((resolve, rejet) => {
        delay = Math.floor(Math.random() * 7000)
        setTimeout(() => {
            resolve();
        }, delay)
    })
}

let text = [
    'Initializing Hacking',
    'Reading Your Files',
    'Password Files Detected',
    'Sending Passwords And Files to Server',
    'Cleaning Up'];
async function Main() {
    setInterval(() => {
        let last = document.getElementsByTagName('p');
        last = last[last.length - 1]
        if (last.innerHTML.endsWith('...')) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 500)

    for (const data of text) {
        await addItem(data)
    }
}

Main()