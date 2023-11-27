import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'edX';
  public searchInput: HTMLInputElement | null | undefined;

  public isLeft : boolean = true;
  public counter : number = 0;
  public counter1 : number = 0;
  public sum : number = 0;
  public isLeft1 : boolean = false;

  public moveLeftFlag: boolean = false; // Sol tıklama bayrağı
  public moveRightFlag: boolean = false; // Sağ tıklama bayrağı


  public objectPosition: number = 0;
  // public searchInputElement : any;

  constructor() { }

  ngOnInit(): void {


    // @ViewChild('searchInput', { static: true }) searchInputElement!: ElementRef<HTMLInputElement>;

    let searchInput = document.getElementById('searchInput') as HTMLInputElement;

    console.log(this.searchInput);
    
    let search22Input = document.getElementById('search22Input') as HTMLInputElement ;
    let ozel22Button = document.getElementById('ozel22Button') as HTMLInputElement;
    
    let ozelButton = document.getElementById('ozelButton') as HTMLInputElement;
    let bilmemButton = document.getElementById('buttonsId') as HTMLInputElement;
    let cerceve = document.getElementById('cerceve') as HTMLInputElement;
    let searchicon = document.getElementById('searchicon') as HTMLInputElement;
    let conteinerId = document.getElementById('conteinerId') as HTMLInputElement;
    let buscarId = document.getElementById('buscarId') as HTMLInputElement;

    // const searchInput = this.searchInputElement.nativeElement;
    let sag=document.getElementById('sag') as HTMLInputElement;
    let sol=document.getElementById('sol') as HTMLInputElement;
    console.log(searchInput.value);

    searchInput?.addEventListener('input', function () {
      console.log(searchInput.value);
      debugger
      
      if (searchInput?.value.trim() === '') {
        
        ozelButton.style.visibility = 'hidden';
        searchInput.style.width = '300px';
        searchicon.style.color = 'transparent';
        buscarId.style.visibility = 'visible';
        buscarId.style.marginLeft = '400px';
      } else {
        ozelButton.style.visibility = 'visible';
        searchicon.style.color = 'transparent';
        searchInput.style.width = '350px';
        ozelButton.style.marginLeft = '307px';
        ozelButton.style.marginTop = '10px';
        buscarId.style.visibility = 'visible';
        buscarId.style.marginLeft = '450px';

      }
    });

    search22Input?.addEventListener('input', function () {
      console.log(search22Input.value);
      debugger
      
      if (search22Input?.value.trim() === '') {
        ozel22Button.style.visibility = 'hidden';
      
      } else {
        ozel22Button.style.visibility = 'visible';
      

      }
    });


  


    searchInput.addEventListener('click', function () {

      bilmemButton.style.visibility = 'hidden';
      cerceve.style.border = 'solid blue 2px';
      cerceve.style.width = '300px';
      searchicon.style.color = 'transparent';
      conteinerId.style.marginLeft = '90px';
      buscarId.style.visibility = 'visible';

      if (searchInput.value.trim() !== '') {
        searchInput.style.width = '350px';

        ozelButton.style.marginLeft = '307px';
        ozelButton.style.marginTop = '10px';
        searchicon.style.color = 'transparent';
        buscarId.style.marginLeft = '450px';

      }

      else {
        searchInput.style.width = '300px';
        searchicon.style.color = 'transparent';

      }

    });

    document.addEventListener('click', function (event) {
      // Check if the click target is outside the input element
      console.log(event);
      
      if (!searchInput.contains(event.target as Node)) {
        bilmemButton.style.visibility = 'visible';
        cerceve.style.border = 'none';
        searchicon.style.color = 'transparent';
        ozelButton.style.border = 'none';
        searchInput.style.width = '170px';
        ozelButton.style.marginLeft = '130px';
        ozelButton.style.marginTop = '7px';
        conteinerId.style.marginLeft = '400px';
        buscarId.style.visibility = 'hidden';

        if (searchInput.value.trim() === '') {
          searchicon.style.color = 'grey';
        }
      }




    });

    document.addEventListener('click', function(event) {
      // Check if the click target is outside the input element
      if (!search22Input.contains(event.target as Node)) {
    
        ozel22Button.style.border='none';
      
      }
     
    });

  }

  public isLeftClick(nextorprevious : string) {
    console.log(nextorprevious);
    
    console.log("hiii");
    this.counter++;
    this.isLeft = !this.isLeft;
    console.log(this.counter);
    if(this.counter == 4) {
      this.isLeft = false;
      this.isLeft1 = true;

    }


    console.log(this.isLeft);
    
  }

  public isRightClick(nextorprevious : string) {
    console.log(nextorprevious);
    
    console.log("hiii");
    this.counter++;
    this.isLeft = !this.isLeft;
    console.log(this.counter);
    if(this.counter == 2) {
      this.isLeft = false;
      this.isLeft1 = true;

    }


    console.log(this.isLeft);
    
  }

  moveLeft() {
    this.moveLeftFlag = true;
    this.moveRightFlag = false;
  }

  moveRight() {
    this.moveLeftFlag = false;
    this.moveRightFlag = true;
  }


//eğer sol click 0 sa 
  move(distance: string) {
    if(distance=='+')
    {
      this.counter1++;
      this.sum=this.counter1-this.counter; 

      if(this.objectPosition>=-300 ){
        this.objectPosition += 300;
        
      }
       else{
         this.objectPosition += 900;

       }
       
    }
    
    else if(distance=='-'){

      this.counter++;
      this.sum=this.counter-this.counter1;
      if(this.objectPosition<=-1800 )
      {
       
        this.objectPosition-=300;
      }
      else{

        this.objectPosition -= 900;
      }
      
      
    }


  }
}


  // var searchInput = document.getElementById('searchInput');
  // const ozelButton = document.getElementById('ozelButton');
  // const bilmemButton = document.getElementById('buttonsId');
  // const cerceve = document.getElementById('cerceve');
  // const searchicon = document.getElementById('searchicon');
  // const conteinerId = document.getElementById('conteinerId');
  // const buscarId = document.getElementById('buscarId');

  //   searchInput.addEventListener('input', function() {


  //   if (searchInput.value.trim() === '') {
  //     ozelButton.style.visibility = 'hidden';
  //     searchInput.style.width = '300px';
  //     searchicon.style.color = 'transparent';
  //     buscarId.style.visibility = 'visible';
  //     buscarId.style.marginLeft = '400px';
  //   } else {
  //     ozelButton.style.visibility = 'visible';
  //     searchicon.style.color = 'transparent';
  //     searchInput.style.width = '350px';
  //     ozelButton.style.marginLeft = '307px';
  //     ozelButton.style.marginTop = '10px';
  //     buscarId.style.visibility = 'visible';
  //     buscarId.style.marginLeft = '450px';

  //   }
  // });




  //   searchInput.addEventListener('click', function() {

  //   bilmemButton.style.visibility = 'hidden';
  //   cerceve.style.border = 'solid blue 2px';
  //   cerceve.style.width = '300px';
  //   searchicon.style.color = 'transparent';
  //   conteinerId.style.marginLeft = '90px';
  //   buscarId.style.visibility = 'visible';

  //   if (searchInput.value.trim() !== '') {
  //     searchInput.style.width = '350px';

  //     ozelButton.style.marginLeft = '307px';
  //     ozelButton.style.marginTop = '10px';
  //     searchicon.style.color = 'transparent';
  //     buscarId.style.marginLeft = '450px';

  //   }

  //   else {
  //     searchInput.style.width = '300px';
  //     searchicon.style.color = 'transparent';

  //   }

  // });

  //   document.addEventListener('click', function(event) {
  //   // Check if the click target is outside the input element
  //   if (!searchInput.contains(event.target)) {
  //     bilmemButton.style.visibility = 'visible';
  //     cerceve.style.border = 'none';
  //     searchicon.style.color = 'transparent';
  //     ozelButton.style.border = 'none';
  //     searchInput.style.width = '170px';
  //     ozelButton.style.marginLeft = '130px';
  //     ozelButton.style.marginTop = '7px';
  //     conteinerId.style.marginLeft = '360px';
  //     buscarId.style.visibility = 'hidden';

  //     if (searchInput.value.trim() === '') {
  //       searchicon.style.color = 'grey';
  //     }
  //   }




  // });