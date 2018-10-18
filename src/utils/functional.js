const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe);

export const pipeAsync = (...fns) => input => fns.reduce((chain, func) => chain.then(func), Promise.resolve(input));
