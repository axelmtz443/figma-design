import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactPopupContextType {
  isOpen: boolean;
  openPopup: (subject?: string) => void;
  closePopup: () => void;
  subject: string;
}

const ContactPopupContext = createContext<ContactPopupContextType>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
  subject: '',
});

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState('');

  const openPopup = (subject = '') => {
    setSubject(subject);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <ContactPopupContext.Provider value={{ isOpen, openPopup, closePopup, subject }}>
      {children}
    </ContactPopupContext.Provider>
  );
}

export const useContactPopup = () => useContext(ContactPopupContext);
