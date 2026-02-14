            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            let count = 10; // This value is for grid drawing function
            let sqCount = 10; // This value is for square drawing function, quantity of squares
            let gap = 10; // This value is for difference gap between squares
            let offsetSq = 2;
            let offsetSq2 = 2;
            let horDist = 0;
            let vertDist = 0;
            genSquare();

            function horizontalDistortion(value){
                ctx.clearRect(0, 0, 600, 600);
                horDist = value * 1;
                genSquare();
                console.log("offsetSq " + horDist);
            }

            function verticalDistortion(value){
                ctx.clearRect(0, 0, 600, 600);
                vertDist = value * 1;
                genSquare();
                console.log("offsetSq " + vertDist);
            }
            
            function gapBetweenSquares(value) {
                ctx.clearRect(0, 0, 600, 600);
                gap = value;
                genSquare();
                console.log("Gap " + gap);
            }

            function quantityOfSquares(value){
                ctx.clearRect(0, 0, 600, 600);
                sqCount = value;
                genSquare();
                console.log("sqCount " + sqCount);
            }
            

            



            function genSquare(){
                const fullSize = 600; // width and height of canvas element
                let sc = sqCount;
                let gsz = gap;
                let osc = offsetSq;
                let osc2 = offsetSq2;
                let multSqH = 10;
                let multSqV = 10;
                let lw = 2;
                let osc_m, osc2_m;
                osc_m = horDist;
                osc2_m = vertDist;
                for (sc; sc >= 2; sc --) {
                    ctx.lineWidth = lw;
                    ctx.beginPath();
                    ctx.rect(multSqH + osc_m, multSqV + osc2_m, fullSize - multSqH*osc, fullSize - multSqV*osc2); // By changing the multiplier it is possible to offset squares to corner
                    ctx.stroke();
                    
                    multSqH = multSqH + (1 * gsz);
                    multSqV = multSqV + (1 * gsz);
                }
            }