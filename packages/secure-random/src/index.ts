const createNodeRandom = (min = 0, max = 1) => {
    const {randomInt} = require('crypto') 
    return randomInt(Math.ceil(min), Math.floor(max))
}

const createBrowserRandom = (min = 0, max = 1) => {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = randomBuffer[0] / (0xffffffff + 1);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}

export const secureRandom = ({min = 0, max = 1}) => {
    if (min > max) {
        throw new Error('Invalid Parameter')
    }
    
    return typeof window !== 'undefined' ? createBrowserRandom(min, max) : createNodeRandom(min, max)
}

export const insecureRandom = ({min = 0, max = 1}) => {
    if (min > max) {
        throw new Error('Invalid Parameter')
    }

    return Math.random() * (max - min) + min;
}
