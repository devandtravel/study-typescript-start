interface Rectangle {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rectangle1: Rectangle = {
    id: '1',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rectangle2: Rectangle = {
    id: '2',
    size: {
        width: 10,
        height: 50
    }
}

rectangle2.color = 'black'

const rectangle3 = {} as Rectangle
const rectangle4 = <Rectangle>{}

// ==============================

interface RectangleWithArea extends Rectangle {
    getArea: () => number
}

const rectangle5: RectangleWithArea = {
    id: '3',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// ==============================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
