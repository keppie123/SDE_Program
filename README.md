# SDE_Program
Software Design Program

Introductie
De samenwerking tussen ons was erg goed en de samenwerking was erg fijn.
Kevin heeft de basis van het programma gemaakt in overleg met Mats.
Nadat de basis klaar was, heeft Mats de adapter gemaakt terwijl Kevin verder ging met het werkend maken van het project.
Bijna alle design patterns werden natuurlijk geimplementeerd behalve de Adapter dus daar moest appart aan gewerkt worden.

Indicatie
De toegepaste creational patterns zijn de Factory method en de Singleton.
De Factory method is toegepast door middel van de class MeatCreator. In deze class zitten de functie createDefaultMeat voor het standaard gebruik bij het aanmaken van een Meat, en een functie createMeat wanneer je zelf de waardes wilt bepalen van de gemaakte Meat.
De Singleton is toegepast door middel van de class "Beef" aangezien hier maar één instantie van kan zijn. Doordat als hij aangemaakt word er eerst word gekeken of dat hij er al is of niet, hierdoor vorkom je dat er geen extra classes kunnen zijn.

Opninie
De toegepaste structural pattern is de Adapter.
Deze Adapter is toegepast zodat de prijs van de Chicken en de Steak samengevoegd kunnen worden bij het totaal.

Refactoren
De toegepaste behavioural design pattern is Chain of responsibility.
Dit is toegpast door de Meat.js en de Beef.js doordat de Beef niet zichzelf aan kan maken maar dit alleen maar kan door een nieuwe Meat aan te maken die dan Beef is.

Hieronder staat nog kort de toegepaste patterns. 

Creational - Singleton & Factory method

Structural - Adapter

Behavioural - Chain of Responsibility

De herkansing

Ten opzichte van de eerste inlevering is bij ons het volgende veranderd;

De singleton is nu goed toegepast in de class Beef die Meat extend.

De tweede creational pattern is nu niet de Builder maar de Factory method.

De Factory method is vervolgens toegepast in de MeatCreator method.

Credentials
Door [Mats Bouwense](https://github.com/MatsBNL) Student nummer: 83254

Door [Kevin Vreeke](https://github.com/vree0028) Student nummer: 81874

Github Link naar het programma
[SDE Programma Kevin Vreeke & Mats Bouwense](https://github.com/vree0028/SDE_Program)
