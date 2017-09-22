export class RouteserviceService {
  
    data =[];
  
    constructor() { 
      this.data = [
        {id: '1', name: 'Asaad Saad', studID: '12345', email: 'asaad@mum.edu' },
        {id: '2', name: 'maria', studID: '12345', email: 'asaad@mum.edu' }
      ];
    }

    getData(){
      return this.data;
    }
  
    isIDAvailable(id:string):boolean{
      let available:boolean = false;
      this.data.forEach(function (item) {
        if(item.id == id){
          available = true;
        }
      });
  
      return available;
  }

  }
  
  
