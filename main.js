let foo2 = [];
        window.addEventListener('scroll', function(){
            foo2.unshift(window.scrollY);

            if(foo2[0]>foo2[1]){
                document.querySelector('.header').style.top = '-20rem'
            } else if (foo2[0]<foo2[1]){
                document.querySelector('.header').style.top = '0rem'
            }
        })

        var foo = 0;

        document.querySelector('.butn1').addEventListener('click', ()=>{
            foo +=1;
            console.log(foo)
            if(foo%3 == 0){
            document.querySelector('.menu-bar1').classList.add('showen2');
            document.querySelector('.menu-bar1').classList.remove('showen');
            document.querySelector('.menu-bar2').classList.remove('showen2');
            document.querySelector('.menu-bar2').classList.remove('showen');
            document.querySelector('.menu-bar3').classList.remove('showen2');
            document.querySelector('.menu-bar3').classList.remove('showen');
        } else if (foo%3 == 1 || foo%3 == -1){
            document.querySelector('.menu-bar1').classList.remove('showen2');
            document.querySelector('.menu-bar1').classList.remove('showen');
            document.querySelector('.menu-bar2').classList.remove('showen');
            document.querySelector('.menu-bar2').classList.add('showen2');
            document.querySelector('.menu-bar3').classList.remove('showen2');
            document.querySelector('.menu-bar3').classList.remove('showen');
        } else if (foo%3 == 2 || foo%3 == -2){
            document.querySelector('.menu-bar1').classList.remove('showen2');
            document.querySelector('.menu-bar1').classList.remove('showen');
            document.querySelector('.menu-bar2').classList.remove('showen2');
            document.querySelector('.menu-bar2').classList.remove('showen');
            document.querySelector('.menu-bar3').classList.remove('showen');
            document.querySelector('.menu-bar3').classList.add('showen2');
        }
        })
        document.querySelector('.butn2').addEventListener('click', ()=>{
            foo -=1;
            console.log(foo)
            if(foo%3 == 0){
            document.querySelector('.menu-bar1').classList.add('showen');
            document.querySelector('.menu-bar1').classList.remove('showen2');
            document.querySelector('.menu-bar2').classList.remove('showen2');
            document.querySelector('.menu-bar2').classList.remove('showen');
            document.querySelector('.menu-bar3').classList.remove('showen2');
            document.querySelector('.menu-bar3').classList.remove('showen');
        } else if (foo%3 == 1 || foo%3 == -1){
            document.querySelector('.menu-bar1').classList.remove('showen');
            document.querySelector('.menu-bar1').classList.remove('showen2');
            document.querySelector('.menu-bar2').classList.add('showen');
            document.querySelector('.menu-bar2').classList.remove('showen2');
            document.querySelector('.menu-bar3').classList.remove('showen');
            document.querySelector('.menu-bar3').classList.remove('showen2');
        } else if (foo%3 == 2 || foo%3 == -2){
            document.querySelector('.menu-bar1').classList.remove('showen');
            document.querySelector('.menu-bar1').classList.remove('showen2');
            document.querySelector('.menu-bar2').classList.remove('showen');
            document.querySelector('.menu-bar2').classList.remove('showen2');
            document.querySelector('.menu-bar3').classList.remove('showen2');
            document.querySelector('.menu-bar3').classList.add('showen');
        }
        })

        let countbtn = 0;
        document.querySelector('.btn-main').addEventListener('click', ()=>{
            countbtn +=1;
            console.log(countbtn);
            if(countbtn%2 == 1){
                document.querySelector('.change-mode').style.opacity = '1';
            } else if(countbtn%2 == 0){
            }
        })