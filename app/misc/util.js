import {} from 'colors';

const commandRegex = /^(?<action>\S+)\s?(?<args>.+)?/

export function d(...args){
    console.log(" HostNetwork > ".bgBlue.white.bold, ...args)
}

export function e(error){
    console.log(" HostNetwork > ".bgRed.white.bold, error)
}

export function input(){
    process.stdout.write(" HostNetwork < ".bgYellow.white.bold + " ")
}

export function onInput(buffer){
    const str = buffer.toString('utf8').trim()
    const command = commandRegex.exec(str);
    if(!command) {
        e("invalid command format")
    }else{
        const {action, args} =  command.groups;
        d({action, args})
    }
    input();
}
