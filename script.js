const App = function () {     

    this.init = () => {
        const app = document.querySelector('.app');
        const page1 = document.createElement('div');
        page1.classList.add('page1');

        page1.innerHTML = `
        
        <header>
            <div class="logo">
                <a href="/">
                    <img src="/imgs/Group.png" alt="#">
                </a>
            </div>
        </header>

        
        <div class="vector1">
            <img src="/imgs/Vector.png" alt="#">
        </div>
        <div class="vector2">
            <img src="/imgs/Vector2.png" alt="#">
        </div>
        

        <div class="under_construction">
            <h1 class="mainText under_constructionTitle">Under Construction</h1>
            <p class="extraText under_constructionDesc">We're making lots of improvements and will be back soon</p>
        </div>

        <div class="timer">
            <div class="timer__items">
                <div class="timer__item">
                    <span class="days timer__itemNumber mainText"></span>
                    <span class="timer__itemText">Days</span>
                </div>
                <div class="timer__item">
                    <span class="hours timer__itemNumber mainText"></span>
                    <span class="timer__itemText">Hours</span>
                </div>
                <div class="timer__item">
                    <span class="minutes timer__itemNumber mainText"></span>
                    <span class="timer__itemText">Minutes</span>
                </div>
                <div class="timer__item">
                    <span class="seconds timer__itemNumber mainText"></span>
                    <span class="timer__itemText">Seconds</span>
                </div>
            </div>        
        </div>

        <div class="check_event">
            <p class="extraText check_eventDesc">Check our event page when you wait:</p>
            <a href="https://rabota.by/"><button class="check_eventBtn">Go to the event &nbsp;&nbsp; <img src="/imgs/arrow-right.png" alt="#"> </button></a>
        </div>

        <div class="footer">
            <form class="enter_form" action="#">
                <input id="email" type="email" placeholder="Enter your Email and get notified">
                <button class="enter_formBtn" type="submit">
                    <img src="/imgs/arrow-right.png" alt="#">
                </button>
            </form>
            <a class="other_events" href="#page2">
                <button class="other_eventsBtn">Other events &nbsp; <img src="/imgs/arrow-right.png" alt="#"></button>
            </a>            
        </div>        
        `;

        const page2 = document.createElement('div');
        page2.classList.add('page2');

        page2.innerHTML = `
        <div class="page2_wrapper" id="page2">
            <h2 class="mainText all_events">All events</h2>
            <div class="accordion">
                <button class="item item-1"><span class="acc_Title">Hawaiian party</span><span class="item-number">01</span></button>
                <div class="accordion_container active accordion_container-1">                      
                    <div class="accordion_content">          
                        <h1 class="number">01</h1>    
                        <h3>Hawaiian party</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button></a>
                    </div>         
                </div>
                <button class="item item-2"><span class="acc_Title">Мafia party</span><span class="item-number">02</span></button>
                <div class="accordion_container accordion_container-2">   
                    <div class="accordion_content">     
                        <h1 class="number">02</h1>               
                        <h3>Мafia party</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button></a>
                    </div>              
                </div>
                <button class="item item-3"><span class="acc_Title">Party</span><span class="item-number">03</span></button>
                <div class="accordion_container accordion_container-3">   
                    <div class="accordion_content">   
                        <h1 class="number">03</h1>         
                        <h3>Party</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button></a>
                    </div>             
                </div>
                <button class="item item-4"><span class="acc_Title">Party on the beach</span><span class="item-number">04</span></button>
                <div class="accordion_container accordion_container-4">       
                    <div class="accordion_content"> 
                        <h1 class="number">04</h1>               
                        <h3>Party on the beach</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button></a>
                    </div>             
                </div>
                <button class="item item-5"><span class="acc_Title">Home Security</span><span class="item-number">05</span></button>
                <div class="accordion_container accordion_container-5"> 
                    <div class="accordion_content">
                        <h1 class="number">05</h1>                      
                        <h3>Home Security</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button></a>
                    </div>             
                </div>
                <button class="item item-6"><span class="acc_Title">Network Design & Implementation</span><span class="item-number">06</span></button>
                <div class="accordion_container accordion_container-6">    
                    <div class="accordion_content">
                        <h1 class="number">06</h1>                   
                        <h3>Network Design & Implementation</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button></a>
                    </div>             
                </div>
                <button class="item item-7"><span class="acc_Title">System Design & Engineering</span><span class="item-number">07</span></button>
                <div class="accordion_container accordion_container-7">    
                    <div class="accordion_content">
                        <h1 class="number">07</h1>                   
                        <h3>System Design & Engineering</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button></a>
                    </div>            
                </div>
                <button class="item item-8"><span class="acc_Title">Client Care Plans</span><span class="item-number">08</span></button>
                <div class="accordion_container accordion_container-8">    
                    <div class="accordion_content">      
                        <h1 class="number">08</h1>             
                        <h3>Client Care Plans</h3>
                        <p>13.02.2023</p>   
                        <a href="https://rabota.by/"><button class="more_info">More information</button> </a>
                    </div>              
                </div>            
            </div>            
        </div>
        `
        app.append(page1, page2);

        // Реализовать аккордеон
        const accBtn = document.querySelectorAll('.item');
        const accContent = document.querySelectorAll('.accordion_container');

        accBtn.forEach(function(item, index){
            item.addEventListener('click', function(event){
                
                accBtn.forEach(function(item,index){
                    item.classList.remove('bold');
                });
                accContent.forEach(function(item, index){
                    item.classList.remove('active');
                });

                event.target.parentElement.classList.add('bold');
                event.currentTarget.classList.add('bold');
                accContent[index].classList.add('active');
            });
        });


        // Реализовать плавный скролл к следующей секции по нажатию кнопки “Other events”
        const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 300,
        framesCount = 50;

        anchors.forEach(function(item) {
            item.addEventListener('click', function(e) {
                e.preventDefault();

                // для каждого якоря определяем его координату Y
                let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

                // запускаем интервал, в котором считаем на сколько скроллить за 1 такт
                let scroller = setInterval(function() {
                let scrollBy = coordY / framesCount;

                // если к-во пикселей для скролла за 1 такт больше расстояния до элемента и дно страницы не достигнуто, то скроллим на к-во пикселей, которое соответствует одному такту
                if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                    window.scrollBy(0, scrollBy);
                    } else {
                    // иначе добираемся до элемента и выходим из интервала
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                    }
                
                }, animationTime / framesCount); // время интервала равняется частному от времени анимации и к-ва кадров
            });
        });

        // Реализовать валидацию формы подписки в футере 
        const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i; 

        const enterBtn = document.querySelector('.enter_formBtn');
        enterBtn.addEventListener('click', () => {        
            this.validate();
        });

        this.validate = () => {        
                
            let input = document.querySelector('#email');

            if(input.value){                

                if (this.isEmailValid(input.value)) {
                    console.log('true');
                    this.validateTrue();
                    input.value = '';
                } else {
                    console.log('false');
                    this.validateFalse();                
                    input.value = '';
                };      
                } else {          
                    this.validateFalse(); 
            }            
        };

        this.isEmailValid = (value) => {
            return pattern.test(value);
        };

        // После отправки формы должен появляться popup с сообщением об успехе или ошибке передачи данных
        this.validateTrue = () => {
            const popup = document.createElement('div');
            popup.classList.add('popup');

            const popupOverlay = document.createElement('div');
            popupOverlay.classList.add('overlay');

            const popupContent = document.createElement('div');
            popupContent.classList.add('popup_content');
            popupContent.innerHTML = `
                <div class="popup_content_items">  
                    <button class="popupBtnX"></button>
                    <h3 class="mainText">Success!</h3>
                    <p class="extraText">You have successfully subscribed to the email newsletter</p>
                    <button class="popupBtn"></button>
                </div>`
            ;
                
            
            popup.append(popupOverlay, popupContent);
            document.body.append(popup);   

            const popupBtn = document.querySelector('.popupBtn');
            popupBtn.addEventListener('click', () => {
                this.closePopUp();
            })  

            const popupBtnX = document.querySelector('.popupBtnX');
            popupBtnX.addEventListener('click', () => {
                this.closePopUp();
            })  

            this.closePopUp = () => {
                let popupElem = document.querySelector('.popup');
                popupElem.remove();
            } 

            return popup;
        
        };        

        this.validateFalse = () => {
            const popup = document.createElement('div');
            popup.classList.add('popup');

            const popupOverlay = document.createElement('div');
            popupOverlay.classList.add('overlay');

            const popupContent = document.createElement('div');
            popupContent.classList.add('popup_content');
            popupContent.innerHTML = `
                <div class="popup_content_items">  
                    <button class="popupBtnX"></button>
                    <h3 class="mainText">Error!</h3>
                    <p class="extraText">Please enter a valid email</p>
                    <button class="popupBtn"></button>
                </div>`
            ;                
            
            popup.append(popupOverlay, popupContent);
            document.body.append(popup);   

            const popupBtn = document.querySelector('.popupBtn');
            popupBtn.addEventListener('click', () => {
                this.closePopUp();
            })  

            const popupBtnX = document.querySelector('.popupBtnX');
            popupBtnX.addEventListener('click', () => {
                this.closePopUp();
            })  

            this.closePopUp = () => {
                let popupElem = document.querySelector('.popup');
                popupElem.remove();
            } 

            return popup;
        
        };   

        // Реализовать интерактивный обратный отсчет от заданной даты к 24.07.2024
        const deadline = "2024-07-24"; 

        this.getTimeRemaining = (endTime) => {
            let currentTime = new Date();
            let t = Date.parse(endTime) - Date.parse(currentTime);
            let seconds = Math.floor((t / 1000) % 60);
            let minutes = Math.floor((t / 1000 / 60) % 60);
            let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            };
        };

        this.initializeClock = (endTime) => {
            let daysSpan = document.querySelector('.days');
            let hoursSpan = document.querySelector('.hours');
            let minutesSpan = document.querySelector('.minutes');
            let secondsSpan = document.querySelector('.seconds');
    

            this.updateClock = () =>  {
                let t = this.getTimeRemaining(endTime);
        
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            
                if (t.total <= 0) {
                clearInterval(timeinterval);
                };
            };
        
            this.updateClock();
            let timeinterval = setInterval(this.updateClock, 1000);
        };
        
        this.initializeClock(deadline);
    };    
    
};

window.addEventListener('load', () => {
    const app = new App();
    app.init();
});

