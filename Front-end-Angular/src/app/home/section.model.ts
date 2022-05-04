export class Section{

    tituloPuesto: string="";
    instiEmpresa: string="";
    otro: string="";

    constructor(titulopuesto: string, instiempresa:string, otro:string){
    
        this.tituloPuesto = titulopuesto ;   //this.campodeclase=parametro que pasamos
        this.instiEmpresa = instiempresa;
        this.otro = otro;
    
    
    }
    
    }

export class Skills{
    skill:string="";

    constructor(unaSkill:string){
        this.skill = unaSkill;
    }
}


export class Languages{

    lengua: string="";
    oral: string="";
    read: string="";
    write: string="";

    constructor(language: string, oral: string, reading:string, written:string){
        
        this.lengua=language;
        this.oral = oral ;   //this.campodeclase=parametro que pasamos
        this.read = reading;
        this.write = written;
    }
    
    }