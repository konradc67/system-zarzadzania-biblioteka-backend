# System zarządzania biblioteką

[cite_start]W wielu bibliotekach zarządzanie książkami oraz wypożyczeniami jest czasochłonne i często odbywa się ręcznie lub w mało wygodnych systemach[cite: 7]. [cite_start]Powoduje to trudności w sprawdzaniu dostępności książek oraz kontrolowaniu wypożyczeń[cite: 8]. [cite_start]Projekt polega na stworzeniu prostego systemu zarządzania biblioteką, który umożliwi dodawanie książek, wyszukiwanie ich w katalogu oraz obsługę wypożyczeń[cite: 9].

[cite_start]Efektem projektu będzie działający prototyp systemu umożliwiający przejście całego procesu wypożyczenia książki[cite: 10]. [cite_start]Użytkownikami systemu będą bibliotekarz oraz czytelnicy korzystający z biblioteki[cite: 8].

## 🎯 Cel projektu
[cite_start]Celem projektu jest stworzenie działającego systemu zarządzania biblioteką umożliwiającego dodawanie książek, wyszukiwanie ich oraz obsługę wypożyczeń i zwrotów[cite: 12]. [cite_start]Cel zostanie uznany za osiągnięty, jeśli użytkownik będzie mógł przejść cały proces od wyszukania książki do jej wypożyczenia i zwrotu w systemie[cite: 13].

## 📦 Zakres projektu

### Zakres IN:
* [cite_start]stworzenie katalogu książek w systemie [cite: 15]
* [cite_start]dodawanie nowych książek do systemu [cite: 16]
* [cite_start]edytowanie informacji o książkach [cite: 17]
* [cite_start]wyszukiwanie książek po tytule lub autorze [cite: 18]
* [cite_start]rejestracja użytkowników biblioteki [cite: 19]
* [cite_start]wypożyczanie książek [cite: 20]
* [cite_start]zwracanie książek [cite: 21]
* [cite_start]zapisywanie historii wypożyczeń [cite: 22]

### Zakres OUT (Poza zakresem projektu):
* [cite_start]integracja z systemami uczelnianymi lub innymi systemami bibliotek [cite: 24]
* [cite_start]obsługa płatności za przetrzymanie książek [cite: 25]
* [cite_start]tworzenie aplikacji mobilnej [cite: 26]
* [cite_start]integracja z zewnętrznymi bazami książek [cite: 27]
* [cite_start]rozbudowane statystyki i raporty [cite: 28]

---

## 🚀 Jak uruchomić projekt lokalnie?

Do uruchomienia projektu wymagane jest zainstalowane środowisko **Node.js**.

### 1. Pobranie i uruchomienie Backendu
Pobierz kod z repozytorium, przejdź do folderu, zainstaluj wymagane zależności i uruchom serwer. Wszystko to zrobisz po kolei w jednym oknie terminala:
```bash
git clone [https://github.com/konradc67/system-zarzadzania-biblioteka-backend](https://github.com/konradc67/system-zarzadzania-biblioteka-backend)
cd system-zarzadzania-biblioteka-backend
npm install
npm run dev
