(function() {
    // Global var
    var muted = false,
        paused = false;

    // Controls
    var muteBtn  = document.querySelector('.control__btn--mute');

    muteBtn.addEventListener('click', function() {
        if (muted === false) {
            Howler.mute();
            muted = true;
            muteBtn.textContent = 'Unmute';
            muteBtn.classList.add('active');
        } else if (muted === true) {
            Howler.unmute();
            muted = false;
            muteBtn.textContent = 'Mute';
            muteBtn.classList.remove('active');
        }
    });

    // Range Sliders in appearance
    var
        sliderRain    = document.querySelector('.sound__range-slider--rain')
        sliderStorm   = document.querySelector('.sound__range-slider--storm'),
        sliderCafe    = document.querySelector('.sound__range-slider--cafe'),
        sliderWaves   = document.querySelector('.sound__range-slider--waves'),
        sliderRiver   = document.querySelector('.sound__range-slider--river'),
        sliderBirds   = document.querySelector('.sound__range-slider--birds'),

    sliderRain.addEventListener('change', function() {
        var sliderVol = sliderRain.value * 0.1;
        var rain = new Howl({
            urls: ['assets/sounds/rain.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });
    });

    sliderStorm.addEventListener('change', function() {
        var sliderVol = sliderStorm.value * 0.1;
        var storm = new Howl({
            urls: ['assets/sounds/storm.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });
    });

    sliderCafe.addEventListener('change', function() {
        var sliderVol = sliderCafe.value * 0.1;
        var cafe = new Howl({
            urls: ['assets/sounds/cafe.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });
    });

    sliderWaves.addEventListener('change', function() {
        var sliderVol = sliderCafe.value * 0.1;
        var waves = new Howl({
            urls: ['assets/sounds/waves.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });
    });

    sliderRiver.addEventListener('change', function() {
        var sliderVol = sliderRiver.value * 0.1;
        var river = new Howl({
            urls: ['assets/sounds/river.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });
    });

    sliderBirds.addEventListener('change', function() {
        var sliderVol = sliderBirds.value * 0.1;
        var birds = new Howl({
            urls: ['assets/sounds/birds.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });
    });

})();
