@echo off
REM === Proje klasörüne git ===
cd /d "C:\Users\HP\Desktop\akweb"

REM === Git başlat (sadece ilk seferde lazım, sonrasında gerek yok) ===
git init

REM === Dosyaları ekle ===
git add .

REM === İlk commit ===
git commit -m "İlk yükleme"

REM === Uzak repo ekle ===
git remote add origin https://github.com/semyhist/arkakanat-app.git

REM === Branch belirt (master olarak) ===
git branch -M master

REM === GitHub’a gönder ===
git push -u origin master

pause
