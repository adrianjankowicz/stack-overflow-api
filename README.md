# Tags Browser

## Opis

Tags Browser to aplikacja webowa umożliwiająca przeglądanie i wyszukiwanie tagów technologii. Projekt został zbudowany z wykorzystaniem [React](https://reactjs.org/), [Chakra UI](https://chakra-ui.com/) dla stylizacji oraz [Storybook](https://storybook.js.org/) do dokumentacji i testowania komponentów UI.

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
  cd tags-browser
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
