class Food {
    constructor(){

        this.foodStock = 0;
        this.lastFed = 0;

        this.image = loadImage("images/milk.png");

    }

    updateFoodStock(food){
        this.foodStock = food;
    }

    display(){

        var x = 80;
        var y = 130;

        if(this.foodStock!=0){

            for(var i = 0; i<this.foodStock;i++){
                if(i % 10===0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image,x,y,50,50);
                x = x+30;
           
            }
        }
    }

    bedroom(){
        background(bedroomImg,550,500);
    }

    garden(){
        background(gardenImg,550,500);
    }

    washroom(){
        background(washroomImg,550,500);
    }
}