class form {
    constructor(){
     this.input = createInput('name')
     this.button = createButton('Join Game')
     this.greeting = createElement('h3')
    }
    hide(){
   this.greeting.hide()
   this.input.hide()
   this.button.hide();   
    }
    display(){
        var title = createElement('h3')
        title.html("Multiplayer Game")
        title.position(windowWidth/2,20)
      
        this.input.position(windowWidth/2-20,windowHeight/2-50)
        
        this.button.position(windowWidth/2,windowHeight/2)
       
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide()
            playerCount = playerCount +1
            p.index = playerCount;
            p.name = this.input.value()
            p.update()
            p.updateCount(playerCount)
            this.greeting.html("Welcome  "+p.name+"  Waiting For Others To Join")
            this.greeting.position(windowWidth/2-20,windowHeight/2-50);
        });
    }
}