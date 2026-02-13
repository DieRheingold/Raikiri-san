            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            let count = 10; // This value is for grid drawing function
            let sqCount = 10; // This value is for square drawing function, quantity of squares
            let gap = 10;
            let offsetSq = 2;
            let offsetSq2 = 2;
            genSquare();

            
            
            function gapBetweenSquares(value) {
                ctx.clearRect(0, 0, 600, 600);
                gap = value;
                genSquare();
                console.log(gap);
            }

            function quantityOfSquares(value){
                ctx.clearRect(0, 0, 600, 600);
                sqCount = value;
                genSquare();
                console.log(sqCount);
            }
            

            



            function genSquare(){
                const fullSize = 600; // width and height of canvas element
                let sc = sqCount;
                let gsz = gap;
                let osc = offsetSq;
                let osc2 = offsetSq2;
                let multSq = 10;
                let lw = 2;
                let osc_m, osc2_m;
                osc_m = 1;
                osc2_m = 1;
                for (sc; sc >= 2; sc --) {
                    ctx.lineWidth = lw;
                    ctx.beginPath();
                    ctx.rect(multSq * osc_m, multSq * osc2_m, fullSize - multSq*osc, fullSize - multSq*osc2); // By changing the multiplier it is possible to offset squares to corner
                    ctx.stroke();
                    
                    multSq = multSq + (1 * gsz);
                }
            }

            function addSq(){ctx.clearRect(0, 0, 600, 600);
                             count = count + 1;
                             drawGridset();}

            function subSq(){ctx.clearRect(0, 0, 600, 600);
                             count = count - 1;
                             drawGridset();}

            function resSq(){ctx.clearRect(0, 0, 600, 600);
                             count = 10;
                             drawGridset();}

            function clscr(){ctx.clearRect(0,0,600,600);}

            function drawGridset(){
                
                let divider, divider2, gridCount;
                gridCount = count;
                divider = 600/gridCount;
                divider2 = 600/gridCount;
                for (gridCount; gridCount >= 0; gridCount--) {
                    ctx.beginPath();
                    ctx.moveTo(divider, 0);
                    ctx.lineTo(divider, 600);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(0, divider);
                    ctx.lineTo(600, divider);
                    ctx.stroke();
                    divider = divider + divider2;
                    
                }
                    
            }