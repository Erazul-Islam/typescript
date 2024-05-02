{
//  Union type and Intersection type
    type FrontEndDeveloper = "Fakibaz" | 'junior Developer'

    const newDeveloper : FrontEndDeveloper = 'Fakibaz'

    type User = {
        name : string;
        email : string;
        gender : 'male' | 'female';
        bloodGroup : 'A+' | 'B+' | 'AB+' | 'O-'
    }
    
    type FrontDev  = {
        skills : string [];
        designation1 : 'FrontEnd Developer'
    }

    type BackendDeveloper = {
        skills : string [];
        designation2 : 'Backend developer'
    }

    type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper

    const FullStack : FullStackDeveloper = {
        skills: ['HTML','CSS','NODE'],
        designation1 : 'frontend',
        designation2 : 'Backend developer'
    }

}