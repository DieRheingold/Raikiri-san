            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            let count = 10; // This value is for grid drawing function
            let sqCount = 10; // This value is for square drawing function, quantity of squares
            let offsetSq = 2;
            let offsetSq2 = 2;
            genSquare();
            
            function verticalOffsetRange(value) {
                ctx.clearRect(0, 0, 600, 600);
                offsetSq = value;
                genSquare(); 
            }

            function addHorizontalOffsetForUpper(){
                ctx.clearRect(0, 0, 600, 600);

                genSquare();
                console.log("horizontalOffUpper" + offsetSq);
            }
            

            function addVerticalOffset(){
                ctx.clearRect(0, 0, 600, 600);
                
                offsetSq = ((offsetSq * 10) + 1) / 10;
                genSquare();
                console.log("verticalOff" + offsetSq);

            }

            function subVerticalOffset(){
                ctx.clearRect(0, 0, 600, 600);
                offsetSq = ((offsetSq * 10) - 1) / 10;
                genSquare();
                console.log("verticalOff" + offsetSq);
            }

            function resVerticalOffset(){
                ctx.clearRect(0, 0, 600, 600);
                offsetSq = (offsetSq - offsetSq) + 2;
                genSquare();
                console.log("verticalOff" + offsetSq);
            }

            function addHorizontalOffset(){
                ctx.clearRect(0, 0, 600, 600);
                offsetSq2 = ((offsetSq2 * 10) + 1) / 10;
                genSquare();
                console.log("horizontalOff" + offsetSq2);
            }

            function subHorizontalOffset(){
                ctx.clearRect(0, 0, 600, 600);
                offsetSq2 = ((offsetSq2 * 10) - 1) / 10;
                genSquare();
                console.log("horizontalOff" + offsetSq2);
            }

            function resHorizontalOffset(){
                ctx.clearRect(0, 0, 600, 600);
                offsetSq2 = (offsetSq2 - offsetSq2) + 2;
                genSquare();
                console.log("horizontalOff" + offsetSq2);
            }



            function genSquare(){
                const fullSize = 600; // width and height of canvas element
                let sc = sqCount;
                let osc = offsetSq;
                let osc2 = offsetSq2;
                let multSq = 10;
                let lw = 2;
                let osc_m, osc2_m;
                osc_m = 1;
                osc2_m = 1;
                for (sc; sc > 1; sc --) {
                    ctx.lineWidth = lw;
                    ctx.beginPath();
                    ctx.rect(multSq * osc_m, multSq * osc2_m, fullSize - multSq*osc, fullSize - multSq*osc2); // By changing the multiplier it is possible to offset squares to corner
                    ctx.stroke();
                    lw = lw;
                    multSq = multSq + sc;
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

            
            

            
            

