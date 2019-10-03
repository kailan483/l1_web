var map1, map2;
ymaps.ready(function () {
    // Для начала проверим, поддерживает ли плеер браузер пользователя.
    if (!ymaps.panorama.isSupported()) {
        // Если нет, то просто ничего не будем делать.
        return;
    }
    
    map1 = new ymaps.Map(
        "map1", {
        center: [53.248534, 34.371218],
        zoom: 18
    });
    map2 = new ymaps.Map(
        "map2", {
        center: [53.245047, 34.373672],
        zoom: 18
    });    
    // Для добавления панорамы на страницу также можно воспользоваться
    // методом panorama.createPlayer. Этот метод ищет ближайщую панораму и
    // в случае успеха создает плеер с найденной панорамой.
    ymaps.panorama.createPlayer(
        'player1',
        [53.248534, 34.371218],
        {direction: [100,30]}        
    );
    ymaps.panorama.createPlayer(
        'player2',
        [53.245047, 34.373672],
        { direction: [180, 0] }
    );


});
