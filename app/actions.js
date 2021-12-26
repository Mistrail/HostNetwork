import {d} from "./misc/util.js";

export const actions = {
    login: {
        keys: [
            { literal: '-U', regex: /(?<login>=S+)/si},
            { literal: '-P', regex: /(?<password>=\S){8,}/si},
        ],
        resolve: (root, args, ctx = null) => {
            d([root.keys, args])
        }
    }
}