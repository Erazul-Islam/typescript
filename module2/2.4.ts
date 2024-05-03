{
    interface developer<T,X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releasYear: number
        }
        smartWatch: T;
        bike? : X
    }

    type EmilagWatch = {
        brand: string,
        model: string,
        display: string
    }

    const PoorDeveloper: developer<EmilagWatch,null> = {
        name: 'Taosif',
        computer: {
            brand: "Asus",
            model: "X-55yd",
            releasYear: 2010
        },
        smartWatch: {
            brand: 'Apple',
            model: 'kw66',
            display: 'OLED'
        }
    }

    interface Apple {
        brand: string;
        model: string,
        heardTrack: boolean,
        display: string,
        sleepTrack: boolean

    }

    interface Yamaha {
        model : string,
        engine : string
    }

    const RichDeveloper: developer<Apple,Yamaha> = {
        name: 'Taosif',
        computer: {
            brand: "HP",
            model: "X-55yd",
            releasYear: 2019
        },
        smartWatch: {
            brand: 'Apple',
            model: 'kw66',
            display: 'LED',
            heardTrack: true,
            sleepTrack: true,
        },
        bike : {
            model : 'Yamaha',
            engine : 'true'
        }
    }

}