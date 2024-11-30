export enum Answers {
    A = "a",
    B = "b",
    C = "c",
    D = "d"
}

interface Options {
    "a": string,
    "b": string,
    "c": string,
    "d": string
}

export interface QuesObj {
    ques: string,
    choices: Options,
    ans: Answers
}

export enum Response {
    C = "Correct",
    W = "Wrong"
}

export interface StoredData {
    timeStamp : string,
    topic : string,
    questions : QuesObj[],
    response : Answers[]
}