class Form{
    constructor(){
       this.bg_Img = createImg("Background.jpg","introImg");
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.text = createElement('h2');
       this.reset = createButton('Reset');
       
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.text.hide();
        this.bg_Img.hide();
    }
    display() {
        this.title.html(" Princess Sofia's Forest");
        this.title.position(300, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'lavender');
        this.text.html("Welcome to Princess Sofia's Forest.Here you will get different objects we get from trees. Collect them in your basket and win points. Write your name and press 'Play' to start the game. All the Best! ");
        this.text.position(870, 150);
        this.text.style('font-size', '30px');
        this.text.style('color', 'skyblue');
        this.text.style('margin-right','150px')
        this.text.style('padding-right','150px')
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.bg_Img.position(width/2-250,height/2-200);
        this.bg_Img.style('width','1050px');
        this.bg_Img.style('height','650px')

        this.button.mousePressed(() => {
            this.text.hide();
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(970,150);
            this.greeting.style('color', 'pink');
            this.greeting.style('font-size', '30px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}