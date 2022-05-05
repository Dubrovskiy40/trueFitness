const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require("cors");

const users = [
    { phone: "89999999999", password: "123456", name: "Иван" },
    { phone: "81111111111", password: "654321" },
];

//http://sportwiki.to/
const recipeWeightUp = {
    salads: [
        { id: 1, img: '/images/recipe/weightUp/salads/1.jpg', nameRecipe: 'Салат с авокадо и грушами', preparationTime: '10 минут', timeForPreparing: '20 минут', ingredients: ['груши 4 шт.', 'перец сладкий 2 шт.', 'лук зеленый рубленый 3 cт. ложки', 'зелень петрушки рубленая 2 cт. ложка'], recipe: 'Соедините ингредиенты соуса и взбейте. Очищенные груши, авокадо и перец нарежьте кубиками, перемешайте и залейте приготовленным соусом. Затем добавьте лук и зелень. Перемешайте.', calories: '155-250' },
        { id: 2, img: '/images/recipe/weightUp/salads/2.jpg', nameRecipe: 'Салат с овощами и тофу', preparationTime: '15 минут', timeForPreparing: '45 минут', ingredients: ['сыр тофу 150 г', 'шампиньоны 30 г', 'брокколи 30 г', 'капуста китайская 4 листа', 'лук репчатый 2 головки', 'морковь 1 шт.', 'стебель сельдерея 2 шт.', 'ростки соевые 60 г', 'масло оливковое 1 cт. ложка', 'арахис обжаренный 2 ст. ложки'], recipe: 'Тофу нарежьте мелкими кубиками. Шампиньоны нарежьте ломтиками, морковь и сельдерей — тонкими ломтиками, лук — кольцами. Брокколи разберите на соцветия. Грибы, морковь, сельдерей и брокколи соедините и жарьте на масле, помешивая, на сильном огне 2 минуты. Овощи остудите, добавьте лук, арахис и ростки сои. Для соуса смешайте оставшееся оливковое масло с лимонным соком, медом, имбирем, соевым соусом и кунжутным маслом и взбейте. Соус смешайте с овощами и добавьте тофу. Охладите. Китайскую капусту нарежьте полосками и разложите на блюде. Сверху выложите овощи и сыр.', calories: '155-250' },
        { id: 3, img: '/images/recipe/weightUp/salads/3.jpg', nameRecipe: 'Салат «Праздничный»', preparationTime: '10 минут', timeForPreparing: '30 минут', ingredients: ['филе лосося 500 г', 'спаржа 4 шт.', 'картофель 2 шт.', 'горчица 1/2 ч. ложки', 'масло растительное 4 ст. ложки'], recipe: 'Филе лосося нарежьте ломтиками, посолите, обжарьте на масле, посыпьте паприкой и охладите. Спаржу очистите, отваривайте на пару 10 минут, затем нарежьте кусочками. Очищенный картофель отварите, нарежьте ломтиками. Подготовленные ингредиенты соедините и перемешайте. Для соуса смешайте горчицу, масло, вино и соль. Приготовленным соусом полейте салат. Оформите зеленью.', calories: '150' },
        { id: 4, img: '/images/recipe/weightUp/salads/4.jpg', nameRecipe: 'Салат «Валенсия»', preparationTime: '10 минут', timeForPreparing: '25 минут', ingredients: ['филе куриное вареное 200 г', 'рис отварной 1 стакан', 'корнишоны 4 шт.', 'помидор 1 шт.', 'зеленый горошек консервированный 100 г', 'лук зеленый 50 г'], recipe: 'Куриное филе нарежьте ломтиками, помидор — кружочками, корнишоны — мелко, лук зеленый — колечками. В центр блюда выложите рис, вокруг разложите кружочки помидора, ломтики филе, зеленый горошек, нарезанные корнишоны и колечки зеленого лука. Для соуса смешайте масло с уксусом, рубленым чесноком и солью. Полейте салат приготовленным соусом. При подаче оформите зеленью.', calories: '155-250' },
        { id: 5, img: '/images/recipe/weightUp/salads/5.jpg', nameRecipe: 'Спаржа с соусом «Муслин»', preparationTime: '10 минут', timeForPreparing: '30 минут', ingredients: ['600 г спаржи', '300 мл обезжиренного молока', '2 яйца', '1 кубик овощного бульона', '20 г кукурузного крахмала', '1 л воды', '2 лимона', 'соль и перец.'], recipe: 'Спаржу очистить и отварить (10-15 минут) в кипящей воде с кубиком бульона до мягкости. Слить воду. Подготовить соус: растворить кукурузный крахмал в холодном молоке, затем подогреть его в кастрюльке на слабом огне, непрерывно помешивая, пока не загустеет. Добавить яичные желтки и варить еще минуту. Приправить солью и перцем. Выжать сок из лимона и добавить его в соус. Белки взбить в густую пену и аккуратно добавить в соус перед подачей.', calories: '250' },
        { id: 6, img: '/images/recipe/weightUp/salads/6.jpg', nameRecipe: 'Баклажаны с чесноком и петрушкой', preparationTime: '10 минут', timeForPreparing: '35 минут', ingredients: ['200-250 г баклажанов', '2 веточки петрушки', '1 зубчик чеснока', 'соль и перец'], recipe: 'Вымыть баклажаны, удалить хвостики, высушить полотенцем, разрезать вдоль пополам и удалить мякоть (отложить в сторону). Измельчить мякоть баклажанов, чеснок и петрушку. Приправить солью и перцем. Фаршировать половинки баклажанов полученной массой. Каждую половинку завернуть в алюминиевую фольгу и запекать 30-35 минут в духовке, предварительно нагретой до 170 °С', calories: '300' }
    ],
    firstCourse: [
        { id: 1, img: '/images/recipe/weightUp/firstCourse/1.jpg', nameRecipe: 'Куриный бульон по-тайски', preparationTime: '15 минут', timeForPreparing: '180 минут', ingredients: ['2 куриных филе', '2 л холодной воды', '1 луковица, разрезанная на четверти', '1 пучок крупно нарезанной кинзы', '2 стебля измельченной цитронеллы', '2 измельченных листика кафрского лайма', 'соль, белый перец'], recipe: 'Положить курицу в глубокую кастрюлю и залить холодной водой. Довести до кипения, собрать пену с поверхности (пена это свернувшийся белок, что бы не переводить продукт, можно сперва обжарить или запечь грудку). Уменьшить огонь, добавить остальные Ингредиенты и варить 2-3 часа на медленном огне. Лимонная трава и листья кафрского лайма придадут блюду лимонный вкус. Используйте только стебли кинзы.' },
        { id: 2, img: '/images/recipe/weightUp/firstCourse/2.jpg', nameRecipe: 'Куриный суп с яйцом пашот', preparationTime: '5 минут', timeForPreparing: '40 минут', ingredients: ['2 куриных филе', '3 яйца', 'пучок зеленого лука', '1 л воды'], recipe: 'Сварить куриное филе в кастрюле (25-30 минут). Добавить нарезанный зеленый лук. Каждое из трех яиц аккуратно вылить в отдельную мисочку. Убавить огонь, аккуратно вылить одно за другим яйца в суп, не делая круговоротов, чтобы каждое яйцо получилось круглым. Варить суп еще минут 5, выключить огонь и дать супу постоять минут 10.' },
        { id: 3, img: '/images/recipe/weightUp/firstCourse/3.jpg', nameRecipe: 'Куриный суп с яйцом и тофу', preparationTime: '5 минут', timeForPreparing: '30 минут', ingredients: ['1 куриная грудка', '2 яйца', '1-2 зубчика чеснока', 'несколько кубиков тофу', 'лимонный сок', 'соль, перец'], recipe: 'Налить в кастрюлю 1 л воды и поставить варить куриное филе на 20 минут. Достать курицу, порезать на кусочки и отправить обратно в бульон. В кипящий бульон добавить, постоянно мешая, одно яйцо, второе яйцо сварить вкрутую. Немного посолить. Нарезать кусочками вареное яйцо и тофу, добавить в бульон. Измельчить чеснок и положить в суп. В суп можно добавить несколько капель лимонного сока.' },
        { id: 4, img: '/images/recipe/weightUp/firstCourse/4.jpg', nameRecipe: 'Суп с овсяными отрубями', preparationTime: '10 минут', timeForPreparing: '50 минут', ingredients: ['2 куриных филе', '1 л воды', '1 луковица', '1 сырое яйцо', '1,5 ложки овсяных отрубей', 'небольшой пучок укропа', 'небольшой пучок зеленого лука', 'соль, перец'], recipe: 'Налить в кастрюлю воды и поставить варить куриное филе на 20 минут, периодически снимая пену. Затем достать курицу, порезать ее кубиками и положить обратно в бульон. Отдельно порезать луковицу и зеленый лук, добавить их в бульон. Приправить необходимыми специями. Аккуратно вылить в бульон сырое яйцо, варить еще несколько минут. В конце варки добавить овсяные отруби. При подаче посыпать укропом.' },
        { id: 5, img: '/images/recipe/weightUp/firstCourse/5.jpg', nameRecipe: 'Рыбный супчик из консервов', preparationTime: '5 минут', timeForPreparing: '15 минут', ingredients: ['2 баночки рыбных консервов в собственном соку (по 150 г)', '1 л воды', '1 луковица', '3 лавровых листа', 'пучок укропа', 'соль и перец'], recipe: 'Налить воды в кастрюлю, вскипятить. Посолить. Мелко покрошить лук. Размять рыбу вилкой, не сливая сок. Добавить в кипящую воду лук, лавровый лист. Поперчить. Добавить в бульон рыбу и варить 5 минут. В конце покрошить укроп.' },
        { id: 6, img: '/images/recipe/weightUp/firstCourse/6.jpg', nameRecipe: 'Окрошка на кефире', preparationTime: '5 минут', timeForPreparing: '10 минут', ingredients: ['2 стакана кефира 0 % жирности', 'половина стакана минеральной воды', '2 кусочка любой ветчины 4 % жирности (можно заменить вареными кальмарами или куриной грудкой)', '2 вареных яйца', 'пол столовой ложки белого уксуса', 'укроп', 'зеленый лук', 'соль, перец'], recipe: 'Порезать ветчину и яйца кубиками, мелко порубить зелень. Выложить в тарелки. Залить кефиром, который при необходимости можно разбавить минеральной водой. Добавить уксус, соль и перец по вкусу. Подавать окрошку холодной.' },
    ],
    secondCourse: [
        { id: 1, img: '/images/recipe/weightUp/secondCourse/1.jpg', nameRecipe: 'Шашлык из курицы', preparationTime: '20 минут', timeForPreparing: '30 минут', ingredients: ['филе индейки 400 г', 'лук репчатый 2 головки', 'масло оливковое 50 г', 'соус соевый 2 ст. ложки', 'мед 2 ст. ложки', 'масло арахисовое 5 ст. ложек', 'арахис подсоленный 6 ст. ложек', 'перец чили сушеный 3 стручка', 'кокосовая стружка 3 ст. ложки', 'цедра лимона тертая, порошок карри, корица, кориандр молотые по 1 ч. ложке'], recipe: 'Филе нарежьте кусочками, посолите, поперчите, посыпьте орегано. Лук нарежьте дольками. Лук и курицу залейте пивом и маринуйте 10 часов. Кусочки курицы и дольки лука поочередно нанижите на шампуры, обжарьте на гриле. При подаче оформите шашлык зеленью.', calories: '350' },
        { id: 2, img: '/images/recipe/weightUp/secondCourse/2.jpg', nameRecipe: 'Шашлык из индейки', preparationTime: '20 минут', timeForPreparing: '40 минут', ingredients: ['филе индейки 400 г', 'лук репчатый 2 головки', 'масло оливковое 50 г', 'соус соевый 2 ст. ложки', 'мед 2 ст. ложки', 'масло арахисовое 5 ст. ложек', 'арахис подсоленный 6 ст. ложек', 'перец чили сушеный 3 стручка', 'кокосовая стружка 3 ст. ложки', 'цедра лимона тертая, порошок карри, корица, кориандр молотые по 1 ч. ложке'], recipe: 'Филе индейки нарежьте кусочками. Половину лука мелко нарежьте, оставшийся натрите на мелкой терке. Оливковое масло смешайте с половиной стакана кипящей воды, остудите. Добавьте цедру, мелко нарезанный лук, кориандр, соевый соус, взбейте. Кусочки филе замаринуйте в этой смеси на 2 часа. Затем нанижите их на шампуры и жарьте на масле по 3-4 минуты с каждой стороны. Для соуса арахис и перец чили пропустите через мясорубку. Добавьте тертый лук, кокосовую стружку, корицу, карри, мед, арахисовое масло и перемешайте. Подавайте шашлык с соусом.', calories: '355-450' },
        { id: 3, img: '/images/recipe/weightUp/secondCourse/3.jpg', nameRecipe: 'Филе цыпленка, запеченное в кунжуте', preparationTime: '20 минут', timeForPreparing: '45 минут', ingredients: ['филе цыпленка 4 шт.', 'яичные белки 2 шт.', 'семена кунжута 200 г', 'мука пшеничная 2 ст. ложки', 'паприка молотая 1/4 ч. ложки'], recipe: 'Филе цыпленка посолите и поперчите. Семена кунжута смешайте с мукой. Филе смочите в яичных белках, запанируйте в кунжутной смеси и выложите на противень, смазанный маслом. Запекайте филе 20 минут при 220 °С. Подавайте филе со свежими овощами, оформив зеленью. Гарнир подайте отдельно.', calories: 'паприка молотая 1/4 ч. ложки' },
        { id: 4, img: '/images/recipe/weightUp/secondCourse/4.jpg', nameRecipe: 'Филе индейки по-баварски', preparationTime: '20 минут', timeForPreparing: '50 минут', ingredients: ['филе индейки 2 шт.', 'брокколи 200 г', 'яблоки 2 шт.', 'масло растительное 2 ст. ложки', 'яйцо 1 шт.', 'яйцо 1 шт.', 'зелень рубленая 2 ст. ложки', 'перец черный молотый'], recipe: 'Филе индейки посолите, поперчите и обжарьте на части масла. Брокколи разберите на соцветия, соедините с нарезанными ломтиками яблоками и слегка обжарьте на оставшемся масле. Брокколи с яблоками уложите на филе. Йогурт соедините с яйцом и зеленью. Полейте филе полученной смесью и запекайте 10-15 минут при 180-200 °С. При подаче гарнируйте припущенным зеленым горошком и оформите зеленью.', calories: '355-450' },
        { id: 5, img: '/images/recipe/weightUp/secondCourse/5.jpg', nameRecipe: 'Рагу из индейки с шампиньонами', preparationTime: '10 минут', timeForPreparing: '40 минут', ingredients: ['филе индейки 500 г', 'лук репчатый 1 головка', 'шампиньоны 250 г', 'кориандр молотый 1/2 ч. ложки', 'помидоры консервированные 4 шт.'], recipe: 'бобы соевые пророщенные 200 г масло соевое 3 ст. ложки перец черный молотый. Мякоть индейки нарежьте кубиками, посолите, поперчите, обжарьте на масле, добавьте кориандр и нарезанный кубиками лук. Шампиньоны разрежьте пополам или на 4 части, смешайте с нарезанными помидорами вместе с заливкой, соедините с индейкой и доведите до кипения. Тушите 15 минут под крышкой на слабом огне. Соевые бобы промойте, соедините с остальными ингредиентами и тушите еще 10 минут. При подаче оформите зеленью.', calories: '355-450' },
        { id: 6, img: '/images/recipe/weightUp/secondCourse/6.jpg', nameRecipe: 'Хрустящие куриные крылышки', preparationTime: '10 минут', timeForPreparing: '20 минут', ingredients: ['6 куриных крылышек', '50 мл соевого соуса', '1 зубчик измельченного чеснока', '1 столовая ложка жидкого низкокалорийного подсластителя', '4 чайные ложки смеси из пяти специй (аниса, гвоздики, перца, корицы, фенхеля)', '1 чайная ложка свежего тертого имбиря.'], recipe: 'Положить все Ингредиенты в салатницу и перемешать. Поставить на 24 часа в холодильник, время от времени помешивая. Затем положить в духовку в жаропрочное блюдо и запекать на гриле. Когда крылышки выделят сок и начнут шипеть (примерно через 5-10 минут), перевернуть и оставить на гриле еще 5-10 минут. Перед приемом пищи освободить крылышки от кожи.', calories: '450' }
    ],
    desserts: [
        { id: 1, img: '/images/recipe/weightUp/desserts/1.jpg', nameRecipe: 'Десерт из апельсинов и грейпфрутов с мятой', preparationTime: '10 минут', timeForPreparing: '20 минут', ingredients: ['апельсины 3 шт.', 'грейпфруты 2 шт.', 'мед жидкий 1 ст.', 'ложка мята 8 веточек'], recipe: 'Грейпфруты и апельсины очистите от кожуры и белых волокон, дольки вырежьте из мембран. Из части долек отожмите сок. Добавьте в него мед и рубленую мяту. Выложите, чередуя, дольки апельсинов и грейпфрутов на блюдо, полейте их соком. Охладите. При подаче оформите листиками мяты. К салату можете подать свежеотжатый апельсиновый сок и овсяное печенье.', calories: '130-180' },
        { id: 2, img: '/images/recipe/weightUp/desserts/2.jpg', nameRecipe: 'Банановый творог', preparationTime: '10 минут', timeForPreparing: '20 минут', ingredients: ['творог нежирный 120 г', 'творог нежирный 120 г', 'сок 1/2 лимона', 'корень имбиря молотый', 'семена подсолнечника 1 cт. ложка'], recipe: 'Творог протрите через сито, соедините с лимонным соком. Банан нарежьте мелкими кубиками. Творог соедините с бананом, добавьте имбирь, перемешайте. При подаче творог посыпьте семенами подсолнечника.', calories: '130-180' },
        { id: 3, img: '/images/recipe/weightUp/desserts/3.jpg', nameRecipe: 'Десерт «Фитнес»', preparationTime: '10 минут', timeForPreparing: '20 минут', ingredients: ['творог нежирный 250 г', 'творог нежирный 250 г', 'мед 4 cт. ложки', 'яблоко 1 шт.'], recipe: 'Творог протрите через сито, соедините с зернами пшеницы, перемешайте, выложите в креманки и полейте медом. Яблоко разрежьте на части, удалите семена, мякоть нарежьте ломтиками и выложите по краям креманки.', calories: '130-180' },
        { id: 4, img: '/images/recipe/weightUp/desserts/4.jpg', nameRecipe: 'Бланманже (десерт-желе)', preparationTime: '10 минут', timeForPreparing: '25 минут', ingredients: ['400 г обезжиренного творога (0 %)', '1 яичный белок', '2 листа желатина', '3 столовые ложки сыпучего сахарозаменителя', '8-10 капель экстракта горького миндаля.'], recipe: 'Замочить желатин в миске с холодной водой. В маленькой кастрюле подогреть 50 г творога. Добавить тщательно высушенный и отжатый желатин (желатин надо отжать от воды, чтобы он получился набухшим, но не растворенным). Все перемешать до полного растворения желатина. Выложить в салатницу оставшийся творог, 2 столовые ложки сахарозаменителя, миндальный экстракт. Взбить венчиком до однородной массы. Затем добавить творог с желатином. Взбить яичный белок в густую пену. В конце добавить оставшийся подсластитель и взбивать еще некоторое время. Аккуратно вылить в творог. Выложить смесь в 4 формочки и поставить в холодильник минимум на 2 часа.', calories: '130-180' },
        { id: 5, img: '/images/recipe/weightUp/desserts/5.jpg', nameRecipe: 'Овсяное печенье', preparationTime: '10 минут', timeForPreparing: '15 минут', ingredients: ['2 яйца', '1 столовая ложка пшеничных отрубей', '2 столовые ложки овсяных отрубей', 'половина чайной ложки жидкого подсластителя', '20 капель ванильного ароматизатора'], recipe: 'Смешать в миске 2 желтка, подсластитель, ароматизатор и отруби. Взбить белки в густую пену и аккуратно добавить в полученную из желтков смесь. Вылить тесто в плоскую форму для выпечки. Выпекать около 15-20 минут в духовке, предварительно нагретой до 180 °С (термостат 6).', calories: '200' },
        { id: 6, img: '/images/recipe/weightUp/desserts/6.jpg', nameRecipe: 'Кофейный крем', preparationTime: '5 минут', timeForPreparing: '20 минут', ingredients: ['600 мл обезжиренного молока', '3 яйца', '3 яйца', '3 столовые ложки подсластителя.'], recipe: 'Вскипятить молоко с кофе. Взбить яйца с подсластителем и добавить в молоко с кофе, постоянно помешивая. Вылить смесь в форму и выпекать на водяной бане в духовке, разогретой до 140 °С (термостат 4). Подавать охлажденным.', calories: '130' },
    ],
};

const trainings = {
    allTrainings: [
        {
            id: 1, img: 'str-for-girls-preview.png', trainingName: 'Силовая тренировка для девушек', duration: '1 час', fav: 0, likes: 0, dislikes: 0, url: 'strforgirls',
            exercises: [
                {
                    exerciseName: 'Скручивания на пресс', exerciseImg: 'levitationcrunch.jpg',
                    exerciseDescription:
                        `Прорабатывает мышцы пресса.\n\nЛягте на спину, поставьте стопы на пол, руки уберите за голову.Поднимайте корпус, чтобы лопатки отрывались от пола, а поясница оставалась прижатой.Не давите руками на голову, пальцы только касаются затылка, движение совершается за счёт напряжения мышц пресса, а не шеи.\n\nВыполните 3 подхода по 15–20 раз.`
                },
                {
                    exerciseName: 'Гиперэкстензия', exerciseImg: 'hyperextension.jpg',
                    exerciseDescription:
                        `Прокачивает разгибатели спины, ягодицы и заднюю поверхность бедра.\n\nВставьте ноги в тренажёр для гиперэкстензии, уберите руки за голову. Сохраняя прямую спину, опустите корпус, а затем поднимите его. В верхней точке смотрите в стену перед собой. Избегайте рывков и резких движений, выполняйте упражнение плавно и под контролем.\n\nСделайте 3 подхода по 15 раз. В дальнейшем можете увеличить количество повторений до 20–25.`
                },
                {
                    exerciseName: 'Приседания со штангой на спине', exerciseImg: 'squatswithbarbell.jpg',
                    exerciseDescription:
                        `Нагружает бёдра, ягодицы и мышцы кора.\n\nПоставьте ноги чуть шире расправленных плеч, сведите лопатки, носки стоп немного разверните в стороны. Отведите таз назад, слегка прогнитесь в пояснице и со вдохом уйдите в присед. Держите спину прямой, смотрите вперёд.\n\nПрисядьте до параллели бёдер с полом. Если пятки не отрываются от него, колени не заворачиваются внутрь, а спина остаётся прямой, попробуйте присесть ниже. Если при этом спина округлилась, возвращайтесь к предыдущему положению, то есть снова делайте бёдра параллельными полу.\n\nВыходите из приседания на выдохе.\n\nНачинайте с грифом на 15 или 20 кг и постепенно повышайте нагрузку. Всё время следите за техникой.`
                },
                {
                    exerciseName: 'Тяга блока к груди', exerciseImg: 'pulldown.jpg',
                    exerciseDescription:
                        `Прокачивает мышцы спины.\n\nСядьте на скамью, стопы прижмите к полу. Возьмитесь за ручку прямым (акцент на спину) или обратным (акцент на бицепс) хватом. Менять их можно каждую неделю. Сведите лопатки, опустите плечи, выпрямите спину. На выдохе подтяните ручку до касания груди. Корпус не отклоняется назад, плечи опущены, лопатки сведены.\n\nВерните ручку обратно и повторите упражнение.`
                },
            ]
        },
        { id: 2, img: 'str-for-boys-preview.png', trainingName: 'Силовая тренировка для мужчин', duration: '1 час', fav: 0, likes: 0, dislikes: 0, url: 'strforboys' },
        { id: 3, img: 'circuit-preview.png', trainingName: 'Круговая тренировка', duration: '1 час', fav: 0, likes: 0, dislikes: 0, url: 'circuit' },
        { id: 4, img: 'press-preview.png', trainingName: 'Тренировка на пресс', duration: '1 час', fav: 0, likes: 0, dislikes: 0, url: 'press' },
    ],
};

// const recipeWeightDown = {
//     'salads': [
//     ],
//     'firstCourse': [
//             {title: ''},
//             {id: 1, img: '/frontend/src/images/recipe/weightDown/1.jpg',  nameRecipe: 'Свекольник', preparationTime: '10 минут', timeForPreparing: '25 минут' ingredients: ['400 г свеклы с ботвой', '4 вареных яйца', '1 морковь', '4 средних огурца', '3,5 стакана кефира 0 % жирности', '1 столовая ложка винного уксуса', '4 таблетки сахарозаменителя', 'маленький пучок укропа', 'соль, перец'], recipe: 'Хорошо промыть и мелко нарезать свекольную ботву. Очистить свеклу от кожицы и нарезать соломкой. Выложить свеклу на сковороду, добавить 1 стакан горячей воды, сахарозаменитель, уксус и тушить под крышкой 10 минут. В конце добавить ботву и тушить еще минуты 3. Охладить.\n' +
//                     'Очистить морковь и нарезать соломкой. Протушить морковь на сковороде до полной готовности (15 минут). Сварить и очистить яйца. Нарезать половинками. Соединить все Ингредиенты в одной емкости, приправить по вкусу. Охладить. Залить кефиром и можно подавать.'},
//             {id: 2, img: '/frontend/src/images/recipe/weightDown/2.jpg',  nameRecipe: 'Томатный суп с сельдереем', preparationTime: '15 минут.', timeForPreparing: '10 минут' ingredients: ['600 г помидоров', '200 г моркови', '1 лимон', 'несколько капель табаско', '1 ветка сельдерея с листьями', 'соль и перец'], recipe: 'Помидоры, морковь и сельдерей нарезать на куски примерно по 2 см. Вымыть лимон, снять цедру, разделить на две части и нарезать мелкими кубиками. Все Ингредиенты смешать блендером, приправить солью и перцем, добавить соус табаско. Поставить на час в холодильник.'},
//             {id: 3, img: '/frontend/src/images/recipe/weightDown/3.jpg',  nameRecipe: 'Желтый гаспачо', preparationTime: '10 минут', timeForPreparing: '0 минут' ingredients: ['1 кг желтых помидоров', '1 желтый болгарский перец', '1 желтый болгарский перец', '1 желтый болгарский перец', 'прованские травы', '1 столовая ложка бальзамического уксуса', 'половина чайной ложки сухого чеснока', 'соль, перец'], recipe: 'Промыть овощи. Ошпарить помидоры кипятком, снять кожицу. Очистить перец, снять с него кожу и удалить семена. Пропустить все мелко порезанные овощи через блендер. Добавить томатный сок, травы, чеснок и уксус. Поставить в холодильник на 1 час. Подавать холодным. Можно подавать с гренками из хлеба доктора Дюкана.'},
//             {id: 4, img: '/frontend/src/images/recipe/weightDown/4.jpg',  nameRecipe: 'Холодник по-белорусски', preparationTime: '5-7 минут', timeForPreparing: '15 минут' ingredients: ['400 г щавеля', '1 огурец', '2 яйца', '2 таблетки сахарозаменителя', '3 столовые ложки обезжиренного творога (0 %)', 'пучок зелени (укроп, петрушка, зеленый лук)', 'соль, перец'], recipe: 'Промыть листья щавеля и мелко нарезать. Залить листья кипящей водой и варить 5-7 минут, затем охладить отвар. Мелко нарезать зеленый лук, растереть с солью до появления сока. Нарезать огурцы и белок вареных яиц. Соединить сок зеленого лука с вареными желтками и отваром из щавеля. Посолить, добавить сахарозаменитель. Использовать творог вместо сметаны.'},
//             {id: 5, img: '/frontend/src/images/recipe/weightDown/5.jpg',  nameRecipe: 'Огуречный суп', preparationTime: '10 минут', timeForPreparing: '0 минут' ingredients: ['0 минут', '1 столовая ложка обезжиренного творога (0 %)', '1 столовая ложка густого томатного пюре', '1 зубчик чеснока', 'несколько капель табаско', 'несколько кубиков льда', 'несколько кубиков льда'], recipe: 'Очистить огурец от кожицы, пропустить через блендер с солью, перцем и толченым чесноком. Добавить томатное пюре, соус табаско (по вкусу), творог и кубики льда. Подавать холодным.'},
//             {id: 6, img: '/frontend/src/images/recipe/weightDown/6.jpg',  nameRecipe: 'Холодный томатный суп', preparationTime: '20 минут', timeForPreparing: '0 минут' ingredients: ['1 кг помидоров', '1 луковица', '1 зубчик чеснока', '3 веточки петрушки', '1 веточка базилика', '1 веточка чабера', '1 веточка тимьяна', 'соль и перец'], recipe: 'Вымыть помидоры, очистить от кожи и удалить семена. Разрезать на четыре части. Очистить и порезать на четвертинки лук. Очистить чеснок. Сделать пюре из помидоров, базилика, петрушки, лука, чеснока. Измельчить тимьян и чабер. Добавить к помидорам. Приправить солью и перцем. Перелить суп в супницу и поставить в холодильник. Подавать холодным.'},
//     ],
//     'secondCourse': [
//     ],
//     'desserts': [
//     ],
//
// };

const favorites = [
    { id: 1, test: 'Первое блюдо, добавленное в избранное'}
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger("dev")); // мидвар, который позволяет выводить все логи в консоль

app.post("/auth", (req, res) => {
    const { phone, password } = req.body;
    console.log('body', req.body);
    if (phone && password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].phone === phone && users[i].password === password) {
                console.log('Свой:)')
                return res.json(users[i]);
            }
        }
    }
    res.sendStatus(400);
});

app.get("/trainings", (req, res) => {
    res.json(trainings);
});

app.get("/food", (req, res) => {
    res.json(recipeWeightUp);
});

app.delete("/food", (req, res) => {
    console.log(req.query, "id delete");
});

app.post("/food", (req, res) => {
    console.log(req.body, "body");
    const { value } = req.body;
    console.log(value);
    recipeWeightUp.push(value);
    res.json(recipeWeightUp);
});

app.get("/trainings", (req, res) => {
    res.json(trainings);
});

app.get("/favorites", (req, res) => {
    res.json(favorites);
});

app.post("/favorites", (req, res) => {
    console.log(req.body, "body");
    const { value } = req.body;
    console.log(value);
    if (value) {
        favorites.push(value);
    } else {
        console.log('null не добавляю:)')
    }
    res.json(favorites);
});

app.delete("/favorites", (req, res) => {
    console.log(req.query, "id delete");
});






app.listen(3001, () => {
    console.log("servak start");
});
