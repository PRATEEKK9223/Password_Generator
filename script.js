
        let input=document.querySelector("input");
        let btn=document.querySelector(".btn");
        let select=document.querySelector("select");
        
        const UpperCase="ABCDEFGHIJKLMNOPQRSTWXYZ";
        const LowerCase="abcdefghijklmnopqrstwxyz";
        const symbols="!@#$%^&*_+:";
        const digits="0123456789";
        const allChar="abcdefghijklmnopqrstwxyz!@#$%^&*_+: ";
        let password="";

        let length=6;
        select.addEventListener("change",()=>{
            length=select.value;
        });

        function CreatPass(){
            password="";
            if(length==6){
                password+=UpperCase[Math.floor(Math.random()*UpperCase.length)];
                password+=symbols[Math.floor(Math.random()*symbols.length)];
                password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
                password+=digits[Math.floor(Math.random()*digits.length)];
                password+=allChar[Math.floor(Math.random()*allChar.length)];
                password+=digits[Math.floor(Math.random()*digits.length)];

            }
            else if(length==8){
                password+=UpperCase[Math.floor(Math.random()*UpperCase.length)];
                password+=symbols[Math.floor(Math.random()*symbols.length)];
                password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
                password+=digits[Math.floor(Math.random()*digits.length)];
                password+=allChar[Math.floor(Math.random()*allChar.length)];
                password+=symbols[Math.floor(Math.random()*symbols.length)];
                password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
                password+=digits[Math.floor(Math.random()*digits.length)];
            }
            else{
                 password+=UpperCase[Math.floor(Math.random()*UpperCase.length)];
                password+=symbols[Math.floor(Math.random()*symbols.length)];
                password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
                password+=digits[Math.floor(Math.random()*digits.length)];
                password+=allChar[Math.floor(Math.random()*allChar.length)];
                password+=UpperCase[Math.floor(Math.random()*UpperCase.length)];
                password+=symbols[Math.floor(Math.random()*symbols.length)];
                password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
                password+=digits[Math.floor(Math.random()*digits.length)];
                password+=allChar[Math.floor(Math.random()*allChar.length)];
                 password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
                password+=digits[Math.floor(Math.random()*digits.length)];
            }
            input.value=password;
        }

        function Copy(){
            input.select();
            document.execCommand("copy");
        }