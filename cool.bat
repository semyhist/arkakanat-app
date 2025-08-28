@echo off
setlocal EnableExtensions EnableDelayedExpansion

:: ===============================================================
::  Yeni bir projeyi mevcut (dolu) GitHub reposuna force push ile aktarır
::  Mevcut klasörde .git yoksa kullanılabilir.
::  Kullanım:
::    1) Bu dosyayı yeni projenizin klasörüne kaydedin (örn: push-new-project.bat)
::    2) Çift tıklayın veya cmd ile çalıştırın.
::    3) Script sizden remote repo URL'sini ister.
:: ===============================================================

:: Git var mı?
git --version >nul 2>&1
if errorlevel 1 (
  echo [HATA] Git yuklu degil ya da PATH'te bulunamadi. https://git-scm.com uzerinden yukleyin.
  pause
  exit /b 1
)

:: Mevcut klasörde .git var mi?
if exist ".git" (
  echo [HATA] Bu klasorde zaten .git klasoru var. Bu script, yeni bir projeyi bos klasorde baslatmak icin.
  pause
  exit /b 1
)

:: Remote URL al
set /p REMOTE=Remote repo URL'sini girin (ornegin https://github.com/kullanici/repo.git): 

if "%REMOTE%"=="" (
  echo [HATA] Remote URL girilmedi.
  pause
  exit /b 1
)

:: Git init
echo [ISLEM] Git repo baslatiliyor...
git init

:: Dosyalari ekle
git add .
git commit -m "first commit of new project"

:: Branch master ayarla
git branch -M master

:: Remote bagla
git remote add origin %REMOTE%

:: Force push yap
echo [UYARI] Bu islem uzak repodaki TUM ICERIGI silip yeni projeyi yukleyecek!
echo Devam etmek icin E yazin, iptal icin herhangi bir tusa basin.
set /p CONFIRM=Secim: 
if /I not "%CONFIRM%"=="E" (
  echo [IPTAL] Islemi iptal ettiniz.
  pause
  exit /b 0
)

git push -u origin master --force

if errorlevel 1 (
  echo [HATA] Push basarisiz. Remote URL'yi ve baglantinizi kontrol edin.
) else (
  echo [BILGI] Yeni proje basariyla remote repo'ya aktarıldı.
)

pause
