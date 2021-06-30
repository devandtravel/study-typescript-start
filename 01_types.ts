// BOOLEAN
const isFetching: boolean = true
const isLoading: boolean = false

// NUMBER
const int: number = 42
const float: number = 4.2
const num: number = 4e2

// STRING
const message: string = 'hello'

//ARRAY
const stringArray: string[] = ['1', '1', '2', '3', '5', '8', '13']
const numberArray1: number[] = [1, 1, 2, 3, 5, 8, 13]
// or
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

//TUPLE
const contact: [string, number] = ['devandtravel', 1234567]

// ANY
let variable: any = 42
variable = '42'

// FUNCTION
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('devandtravel')

//NEWER
function trowError(message: string): never {
    throw new Error(message)
}
// or
function infinite(): never {
    while (true) {}
}

// TYPE
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 42
const id2: ID = '42'

// NULL, UNDEFINED
type SomeType = string | null | undefined
