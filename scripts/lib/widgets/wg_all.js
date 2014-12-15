function WgBlogsCreate (element){
    $.widget ("custom.blogs", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.blogs({ name: "Блоги"});
}

function WgHoorayCreate (element){
    $.widget ("custom.hooray", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.hooray({ name: "Ура и спасибо"});
}

function WgMyprofileCreate (element){
    $.widget ("custom.myprofile", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.myprofile({ name: "Мой профиль"});
}

function WgInterviewCreate (element){
    $.widget ("custom.interview", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>")
                .append("<br><p>Вы уже ответили на данный опрос</p>");
        }
    });

    element.interview({ name: "Опросы"});
}

function WgOfficemapCreate (element){
    $.widget ("custom.officemap", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.officemap({ name: "Карта офиса"});
}

function WgEventsCreate (element){
    $.widget ("custom.events", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.events({ name: "События"});
}

function WgNewemployeesCreate (element) {
    $.widget ("custom.newemployees", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.newemployees({ name: "Новые сотрудники"});
}

function WgBirthdaysCreate (element) {
    $.widget ("custom.birthdays", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a style='' href='/'>" + name + "</a>");
        }
    });

    element.birthdays({ name: "Дни рождения"});
}

function WgIdeasCreate(element) {
    $.widget ("custom.ideas", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.ideas({ name: "Идеи"});
}

function WgNoteCreate (element) {
    $.widget ("custom.note", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.note({ name: "Памятка"});
}

function WgFacebookCreate (element) {
    $.widget ("custom.facebook", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.facebook({ name: "Соцсети"});
}

function WgJobCreate (element) {
    $.widget ("custom.job", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.job({ name: "Вакансии"});
}

function WgNeighborsCreate (element) {
    $.widget ("custom.neighbors", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.neighbors({ name: "Соседи"});
}

function WgPortalCreate (element) {
    $.widget ("custom.portal", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.portal({ name: "Портал"});
}

function WgServicesCreate (element) {
    $.widget ("custom.services", {
        _create: function() {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href='/'>" + name + "</a>");
        }
    });

    element.services({ name: "Сервисы"});
}
