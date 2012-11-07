var totalPoints;
var counter;
var percentBar;
//Where the input should be either a 1 or 0 where 1 = True and 0 = False
function points(IncrementOrDeincrement) {
    if (IncrementOrDeincrement == 1) {
        if (percentBar > 60 && percentBar <= 70) {
            if (counter >= 15 && counter < 30) {
                va = 2;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 30 && counter < 45) {
                va = 3;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 45) {
                va = 4;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            else
                totalPoints += 50;
            this.totalPoints;
        }
        //////////////////////
        if (percentBar >= 70 && percentBar < 80) {

            if (counter >= 15 && counter < 30) {
                va = 3;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            if (counter >= 30 && counter < 45) {
                va = 4;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 45) {
                va = 5;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            else
                totalPoints += 50;
            this.totalPoints;
        }
        //////////////////////
        if (percentBar >= 80 && percentBar < 90) {

            if (counter >= 15 && counter < 30) {
                va = 4;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            if (counter >= 30 && counter < 45) {
                va = 5;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 45) {
                va = 6;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            else
                totalPoints += 50;
            this.totalPoints;
        }
        ////////////////////
        if (percentBar >= 90 && percentBar < 100) {
            if (counter >= 15 && counter < 30) {
                va = 5;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            if (counter >= 30 && counter < 45) {
                va = 6;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 45) {
                va = 7;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            else
                totalPoints += 50;
            this.totalPoints;
        } ////////////////////
        if (percentBar >= 100) {
            if (counter >= 15 && counter < 30) {
                va = 10;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            if (counter >= 30 && counter < 45) {
                va = 11;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 45) {
                va = 12;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            else
                totalPoints += 50;
            this.totalPoints;
        }
        else {
            if (counter >= 15 && counter < 30) {
                va = 2;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 30 && counter < 45) {
                va = 3;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;
            }
            if (counter >= 45) {
                va = 4;
                vb = 50 * va;
                totalPoints += vb;
                this.totalPoints;

            }
            else
                totalPoints += 50;
            this.totalPoints;
        }
    }


    /////////////////
    else {
        if (totalPoints == 0)
        { }
        else {
            counter = 0;

        }
    }

    return totalPoints;

}