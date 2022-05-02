class Vector2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    Zero(){
        this.x = 0;
        this.y = 0;
        return new Vector2(0, 0);
    }
}