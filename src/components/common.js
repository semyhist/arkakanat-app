import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Flag, Trophy, ArrowRight, Clock } from 'lucide-react';

// Seans zamanlarını İstanbul saatine çeviren yardımcı fonksiyon
export const convertToIstanbulTime = (date, time) => {
  try {
    const utcDate = new Date(`${date}T${time}`);
    return format(utcDate, 'dd MMMM yyyy, cccc HH:mm', { locale: tr });
  } catch (e) {
    console.error("Invalid date or time format:", date, time);
    return "Tarih bilgisi mevcut değil";
  }
};

export const getSessionIcon = (sessionName) => {
  switch (sessionName) {
    case 'Race':
      return <Flag size={20} className="text-red-400" />;
    case 'Qualifying':
      return <Trophy size={20} className="text-blue-400" />;
    case 'Sprint':
      return <ArrowRight size={20} className="text-yellow-400" />;
    default:
      return <Clock size={20} className="text-gray-400" />;
  }
};

export const getSessionNameTR = (sessionName) => {
  switch (sessionName) {
    case 'Race':
      return 'Yarış';
    case 'Qualifying':
      return 'Sıralama Turu';
    case 'Sprint':
      return 'Sprint Yarışı';
    case 'FirstPractice':
      return '1. Antrenman';
    case 'SecondPractice':
      return '2. Antrenman';
    case 'ThirdPractice':
      return '3. Antrenman';
    default:
      return sessionName;
  }
};