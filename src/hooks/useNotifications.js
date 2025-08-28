import { useState, useEffect } from 'react';

export const useNotifications = () => {
  const [permission, setPermission] = useState('default');

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert('Bu tarayıcı bildirimleri desteklemiyor.');
      return 'unsupported';
    }
    const status = await Notification.requestPermission();
    setPermission(status);
    return status;
  };

  const scheduleNotification = (raceName, raceDate) => {
    if (Notification.permission !== 'granted') {
      alert('Bildirim gönderebilmek için önce izin vermelisiniz.');
      return;
    }

    if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
      alert('Bildirimler şu anda kurulamıyor. Lütfen sayfayı yenileyip tekrar deneyin.');
      return;
    }

    const raceTime = new Date(raceDate).getTime();
    const timestamp = raceTime - (30 * 60 * 1000); // Yarıştan 30 dk önce

    if (timestamp <= Date.now()) {
      alert('Bu yarış için bildirim zamanı geçmiş.');
      return;
    }

    navigator.serviceWorker.controller.postMessage({
      type: 'SCHEDULE_NOTIFICATION',
      payload: {
        timestamp,
        title: 'Yarış Başlıyor!',
        options: {
          body: `${raceName} 30 dakika içinde başlayacak!`,
          icon: '/aklogo.png',
          tag: `race-notification-${raceName}`
        }
      }
    });

    alert(`Harika! ${raceName} için bildirim ayarlandı. Yarıştan 30 dakika önce haber vereceğiz.`);
  };

  return { permission, requestPermission, scheduleNotification };
};
