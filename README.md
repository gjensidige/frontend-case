# Frontend-case

Velkommen til Gjensidige sitt Pokemon-case! ☀

## Oppgaven

### Beskrivelse

I denne oppgaven er målet å lage et Pokemon-kort ved hjelp av API’et [pokeApi](https://pokeapi.co/).

I Gjensidige bruker vi React som det primære javascript-rammeverket. Men om du heller ønsker å bruke et annet rammeverk, er vi selvsagt åpne for det.

Oppsummering av ønsket teknologi:
- React eller annet Javascript-rammeverk
- Stying i egen CSS eller ved hjelp av et valgfritt CSS-rammeverk
- Bruk av fetch fra REST API’ene til [pokeApi](https://pokeapi.co/)
- Bruk av funksjonelle komponenter

Vi har tjuvstartet for deg, og du vil finne alt du trenger for å komme godt i gang i dette repoet.

Ønsket funksjonalitet:
- Hente navn, bilde og annen informasjon om en pokemon fra API-et. Du velger selv hvilke og hvor mange felter du ønsker å bruke.
- Presentere et pokemon-kort i valgfritt design. Du finner et eksempel under, men bruk gjerne fantasien.
- Frivillig: Om du har tid kan du gjerne legge på ekstra funksjonalitet, som feks mulighet til å hente andre/flere pokemons, listevisning, søkefunksjon, randomizer, etc. Eller en helt annen idé du selv har.

Fokusere på god kode, ryddig struktur og en gjennomtenkt løsning. Du måles ikke på antall features :) Justere selv omfanget av oppgaven ut fra din egen tilgjenglige tid.

### Hva finnes i dette repoet?

I denne starteren har vi satt opp et React-prosjekt, som gir deg alt du trenger for å komme i gang med oppgaven.
Du finner blant annet en funksjon for å fetche en pokemon i filen `utils.ts`.
Vi har også typet ut de mest relevante feltene fra dette endepunktet i filen `types.ts`.
Her kan du også eventuelt utvide med flere felter om du ønsker det. Du kan selvsagt også legge til andre endepunkter hvis du vil.

### Eksempel

Her er et _eksempel_ på hvordan oppgaven kan løses. Du står selvsagt fritt til å gjøre det på andre måter. Bruk fantasien =)

<img src="https://github.com/gjensidige/sommerstudent-case/blob/main/bulbasaurCardExample.png" width="300">

## Tilgjenglige Scripts

I denne prosjektmappen, kan du kjøre:

### `npm install`
Installerer alle nødvendige pakker og avhengigheter

### `npm start`

Kjører appen i utviklingsmodus.\
Du kan åpne [http://localhost:3000](http://localhost:3000) for å se appen i nettlesern din.

Appen vil da lastes inn på nytt hver gang du gjør endringer.\
Du vil også se lint feil i konsollen.

### `npm run build`

Bygger appen i mappen: `build`

## Lær mer

Du kan lære mer ved å sjekke ut [Reacts dokumentasjon](https://reactjs.org/).
