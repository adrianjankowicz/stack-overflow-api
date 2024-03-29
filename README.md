# Tags Browser

## Opis

Tags Browser to zaawansowana aplikacja webowa dedykowana przeglądaniu i wyszukiwaniu tagów technologii, stworzona z myślą o użytkownikach platformy Stack Overflow. Ten projekt łączy w sobie nowoczesne technologie, takie jak [React](https://reactjs.org/) dla dynamicznego i responsywnego interfejsu użytkownika, [Chakra UI](https://chakra-ui.com/) dla eleganckiej i spójnej stylizacji, oraz [Storybook](https://storybook.js.org/), który służy do dokumentacji i testowania komponentów UI. Całość została zaprojektowana w taki sposób, aby efektywnie wykorzystywać limity darmowego API Stack Exchange, dzięki czemu maksymalizowana jest ilość dostępnych operacji bez konieczności przekraczania bezpłatnego progu.

Kładąc szczególny nacisk na optymalizację procesów związanych z zapytaniami do API, aplikacja oferuje użytkownikom szybkie i efektywne wykonanie zadania, minimalizując czas oczekiwania na odpowiedź. Inteligentne cachowanie odpowiedzi oraz optymalizacja zapytań gwarantują płynny i szybki dostęp do danych. Dzięki temu, Tags Browser nie tylko wykorzystuje w pełni dostępne zasoby, ale także zapewnia wyjątkowo szybką responsywność, stając się przy tym aplikacją wyjątkowo przyjazną dla użytkownika.

## Funkcjonalności

- **Przeglądanie tagów**: Użytkownicy mogą przeglądać różne tagi technologii.
- **Paginacja**: Tagi są wyświetlane z podziałem na strony.
- **Tryb ciemny/jasny**: Użytkownicy mogą przełączać między trybem ciemnym a jasnym.

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium projektu:

```bash
git clone https://github.com/adrianjankowicz/stack-overflow-api.git
```

2. Przejdź do katalogu projektu:

```bash
cd stack-overflow-api
```

3. Zainstaluj zależności:

```bash
npm install
```

4. Uruchom projekt:

```bash
npm start
```


Projekt zostanie uruchomiony na `http://localhost:3000`.

## Storybook

Aby uruchomić Storybook i zobaczyć komponenty UI, wykonaj następujący krok:

```bash
npm run storybook
```


Storybook będzie dostępny na `http://localhost:6006`.

## Struktura projektu

- `src/components`: Katalog zawierający komponenty React.
- `src/types`: Typy TypeScript używane w projekcie.
- `src/api`: Logika związana z komunikacją z API.
- `.storybook`: Konfiguracja i ustawienia dla Storybook.

## Technologie

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
