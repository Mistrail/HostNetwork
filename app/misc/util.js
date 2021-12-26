import {} from 'colors';
import {actions} from '../actions.js'

const commandRegex = /^(?<action>\S+)\s?(?<args>.+)?/

export function d(...args) {
    console.log(" HostNetwork > ".bgBlue.white.bold, ...args)
}

export function e(error) {
    console.log(" HostNetwork > ".bgRed.white.bold, error)
}

export function input() {
    process.stdout.write(" HostNetwork < ".bgYellow.white.bold + " ")
}

export function onInput(buffer) {
    const str = buffer.toString('utf8').trim()
    const command = commandRegex.exec(str);
    if (!command) {
        e("invalid command")
    } else {
        const {action, args} = command.groups;
        try {
            const result = actions[action].resolve(actions[action], args);
        } catch (error) {
            e({cause: error})
            e(`invalid command format "${action}"`)
        }
    }
    input();
}
