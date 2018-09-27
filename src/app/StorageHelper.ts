import { NavController } from 'ionic-angular';
export enum Enums { "Area" }
export class StorageHelper {

  load(key: Enums)
  load(key: Enums, id?: number)
  load(arg1: any, arg2?: number): Base[] {
    let items = JSON.parse(localStorage.getItem(Enums[arg1]));
    if (!arg2) return items;
    else {
      let item = items.filter(i => i.id == arg2);
      return item;
    }
  }

  save(key: Enums, data: Base|Base[]) {
    if(Array.isArray(data)){localStorage.setItem(Enums[key], JSON.stringify(data));
    return;}
    let items = this.load(key);
    let newId = (items)?Math.max(...items.map(i => i.id)) + 1:1;
    if(!items)items=[];
    (<Base>data).id = newId;
    items.push(data);
    localStorage.setItem(Enums[key], JSON.stringify(items));
  }

  delete(key: Enums,id:number) {
    let items :Base[]=this.load(key);
    let index = items.findIndex(i=>i.id==id);
    items.splice(index,1);
    this.save(key,items);
  }
}

export interface Base {
  id: number;
}

export class DummyArea {
  constructor() { }
  areas: Area[] = [
    { id: 1, streets: [], name: "Neuwied" },
    { id: 2, streets: [], name: "Andernach" },
    { id: 3, streets: [], name: "Weißenthurm" },
    { id: 4, streets: [], name: "Mülheim-Kärlich" },
  ];
}

export class Area implements Base {
  public streets: Street[] = [];
  public name: string;
  public id: number;
}

export class Street {
  houese: House[] = [];
}

export class House {
  bells: Bell[] = [];
}

export class Bell {
  note: Note;
}

export class Note {
  text: string;
}

export class originalDaten {
  mimi: string;
  mimi2: string;
  mimi3: string;
  mimi4: string;
  mimi5: string;
  mimi6: string;
}

export class OberflaechenModel extends originalDaten {
  constructor(data?: originalDaten) {
    super();
    if (data) {
      return { ...data }
    }
  }
}
