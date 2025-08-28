@echo off
setlocal EnableExtensions EnableDelayedExpansion

:: ===============================================================
::  Yeni bir projeyi mevcut GitHub reposuna aktarır.
::  Eğer klasörde .git yoksa yeni repo başlatır,
::  varsa mevcut repo üzerinde commit ve push yapar.
::  Commit mesajı kullanıcıdan alınır.
::  Script kendi kendine kapanmaz, hata/sonucu görebilirsiniz.
:: ===============================================================

:: Git var mı?
git --version >nul 2>&1
if errorlevel 1 (
  echo [HATA] Git yuklu degil ya da PATH'te bulunamadi. https://git-scm.com uzerinden yukleyin.
  goto END
)

:: Commit mesajını kullanıcıdan al
echo Commit mesajinizi girin:
set /p COMMIT_MSG=Mesaj: 
if "!COMMIT_MSG!"=="" set COMMIT_MSG=update project

:: .git var mı?
if not exist ".git" (
  echo [BILGI] Bu klasorde .git bulunamadi. Yeni repo baslatiliyor...
  git init
  git branch -M master
  set NEW_REPO=1
) else (
  echo [BILGI] Mevcut git repo bulundu. Guncelleme moduna gecildi.
  set NEW_REPO=0
)

:: Remote var mi kontrol et
git remote -v >nul 2>&1
if errorlevel 1 (
  set REMOTE=
) else (
  for /f "tokens=2" %%r in ('git remote -v ^| find "origin" ^| find "fetch"') do set REMOTE=%%r
)

if "!REMOTE!"=="" (
  echo Remote repo URL'sini girin (ornegin https://github.com/kullanici/repo.git):
  set /p REMOTE=URL: 
  git remote add origin !REMOTE!
)

:: Degisiklikleri ekle ve commit et
git add .
git commit -m "!COMMIT_MSG!" || echo [UYARI] Commit olusmadi (degisiklik yok olabilir).

:: Push yap
echo Degisiklikleri uzak repoya gondermek istiyor musunuz? [E/H]
set /p PUSH=Secim: 
if /I "!PUSH!"=="E" (
  if !NEW_REPO!==1 (
    echo [UYARI] Bu yeni repo, uzak repodaki tum icerigi silebilir (force push)!
    echo Devam etmek icin E yazin, iptal icin herhangi bir tusa basin.
    set /p CONFIRM=Secim: 
    if /I "!CONFIRM!"=="E" (
      git push -u origin master --force
    ) else (
      echo [IPTAL] Force push iptal edildi.
    )
  ) else (
    git push origin master
  )
) else (
  echo [BILGI] Push atlanarak cikildi.
)

:END
echo.
echo [BILGI] Script tamamlandi. Hatalar/sonuclar yukarida listelenmistir.
pause
