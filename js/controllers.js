shiro.controller('HomeCtrl', function($scope) {
    // Consts
    var VOLUME_MULTIPLIER = 0.01

    // Global var
    var muted = false,
        paused = false;

    // Array of all sounds playing
    var playingSounds = [];

    // Controls
    var muteBtn  = document.querySelector('.control__btn--mute');

    // Range Sliders in appearance
    var
        sliderGlobal  = document.querySelector('.sound__range-slider--global'),
        sliderRain    = document.querySelector('.sound__range-slider--rain')
        sliderStorm   = document.querySelector('.sound__range-slider--storm'),
        sliderCafe    = document.querySelector('.sound__range-slider--cafe'),
        sliderWaves   = document.querySelector('.sound__range-slider--waves'),
        sliderRiver   = document.querySelector('.sound__range-slider--river'),
        sliderBirds   = document.querySelector('.sound__range-slider--birds');

    // Set the global volume on start
    sliderGlobal.value = 70;
    Howler.volume(0.7);

    // Mute all sounds (derp...)
    function globalMute() {
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
    }

    // Disable refresh when pressing F5
    function disableRefresh(e) {
        if ((e.which || e.keyCode) == 116) {
            e.preventDefault();
        }
    }

    // Global mute
    muteBtn.addEventListener('click', globalMute);

    sliderGlobal.addEventListener('change', function() {
        var sliderGlobalVol = sliderGlobal.value * VOLUME_MULTIPLIER;
        Howler.volume(sliderGlobalVol);
    });

    function checkIfExits(soundName) {
        var s = {
            exists: false
        };

        if (!playingSounds) {
            console.log("Nothing is playing!");
            return s;
        } else {
            for (var i = 0, len = playingSounds.length; i < len; i++) {
                if (playingSounds[i].sound === soundName) {
                    var s = {
                        exists: true,
                        id: playingSounds[i].id
                    }

                    return s;
                }
            }
        }
    }


    sliderRain.addEventListener('change', function() {
        var sliderVol = sliderRain.value * VOLUME_MULTIPLIER;

        var rain = new Howl({
            urls: ['assets/sounds/rain.mp3'],
            loop: true,
            volume: sliderVol
        });

        var sound = checkIfExits('rain');

        if (sound === undefined) {
            console.log('nothing here');
            rain.play(function(soundId) {
                console.log(soundId);

                var o = {
                    sound: 'rain',
                    id: soundId
                };

                playingSounds.push(o);
            });
        }
    });

    sliderStorm.addEventListener('change', function() {
        var sliderVol = sliderStorm.value * VOLUME_MULTIPLIER;
        var storm = new Howl({
            urls: ['assets/sounds/storm.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });

        var sound = checkIfExits('storm');

        if (sound === undefined) {
            console.log('nothing here');
            storm.play(function(soundId) {
                console.log(soundId);

                var o = {
                    sound: 'storm',
                    id: soundId
                };

                playingSounds.push(o);
            });
        }
    });

    sliderCafe.addEventListener('change', function() {
        var sliderVol = sliderCafe.value * VOLUME_MULTIPLIER;
        var cafe = new Howl({
            urls: ['assets/sounds/cafe.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });

        var sound = checkIfExits('cafe');

        if (sound === undefined) {
            console.log('nothing here');
            cafe.play(function(soundId) {
                console.log(soundId);

                var o = {
                    sound: 'cafe',
                    id: soundId
                };

                playingSounds.push(o);
            });
        }
    });

    sliderWaves.addEventListener('change', function() {
        var sliderVol = sliderWaves.value * VOLUME_MULTIPLIER;
        var waves = new Howl({
            urls: ['assets/sounds/waves.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });

        var sound = checkIfExits('waves');

        if (sound === undefined) {
            console.log('nothing here');
            waves.play(function(soundId) {
                console.log(soundId);

                var o = {
                    sound: 'waves',
                    id: soundId
                };

                playingSounds.push(o);
            });
        }
    });

    sliderRiver.addEventListener('change', function() {
        var sliderVol = sliderRiver.value * VOLUME_MULTIPLIER;
        var river = new Howl({
            urls: ['assets/sounds/river.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });

        var sound = checkIfExits('river');

        if (sound === undefined) {
            console.log('nothing here');
            river.play(function(soundId) {
                console.log(soundId);

                var o = {
                    sound: 'river',
                    id: soundId
                };

                playingSounds.push(o);
            });
        } else if (sound.exists) {
            river.volume(sliderVol, sound.id);
            console.log(river.volume(sliderVol, sound.id));
            console.log(sound);
            console.log(Howler);
        }
    });

    sliderBirds.addEventListener('change', function() {
        var sliderVol = sliderBirds.value * VOLUME_MULTIPLIER;
        var birds = new Howl({
            urls: ['assets/sounds/birds.mp3'],
            autoplay: true,
            loop: true,
            volume: sliderVol
        });

        var sound = checkIfExits('birds');

        if (sound === undefined) {
            console.log('nothing here');
            birds.play(function(soundId) {
                console.log(soundId);

                var o = {
                    sound: 'birds',
                    id: soundId
                };

                playingSounds.push(o);
            });
        }
    });
});

shiro.controller('AboutCtrl', function($scope) {
    // Stuff here
});
