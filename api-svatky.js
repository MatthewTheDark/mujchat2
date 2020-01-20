const url = require('url');
const dateFormat = require('dateformat');

const SVATKY = new Array();
SVATKY[1] = [ "", 'Nový rok', 'Karina', 'Radmila', 'Diana', 'Dalimil', 'Tři králové', 'Vilma', 'Čestmír', 'Vladan', 'Břetislav', 'Bohdana', 'Pravoslav', 'Edita', 'Radovan', 'Alice', 'Ctirad', 'Drahoslav', 'Vladislav', 'Doubravka', 'Ilona', 'Běla', 'Slavomír', 'Zdeněk', 'Milena', 'Miloš', 'Zora', 'Ingrid', 'Otýlie', 'Zdislava', 'Robin', 'Marika'];
SVATKY[2] = [ "", 'Hynek', 'Nela a Hromnice', 'Blažej', 'Jarmila', 'Dobromila', 'Vanda', 'Veronika', 'Milada', 'Apolena', 'Mojmír', 'Božena', 'Slavěna', 'Věnceslav', 'Valentýn', 'Jiřina', 'Ljuba', 'Miloslava', 'Gizela', 'Patrik', 'Oldřich', 'Lenka', 'Petr', 'Svatopluk', 'Matěj', 'Liliana', 'Dorota', 'Alexandr', 'Lumír', 'Horymír'];
SVATKY[3] = [ "", 'Bedřich', 'Anežka', 'Kamil', 'Stela', 'Kazimír', 'Miroslav', 'Tomáš', 'Gabriela', 'Františka', 'Viktorie', 'Anděla', 'Řehoř', 'Růžena', 'Rút a Matylda', 'Ida', 'Elena a Herbert', 'Vlastimil', 'Eduard', 'Josef', 'Světlana', 'Radek', 'Leona', 'Ivona', 'Gabriel', 'Marián', 'Emanuel', 'Dita', 'Soňa', 'Taťána', 'Arnošt', 'Kvido'];
SVATKY[4] = [ "",'Hugo', 'Erika', 'Richard', 'Ivana', 'Miroslava', 'Vendula', 'Heřman a Hermína', 'Ema', 'Dušan', 'Darja', 'Izabela', 'Julius', 'Aleš', 'Vincenc', 'Anastázie', 'Irena', 'Rudolf', 'Valérie', 'Rostislav', 'Marcela', 'Alexandra', 'Evžénie', 'Vojtěch', 'Jiří', 'Marek', 'Oto', 'Jaroslav', 'Vlastislav', 'Robert', 'Blahoslav'];
SVATKY[5] = [ "",'Svátek práce', 'Zikmund', 'Alexej', 'Květoslav', 'Klaudie', 'Radoslav', 'Stanislav', 'Statní svátek - Ukončení II. světové války', 'Ctibor', 'Blažena', 'Svatava', 'Pankrác', 'Servác', 'Bonifác', 'Žofie', 'Přemysl', 'Aneta', 'Nataša', 'Ivo', 'Zbyšek', 'Monika', 'Emil', 'Vladimír', 'Jana', 'Viola', 'Filip', 'Valdemar', 'Vilém', 'Maxim', 'Ferdinand', 'Kamila'];
SVATKY[6] = [ "",'Laura', 'Jarmil', 'Tamara', 'Dalibor', 'Dobroslav', 'Norbert', 'Iveta', 'Medard', 'Stanislava', 'Gita', 'Bruno', 'Antonie', 'Antonín', 'Roland', 'Vít', 'Zbyněk', 'Adolf', 'Milan', 'Leoš', 'Květa', 'Alois', 'Pavla', 'Zdeňka', 'Jan', 'Ivan', 'Adriana', 'Ladislav', 'Lubomír', 'Petr a Pavel', 'Šárka'];
SVATKY[7] = [ "",'Jaroslava', 'Patricie', 'Radomír', 'Prokop', 'Státní svátek , Cyril a Metoděj', 'Státní svátek , Mistr Jan Hus', 'Bohuslava', 'Nora', 'Drahoslava', 'Libuše a Amálie', 'Olga', 'Bořek', 'Markéta', 'Karolína', 'Jindřich', 'Luboš', 'Martina', 'Drahomíra', 'Čeněk', 'Ilja', 'Vítězslav', 'Magdaléna', 'Libor', 'Kristýna', 'Jakub', 'Anna', 'Věroslav', 'Viktor', 'Marta', 'Bořivoj', 'Ignác'];
SVATKY[8] = [ "",'Oskar', 'Gustav', 'Miluše', 'Dominik', 'Kristián', 'Oldřiška', 'Lada', 'Soběslav', 'Roman', 'Vavřinec', 'Zuzana', 'Klára', 'Alena', 'Alan', 'Hana', 'Jáchym', 'Petra', 'Helena', 'Ludvík', 'Bernard', 'Johana', 'Bohuslav', 'Sandra', 'Bartoloměj', 'Radim', 'Luděk', 'Otakar', 'Augustýn', 'Evelína', 'Vladěna', 'Pavlína'];
SVATKY[9] = [ "",'Linda a Samuel', 'Adéla', 'Bronislav', 'Jindřiška', 'Boris', 'Boleslav', 'Regína', 'Mariana', 'Daniela', 'Irma', 'Denisa', 'Marie', 'Lubor', 'Radka', 'Jolana', 'Ludmila', 'Naděžda', 'Kryštof', 'Zita', 'Oleg', 'Matouš', 'Darina', 'Berta', 'Jaromír', 'Zlata', 'Andrea', 'Jonáš', 'Václav', 'Michal', 'Jeroným'];
SVATKY[10] = [ "",'Igor', 'Olívie a Oliver', 'Bohumil', 'František', 'Eliška', 'Hanuš', 'Justýna', 'Věra', 'Štefan a Sára', 'Marina', 'Andrej', 'Marcel', 'Renáta', 'Agáta', 'Tereza', 'Havel', 'Hedvika', 'Lukáš', 'Michaela', 'Vendelín', 'Brigita', 'Sabina', 'Teodor', 'Nina', 'Beáta', 'Erik', 'Šarlota a Zoe', 'Statní svátek - Vznik Československa', 'Silvie', 'Tadeáš', 'Štěpánka'];
SVATKY[11] = [ "",'Felix', 'Památka zesnulých', 'Hubert', 'Karel', 'Miriam', 'Liběna', 'Saskie', 'Bohumír', 'Bohdan', 'Evžen', 'Martin', 'Benedikt', 'Tibor', 'Sáva', 'Leopold', 'Otmar', 'Mahulena', 'Romana', 'Alžběta', 'Nikola', 'Albert', 'Cecílie', 'Klement', 'Emílie', 'Kateřina', 'Artur', 'Xenie', 'René', 'Zina', 'Ondřej'];
SVATKY[12] = [ "",'Iva', 'Blanka', 'Svatoslav', 'Barbora', 'Jitka', 'Mikuláš', 'Ambrož', 'Květoslava', 'Vratislav', 'Julie', 'Dana', 'Simona', 'Lucie', 'Lýdie', 'Radana', 'Albína', 'Daniel', 'Miloslav', 'Ester', 'Dagmar', 'Natálie', 'Šimon', 'Vlasta', 'Adam a Eva , Štědrý den', '1. svátek vánoční', 'Štěpán , 2. svátek vánoční', 'Žaneta', 'Bohumila', 'Judita', 'David', 'Silvestr'];

exports.apiSvatky = function (req, res) {
    res.writeHead(200, {
        "Content-type": "application/json",
    });
    let obj = {};
    if (req.parameters.m && req.parameters.d ) {
        let d = req.parameters.d;
        let m = req.parameters.m;
        obj.datum = d+"."+m+".";
        obj.svatek = SVATKY[m][d];
    } else {
        let d = new Date();
        obj.datum = dateFormat(d, "dd.mm.yyyy");
        obj.svatek = SVATKY[d.getMonth()+1][d.getDate()];
        d.setDate(d.getDate() + 1);
        obj.svatekZitra = SVATKY[d.getMonth()+1][d.getDate()];
    }
    res.end(JSON.stringify(obj));
};