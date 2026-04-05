## 🛠️ Stack Technologiczny
* **Backend:** Node.js + Express
---

## 🚀 Jak uruchomić projekt lokalnie?

Do uruchomienia projektu wymagane jest zainstalowane środowisko **Node.js**.

### 1. Pobranie i uruchomienie Backendu
Pobierz kod z repozytorium, przejdź do folderu, zainstaluj wymagane zależności i uruchom serwer. Wszystko to zrobisz po kolei w jednym oknie terminala:
```bash
git clone https://github.com/konradc67/system-zarzadzania-biblioteka-backend
cd system-zarzadzania-biblioteka-backend
npm install
npm run dev
```
Domyślnie serwer nasłuchuje na porcie http://localhost:3000.

⚠️ Ważne uwagi
Przed wysłaniem zmian na GitHub upewnij się, że plik .gitignore zawiera wpis node_modules/, aby nie przesyłać niepotrzebnych plików.

Do poprawnego działania bazy danych należy skonfigurować połączenie w pliku .env na backendzie (pamiętaj, aby nie udostępniać haseł publicznie!).
